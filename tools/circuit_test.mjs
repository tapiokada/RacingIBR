// つくば山麓サーキット：AIの周回タイムと路面判定のテスト
// usage: node tools/circuit_test.mjs [carId ...]
import { LAYOUTS } from '../src/data/map.js';
import { getCoursePath, resolveWalls } from '../src/physics/track.js';
import { CircuitGround, CIRCUIT, SURF } from '../src/physics/circuit.js';
import { buildSpec } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
import { CARS } from '../src/data/cars.js';
const dt = 1 / 500;
const L = LAYOUTS.find((l) => l.key === 'tsukuba_2000');
const path = getCoursePath(L);
const ground = new CircuitGround();
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.log('NG', m); } else console.log('ok', m); };
// 路面判定
{
  const i = 300, rx = -CIRCUIT.tz[i], rz = CIRCUIT.tx[i], hw = CIRCUIT.hw[i];
  const at = (lat) => { ground.h(CIRCUIT.x[i] + rx * lat, CIRCUIT.z[i] + rz * lat); return ground.lastSurf; };
  ok(at(0) === SURF.asphalt, 'center = asphalt');
  ok(at(hw + 6) !== SURF.asphalt, 'off track = not asphalt');
}
ok(Math.abs(path.length - 2117) < 30, `length ${path.length.toFixed(0)}m`);
const ids = process.argv.slice(2).length ? process.argv.slice(2) : ['86-GR', 'SWIFT-S', 'R34-GTR'];
for (const id of ids) {
  const car = new Vehicle(buildSpec(id, CARS[id].stock, null), { auto: true, ground });
  const p = path.posAt(-30, 0); car.place(p.x, p.z, p.h, 0);
  const ai = new RaceAI(car, path, +(process.env.SKILL || 1.0), { mistakes: false });
  let t = 0, dist = -30, hint = -1, prevS = null, laps = [], lapT = null, hits = 0, maxOff = 0, offT = 0, vmax = 0;
  while (t < 400 && laps.length < 3) {
    ai.update(dt); car.step(dt); if (resolveWalls(car, path.corridor) > 0) hits++; t += dt;
    const pr = path.project(car.x, car.z, hint); hint = pr.i;
    if (prevS != null) { let ds = pr.s - prevS; if (ds < -path.length / 2) ds += path.length; if (ds > path.length / 2) ds -= path.length; if (Math.abs(ds) < 30) dist += ds; }
    prevS = pr.s;
    const off = Math.abs(pr.lat) - path.hw[pr.i]; if (off > maxOff) maxOff = off; if (off > 0.8) offT += dt;
    if (car.speed > vmax) vmax = car.speed;
    if (lapT === null && dist >= 0) lapT = t;
    if (lapT !== null && dist >= path.length * (laps.length + 1)) { laps.push(t - lapT); lapT = t; }
  }
  const best = Math.min(...laps);
  console.log(`${id}: laps ${laps.map((x) => `${Math.floor(x / 60)}'${(x % 60).toFixed(2)}`).join(' ')}  wallhits ${hits}  maxOff ${maxOff.toFixed(1)}m  offTime ${offT.toFixed(1)}s  vmax ${(vmax * 3.6).toFixed(0)}`);
  ok(laps.length === 3 && best > 50 && best < 90, `${id} completes 3 laps`);
}
process.exit(fail ? 1 : 0);
