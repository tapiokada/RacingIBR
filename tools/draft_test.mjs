// スリップストリーム（トー）の確認：平らな直線で、同じ車が全開で走る
//  1) 単独の最高速  2) 前の車の後ろ（初期10m）に付いたときの速度・差の縮まり方  3) 横に2.5mずらしたとき
import { Vehicle } from '../src/physics/vehicle.js';
import { buildSpec } from '../src/physics/spec.js';
import { CARS } from '../src/data/cars.js';
import { updateDraft } from '../src/physics/draft.js';

const id = process.env.CAR || '80-Supra';
const spec = () => buildSpec(id, CARS[id].stock);
const DT = 1 / 500;
function mk(z, v, x = 0) { const c = new Vehicle(spec(), { auto: true }); c.place(x, z, 0, v); c.input = { throttle: 1, brake: 0, steer: 0 }; return c; }
function run(cars, sec, log) {
  for (let t = 0, k = 0; t < sec; t += 1 / 60, k++) {
    updateDraft(cars, 1 / 60);
    for (let i = 0; i < 500 / 60; i++) for (const c of cars) { c.input = { throttle: 1, brake: 0, steer: 0 }; c.step(DT); c.x = cars.indexOf(c) === 1 && c.lat != null ? c.lat : c.x; c.h = 0; c.vv = 0; }
    if (log && k % 120 === 0) log(t);
  }
}
// 1) 単独
const solo = mk(0, 50); run([solo], 60);
console.log(`${id} 単独 60秒後 ${(solo.speed * 3.6).toFixed(1)} km/h`);
// 2) 真後ろ
for (const lat of [0, 1.0, 2.5]) {
  const A = mk(15, 50), B = mk(0, 50, lat); B.lat = lat;
  const g0 = A.z - B.z;
  let out = [];
  run([A, B], 40, (t) => out.push(`t=${t.toFixed(0)} 差${(A.z - B.z - CARS[id].length).toFixed(1)}m 前${(A.speed * 3.6).toFixed(0)} 後${(B.speed * 3.6).toFixed(0)} draft=${B.draft.toFixed(2)}`));
  console.log(`--- 横ずれ ${lat}m（初期の間隔 ${(g0 - CARS[id].length).toFixed(1)}m）`);
  console.log(out.filter((_, i) => i % 3 === 0 || i === out.length - 1).join('\n'));
}
