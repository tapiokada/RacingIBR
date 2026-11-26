// 都心環状線（C1）沿いの建物の外形（国土地理院 基盤地図情報 建築物の外周線 BldL）をゲーム用に変換する
// usage: node tools/c1_buildings.mjs <dataDir> src/data/c1.js src/data/c1_buildings.js [src/data/shuto5.js]
//   shuto5.js を渡すと 5号池袋線・竹橋JCT連絡路の沿線も含める
//   dataDir/fgd18/{x}_{y}.geojson : experimental_fgd z18（C1 の両側約300mの範囲）
// 外周線はタイルの境界で切れているので、同じ fid の線分を端点でつないで閉じた輪にする。
// 高さのデータはないので、種別（普通建物／堅ろう建物／無壁舎）と建築面積から推定（fid で決まる乱数で個体差）。
// C1 の本線から 7m 以内に入る建物は除く（高架・掘割と重ならないように）
import fs from 'fs';
import path from 'path';

const [dataDir, c1File, outFile, s5File] = process.argv.slice(2);
const C1 = (await import(path.resolve(c1File))).default;
const S5 = s5File ? (await import(path.resolve(s5File))).default : null;
const [LAT0, LON0] = C1.origin, KX = Math.cos((LAT0 * Math.PI) / 180) * 111320, KZ = 110574;
const toXZ = ([lo, la]) => [(lo - LON0) * KX, -(la - LAT0) * KZ];

// 本線までの距離（格子で近傍の点を探す）
const G = 80, grid = new Map();
const ROADS = [C1.outer.road, C1.inner.road, ...(S5 ? ['U', 'D', 'UO', 'UI', 'DO', 'DI'].map((k) => S5[k].road) : [])];
for (const r of ROADS) for (const p of r) { const key = Math.floor(p[0] / G) * 7919 + Math.floor(p[1] / G); (grid.get(key) || grid.set(key, []).get(key)).push(p); }
const roadDist = (x, z) => { let bd = 1e9; const gx = Math.floor(x / G), gz = Math.floor(z / G); for (let a = -4; a <= 4; a++) for (let b = -4; b <= 4; b++) for (const p of grid.get((gx + a) * 7919 + gz + b) || []) bd = Math.min(bd, Math.hypot(p[0] - x, p[1] - z)); return bd; };

// ---- 線分を fid ごとに集める ----
const byFid = new Map();
const D = path.join(dataDir, 'fgd18');
for (const f of fs.readdirSync(D)) {
  let j; try { j = JSON.parse(fs.readFileSync(path.join(D, f))); } catch { continue; }
  for (const ft of j.features) {
    const p = ft.properties;
    if (p.class !== 'BldL') continue;
    const g = ft.geometry; const ls = g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : g.coordinates;
    let e = byFid.get(p.fid); if (!e) byFid.set(p.fid, (e = { type: p.type, segs: [], seen: new Set() }));
    for (const l of ls) { const key = JSON.stringify(l); if (e.seen.has(key)) continue; e.seen.add(key); e.segs.push(l.map(toXZ)); }
  }
}
const close = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]) < 0.05;
function joinRings(segs) {
  const rest = segs.map((s) => s.slice());
  const rings = [];
  while (rest.length) {
    let cur = rest.pop();
    let grew = true;
    while (grew && !close(cur[0], cur[cur.length - 1])) {
      grew = false;
      for (let i = 0; i < rest.length; i++) {
        const s = rest[i], a = cur[cur.length - 1];
        if (close(a, s[0])) { cur = cur.concat(s.slice(1)); }
        else if (close(a, s[s.length - 1])) { cur = cur.concat(s.slice(0, -1).reverse()); }
        else if (close(cur[0], s[s.length - 1])) { cur = s.concat(cur.slice(1)); }
        else if (close(cur[0], s[0])) { cur = s.slice().reverse().concat(cur.slice(1)); }
        else continue;
        rest.splice(i, 1); grew = true; break;
      }
    }
    rings.push(cur);
  }
  return rings;
}
// Douglas-Peucker
function simplify(P, eps) {
  if (P.length < 4) return P;
  const keep = new Uint8Array(P.length); keep[0] = keep[P.length - 1] = 1;
  const st = [[0, P.length - 1]];
  while (st.length) {
    const [a, b] = st.pop(); let md = 0, mi = -1;
    const [ax, az] = P[a], [bx, bz] = P[b], dx = bx - ax, dz = bz - az, l = Math.hypot(dx, dz) || 1;
    for (let i = a + 1; i < b; i++) { const d = Math.abs((P[i][0] - ax) * dz - (P[i][1] - az) * dx) / l; if (d > md) { md = d; mi = i; } }
    if (md > eps) { keep[mi] = 1; st.push([a, mi], [mi, b]); }
  }
  return P.filter((_, i) => keep[i]);
}
const area = (P) => { let s = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - b[0] * a[1]; } return s / 2; };
function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; }

const TYPE = { 普通建物: 0, 堅ろう建物: 1, 普通無壁舎: 2 };
const out = []; const dbg = { rings: 0, small: 0, far: 0, few: 0 };
let dropRoad = 0, dropOpen = 0;
for (const [fid, e] of byFid) {
  for (let ring of joinRings(e.segs)) {
    const gap = Math.hypot(ring[0][0] - ring[ring.length - 1][0], ring[0][1] - ring[ring.length - 1][1]);
    if (gap > 12) { dropOpen++; continue; }
    if (gap < 0.05) ring = ring.slice(0, -1);
    { // 閉じた輪：始点から一番遠い点で2つに分けて単純化
      let fi = 0, fd = -1; ring.forEach((q, i) => { const d = Math.hypot(q[0] - ring[0][0], q[1] - ring[0][1]); if (d > fd) { fd = d; fi = i; } });
      const a = simplify(ring.slice(0, fi + 1), 0.6), b = simplify([...ring.slice(fi), ring[0]], 0.6);
      ring = [...a.slice(0, -1), ...b.slice(0, -1)];
    }
    dbg.rings++; if (ring.length < 3) { dbg.few++; continue; }
    let A = area(ring);
    if (Math.abs(A) < 12) { dbg.small++; continue; }
    if (A < 0) { ring.reverse(); A = -A; }
    if (ring.some(([x, z]) => roadDist(x, z) < 7)) { dropRoad++; continue; }
    const cx = ring.reduce((s, p) => s + p[0], 0) / ring.length, cz = ring.reduce((s, p) => s + p[1], 0) / ring.length;
    if (roadDist(cx, cz) > 320) { dbg.far++; continue; }
    const t = TYPE[e.type] ?? 0, r = hash(fid);
    let h;
    if (t === 2) h = 3 + r * 3;
    else if (t === 0) h = 4 + r * 8;
    else if (A < 150) h = 10 + r * 16;
    else if (A < 600) h = 16 + r * 30;
    else if (A < 2500) h = 28 + r * 55;
    else h = 45 + r * 120;
    out.push({ t, h: Math.round(h * 10), p: ring.map(([x, z]) => [Math.round(x * 10), Math.round(z * 10)]) });
  }
}
// 詰める：[種別, 高さdm, 点数, x0, z0, x1, z1, ...]（Int16, dm）
const arr = [];
for (const b of out) { arr.push(b.t, Math.min(32767, b.h), b.p.length); for (const [x, z] of b.p) arr.push(x, z); }
const buf = Buffer.from(Int16Array.from(arr).buffer);
fs.writeFileSync(outFile, `// 自動生成（tools/c1_buildings.mjs）。国土地理院 基盤地図情報（建築物の外周線）を加工して作成。高さは種別と面積からの推定\n// data: Int16（デシメートル）[種別(0普通 1堅ろう 2無壁舎), 高さ, 点数, x0, z0, ...] を base64\nexport default { count: ${out.length}, data: '${buf.toString('base64')}' };\n`);
console.log(JSON.stringify(dbg), byFid.size); console.log(`buildings ${out.length}  (dropped near road ${dropRoad}, open ${dropOpen})  points ${out.reduce((s, b) => s + b.p.length, 0)}  ${(buf.length / 1024).toFixed(0)}KB`);
