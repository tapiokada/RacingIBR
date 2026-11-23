// 純正ターボ装着時の公表トルク（目標カーブ）から、エンジンパーツの「過給前トルクカーブ」を逆算する
import { PART_BY_ID } from '../src/data/parts.js';
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const boost = (tb, rpm) => { let b = tb.boost * smooth(tb.spool[0], tb.spool[1], rpm); if (rpm > tb.fade[0]) b *= Math.max(0.3, 1 - (tb.fade[1] * (rpm - tb.fade[0])) / 2000); return b; };
const targets = {
  'EVO (tb_small)': ['tb_small', [[800, 150], [1500, 230], [2000, 300], [2500, 360], [3000, 400], [4000, 395], [5000, 370], [6000, 325], [6500, 303], [7000, 275], [7500, 240]]],
  'Z32 (tb_twin)': ['tb_twin', [[700, 150], [1500, 210], [2000, 260], [3000, 350], [3600, 388], [4500, 380], [5500, 350], [6400, 307], [7000, 270], [7300, 250]]],
  'R34 (tb_twin)': ['tb_twin', [[800, 140], [1500, 180], [2000, 220], [3000, 310], [4000, 385], [4400, 392], [5500, 360], [6000, 325], [6800, 289], [7500, 255], [8000, 225]]],
};
for (const [k, [tid, tbl]] of Object.entries(targets)) {
  const tb = PART_BY_ID[tid];
  console.log(k, JSON.stringify(tbl.map(([r, t]) => [r, Math.round(t / (1 + boost(tb, r) * 0.85))])));
}
const lerp = (tbl, x) => { if (x <= tbl[0][0]) return tbl[0][1]; for (let i = 1; i < tbl.length; i++) if (x <= tbl[i][0]) { const [a, b] = [tbl[i - 1], tbl[i]]; return a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0]); } return tbl[tbl.length - 1][1]; };
console.log('--- dense ---');
for (const [k, [tid, tbl]] of Object.entries(targets)) {
  const tb = PART_BY_ID[tid]; const out = [];
  for (let r = tbl[0][0]; r <= tbl[tbl.length - 1][0]; r += 250) out.push([r, Math.round(lerp(tbl, r) / (1 + boost(tb, r) * 0.85))]);
  console.log(k, JSON.stringify(out));
}
