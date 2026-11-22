// AIドライバー（レース用 / 街流し用）
import { NODES } from './data/map.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

function steerToward(car, tx, tz) {
  const dx = tx - car.x, dz = tz - car.z;
  const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
  const u = dx * f0 + dz * f1;
  const v = dx * -f1 + dz * f0;
  const ld2 = Math.max(4, dx * dx + dz * dz);
  const kappa = (2 * v) / ld2;
  let delta = Math.atan(car.L * kappa);
  if (u < 0) delta = Math.sign(v || 1) * car.spec.steerLock;
  const speed = car.speed;
  const lim = Math.max(0.06, Math.min(car.spec.steerLock, (car.L * car.spec.mu * 9.81) / Math.max(speed * speed, 1) + car.spec.peakAngle * 1.25));
  return clamp(delta / lim, -1, 1);
}

export class RaceAI {
  constructor(car, path, skill = 0.85) {
    this.car = car; this.path = path; this.skill = skill;
    this.profile = path.speedProfile(car.spec, skill);
    this.hint = -1; this.offset = 0; this.offTarget = 0;
    this.stuck = 0; this.reverseT = 0;
    this.boost = 1;
  }

  update(dt, others = []) {
    const car = this.car, path = this.path;
    const pr = path.project(car.x, car.z, this.hint);
    this.hint = pr.i;
    const n = path.n;
    const v = car.speed;
    // 回避
    let want = 0;
    for (const o of others) {
      const po = path.project(o.x, o.z, -1);
      let ds = po.s - pr.s;
      if (ds < -path.length / 2) ds += path.length;
      if (ds > path.length / 2) ds -= path.length;
      const myLat = pr.lat;
      if (ds > 0 && ds < 18 + v * 0.4 && Math.abs(po.lat - myLat) < 2.6) {
        const hw = path.hw[pr.i];
        want = po.lat > 0 ? -Math.min(hw - 1.5, 3) : Math.min(hw - 1.5, 3);
      }
    }
    this.offTarget += (want - this.offTarget) * Math.min(1, dt * 1.5);

    const look = Math.round((5 + v * 0.42) / 2);
    const ti = (pr.i + look) % n;
    const [rx, rz] = path.normal(ti);
    const lim = Math.max(0, path.hw[ti] - 1.4);
    const extra = clamp(this.offTarget, -lim - path.lineOff[ti], lim - path.lineOff[ti]);
    const tx = path.lx[ti] + rx * extra, tz = path.lz[ti] + rz * extra;
    let steer = steerToward(car, tx, tz);

    // 速度
    let vt = 1e9;
    for (let k = 1; k <= 4; k++) vt = Math.min(vt, this.profile[(pr.i + k) % n]);
    vt *= this.boost;
    const err = vt - v;
    let throttle = clamp(0.35 + err * 0.35, 0, 1);
    let brake = clamp(-err * 0.22 - 0.05, 0, 1);
    if (brake > 0) throttle = 0;
    // トラクション
    if (car.slipLong > car.spec.peakRatio * 1.4) throttle *= 0.4;
    if (car.slip > 1.6) throttle *= 0.6;
    // コース外れの補正
    if (Math.abs(pr.lat) > path.hw[pr.i] - 0.5) throttle *= 0.7;

    // スタック回復
    if (this.reverseT > 0) {
      this.reverseT -= dt;
      car.input = { throttle: 0, brake: 0.8, steer: -steer };
      if (car.gear !== -1 && car.speed < 1) car.gear = -1;
      if (this.reverseT <= 0) car.gear = 1;
      return;
    }
    if (v < 1.5 && this.started) { this.stuck += dt; if (this.stuck > 2.2) { this.stuck = 0; this.reverseT = 1.4; } }
    else this.stuck = 0;
    if (car.gear < 1) car.gear = 1;
    car.input = { throttle, brake, steer };
    this.started = true;
  }
}

// 街を流すAI（道路グラフをランダムに巡回、左側通行）
export class CruiseAI {
  constructor(car, graph, from, to, cruise = 13) {
    this.car = car; this.graph = graph;
    this.a = from; this.b = to; this.c = this.pick(to, from);
    this.cruise = cruise; this.lane = 2.6;
    this.paused = false;
    this.stuck = 0; this.reverseT = 0;
  }

  pick(at, prev) {
    const opts = (this.graph[at] || []).map((e) => e.to).filter((x) => x !== prev);
    if (!opts.length) return prev;
    return opts[Math.floor(Math.random() * opts.length)];
  }

  laneOffsetPt(a, b, t) {
    const A = NODES[a], B = NODES[b];
    const dx = B.x - A.x, dz = B.z - A.z, l = Math.hypot(dx, dz) || 1;
    const fx = dx / l, fz = dz / l;
    // 左 = -right, right=(-fz, fx)
    const lx = fz, lz = -fx;
    return { x: A.x + dx * t + lx * this.lane, z: A.z + dz * t + lz * this.lane, len: l, fx, fz };
  }

  update(dt, others = []) {
    const car = this.car;
    if (this.paused) { car.input = { throttle: 0, brake: 1, steer: 0 }; return; }
    const A = NODES[this.a], B = NODES[this.b];
    const dx = B.x - A.x, dz = B.z - A.z, l2 = dx * dx + dz * dz;
    const l = Math.sqrt(l2);
    let t = ((car.x - A.x) * dx + (car.z - A.z) * dz) / l2;
    const remain = (1 - t) * l;
    if (remain < 9) {
      this.a = this.b; this.b = this.c; this.c = this.pick(this.b, this.a);
      return this.update(dt, others);
    }
    const look = 7 + car.speed * 0.5;
    let tgt;
    if (remain > look) tgt = this.laneOffsetPt(this.a, this.b, t + look / l);
    else {
      const N = NODES[this.c], Bn = NODES[this.b];
      const l3 = Math.hypot(N.x - Bn.x, N.z - Bn.z) || 1;
      tgt = this.laneOffsetPt(this.b, this.c, Math.min(1, (look - remain) / l3));
    }
    const steer = steerToward(car, tgt.x, tgt.z);
    // 次の交差点の曲がり角に応じて減速
    const C = NODES[this.c];
    const ux = dx / l, uz = dz / l;
    const vx = C.x - B.x, vz = C.z - B.z, lv = Math.hypot(vx, vz) || 1;
    const cos = (ux * vx + uz * vz) / lv;
    const vTurn = cos < -0.5 ? 4 : cos < 0.3 ? 7 : cos < 0.85 ? 10 : this.cruise;
    let vt = Math.min(this.cruise, Math.sqrt(vTurn * vTurn + 2 * 3.0 * Math.max(0, remain - 8)));
    // 前方車
    const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
    for (const o of others) {
      const ox = o.x - car.x, oz = o.z - car.z;
      const u = ox * f0 + oz * f1, w = ox * -f1 + oz * f0;
      if (u > 0 && u < 22 && Math.abs(w) < 2.6) vt = Math.min(vt, Math.max(0, (u - 7) * 0.6));
    }
    const err = vt - car.speed;
    let throttle = clamp(0.2 + err * 0.3, 0, 0.75);
    let brake = clamp(-err * 0.25, 0, 1);
    if (brake > 0.02) throttle = 0;
    if (this.reverseT > 0) {
      this.reverseT -= dt;
      if (car.gear !== -1) car.gear = -1;
      car.input = { throttle: 0, brake: 0.5, steer: -steer };
      if (this.reverseT <= 0) car.gear = 1;
      return;
    }
    if (vt > 3 && car.speed < 0.8) { this.stuck += dt; if (this.stuck > 2.5) { this.stuck = 0; this.reverseT = 1.5; } } else this.stuck = 0;
    if (car.gear < 1) car.gear = 1;
    car.input = { throttle, brake, steer };
  }
}
