// ホイール（インチアップ・軽量）とタイヤ幅：重量・グリップ・加速・制動・旋回・最高速・ラップタイムの比較
import { buildSpec, stockEquip, tireSize } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { LAYOUTS } from '../src/data/map.js';
import { getCoursePath, resolveWalls } from '../src/physics/track.js';
import { RaceAI } from '../src/ai.js';
const dt = 1 / 500;
const id = process.env.CAR || '86-GR';
const path = getCoursePath(LAYOUTS.find((l) => l.key === 'rikkyo_f'));
for (const [label, wheel, tw] of [['純正', 'wh_stock', 'tw_stock'], ['軽量鍛造', 'wh_forged', 'tw_stock'], ['+1inch', 'wh_plus1', 'tw_stock'], ['+2inch', 'wh_plus2', 'tw_stock'], ['鍛造+1inch', 'wh_plus1_forged', 'tw_stock'], ['鍛造+2inch', 'wh_plus2_forged', 'tw_stock'], ['幅+20mm', 'wh_stock', 'tw_20'], ['+1inch 幅+20', 'wh_plus1', 'tw_20'], ['+2inch 幅+30', 'wh_plus2', 'tw_30']]) {
  const eq = { ...stockEquip(id), wheel, tirewidth: tw };
  const s = buildSpec(id, eq);
  const v = new Vehicle(s, { auto: true, tcs: 10 });
  v.place(0, 0, 0, 0); v.input = { throttle: 1, brake: 0, steer: 0 };
  let t = 0, t100 = null; while (t < 60) { v.step(dt); t += dt; if (!t100 && v.kmh >= 100) t100 = t; }
  const vmax = v.kmh;
  v.place(0, 0, 0, 100 / 3.6); v.input = { throttle: 0, brake: 1, steer: 0 }; t = 0; const z0 = v.z; while (v.speed > 0.3) { v.step(dt); t += dt; } const bd = v.z - z0;
  v.place(0, 0, 0, 60 / 3.6); let ay = 0; t = 0; while (t < 8) { v.input = { throttle: v.kmh < 60 ? 0.6 : 0.2, brake: 0, steer: 1 }; v.step(dt); t += dt; if (t > 3) ay = Math.max(ay, Math.abs(v.vu * v.w) / 9.81); }
  // ステップ操舵の応答（0.25秒後のヨーレート）
  v.place(0, 0, 0, 80 / 3.6); v.input = { throttle: 0.3, brake: 0, steer: 0.4 }; for (let k = 0; k < 125; k++) v.step(dt); const yaw = v.w * 57.3;
  // ラップ
  const c = new Vehicle(s, { auto: true }); const p = path.posAt(0, 0); c.place(p.x, p.z, p.h, 0);
  const ai = new RaceAI(c, path, 0.9, { mistakes: false }); let lt = 0, dist = 0, prev = null, h = -1;
  while (lt < 200) { ai.update(dt); c.step(dt); resolveWalls(c, path.corridor); lt += dt; const pr = path.project(c.x, c.z, h); h = pr.i; if (prev != null) { let ds = pr.s - prev; if (ds < -path.length / 2) ds += path.length; if (ds > path.length / 2) ds -= path.length; dist += ds; } prev = pr.s; if (dist >= path.length) break; }
  console.log(label.padEnd(12), tireSize(s).padEnd(11), `${s.mass.toFixed(0)}kg μ${s.mu.toFixed(3)}`, `0-100 ${t100.toFixed(2)}s Vmax${vmax.toFixed(0)} 制動${bd.toFixed(1)}m 横G${ay.toFixed(3)} 応答${yaw.toFixed(1)}°/s 立教1周${lt.toFixed(2)}s`);
}
