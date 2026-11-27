// 首都高速5号池袋線（北池袋〜竹橋JCT）と竹橋JCTの連絡路のコースデータを生成する（座標は C1 と同じ原点）
// 出典：国土地理院 ベクトルタイル「道路中心線」(experimental_rdcl z16：高速自動車国道等) / 標高タイル DEM5A（z15）
// usage: node tools/shuto5_data.mjs <dataDir> src/data/c1.js src/data/shuto5.js
//   dataDir/all_lines.json   : 5号・C1付近の高速の道路中心線（GeoJSON）
//   dataDir/dem5a15/*.txt    : DEM5A
// 車線（すべて一方通行・左側通行）：
//   U  : 5号上り 北池袋入口（川越街道・池袋本町）→ 竹橋JCTの分岐
//   UO : 分岐 → C1外回りに合流（江戸橋・銀座方面）
//   UI : 分岐 → C1内回りに合流（霞が関・渋谷方面）
//   DO : C1外回りから分岐 → 5号下り
//   DI : C1内回りから分岐 → 5号下り
//   D  : 5号下り 合流点 → 北池袋出口（川越街道）
// 北池袋の出入口のランプは航空写真・中心線から形が確定できないので、本線の脇に約260mの坂路を作って地上とつないでいる
import fs from 'fs';
import path from 'path';

const [dataDir, c1File, outFile] = process.argv.slice(2);
const C1 = (await import(path.resolve(c1File))).default;
const [LAT0, LON0] = C1.origin, KX = Math.cos((LAT0 * Math.PI) / 180) * 111320, KZ = 110574;
const toLL = (x, z) => [LON0 + x / KX, LAT0 - z / KZ];
const X0 = -4700, Z0 = -7900, X1 = 700, Z1 = -1850, RES = 1, W = (X1 - X0) / RES, H = (Z1 - Z0) / RES;

// ---- ラスタ・距離場 ----
const line = new Uint8Array(W * H), attr = new Int16Array(W * H).fill(-1);
const feats = JSON.parse(fs.readFileSync(path.join(dataDir, 'all_lines.json'))).features;
const toP = ([lo, la]) => [((lo - LON0) * KX - X0) / RES, (-(la - LAT0) * KZ - Z0) / RES];
feats.forEach((f, fi) => {
  const ls = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const l of ls) for (let i = 0; i < l.length - 1; i++) {
    const a = toP(l[i]), b = toP(l[i + 1]), n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) * 2) + 1;
    for (let k = 0; k <= n; k++) { const x = Math.round(a[0] + ((b[0] - a[0]) * k) / n), y = Math.round(a[1] + ((b[1] - a[1]) * k) / n); if (x >= 0 && y >= 0 && x < W && y < H) { line[y * W + x] = 1; attr[y * W + x] = fi; } }
  }
});
const dist = new Float32Array(W * H).fill(1e9);
for (let k = 0; k < W * H; k++) if (line[k]) dist[k] = 0;
{
  const a = 1, b = Math.SQRT2;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const k = y * W + x; let v = dist[k]; if (x > 0) v = Math.min(v, dist[k - 1] + a); if (y > 0) { v = Math.min(v, dist[k - W] + a); if (x > 0) v = Math.min(v, dist[k - W - 1] + b); if (x < W - 1) v = Math.min(v, dist[k - W + 1] + b); } dist[k] = v; }
  for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) { const k = y * W + x; let v = dist[k]; if (x < W - 1) v = Math.min(v, dist[k + 1] + a); if (y < H - 1) { v = Math.min(v, dist[k + W] + a); if (x < W - 1) v = Math.min(v, dist[k + W + 1] + b); if (x > 0) v = Math.min(v, dist[k + W - 1] + b); } dist[k] = v; }
}
const cost = (d) => 1 + (d * RES) ** 2 * 3;
const pix = ([x, z]) => [Math.round((x - X0) / RES), Math.round((z - Z0) / RES)];
function snapLeft(p, [dx, dz], range = 30) {
  const lx = dz, lz = -dx;
  const hits = []; let prev = false;
  for (let r = -range; r <= range; r += 0.5) {
    const [px, py] = pix([p[0] + lx * r, p[1] + lz * r]);
    const on = px >= 0 && py >= 0 && px < W && py < H && line[py * W + px];
    if (on && !prev) hits.push(r);
    prev = on;
  }
  if (!hits.length) return pix(p);
  hits.sort((a, b) => Math.abs(a) - Math.abs(b));
  const a0 = hits[0];
  const pair = hits.filter((h) => Math.abs(h - a0) >= 5 && Math.abs(h - a0) <= 20).sort((u, v) => Math.abs(u - a0) - Math.abs(v - a0))[0];
  const r = pair != null ? Math.max(a0, pair) : a0;
  return pix([p[0] + lx * r, p[1] + lz * r]);
}
class Heap {
  constructor() { this.a = []; }
  push(k, v) { const a = this.a; a.push([k, v]); let i = a.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (a[p][0] <= a[i][0]) break; [a[p], a[i]] = [a[i], a[p]]; i = p; } }
  pop() { const a = this.a, t = a[0], l = a.pop(); if (a.length) { a[0] = l; let i = 0; for (;;) { const L = 2 * i + 1, R = L + 1; let m = i; if (L < a.length && a[L][0] < a[m][0]) m = L; if (R < a.length && a[R][0] < a[m][0]) m = R; if (m === i) break; [a[m], a[i]] = [a[i], a[m]]; i = m; } } return t; }
  get size() { return this.a.length; }
}
function route(s, t) {
  const mg = 150;
  const bx0 = Math.max(0, Math.min(s[0], t[0]) - mg), bx1 = Math.min(W - 1, Math.max(s[0], t[0]) + mg), by0 = Math.max(0, Math.min(s[1], t[1]) - mg), by1 = Math.min(H - 1, Math.max(s[1], t[1]) + mg);
  const bw = bx1 - bx0 + 1, g = new Float64Array(bw * (by1 - by0 + 1)).fill(Infinity), prev = new Int32Array(g.length).fill(-1);
  const id = (x, y) => (y - by0) * bw + (x - bx0), h = new Heap(), tid = id(...t);
  g[id(...s)] = 0; h.push(0, id(...s));
  const N8 = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2]];
  while (h.size) {
    const [c, k] = h.pop(); if (k === tid) break; if (c > g[k]) continue;
    const x = (k % bw) + bx0, y = ((k / bw) | 0) + by0;
    for (const [dx, dy, l] of N8) { const nx = x + dx, ny = y + dy; if (nx < bx0 || ny < by0 || nx > bx1 || ny > by1) continue; const nk = id(nx, ny), nc = c + l * RES * cost(dist[ny * W + nx]); if (nc < g[nk]) { g[nk] = nc; prev[nk] = k; h.push(nc, nk); } }
  }
  const out = []; for (let k = tid; k >= 0; k = prev[k]) out.push([X0 + ((k % bw) + bx0) * RES, Z0 + (((k / bw) | 0) + by0) * RES]);
  return out.reverse();
}
// アンカーを順にたどる片道の経路。startPix/endPix を指定するとその画素から／までつなぐ
function openRoute(anchors, { range = 30, startPix = null, endPix = null } = {}) {
  const n = anchors.length;
  const S = anchors.map((p, i) => { const q = anchors[Math.min(n - 1, i + 1)], r = anchors[Math.max(0, i - 1)]; const dx = q[0] - r[0], dz = q[1] - r[1], l = Math.hypot(dx, dz) || 1; return snapLeft(p, [dx / l, dz / l], range); });
  if (startPix) S[0] = startPix;
  if (endPix) S[n - 1] = endPix;
  let P = [];
  for (let i = 0; i < n - 1; i++) { const r = route(S[i], S[i + 1]); P.push(...(i ? r.slice(1) : r)); }
  for (let pass = 0; pass < 3; pass++) { const out = []; let i = 0; while (i < P.length) { out.push(P[i]); let cut = -1; for (let j = Math.min(P.length - 1, i + 400); j > i + 12; j--) if (Math.hypot(P[j][0] - P[i][0], P[j][1] - P[i][1]) < 3) { cut = j; break; } i = cut > 0 ? cut + 1 : i + 1; } P = out; }
  return { P, S };
}
const resample = (P, step) => {
  const cum = [0];
  for (let i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
  const L = cum[cum.length - 1], m = Math.max(1, Math.round(L / step)), out = []; let j = 0;
  for (let k = 0; k <= m; k++) { const s = (k * L) / m; while (j < cum.length - 2 && cum[j + 1] < s) j++; const t = (s - cum[j]) / (cum[j + 1] - cum[j] || 1), a = P[j], b = P[j + 1] || a; out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
  return out;
};
// 端を固定した移動平均
const smooth = (P, r) => P.map((p, i) => { if (i < r || i >= P.length - r) return p; let x = 0, z = 0; for (let k = -r; k <= r; k++) { x += P[i + k][0]; z += P[i + k][1]; } return [x / (2 * r + 1), z / (2 * r + 1)]; });
const tang = (P, i) => { const a = P[Math.max(0, i - 2)], b = P[Math.min(P.length - 1, i + 2)], l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; };
const lenOf = (P) => { let L = 0; for (let i = 1; i < P.length; i++) L += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); return L; };
function separate(A, B, sep) {
  const G = 20, grid = new Map();
  B.forEach((p, i) => { const k = Math.floor(p[0] / G) * 7919 + Math.floor(p[1] / G); (grid.get(k) || grid.set(k, []).get(k)).push(i); });
  const near = (x, z) => { let bd = 1e9; const gx = Math.floor(x / G), gz = Math.floor(z / G); for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const i of grid.get((gx + a) * 7919 + gz + b) || []) bd = Math.min(bd, Math.hypot(B[i][0] - x, B[i][1] - z)); return bd; };
  return A.map((p, i) => { if (i < 3 || i > A.length - 4) return p; const d = near(p[0], p[1]); if (d >= sep) return p; const [tx, tz] = tang(A, i), o = (sep - d) / 2; return [p[0] + tz * o, p[1] - tx * o]; });
}

// ---- アンカー（C1 と同じ座標：x東 z南[m]） ----
const MAIN = [[-4191, -7512], [-4094, -7444], [-3920, -7338], [-3742, -7221], [-3609, -7028], [-3496, -6858], [-3453, -6570], [-3443, -6290], [-3401, -6074], [-3309, -5989], [-3145, -5860], [-2991, -5741], [-2889, -5552], [-2787, -5314], [-2588, -5200], [-2461, -4936], [-2369, -4717], [-2282, -4503], [-2162, -4295], [-1963, -4181], [-1800, -4111], [-1499, -4053], [-1206, -4001], [-1072, -3947], [-1007, -3751], [-953, -3554], [-893, -3456], [-700, -3428], [-476, -3400], [-415, -3328], [-372, -3237], [-264, -2987], [-233, -2841], [-212, -2690], [-153, -2522], [-96, -2464], [26, -2412]];
const FORK = [95, -2348], JOIN = [40, -2395];
const A_UO = [FORK, [150, -2290], [200, -2230], [255, -2170], [320, -2138], [400, -2132], [470, -2127]];
// UI：分岐から南へ。C1（外回り・内回り）の下をくぐり、内回りの左側（南）を西へ進んで内回りに左から合流
const A_UI = [FORK, [85, -2290], [83, -2250]];
const UI_TAIL = [[72, -2200], [56, -2160], [48, -2128], [40, -2098], [12, -2084], [-30, -2068], [-75, -2050], [-120, -2031], [-160, -2014], [-195, -2002], [-225, -1993], [-250, -1984], [-275, -1974]];
// DI：内回りから右（中央側）へ分かれ、外回りの下をくぐって北西へ。東側の連絡路（UO と並走）を通り、分岐部の下をくぐって下り本線の始まりへ
const DI_HEAD = [[618, -2054], [598, -2068], [559, -2095], [537, -2105], [514, -2112], [490, -2120], [460, -2125], [428, -2127.5], [400, -2139], [366, -2153]]; // 外回りとの間が広い（約18m）所で中央側へ
const A_DO = [[-290, -2010], [-200, -2050], [-110, -2090], [-20, -2128], [40, -2163], [72, -2218], [76, -2285], [65, -2335], JOIN];
const A_DI = [[470, -2108], [400, -2110], [330, -2104], [260, -2163], [200, -2228], [160, -2265], [120, -2315], JOIN];

const up = openRoute([...MAIN, FORK]);
const dn = openRoute([JOIN, ...[...MAIN].reverse()]);
let U = up.P, D = dn.P;
const forkPix = up.S[up.S.length - 1], joinPix = dn.S[0];
// Catmull-Rom（アンカーを通るなめらかな曲線）
function spline(A, step = 2) {
  const out = [];
  for (let i = 0; i < A.length - 1; i++) {
    const p0 = A[Math.max(0, i - 1)], p1 = A[i], p2 = A[i + 1], p3 = A[Math.min(A.length - 1, i + 2)];
    const n = Math.max(2, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / step));
    for (let k = i ? 1 : 0; k <= n; k++) {
      const t = k / n, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  return out;
}
let UO = openRoute(A_UO, { range: 14, startPix: forkPix }).P;
let UI = openRoute(A_UI, { range: 14, startPix: forkPix }).P;
UI = [...UI, ...spline([UI[UI.length - 1], ...UI_TAIL]).slice(1)];
let DO = openRoute(A_DO, { range: 14, endPix: joinPix }).P;
const prep = (P, r = 6) => resample(smooth(resample(P, 2), r), 2);
U = prep(U); D = prep(D); UO = prep(UO, 4); UI = prep(UI, 4); DO = prep(DO, 4);
// 東側の連絡路は実際には上下2方向で1本の道路（中心線も1本）：UO（上り→外回り）の道をたどって、DI はその逆向き＋東の端は自前の線形
let DI;
{
  const R = [...UO].reverse(); // 外回り側 → 分岐部
  const k0 = R.findIndex((p) => p[0] < 345); // 外回りに乗る手前で切る
  const D0 = D[0], dt = tang(D, 0);
  const tail = spline([R[R.length - 1], [(R[R.length - 1][0] + D0[0]) / 2 - dt[0] * 10, (R[R.length - 1][1] + D0[1]) / 2 - dt[1] * 10], [D0[0] - dt[0] * 12, D0[1] - dt[1] * 12], D0]);
  DI = resample(smooth(resample([...spline(DI_HEAD), ...R.slice(k0), ...tail.slice(1)], 2), 5), 2);
}
for (let it = 0; it < 3; it++) {
  const u2 = separate(U, D, 9.5), d2 = separate(D, U, 9.5); U = resample(smooth(u2, 4), 2); D = resample(smooth(d2, 4), 2);
  // 東側の連絡路：上り（UO）は左（北東）、下り（DI）は左（南西）に分ける（左側通行の対面）
  const a2 = separate(UO, DI, 9.5), b2 = separate(DI, UO, 9.5); UO = resample(smooth(a2, 3), 2); DI = resample(smooth(b2, 3), 2);
  // 西側：UI（南へ）と DO（北へ）も対面で並ぶので離す
  const c2 = separate(UI, DO, 9.5), e2 = separate(DO, UI, 9.5); UI = resample(smooth(c2, 3), 2); DO = resample(smooth(e2, 3), 2);
}
// ---- 分岐部・合流部の形を整える ----
// 経路探索の端（分岐点・合流点の画素）で線が鉤状に折れるので、本線の端を少し切り、連絡路は本線の向きのまま滑らかに分かれる／入るようにする
{
  const cum = (P) => { const c = [0]; for (let i = 1; i < P.length; i++) c.push(c[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1])); return c; };
  const cutEnd = (P, len) => { const c = cum(P), L = c[c.length - 1]; return P.filter((_, i) => c[i] <= L - len); };
  const cutStart = (P, len) => { const c = cum(P); return P.filter((_, i) => c[i] >= len); };
  U = cutEnd(U, 20);
  const F = U[U.length - 1], T = tang(U, U.length - 1);
  // 分岐：本線の端 F から、本線の向き T に 15m 進んでから連絡路の線へ
  const branch = (R) => { const r = cutStart(R, 60); return resample(smooth(resample([...spline([F, [F[0] + T[0] * 22, F[1] + T[1] * 22], r[0], r[1]]), ...r.slice(2)], 2), 4), 2); };
  UO = branch(UO); UI = branch(UI);
  // 合流：下り本線の始まり G へ、本線の向き S で入る
  const G = D[0], S = tang(D, 0);
  const join = (R) => { const r = cutEnd(R, 40); const a = r[r.length - 2], b = r[r.length - 1]; return resample([...r.slice(0, -2), ...spline([a, b, [G[0] - S[0] * 15, G[1] - S[1] * 15], G])], 2); };
  DO = join(DO); DI = join(DI);
}

// ---- C1 の車線との接続（合流・分岐点で C1 の線へ乗せる） ----
const lane = (side) => C1[side].road.map((r) => [r[0], r[1], r[2]]);
const OUTER = lane('outer'), INNER = lane('inner');
const cum = (P) => { const c = [0]; for (let i = 1; i < P.length; i++) c.push(c[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1])); return c; };
const nearestIdx = (L, p) => { let bi = 0, bd = 1e18; L.forEach((q, i) => { const d = (q[0] - p[0]) ** 2 + (q[1] - p[1]) ** 2; if (d < bd) { bd = d; bi = i; } }); return [bi, Math.sqrt(bd)]; };
// 合流：ランプの終わり近くで C1 の線に 3m 以内に入ったところから、C1 の線を 60m たどって終わる
function mergeInto(R, L) {
  let cut = R.length - 1;
  for (let i = Math.floor(R.length * 0.5); i < R.length; i++) if (nearestIdx(L, R[i])[1] < 3) { cut = i; break; }
  const [li] = nearestIdx(L, R[cut]);
  const dir = [L[(li + 1) % L.length][0] - L[li][0], L[(li + 1) % L.length][1] - L[li][1]];
  const out = R.slice(0, cut).filter((p) => (p[0] - L[li][0]) * dir[0] + (p[1] - L[li][1]) * dir[1] < -3 * Math.hypot(...dir)); // 合流点より手前だけ
  for (let k = 0; k <= 30; k++) out.push(L[(li + k) % L.length].slice(0, 2));
  return { P: resample(smooth(resample(out, 2), 7), 2), attach: li };
}
// 分岐：C1 の線を 60m たどってから、ランプが C1 の線から 3m 離れたところへつなぐ
function divergeFrom(R, L) {
  let cut = 0;
  for (let i = Math.floor(R.length * 0.5); i >= 0; i--) if (nearestIdx(L, R[i])[1] < 3) { cut = i; break; }
  const [li] = nearestIdx(L, R[cut]);
  const out = [];
  for (let k = 30; k >= 1; k--) out.push(L[(li - k + L.length) % L.length].slice(0, 2));
  const a = L[li], dir = [L[(li + 1) % L.length][0] - a[0], L[(li + 1) % L.length][1] - a[1]];
  out.push(...R.slice(cut).filter((p) => (p[0] - a[0]) * dir[0] + (p[1] - a[1]) * dir[1] > 3 * Math.hypot(...dir))); // 分岐点より先だけ
  return { P: resample(smooth(resample(out, 2), 7), 2), attach: (li - 30 + L.length) % L.length };
}
const mUO = mergeInto(UO, OUTER), mUI = mergeInto(UI, INNER), dDO = divergeFrom(DO, OUTER), dDI = divergeFrom(DI, INNER);
UO = mUO.P; UI = mUI.P; DO = dDO.P; DI = dDI.P;

// ---- 高さ ----
const tiles = {};
const tile = (tx, ty) => { const k = `${tx}_${ty}`; if (!(k in tiles)) { const f = path.join(dataDir, 'dem5a15', `${k}.txt`); tiles[k] = fs.existsSync(f) ? fs.readFileSync(f, 'utf8').trim().split('\n').map((r) => r.split(',').map((v) => (v.trim() === 'e' ? null : +v))) : null; } return tiles[k]; };
const pxv = (gx, gy) => { const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256); const t = tile(tx, ty); return t ? t[gy - ty * 256]?.[gx - tx * 256] ?? null : null; };
function dem(lon, lat) {
  const n = 2 ** 15, gx = ((lon + 180) / 360) * n * 256 - 0.5, lr = (lat * Math.PI) / 180;
  const gy = ((1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2) * n * 256 - 0.5;
  const x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
  let s = 0, ws = 0;
  for (const [dx, dy, w] of [[0, 0, (1 - fx) * (1 - fy)], [1, 0, fx * (1 - fy)], [0, 1, (1 - fx) * fy], [1, 1, fx * fy]]) { const v = pxv(x0 + dx, y0 + dy); if (v !== null) { s += v * w; ws += w; } }
  return ws ? s / ws : null;
}
const groundAt = (x, z) => { const v = []; for (const [a, b] of [[0, 0], [30, 0], [-30, 0], [0, 30], [0, -30]]) { const d = dem(...toLL(x + a, z + b)); if (d !== null) v.push(d); } return v.length ? v.reduce((p, q) => p + q, 0) / v.length : 3; };
const structAt = (x, z) => {
  const [cx, cy] = pix([x, z]);
  let best = -1, bd = 1e9;
  for (let dy = -10; dy <= 10; dy++) for (let dx = -10; dx <= 10; dx++) { const k = (cy + dy) * W + cx + dx; if (k >= 0 && k < W * H && attr[k] >= 0) { const d = dx * dx + dy * dy; if (d < bd) { bd = d; best = attr[k]; } } }
  if (best < 0) return { kind: 'viaduct', lv: 1 };
  const p = feats[best].properties;
  return { kind: p.state === 'トンネル' ? 'tunnel' : p.state === '橋・高架' ? 'viaduct' : p.lvOrder >= 1 ? 'viaduct' : 'trench', lv: Math.max(1, p.lvOrder || 1) };
};
function profile(P, { y0 = null, y1 = null, grade = 0.06, win = 30 } = {}) {
  const N = P.length;
  const S = P.map(([x, z]) => structAt(x, z));
  const kinds = S.map((_, i) => { const c = {}; for (let k = -10; k <= 10; k++) { const s = S[Math.max(0, Math.min(N - 1, i + k))].kind; c[s] = (c[s] || 0) + 1; } return Object.entries(c).sort((a, b) => b[1] - a[1])[0][0]; });
  const gr = P.map(([x, z]) => groundAt(x, z));
  let y = P.map((_, i) => gr[i] + (kinds[i] === 'tunnel' ? -11 : kinds[i] === 'trench' ? -6.5 : 8.5 + 6 * (S[i].lv - 1)));
  const avg = (y, r) => y.map((_, i) => { let s = 0, c = 0; for (let k = -r; k <= r; k++) { const j = i + k; if (j < 0 || j >= N) continue; s += y[j]; c++; } return s / c; });
  for (let pass = 0; pass < 3; pass++) y = avg(y, win);
  // 端の高さを合わせる（線形の補正）
  if (y0 != null || y1 != null) { const a = y0 != null ? y0 - y[0] : 0, b = y1 != null ? y1 - y[N - 1] : 0; y = y.map((v, i) => v + a + ((b - a) * i) / (N - 1)); }
  for (let pass = 0; pass < 6; pass++) {
    for (let i = 1; i < N; i++) { const lim = 2 * grade; if (y[i] - y[i - 1] > lim) y[i] = y[i - 1] + lim; if (y[i - 1] - y[i] > lim) y[i] = y[i - 1] - lim; }
    for (let i = N - 2; i >= 0; i--) { const lim = 2 * grade; if (y[i] - y[i + 1] > lim) y[i] = y[i + 1] + lim; if (y[i + 1] - y[i] > lim) y[i] = y[i + 1] - lim; }
    if (y0 != null) y[0] = y0; if (y1 != null) y[N - 1] = y1;
  }
  return { y, kinds, ground: gr };
}
const K = { viaduct: 0, trench: 1, tunnel: 2 };
const pU = profile(U), pD = profile(D);
// 北池袋の坂路：上りは最初の260m、下りは最後の260mで、本線の左側（7.5m）に寄せて地上から上がる／地上へ下りる
const RAMP = 260, OFF = 7.5;
const ss = (t) => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); };
function rampify(P, prof, atStart) {
  const N = P.length, c = cum(P), L = c[N - 1];
  const out = P.map((p, i) => {
    const s = atStart ? c[i] : L - c[i];
    if (s > RAMP) return p;
    const [tx, tz] = tang(P, i), o = OFF * (1 - ss((s - 150) / 110));
    return [p[0] + tz * o, p[1] - tx * o];
  });
  const y = prof.y.map((v, i) => { const s = atStart ? c[i] : L - c[i]; if (s > RAMP) return v; return prof.ground[i] + 0.1 + (v - prof.ground[i] - 0.1) * ss((s - 20) / 210); });
  return { P: out, y };
}
const rU = rampify(U, pU, true), rD = rampify(D, pD, false);
U = rU.P; D = rD.P; pU.y = rU.y; pD.y = rD.y;
// 竹橋JCTの分岐部：上り本線は2層目（下り側の連絡路 DI がその下をくぐる）。分岐の手前約260mで上がる
const FORK_Y = 17.5;
{
  const N = U.length, c = cum(U), L = c[N - 1], d = FORK_Y - pU.y[N - 1];
  for (let i = 0; i < N; i++) { const t = (c[i] - (L - 260)) / 240; if (t > 0) pU.y[i] += d * ss(t); }
}
const yAt = (L, i) => L[i][2];
const pUO = profile(UO, { y0: pU.y[pU.y.length - 1], y1: yAt(OUTER, (mUO.attach + 30) % OUTER.length), grade: 0.07, win: 12 });
const pUI = profile(UI, { y0: pU.y[pU.y.length - 1], y1: yAt(INNER, (mUI.attach + 30) % INNER.length), grade: 0.07, win: 12 });
const pDO = profile(DO, { y0: yAt(OUTER, dDO.attach), y1: pD.y[0], grade: 0.07, win: 12 });
const pDI = profile(DI, { y0: yAt(INNER, dDI.attach), y1: pD.y[0], grade: 0.07, win: 12 });
// C1 の線に乗っている区間（合流後・分岐前）は C1 の高さそのもの
// 継ぎ目の前後40mで差をなめらかに配る
function glueEnd(prof, L, attach) {
  const N = prof.y.length, jo = N - 31, d = yAt(L, attach % L.length) - prof.y[jo];
  for (let k = 0; k <= 30; k++) prof.y[N - 1 - k] = yAt(L, (attach + 30 - k) % L.length);
  for (let k = 1; k <= 40 && jo - k >= 0; k++) prof.y[jo - k] += d * (1 - k / 41);
}
function glueStart(prof, L, attach) {
  const d = yAt(L, (attach + 30) % L.length) - prof.y[30];
  for (let k = 0; k <= 30; k++) prof.y[k] = yAt(L, (attach + k) % L.length);
  for (let k = 1; k <= 40 && 30 + k < prof.y.length; k++) prof.y[30 + k] += d * (1 - k / 41);
}
glueEnd(pUO, OUTER, mUO.attach); glueEnd(pUI, INNER, mUI.attach); glueStart(pDO, OUTER, dDO.attach); glueStart(pDI, INNER, dDI.attach);

// 分岐直後の約30mは2本とも本線の高さのまま（並んで分かれていく区間）
for (const pr of [pUO, pUI]) { const y0 = pr.y[0]; for (let i = 0; i < 25; i++) pr.y[i] = y0 + (pr.y[i] - y0) * Math.max(0, (i - 12) / 13); }
// ---- 立体交差の高さ：下をくぐる車線を、上の道路の路面から 6.0m 以上下げる（桁の下に約4.5m の空間）----
// 平面で路面が重なる（中心間 < 半幅の和 + 2.4m）点ごとに上限を決め、勾配 7% 以内でなめらかにつなぐ（端の接続部は固定）
const CLEAR_Y = 6.0, HW_MAIN = 3.25, HW_RAMP = 1.75;
// partners：合流・分岐でつながる車線。平面で重なっている間はその路面の高さ（±0.4m）に合わせる
function underpass(P, prof, hwSelf, uppers, fixHead, fixTail, partners = []) {
  const N = P.length, ceil = new Float64Array(N).fill(Infinity), floor = new Float64Array(N).fill(-Infinity);
  for (const u of uppers) for (let i = 0; i < N; i++) for (let j = 0; j < u.P.length; j++) {
    const d = Math.hypot(P[i][0] - u.P[j][0], P[i][1] - u.P[j][1]);
    if (d < hwSelf + u.hw + 2.4) ceil[i] = Math.min(ceil[i], u.y[j] - CLEAR_Y);
  }
  for (const u of partners) for (let i = 0; i < N; i++) {
    let bd = Infinity, by = 0;
    for (let j = 0; j < u.P.length; j++) { const d = Math.hypot(P[i][0] - u.P[j][0], P[i][1] - u.P[j][1]); if (d < bd) { bd = d; by = u.y[j]; } }
    if (bd < hwSelf + u.hw + 1.4) { ceil[i] = Math.min(ceil[i], by + 0.4); floor[i] = Math.max(floor[i], by - 0.4); } // 路面が重なっている間
  }
  const y = prof.y, lim = 2 * 0.07;
  // 上限・下限を勾配 7% のなだらかな包絡線にする（どこでも勾配の制限を守ったまま上限・下限に収まる）
  const U = Float64Array.from(ceil), Lo = Float64Array.from(floor);
  for (let i = 0; i < N; i++) if (i < fixHead || i >= N - fixTail) { U[i] = y[i]; Lo[i] = y[i]; } // 固定する端も包絡線に入れる（つなぎ目で急にならない）
  for (let i = 1; i < N; i++) { U[i] = Math.min(U[i], U[i - 1] + lim); Lo[i] = Math.max(Lo[i], Lo[i - 1] - lim); }
  for (let i = N - 2; i >= 0; i--) { U[i] = Math.min(U[i], U[i + 1] + lim); Lo[i] = Math.max(Lo[i], Lo[i + 1] - lim); }
  for (let i = fixHead; i < N - fixTail; i++) y[i] = Math.max(Lo[i], Math.min(y[i], U[i]));
  // 勾配の折れをなめらかに（包絡線は守る）
  for (let it = 0; it < 6; it++) for (let i = fixHead + 1; i < N - fixTail - 1; i++) y[i] = Math.max(Lo[i], Math.min(U[i], (y[i - 1] + 2 * y[i] + y[i + 1]) / 4));
  let worst = Infinity; for (let i = 0; i < N; i++) if (ceil[i] < Infinity) worst = Math.min(worst, ceil[i] + CLEAR_Y - y[i]);
  return worst;
}
const lane3 = (P, prof, hw) => ({ P, y: prof.y, hw });
const C1o = { P: OUTER, y: OUTER.map((p) => p[2]), hw: HW_MAIN }, C1i = { P: INNER, y: INNER.map((p) => p[2]), hw: HW_MAIN };
// 合流側の C1 は、合流の手前 260m だけ「つながる車線」、それより前は「くぐる相手」
const part = (L, P, fromEnd) => { const N = P.length; return { near: (i) => (fromEnd ? i >= N - 130 : i < 130) }; };
function split(Lane, P, fromEnd) { const k = part(Lane, P, fromEnd); return k; }
{
  const N = UI.length, cut = N - 130; // 合流の 260m 手前
  const head = UI.slice(0, cut), yh = { y: pUI.y.slice(0, cut) };
  console.log('UI under C1: min clearance', underpass(head, yh, HW_RAMP, [C1o, C1i], 16, 0).toFixed(2));
  for (let i = 0; i < cut; i++) pUI.y[i] = yh.y[i];
  underpass(UI, pUI, HW_RAMP, [C1o], cut, 31, [C1i]);
}
console.log('DI under outer/UO/U/UI: min clearance', underpass(DI, pDI, HW_RAMP, [C1o, lane3(UO, pUO, HW_RAMP), lane3(U, pU, HW_MAIN), lane3(UI, pUI, HW_RAMP)], 31, 6, [C1i]).toFixed(2));
underpass(UO, pUO, HW_RAMP, [], 30, 31, [C1o]);
underpass(DO, pDO, HW_RAMP, [], 31, 30, [C1o]);

const pack = (P, prof, extra = {}) => {
  const L = lenOf(P);
  return { length: +L.toFixed(1), road: P.map((p, i) => [+p[0].toFixed(2), +p[1].toFixed(2), +prof.y[i].toFixed(2), K[prof.kinds[i]], +prof.ground[i].toFixed(1)]), ...extra };
};
// 地形（20m格子）：C1 と 5号の全体
const T = { x0: -4700, z0: -7900, cell: 20 };
T.nx = Math.round((2500 - T.x0) / T.cell) + 1; T.nz = Math.round((2500 - T.z0) / T.cell) + 1;
const TH = [];
for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) { const v = dem(...toLL(T.x0 + i * T.cell, T.z0 + j * T.cell)); TH.push(v === null ? 0 : Math.max(-2, v)); }
const hmin = TH.reduce((a, b) => Math.min(a, b), 1e9), hmax = TH.reduce((a, b) => Math.max(a, b), -1e9), scale = (hmax - hmin) / 65535 || 1;
const tbuf = Buffer.alloc(TH.length * 2); TH.forEach((v, k) => tbuf.writeUInt16LE(Math.round((v - hmin) / scale), k * 2));
const cO = cum(OUTER.map((p) => p.slice(0, 2))), cI = cum(INNER.map((p) => p.slice(0, 2)));
const out = {
  source: '国土地理院 ベクトルタイル（道路中心線）・標高タイル（DEM5A）を加工して作成',
  origin: C1.origin,
  U: pack(U, pU), D: pack(D, pD),
  UO: pack(UO, pUO, { to: 'c1_outer', toS: +cO[(mUO.attach + 30) % OUTER.length].toFixed(1) }),
  UI: pack(UI, pUI, { to: 'c1_inner', toS: +cI[(mUI.attach + 30) % INNER.length].toFixed(1) }),
  DO: pack(DO, pDO, { from: 'c1_outer', fromS: +cO[dDO.attach].toFixed(1) }),
  DI: pack(DI, pDI, { from: 'c1_inner', fromS: +cI[dDI.attach].toFixed(1) }),
  terrain: { ...T, hmin: +hmin.toFixed(3), scale, data: tbuf.toString('base64') },
};
fs.writeFileSync(outFile, `// 自動生成（tools/shuto5_data.mjs）。${out.source}\n// road: [x, z, 路面の高さ, 構造(0高架 1掘割 2トンネル), 地盤の高さ]\nexport default ${JSON.stringify(out)};\n`);
for (const k of ['U', 'D', 'UO', 'UI', 'DO', 'DI']) { const r = out[k].road; console.log(k, out[k].length + 'm', 'y', Math.min(...r.map((p) => p[2])).toFixed(1), '〜', Math.max(...r.map((p) => p[2])).toFixed(1), out[k].to || out[k].from || '', out[k].toS ?? out[k].fromS ?? ''); }
