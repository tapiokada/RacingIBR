// 首都高速 都心環状線（C1）の内回り・外回りのコースデータを生成する
// 出典：国土地理院 ベクトルタイル「道路中心線」(experimental_rdcl z16：高速自動車国道等。構造＝橋・高架／トンネル／通常部、階層 lvOrder)
//       標高タイル DEM5A（z15）
// usage: node tools/c1_data.mjs <dataDir> src/data/c1.js
//   dataDir/hwy.json           : experimental_rdcl から rdCtg=高速自動車国道等 を集めた GeoJSON
//   dataDir/dem5a15/{x}_{y}.txt: DEM5A
//   設定（原点・範囲・時計回りのウェイポイント・スタート位置）は tools/c1_route.json
// 手順：
//   1. 高速の中心線を1mでラスタ化し、線からの距離場を作る
//   2. ウェイポイント（左側通行なので、進行方向の左の線へ寄せる）の間を「線の上ほど安い」最小コスト経路でつなぐ。
//      外回り＝時計回り、内回り＝反時計回り（ウェイポイントを逆順に）
//   3. 往復の枝を除き、2m間隔・移動平均でなめらかに。データ上で上下線が1本の線になっている区間（銀座の掘割など）は、
//      上下線の中心の間隔が9.5mになるよう、それぞれ進行方向の左へ離す
//   4. 構造（高架・トンネル・掘割）と階層から路面の高さ（地盤＋高架の高さ／−トンネルの深さ）を決め、なめらかにする（最大勾配6%）
import fs from 'fs';
import path from 'path';

const [dataDir, outFile] = process.argv.slice(2);
const CFG = JSON.parse(fs.readFileSync(new URL('./c1_route.json', import.meta.url)));
const [LAT0, LON0] = CFG.origin, KX = Math.cos((LAT0 * Math.PI) / 180) * 111320, KZ = 110574;
const toLL = (x, z) => [LON0 + x / KX, LAT0 - z / KZ];
const [X0, Z0, X1, Z1] = CFG.bbox, RES = 1, W = (X1 - X0) / RES, H = (Z1 - Z0) / RES;

// ---- 1. ラスタと距離場（線ごとの属性も残す） ----
const line = new Uint8Array(W * H);
const attr = new Int16Array(W * H).fill(-1);
const fc = JSON.parse(fs.readFileSync(path.join(dataDir, 'hwy.json')));
const feats = fc.features;
const toP = ([lo, la]) => [((lo - LON0) * KX - X0) / RES, (-(la - LAT0) * KZ - Z0) / RES];
feats.forEach((f, fi) => {
  const ls = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const l of ls) for (let i = 0; i < l.length - 1; i++) {
    const a = toP(l[i]), b = toP(l[i + 1]);
    const n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) * 2) + 1;
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

// ---- 2. 経路 ----
function snapLeft(p, [dx, dz]) {
  const lx = dz, lz = -dx; // 進行方向の左
  const hits = []; let prev = false;
  for (let r = -30; r <= 30; r += 0.5) {
    const px = Math.round((p[0] + lx * r - X0) / RES), py = Math.round((p[1] + lz * r - Z0) / RES);
    const on = px >= 0 && py >= 0 && px < W && py < H && line[py * W + px];
    if (on && !prev) hits.push(r);
    prev = on;
  }
  if (!hits.length) return [Math.round((p[0] - X0) / RES), Math.round((p[1] - Z0) / RES)];
  hits.sort((a, b) => Math.abs(a) - Math.abs(b));
  const a0 = hits[0];
  const pair = hits.filter((h) => Math.abs(h - a0) >= 5 && Math.abs(h - a0) <= 30).sort((u, v) => Math.abs(u - a0) - Math.abs(v - a0))[0];
  const r = pair != null ? Math.max(a0, pair) : a0;
  return [Math.round((p[0] + lx * r - X0) / RES), Math.round((p[1] + lz * r - Z0) / RES)];
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
function loop(anchors) {
  const n = anchors.length;
  const S = anchors.map((p, i) => { const q = anchors[(i + 1) % n], r = anchors[(i - 1 + n) % n]; const dx = q[0] - r[0], dz = q[1] - r[1], l = Math.hypot(dx, dz); return snapLeft(p, [dx / l, dz / l]); });
  let P = [];
  for (let i = 0; i < n; i++) { const r = route(S[i], S[(i + 1) % n]); P.push(...(i ? r.slice(1) : r)); }
  // 往復の枝（ランプへの寄り道）を除く。ループの継ぎ目もまたげるよう、半周ずらして2回
  const clean = (P) => { for (let pass = 0; pass < 4; pass++) { const out = []; let i = 0; while (i < P.length) { out.push(P[i]); let cut = -1; for (let j = Math.min(P.length - 1, i + 500); j > i + 12; j--) if (Math.hypot(P[j][0] - P[i][0], P[j][1] - P[i][1]) < 4) { cut = j; break; } i = cut > 0 ? cut + 1 : i + 1; } P = out; } return P; };
  P = clean(P);
  const h = P.length >> 1; P = clean([...P.slice(h), ...P.slice(0, h)]);
  return P;
}
const resample = (P, step) => {
  const n = P.length, cum = [0];
  for (let i = 1; i <= n; i++) { const a = P[i - 1], b = P[i % n]; cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  const L = cum[n], m = Math.round(L / step), out = []; let j = 0;
  for (let k = 0; k < m; k++) { const s = (k * L) / m; while (cum[j + 1] < s) j++; const t = (s - cum[j]) / (cum[j + 1] - cum[j] || 1), a = P[j], b = P[(j + 1) % n]; out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
  return out;
};
const smooth = (P, r) => { const n = P.length; return P.map((_, i) => { let x = 0, z = 0; for (let k = -r; k <= r; k++) { x += P[(i + k + n) % n][0]; z += P[(i + k + n) % n][1]; } return [x / (2 * r + 1), z / (2 * r + 1)]; }); };
const tang = (P, i) => { const n = P.length, a = P[(i - 2 + n) % n], b = P[(i + 2) % n], l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; };

let OUT = resample(smooth(resample(loop(CFG.anchorsCW), 2), 6), 2);
let INN = resample(smooth(resample(loop([...CFG.anchorsCW].reverse()), 2), 6), 2);

// ---- 3. 上下線の間隔 ----
const SEP = 9.5;
function separate(A, Bv) {
  // A の各点で、もう一方の線までの距離が SEP 未満なら、A を進行方向の左へ (SEP - d)/2 だけ離す
  const grid = new Map(), G = 20;
  Bv.forEach((p, i) => { const k = Math.floor(p[0] / G) * 7919 + Math.floor(p[1] / G); (grid.get(k) || grid.set(k, []).get(k)).push(i); });
  const near = (x, z) => { let bd = 1e9; const gx = Math.floor(x / G), gz = Math.floor(z / G); for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const i of grid.get((gx + a) * 7919 + gz + b) || []) bd = Math.min(bd, Math.hypot(Bv[i][0] - x, Bv[i][1] - z)); return bd; };
  return A.map((p, i) => { const d = near(p[0], p[1]); if (d >= SEP) return p; const [tx, tz] = tang(A, i), o = (SEP - d) / 2; return [p[0] + tz * o, p[1] - tx * o]; });
}
for (let it = 0; it < 3; it++) {
  const o2 = separate(OUT, INN), i2 = separate(INN, OUT);
  OUT = resample(smooth(o2, 4), 2); INN = resample(smooth(i2, 4), 2);
}

// 小さな揺れ（線の合流・分岐でぶれた所）を消す：±40mではほとんど曲がっていないのに±10mで曲がっている所だけを均す
const turn = (P, i, k) => { const n = P.length, a = P[(i - k + n) % n], b = P[i], c = P[(i + k) % n]; let d = Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(b[1] - a[1], b[0] - a[0]); while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return Math.abs(d); };
const dewiggle = (P) => { for (let it = 0; it < 25; it++) { const big = smooth(P, 8); P = resample(P.map((p, i) => (turn(P, i, 20) < 0.5 && turn(P, i, 5) > 0.1 ? [(p[0] + big[i][0]) / 2, (p[1] + big[i][1]) / 2] : p)), 2); } return P; };
OUT = dewiggle(OUT); INN = dewiggle(INN);

// ---- 4. 構造・高さ ----
const tiles = {};
const tile = (tx, ty) => { const k = `${tx}_${ty}`; if (!tiles[k]) { const f = path.join(dataDir, 'dem5a15', `${k}.txt`); tiles[k] = fs.existsSync(f) ? fs.readFileSync(f, 'utf8').trim().split('\n').map((r) => r.split(',').map((v) => (v.trim() === 'e' ? null : +v))) : null; } return tiles[k]; };
const px = (gx, gy) => { const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256); const t = tile(tx, ty); return t ? t[gy - ty * 256]?.[gx - tx * 256] ?? null : null; };
function dem(lon, lat) {
  const n = 2 ** 15, gx = ((lon + 180) / 360) * n * 256 - 0.5, lr = (lat * Math.PI) / 180;
  const gy = ((1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2) * n * 256 - 0.5;
  const x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
  let s = 0, ws = 0;
  for (const [dx, dy, w] of [[0, 0, (1 - fx) * (1 - fy)], [1, 0, fx * (1 - fy)], [0, 1, (1 - fx) * fy], [1, 1, fx * fy]]) { const v = px(x0 + dx, y0 + dy); if (v !== null) { s += v * w; ws += w; } }
  return ws ? s / ws : null;
}
// 地盤の高さ：道路の周り（±30m）の平均（高架の下の道路・建物の影響を均す）
const groundAt = (x, z) => { const v = []; for (const [a, b] of [[0, 0], [30, 0], [-30, 0], [0, 30], [0, -30]]) { const d = dem(...toLL(x + a, z + b)); if (d !== null) v.push(d); } return v.length ? v.reduce((p, q) => p + q, 0) / v.length : 3; };
// 構造：最寄りの線（10m以内）の属性
const structAt = (x, z) => {
  const cx = Math.round((x - X0) / RES), cy = Math.round((z - Z0) / RES);
  let best = -1, bd = 1e9;
  for (let dy = -10; dy <= 10; dy++) for (let dx = -10; dx <= 10; dx++) { const k = (cy + dy) * W + cx + dx; if (attr[k] >= 0) { const d = dx * dx + dy * dy; if (d < bd) { bd = d; best = attr[k]; } } }
  if (best < 0) return { kind: 'viaduct', lv: 1 };
  const p = feats[best].properties;
  const kind = p.state === 'トンネル' ? 'tunnel' : p.state === '橋・高架' ? 'viaduct' : p.lvOrder >= 1 ? 'viaduct' : 'trench';
  return { kind, lv: Math.max(1, p.lvOrder || 1) };
};
function profile(P) {
  const N = P.length;
  const S = P.map(([x, z]) => structAt(x, z));
  // 構造は短い切れ目を埋める（前後20mの多数決）
  const kinds = S.map((_, i) => { const c = {}; for (let k = -10; k <= 10; k++) { const s = S[(i + k + N) % N].kind; c[s] = (c[s] || 0) + 1; } return Object.entries(c).sort((a, b) => b[1] - a[1])[0][0]; });
  const gr = P.map(([x, z]) => groundAt(x, z));
  let y = P.map((_, i) => gr[i] + (kinds[i] === 'tunnel' ? -11 : kinds[i] === 'trench' ? -6.5 : 8.5 + 6 * (S[i].lv - 1)));
  // 移動平均（前後60m）を3回 → 最大勾配6%に制限
  for (let pass = 0; pass < 3; pass++) y = y.map((_, i) => { let s = 0; for (let k = -30; k <= 30; k++) s += y[(i + k + N) % N]; return s / 61; });
  for (let pass = 0; pass < 4; pass++) for (let i = 0; i < 2 * N; i++) { const a = i % N, b = (i + 1) % N; const lim = 2 * 0.06; if (y[b] - y[a] > lim) y[b] = y[a] + lim; if (y[a] - y[b] > lim) y[b] = y[a] - lim; }
  return { y, kinds, ground: gr };
}
// 始点（江戸橋JCT付近）
const rot = (P, at) => { let bi = 0, bd = 1e18; P.forEach((p, i) => { const d = (p[0] - at[0]) ** 2 + (p[1] - at[1]) ** 2; if (d < bd) { bd = d; bi = i; } }); return [...P.slice(bi), ...P.slice(0, bi)]; };
OUT = rot(OUT, CFG.start); INN = rot(INN, CFG.start);
const pack = (P) => {
  const { y, kinds, ground } = profile(P);
  let L = 0; for (let i = 0; i < P.length; i++) L += Math.hypot(P[(i + 1) % P.length][0] - P[i][0], P[(i + 1) % P.length][1] - P[i][1]);
  const K = { viaduct: 0, trench: 1, tunnel: 2 };
  return { length: +L.toFixed(1), road: P.map((p, i) => [+p[0].toFixed(2), +p[1].toFixed(2), +y[i].toFixed(2), K[kinds[i]], +ground[i].toFixed(1)]) };
};
// 地形（20m格子）
const T = { x0: X0, z0: Z0, cell: 20, nx: Math.round((X1 - X0) / 20) + 1, nz: Math.round((Z1 - Z0) / 20) + 1 };
const TH = [];
for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) TH.push(dem(...toLL(T.x0 + i * T.cell, T.z0 + j * T.cell)));
const tAvg = TH.filter((v) => v !== null).reduce((a, b) => a + b, 0) / TH.filter((v) => v !== null).length;
const THf = TH.map((v) => (v === null ? 0 : Math.max(-2, v))); // データなし＝海・川（標高0m）
const hmin = Math.min(...THf), hmax = Math.max(...THf), scale = (hmax - hmin) / 65535 || 1;
const tbuf = Buffer.alloc(THf.length * 2); THf.forEach((v, k) => tbuf.writeUInt16LE(Math.round((v - hmin) / scale), k * 2));
const out = { source: '国土地理院 ベクトルタイル（道路中心線）・標高タイル（DEM5A）を加工して作成', origin: CFG.origin, outer: pack(OUT), inner: pack(INN), terrain: { ...T, hmin: +hmin.toFixed(3), scale, data: tbuf.toString('base64') } };
fs.writeFileSync(outFile, `// 自動生成（tools/c1_data.mjs）。${out.source}\n// road: [x, z, 路面の高さ, 構造(0高架 1掘割 2トンネル), 地盤の高さ]\nexport default ${JSON.stringify(out)};\n`);
for (const k of ['outer', 'inner']) {
  const r = out[k].road, c = [0, 0, 0]; r.forEach((p) => c[p[3]]++);
  console.log(`${k}: ${out[k].length}m  pts ${r.length}  y ${Math.min(...r.map((p) => p[2])).toFixed(1)}〜${Math.max(...r.map((p) => p[2])).toFixed(1)}m  高架${c[0] * 2}m 掘割${c[1] * 2}m トンネル${c[2] * 2}m`);
}
