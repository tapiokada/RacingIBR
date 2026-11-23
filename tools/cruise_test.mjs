// 街流しライバルの走行テスト（乱数シード固定・複数台を同時に走らせ、車同士の衝突も計算）
// node tools/cruise_test.mjs [seed] [台数] [秒]
import { townCorridor, townGraph, resolveWalls } from '../src/physics/track.js';
import { NODES, townRoadBetween, laneOffset } from '../src/data/map.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle, collideCars } from '../src/physics/vehicle.js';
import { CruiseAI } from '../src/ai.js';
let seed = +(process.argv[2] || 1);
Math.random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const N = +(process.argv[3] || 10), T = +(process.argv[4] || 150);
const AREA = process.env.AREA || 'west';
const cor = townCorridor(AREA), G = townGraph(AREA); const dt = 1 / 500;
const edges = []; for (const [a, l] of Object.entries(G)) for (const e of l) if ((G[e.to] || []).length > 1) edges.push([a, e.to]);
const ids = ['86-GR', 'SWIFT-S', '80-Supra', 'WRX-IMP', 'RS-RS'];
const list = [];
for (let k = 0; k < N; k++) {
  let a, b, x, z, fx, fz;
  for (let tries = 0; tries < 50; tries++) {
    [a, b] = edges[Math.floor(Math.random() * edges.length)];
    const A = NODES[a], B = NODES[b], len = Math.hypot(B.x - A.x, B.z - A.z);
    fx = (B.x - A.x) / len; fz = (B.z - A.z) / len;
    const lo = laneOffset(townRoadBetween(a, b));
    x = A.x + (B.x - A.x) * 0.5 + fz * lo; z = A.z + (B.z - A.z) * 0.5 - fx * lo;
    if (list.every((o) => Math.hypot(o.car.x - x, o.car.z - z) > 25)) break;
  }
  const id = ids[k % ids.length];
  const car = new Vehicle(buildSpec(id, stockEquip(id)), { auto: true });
  car.place(x, z, Math.atan2(fx, fz), 9);
  list.push({ car, ai: new CruiseAI(car, G, a, b, 11 + Math.random() * 5, cor), slow: 0, maxSlow: 0, stuckAt: null });
}
let wall = 0, bump = 0; const turns = {};
for (let t = 0; t < T; t += 1 / 60) {
  for (const o of list) o.ai.update(1 / 60, list.filter((x) => x !== o).map((x) => x.car));
  for (let s = 0; s < 8; s++) {
    for (const o of list) { o.car.step(dt); if (resolveWalls(o.car, cor) > 0) { wall++; const key = `${o.ai.a}>${o.ai.b}>${o.ai.c}`; turns[key] = (turns[key] || 0) + 1; } }
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const A = list[i].car, B = list[j].car;
      if (Math.abs(A.x - B.x) < 8 && Math.abs(A.z - B.z) < 8 && collideCars(A, B) > 0) bump++;
    }
  }
  for (const o of list) {
    o.slow = o.car.speed < 0.5 ? o.slow + 1 : 0;
    if (o.slow > o.maxSlow) { o.maxSlow = o.slow; if (o.slow > 360) o.stuckAt = `${o.ai.a}>${o.ai.b}>${o.ai.c}@(${o.car.x.toFixed(0)},${o.car.z.toFixed(0)},h${o.car.h.toFixed(2)})`; }
  }
}
const stuck = list.filter((o) => o.maxSlow > 360);
console.log(`seed ${process.argv[2] || 1}: 壁接触 ${wall} / 車同士の接触 ${bump} / 6秒以上停止 ${stuck.length}/${N} 台（最長 ${(Math.max(...list.map((o) => o.maxSlow)) / 60).toFixed(1)}s）`);
if (stuck.length) console.log('停止箇所', stuck.map((o) => o.stuckAt).join(', '));
const top = Object.entries(turns).sort((a, b) => b[1] - a[1]).slice(0, 6);
if (top.length) console.log('壁接触の多い曲がり', JSON.stringify(top));
