// 路面の縦断（高さ）をなめらかにする：ロバストな Whittaker 平滑化（周回コースは輪で扱う）
//   min Σ w_i (z_i - y_i)^2 + λ Σ (Δ² z_i)^2 を共役勾配法で解き、外れ値（橋・盛土・スタンド・立体交差で
//   DEM が拾った地面）の重みを Tukey の biweight で下げて数回やり直す。
//   λ=3e4（2m間隔）で、波長およそ 150m より短い起伏を消す。実在のサーキットの路面の高低差（数百m単位の上り下り）は残る。
export function robustSmooth(y, { lambda = 3e4, closed = true, iters = 6, fixed = null, ignore = null } = {}) {
  const N = y.length;
  const idx = (i) => (closed ? ((i % N) + N) % N : i);
  // (W + λ DᵀD) z = W y。D は2階差分
  const mul = (w, z, out) => {
    for (let i = 0; i < N; i++) {
      let d = 0;
      // DᵀD の係数： [1, -4, 6, -4, 1]（端は開いた区間なら切る）
      if (closed) {
        d = z[idx(i - 2)] - 4 * z[idx(i - 1)] + 6 * z[i] - 4 * z[idx(i + 1)] + z[idx(i + 2)];
      } else {
        // 開いた区間：D の行は i=1..N-2（z[i-1]-2z[i]+z[i+1]）
        for (const r of [i - 1, i, i + 1]) {
          if (r < 1 || r > N - 2) continue;
          const c = r === i ? -2 : 1; // D[r][i]
          d += c * (z[r - 1] - 2 * z[r] + z[r + 1]);
        }
      }
      out[i] = w[i] * z[i] + lambda * d;
    }
  };
  const solve = (w) => {
    const b = y.map((v, i) => w[i] * v);
    const z = Float64Array.from(y), r = new Float64Array(N), p = new Float64Array(N), Ap = new Float64Array(N);
    mul(w, z, Ap);
    for (let i = 0; i < N; i++) { r[i] = b[i] - Ap[i]; p[i] = r[i]; }
    let rr = r.reduce((a, v) => a + v * v, 0);
    for (let it = 0; it < 4000 && rr > 1e-10 * N; it++) {
      mul(w, p, Ap);
      let pAp = 0; for (let i = 0; i < N; i++) pAp += p[i] * Ap[i];
      const a = rr / pAp;
      for (let i = 0; i < N; i++) { z[i] += a * p[i]; r[i] -= a * Ap[i]; }
      const rr2 = r.reduce((s, v) => s + v * v, 0);
      const beta = rr2 / rr; rr = rr2;
      for (let i = 0; i < N; i++) p[i] = r[i] + beta * p[i];
    }
    return z;
  };
  const ignoreSet = new Set(ignore || []);
  let w = new Float64Array(N).fill(1);
  if (fixed) for (const i of fixed) w[i] = 1e4;
  if (ignore) for (const i of ignore) w[i] = 1e-4;
  let z = solve(w);
  for (let k = 1; k < iters; k++) {
    const res = y.map((v, i) => v - z[i]);
    const mad = [...res].map(Math.abs).sort((a, b) => a - b)[N >> 1] || 0.1;
    const c = 4.685 * Math.max(0.15, mad / 0.6745);
    w = w.map((_, i) => { if (fixed && fixed.includes(i)) return 1e4; if (ignoreSet.has(i)) return 1e-4; const u = res[i] / c; return Math.abs(u) < 1 ? (1 - u * u) ** 2 + 1e-3 : 1e-3; });
    z = solve(w);
  }
  return Array.from(z);
}
