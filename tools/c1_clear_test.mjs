// 首都高（C1・5号・連絡路）：走行中のカメラ（後方約6m・高さ約2m）や道路の上（路面から5m）が建物の中に入らないか
// usage: node tools/c1_clear_test.mjs
import BLD from '../src/data/c1_buildings.js';
import { CIRCUITS, SHUTO5, terrainAt } from '../src/physics/circuit.js';
const bin = Buffer.from(BLD.data, 'base64');
const I = new Int32Array(bin.buffer.slice(bin.byteOffset, bin.byteOffset + bin.length));
const blds = [];
for (let k = 0; k < I.length;) { const t = I[k], h = I[k + 1] / 10, m = I[k + 2]; k += 3; const p = []; for (let j = 0; j < m; j++) { p.push([I[k] / 10, I[k + 1] / 10]); k += 2; } blds.push({ t, h, p }); }
const G = 50, grid = new Map();
blds.forEach((b, bi) => { let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9; for (const [x, z] of b.p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); } b.box = [x0, z0, x1, z1]; let cx = 0, cz = 0; for (const [x, z] of b.p) { cx += x; cz += z; } b.gy = terrainAt({ terrain: SHUTO5.terrain }, cx / b.p.length, cz / b.p.length) - 0.3; for (let gx = Math.floor(x0 / G); gx <= Math.floor(x1 / G); gx++) for (let gz = Math.floor(z0 / G); gz <= Math.floor(z1 / G); gz++) { const key = gx * 7919 + gz; (grid.get(key) || grid.set(key, []).get(key)).push(bi); } });
const inside = (x, z, y) => { for (const bi of grid.get(Math.floor(x / G) * 7919 + Math.floor(z / G)) || []) { const b = blds[bi]; if (x < b.box[0] || x > b.box[2] || z < b.box[1] || z > b.box[3] || y > b.gy + b.h || y < b.gy) continue; let c = false; const r = b.p; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [ax, az] = r[i], [bx, bz] = r[j]; if ((az > z) !== (bz > z) && x < ((bx - ax) * (z - az)) / (bz - az) + ax) c = !c; } if (c) return bi; } return -1; };
let bad = 0;
for (const C of [CIRCUITS.c1_outer, CIRCUITS.c1_inner, ...Object.values(SHUTO5).filter((v) => v && v.n)]) {
  const hits = [];
  for (let i = 0; i < C.n; i += 2) {
    if (C.kind[i] === 2) continue; // トンネル内
    const rx = -C.tz[i], rz = C.tx[i];
    const pts = [[0, 0, 5], [-(C.hw[i] + 0.75), 0, 3], [C.hw[i] + 0.75, 0, 3], [0, -6, 2.1], [0, -3, 1.5]];
    for (const [lat, back, up] of pts) { const x = C.x[i] + rx * lat + C.tx[i] * back, z = C.z[i] + rz * lat + C.tz[i] * back; if (inside(x, z, C.y[i] + up) >= 0) { hits.push(`s${C.s[i].toFixed(0)}`); break; } }
  }
  bad += hits.length;
  console.log(C.id, hits.length ? `建物にかかる点 ${hits.length}: ${hits.slice(0, 15).join(' ')}` : 'ok');
}
process.exit(bad ? 1 : 0);
