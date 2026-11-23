// ABS・トラクションコントロールのレベル別比較（0=OFF〜10）
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
const dt = 1 / 500;
const id = process.argv[2] || '80-Supra';
const spec = buildSpec(id, stockEquip(id));
console.log(`${id}  ブレーキ：100km/hからフルブレーキ中にハンドルを切る（ロック時は曲がれない）`);
for (const lv of [0, 1, 3, 5, 7, 10]) {
  const v = new Vehicle(spec, { auto: true, abs: lv });
  v.place(0, 0, 0, 100 / 3.6); v.input = { throttle: 0, brake: 1, steer: 0.6 };
  let t = 0, lock = 0, z0 = v.z, x0 = v.x;
  while (v.speed > 0.5 && t < 10) { v.step(dt); t += dt; if (Math.abs(v.wF) < 1) lock += dt; }
  console.log(`  ABS ${String(lv).padStart(2)}: 停止距離 ${Math.hypot(v.x - x0, v.z - z0).toFixed(1)}m  横移動 ${Math.abs(v.x - x0).toFixed(1)}m  前輪ロック時間 ${lock.toFixed(2)}s`);
}
console.log(`${id}  発進：全開で0-100km/h`);
for (const lv of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  const v = new Vehicle(spec, { auto: true, tcs: lv });
  v.place(0, 0, 0, 0); v.input = { throttle: 1, brake: 0, steer: 0 };
  let t = 0, t100 = null, spin = 0, slipSum = 0, n = 0;
  while (t < 15 && !t100) { v.step(dt); t += dt; if (v.slipLong > 0.3) spin += dt; if (t < 3) { slipSum += v.slipLong; n++; } if (v.kmh >= 100) t100 = t; }
  console.log(`  TCS ${String(lv).padStart(2)}: 0-100 ${t100?.toFixed(2)}s  ホイールスピン ${spin.toFixed(2)}s  発進3秒の平均スリップ率 ${(slipSum / n * 100).toFixed(0)}%`);
}
