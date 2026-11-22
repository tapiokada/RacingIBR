import { townCorridor, townGraph, resolveWalls } from '../src/physics/track.js';
import { NODES, townRoadBetween, laneOffset } from '../src/data/map.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { CruiseAI } from '../src/ai.js';
const cor = townCorridor(), G = townGraph(); const dt = 1/500;
const edges = []; for (const [a, l] of Object.entries(G)) for (const e of l) edges.push([a, e.to]);
let tot = 0, stuck = 0;
for (let k = 0; k < 12; k++) {
  const [a, b] = edges[(k * 7) % edges.length]; const A = NODES[a], B = NODES[b];
  const len = Math.hypot(B.x-A.x,B.z-A.z), fx=(B.x-A.x)/len, fz=(B.z-A.z)/len, lo = laneOffset(townRoadBetween(a,b));
  const car = new Vehicle(buildSpec('86-GR', stockEquip('86-GR')), { auto: true });
  car.place(A.x + (B.x-A.x)*0.5 + fz*lo, A.z + (B.z-A.z)*0.5 - fx*lo, Math.atan2(fx, fz), 9);
  const ai = new CruiseAI(car, G, a, b, 13);
  let hits = 0, slow = 0, where = {};
  for (let t = 0; t < 90; t += 1/60) { ai.update(1/60, []); for (let s = 0; s < 8; s++) { car.step(dt); if (resolveWalls(car, cor) > 0) { hits++; const key = ai.a+'>'+ai.b; where[key]=(where[key]||0)+1; } } if (car.speed < 0.5) slow++; }
  tot += hits; if (slow > 600) stuck++;
  console.log(a, '->', b, 'hits', hits, 'slowFrames', slow, JSON.stringify(where));
}
console.log('total', tot, 'stuck', stuck);
