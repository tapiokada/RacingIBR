// 実在サーキットを国土地理院のデータから実寸・実標高で再現したコース（施設名はすべて架空）
//   tsukuba：つくば山麓サーキット 2000コース（筑波サーキット コース2000。tools/tsukuba_data.mjs → src/data/tsukuba.js）
//   suzuka ：鈴鹿丘陵サーキット 国際レーシングコース（鈴鹿サーキット 国際レーシングコース。立体交差あり）
//   fuji   ：富士山麓サーキット レーシングコース（富士スピードウェイ レーシングコース）
//   （鈴鹿・富士は tools/circuit_data.mjs → src/data/suzuka.js / fuji.js）
// 走行方向は時計回り。s=0 がコントロールライン。
import TSUKUBA from '../data/tsukuba.js';
import SUZUKA from '../data/suzuka.js';
import FUJI from '../data/fuji.js';
import { Corridor, CoursePath } from './track.js';

// 路面の種類と摩擦係数倍率・転がり抵抗（荷重比）
export const SURF = {
  asphalt: { mu: 1.0, rr: 0 },
  kerb: { mu: 0.9, rr: 0.004 },
  paved: { mu: 0.95, rr: 0 }, // 舗装されたランオフ
  grass: { mu: 0.55, rr: 0.05 },
  gravel: { mu: 0.45, rr: 0.22 },
};

export function buildCircuit(id, D) {
  const RAW = D.road, N = RAW.length;
  const PIT_WALL = id === 'tsukuba' ? [D.length - 150, 120] : [D.length + D.pit[0], D.pit[1]];
  const C = {
    id, data: D,
    n: N, x: new Float64Array(N), z: new Float64Array(N), y: new Float64Array(N), hw: new Float64Array(N), s: new Float64Array(N),
    tx: new Float64Array(N), tz: new Float64Array(N), curv: new Float64Array(N),
    runL: new Float64Array(N), runR: new Float64Array(N), // コース端からバリアまでの距離（左・右）
    kerbL: new Uint8Array(N), kerbR: new Uint8Array(N), // 縁石の有無
    gravelL: new Uint8Array(N), gravelR: new Uint8Array(N), // グラベル（なければ芝／舗装）
    pavedL: new Uint8Array(N), pavedR: new Uint8Array(N),
  };
  let acc = 0;
  for (let i = 0; i < N; i++) {
    C.x[i] = RAW[i][0]; C.z[i] = RAW[i][1]; C.y[i] = RAW[i][2]; C.hw[i] = RAW[i][3];
    if (i > 0) acc += Math.hypot(C.x[i] - C.x[i - 1], C.z[i] - C.z[i - 1]);
    C.s[i] = acc;
  }
  C.length = acc + Math.hypot(C.x[0] - C.x[N - 1], C.z[0] - C.z[N - 1]);
  const w = (i) => ((i % N) + N) % N;
  for (let i = 0; i < N; i++) {
    const a = w(i - 1), b = w(i + 1);
    const dx = C.x[b] - C.x[a], dz = C.z[b] - C.z[a], l = Math.hypot(dx, dz) || 1;
    C.tx[i] = dx / l; C.tz[i] = dz / l;
  }
  // 曲率（右旋回正）：前後10m
  for (let i = 0; i < N; i++) {
    const a = w(i - 5), b = w(i + 5);
    const ax = C.x[i] - C.x[a], az = C.z[i] - C.z[a], bx = C.x[b] - C.x[i], bz = C.z[b] - C.z[i];
    const la = Math.hypot(ax, az), lb = Math.hypot(bx, bz);
    C.curv[i] = Math.atan2(ax * bz - az * bx, ax * bx + az * bz) / ((la + lb) / 2);
  }
  // ---- ランオフ幅：コーナー外側は広く、内側・直線は狭く。他の区間（並走する直線など）とは間を空ける ----
  const kS = new Float64Array(N); // 前後30mで最大の曲率（コーナー手前からランオフを広げる）
  for (let i = 0; i < N; i++) { let m = 0, mi = 0; for (let k = -15; k <= 10; k++) { const v = C.curv[w(i + k)]; if (Math.abs(v) > Math.abs(m)) { m = v; mi = k; } } kS[i] = m; }
  // 近傍探索用グリッド
  const G = 12, grid = new Map();
  for (let i = 0; i < N; i++) { const k = Math.floor(C.x[i] / G) * 7919 + Math.floor(C.z[i] / G); let a = grid.get(k); if (!a) grid.set(k, (a = [])); a.push(i); }
  // 点(x,z)から、s が離れた別区間のコース端までの距離
  const otherGap = (x, z, si) => {
    const gx = Math.floor(x / G), gz = Math.floor(z / G);
    let best = 1e9;
    for (let ix = gx - 3; ix <= gx + 3; ix++) for (let iz = gz - 3; iz <= gz + 3; iz++) {
      const a = grid.get(ix * 7919 + iz); if (!a) continue;
      for (const j of a) {
        let ds = Math.abs(C.s[j] - C.s[si]); ds = Math.min(ds, C.length - ds);
        if (ds < 60) continue;
        const d = Math.hypot(C.x[j] - x, C.z[j] - z) - C.hw[j];
        if (d < best) best = d;
      }
    }
    return best;
  };
  for (let i = 0; i < N; i++) {
    const k = kS[i], R = Math.abs(k) > 1e-4 ? 1 / Math.abs(k) : 1e4;
    const outer = Math.max(0, Math.min(1, (160 - R) / 110)); // 半径50mで最大
    const outSide = k > 0 ? -1 : 1; // 右コーナーの外側は左(-1)
    const rx = -C.tz[i], rz = C.tx[i];
    for (const side of [-1, 1]) {
      let want = 7 + (side === outSide ? outer * 14 : 0);
      // 別区間との間：両側から近づくので、隙間の半分弱まで
      let lim = want;
      for (let d = 1; d <= want; d += 1) {
        const g = otherGap(C.x[i] + rx * side * (C.hw[i] + d), C.z[i] + rz * side * (C.hw[i] + d), i);
        if (g < d + 1.5) { lim = Math.max(2.5, (d + g) / 2 - 1.2); break; }
      }
      const run = Math.min(want, lim);
      if (side < 0) C.runL[i] = run; else C.runR[i] = run;
      const isOut = side === outSide && outer > 0.25;
      const tight = R < 90;
      (side < 0 ? C.kerbL : C.kerbR)[i] = R < 260 ? 1 : 0;
      (side < 0 ? C.gravelL : C.gravelR)[i] = isOut && tight && run > 9 ? 1 : 0;
    }
  }
  // ランオフ幅は前後になめらかに（最小値側へ寄せる）
  for (const arr of [C.runL, C.runR]) {
    const src = Float64Array.from(arr);
    for (let i = 0; i < N; i++) { let m = 1e9; for (let k = -4; k <= 4; k++) m = Math.min(m, src[w(i + k)] + Math.abs(k) * 1.2); let s = 0; for (let k = -3; k <= 3; k++) s += Math.min(src[w(i + k)], m + 3); arr[i] = Math.min(m, s / 7); }
  }
  // 縁石・グラベルはひとかたまりに（短い切れ目を埋め、短すぎるものは消す）
  for (const arr of [C.kerbL, C.kerbR, C.gravelL, C.gravelR]) {
    const src = Uint8Array.from(arr);
    for (let i = 0; i < N; i++) { let on = 0; for (let k = -4; k <= 4; k++) on += src[w(i + k)]; arr[i] = on >= 3 ? 1 : 0; }
  }
  // ホームストレート：右側（イン側）はピットウォール、左側は芝。グラベルなし
  for (let i = 0; i < N; i++) {
    const s = C.s[i];
    if (s > PIT_WALL[0] || s < PIT_WALL[1]) { C.runR[i] = Math.min(C.runR[i], 1.6); C.pavedR[i] = 1; C.gravelL[i] = C.gravelR[i] = 0; C.kerbR[i] = 0; }
  }
  C.pitWall = PIT_WALL;
  C.stand = id === 'tsukuba' ? [-70, 90] : D.stand;
  C.crossings = (D.crossings || []).map(([i, j]) => ({ i, j, s: [C.s[i], C.s[j]] }));
  C.terrain = decodeTerrain(D.terrain);
  buildCorners(C);
  return C;
}

function decodeTerrain(T) {
  const bin = typeof atob === 'function' ? atob(T.data) : Buffer.from(T.data, 'base64').toString('binary');
  const H = new Float32Array(T.nx * T.nz);
  for (let i = 0; i < H.length; i++) H[i] = T.hmin + (bin.charCodeAt(2 * i) | (bin.charCodeAt(2 * i + 1) << 8)) * T.scale;
  return { ...T, H };
}

// ---------------- 路面（高さ・種類） ----------------
const GCELL = 16;
export class CircuitGround {
  constructor(C) {
    this.C = C;
    const N = C.n, wrap = (i) => ((i % N) + N) % N;
    this.wrap = wrap;
    this.refY = null; // 車体の高さ（立体交差でどちらの路面か選ぶ。null＝最寄り）
    this.grid = new Map();
    for (let i = 0; i < N; i++) {
      const j = wrap(i + 1);
      const pad = C.hw[i] + Math.max(C.runL[i], C.runR[i]) + 14;
      const x0 = Math.floor((Math.min(C.x[i], C.x[j]) - pad) / GCELL), x1 = Math.floor((Math.max(C.x[i], C.x[j]) + pad) / GCELL);
      const z0 = Math.floor((Math.min(C.z[i], C.z[j]) - pad) / GCELL), z1 = Math.floor((Math.max(C.z[i], C.z[j]) + pad) / GCELL);
      for (let gx = x0; gx <= x1; gx++) for (let gz = z0; gz <= z1; gz++) {
        const k = gx * 73856093 ^ gz * 19349663;
        let a = this.grid.get(k); if (!a) this.grid.set(k, (a = [])); a.push(i);
      }
    }
    this.lastSurf = SURF.asphalt;
  }

  // 最寄りの中心線区間 { i, t, s, lat(右正), d }
  nearest(x, z, refY = this.refY) {
    const C = this.C, wrap = this.wrap;
    const arr = this.grid.get(Math.floor(x / GCELL) * 73856093 ^ Math.floor(z / GCELL) * 19349663);
    if (!arr) return null;
    let best = -1, bd = 1e18, bt = 0, bs = 1e18;
    for (const i of arr) {
      const j = wrap(i + 1);
      const ax = C.x[i], az = C.z[i], dx = C.x[j] - ax, dz = C.z[j] - az, l2 = dx * dx + dz * dz;
      let t = l2 > 0 ? ((x - ax) * dx + (z - az) * dz) / l2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const ex = x - (ax + dx * t), ez = z - (az + dz * t), d = ex * ex + ez * ez;
      // 立体交差：車体の高さと3m以上違う路面は選ばない（どちらも違えば最寄り）
      const score = d + (refY != null && Math.abs(C.y[i] + (C.y[j] - C.y[i]) * t - refY) > 3 ? 1e6 : 0);
      if (score < bs) { bs = score; bd = d; best = i; bt = t; }
    }
    const i = best, j = wrap(i + 1);
    const dx = C.x[j] - C.x[i], dz = C.z[j] - C.z[i], l = Math.hypot(dx, dz) || 1;
    const lat = ((x - C.x[i]) * -dz + (z - C.z[i]) * dx) / l;
    return { i, t: bt, s: C.s[i] + bt * l, lat, d: Math.sqrt(bd) };
  }

  // 路面の種類（lat：右正）
  surfAt(i, lat) {
    const C = this.C;
    const hw = C.hw[i], a = Math.abs(lat);
    if (a <= hw) return SURF.asphalt;
    const right = lat > 0;
    if (a <= hw + 1.3 && (right ? C.kerbR[i] : C.kerbL[i])) return SURF.kerb;
    if (right ? C.pavedR[i] : C.pavedL[i]) return SURF.paved;
    if (a > hw + 2.5 && (right ? C.gravelR[i] : C.gravelL[i])) return SURF.gravel;
    return SURF.grass;
  }

  // 高さ（横断は水平。縁石は少し高く、芝・グラベルは路面より少し低い）。lastSurf に路面の種類を残す
  h(x, z) {
    const C = this.C;
    const q = this.nearest(x, z);
    if (!q) { this.lastSurf = SURF.grass; return terrainAt(C, x, z); }
    const j = this.wrap(q.i + 1);
    const y = C.y[q.i] + (C.y[j] - C.y[q.i]) * q.t;
    const sf = this.surfAt(q.i, q.lat);
    this.lastSurf = sf;
    if (sf === SURF.asphalt || sf === SURF.paved) return y;
    const e = Math.abs(q.lat) - C.hw[q.i];
    if (sf === SURF.kerb) return y + 0.03 * Math.sin(Math.min(1, e / 1.3) * Math.PI);
    return y - Math.min(0.08, e * 0.04);
  }

  // 景観の地面の高さ：近くのコースのうち一番低い路面に合わせる（立体交差の下の道を地面で埋めない）
  groundY(x, z) {
    const C = this.C, wrap = this.wrap;
    const arr = this.grid.get(Math.floor(x / GCELL) * 73856093 ^ Math.floor(z / GCELL) * 19349663);
    const T = terrainAt(C, x, z);
    if (!arr) return T;
    let ymin = 1e9, dmin = 1e9, hwm = 8;
    for (const i of arr) {
      const j = wrap(i + 1);
      const ax = C.x[i], az = C.z[i], dx = C.x[j] - ax, dz = C.z[j] - az, l2 = dx * dx + dz * dz;
      let t = l2 > 0 ? ((x - ax) * dx + (z - az) * dz) / l2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const d = Math.hypot(x - (ax + dx * t), z - (az + dz * t));
      const reach = C.hw[i] + Math.max(C.runL[i], C.runR[i]) + 10;
      if (d < reach) ymin = Math.min(ymin, C.y[i] + (C.y[j] - C.y[i]) * t);
      if (d - C.hw[i] < dmin) { dmin = d - C.hw[i]; hwm = C.hw[i]; }
    }
    if (ymin > 1e8) { // 少し離れている：最寄りの路面から地形へなめらかに
      const q = this.nearest(x, z, null);
      ymin = C.y[q.i];
    }
    const k = Math.max(0, Math.min(1, 1 - (dmin - 24) / 30));
    return T * (1 - k) + (ymin - 0.12) * k;
  }
}

// ---------------- 走行可能領域（コース＋ランオフ。外周はバリア） ----------------
const corrCache = {};
export function circuitCorridor(C) {
  if (corrCache[C.id]) return corrCache[C.id];
  const N = C.n, wrap = (i) => ((i % N) + N) % N;
  const segs = [];
  const off = new Float64Array(N), hwAll = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const L = C.hw[i] + C.runL[i], R = C.hw[i] + C.runR[i];
    off[i] = (R - L) / 2; hwAll[i] = (L + R) / 2;
  }
  for (let i = 0; i < N; i++) {
    const j = wrap(i + 1);
    const rxi = -C.tz[i], rzi = C.tx[i], rxj = -C.tz[j], rzj = C.tx[j];
    segs.push({ ax: C.x[i] + rxi * off[i], az: C.z[i] + rzi * off[i], bx: C.x[j] + rxj * off[j], bz: C.z[j] + rzj * off[j], hw: Math.min(hwAll[i], hwAll[j]), y: (C.y[i] + C.y[j]) / 2, road: 'circuit' });
  }
  const corr = new Corridor(segs, 20);
  if (C.crossings.length) corr.leveled = true; // 立体交差：車体の高さの路面だけを壁判定に使う
  return (corrCache[C.id] = corr);
}

// ---------------- 地形 ----------------
export function terrainAt(C, x, z) {
  const T = C.terrain;
  const fx = Math.max(0, Math.min(T.nx - 1.001, (x - T.x0) / T.cell)), fz = Math.max(0, Math.min(T.nz - 1.001, (z - T.z0) / T.cell));
  const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
  const at = (a, b) => T.H[b * T.nx + a];
  return at(i, j) * (1 - u) * (1 - v) + at(i + 1, j) * u * (1 - v) + at(i, j + 1) * (1 - u) * v + at(i + 1, j + 1) * u * v;
}

// ---------------- コース（周回） ----------------
export let CIRCUIT_BRAKE_K = +(globalThis.process?.env?.CBK || 0.85), CIRCUIT_V_K = +(globalThis.process?.env?.CVK || 0.96);
// CoursePath と同じインターフェース（project / posAt / レーシングライン / 速度プロファイル）
export class CircuitPath {
  constructor(layout) {
    const c = layout.course;
    this.name = layout.name;
    this.laps = c.laps;
    this.circuit = true;
    const C = (this.C = CIRCUITS[c.circuit]);
    const N = C.n;
    this.n = N;
    this.x = Float32Array.from(C.x); this.z = Float32Array.from(C.z); this.y = Float32Array.from(C.y);
    this.hw = Float32Array.from(C.hw); this.s = Float32Array.from(C.s);
    this.tx = Float32Array.from(C.tx); this.tz = Float32Array.from(C.tz);
    if (!CircuitPath.prototype.project) for (const k of ['normal', 'project', 'buildRacingLine']) CircuitPath.prototype[k] = CoursePath.prototype[k];
    this.extra = new Float32Array(N);
    this.length = C.length;
    this.corners = [];
    this.corridor = circuitCorridor(C);
    this.sectorBounds = C.sectorBounds;
    this.sectors = [0, ...this.sectorBounds];
    this.buildRacingLine();
  }

  // サーキットはコース外が芝・グラベルで、はみ出すと立て直せないため、ブレーキングに余裕を持たせる
  speedProfile(spec, skill) {
    const v = CoursePath.prototype.speedProfile.call(this, { ...spec, brakeTorque: spec.brakeTorque * CIRCUIT_BRAKE_K }, skill);
    for (let i = 0; i < v.length; i++) v[i] *= CIRCUIT_V_K;
    return v;
  }

  posAt(s, lat = 0) {
    const p = CoursePath.prototype.posAt.call(this, s, lat);
    const j = (p.i + 1) % this.n;
    const s0 = this.s[p.i], s1 = j === 0 ? this.length : this.s[j];
    const ss = ((s % this.length) + this.length) % this.length;
    const t = s1 > s0 ? Math.max(0, Math.min(1, (ss - s0) / (s1 - s0))) : 0;
    p.y = this.y[p.i] + (this.y[j] - this.y[p.i]) * t;
    return p;
  }
}

// コーナーの頂点（曲率のピーク）・セクター境界・コーナー名の看板
function buildCorners(C) {
  const N = C.n, wrap = (i) => ((i % N) + N) % N;
  const peaks = [];
  for (let i = 0; i < N; i++) {
    const k = Math.abs(C.curv[i]);
    if (k < 1 / 70) continue;
    let isMax = true;
    for (let d = -20; d <= 20; d++) if (Math.abs(C.curv[wrap(i + d)]) > k) { isMax = false; break; }
    if (isMax) peaks.push({ i, s: C.s[i], k: C.curv[i] });
  }
  C.peaks = peaks;
  const near = (s0, s1, sign) => peaks.filter((p) => p.s >= s0 && p.s <= s1 && Math.sign(p.k) === sign)[0];
  const list = [];
  const add = (name, p, s) => { if (p || s != null) list.push({ name, s: p ? p.s : s, right: p ? p.k > 0 : true }); };
  if (C.id === 'tsukuba') {
    const tight = peaks.filter((p) => 1 / Math.abs(p.k) < 25);
    const HP1 = tight.find((p) => p.k < 0 && p.s > 400 && p.s < 900) || { s: C.length * 0.29 }; // 第1ヘアピン（左）
    const HP2 = tight.find((p) => p.k > 0 && p.s > 900 && p.s < 1500) || { s: C.length * 0.56 }; // 第2ヘアピン（右）
    // セクター：S1 ホームストレート〜S字／S2 第1ヘアピン〜第2ヘアピン／S3 バックストレート〜最終コーナー
    C.sectorBounds = [HP1.s - 50, HP2.s + 100];
    const c1 = near(100, 300, 1);
    add('1コーナー', null, c1 ? c1.s - 35 : 150);
    add('2コーナー', null, c1 ? c1.s + 45 : 230);
    add('S字', near(380, HP1.s - 60, 1), null);
    add('第1ヘアピン', HP1, null);
    add('ブリッジコーナー', near(HP1.s + 60, HP1.s + 260, 1), null);
    add('第2ヘアピン', HP2, null);
    add('バックストレート', null, HP2.s + 260);
    add('最終コーナー', near(C.length - 400, C.length - 150, 1), null);
  } else {
    // 設定のコーナー位置（s）の前後60mで一番きつい所。向きは曲率の符号
    for (const [name, s0] of C.data.corners) {
      let bi = -1, bk = 0;
      for (let i = 0; i < N; i++) { let ds = Math.abs(C.s[i] - s0); ds = Math.min(ds, C.length - ds); if (ds <= 60 && Math.abs(C.curv[i]) > Math.abs(bk)) { bk = C.curv[i]; bi = i; } }
      list.push({ name, s: bi >= 0 ? C.s[bi] : s0, right: bk >= 0 });
    }
    // セクター：全長の1/3・2/3付近（前後150m）で一番まっすぐな所
    const pick = (target) => { let best = target, bv = 1e9; for (let i = 0; i < N; i++) { if (Math.abs(C.s[i] - target) > 150) continue; let c = 0; for (let k = -15; k <= 15; k++) c += Math.abs(C.curv[wrap(i + k)]); if (c < bv) { bv = c; best = C.s[i]; } } return best; };
    C.sectorBounds = [pick(C.length / 3), pick((C.length * 2) / 3)];
  }
  C.signs = list;
}

export const CIRCUITS = { tsukuba: buildCircuit('tsukuba', TSUKUBA), suzuka: buildCircuit('suzuka', SUZUKA), fuji: buildCircuit('fuji', FUJI) };
