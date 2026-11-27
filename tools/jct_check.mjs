// 竹橋JCT・5号の車線どうしの干渉チェック：平面で路面が重なる（中心間 < 半幅A+半幅B+路肩・柵 2.4m）のに、
// 高さの差が 5.9m 未満（上の道路の桁の下を車が通れない）の場所を探す。合流・分岐でつながる区間（端から60m）は除く
import { SHUTO5, CIRCUITS } from '../src/physics/circuit.js';
const L = { U: SHUTO5.U, D: SHUTO5.D, UO: SHUTO5.UO, UI: SHUTO5.UI, DO: SHUTO5.DO, DI: SHUTO5.DI, c1o: CIRCUITS.c1_outer, c1i: CIRCUITS.c1_inner };
// つながる端：[車線A, Aの端（start/end）, 車線B]
const LINK = [['UO', 'start', 'U'], ['UI', 'start', 'U'], ['UO', 'start', 'UI'], ['DO', 'end', 'D'], ['DI', 'end', 'D'], ['DO', 'end', 'DI'], ['UO', 'end', 'c1o'], ['UI', 'end', 'c1i'], ['DO', 'start', 'c1o'], ['DI', 'start', 'c1i'], ['c1o', null, 'c1i']];
const ZONE = 110; // 合流・分岐の擦り付け区間
const linked = (a, ia, b) => LINK.some(([x, end, y]) => {
  const chk = (p, i, q) => { if (p !== x || q !== y) return false; if (!end) return true; const C = L[p]; return end === 'start' ? C.s[i] < ZONE : C.length - C.s[i] < ZONE; };
  return chk(a, ia, b);
});
const bad = [];
const keys = Object.keys(L);
for (let ai = 0; ai < keys.length; ai++) for (let bi = ai + 1; bi < keys.length; bi++) {
  const a = keys[ai], b = keys[bi], A = L[a], B = L[b];
  for (let i = 0; i < A.n; i += 2) {
    if (Math.abs(A.x[i] - 60) > 700 || Math.abs(A.z[i] + 2300) > 700) continue; // JCT 付近
    for (let j = 0; j < B.n; j += 2) {
      const d = Math.hypot(A.x[i] - B.x[j], A.z[i] - B.z[j]);
      if (d > A.hw[i] + B.hw[j] + 2.4) continue;
      if (Math.abs(A.y[i] - B.y[j]) >= 5.9) continue;
      // 合流・分岐でつながる所
      if (linked(a, i, b) || linked(b, j, a)) { if (Math.abs(A.y[i] - B.y[j]) < 1.0) continue; }
      bad.push({ a, sa: Math.round(A.s[i]), b, sb: Math.round(B.s[j]), d: +d.toFixed(1), dy: +(A.y[i] - B.y[j]).toFixed(1), x: Math.round(A.x[i]), z: Math.round(A.z[i]) });
    }
  }
}
// まとめ（同じ組で近いものは1つに）
const groups = [];
for (const q of bad) { const g = groups.find((g) => g.a === q.a && g.b === q.b && Math.abs(g.sa1 - q.sa) < 30); if (g) { g.sa1 = q.sa; g.n++; } else groups.push({ ...q, sa1: q.sa, n: 1 }); }
for (const g of groups) console.log(`${g.a} s${g.sa}〜${g.sa1} × ${g.b} s${g.sb}  中心間${g.d}m 高さの差${g.dy}m  (${g.x},${g.z})  ${g.n}点`);
console.log(groups.length ? `NG ${groups.length}か所` : 'OK 干渉なし');
process.exitCode = groups.length ? 1 : 0;
