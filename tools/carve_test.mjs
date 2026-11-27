// 首都高の地形メッシュが路面（中心・両端）の上にかぶっていないか（トンネル区間を除く）
import { CIRCUITS, SHUTO5 } from '../src/physics/circuit.js';
import { carveTerrain, meshHeight } from '../src/render/carve.js';
const lanes = [CIRCUITS.c1_outer, CIRCUITS.c1_inner, SHUTO5.U, SHUTO5.D, SHUTO5.UO, SHUTO5.UI, SHUTO5.DO, SHUTO5.DI];
const T = SHUTO5.terrain, H = carveTerrain(T, lanes);
let bad = 0;
for (const C of lanes) {
  const hits = [];
  for (let i = 0; i < C.n; i++) {
    if (C.kind[i] === 2) continue;
    const nx = C.tz[i], nz = -C.tx[i];
    for (const lat of [0, -(C.hw[i] + 0.75), C.hw[i] + 0.75]) {
      const h = meshHeight(T, H, C.x[i] + nx * lat, C.z[i] + nz * lat);
      if (h > C.y[i] - 0.1) { hits.push(Math.round(C.s[i])); break; }
    }
  }
  bad += hits.length;
  console.log(`${hits.length ? 'NG' : 'ok'} ${C.id}: 地面がかぶる点 ${hits.length}${hits.length ? `（s=${hits.slice(0, 8).join(',')}…）` : ''}`);
}
process.exitCode = bad ? 1 : 0;
