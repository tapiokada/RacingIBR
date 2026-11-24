// 榛名山の峠道（県道33号 渋川松井田線：ゆうすげ入口〜伊香保温泉石段街）
// 国土地理院の道路中心線・DEM5Aから生成した実寸・実標高のデータ（tools/haruna_data.py）を使う。
// 道路データの向き：s=0 が上（ゆうすげ側・標高約1147m）、終点が下（石段街側・約703m）。
import HARUNA from '../data/haruna.js';
import { Corridor } from './track.js';
import { TOUGE_COURSES } from '../data/map.js';

const RAW = HARUNA.road;
const N = RAW.length;
export const ROAD = {
  n: N,
  x: new Float64Array(N), z: new Float64Array(N), y: new Float64Array(N), s: new Float64Array(N),
  curv: new Float64Array(N), hw: new Float64Array(N), bank: new Float64Array(N),
};
{
  const R = ROAD;
  let acc = 0;
  for (let i = 0; i < N; i++) {
    R.x[i] = RAW[i][0]; R.z[i] = RAW[i][1]; R.y[i] = RAW[i][2];
    if (i > 0) acc += Math.hypot(R.x[i] - R.x[i - 1], R.z[i] - R.z[i - 1]);
    R.s[i] = acc;
  }
  R.length = acc;
  // 曲率（右旋回正）：前後10mの方位差
  const K = 5;
  for (let i = 0; i < N; i++) {
    const a = Math.max(0, i - K), b = Math.min(N - 1, i + K), c = i;
    const ax = R.x[c] - R.x[a], az = R.z[c] - R.z[a], bx = R.x[b] - R.x[c], bz = R.z[b] - R.z[c];
    const la = Math.hypot(ax, az), lb = Math.hypot(bx, bz);
    R.curv[i] = la > 0 && lb > 0 ? Math.atan2(ax * bz - az * bx, ax * bx + az * bz) / ((la + lb) / 2) : 0;
  }
  // 幅員：2車線（片側3.0m）＋路肩。半径40m未満のカーブは内側を中心に最大3m拡幅（実際の峠のヘアピンも拡幅されている）
  const extra = new Float64Array(N), bank = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const k = Math.abs(R.curv[i]);
    const rad = k > 1e-4 ? 1 / k : 1e4;
    extra[i] = Math.max(0, Math.min(1, (45 - rad) / 25)) * 4.5;
    // 片勾配（カーブ内側が低い）：最大5%
    bank[i] = Math.sign(R.curv[i]) * Math.min(0.05, k * 1.0);
  }
  const smooth = (src, r, fn = Math.max) => {
    const out = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      let v = src[i];
      if (fn === Math.max) { for (let j = Math.max(0, i - r); j <= Math.min(N - 1, i + r); j++) v = Math.max(v, src[j] * (1 - Math.abs(j - i) / (r + 1))); }
      else { let sum = 0, c = 0; for (let j = Math.max(0, i - r); j <= Math.min(N - 1, i + r); j++) { sum += src[j]; c++; } v = sum / c; }
      out[i] = v;
    }
    return out;
  };
  const ex = smooth(extra, 10); // 前後20mかけてすりつけ
  const bk = smooth(bank, 8, 'avg');
  for (let i = 0; i < N; i++) { R.hw[i] = 4.0 + ex[i] / 2; R.bank[i] = bk[i]; }
  // セクター境界：全長の1/3・2/3付近で最も直線的な地点
  const pick = (target) => {
    let best = -1, bv = 1e9;
    for (let i = 0; i < N; i++) {
      if (Math.abs(R.s[i] - target) > 180) continue;
      let c = 0; for (let j = Math.max(0, i - 15); j <= Math.min(N - 1, i + 15); j++) c += Math.abs(R.curv[j]);
      if (c < bv) { bv = c; best = i; }
    }
    return R.s[best];
  };
  R.split = [pick(R.length / 3), pick((R.length * 2) / 3)];
}

// 各コースの計測区間を確定（下り方向の距離）
{
  const L = ROAD.length, [a, b] = ROAD.split;
  const S0 = 60, S3 = L - 150;
  for (const c of TOUGE_COURSES) {
    const p = c.touge.part;
    if (p === 'full') { c.touge.from = S0; c.touge.to = S3; c.sectorBounds = [a, b]; }
    else if (p === 1) { c.touge.from = S0; c.touge.to = a; }
    else if (p === 2) { c.touge.from = a; c.touge.to = b; }
    else { c.touge.from = b; c.touge.to = S3; }
    c.length = c.touge.to - c.touge.from;
  }
}

const segHw = (i) => Math.min(ROAD.hw[i], ROAD.hw[i + 1]);

// ---------------- 路面高さ ----------------
const GCELL = 16;
export class HarunaGround {
  constructor(lots = []) {
    this.grid = new Map();
    this.lots = lots; // 駐車場など（平らな矩形：{x,z,y,r}）
    for (let i = 0; i < N - 1; i++) {
      const pad = segHw(i) + 8;
      const x0 = Math.floor((Math.min(ROAD.x[i], ROAD.x[i + 1]) - pad) / GCELL), x1 = Math.floor((Math.max(ROAD.x[i], ROAD.x[i + 1]) + pad) / GCELL);
      const z0 = Math.floor((Math.min(ROAD.z[i], ROAD.z[i + 1]) - pad) / GCELL), z1 = Math.floor((Math.max(ROAD.z[i], ROAD.z[i + 1]) + pad) / GCELL);
      for (let gx = x0; gx <= x1; gx++) for (let gz = z0; gz <= z1; gz++) {
        const k = gx * 73856093 ^ gz * 19349663;
        let a = this.grid.get(k); if (!a) this.grid.set(k, (a = [])); a.push(i);
      }
    }
    this.last = 0;
  }

  // 最寄りの中心線区間 → { i, t, s, lat, d }
  nearest(x, z) {
    const k = Math.floor(x / GCELL) * 73856093 ^ Math.floor(z / GCELL) * 19349663;
    const arr = this.grid.get(k);
    let best = -1, bd = 1e18, bt = 0;
    const test = (i) => {
      const ax = ROAD.x[i], az = ROAD.z[i], dx = ROAD.x[i + 1] - ax, dz = ROAD.z[i + 1] - az;
      const l2 = dx * dx + dz * dz;
      let t = l2 > 0 ? ((x - ax) * dx + (z - az) * dz) / l2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const ex = x - (ax + dx * t), ez = z - (az + dz * t);
      const d = ex * ex + ez * ez;
      if (d < bd) { bd = d; best = i; bt = t; }
    };
    if (arr) for (const i of arr) test(i);
    else for (let i = Math.max(0, this.last - 60); i < Math.min(N - 1, this.last + 60); i++) test(i);
    if (best < 0) return null;
    this.last = best;
    const i = best;
    const dx = ROAD.x[i + 1] - ROAD.x[i], dz = ROAD.z[i + 1] - ROAD.z[i];
    const l = Math.hypot(dx, dz) || 1;
    const lat = ((x - ROAD.x[i]) * -dz + (z - ROAD.z[i]) * dx) / l; // 右（下り方向に対して）正
    return { i, t: bt, s: ROAD.s[i] + bt * l, lat, d: Math.sqrt(bd) };
  }

  // 中心線上の高さ（片勾配込み）。ヘアピンの内側など複数の区間が近い所では距離で重み付けして連続にする
  h(x, z) {
    for (const L of this.lots) {
      const dx = x - L.x, dz = z - L.z;
      if (dx * dx + dz * dz < L.r * L.r) return L.y;
    }
    const k = Math.floor(x / GCELL) * 73856093 ^ Math.floor(z / GCELL) * 19349663;
    const arr = this.grid.get(k);
    if (!arr) { const q = this.nearest(x, z); return q ? ROAD.y[q.i] : 0; }
    const D = this._d || (this._d = new Float64Array(256)), Hh = this._h || (this._h = new Float64Array(256));
    let dmin = 1e18, m = 0;
    for (const i of arr) {
      const ax = ROAD.x[i], az = ROAD.z[i], dx = ROAD.x[i + 1] - ax, dz = ROAD.z[i + 1] - az;
      const l2 = dx * dx + dz * dz;
      let t = l2 > 0 ? ((x - ax) * dx + (z - az) * dz) / l2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const ex = x - (ax + dx * t), ez = z - (az + dz * t);
      const d = Math.sqrt(ex * ex + ez * ez);
      const l = Math.sqrt(l2) || 1;
      const lat0 = (ex * -dz + ez * dx) / l;
      const y = ROAD.y[i] + (ROAD.y[i + 1] - ROAD.y[i]) * t;
      const bk = ROAD.bank[i] + (ROAD.bank[i + 1] - ROAD.bank[i]) * t;
      const hw = ROAD.hw[i] + 1.5;
      const lat = lat0 < -hw ? -hw : lat0 > hw ? hw : lat0;
      if (m < 256) { D[m] = d; Hh[m] = y - bk * lat; m++; }
      if (d < dmin) dmin = d;
    }
    let sw = 0, sh = 0;
    for (let j = 0; j < m; j++) {
      const e = (D[j] - dmin) / 1.8;
      if (e > 3) continue;
      const w = Math.exp(-e * e);
      sw += w; sh += w * Hh[j];
    }
    return sh / sw;
  }
}

// 峠全体の走行領域（道路＋駐車場など）
export function harunaCorridor(extraSegs = []) {
  const segs = [];
  for (let i = 0; i < N - 1; i++) segs.push({ ax: ROAD.x[i], az: ROAD.z[i], bx: ROAD.x[i + 1], bz: ROAD.z[i + 1], hw: segHw(i), road: 'haruna' });
  return new Corridor([...segs, ...extraSegs], 20);
}

// ---------------- コース（片道） ----------------
// layout.course.touge = { from, to }（道路データ上の距離。from<to のとき下り）
export class TougePath {
  constructor(layout, corridor) {
    const c = layout.course;
    const up = !!layout.reverse; // 上り＝データを逆向きに
    this.open = true;
    this.name = layout.name;
    this.laps = 1;
    const n = N;
    this.n = n;
    this.x = new Float32Array(n); this.z = new Float32Array(n); this.y = new Float32Array(n);
    this.hw = new Float32Array(n); this.s = new Float32Array(n); this.extra = new Float32Array(n);
    this.tx = new Float32Array(n); this.tz = new Float32Array(n);
    for (let k = 0; k < n; k++) {
      const i = up ? n - 1 - k : k;
      this.x[k] = ROAD.x[i]; this.z[k] = ROAD.z[i]; this.y[k] = ROAD.y[i]; this.hw[k] = ROAD.hw[i];
      this.s[k] = up ? ROAD.length - ROAD.s[i] : ROAD.s[i];
      this.extra[k] = (ROAD.hw[i] - 4.0) * 2;
    }
    this.length = ROAD.length;
    for (let i = 0; i < n; i++) {
      const a = Math.max(0, i - 1), b = Math.min(n - 1, i + 1);
      const dx = this.x[b] - this.x[a], dz = this.z[b] - this.z[a];
      const l = Math.hypot(dx, dz) || 1;
      this.tx[i] = dx / l; this.tz[i] = dz / l;
    }
    // 計測区間（コースの向きでの距離）
    const T = c.touge;
    const a = up ? ROAD.length - T.to : T.from, b = up ? ROAD.length - T.from : T.to;
    this.startS = a; this.finishS = b; this.raceLen = b - a;
    // セクター境界（フルコースは実際の区間境界、区間コースは3等分）
    const bounds = c.sectorBounds ? c.sectorBounds.map((v) => (up ? ROAD.length - v : v) - a).sort((p, q) => p - q) : [this.raceLen / 3, (this.raceLen * 2) / 3];
    this.sectorBounds = bounds;
    this.sectors = [a, a + bounds[0], a + bounds[1]];
    this.corridor = corridor || harunaCorridor();
    this.corners = [];
    this.buildRacingLine();
  }

  normal(i) { return [-this.tz[i], this.tx[i]]; }

  project(x, z, hint = -1) {
    let best = -1, bd = 1e18;
    const scan = (from, to) => {
      for (let i = Math.max(0, from); i <= Math.min(this.n - 1, to); i++) {
        const dx = x - this.x[i], dz = z - this.z[i];
        const d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
    };
    if (hint >= 0) {
      scan(hint - 30, hint + 60);
      if (Math.sqrt(bd) > this.hw[best] + 12) { bd = 1e18; scan(0, this.n - 1); }
    } else scan(0, this.n - 1);
    const i = best;
    const dx = x - this.x[i], dz = z - this.z[i];
    const along = dx * this.tx[i] + dz * this.tz[i];
    const [rx, rz] = this.normal(i);
    const lat = dx * rx + dz * rz;
    const s = Math.max(0, Math.min(this.length, this.s[i] + along));
    return { i, s, lat, dist: Math.sqrt(bd) };
  }

  posAt(s, lat = 0) {
    s = Math.max(0, Math.min(this.length - 0.01, s));
    let lo = 0, hi = this.n - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (this.s[mid] <= s) lo = mid; else hi = mid - 1; }
    const i = Math.min(lo, this.n - 2), j = i + 1;
    const segLen = this.s[j] - this.s[i];
    const t = segLen > 0 ? (s - this.s[i]) / segLen : 0;
    const x = this.x[i] + (this.x[j] - this.x[i]) * t;
    const z = this.z[i] + (this.z[j] - this.z[i]) * t;
    const [rx, rz] = this.normal(i);
    return { x: x + rx * lat, z: z + rz * lat, h: Math.atan2(this.tx[i], this.tz[i]), i, y: this.y[i] + (this.y[j] - this.y[i]) * t };
  }

  // レーシングライン（弾性バンド法・端は固定）
  buildRacingLine() {
    const n = this.n;
    const off = new Float32Array(n);
    const lx = new Float32Array(n), lz = new Float32Array(n);
    const nrm = [];
    for (let i = 0; i < n; i++) nrm.push(this.normal(i));
    const margin = 2.1;
    for (const span of [16, 8, 4]) {
      for (let it = 0; it < 120; it++) {
        for (let i = 0; i < n; i++) { lx[i] = this.x[i] + nrm[i][0] * off[i]; lz[i] = this.z[i] + nrm[i][1] * off[i]; }
        for (let i = span; i < n - span; i++) {
          const a = i - span, b = i + span;
          const mx = (lx[a] + lx[b]) / 2, mz = (lz[a] + lz[b]) / 2;
          const d = (mx - this.x[i]) * nrm[i][0] + (mz - this.z[i]) * nrm[i][1];
          const lim = Math.max(0, this.hw[i] - margin);
          off[i] += (d - off[i]) * 0.5;
          off[i] = Math.max(-lim, Math.min(lim, off[i]));
        }
      }
    }
    this.lineOff = off;
    this.lx = new Float32Array(n); this.lz = new Float32Array(n);
    for (let i = 0; i < n; i++) { this.lx[i] = this.x[i] + nrm[i][0] * off[i]; this.lz[i] = this.z[i] + nrm[i][1] * off[i]; }
    this.lseg = new Float32Array(n);
    for (let i = 0; i < n - 1; i++) this.lseg[i] = Math.hypot(this.lx[i + 1] - this.lx[i], this.lz[i + 1] - this.lz[i]);
    this.lseg[n - 1] = 2;
    this.curv = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let a = i, b = i, da = 0, db = 0;
      while (da < 7 && a > 0) { a--; da += this.lseg[a]; }
      while (db < 7 && b < n - 1) { db += this.lseg[b]; b++; }
      const ax = this.lx[i] - this.lx[a], az = this.lz[i] - this.lz[a];
      const bx = this.lx[b] - this.lx[i], bz = this.lz[b] - this.lz[i];
      const la = Math.hypot(ax, az), lb = Math.hypot(bx, bz);
      if (la < 1e-3 || lb < 1e-3) { this.curv[i] = 0; continue; }
      this.curv[i] = Math.atan2(ax * bz - az * bx, ax * bx + az * bz) / ((la + lb) / 2);
    }
  }

  // 目標速度：曲率＋勾配（下りはブレーキが効きにくい）＋凸（クレスト）での荷重抜け。道の終端で停止
  speedProfile(spec, skill) {
    const n = this.n;
    const v = new Float32Array(n);
    const mu = spec.mu * (0.74 + 0.2 * skill);
    const q = (0.5 * 1.2 * spec.area * (spec.clF + spec.clR)) / spec.mass;
    for (let i = 0; i < n; i++) {
      const k = Math.abs(this.curv[i]);
      // 縦断曲率（凸で負）：有効な重力 g + v²κv。凸では横グリップが落ちる
      const a = Math.max(0, i - 10), b = Math.min(n - 1, i + 10);
      const kv = b - a > 2 ? ((this.y[b] - this.y[i]) / (this.s[b] - this.s[i] || 1) - (this.y[i] - this.y[a]) / (this.s[i] - this.s[a] || 1)) / ((this.s[b] - this.s[a]) / 2 || 1) : 0;
      const denom = k - mu * q - mu * Math.min(0, kv);
      v[i] = denom <= 1e-5 ? 75 : Math.min(75, Math.sqrt((mu * 9.81) / denom));
    }
    v[n - 1] = 0;
    // 減速度はタイヤの限界（μg）を超えない
    const brakeA = Math.min(mu * 9.81 * 0.88, mu * 9.81 * (0.62 + 0.25 * skill) * Math.min(1.25, spec.brakeTorque / (spec.mass * 3.4)));
    for (let k = n - 2; k >= 0; k--) {
      const ds = this.lseg[k] || 2;
      const grade = (this.y[k + 1] - this.y[k]) / (this.s[k + 1] - this.s[k] || 2); // 上りで正
      const a = Math.max(1.5, brakeA + 9.81 * grade);
      v[k] = Math.min(v[k], Math.sqrt(v[k + 1] * v[k + 1] + 2 * a * ds));
    }
    return v;
  }
}

// ---------------- 地形（DEM5Aを8m格子に再サンプルしたもの） ----------------
export const TERRAIN = (() => {
  const T = HARUNA.terrain;
  const bin = typeof atob === 'function' ? atob(T.data) : Buffer.from(T.data, 'base64').toString('binary');
  const H = new Float32Array(T.nx * T.nz);
  for (let i = 0; i < H.length; i++) H[i] = T.hmin + (bin.charCodeAt(2 * i) | (bin.charCodeAt(2 * i + 1) << 8)) * T.scale;
  const at = (i, j) => H[Math.max(0, Math.min(T.nz - 1, j)) * T.nx + Math.max(0, Math.min(T.nx - 1, i))];
  return {
    ...T, H, at,
    sample(x, z) {
      const fx = (x - T.x0) / T.cell, fz = (z - T.z0) / T.cell;
      const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
      return at(i, j) * (1 - u) * (1 - v) + at(i + 1, j) * u * (1 - v) + at(i, j + 1) * (1 - u) * v + at(i + 1, j + 1) * u * v;
    },
  };
})();
