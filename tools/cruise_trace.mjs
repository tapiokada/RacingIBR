// 1台の街流しAIを追跡（デバッグ用）: node tools/cruise_trace.mjs a b c [秒]
import { townCorridor, townGraph, resolveWalls } from '../src/physics/track.js';
import { NODES, townRoadBetween, laneOffset } from '../src/data/map.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { CruiseAI } from '../src/ai.js';
const [a, b, c, T = 20] = process.argv.slice(2);
const AREA = process.env.AREA || 'west';
const cor = townCorridor(AREA), G = townGraph(AREA); const dt = 1/500;
const A = NODES[a], B = NODES[b];
const len = Math.hypot(B.x-A.x,B.z-A.z), fx=(B.x-A.x)/len, fz=(B.z-A.z)/len, lo = laneOffset(townRoadBetween(a,b));
const car = new Vehicle(buildSpec('86-GR', stockEquip('86-GR')), { auto: true });
const T0 = +(process.env.T0 || 0.3);
car.place(A.x + (B.x-A.x)*T0 + fz*lo, A.z + (B.z-A.z)*T0 - fx*lo, Math.atan2(fx, fz), 5);
const ai = new CruiseAI(car, G, a, b, 13, cor); ai.c = c; ai.build();
console.log('turnR', ai.turnR.toFixed(1), 'pts', ai.pts.map(p => `${p.x.toFixed(0)},${p.z.toFixed(0)}:${cor.query(p.x,p.z).d.toFixed(1)}`).join(' '));
for (let t = 0, f = 0; t < +T; t += 1/60, f++) {
  ai.update(1/60, []); let h = 0; for (let s = 0; s < 8; s++) { car.step(dt); h += resolveWalls(car, cor); }
  if (f % 15 == 0 || (h > 0 && f % 3 == 0)) console.log(t.toFixed(2), `${ai.a}>${ai.b}>${ai.c}`, 'x', car.x.toFixed(1), 'z', car.z.toFixed(1), 'h', car.h.toFixed(2), 'v', car.kmh.toFixed(0), 'st', car.input.steer.toFixed(2), 'thr', car.input.throttle.toFixed(2), 'brk', car.input.brake.toFixed(2), 'g', car.gear, 'd', cor.query(car.x, car.z).d.toFixed(1), 'hit', h.toFixed(0));
}
