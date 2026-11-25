// 燃費の確認：定速走行（40/60/100km/h）、全開加速、ガス欠時の挙動
import { CARS } from '../src/data/cars.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle, FUEL_RATE } from '../src/physics/vehicle.js';
const dt = 1 / 500;
const run = (id, kmh, sec, full = false) => {
  const fuel = { liters: 1000, tank: 1000 };
  const v = new Vehicle(buildSpec(id, stockEquip(id)), { auto: true, fuel });
  v.place(0, 0, 0, full ? 0 : kmh / 3.6);
  let t = 0, d = 0;
  while (t < sec) {
    const err = kmh / 3.6 - v.speed;
    v.input = full ? { throttle: 1, brake: 0, steer: 0 } : { throttle: Math.max(0, Math.min(1, 0.15 + err * 0.4)), brake: 0, steer: 0 };
    v.step(dt); t += dt; d += v.speed * dt;
  }
  const used = (1000 - fuel.liters) / FUEL_RATE; // 実燃費相当
  return (d / 1000) / used;
};
console.log(`燃費（実燃費相当 km/L。ゲーム内の減りはこの1/${FUEL_RATE}）`);
for (const id of Object.keys(CARS)) {
  const r = [40, 60, 100].map((k) => run(id, k, 40).toFixed(1));
  console.log(id.padEnd(9), `40km/h ${r[0]}  60km/h ${r[1]}  100km/h ${r[2]}  全開20秒 ${run(id, 0, 20, true).toFixed(1)}  タンク${CARS[id].tank}L`);
}
// ガス欠
const v = new Vehicle(buildSpec('86-GR', stockEquip('86-GR')), { auto: true, fuel: { liters: 0, tank: 50 } });
v.place(0, 0, 0, 0); v.input = { throttle: 1, brake: 0, steer: 0 };
for (let t = 0; t < 30; t += dt) v.step(dt);
console.log('ガス欠で全開30秒後', v.kmh.toFixed(1), 'km/h');
