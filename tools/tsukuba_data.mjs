// つくば山麓サーキット（実在の筑波サーキット TC2000 を元にした架空名称）のコースデータを生成
// 出典：国土地理院 ベクトルタイル（基盤地図情報 道路縁 experimental_fgd の「庭園路等」）／標高タイル DEM5A
// usage: node tools/tsukuba_data.mjs <dataDir> src/data/tsukuba.js
//   dataDir/rdedg.json     : experimental_fgd z18 タイルから道路縁(RdEdg)を集めた GeoJSON FeatureCollection
//   dataDir/dem5a/{x}_{y}.txt : DEM5A z15 タイル
// 手順：道路縁をラスタ化 → 航空写真で確認した走行順のウェイポイントを Catmull-Rom で2m間隔に →
//       法線方向に左右の道路縁を探して中心へ寄せる（4回反復・移動平均）→ 幅員・標高を付ける
import fs from 'fs';
import path from 'path';
import { robustSmooth } from './profile_smooth.mjs';

const [dataDir, outFile] = process.argv.slice(2);
const LAT0 = 36.151, LON0 = 139.921;
const KX = Math.cos((LAT0 * Math.PI) / 180) * 111320, KZ = 110574;
const toXZ = (lon, lat) => [(lon - LON0) * KX, -(lat - LAT0) * KZ];
const toLL = (x, z) => [LON0 + x / KX, LAT0 - z / KZ];

// ---- 道路縁ラスタ（0.5m） ----
const RES = 0.5, X0 = -320, Z0 = -320, W = 1440, H = 1440;
const edge = new Uint8Array(W * H);
const fc = JSON.parse(fs.readFileSync(path.join(dataDir, 'rdedg.json')));
const line = (a, b) => {
  const n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) * 2) + 1;
  for (let i = 0; i <= n; i++) {
    const x = Math.round(a[0] + ((b[0] - a[0]) * i) / n), y = Math.round(a[1] + ((b[1] - a[1]) * i) / n);
    if (x >= 0 && y >= 0 && x < W && y < H) edge[y * W + x] = 1;
  }
};
const toPx = ([lo, la]) => { const [x, z] = toXZ(lo, la); return [(x - X0) / RES, (z - Z0) / RES]; };
for (const f of fc.features) {
  if (f.properties.type !== '庭園路等') continue; // サーキット構内の舗装路の縁
  const ls = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const l of ls) for (let i = 0; i < l.length - 1; i++) line(toPx(l[i]), toPx(l[i + 1]));
}
const isE = (x, z) => { const px = Math.round((x - X0) / RES), py = Math.round((z - Z0) / RES); return px >= 0 && py >= 0 && px < W && py < H && edge[py * W + px]; };

// ---- 走行順（時計回り）のウェイポイント：ホームストレート北行き → 1コーナー → … → 最終コーナー ----
// 3要素目が1の点の間は航空写真から読み取った中心線をそのまま使う（ホームストレート〜1・2コーナー〜S字入口は
// ピットロード・パドックの縁と重なって道路縁からの補正が効かないため）
const WP = [[-140, 120, 1], [-131, 80, 1], [-121, 40, 1], [-112.5, 0, 1], [-104.5, -50, 1], [-100, -85, 1], [-97, -105, 1], [-90, -121, 1], [-78, -132, 1], [-61, -137, 1], [-44, -132, 1], [-32, -121, 1], [-25, -105, 1], [-23, -85, 1], [-26, -60, 1], [-33, -38, 1], [-44, -18, 1], [-52, 0, 1], [-58, 20, 1], [-64, 40], [-66, 80], [-67, 120], [-70, 155], [-80, 185], [-80, 212], [-68, 232], [-48, 238], [-30, 228], [-22, 205], [-21, 175], [-20, 145], [-16, 115], [-8, 88], [5, 68], [22, 52], [45, 42], [75, 40], [105, 38], [135, 30], [150, 15], [168, 0], [191, -30], [212, -60], [226, -90], [236, -120], [245, -150], [255, -170], [270, -180], [288, -172], [296, -155], [285, -120], [263, -90], [241, -60], [220, -30], [198, 0], [176, 30], [154, 60], [126, 90], [111, 120], [90, 150], [68, 180], [47, 210], [28, 240], [15, 258], [-10, 276], [-50, 283], [-90, 276], [-122, 258], [-145, 230], [-155, 200], [-152, 160, 1]];
const CONTROL_LINE = [-124, 30]; // コントロールライン（ピット前のホームストレート）

function densify(P, step) {
  const out = [], n = P.length;
  for (let i = 0; i < n; i++) {
    const p0 = P[(i - 1 + n) % n], p1 = P[i], p2 = P[(i + 1) % n], p3 = P[(i + 2) % n];
    const m = Math.max(1, Math.round(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / step));
    for (let k = 0; k < m; k++) {
      const t = k / m, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1]), p1[2] && p2[2] ? 1 : 0]);
    }
  }
  return out;
}
function resample(P, step) {
  const n = P.length, cum = [0];
  for (let i = 1; i <= n; i++) { const a = P[i - 1], b = P[i % n]; cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  const L = cum[n], m = Math.round(L / step), out = [];
  let j = 0;
  for (let k = 0; k < m; k++) {
    const s = (k * L) / m;
    while (cum[j + 1] < s) j++;
    const t = (s - cum[j]) / (cum[j + 1] - cum[j]), a = P[j], b = P[(j + 1) % n];
    out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] && b[2] ? 1 : 0]);
  }
  return out;
}
const smoothC = (P, r) => { const n = P.length; return P.map((_, i) => { let x = 0, z = 0; for (let k = -r; k <= r; k++) { x += P[(i + k + n) % n][0]; z += P[(i + k + n) % n][1]; } return [x / (2 * r + 1), z / (2 * r + 1), P[i][2]]; }); };
const normalAt = (P, i) => { const n = P.length, a = P[(i - 2 + n) % n], b = P[(i + 2) % n]; const l = Math.hypot(b[0] - a[0], b[1] - a[1]); return [-(b[1] - a[1]) / l, (b[0] - a[0]) / l]; };

let P = resample(densify(WP, 2), 2);
let wl = [], wr = [];
for (let it = 0; it < 4; it++) {
  const n = P.length, Q = [];
  wl = []; wr = [];
  for (let i = 0; i < n; i++) {
    const [nx, nz] = normalAt(P, i);
    let dl = null, dr = null;
    for (let s = 0.5; s <= 14; s += 0.25) {
      if (dl === null && isE(P[i][0] + nx * s, P[i][1] + nz * s)) dl = s;
      if (dr === null && isE(P[i][0] - nx * s, P[i][1] - nz * s)) dr = s;
    }
    wl.push(dl); wr.push(dr);
    if (!P[i][2] && dl !== null && dr !== null && dl + dr > 7 && dl + dr < 24) { const o = (dl - dr) / 2; Q.push([P[i][0] + nx * o, P[i][1] + nz * o]); } else Q.push(P[i]);
  }
  P = resample(smoothC(Q, 6), 2);
}
// 始点をコントロールラインへ
{
  let bi = 0, bd = 1e18;
  P.forEach((p, i) => { const d = (p[0] - CONTROL_LINE[0]) ** 2 + (p[1] - CONTROL_LINE[1]) ** 2; if (d < bd) { bd = d; bi = i; } });
  P = [...P.slice(bi), ...P.slice(0, bi)];
}
const N = P.length;
// ---- 幅員：道路縁の間隔（検出できない所は補間）→ 中央値で均し、実測の舗装幅に合わせて1.2倍（11〜16m） ----
const wRaw = [];
for (let i = 0; i < N; i++) {
  const [nx, nz] = normalAt(P, i);
  let dl = null, dr = null;
  for (let s = 0.5; s <= 12; s += 0.25) {
    if (dl === null && isE(P[i][0] + nx * s, P[i][1] + nz * s)) dl = s;
    if (dr === null && isE(P[i][0] - nx * s, P[i][1] - nz * s)) dr = s;
  }
  wRaw.push(P[i][2] ? 15 : dl !== null && dr !== null && dl + dr > 7 && dl + dr < 18 ? dl + dr : null);
}
const known = wRaw.map((w, i) => (w !== null ? i : -1)).filter((i) => i >= 0);
const wFill = wRaw.map((w, i) => {
  if (w !== null) return w;
  let a = known[known.length - 1] - N, b = known[0] + N;
  for (const k of known) { if (k < i) a = k; else { b = k; break; } }
  const wa = wRaw[(a + N) % N], wb = wRaw[b % N], t = (i - a) / (b - a);
  return wa + (wb - wa) * t;
});
const wMed = wFill.map((_, i) => { const a = []; for (let k = -8; k <= 8; k++) a.push(wFill[(i + k + N) % N]); a.sort((p, q) => p - q); return a[8]; });
const wSm = wMed.map((_, i) => { let s = 0; for (let k = -6; k <= 6; k++) s += wMed[(i + k + N) % N]; return s / 13; });
const hw = wSm.map((w) => Math.max(5.5, Math.min(8.0, w * 0.6)));

// ---- 標高（DEM5A z15・双一次補間）----
const Z = 15, tiles = {};
const tile = (tx, ty) => {
  const k = `${tx}_${ty}`;
  if (!tiles[k]) tiles[k] = fs.readFileSync(path.join(dataDir, 'dem5a', `${k}.txt`), 'utf8').trim().split('\n').map((r) => r.split(',').map((v) => (v.trim() === 'e' ? null : +v)));
  return tiles[k];
};
const px = (gx, gy) => { const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256); return tile(tx, ty)[gy - ty * 256][gx - tx * 256]; };
function dem(lon, lat) {
  const n = 2 ** Z;
  const gx = ((lon + 180) / 360) * n * 256 - 0.5;
  const lr = (lat * Math.PI) / 180;
  const gy = ((1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2) * n * 256 - 0.5;
  const x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
  let s = 0, ws = 0;
  for (const [dx, dy, w] of [[0, 0, (1 - fx) * (1 - fy)], [1, 0, fx * (1 - fy)], [0, 1, (1 - fx) * fy], [1, 1, fx * fy]]) {
    const v = px(x0 + dx, y0 + dy);
    if (v !== null) { s += v * w; ws += w; }
  }
  return ws ? s / ws : null;
}
const yRaw = P.map(([x, z]) => dem(...toLL(x, z)));
// 縦断：ロバストな平滑化（tools/profile_smooth.mjs）。DEM の局所的な凹凸を消して上り下りだけを残す
let yS = yRaw.map((v, i) => v ?? yRaw[(i + 1) % N]);
yS = robustSmooth(yS, { lambda: 3e4, closed: true });

// ---- 周辺の地形（8m格子） ----
const T = { x0: -320, z0: -320, cell: 8, nx: 91, nz: 91 };
const TH = [];
for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) { const v = dem(...toLL(T.x0 + i * T.cell, T.z0 + j * T.cell)); TH.push(v ?? 25); }
const hmin = Math.min(...TH), hmax = Math.max(...TH), scale = (hmax - hmin) / 65535 || 1;
const buf = Buffer.alloc(TH.length * 2);
TH.forEach((v, k) => buf.writeUInt16LE(Math.round((v - hmin) / scale), k * 2));

let L = 0;
for (let i = 0; i < N; i++) L += Math.hypot(P[(i + 1) % N][0] - P[i][0], P[(i + 1) % N][1] - P[i][1]);
const out = {
  source: '国土地理院 ベクトルタイル（基盤地図情報 道路縁）・標高タイル（DEM5A）を加工して作成',
  origin: [LAT0, LON0], step: 2, length: +L.toFixed(1),
  road: P.map((p, i) => [+p[0].toFixed(2), +p[1].toFixed(2), +yS[i].toFixed(2), +hw[i].toFixed(2)]),
  terrain: { ...T, hmin: +hmin.toFixed(3), scale, data: buf.toString('base64') },
};
fs.writeFileSync(outFile, `// 自動生成（tools/tsukuba_data.mjs）。${out.source}\nexport default ${JSON.stringify(out)};\n`);
console.log(`points ${N}  length ${L.toFixed(1)}m  y ${Math.min(...yS).toFixed(1)}〜${Math.max(...yS).toFixed(1)}m  hw ${Math.min(...hw).toFixed(1)}〜${Math.max(...hw).toFixed(1)}  terrain ${hmin.toFixed(1)}〜${hmax.toFixed(1)}`);
