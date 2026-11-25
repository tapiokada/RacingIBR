// 実在サーキット（鈴鹿・富士）のコースデータを国土地理院のデータから生成する
// 出典：国土地理院 ベクトルタイル（基盤地図情報 道路縁 experimental_fgd z18）／標高タイル DEM5A（z15）
// usage: node tools/circuit_data.mjs <name> <dataDir> src/data/<name>.js
//   dataDir/rdedg.json          : experimental_fgd の RdEdg（道路縁）を集めた GeoJSON FeatureCollection
//   dataDir/dem5a15/{x}_{y}.txt : DEM5A z15 タイル
//   設定（原点・範囲・ウェイポイント・コントロールライン・コーナー名）は tools/circuits.json
// 手順：
//   1. 道路縁（庭園路等＝構内の舗装路、真幅道路）を0.5mでラスタ化し、縁からの距離場を作る
//   2. 航空写真で確かめた走行順のウェイポイントの間を「縁から約6mの所（＝道の中央付近）を通るほど安い」
//      最小コスト経路（ダイクストラ）でつなぐ
//   3. 往復の枝・小さなループを除き、2m間隔にして、法線方向の左右の縁の中央へ寄せる（5回反復・移動平均）
//   4. 幅員（縁の間隔）・標高（DEM5A）を付ける。立体交差では下を通る区間・上を通る区間の標高を補正
import fs from 'fs';
import path from 'path';

const [name, dataDir, outFile] = process.argv.slice(2);
const CFG = JSON.parse(fs.readFileSync(new URL('./circuits.json', import.meta.url)))[name];
const [LAT0, LON0] = CFG.origin;
const KX = Math.cos((LAT0 * Math.PI) / 180) * 111320, KZ = 110574;
const toLL = (x, z) => [LON0 + x / KX, LAT0 - z / KZ];

// ---- 1. 道路縁ラスタと距離場 ----
const [X0, Z0, X1, Z1] = CFG.bbox, RES = 0.5;
const W = Math.round((X1 - X0) / RES), H = Math.round((Z1 - Z0) / RES);
const edge = new Uint8Array(W * H);
const fc = JSON.parse(fs.readFileSync(path.join(dataDir, 'rdedg.json')));
const toPx = ([lo, la]) => [((lo - LON0) * KX - X0) / RES, (-(la - LAT0) * KZ - Z0) / RES];
const drawLine = (a, b) => {
  const n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) * 2) + 1;
  for (let i = 0; i <= n; i++) { const x = Math.round(a[0] + ((b[0] - a[0]) * i) / n), y = Math.round(a[1] + ((b[1] - a[1]) * i) / n); if (x >= 0 && y >= 0 && x < W && y < H) edge[y * W + x] = 1; }
};
for (const f of fc.features) {
  const t = f.properties.type;
  if (t !== '庭園路等' && t !== '真幅道路') continue;
  const ls = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const l of ls) for (let i = 0; i < l.length - 1; i++) drawLine(toPx(l[i]), toPx(l[i + 1]));
}
const dist = new Float32Array(W * H).fill(1e9);
for (let k = 0; k < W * H; k++) if (edge[k]) dist[k] = 0;
{
  const a = 1, b = Math.SQRT2;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const k = y * W + x; let v = dist[k]; if (x > 0) v = Math.min(v, dist[k - 1] + a); if (y > 0) { v = Math.min(v, dist[k - W] + a); if (x > 0) v = Math.min(v, dist[k - W - 1] + b); if (x < W - 1) v = Math.min(v, dist[k - W + 1] + b); } dist[k] = v; }
  for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) { const k = y * W + x; let v = dist[k]; if (x < W - 1) v = Math.min(v, dist[k + 1] + a); if (y < H - 1) { v = Math.min(v, dist[k + W] + a); if (x < W - 1) v = Math.min(v, dist[k + W + 1] + b); if (x > 0) v = Math.min(v, dist[k + W - 1] + b); } dist[k] = v; }
  for (let k = 0; k < W * H; k++) dist[k] *= RES;
}
const isE = (x, z) => { const px = Math.round((x - X0) / RES), py = Math.round((z - Z0) / RES); return px >= 0 && py >= 0 && px < W && py < H && edge[py * W + px]; };

// ---- 2. ウェイポイント間の最小コスト経路 ----
const HW = 6;
const cost = (d) => (d < 1.2 ? 30 : d < HW ? 1 + 4.5 * ((d - HW) / 2.5) ** 2 : 1 + ((d - HW) / 12) ** 2);
const snap = ([x, z]) => {
  const cx = Math.round((x - X0) / RES), cy = Math.round((z - Z0) / RES), r = Math.round(12 / RES);
  let best = [cx, cy], bv = -1;
  for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
    const px = cx + dx, py = cy + dy; if (px < 0 || py < 0 || px >= W || py >= H) continue;
    const v = Math.min(dist[py * W + px], 9) - Math.hypot(dx, dy) * RES * 0.15; if (v > bv) { bv = v; best = [px, py]; }
  }
  return best;
};
class Heap {
  constructor() { this.a = []; }
  push(k, v) { const a = this.a; a.push([k, v]); let i = a.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (a[p][0] <= a[i][0]) break; [a[p], a[i]] = [a[i], a[p]]; i = p; } }
  pop() { const a = this.a, t = a[0], l = a.pop(); if (a.length) { a[0] = l; let i = 0; for (;;) { const L = 2 * i + 1, R = L + 1; let m = i; if (L < a.length && a[L][0] < a[m][0]) m = L; if (R < a.length && a[R][0] < a[m][0]) m = R; if (m === i) break; [a[m], a[i]] = [a[i], a[m]]; i = m; } } return t; }
  get size() { return this.a.length; }
}
function route(s, t) {
  const mg = Math.round(250 / RES);
  const bx0 = Math.max(0, Math.min(s[0], t[0]) - mg), bx1 = Math.min(W - 1, Math.max(s[0], t[0]) + mg), by0 = Math.max(0, Math.min(s[1], t[1]) - mg), by1 = Math.min(H - 1, Math.max(s[1], t[1]) + mg);
  const bw = bx1 - bx0 + 1, g = new Float64Array(bw * (by1 - by0 + 1)).fill(Infinity), prev = new Int32Array(g.length).fill(-1);
  const id = (x, y) => (y - by0) * bw + (x - bx0);
  const h = new Heap(), tid = id(...t);
  g[id(...s)] = 0; h.push(0, id(...s));
  const N8 = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2]];
  while (h.size) {
    const [c, k] = h.pop(); if (k === tid) break; if (c > g[k]) continue;
    const x = (k % bw) + bx0, y = ((k / bw) | 0) + by0;
    for (const [dx, dy, l] of N8) {
      const nx = x + dx, ny = y + dy; if (nx < bx0 || ny < by0 || nx > bx1 || ny > by1) continue;
      const nk = id(nx, ny), nc = c + l * RES * cost(dist[ny * W + nx]);
      if (nc < g[nk]) { g[nk] = nc; prev[nk] = k; h.push(nc, nk); }
    }
  }
  const out = []; for (let k = tid; k >= 0; k = prev[k]) out.push([X0 + ((k % bw) + bx0) * RES, Z0 + (((k / bw) | 0) + by0) * RES]);
  return out.reverse();
}
const S = CFG.anchors.map(snap);
let P = [];
// 3要素目が "L" のアンカーは次のアンカーまで直線（並走するピットロードと紛れやすいホームストレートなど）
const straight = (a, b) => { const n = Math.max(1, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]))); const o = []; for (let k = 0; k <= n; k++) o.push([a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]); return o; };
for (let i = 0; i < S.length; i++) {
  const A = CFG.anchors[i], B = CFG.anchors[(i + 1) % S.length];
  const r = A[2] === 'L' ? straight(A, B) : route(A[2] === 'L' || CFG.anchors[(i - 1 + S.length) % S.length][2] === 'L' ? [Math.round((A[0] - X0) / RES), Math.round((A[1] - Z0) / RES)] : S[i], B[2] === 'L' ? [Math.round((B[0] - X0) / RES), Math.round((B[1] - Z0) / RES)] : S[(i + 1) % S.length]);
  const pts = A[2] === 'L' ? r : r;
  P.push(...(i ? pts.slice(1) : pts));
}
{ const t = [P[0]]; for (const p of P) if (Math.hypot(p[0] - t[t.length - 1][0], p[1] - t[t.length - 1][1]) >= 1) t.push(p); P = t; }

// ---- 3. 枝・ループの除去、中央への補正 ----
for (let pass = 0; pass < 3; pass++) {
  const out = []; let i = 0;
  while (i < P.length) { out.push(P[i]); let cut = -1; for (let j = Math.min(P.length - 1, i + 350); j > i + 25; j--) if (Math.hypot(P[j][0] - P[i][0], P[j][1] - P[i][1]) < 4) { cut = j; break; } i = cut > 0 ? cut + 1 : i + 1; }
  P = out;
}
const resample = (P, step) => {
  const n = P.length, cum = [0];
  for (let i = 1; i <= n; i++) { const a = P[i - 1], b = P[i % n]; cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  const L = cum[n], m = Math.round(L / step), out = []; let j = 0;
  for (let k = 0; k < m; k++) { const s = (k * L) / m; while (cum[j + 1] < s) j++; const t = (s - cum[j]) / (cum[j + 1] - cum[j] || 1), a = P[j], b = P[(j + 1) % n]; out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
  return out;
};
const smooth = (P, r) => { const n = P.length; return P.map((_, i) => { let x = 0, z = 0; for (let k = -r; k <= r; k++) { x += P[(i + k + n) % n][0]; z += P[(i + k + n) % n][1]; } return [x / (2 * r + 1), z / (2 * r + 1)]; }); };
const nrm = (P, i) => { const n = P.length, a = P[(i - 2 + n) % n], b = P[(i + 2) % n], l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [-(b[1] - a[1]) / l, (b[0] - a[0]) / l]; };
const edgesAt = (P, i, max) => {
  const [nx, nz] = nrm(P, i); let dl = null, dr = null;
  for (let s = 0.5; s <= max; s += 0.25) { if (dl === null && isE(P[i][0] + nx * s, P[i][1] + nz * s)) dl = s; if (dr === null && isE(P[i][0] - nx * s, P[i][1] - nz * s)) dr = s; }
  return [dl, dr, nx, nz];
};
// 直線指定区間（"L"）の上の点は中央補正をしない
const LSEG = CFG.anchors.map((a, i) => (a[2] === 'L' ? [a, CFG.anchors[(i + 1) % CFG.anchors.length]] : null)).filter(Boolean);
const onL = (p) => LSEG.some(([a, b]) => { const dx = b[0] - a[0], dz = b[1] - a[1], l2 = dx * dx + dz * dz, t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2)); return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dz * t) < 3; });
P = resample(smooth(resample(P, 2), 4), 2);
for (let it = 0; it < 5; it++) {
  const Q = P.map((p, i) => { if (onL(p)) return p; const [dl, dr, nx, nz] = edgesAt(P, i, 13); if (dl !== null && dr !== null && dl + dr > 7 && dl + dr < 22) { const o = ((dl - dr) / 2) * 0.7; return [p[0] + nx * o, p[1] + nz * o]; } return p; });
  P = resample(smooth(Q, 5), 2);
}
// 直線・高速区間の小さなズレ（ピットロードの合流などで中央の判定がぶれた所）を消す：
// ±40mで向きがほとんど変わらない所ほど、前後30mの移動平均を強くかける（コーナーの形は残す）
const headingTurn = (P, i, k) => { const n = P.length, a = P[(i - k + n) % n], b = P[i], c = P[(i + k) % n]; const h1 = Math.atan2(b[1] - a[1], b[0] - a[0]), h2 = Math.atan2(c[1] - b[1], c[0] - b[0]); let d = h2 - h1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return Math.abs(d); };
for (let it = 0; it < 6; it++) {
  const n = P.length, big = smooth(P, 15);
  P = resample(P.map((p, i) => { const w = Math.max(0, Math.min(1, 1 - headingTurn(P, i, 20) / 0.45)); return [p[0] + (big[i][0] - p[0]) * w, p[1] + (big[i][1] - p[1]) * w]; }), 2);
}
// 長い直線（±100mで向きが0.35rad未満しか変わらない所）は前後50mの移動平均でさらにまっすぐに
for (let it = 0; it < 4; it++) {
  const big = smooth(P, 25);
  P = resample(P.map((p, i) => { const w = Math.max(0, Math.min(1, 1 - Math.max(headingTurn(P, i, 50), headingTurn(P, i, 25)) / 0.35)); return [p[0] + (big[i][0] - p[0]) * w, p[1] + (big[i][1] - p[1]) * w]; }), 2);
}
// 段差（ピットロードとの合流・直線指定の端などで中心線が横にずれた所）を消す：
// ±40mで向きがほとんど変わらない（＝コーナーではない）のに、±10mでは曲がっている所だけを均す。
// 設定のコーナー（シケインなど）の前後60mは触らない
{
  const nearCorner = (p) => CFG.corners.some(([, x, z]) => Math.hypot(p[0] - x, p[1] - z) < 60);
  for (let it = 0; it < 25; it++) {
    const big = smooth(P, 8);
    P = resample(P.map((p, i) => { if (nearCorner(p)) return p; const t40 = headingTurn(P, i, 20), t10 = headingTurn(P, i, 5); return t40 < 0.5 && t10 > 0.12 ? [(p[0] + big[i][0]) / 2, (p[1] + big[i][1]) / 2] : p; }), 2);
  }
}
// 始点をコントロールラインへ
{ let bi = 0, bd = 1e18; P.forEach((p, i) => { const d = (p[0] - CFG.control[0]) ** 2 + (p[1] - CFG.control[1]) ** 2; if (d < bd) { bd = d; bi = i; } }); P = [...P.slice(bi), ...P.slice(0, bi)]; }
const N = P.length;

// ---- 4a. 幅員 ----
const [wMin, wMax, wK] = CFG.width;
const wRaw = P.map((_, i) => { const [dl, dr] = edgesAt(P, i, 12); return dl !== null && dr !== null && dl + dr > 8 && dl + dr < 22 ? dl + dr : null; });
const known = wRaw.map((w, i) => (w !== null ? i : -1)).filter((i) => i >= 0);
const wFill = wRaw.map((w, i) => {
  if (w !== null) return w;
  let a = known[known.length - 1] - N, b = known[0] + N;
  for (const k of known) { if (k < i) a = k; else { b = k; break; } }
  const wa = wRaw[(a + N) % N], wb = wRaw[b % N]; return wa + ((wb - wa) * (i - a)) / (b - a);
});
const wMed = wFill.map((_, i) => { const a = []; for (let k = -10; k <= 10; k++) a.push(wFill[(i + k + N) % N]); a.sort((p, q) => p - q); return a[10]; });
const wSm = wMed.map((_, i) => { let s = 0; for (let k = -8; k <= 8; k++) s += wMed[(i + k + N) % N]; return s / 17; });
const hw = wSm.map((w) => Math.max(wMin, Math.min(wMax, w * wK)) / 2);

// ---- 4b. 標高（DEM5A z15・双一次補間） ----
const tiles = {};
const tile = (tx, ty) => { const k = `${tx}_${ty}`; if (!tiles[k]) tiles[k] = fs.readFileSync(path.join(dataDir, 'dem5a15', `${k}.txt`), 'utf8').trim().split('\n').map((r) => r.split(',').map((v) => (v.trim() === 'e' ? null : +v))); return tiles[k]; };
const px = (gx, gy) => { const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256); return tile(tx, ty)[gy - ty * 256][gx - tx * 256]; };
function dem(lon, lat) {
  const n = 2 ** 15, gx = ((lon + 180) / 360) * n * 256 - 0.5, lr = (lat * Math.PI) / 180;
  const gy = ((1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2) * n * 256 - 0.5;
  const x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
  let s = 0, ws = 0;
  for (const [dx, dy, w] of [[0, 0, (1 - fx) * (1 - fy)], [1, 0, fx * (1 - fy)], [0, 1, (1 - fx) * fy], [1, 1, fx * fy]]) { const v = px(x0 + dx, y0 + dy); if (v !== null) { s += v * w; ws += w; } }
  return ws ? s / ws : null;
}
// 路面の標高：中心線と左右±(幅員/2)の平均（盛土・切土の法面を拾いにくくする）
let y = P.map((p, i) => { const [nx, nz] = nrm(P, i); const v = [0, -0.6, 0.6].map((k) => dem(...toLL(p[0] + nx * hw[i] * k, p[1] + nz * hw[i] * k))).filter((q) => q !== null); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; });
y = y.map((v, i) => v ?? y[(i + 1) % N] ?? 0);
// 立体交差：平面上で交わる2区間（コース上の距離が200m以上離れている）
const crossings = [];
for (let i = 0; i < N; i++) for (let j = i + 100; j < N; j++) {
  let ds = Math.abs(j - i) * 2; ds = Math.min(ds, N * 2 - ds);
  if (ds < 200) continue;
  if (Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]) < 3 && !crossings.some(([a, b]) => Math.abs(a - i) < 40 && Math.abs(b - j) < 40)) crossings.push([i, j]);
}
const ring = (i) => ((i % N) + N) % N;
for (const [i, j] of crossings) {
  // 交差部の前後60mはDEMが相手の路面・橋を拾うので、両端を直線で結ぶ
  for (const c of [i, j]) { const a = ring(c - 30), b = ring(c + 30), ya = y[a], yb = y[b]; for (let k = -29; k <= 29; k++) y[ring(c + k)] = ya + ((yb - ya) * (k + 30)) / 60; }
  // 上を通る区間（設定で2回目に通る方）を、下の区間との差が7.5m以上になるまで前後150mかけて持ち上げる
  const [lo, up] = CFG.upperSecond ? [i, j] : [j, i];
  const need = y[lo] + 7.5 - y[up];
  if (need > 0) for (let k = -75; k <= 75; k++) y[ring(up + k)] += need * (0.5 + 0.5 * Math.cos((k / 75) * Math.PI));
}
// 路面はなめらか：前後20mの移動平均を2回
for (let pass = 0; pass < 2; pass++) y = y.map((_, i) => { let s = 0; for (let k = -10; k <= 10; k++) s += y[ring(i + k)]; return s / 21; });

// ---- 周辺の地形（8m格子） ----
let bx0 = 1e9, bz0 = 1e9, bx1 = -1e9, bz1 = -1e9;
for (const p of P) { bx0 = Math.min(bx0, p[0]); bz0 = Math.min(bz0, p[1]); bx1 = Math.max(bx1, p[0]); bz1 = Math.max(bz1, p[1]); }
const T = { x0: Math.floor((bx0 - 300) / 8) * 8, z0: Math.floor((bz0 - 300) / 8) * 8, cell: 8 };
T.nx = Math.round((bx1 + 300 - T.x0) / 8) + 1; T.nz = Math.round((bz1 + 300 - T.z0) / 8) + 1;
const TH = [];
for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) { let v = null; try { v = dem(...toLL(T.x0 + i * T.cell, T.z0 + j * T.cell)); } catch { v = null; } TH.push(v); }
const avg = TH.filter((v) => v !== null).reduce((a, b) => a + b, 0) / TH.filter((v) => v !== null).length;
const THf = TH.map((v) => v ?? avg);
const hmin = Math.min(...THf), hmax = Math.max(...THf), scale = (hmax - hmin) / 65535 || 1;
const buf = Buffer.alloc(THf.length * 2);
THf.forEach((v, k) => buf.writeUInt16LE(Math.round((v - hmin) / scale), k * 2));

let L = 0;
for (let i = 0; i < N; i++) L += Math.hypot(P[ring(i + 1)][0] - P[i][0], P[ring(i + 1)][1] - P[i][1]);
const sAt = (x, z) => { let bi = 0, bd = 1e18; P.forEach((p, i) => { const d = (p[0] - x) ** 2 + (p[1] - z) ** 2; if (d < bd) { bd = d; bi = i; } }); return bi * (L / N); };
const out = {
  source: '国土地理院 ベクトルタイル（基盤地図情報 道路縁）・標高タイル（DEM5A）を加工して作成',
  origin: [LAT0, LON0], step: +(L / N).toFixed(4), length: +L.toFixed(1), official: CFG.official,
  pit: CFG.pit, stand: CFG.stand,
  corners: CFG.corners.map(([n, x, z]) => [n, +sAt(x, z).toFixed(0)]),
  crossings: crossings.map(([i, j]) => [i, j]),
  road: P.map((p, i) => [+p[0].toFixed(2), +p[1].toFixed(2), +y[i].toFixed(2), +hw[i].toFixed(2)]),
  terrain: { ...T, hmin: +hmin.toFixed(3), scale, data: buf.toString('base64') },
};
fs.writeFileSync(outFile, `// 自動生成（tools/circuit_data.mjs ${name}）。${out.source}\nexport default ${JSON.stringify(out)};\n`);
console.log(`${name}: points ${N}  length ${L.toFixed(1)}m（公表 ${CFG.official}m, ${(((L - CFG.official) / CFG.official) * 100).toFixed(1)}%）  y ${Math.min(...y).toFixed(1)}〜${Math.max(...y).toFixed(1)}m  hw ${Math.min(...hw).toFixed(1)}〜${Math.max(...hw).toFixed(1)}  crossings ${JSON.stringify(crossings)}  terrain ${T.nx}x${T.nz}`);
