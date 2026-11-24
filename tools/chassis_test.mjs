// 車種ごとのシャシー・ボディ差の確認（AWDセンターデフの前後配分、揚力、ヨー応答）
import { CARS } from '../src/data/cars.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
const dt = 1 / 500;
for (const id of Object.keys(CARS)) {
  const s = buildSpec(id, stockEquip(id));
  const v = new Vehicle(s, { auto: true });
  // 発進加速中の前輪駆動力の割合（AWD）
  v.place(0, 0, 0, 0); v.input = { throttle: 1, brake: 0, steer: 0 };
  let t = 0, fr = 0, n = 0;
  while (t < 2) { v.step(dt); t += dt; if (t > 0.5 && s.center) { fr += (v.centerT || 0); n++; } }
  // 200km/hでの前後輪荷重（揚力の影響）
  v.place(0, 0, 0, 200 / 3.6); v.input = { throttle: 0.5, brake: 0, steer: 0 };
  for (let k = 0; k < 1000; k++) v.step(dt);
  const N = v.wheelLoads, W = s.mass * 9.81;
  const nf = (N[0] + N[1]) / W, nr = (N[2] + N[3]) / W;
  // ステップ操舵：80km/hから操舵して0.3秒後のヨーレート
  v.place(0, 0, 0, 80 / 3.6); v.input = { throttle: 0.3, brake: 0, steer: 0.5 };
  for (let k = 0; k < 150; k++) v.step(dt);
  console.log(id.padEnd(9), s.drive.padEnd(4), `Iz ${v.Iz | 0}`.padEnd(9), `200km/h荷重 前${(nf * 100).toFixed(1)}% 後${(nr * 100).toFixed(1)}%（静止 前${(s.frontWeight * 100).toFixed(1)}%）`, `ヨー応答 ${(v.w * 57.3).toFixed(1)}°/s`, s.center ? `センター伝達 ${(fr / n).toFixed(0)}N·m` : '');
}
