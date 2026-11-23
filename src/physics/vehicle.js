// 車両運動モデル（4輪・荷重移動・コンバインドスリップ・ドライブトレイン）
// 座標: x=東, z=南。heading h の前方ベクトル f=(sin h, cos h), 右ベクトル r=(-cos h, sin h)
// yawRate w: 右旋回(上から見て時計回り)を正。dh/dt = -w

const G = 9.81;

// トラクションコントロールの段階配分：許容スリップ＝ピークスリップ比×1.1×10^((10-L)/9)
// （L10≒ピーク付近、L1≒ピークの約11倍＝かなり空転を許す）
const TCS_MIN_SLIP = 1.1, TCS_RANGE = 10;
const TCS_CUT_RATE = 9, TCS_RELEASE_RATE = 2.5; // 絞る速さ／戻す速さ[1/s]

// true/false（旧設定）または 0〜10 の数値をレベルに変換
function levelOf(v, def) {
  if (v === true) return 10;
  if (v === false) return 0;
  if (typeof v === 'number') return Math.max(0, Math.min(10, Math.round(v)));
  return def;
}
const RHO = 1.2;
const TIRE_B = 2.08, TIRE_C = 1.4; // s=1でピーク、滑走域でピークの約80%

function tireCurve(s) {
  return Math.sin(TIRE_C * Math.atan(TIRE_B * s));
}

export class Vehicle {
  constructor(spec, opts = {}) {
    this.setSpec(spec);
    this.x = 0; this.z = 0; this.h = 0;
    this.vu = 0; this.vv = 0; this.w = 0;
    this.steer = 0;
    this.wF = 0; this.wR = 0;
    this.rpm = spec.idle; this.gear = 1;
    this.shiftTimer = 0; this.boost = 0;
    this.axF = 0; this.ayF = 0; this.axAcc = 0; this.ayAcc = 0;
    this.spinF = 0; this.spinR = 0;
    this.pitch = 0; this.roll = 0;
    this.slip = 0; this.slipLong = 0;
    this.input = { throttle: 0, brake: 0, steer: 0 };
    this.auto = !!opts.auto; // オートマ
    // ABS・トラクションコントロールの効き（0=OFF、1〜10。10が最も強い）
    this.absLevel = levelOf(opts.abs, 10);
    this.tcsLevel = levelOf(opts.tcs, 0);
    this.limiterHit = 0;
    this.wheelLoads = [0, 0, 0, 0];
    this.wheelSlip = [0, 0, 0, 0];
    this.reverseHold = 0;
    this.offRoad = 0;
  }

  setSpec(s) {
    this.spec = s;
    this.m = s.mass;
    this.L = s.wheelbase;
    this.b = this.L * s.frontWeight; // CG→後軸
    this.a = this.L - this.b; // CG→前軸
    this.Iz = (s.mass * (s.car.length ** 2 + s.car.width ** 2)) / 12 * 0.95;
    this.Iw = 1.1 * s.car.inertiaK; // 1輪あたり
    this.wheels = [
      { pu: this.a, pv: -s.trackF / 2, front: true },
      { pu: this.a, pv: s.trackF / 2, front: true },
      { pu: -this.b, pv: -s.trackR / 2, front: false },
      { pu: -this.b, pv: s.trackR / 2, front: false },
    ];
  }

  place(x, z, h, speed = 0) {
    this.x = x; this.z = z; this.h = h;
    this.vu = speed; this.vv = 0; this.w = 0;
    const R = this.spec.tireRadius;
    this.wF = this.wR = speed / R;
    this.gear = speed > 1 ? this.bestGear(speed) : 1;
    this.rpm = Math.max(this.spec.idle, this.wheelRpm());
    this.shiftTimer = 0;
  }

  get speed() { return Math.hypot(this.vu, this.vv); }
  get kmh() { return this.vu * 3.6; }
  fwd() { return [Math.sin(this.h), Math.cos(this.h)]; }
  right() { return [-Math.cos(this.h), Math.sin(this.h)]; }

  ratio(g = this.gear) {
    const s = this.spec;
    if (g > 0) return s.gears[g - 1] * s.final;
    if (g < 0) return -s.reverse * s.final;
    return 0;
  }

  drivenOmega() {
    const d = this.spec.drive;
    if (d === 'FF') return this.wF;
    if (d === 'FR') return this.wR;
    return (this.wF + this.wR) / 2;
  }

  wheelRpm(g = this.gear) {
    return Math.abs((this.drivenOmega() * this.ratio(g) * 60) / (2 * Math.PI));
  }

  bestGear(speed) {
    const s = this.spec;
    for (let g = 1; g <= s.gears.length; g++) {
      const rpm = ((speed / s.tireRadius) * s.gears[g - 1] * s.final * 60) / (2 * Math.PI);
      if (rpm < s.redline * 0.75) return g;
    }
    return s.gears.length;
  }

  shiftUp() {
    if (this.gear < this.spec.gears.length) {
      if (this.gear === -1 || this.gear === 0) { this.gear++; this.shiftTimer = 0.08; return; }
      this.gear++; this.shiftTimer = this.spec.shiftTime;
    }
  }

  shiftDown() {
    if (this.gear > 1) { this.gear--; this.shiftTimer = this.spec.shiftTime; }
    else if (this.gear === 1) { this.gear = 0; }
    else if (this.gear === 0 && this.speed < 2.5) { this.gear = -1; this.shiftTimer = 0.1; }
  }

  autoShift(dt) {
    const s = this.spec;
    const inp = this.input;
    // 停止付近：ブレーキでR、アクセルで1速
    if (this.speed < 1.0) {
      if (inp.brake > 0.5 && inp.throttle < 0.05) {
        this.reverseHold += dt;
        if (this.reverseHold > 0.45 && this.gear !== -1) { this.gear = -1; }
      } else this.reverseHold = 0;
      if (inp.throttle > 0.1 && this.gear <= 0 && this.vu > -0.5) this.gear = 1;
    }
    this.shiftCool = Math.max(0, (this.shiftCool || 0) - dt);
    if (this.gear < 1 || this.shiftTimer > 0) return;
    const wr = this.wheelRpm();
    const rpm = Math.min(wr, Math.abs((this.vu / s.tireRadius) * this.ratio() * 60 / (2 * Math.PI)) * 1.12);
    if (wr > s.redline - 120 && rpm > s.redline * 0.8 && this.gear < s.gears.length) { this.shiftUp(); this.shiftCool = 1.0; return; }
    if (this.gear > 1 && this.shiftCool <= 0) {
      const lower = (rpm * s.gears[this.gear - 2]) / s.gears[this.gear - 1];
      const thr = inp.brake > 0.2 ? 0.72 : 0.5;
      if (rpm < s.redline * thr && lower < s.redline - 700) this.shiftDown();
    }
  }

  // 入力（AT時のリバースはブレーキ↔アクセル入替）
  effectiveInputs() {
    let { throttle, brake } = this.input;
    if (this.auto && this.gear === -1) {
      const t = throttle; throttle = brake; brake = t;
    }
    return { throttle, brake };
  }

  step(dt) {
    const s = this.spec;
    const R = s.tireRadius;
    if (this.auto) this.autoShift(dt);
    let { throttle, brake } = this.effectiveInputs();
    if (this.shiftTimer > 0) this.shiftTimer -= dt;
    const shifting = this.shiftTimer > 0;

    const speed = this.speed;
    // ---- ステアリング（速度感応・カウンター許容） ----
    const target = this.input.steer;
    const beta = Math.atan2(this.vv, Math.max(Math.abs(this.vu), 2));
    let lim = Math.min(s.steerLock, (this.L * s.mu * G) / Math.max(speed * speed, 1) + s.peakAngle * 1.25);
    lim = Math.max(lim, 0.06);
    let desired = target * lim;
    // カウンターステア：滑っている方向へは車体スリップ角分まで追加で切れる
    if (target !== 0 && Math.sign(target) === Math.sign(beta)) desired = target * Math.min(s.steerLock, lim + Math.abs(beta) * 1.1);
    const rate = (target === 0 ? 3.2 : 2.4) * dt;
    this.steer += Math.max(-rate, Math.min(rate, desired - this.steer));
    const delta = this.steer;
    const cd = Math.cos(delta), sd = Math.sin(delta);

    // ---- 荷重 ----
    const v2 = this.vu * this.vu;
    const q = 0.5 * RHO * v2;
    const dfF = q * s.area * s.clF;
    const dfR = q * s.area * s.clR;
    const W = this.m * G;
    const h = s.cgHeight;
    const longT = (this.m * this.axF * h) / this.L;
    const latT = this.m * this.ayF * h;
    const fzF = (W * this.b) / this.L - longT + dfF;
    const fzR = (W * this.a) / this.L + longT + dfR;
    const latF = (latT * s.rollFront) / s.trackF;
    const latR = (latT * (1 - s.rollFront)) / s.trackR;
    const loads = this.wheelLoads;
    loads[0] = Math.max(0, fzF / 2 + latF); // 左前（右旋回で外輪=左が増加）
    loads[1] = Math.max(0, fzF / 2 - latF);
    loads[2] = Math.max(0, fzR / 2 + latR);
    loads[3] = Math.max(0, fzR / 2 - latR);
    const fz0 = W / 4;

    // ---- エンジン / ドライブトレイン ----
    const ratio = this.ratio();
    const engaged = ratio !== 0 && !shifting;
    let rpm;
    const wheelRpm = this.wheelRpm();
    let slipping = false;
    if (engaged) {
      // 半クラッチ：発進回転数までクラッチを滑らせる
      const launch = s.idle * 1.4 + throttle * (s.redline * 0.5 - s.idle);
      if (wheelRpm < launch && Math.abs(this.gear) === 1) {
        slipping = true;
        rpm = this.rpm + (launch - this.rpm) * Math.min(1, dt * 12);
      } else if (wheelRpm < s.idle * 1.2) {
        slipping = true;
        rpm = this.rpm + (s.idle * 1.2 - this.rpm) * Math.min(1, dt * 12);
      } else rpm = wheelRpm;
    } else {
      const tgt = s.idle + throttle * (s.limiter - s.idle);
      const k = tgt > this.rpm ? 8 : 3;
      rpm = this.rpm + (tgt - this.rpm) * Math.min(1, dt * k);
    }
    // ブースト
    const btgt = s.boostTarget(rpm) * throttle;
    const btau = btgt > this.boost ? Math.max(0.02, s.turboLag) : 0.12;
    this.boost += (btgt - this.boost) * Math.min(1, dt / btau);
    let thr = throttle;
    if (rpm >= s.limiter) { thr = 0; this.limiterHit = 0.08; }
    if (this.limiterHit > 0) { this.limiterHit -= dt; thr = 0; }
    // TCS
    // トラクションコントロール：レベルごとの「許容スリップ」を超えないようスロットルを自動で絞る（フィードバック制御）。
    // 低い段階ほど大きな空転を許し、10で空転をほぼ抑える。車の馬力に関係なく段階ごとの効きが揃う。
    if (this.tcsLevel > 0) {
      const target = s.peakRatio * TCS_MIN_SLIP * Math.pow(TCS_RANGE, (10 - this.tcsLevel) / 9);
      const over = Math.min(2, (this.slipLong - target) / target);
      this.tcsCut = Math.max(0, Math.min(0.95, (this.tcsCut || 0) + dt * (over > 0 ? TCS_CUT_RATE * over : -TCS_RELEASE_RATE)));
      thr *= 1 - this.tcsCut;
    } else this.tcsCut = 0;
    const Te = s.fullTorque(rpm, this.boost) * thr;
    const Tf = (s.maxTorque * (0.03 + 0.12 * (rpm / s.redline))) * (1 - thr);
    let Teng = Te - Tf;
    if (rpm <= s.idle * 1.02 && Teng < 0) Teng = 0;
    this.rpm = Math.max(s.idle * 0.9, Math.min(s.limiter + 50, rpm));

    let Tdrive = 0;
    if (engaged) Tdrive = Teng * ratio * 0.92;
    const Ie = s.engineInertia * ratio * ratio * (engaged && !slipping ? 1 : 0);

    // 駆動配分
    let tF = 0, tR = 0, IF = this.Iw * 2, IR = this.Iw * 2;
    if (s.drive === 'FF') { tF = Tdrive; IF += Ie; }
    else if (s.drive === 'FR') { tR = Tdrive; IR += Ie; }
    else { tF = Tdrive * s.awdFront; tR = Tdrive * (1 - s.awdFront); IF += Ie * s.awdFront; IR += Ie * (1 - s.awdFront); }

    // ブレーキ
    let bF = s.brakeTorque * brake * s.brakeBias;
    let bR = s.brakeTorque * brake * (1 - s.brakeBias);

    // ---- タイヤ力 ----
    let Fu = 0, Fv = 0, Tz = 0;
    let FxF = 0, FxR = 0, kF = 0, kR = 0; // 軸ごとの縦力と縦剛性
    let slipMax = 0, slipLong = 0;
    const kp = s.peakRatio, ap = s.peakAngle;
    for (let i = 0; i < 4; i++) {
      const wh = this.wheels[i];
      const vuw = this.vu - this.w * wh.pv;
      const vvw = this.vv + this.w * wh.pu;
      let vl, vt;
      if (wh.front) { vl = vuw * cd + vvw * sd; vt = -vuw * sd + vvw * cd; }
      else { vl = vuw; vt = vvw; }
      const om = wh.front ? this.wF : this.wR;
      const vden = Math.max(Math.abs(vl), 4);
      const kappa = (om * R - vl) / vden;
      const alpha = Math.atan2(vt, Math.max(Math.abs(vl), 1.5));
      const Fz = loads[i];
      const mu = s.mu * Math.max(0.6, 1 - 0.08 * (Fz / fz0 - 1)) * (this.offRoad ? 0.7 : 1);
      const sx = kappa / kp, sy = alpha / ap;
      const sm = Math.hypot(sx, sy);
      let Fx = 0, Fy = 0, slope = 0;
      if (sm > 1e-6) {
        const Fm = mu * Fz * tireCurve(sm);
        Fx = (Fm * sx) / sm; Fy = (-Fm * sy) / sm;
        // 縦剛性（陰解法用）
        const sx2 = (kappa + 0.01) / kp;
        const sm2 = Math.hypot(sx2, sy);
        const Fx2 = (mu * Fz * tireCurve(sm2) * sx2) / sm2;
        slope = Math.max(0, (Fx2 - Fx) / 0.01);
      } else {
        slope = (mu * Fz * TIRE_B * TIRE_C) / kp;
      }
      this.wheelSlip[i] = sm;
      if (sm > slipMax) slipMax = sm;
      if (Math.abs(kappa) > slipLong) slipLong = Math.abs(kappa);
      let fu, fv;
      if (wh.front) { fu = Fx * cd - Fy * sd; fv = Fx * sd + Fy * cd; FxF += Fx; kF += (slope * R) / vden; }
      else { fu = Fx; fv = Fy; FxR += Fx; kR += (slope * R) / vden; }
      Fu += fu; Fv += fv;
      Tz += wh.pu * fv - wh.pv * fu;
    }
    this.slip = slipMax;
    this.slipLong = slipLong;

    // ---- ABS ----
    if (this.absLevel > 0 && brake > 0) {
      const lockF = this.wF * R - this.vu;
      const lockR = this.wR * R - this.vu;
      const lim = -kp * (2.0 - 0.09 * this.absLevel) * Math.max(Math.abs(this.vu), 4);
      const keep = 1 - 0.065 * this.absLevel;
      if (lockF < lim) bF *= keep;
      if (lockR < lim) bR *= keep;
    }

    // ---- 車輪回転（陰解法） ----
    const integrateAxle = (om, T, Fx, kslope, I, Tb) => {
      let o = om + (dt * (T - R * Fx)) / (I + dt * R * kslope);
      const dB = (Tb * dt) / (I + dt * R * kslope);
      if (Math.abs(o) <= dB) o = 0;
      else o -= Math.sign(o) * dB;
      return o;
    };
    if (s.drive === 'AWD' && engaged && !slipping) {
      // センターデフ直結扱い
      const Isum = IF + IR;
      const o = (this.wF + this.wR) / 2;
      const nw = integrateAxle(o, Tdrive, FxF + FxR, kF + kR, Isum, bF + bR);
      this.wF = this.wR = nw;
    } else {
      this.wF = integrateAxle(this.wF, tF, FxF, kF, IF, bF);
      this.wR = integrateAxle(this.wR, tR, FxR, kR, IR, bR);
    }

    // ---- 空気抵抗・転がり抵抗 ----
    const dragF = 0.5 * RHO * s.cd * s.area * speed * speed;
    if (speed > 0.01) {
      Fu -= (dragF * this.vu) / speed;
      Fv -= (dragF * this.vv) / speed;
    }
    const rr = 0.011 * W + (this.offRoad ? 0.08 * W : 0);
    if (Math.abs(this.vu) > 0.05) Fu -= Math.sign(this.vu) * Math.min(rr, Math.abs(this.vu) * this.m / dt * 0.5);

    // ---- 車体運動 ----
    const ax = Fu / this.m, ay = Fv / this.m;
    this.vu += (ax + this.w * this.vv) * dt;
    this.vv += (ay - this.w * this.vu) * dt;
    this.w += (Tz / this.Iz) * dt;

    // 低速での停止処理
    if (speed < 1.2 && throttle < 0.05 && (brake > 0.05 || speed < 0.25)) {
      const k = Math.exp(-dt * (brake > 0.05 ? 10 : 4));
      this.vu *= k; this.vv *= k; this.w *= k;
      if (brake > 0.05) { this.wF *= k; this.wR *= k; }
    }
    if (speed < 3) this.vv *= Math.exp(-dt * 2); // 低速横すべり抑制

    const tau = s.loadTau;
    this.axF += (ax - this.axF) * Math.min(1, dt / tau);
    this.ayF += (ay - this.ayF) * Math.min(1, dt / tau);

    const f0 = Math.sin(this.h), f1 = Math.cos(this.h);
    const r0 = -f1, r1 = f0;
    this.x += (this.vu * f0 + this.vv * r0) * dt;
    this.z += (this.vu * f1 + this.vv * r1) * dt;
    this.h -= this.w * dt;

    this.spinF += this.wF * dt;
    this.spinR += this.wR * dt;
    const softness = 0.012 * (s.loadTau / 0.12);
    this.pitch += (-this.axF * softness * 0.6 - this.pitch) * Math.min(1, dt * 8);
    this.roll += (this.ayF * softness - this.roll) * Math.min(1, dt * 8);
  }

  // ワールド速度
  worldVel() {
    const f0 = Math.sin(this.h), f1 = Math.cos(this.h);
    return [this.vu * f0 - this.vv * f1, this.vu * f1 + this.vv * f0];
  }

  setWorldVel(vx, vz) {
    const f0 = Math.sin(this.h), f1 = Math.cos(this.h);
    this.vu = vx * f0 + vz * f1;
    this.vv = -vx * f1 + vz * f0;
  }

  // 衝突インパルス（静止壁）。p: 接触点(world), n: 押し戻し方向(単位), depth: 侵入量
  wallImpulse(px, pz, nx, nz, depth, e = 0.15, mu = 0.35) {
    const rx = px - this.x, rz = pz - this.z;
    let [vx, vz] = this.worldVel();
    const pvx = vx + this.w * -rz, pvz = vz + this.w * rx;
    const vn = pvx * nx + pvz * nz;
    this.x += nx * depth; this.z += nz * depth;
    if (vn >= 0) return 0;
    const rn = rx * nz - rz * nx;
    const j = (-(1 + e) * vn) / (1 / this.m + (rn * rn) / this.Iz);
    vx += (j * nx) / this.m; vz += (j * nz) / this.m;
    this.w += (j * rn) / this.Iz;
    // 摩擦
    const tx = -nz, tz = nx;
    const vt = pvx * tx + pvz * tz;
    const rt = rx * tz - rz * tx;
    let jt = -vt / (1 / this.m + (rt * rt) / this.Iz);
    jt = Math.max(-mu * j, Math.min(mu * j, jt));
    vx += (jt * tx) / this.m; vz += (jt * tz) / this.m;
    this.w += (jt * rt) / this.Iz;
    this.setWorldVel(vx, vz);
    // 車輪も追従
    const R = this.spec.tireRadius;
    this.wF = this.wF * 0.7 + (this.vu / R) * 0.3;
    if (this.spec.drive !== 'FR') this.wR = this.wR * 0.7 + (this.vu / R) * 0.3;
    return j;
  }

  corners(pad = 0) {
    const s = this.spec.car;
    const hl = s.length / 2 + pad, hw = s.width / 2 + pad;
    const f0 = Math.sin(this.h), f1 = Math.cos(this.h);
    const r0 = -f1, r1 = f0;
    const out = [];
    for (const [u, v] of [[hl, -hw], [hl, hw], [-hl, -hw], [-hl, hw], [0, -hw], [0, hw]]) {
      out.push([this.x + f0 * u + r0 * v, this.z + f1 * u + r1 * v]);
    }
    return out;
  }
}

// 車同士の衝突（3円近似）
export function collideCars(A, B) {
  const ca = circles(A), cb = circles(B);
  let total = 0;
  for (const a of ca) for (const b of cb) {
    const dx = a[0] - b[0], dz = a[1] - b[1];
    const d = Math.hypot(dx, dz);
    const minD = a[2] + b[2];
    if (d >= minD || d < 1e-4) continue;
    const nx = dx / d, nz = dz / d;
    const depth = minD - d;
    const px = b[0] + nx * b[2], pz = b[1] + nz * b[2];
    total += pairImpulse(A, B, px, pz, nx, nz, depth);
  }
  return total;
}

function circles(c) {
  const s = c.spec.car;
  const r = s.width / 2;
  const off = s.length / 2 - r;
  const f0 = Math.sin(c.h), f1 = Math.cos(c.h);
  return [[c.x + f0 * off, c.z + f1 * off, r], [c.x, c.z, r], [c.x - f0 * off, c.z - f1 * off, r]];
}

function pairImpulse(A, B, px, pz, nx, nz, depth) {
  const ma = A.m, mb = B.m;
  const tot = ma + mb;
  A.x += nx * depth * (mb / tot); A.z += nz * depth * (mb / tot);
  B.x -= nx * depth * (ma / tot); B.z -= nz * depth * (ma / tot);
  let [ax, az] = A.worldVel();
  let [bx, bz] = B.worldVel();
  const rax = px - A.x, raz = pz - A.z, rbx = px - B.x, rbz = pz - B.z;
  const pa = [ax - A.w * raz, az + A.w * rax];
  const pb = [bx - B.w * rbz, bz + B.w * rbx];
  const vn = (pa[0] - pb[0]) * nx + (pa[1] - pb[1]) * nz;
  if (vn >= 0) return 0;
  const rna = rax * nz - raz * nx, rnb = rbx * nz - rbz * nx;
  const e = 0.2;
  const j = (-(1 + e) * vn) / (1 / ma + 1 / mb + (rna * rna) / A.Iz + (rnb * rnb) / B.Iz);
  ax += (j * nx) / ma; az += (j * nz) / ma; A.w += (j * rna) / A.Iz;
  bx -= (j * nx) / mb; bz -= (j * nz) / mb; B.w -= (j * rnb) / B.Iz;
  A.setWorldVel(ax, az); B.setWorldVel(bx, bz);
  return j;
}
