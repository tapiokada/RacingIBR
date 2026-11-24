// セッティング・勾配の物理テスト
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { defaultSetup } from '../src/physics/setup.js';
const dt = 1 / 500;
const id = process.env.CAR || '86-GR';
function run(label, setup, eq = {}, ground = null) {
  const equip = { ...stockEquip(id), ...eq };
  const s = buildSpec(id, equip, setup);
  const v = new Vehicle(s, { auto: true, ground });
  // ブレーキ時ピッチ・停止距離
  v.place(0, 0, 0, 100 / 3.6); v.input = { throttle: 0, brake: 1, steer: 0 };
  let t = 0, maxP = 0; const z0 = v.z;
  while (v.speed > 0.3 && t < 10) { v.step(dt); t += dt; maxP = Math.max(maxP, -(v.th - v.gp) * 57.3); }
  const bd = v.z - z0;
  // 定常円旋回 60km/h → 最大横G とロール
  v.place(0, 0, 0, 60 / 3.6); let ay = 0, roll = 0; t = 0;
  while (t < 8) { v.input = { throttle: v.kmh < 60 ? 0.6 : 0.2, brake: 0, steer: 1 }; v.step(dt); t += dt; if (t > 3) { const b = Math.abs(Math.atan2(v.vv, v.vu)); if (b > 0.25) { ay = NaN; } else { ay = Math.max(ay, Math.abs(v.vu * v.w) / 9.81); roll = Math.max(roll, Math.abs(v.ph) * 57.3); } } }
  // 低速コーナー立ち上がり：30km/hで旋回しながら全開→内輪空転
  v.place(0, 0, 0, 30 / 3.6); t = 0; let spinDiff = 0, dist0 = 0;
  while (t < 1.0) { v.input = { throttle: 0.15, brake: 0, steer: 0.8 }; v.step(dt); t += dt; }
  const p0 = [v.x, v.z]; t = 0;
  while (t < 1.5) { v.input = { throttle: 0.7, brake: 0, steer: 0.6 }; v.step(dt); t += dt; spinDiff = Math.max(spinDiff, Math.abs(v.om[2] - v.om[3]) * s.tireRadius * 3.6); }
  const exitV = v.kmh;
  console.log(label.padEnd(26), `rollF ${s.rollFront.toFixed(2)} grad ${s.rollGrad.toFixed(2)}°/g | brake ${bd.toFixed(1)}m dive ${maxP.toFixed(2)}° | latG ${isNaN(ay) ? 'SPIN ' : ay.toFixed(3)} roll ${roll.toFixed(2)}° | exit ${exitV.toFixed(1)}km/h dRR ${spinDiff.toFixed(1)}km/h`);
}
const D = defaultSetup(id);
run('stock', null);
run('circuit', null, { suspension: 'sus_circuit' });
const full = { suspension: 'sus_full', brake: 'brk_full', transmission: 'tm_full' };
run('full default', D, full);
run('full soft 1.8Hz', { ...D, freqF: 1.8, freqR: 1.9 }, full);
run('full stiff 4.5Hz', { ...D, freqF: 4.5, freqR: 4.6 }, full);
run('full camber 0', { ...D, camberF: 0, camberR: 0 }, full);
run('full camber 5', { ...D, camberF: 5, camberR: 5 }, full);
run('full arbF10 arbR1', { ...D, arbF: 10, arbR: 1 }, full);
run('full arbF1 arbR10', { ...D, arbF: 1, arbR: 10 }, full);
run('full LSD 5/5/5', { ...D, lsdInitR: 5, lsdAccR: 5, lsdDecR: 5 }, full);
run('full LSD 60/60/60', { ...D, lsdInitR: 60, lsdAccR: 60, lsdDecR: 60 }, full);
run('full brake bal -5', { ...D, brakeBal: -5 }, full);
run('full brake bal +5', { ...D, brakeBal: 5 }, full);
run('full brake 70%', { ...D, brakeStr: 70 }, full);
run('full toeR -0.5', { ...D, toeR: -0.5 }, full);
// 勾配
function slope(label, g) {
  const s = buildSpec(id, stockEquip(id));
  const ground = { h: (x, z) => z * g };
  const v = new Vehicle(s, { auto: true, ground });
  v.place(0, 0, 0, 0); v.input = { throttle: 1, brake: 0, steer: 0 };
  let t = 0, t100 = null;
  while (t < 30 && !t100) { v.step(dt); t += dt; if (v.kmh >= 100) t100 = t; }
  v.place(0, 0, 0, 0); v.input = { throttle: 0, brake: 0, steer: 0 }; v.gear = 0;
  t = 0; while (t < 5) { v.step(dt); t += dt; }
  const N = v.wheelLoads; const fr = (N[0] + N[1]) / (N[0] + N[1] + N[2] + N[3]);
  console.log(label.padEnd(12), `0-100 ${t100?.toFixed(2)}s  neutral 5s → ${v.kmh.toFixed(1)}km/h  front load ${(fr * 100).toFixed(1)}%`);
}
slope('flat', 0); slope('up 10%', 0.1); slope('down 10%', -0.1);
// 頂点（クレスト）通過：半径80mの凸 → 荷重抜け
{
  const s = buildSpec(id, stockEquip(id));
  const Rv = 80;
  const ground = { h: (x, z) => (Math.abs(z - 50) < 25 ? Math.sqrt(Rv * Rv - (z - 50) ** 2) - Rv : Math.sqrt(Rv * Rv - 625) - Rv - (Math.abs(z - 50) - 25) * 25 / Math.sqrt(Rv * Rv - 625)) + 20 };
  for (const kmh of [60, 90, 110]) {
    const v = new Vehicle(s, { auto: true, ground });
    v.place(0, 0, 0, kmh / 3.6); v.input = { throttle: 0.3, brake: 0, steer: 0 };
    let minN = 1e9, air = 0; for (let t = 0; t < 4; t += dt) { v.step(dt); const n = v.wheelLoads.reduce((a, b) => a + b, 0); minN = Math.min(minN, n); if (v.air > air) air = v.air; }
    console.log(`crest R80 @${kmh}km/h  min load ${(minN / (s.mass * 9.81) * 100).toFixed(0)}%  airtime ${air.toFixed(2)}s`);
  }
}
