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
    this.om = new Float64Array(4); // 各輪の角速度
    this.ground = opts.ground || null; // 路面高さ { h(x,z) }（null=平地）
    this.setSpec(spec);
    this.x = 0; this.z = 0; this.h = 0;
    this.vu = 0; this.vv = 0; this.w = 0;
    this.steer = 0;
    this.rpm = spec.idle; this.gear = 1;
    this.shiftTimer = 0; this.boost = 0;
    this.axF = 0; this.ayF = 0;
    this.spinF = 0; this.spinR = 0;
    // ばね上の運動：上下(y,vy)・ピッチ(th:ノーズアップ正)・ロール(ph:右下がり正)
    this.y = 0; this.vy = 0; this.th = 0; this.dth = 0; this.ph = 0; this.dph = 0;
    this.gy = 0; this.gp = 0; this.gr = 0; // 重心直下の路面高さ・路面ピッチ・路面ロール（描画用）
    this.pitch = 0; this.roll = 0; this.heave = 0; // 路面に対する車体の姿勢（描画用）
    this.comp = new Float64Array(4); // 各輪のストローク（静止位置からの縮み量）
    this.yr = new Float64Array(4); this.yrPrev = new Float64Array(4);
    this.vl = new Float64Array(4);
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
    this.bottom = 0; // 底打ち
    this.air = 0; // 全輪接地していない時間
  }

  setSpec(s) {
    this.spec = s;
    this.m = s.mass;
    this.L = s.wheelbase;
    this.b = this.L * s.frontWeight; // CG→後軸
    this.a = this.L - this.b; // CG→前軸
    // ヨー慣性：前後重量配分とホイールベースから（Iz = m·a·b·動的指数）。エンジン位置・重量物の配置で変わる
    this.Iz = s.mass * this.a * this.b * (s.car.yawK || 0.95) * 1.08;
    this.Ip = (s.mass * (s.car.length ** 2 + s.car.height ** 2)) / 12 * 0.9; // ピッチ
    this.Ir = (s.mass * (s.car.width ** 2 + s.car.height ** 2)) / 12 * 0.8; // ロール
    this.Iw = 1.1 * s.car.inertiaK; // 1輪あたり
    const W = s.mass * G;
    const sp = s.susp;
    const deg = Math.PI / 180;
    this.wheels = [
      { pu: this.a, pv: -s.trackF / 2, front: true, side: -1 },
      { pu: this.a, pv: s.trackF / 2, front: true, side: 1 },
      { pu: -this.b, pv: -s.trackR / 2, front: false, side: -1 },
      { pu: -this.b, pv: s.trackR / 2, front: false, side: 1 },
    ];
    for (const wh of this.wheels) {
      const F = wh.front;
      wh.fs = (W * (F ? this.b : this.a)) / this.L / 2; // 静止輪荷重
      wh.k = F ? sp.kF : sp.kR;
      wh.cc = F ? sp.cCF : sp.cCR; wh.ce = F ? sp.cEF : sp.cER;
      wh.arb = F ? sp.arbLinF : sp.arbLinR;
      wh.travel = F ? sp.travelF : sp.travelR;
      wh.camber = F ? sp.camberF : sp.camberR;
      // トー：+イン。左輪(+)は右へ、右輪は左へ向く
      wh.toe = -wh.side * (F ? sp.toeF : sp.toeR) * deg;
      wh.longMul = 1 - 0.004 * wh.camber * wh.camber;
    }
  }

  get wF() { return (this.om[0] + this.om[1]) / 2; }
  set wF(v) { this.om[0] = this.om[1] = v; }
  get wR() { return (this.om[2] + this.om[3]) / 2; }
  set wR(v) { this.om[2] = this.om[3] = v; }

  groundAt(x, z) { return this.ground ? this.ground.h(x, z) : 0; }

  // 4輪位置の路面高さ
  sampleRoad(out) {
    const f0 = Math.sin(this.h), f1 = Math.cos(this.h);
    const r0 = -f1, r1 = f0;
    for (let i = 0; i < 4; i++) {
      const wh = this.wheels[i];
      out[i] = this.groundAt(this.x + f0 * wh.pu + r0 * wh.pv, this.z + f1 * wh.pu + r1 * wh.pv);
    }
  }

  // 路面に合わせて車体姿勢を初期化
  settle() {
    this.sampleRoad(this.yr);
    this.yrPrev.set(this.yr);
    const yr = this.yr;
    const yF = (yr[0] + yr[1]) / 2, yR = (yr[2] + yr[3]) / 2;
    this.th = (yF - yR) / this.L;
    this.ph = -(((yr[1] - yr[0]) / this.spec.trackF + (yr[3] - yr[2]) / this.spec.trackR) / 2);
    this.y = yF * (this.b / this.L) + yR * (this.a / this.L);
    this.vy = this.vu * (yF - yR) / this.L; this.dth = 0; this.dph = 0;
    this.comp.fill(0);
    this.updateGroundPose();
  }

  updateGroundPose() {
    const yr = this.yr;
    const yF = (yr[0] + yr[1]) / 2, yR = (yr[2] + yr[3]) / 2;
    this.gp = Math.atan((yF - yR) / this.L);
    this.gr = -Math.atan(((yr[1] - yr[0]) / this.spec.trackF + (yr[3] - yr[2]) / this.spec.trackR) / 2);
    this.gy = yF * (this.b / this.L) + yR * (this.a / this.L);
    const vis = 1.5; // 見た目の強調
    this.pitch = -(this.th - this.gp) * vis;
    this.roll = -(this.ph - this.gr) * vis;
    this.heave = this.y - this.gy;
  }

  place(x, z, h, speed = 0) {
    this.x = x; this.z = z; this.h = h;
    this.vu = speed; this.vv = 0; this.w = 0;
    const R = this.spec.tireRadius;
    this.om.fill(speed / R);
    this.gear = speed > 1 ? this.bestGear(speed) : 1;
    this.rpm = Math.max(this.spec.idle, this.wheelRpm());
    this.shiftTimer = 0;
    this.axF = this.ayF = 0;
    this.settle();
    this.fresh = true; // 次の1ステップは路面速度が不明なのでダンパーを効かせない
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
    const sp = this.spec.center ? this.spec.center.split : 0.5; // センターデフのキャリア回転
    return this.wF * sp + this.wR * (1 - sp);
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

    // ---- サスペンション（4輪のばね・ダンパー・スタビ、ばね上の上下/ピッチ/ロール） ----
    const yr = this.yr, yp = this.yrPrev, comp = this.comp;
    yp.set(yr);
    this.sampleRoad(yr);
    const v2 = this.vu * this.vu;
    const q = 0.5 * RHO * v2;
    const dfF = q * s.area * s.clF;
    const dfR = q * s.area * s.clR;
    const loads = this.wheelLoads;
    const W = this.m * G;
    let sumN = 0;
    let bump = 0;
    for (let i = 0; i < 4; i++) {
      const wh = this.wheels[i];
      const yb = this.y + wh.pu * this.th - wh.pv * this.ph;
      const c = yr[i] - yb;
      const cd = this.fresh ? 0 : (yr[i] - yp[i]) / dt - (this.vy + wh.pu * this.dth - wh.pv * this.dph);
      comp[i] = c;
      let F = wh.fs + wh.k * c + (cd > 0 ? wh.cc : wh.ce) * cd;
      if (c > wh.travel) { // バンプラバー→底打ち
        const e = c - wh.travel;
        F += wh.k * 10 * e + wh.cc * 3 * Math.max(0, cd);
        if (e > 0.012) bump += (e - 0.012) * wh.k * 25;
      }
      loads[i] = F;
    }
    // スタビライザー
    const aF = this.wheels[0].arb * (comp[0] - comp[1]);
    const aR = this.wheels[2].arb * (comp[2] - comp[3]);
    loads[0] += aF; loads[1] -= aF; loads[2] += aR; loads[3] -= aR;
    for (let i = 0; i < 4; i++) { if (loads[i] < 0) loads[i] = 0; sumN += loads[i]; }
    this.bottom = bump;
    this.fresh = false;
    this.air = sumN < W * 0.05 ? this.air + dt : 0;
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
    let tF = 0, tR = 0, IeF = 0, IeR = 0;
    if (s.drive === 'FF') { tF = Tdrive; IeF = Ie; }
    else if (s.drive === 'FR') { tR = Tdrive; IeR = Ie; }
    else {
      const sp = s.center ? s.center.split : s.awdFront;
      const ish = Math.max(0.25, Math.min(0.75, sp)); // エンジン慣性の割り当て
      tF = Tdrive * sp; tR = Tdrive * (1 - sp); IeF = Ie * ish; IeR = Ie * (1 - ish);
    }

    // ブレーキ（各輪）
    const bk = [0, 0, 0, 0];
    bk[0] = bk[1] = s.brakeTorque * brake * s.brakeBias / 2;
    bk[2] = bk[3] = s.brakeTorque * brake * (1 - s.brakeBias) / 2;

    // ---- タイヤ力 ----
    let Fu = 0, Fv = 0, Tz = 0;
    const Fx = [0, 0, 0, 0], ks = [0, 0, 0, 0];
    let slipMax = 0, slipLong = 0, FuT = 0, FvT = 0;
    const kp = s.peakRatio, ap = s.peakAngle;
    // 路面に対するロール角（右下がり正）→キャンバー変化
    const relRollDeg = (this.ph - this.gr) * 57.3;
    const offMul = this.offRoad ? 0.7 : 1;
    for (let i = 0; i < 4; i++) {
      const wh = this.wheels[i];
      const vuw = this.vu - this.w * wh.pv;
      const vvw = this.vv + this.w * wh.pu;
      const dl = (wh.front ? delta : 0) + wh.toe;
      const cdl = Math.cos(dl), sdl = Math.sin(dl);
      const vl = vuw * cdl + vvw * sdl, vt = -vuw * sdl + vvw * cdl;
      this.vl[i] = vl;
      const om = this.om[i];
      const vden = Math.max(Math.abs(vl), 4);
      const kappa = (om * R - vl) / vden;
      const alpha = Math.atan2(vt, Math.max(Math.abs(vl), 1.5));
      const Fz = loads[i];
      // キャンバー：ネガティブ量（ロールで外輪は減る）。横グリップは2.5°付近が最大、縦グリップは静的キャンバーで低下
      const e = wh.camber - wh.side * relRollDeg * 0.35;
      const latMul = 1 + 0.024 * e - 0.0048 * e * e;
      const mu = s.mu * Math.max(0.6, 1 - 0.08 * (Fz / fz0 - 1)) * offMul;
      const sx = kappa / kp, sy = alpha / ap;
      const sm = Math.hypot(sx, sy);
      let fx = 0, fy = 0, slope = 0;
      if (Fz > 0) {
        if (sm > 1e-6) {
          const Fm = mu * Fz * tireCurve(sm);
          fx = (Fm * sx) / sm * wh.longMul; fy = (-Fm * sy) / sm * latMul;
          // 縦剛性（陰解法用）
          const sx2 = (kappa + 0.01) / kp;
          const sm2 = Math.hypot(sx2, sy);
          const Fx2 = (mu * Fz * tireCurve(sm2) * sx2) / sm2 * wh.longMul;
          slope = Math.max(0, (Fx2 - fx) / 0.01);
        } else {
          slope = (mu * Fz * TIRE_B * TIRE_C) / kp * wh.longMul;
        }
      }
      this.wheelSlip[i] = sm;
      if (Fz > 0 && sm > slipMax) slipMax = sm;
      if (Fz > fz0 * 0.25 && Math.abs(kappa) > slipLong) slipLong = Math.abs(kappa);
      const fu = fx * cdl - fy * sdl, fv = fx * sdl + fy * cdl;
      Fx[i] = fx; ks[i] = (slope * R) / vden;
      Fu += fu; Fv += fv;
      Tz += wh.pu * fv - wh.pv * fu;
    }
    FuT = Fu; FvT = Fv;
    this.slip = slipMax;
    this.slipLong = slipLong;

    // ---- ABS（各輪） ----
    if (this.absLevel > 0 && brake > 0) {
      const keep = 1 - 0.065 * this.absLevel;
      for (let i = 0; i < 4; i++) {
        const lim = -kp * (2.0 - 0.09 * this.absLevel) * Math.max(Math.abs(this.vl[i]), 4);
        if (this.om[i] * R - this.vl[i] < lim) bk[i] *= keep;
      }
    }

    // ---- 車輪回転（陰解法）：各軸を「平均回転」と「左右差（デフ）」に分けて解く ----
    const om = this.om, Iw = this.Iw;
    const diffs = [s.diffF, s.diffR];
    const Ts = [tF, tR], Ies = [IeF, IeR];
    const mean = [0, 0], dmean = [0, 0];
    const awdOn = s.drive === 'AWD' && engaged && !slipping;
    for (let ax = 0; ax < 2; ax++) {
      const l = ax * 2, r = l + 1;
      mean[ax] = (om[l] + om[r]) / 2;
    }
    const DF = 2 * Iw + Ies[0] + dt * R * (ks[0] + ks[1]), DR = 2 * Iw + Ies[1] + dt * R * (ks[2] + ks[3]);
    const FF = R * (Fx[0] + Fx[1]), FR = R * (Fx[2] + Fx[3]);
    if (awdOn && !s.center) {
      // センターデフ直結（旧来の扱い）
      const o = (mean[0] + mean[1]) / 2;
      const d = (Tdrive - FF - FR) / (DF + DR);
      mean[0] = mean[1] = o + dt * d;
    } else {
      let Tc = 0;
      if (awdOn) {
        // センターデフ：前後の回転差を止めるのに必要なトルクを、差動制限の上限までかける（＋で後→前へ移す）
        const c = s.center;
        const need = (mean[1] + (dt * (Ts[1] - FR)) / DR - mean[0] - (dt * (Ts[0] - FF)) / DF) / (dt / DF + dt / DR);
        const dw = Math.abs(mean[1] - mean[0]);
        let lim = c.pre + c.acc * Math.abs(Tdrive) + c.visc * dw;
        if (c.capK > 0) lim = Math.min(lim, c.capK * Math.abs(Tdrive) + 30);
        Tc = Math.max(-lim, Math.min(lim, need));
        this.centerT = Tc;
      }
      Ts[0] += Tc; Ts[1] -= Tc;
      mean[0] += (dt * (Ts[0] - FF)) / DF;
      mean[1] += (dt * (Ts[1] - FR)) / DR;
    }
    for (let ax = 0; ax < 2; ax++) {
      const l = ax * 2, r = l + 1;
      const T = Ts[ax];
      const dif = diffs[ax];
      const D = om[l] - om[r];
      const den = Iw + dt * R * (ks[l] + ks[r]) / 2;
      const free = -R * (Fx[l] - Fx[r]);
      // LSD：差動を止めるのに必要なトルク（上限 = イニシャル + 感度×入力トルク）
      let Tl = (D * den) / dt + free;
      const drv = (ax === 0 ? s.drive !== 'FR' : s.drive !== 'FF') && engaged;
      const bias = drv ? dif.pre + (T >= 0 ? dif.acc : dif.dec) * Math.abs(T) : 0;
      Tl = Math.max(-bias, Math.min(bias, Tl));
      const Dn = D + (dt * (free - Tl)) / den;
      om[l] = mean[ax] + Dn / 2; om[r] = mean[ax] - Dn / 2;
      // ブレーキ（各輪で回転を0へ）
      const IeHalf = Ies[ax] / 2;
      for (const i of [l, r]) {
        if (bk[i] <= 0) continue;
        const dB = (bk[i] * dt) / (Iw + IeHalf + dt * R * ks[i]);
        if (Math.abs(om[i]) <= dB) om[i] = 0; else om[i] -= Math.sign(om[i]) * dB;
      }
    }

    // ---- 勾配（垂直抗力の水平成分）・空気抵抗・転がり抵抗 ----
    const sU = ((yr[0] + yr[1]) / 2 - (yr[2] + yr[3]) / 2) / this.L; // 前上がり正
    const sV = ((yr[1] - yr[0]) / s.trackF + (yr[3] - yr[2]) / s.trackR) / 2; // 右上がり正
    Fu -= sumN * sU;
    Fv -= sumN * sV;
    const dragF = 0.5 * RHO * s.cd * s.area * speed * speed;
    if (speed > 0.01) {
      Fu -= (dragF * this.vu) / speed;
      Fv -= (dragF * this.vv) / speed;
    }
    const rr = 0.011 * sumN + (this.offRoad ? 0.08 * sumN : 0) + bump * 0.5;
    if (Math.abs(this.vu) > 0.05) Fu -= Math.sign(this.vu) * Math.min(rr, Math.abs(this.vu) * this.m / dt * 0.5);

    // ---- 車体運動（平面） ----
    const ax = Fu / this.m, ay = Fv / this.m;
    this.vu += (ax + this.w * this.vv) * dt;
    this.vv += (ay - this.w * this.vu) * dt;
    this.w += (Tz / this.Iz) * dt;

    // 低速での停止処理
    if (speed < 1.2 && throttle < 0.05 && (brake > 0.05 || speed < 0.25)) {
      const k = Math.exp(-dt * (brake > 0.05 ? 10 : 4));
      this.vu *= k; this.vv *= k; this.w *= k;
      if (brake > 0.05) for (let i = 0; i < 4; i++) om[i] *= k;
    }
    if (speed < 3) this.vv *= Math.exp(-dt * 2); // 低速横すべり抑制

    // ---- ばね上の上下・ピッチ・ロール ----
    // タイヤ力は接地面（重心より cgHeight 下）に働くのでピッチ・ロールモーメントを生む
    const hcg = s.cgHeight;
    let Fy = -W + bump;
    let Mp = -dfF * this.a + dfR * this.b + FuT * hcg;
    let Mr = -FvT * hcg;
    Fy -= dfF + dfR;
    for (let i = 0; i < 4; i++) {
      const wh = this.wheels[i];
      Fy += loads[i];
      Mp += loads[i] * wh.pu;
      Mr -= loads[i] * wh.pv;
    }
    this.vy += (Fy / this.m) * dt;
    this.dth += (Mp / this.Ip) * dt;
    this.dph += (Mr / this.Ir) * dt;
    this.y += this.vy * dt;
    this.th += this.dth * dt;
    this.ph += this.dph * dt;

    this.axF += (ax - this.axF) * Math.min(1, dt / 0.1);
    this.ayF += (ay - this.ayF) * Math.min(1, dt / 0.1);

    const f0 = Math.sin(this.h), f1 = Math.cos(this.h);
    const r0 = -f1, r1 = f0;
    this.x += (this.vu * f0 + this.vv * r0) * dt;
    this.z += (this.vu * f1 + this.vv * r1) * dt;
    this.h -= this.w * dt;

    this.spinF += this.wF * dt;
    this.spinR += this.wR * dt;
    this.updateGroundPose();
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
    for (const i of this.spec.drive !== 'FR' ? [0, 1, 2, 3] : [0, 1]) this.om[i] = this.om[i] * 0.7 + (this.vu / R) * 0.3;
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
