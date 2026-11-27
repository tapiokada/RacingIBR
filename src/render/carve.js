// 首都高（C1・5号）の地形メッシュの高さ：地面より低い道路（掘割・トンネル・地盤より低い高架の連絡路）に地面がかぶらないよう削る
// three.js に依存しない（tools/carve_test.mjs からも使う）
// T：地形（20m格子、H に高さ）、lanes：車線。返り値は格子の頂点ごとの高さ（Float32Array）
export const CARVE_R = 34; // 道路の中心からこの距離までの格子点を下げる（20m格子の三角形が路面の上にかぶらない距離：対角の半分＋路面の半幅）
export function carveTerrain(T, lanes) {
  const nx = T.nx, nz = T.nz, H = new Float32Array(nx * nz);
  for (let k = 0; k < H.length; k++) H[k] = T.H[k] - 0.3;
  const each = (C, i, R, f) => {
    const ci = Math.round((C.x[i] - T.x0) / T.cell), cj = Math.round((C.z[i] - T.z0) / T.cell), n = Math.ceil(R / T.cell);
    for (let dj = -n; dj <= n; dj++) for (let di = -n; di <= n; di++) {
      const gi = ci + di, gj = cj + dj; if (gi < 0 || gj < 0 || gi >= nx || gj >= nz) continue;
      const d = Math.hypot(T.x0 + gi * T.cell - C.x[i], T.z0 + gj * T.cell - C.z[i]);
      if (d <= R) f(gj * nx + gi, d);
    }
  };
  // ① トンネル：地面を天井（路面＋5.6m）より上に保つ
  for (const C of lanes) for (let i = 0; i < C.n; i += 2) if (C.kind[i] === 2) each(C, i, 14, (k) => { H[k] = Math.max(H[k], C.y[i] + 6.2); });
  // ② トンネル以外で地面が路面より高い所（掘割、地盤より低い高架・連絡路）：周りの地面を路面より 1m 下げる（こちらを優先）
  for (const C of lanes) for (let i = 0; i < C.n; i += 2) {
    if (C.kind[i] === 2) continue;
    each(C, i, CARVE_R, (k) => { if (H[k] > C.y[i] - 1.0) H[k] = C.y[i] - 1.0; });
  }
  return H;
}
// 地形メッシュ（各格子を a-c-b / b-c-d の2つの三角形に分割）の (x,z) での高さ
export function meshHeight(T, H, x, z) {
  const fx = (x - T.x0) / T.cell, fz = (z - T.z0) / T.cell;
  const i = Math.max(0, Math.min(T.nx - 2, Math.floor(fx))), j = Math.max(0, Math.min(T.nz - 2, Math.floor(fz)));
  const u = fx - i, v = fz - j, a = H[j * T.nx + i], b = H[j * T.nx + i + 1], c = H[(j + 1) * T.nx + i], d = H[(j + 1) * T.nx + i + 1];
  return u + v <= 1 ? a + (b - a) * u + (c - a) * v : d + (c - d) * (1 - u) + (b - d) * (1 - v);
}
