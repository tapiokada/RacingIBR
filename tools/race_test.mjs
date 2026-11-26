// サーキットレース（8台・スタンディングスタート）をAIだけで走らせ、接触・順位・完走を確認する
// usage: KEY=tsukuba_2000 CLS=C node tools/race_test.mjs
import { LAYOUTS } from '../src/data/map.js';
import { getCoursePath, resolveWalls } from '../src/physics/track.js';
import { CircuitGround, CIRCUITS } from '../src/physics/circuit.js';
import { buildSpec } from '../src/physics/spec.js';
import { Vehicle, collideCars } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
import { RIVAL_BY_ID } from '../src/data/rivals.js';
import { pickEntrants, RACE_FORMAT, refLap, simSession } from '../src/data/races.js';
import { LapTracker } from '../src/modes/common.js';
const dt = 1 / 500;
const KEY = process.env.KEY || 'tsukuba_2000', CLS = process.env.CLS || 'C';
const L = LAYOUTS.find((l) => l.key === KEY), path = getCoursePath(L), ground = new CircuitGround(CIRCUITS[L.course.circuit]);
const ids = pickEntrants(CLS, 5, 1).concat(pickEntrants(CLS, 5, 2)).filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
// グリッド：基準ラップの速い順
ids.sort((a, b) => (refLap(KEY, a) ?? 999) - (refLap(KEY, b) ?? 999));
const laps = RACE_FORMAT[L.course.circuit].laps;
const lat = Math.min(2.8, path.hw[0] - 1.6);
const cars = ids.map((id, k) => {
  const r = RIVAL_BY_ID[id];
  const car = new Vehicle(buildSpec(r.car, r.parts, r.setup || null), { auto: true, ground });
  const s = -10 - k * 8, p = path.posAt(s, (k % 2 ? 1 : -1) * lat);
  car.place(p.x, p.z, p.h, 0);
  return { id, car, ai: new RaceAI(car, path, r.skill, { margin: r.margin }), tr: new LapTracker(path, s), fin: null, hits: 0 };
});
cars.forEach((c) => c.tr.start(0));
let t = 0, contacts = 0;
const pairs = new Set();
while (t < 1200 && cars.some((c) => c.fin == null)) {
  for (const c of cars) c.ai.update(dt * 1, cars.filter((x) => x !== c).map((x) => x.car));
  for (let k = 0; k < 1; k++) {
    for (const c of cars) { c.car.step(dt); if (resolveWalls(c.car, path.corridor) > 0) c.hits++; }
    for (let i = 0; i < cars.length; i++) for (let j = i + 1; j < cars.length; j++) {
      const a = cars[i].car, b = cars[j].car;
      if (Math.abs(a.x - b.x) < 8 && Math.abs(a.z - b.z) < 8) { const vx = a.vu, vy = b.vu; collideCars(a, b); if (Math.abs(a.vu - vx) + Math.abs(b.vu - vy) > 0.3) { const key = `${i}-${j}-${Math.floor(t)}`; if (!pairs.has(key)) { pairs.add(key); contacts++; } } }
    }
  }
  t += dt;
  for (const c of cars) { const ev = c.tr.update(c.car, t); if (ev && ev.type === 'lap' && c.tr.lap >= laps && c.fin == null) c.fin = t; }
}
const order = [...cars].sort((a, b) => (a.fin ?? 1e9) - (b.fin ?? 1e9));
console.log(`${KEY} class ${CLS}  ${laps}laps  contacts(>0.3m/s) ${contacts}`);
order.forEach((c, i) => console.log(`${i + 1}. grid${ids.indexOf(c.id) + 1} ${RIVAL_BY_ID[c.id].name.padEnd(6)} ${RIVAL_BY_ID[c.id].car.padEnd(9)} ${c.fin ? c.fin.toFixed(2) + 's' : 'DNF'}  laps ${c.tr.laps.map((x) => x.toFixed(1)).join(' ')}  ref ${refLap(KEY, c.id)}  wall ${c.hits}`));
// 見積もり（セッション15分）
const sim = simSession(ids[0], refLap(KEY, ids[0]) || 90, 900);
console.log('simSession 15min', ids[0], sim.map((x) => x.toFixed(2)).join(' '));
