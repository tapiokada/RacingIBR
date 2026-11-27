// C1 の中心線の小さなジグザグ（道路中心線データのつなぎ目などで1m前後折れている所）をなめらかにする
// usage: node tools/c1_kinks.mjs src/data/c1.js   （ファイルを書き換える。何度実行しても同じ結果に近づくだけ）
// 13点の移動平均からのずれ（カーブの分を差し引いたもの）が 0.2m を超える所の前後を、ガウス平滑化した線に置き換える
import fs from 'fs';
import path from 'path';
const file = process.argv[2];
const src = fs.readFileSync(file, 'utf8');
const D = (await import(path.resolve(file))).default;
function fix(road) {
  const N = road.length, X = road.map((p) => p[0]), Z = road.map((p) => p[1]);
  const at = (A, i) => A[((i % N) + N) % N];
  const curvAt = (i) => { const a = [at(X, i) - at(X, i - 2), at(Z, i) - at(Z, i - 2)], b = [at(X, i + 2) - at(X, i), at(Z, i + 2) - at(Z, i)]; return Math.atan2(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]) / ((Math.hypot(...a) + Math.hypot(...b)) / 2 || 1); };
  const bad = [];
  for (let i = 0; i < N; i++) {
    let sx = 0, sz = 0; for (let d = -6; d <= 6; d++) { sx += at(X, i + d); sz += at(Z, i + d); }
    const r = Math.hypot(X[i] - sx / 13, Z[i] - sz / 13), exp = (Math.abs(curvAt(i)) * 144) / 6;
    if (Math.abs(r - exp) > 0.2) bad.push(i);
  }
  const mark = new Uint8Array(N);
  for (const i of bad) for (let d = -12; d <= 12; d++) mark[((i + d) % N + N) % N] = 1;
  const nx = X.slice(), nz = Z.slice(), W = [];
  for (let d = -8; d <= 8; d++) W.push(Math.exp(-(d * d) / (2 * 3.5 * 3.5)));
  for (let i = 0; i < N; i++) if (mark[i]) {
    let sx = 0, sz = 0, sw = 0; for (let d = -8; d <= 8; d++) { const w = W[d + 8]; sx += w * at(X, i + d); sz += w * at(Z, i + d); sw += w; }
    // 平滑化する範囲の端は元の線に滑らかに戻す
    let edge = 1; for (let d = 1; d <= 4; d++) if (!mark[((i - d) % N + N) % N] || !mark[(i + d) % N]) { edge = Math.min(edge, d / 5); }
    nx[i] = X[i] + (sx / sw - X[i]) * edge; nz[i] = Z[i] + (sz / sw - Z[i]) * edge;
  }
  for (let i = 0; i < N; i++) { road[i][0] = +nx[i].toFixed(2); road[i][1] = +nz[i].toFixed(2); }
  return bad.length;
}
const nO = fix(D.outer.road), nI = fix(D.inner.road);
const head = src.slice(0, src.indexOf('export default'));
fs.writeFileSync(file, head + 'export default ' + JSON.stringify(D) + ';\n');
console.log('outer', nO, 'points fixed / inner', nI);
