// 走行可能領域（道路カプセルの和集合）とコース中心線
import { NODES, ROADS, roadWidthBetween } from '../data/map.js';

// ---------------- 走行可能領域 ----------------
export class Corridor {
  constructor(segs, cell = 24) {
    this.segs = segs; // {ax,az,bx,bz,hw}
    this.cell = cell;
    this.grid = new Map();
    for (let i = 0; i < segs.length; i++) {
      const s = segs[i];
      const pad = s.hw + 8;
      const x0 = Math.floor((Math.min(s.ax, s.bx) - pad) / cell), x1 = Math.floor((Math.max(s.ax, s.bx) + pad) / cell);
      const z0 = Math.floor((Math.min(s.az, s.bz) - pad) / cell), z1 = Math.floor((Math.max(s.az, s.bz) + pad) / cell);
      for (let gx = x0; gx <= x1; gx++) for (let gz = z0; gz <= z1; gz++) {
        const k = gx * 73856093 ^ gz * 19349663;
        let arr = this.grid.get(k);
        if (!arr) this.grid.set(k, (arr = []));
        arr.push(i);
      }
    }
  }

  // 符号付き距離（負=道路内）と外向き法線
  query(x, z) {
    const k = Math.floor(x / this.cell) * 73856093 ^ Math.floor(z / this.cell) * 19349663;
    const arr = this.grid.get(k);
    let best = 1e9, bnx = 0, bnz = 0;
    if (!arr) return { d: 50, nx: 0, nz: 0, far: true };
    for (const i of arr) {
      const s = this.segs[i];
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
    return { d: best, nx: bnx, nz: bnz, far: false };
  }
}

// 車両を壁から押し戻す
export function resolveWalls(car, corridor) {
  let hit = 0;
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
export function townCorridor() {
  const segs = [];
  for (const r of ROADS) {
    for (let i = 0; i < r.nodes.length - 1; i++) {
      const a = NODES[r.nodes[i]], b = NODES[r.nodes[i + 1]];
      segs.push({ ax: a.x, az: a.z, bx: b.x, bz: b.z, hw: r.width / 2 + 1.0, road: r.name });
    }
  }
  return new Corridor(segs);
}

export function townGraph() {
  const adj = {};
  for (const r of ROADS) {
    for (let i = 0; i < r.nodes.length - 1; i++) {
      const a = r.nodes[i], b = r.nodes[i + 1];
      (adj[a] ||= []).push({ to: b, w: r.width });
      (adj[b] ||= []).push({ to: a, w: r.width });
    }
  }
  return adj;
}

// ---------------- コース ----------------
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
      t = Math.min(t, 0.45 * l1, 0.45 * l2);
      fillet.push({ t, u1, u2, th });
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
        const m = Math.max(2, Math.ceil(arcLen / step));
        for (let k = 0; k < m; k++) {
          const s = k / m;
          const x = (1 - s) * (1 - s) * a.x + 2 * (1 - s) * s * c0.x + s * s * b.x;
          const z = (1 - s) * (1 - s) * a.z + 2 * (1 - s) * s * c0.z + s * s * b.z;
          const wb = wIn + (wOut - wIn) * s;
          const ww = c.wide?.[ids[i]];
          pts.push({ x, z, w: ww ? Math.max(wb, wb + (ww - wb) * Math.sin(Math.PI * Math.min(1, s * 1.4))) : wb });
        }
      }
      // 直線
      const sx = c0.x + f0.u2[0] * f0.t, sz = c0.z + f0.u2[1] * f0.t;
      const ex = nx.x - f1.u1[0] * f1.t, ez = nx.z - f1.u1[1] * f1.t;
      const len = Math.hypot(ex - sx, ez - sz);
      const m = Math.max(1, Math.ceil(len / step));
      for (let k = 0; k < m; k++) {
        const s = k / m;
        pts.push({ x: sx + (ex - sx) * s, z: sz + (ez - sz) * s, w: wOut });
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
    const margin = 1.8;
    for (const span of [12, 6, 3]) {
      for (let it = 0; it < 120; it++) {
        for (let i = 0; i < n; i++) {
          lx[i] = this.x[i] + nrm[i][0] * off[i];
          lz[i] = this.z[i] + nrm[i][1] * off[i];
        }
        for (let i = 0; i < n; i++) {
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
    // 曲率（符号: 右旋回正）
    this.curv = new Float32Array(n);
    const k = 4;
    for (let i = 0; i < n; i++) {
      const a = (i - k + n) % n, b = (i + k) % n;
      const ax = this.lx[i] - this.lx[a], az = this.lz[i] - this.lz[a];
      const bx = this.lx[b] - this.lx[i], bz = this.lz[b] - this.lz[i];
      const la = Math.hypot(ax, az), lb = Math.hypot(bx, bz);
      const cross = ax * bz - az * bx; // z-down座標で正=時計回り=右
      const ang = Math.asin(Math.max(-1, Math.min(1, cross / (la * lb || 1))));
      this.curv[i] = ang / ((la + lb) / 2 || 1);
    }
  }

  // 車両スペックに応じた目標速度プロファイル
  speedProfile(spec, skill) {
    const n = this.n;
    const v = new Float32Array(n);
    const mu = spec.mu * (0.78 + 0.2 * skill);
    const q = (0.5 * 1.2 * spec.area * (spec.clF + spec.clR)) / spec.mass;
    for (let i = 0; i < n; i++) {
      const k = Math.abs(this.curv[i]);
      const denom = k - mu * q;
      v[i] = denom <= 1e-5 ? 90 : Math.min(90, Math.sqrt((mu * 9.81) / denom));
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
