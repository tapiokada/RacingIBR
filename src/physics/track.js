// 走行可能領域（道路カプセルの和集合）とコース中心線
import { NODES, AREAS, roadWidthBetween, roadPolyline, LAYOUTS, areaOfLayout } from '../data/map.js';

import { TougePath, harunaCorridor } from './touge.js';
import { CircuitPath, circuitCorridor, CIRCUITS } from './circuit.js';

const roadsOf = (area) => AREAS[area || 'west'].roads;
// 榛名山の施設への引き込み（峠の本線以外の道路）
function harunaSpurSegs() {
  const segs = [];
  for (const r of AREAS.haruna.roads) {
    if (r.touge) continue;
    for (let i = 0; i < r.nodes.length - 1; i++) { const a = NODES[r.nodes[i]], b = NODES[r.nodes[i + 1]]; segs.push({ ax: a.x, az: a.z, bx: b.x, bz: b.z, hw: r.width / 2, road: r.name }); }
  }
  // 道の両端の転回場
  const main = AREAS.haruna.roads.find((r) => r.touge);
  for (const id of [main.nodes[0], main.nodes[main.nodes.length - 1]]) { const n = NODES[id]; segs.push({ ax: n.x, az: n.z, bx: n.x, bz: n.z, hw: 10, road: 'turn' }); }
  // 駐車場（奥を広く）
  for (const p of AREAS.haruna.pois) { const n = NODES[p.node]; segs.push({ ax: n.x, az: n.z, bx: n.x, bz: n.z, hw: 9, road: 'lot' }); }
  return segs;
}

// ---------------- 走行可能領域 ----------------
export class Corridor {
  constructor(segs, cell = 24, obstacles = []) {
    this.segs = segs; // {ax,az,bx,bz,hw}
    this.obs = obstacles; // 道路内の障害物（中央分離帯など）
    this.cell = cell;
    this.grid = this.makeGrid(segs, 8);
    this.ogrid = this.makeGrid(obstacles, 2);
  }

  makeGrid(segs, padExtra) {
    const cell = this.cell;
    const grid = new Map();
    for (let i = 0; i < segs.length; i++) {
      const s = segs[i];
      const pad = s.hw + padExtra;
      const x0 = Math.floor((Math.min(s.ax, s.bx) - pad) / cell), x1 = Math.floor((Math.max(s.ax, s.bx) + pad) / cell);
      const z0 = Math.floor((Math.min(s.az, s.bz) - pad) / cell), z1 = Math.floor((Math.max(s.az, s.bz) + pad) / cell);
      for (let gx = x0; gx <= x1; gx++) for (let gz = z0; gz <= z1; gz++) {
        const k = gx * 73856093 ^ gz * 19349663;
        let arr = grid.get(k);
        if (!arr) grid.set(k, (arr = []));
        arr.push(i);
      }
    }
    return grid;
  }

  // 符号付き距離（負=道路内）と外向き法線
  query(x, z) {
    const k = Math.floor(x / this.cell) * 73856093 ^ Math.floor(z / this.cell) * 19349663;
    const arr = this.grid.get(k);
    let best = 1e9, bnx = 0, bnz = 0;
    if (!arr) return { d: 50, nx: 0, nz: 0, far: true };
    const lv = this.leveled ? this.levelY : null;
    for (const i of arr) {
      const s = this.segs[i];
      if (lv != null && s.y != null && Math.abs(s.y - lv) > 3.5) continue; // 立体交差の別の高さの路面
      const dx = s.bx - s.ax, dz = s.bz - s.az;
      const l2 = dx * dx + dz * dz;
      let t = l2 > 0 ? ((x - s.ax) * dx + (z - s.az) * dz) / l2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const px = s.ax + dx * t, pz = s.az + dz * t;
      const ex = x - px, ez = z - pz;
      const dist = Math.hypot(ex, ez);
      const d = dist - s.hw;
      if (d < best) {
        best = d;
        if (dist > 1e-6) { bnx = ex / dist; bnz = ez / dist; } else { bnx = 0; bnz = 0; }
      }
    }
    // 障害物：内側にいれば境界の外扱い（法線は障害物の中心側）
    const oarr = this.ogrid.get(k);
    if (oarr) {
      for (const i of oarr) {
        const s = this.obs[i];
        const dx = s.bx - s.ax, dz = s.bz - s.az;
        const l2 = dx * dx + dz * dz;
        let t = l2 > 0 ? ((x - s.ax) * dx + (z - s.az) * dz) / l2 : 0;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const ex = x - (s.ax + dx * t), ez = z - (s.az + dz * t);
        const dist = Math.hypot(ex, ez);
        const pen = s.hw - dist;
        if (pen > best && dist > 1e-6) { best = pen; bnx = -ex / dist; bnz = -ez / dist; }
      }
    }
    return { d: best, nx: bnx, nz: bnz, far: false };
  }
}

// 車両を壁から押し戻す
export function resolveWalls(car, corridor) {
  let hit = 0;
  if (corridor.leveled) corridor.levelY = car.y;
  for (const [px, pz] of car.corners()) {
    const q = corridor.query(px, pz);
    if (q.d > 0) {
      if (q.far) continue;
      hit += car.wallImpulse(px, pz, -q.nx, -q.nz, Math.min(q.d, 1.5));
    }
  }
  return hit;
}

// ---------------- 街の道路網 ----------------
// 交差点・道路端のノード（中央分離帯を切る、横断歩道を置く位置）
export function townJunctions(area = 'west') {
  const ROADS = roadsOf(area);
  const deg = {}, ends = new Set();
  for (const r of ROADS) {
    r.nodes.forEach((id, i) => {
      deg[id] = (deg[id] || 0) + (i === 0 || i === r.nodes.length - 1 ? 1 : 2);
      if (i === 0 || i === r.nodes.length - 1) ends.add(id);
    });
  }
  return Object.keys(deg).filter((id) => deg[id] >= 3 || ends.has(id));
}

// 中央分離帯（交差点の手前 MEDIAN_TRIM m は右折レーンのため切る）
export const MEDIAN_TRIM = 30;
export function townMedians(area = 'west') {
  const ROADS = roadsOf(area);
  const J = townJunctions(area).map((id) => NODES[id]);
  const out = [];
  for (const r of ROADS) {
    if (!r.median) continue;
    const P = roadPolyline(r);
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], b = P[i + 1];
      const len = Math.hypot(b.x - a.x, b.z - a.z);
      const m = Math.max(1, Math.ceil(len / 4));
      for (let k = 0; k < m; k++) {
        const p0 = { x: a.x + ((b.x - a.x) * k) / m, z: a.z + ((b.z - a.z) * k) / m };
        const p1 = { x: a.x + ((b.x - a.x) * (k + 1)) / m, z: a.z + ((b.z - a.z) * (k + 1)) / m };
        const mx = (p0.x + p1.x) / 2, mz = (p0.z + p1.z) / 2;
        if (J.some((j) => Math.hypot(j.x - mx, j.z - mz) < MEDIAN_TRIM)) continue;
        out.push({ ax: p0.x, az: p0.z, bx: p1.x, bz: p1.z, hw: r.median / 2, road: r });
      }
    }
  }
  return out;
}

// 狭い道の鋭い曲がり角の隅切り（車が曲がれるよう角を丸く広げる）
export function townCornerPads(area = 'west') {
  const ROADS = roadsOf(area);
  const pads = [];
  for (const r of ROADS) {
    if (r.width >= 12) continue;
    const P = roadPolyline(r);
    for (let i = 1; i < P.length - 1; i++) {
      const a = P[i - 1], b = P[i], c = P[i + 1];
      const ux = b.x - a.x, uz = b.z - a.z, vx = c.x - b.x, vz = c.z - b.z;
      const cos = (ux * vx + uz * vz) / ((Math.hypot(ux, uz) * Math.hypot(vx, vz)) || 1);
      if (cos > -0.35) continue; // 110°以上曲がる角だけ
      pads.push({ x: b.x, z: b.z, r: r.width / 2 + 2.8 });
    }
  }
  // 狭い道が分離帯のある広い道に接続する交差点は、角を丸く広げる（右左折できるように）
  const inc = {};
  for (const r of ROADS) for (const id of r.nodes) (inc[id] ||= []).push(r);
  for (const [id, rs] of Object.entries(inc)) {
    if (rs.length < 2) continue;
    const narrow = rs.some((r) => r.width < 12 && !r.gate && r.ai !== false);
    const wide = rs.filter((r) => r.width >= 14 && r.median > 0); // 分離帯のある広い道（走行車線が角に寄る）
    if (!narrow || !wide.length) continue;
    const wideW = Math.max(...wide.map((r) => r.width));
    const n = NODES[id];
    pads.push({ x: n.x, z: n.z, r: Math.min(14, wideW / 2 + 3) });
  }
  return pads;
}

export function townCorridor(area = 'west') {
  if (AREAS[area].touge) return getHarunaCorridor();
  if (AREAS[area].circuit) return circuitCorridor(CIRCUITS[AREAS[area].circuit]);
  const ROADS = roadsOf(area);
  const segs = [];
  for (const p of townCornerPads(area)) segs.push({ ax: p.x, az: p.z, bx: p.x, bz: p.z, hw: p.r, road: 'corner' });
  for (const r of ROADS) {
    const P = roadPolyline(r);
    for (let i = 0; i < P.length - 1; i++) {
      segs.push({ ax: P[i].x, az: P[i].z, bx: P[i + 1].x, bz: P[i + 1].z, hw: r.width / 2, road: r.name });
    }
  }
  return new Corridor(segs, 24, townMedians(area));
}

export function townGraph(area = 'west') {
  const ROADS = roadsOf(area);
  const adj = {};
  for (const r of ROADS) {
    if (!r.ai) continue;
    for (let i = 0; i < r.nodes.length - 1; i++) {
      const a = r.nodes[i], b = r.nodes[i + 1];
      (adj[a] ||= []).push({ to: b, w: r.width });
      if (!r.oneway) (adj[b] ||= []).push({ to: a, w: r.width });
      else adj[b] ||= [];
    }
  }
  return adj;
}

// ---------------- コース ----------------
const CORNER_MIN_ANGLE = 0.3; // これ以上曲がるノードをコーナーとして拡幅[rad]
const WIDEN_HOLD = 14; // コーナー前後で全幅拡げる距離[m]
const WIDEN_TAPER = 14; // 元の幅へ戻す距離[m]
const HAIRPIN_ANGLE = 2.0; // これ以上曲がり、かつ半径が小さいとヘアピン扱い[rad]
const HAIRPIN_R = 4.8; // ヘアピンでの想定旋回半径[m]
// layout: { course, reverse }
export class CoursePath {
  constructor(layout) {
    const c = layout.course;
    let ids = [...c.nodes];
    if (layout.reverse) ids = [ids[0], ...ids.slice(1).reverse()];
    this.ids = ids;
    this.name = layout.name;
    this.laps = c.laps;
    const n = ids.length;
    const P = ids.map((id) => NODES[id]);
    const W = ids.map((id, i) => roadWidthBetween(id, ids[(i + 1) % n]));
    // コーナーのフィレット
    const pts = []; // {x,z,w}
    const step = 2.0;
    const fillet = [];
    for (let i = 0; i < n; i++) {
      const p = P[(i - 1 + n) % n], c0 = P[i], q = P[(i + 1) % n];
      const d1x = c0.x - p.x, d1z = c0.z - p.z, l1 = Math.hypot(d1x, d1z);
      const d2x = q.x - c0.x, d2z = q.z - c0.z, l2 = Math.hypot(d2x, d2z);
      const u1 = [d1x / l1, d1z / l1], u2 = [d2x / l2, d2z / l2];
      const cos = Math.max(-1, Math.min(1, u1[0] * u2[0] + u1[1] * u2[1]));
      const th = Math.acos(cos);
      if (i === 0 || th < 0.02) { fillet.push({ t: 0, u1, u2, th: 0 }); continue; }
      let t = c.radius * Math.tan(th / 2);
      t = Math.min(t, 0.48 * l1, 0.48 * l2);
      fillet.push({ t, u1, u2, th, right: u1[0] * u2[1] - u1[1] * u2[0] > 0, tight: th > HAIRPIN_ANGLE && t / Math.tan(th / 2) < 6 });
    }
    for (let i = 0; i < n; i++) {
      const c0 = P[i], nx = P[(i + 1) % n];
      const f0 = fillet[i], f1 = fillet[(i + 1) % n];
      const wIn = W[(i - 1 + n) % n], wOut = W[i];
      // 円弧（ノードi）
      if (f0.t > 0) {
        const a = { x: c0.x - f0.u1[0] * f0.t, z: c0.z - f0.u1[1] * f0.t };
        const b = { x: c0.x + f0.u2[0] * f0.t, z: c0.z + f0.u2[1] * f0.t };
        // 2次ベジェで近似した円弧
        const arcLen = f0.t * 2;
        const m = Math.max(2, Math.ceil(arcLen / step), Math.ceil(f0.th / 0.08));
        for (let k = 0; k < m; k++) {
          const s = k / m;
          const x = (1 - s) * (1 - s) * a.x + 2 * (1 - s) * s * c0.x + s * s * b.x;
          const z = (1 - s) * (1 - s) * a.z + 2 * (1 - s) * s * c0.z + s * s * b.z;
          pts.push({ x, z, w: wIn + (wOut - wIn) * s, corner: i });
        }
      }
      // 直線
      const sx = c0.x + f0.u2[0] * f0.t, sz = c0.z + f0.u2[1] * f0.t;
      const ex = nx.x - f1.u1[0] * f1.t, ez = nx.z - f1.u1[1] * f1.t;
      const len = Math.hypot(ex - sx, ez - sz);
      const m = Math.max(1, Math.ceil(len / step));
      for (let k = 0; k < m; k++) {
        const s = k / m;
        pts.push({ x: sx + (ex - sx) * s, z: sz + (ez - sz) * s, w: wOut, corner: k === 0 && f0.th > 0 ? i : -1 });
      }
    }
    this.n = pts.length;
    this.x = new Float32Array(this.n); this.z = new Float32Array(this.n);
    this.hw = new Float32Array(this.n); this.s = new Float32Array(this.n);
    this.tx = new Float32Array(this.n); this.tz = new Float32Array(this.n);
    let acc = 0;
    for (let i = 0; i < this.n; i++) {
      this.x[i] = pts[i].x; this.z[i] = pts[i].z; this.hw[i] = pts[i].w / 2;
      if (i > 0) acc += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z);
      this.s[i] = acc;
    }
    this.length = acc + Math.hypot(pts[0].x - pts[this.n - 1].x, pts[0].z - pts[this.n - 1].z);
    // コーナー付近の拡幅（イン・アウト両側へ。合計 3〜5m）
    const corners = {};
    for (let i = 0; i < this.n; i++) {
      const ci = pts[i].corner;
      if (ci == null || ci < 0) continue;
      const th = fillet[ci].th;
      if (th < CORNER_MIN_ANGLE) continue;
      const c0 = corners[ci] || (corners[ci] = { s0: this.s[i], s1: this.s[i], extra: 3 + 2 * Math.min(1, (th - CORNER_MIN_ANGLE) / 1.4), th, right: fillet[ci].right, tight: fillet[ci].tight });
      c0.s1 = this.s[i];
    }
    this.corners = Object.values(corners);
    this.extra = new Float32Array(this.n);
    for (let i = 0; i < this.n; i++) {
      let e = 0;
      for (const c1 of this.corners) {
        let d = 0;
        const si = this.s[i];
        const before = c1.s0 - si, after = si - c1.s1;
        if (before > 0) d = Math.min(before, this.length - before);
        else if (after > 0) d = Math.min(after, this.length - after);
        const k = d <= WIDEN_HOLD ? 1 : d >= WIDEN_HOLD + WIDEN_TAPER ? 0 : 0.5 + 0.5 * Math.cos(((d - WIDEN_HOLD) / WIDEN_TAPER) * Math.PI);
        e = Math.max(e, c1.extra * k);
      }
      this.extra[i] = e;
      this.hw[i] += e / 2;
    }
    for (let i = 0; i < this.n; i++) {
      const a = (i - 1 + this.n) % this.n, b = (i + 1) % this.n;
      const dx = this.x[b] - this.x[a], dz = this.z[b] - this.z[a];
      const l = Math.hypot(dx, dz) || 1;
      this.tx[i] = dx / l; this.tz[i] = dz / l;
    }
    // 衝突用コリドー
    const segs = [];
    for (let i = 0; i < this.n; i++) {
      const j = (i + 1) % this.n;
      segs.push({ ax: this.x[i], az: this.z[i], bx: this.x[j], bz: this.z[j], hw: Math.min(this.hw[i], this.hw[j]) });
    }
    this.corridor = new Corridor(segs, 20);
    this.sectors = [0, this.length / 3, (this.length * 2) / 3];
    this.buildRacingLine();
  }

  // 右方向の法線（進行方向に対して右）。f=(tx,tz) → right=(-tz, tx)
  normal(i) { return [-this.tz[i], this.tx[i]]; }

  // 最近傍サンプル（hint付き局所探索）
  project(x, z, hint = -1) {
    let best = -1, bd = 1e18;
    const scan = (from, to) => {
      for (let k = from; k <= to; k++) {
        const i = ((k % this.n) + this.n) % this.n;
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
    let s = this.s[i] + along;
    if (s < 0) s += this.length;
    if (s >= this.length) s -= this.length;
    return { i, s, lat, dist: Math.sqrt(bd) };
  }

  posAt(s, lat = 0) {
    s = ((s % this.length) + this.length) % this.length;
    // 二分探索
    let lo = 0, hi = this.n - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (this.s[mid] <= s) lo = mid; else hi = mid - 1; }
    const i = lo, j = (i + 1) % this.n;
    const segLen = (j === 0 ? this.length : this.s[j]) - this.s[i];
    const t = segLen > 0 ? (s - this.s[i]) / segLen : 0;
    const x = this.x[i] + (this.x[j] - this.x[i]) * t;
    const z = this.z[i] + (this.z[j] - this.z[i]) * t;
    const [rx, rz] = this.normal(i);
    return { x: x + rx * lat, z: z + rz * lat, h: Math.atan2(this.tx[i], this.tz[i]), i };
  }

  // 最小曲率に近いレーシングライン（弾性バンド法）
  buildRacingLine() {
    const n = this.n;
    const off = new Float32Array(n);
    const lx = new Float32Array(n), lz = new Float32Array(n);
    const nrm = [];
    for (let i = 0; i < n; i++) nrm.push(this.normal(i));
    const margin = 2.2;
    // 鋭角コーナー（ヘアピン）は頂点の外側を回り込むラインに固定
    const fixed = new Uint8Array(n);
    for (const c of this.corners || []) {
      if (!c.tight) continue;
      const sign = c.right ? -1 : 1; // 右コーナーの外側は左(負)
      for (let i = 0; i < n; i++) {
        const si = this.s[i];
        if (si >= c.s0 - 8 && si <= c.s1 + 8) { fixed[i] = 1; off[i] = sign * Math.max(0, this.hw[i] - 2.5); }
      }
    }
    for (const span of [12, 6, 3]) {
      for (let it = 0; it < 120; it++) {
        for (let i = 0; i < n; i++) {
          lx[i] = this.x[i] + nrm[i][0] * off[i];
          lz[i] = this.z[i] + nrm[i][1] * off[i];
        }
        for (let i = 0; i < n; i++) {
          if (fixed[i]) continue;
          const a = (i - span + n) % n, b = (i + span) % n;
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
    for (let i = 0; i < n; i++) {
      this.lx[i] = this.x[i] + nrm[i][0] * off[i];
      this.lz[i] = this.z[i] + nrm[i][1] * off[i];
    }
    this.lseg = new Float32Array(n); // i→i+1 のライン上距離
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      this.lseg[i] = Math.hypot(this.lx[j] - this.lx[i], this.lz[j] - this.lz[i]);
    }
    // 曲率（符号: 右旋回正）
    this.curv = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let a = i, b = i, da = 0, db = 0;
      while (da < 7 && a !== (i + 1) % n) { a = (a - 1 + n) % n; da += this.lseg[a]; }
      while (db < 7 && b !== (i - 1 + n) % n) { db += this.lseg[b]; b = (b + 1) % n; }
      const ax = this.lx[i] - this.lx[a], az = this.lz[i] - this.lz[a];
      const bx = this.lx[b] - this.lx[i], bz = this.lz[b] - this.lz[i];
      const la = Math.hypot(ax, az), lb = Math.hypot(bx, bz);
      const cross = ax * bz - az * bx; // z-down座標で正=時計回り=右
      const ang = Math.atan2(cross, ax * bx + az * bz);
      this.curv[i] = ang / ((la + lb) / 2 || 1);
    }
  }

  // 車両スペックに応じた目標速度プロファイル
  speedProfile(spec, skill) {
    const n = this.n;
    const v = new Float32Array(n);
    const mu = spec.mu * (0.74 + 0.2 * skill);
    const q = (0.5 * 1.2 * spec.area * (spec.clF + spec.clR)) / spec.mass;
    for (let i = 0; i < n; i++) {
      const k = Math.abs(this.curv[i]);
      const denom = k - mu * q;
      v[i] = denom <= 1e-5 ? 90 : Math.min(90, Math.sqrt((mu * 9.81) / denom));
    }
    // ヘアピンは頂点を回り込む小半径で速度を制限
    for (const c of this.corners || []) {
      if (!c.tight) continue;
      const vh = Math.sqrt(mu * 9.81 * HAIRPIN_R);
      for (let i = 0; i < n; i++) if (this.s[i] >= c.s0 - 4 && this.s[i] <= c.s1 + 4) v[i] = Math.min(v[i], vh);
    }
    const brakeA = mu * 9.81 * (0.62 + 0.25 * skill) * Math.min(1.25, spec.brakeTorque / (spec.mass * 3.4));
    for (let pass = 0; pass < 2; pass++) {
      for (let k = n - 1; k >= 0; k--) {
        const i = k, j = (k + 1) % n;
        const ds = Math.hypot(this.lx[j] - this.lx[i], this.lz[j] - this.lz[i]);
        v[i] = Math.min(v[i], Math.sqrt(v[j] * v[j] + 2 * brakeA * ds));
      }
    }
    return v;
  }
}

// ---------------- コース共通 ----------------
const pathCache = {};
let harunaCorr = null;
export function getHarunaCorridor() { return (harunaCorr ||= harunaCorridor(harunaSpurSegs())); }
export function getCoursePath(layout) {
  if (!pathCache[layout.key]) pathCache[layout.key] = layout.course.touge ? new TougePath(layout, getHarunaCorridor()) : layout.course.circuit ? new CircuitPath(layout) : new CoursePath(layout);
  return pathCache[layout.key];
}

// 全6レイアウトのコース走行範囲までの距離（負＝コース上）。景観オブジェクトの配置チェック用
export function courseClearance(x, z, area = null) {
  let d = 1e9;
  for (const L of LAYOUTS) {
    if (area && areaOfLayout(L) !== area) continue;
    const q = getCoursePath(L).corridor.query(x, z);
    if (!q.far && q.d < d) d = q.d;
  }
  return d;
}

// 回転した矩形（中心・幅w(x)・奥行d(z)・回転rot）がコースから margin 以上離れているか
export function boxClearOfCourse(cx, cz, w, d, rot = 0, margin = 2.5, area = null) {
  const c = Math.cos(rot), s = Math.sin(rot);
  const n = 4;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
    const lx = (i / n - 0.5) * w, lz = (j / n - 0.5) * d;
    const x = cx + lx * c + lz * s, z = cz - lx * s + lz * c;
    if (courseClearance(x, z, area) < margin) return false;
  }
  return true;
}
