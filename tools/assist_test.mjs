// スピン防止アシスト：低速コーナーでアクセル全開＋ハンドルを切ったまま加速
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
const dt = 1 / 500;
for (const id of ['86-GR', '80-Supra', 'R34-GTR', 'SWIFT-S']) {
  const row = [id.padEnd(9)];
  for (const [label, tcs, assist] of [['TCS0', 0, false], ['TCS10', 10, false], ['アシスト', 0, true], ['アシスト+TCS10', 10, true]]) {
    const v = new Vehicle(buildSpec(id, stockEquip(id)), { auto: true, tcs, spinAssist: assist });
    v.place(0, 0, 0, 30 / 3.6);
    let t = 0, maxB = 0, spun = false;
    while (t < 4) { v.input = { throttle: 1, brake: 0, steer: 0.7 }; v.step(dt); t += dt; const b = Math.abs(Math.atan2(v.vv, v.vu)); maxB = Math.max(maxB, b); if (b > 0.6) spun = true; }
    row.push(`${label}: ${spun ? 'スピン' : v.kmh.toFixed(0) + 'km/h R' + (v.speed / Math.abs(v.w)).toFixed(0) + 'm'} β${(maxB * 57.3).toFixed(0)}°`);
  }
  console.log(row.join('  '));
}
