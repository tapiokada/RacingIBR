// 首都高5号・竹橋JCT連絡路：AI が各車線を走って、壁への接触・路面の高さの連続性を確認する
// usage: node tools/shuto5_test.mjs
import { SHUTO5, shuto5Net, c1Net, CircuitGround, circuitCorridor, LanePath, CIRCUITS } from '../src/physics/circuit.js';
import { resolveWalls } from '../src/physics/track.js';
import { buildSpec } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
import { CARS } from '../src/data/cars.js';
const dt = 1 / 500;
let fail = 0;
const ok = (c, m) => { if (!c) fail++; console.log(c ? 'ok' : 'NG', m); };
const net = shuto5Net(), ground = new CircuitGround(net), corr = circuitCorridor(net);
// 路面の高さの段差（車線に沿って0.5mごと）
for (const k of ['U', 'D', 'UO', 'UI', 'DO', 'DI']) {
  const C = SHUTO5[k]; let maxJump = 0, at = 0, prev = null;
  for (let s = 0; s < C.length; s += 0.5) {
    const i = Math.min(C.n - 2, Math.floor(s / 2)), t = (s - C.s[i]) / (C.s[i + 1] - C.s[i] || 1);
    const x = C.x[i] + (C.x[i + 1] - C.x[i]) * t, z = C.z[i] + (C.z[i + 1] - C.z[i]) * t, yy = C.y[i] + (C.y[i + 1] - C.y[i]) * t;
    ground.refY = yy; const y = ground.h(x, z);
    if (prev != null && Math.abs(y - prev) > maxJump) { maxJump = Math.abs(y - prev); at = s; }
    prev = y;
  }
  ok(maxJump < 0.15, `${k} ${C.length.toFixed(0)}m 路面の段差 最大${maxJump.toFixed(3)}m (s=${at.toFixed(0)})`);
}
ground.refY = null;
// AI 走行
for (const k of ['U', 'D', 'UO', 'UI', 'DO', 'DI']) {
  const C = SHUTO5[k], path = new LanePath(C, corr);
  const car = new Vehicle(buildSpec('86-GR', CARS['86-GR'].stock), { auto: true, ground });
  const p = path.posAt(5, 0); car.place(p.x, p.z, p.h, 40 / 3.6);
  const ai = new RaceAI(car, path, 0.9, { mistakes: false });
  let t = 0, hint = -1, hits = 0, maxOff = 0, done = false, vmax = 0, dy = 0;
  while (t < 400) {
    ai.update(dt); car.step(dt); if (resolveWalls(car, corr) > 0) hits++; t += dt;
    const pr = path.project(car.x, car.z, hint); hint = pr.i;
    maxOff = Math.max(maxOff, Math.abs(pr.lat)); vmax = Math.max(vmax, car.speed);
    dy = Math.max(dy, Math.abs(car.y - path.posAt(pr.s, 0).y));
    if (pr.s > C.length - 15) { done = true; break; }
  }
  ok(done && dy < 1.5, `${k}: ${done ? t.toFixed(1) + 's' : '未完走'}  壁${hits}  最大横ずれ${maxOff.toFixed(1)}m  路面との高さの差 最大${dy.toFixed(2)}m  vmax ${(vmax * 3.6).toFixed(0)}`);
}
// C1 側のネットワーク（連絡路の端が走れること）
for (const side of ['c1_outer', 'c1_inner']) { const n = c1Net(side); ok(n.lanes.length === 3, `${side}: ${n.lanes.map((l) => `${l.id} ${l.length.toFixed(0)}m`).join(' / ')}`); }
process.exit(fail ? 1 : 0);
