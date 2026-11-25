// 夜の榛名山（実寸・実標高の峠道）シーン構築
import * as THREE from 'three';
import { NODES, AREAS } from '../data/map.js';
import { ROAD, TERRAIN, HarunaGround } from '../physics/touge.js';
import { getHarunaCorridor } from '../physics/track.js';
import { canvasTex, asphaltTex, textSprite, rng } from './world.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const N = ROAD.n;

// 道路の左右（下り方向に対して右が+）の点
function roadPoint(i, lat) {
  const a = Math.max(0, i - 1), b = Math.min(N - 1, i + 1);
  const dx = ROAD.x[b] - ROAD.x[a], dz = ROAD.z[b] - ROAD.z[a];
  const l = Math.hypot(dx, dz) || 1;
  const rx = -dz / l, rz = dx / l;
  return { x: ROAD.x[i] + rx * lat, z: ROAD.z[i] + rz * lat, y: ROAD.y[i] - ROAD.bank[i] * lat, rx, rz, tx: dx / l, tz: dz / l };
}

// 道路に沿った帯（lat0〜lat1、yOff）
function strip(lat0, lat1, yOff, mat, { from = 0, to = N - 1, step = 1, uvScale = 0.1, dash = null } = {}) {
  const pos = [], uv = [], idx = [];
  let k = 0;
  for (let i = from; i <= to; i += step) {
    if (dash && Math.floor(ROAD.s[i] / dash[0]) % 2) { k = -1; continue; }
    const lo = typeof lat0 === 'function' ? lat0(i) : lat0, hi = typeof lat1 === 'function' ? lat1(i) : lat1;
    const p = roadPoint(i, lo), q = roadPoint(i, hi);
    pos.push(p.x, p.y + yOff, p.z, q.x, q.y + yOff, q.z);
    uv.push(0, ROAD.s[i] * uvScale, 1, ROAD.s[i] * uvScale);
    const v = pos.length / 3 - 2;
    if (k > 0) idx.push(v - 2, v, v - 1, v - 1, v, v + 1);
    k = k < 0 ? 1 : k + 1;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  mat.side = THREE.DoubleSide;
  return new THREE.Mesh(g, mat);
}

// 地形の高さ（道路まわりは路面の少し下まで削る/盛る）
function buildCarvedHeights(extra = []) {
  const T = TERRAIN;
  const H = new Float32Array(T.H);
  const D = new Float32Array(H.length).fill(1e9);
  const R = new Float32Array(H.length);
  // 道路点から近傍の格子点へ距離と路面高さを書き込む
  const rad = 30;
  // 道路の点＋施設の引き込み・駐車場の点（{x,z,y}）
  const pts = [];
  for (let i = 0; i < N; i += 2) pts.push({ x: ROAD.x[i], z: ROAD.z[i], y: ROAD.y[i] });
  pts.push(...extra);
  for (const pt of pts) {
    const x = pt.x, z = pt.z;
    const ci = Math.round((x - T.x0) / T.cell), cj = Math.round((z - T.z0) / T.cell);
    const r = Math.ceil(rad / T.cell);
    for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
      const gi = ci + di, gj = cj + dj;
      if (gi < 0 || gj < 0 || gi >= T.nx || gj >= T.nz) continue;
      const gx = T.x0 + gi * T.cell, gz = T.z0 + gj * T.cell;
      const d = Math.hypot(gx - x, gz - z);
      const k = gj * T.nx + gi;
      if (d < D[k]) { D[k] = d; R[k] = pt.y; }
    }
  }
  for (let k = 0; k < H.length; k++) {
    const d = D[k];
    if (d > rad) continue;
    const near = 7.5, far = 26; // 7.5m以内は路面の0.6m下、26mで元の地形
    const target = R[k] - 0.6;
    const t = d <= near ? 1 : Math.max(0, 1 - (d - near) / (far - near));
    const tt = t * t * (3 - 2 * t);
    H[k] = H[k] * (1 - tt) + target * tt;
  }
  return { H, D };
}

export class HarunaWorld {
  constructor(renderer, area = 'haruna') {
    this.area = area;
    this.areaDef = AREAS[area];
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x05070d);
    this.scene.fog = new THREE.Fog(0x070a12, 60, 650);
    const pm = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.2;
    this.corridor = getHarunaCorridor();
    // 施設の駐車場は平ら
    const lots = this.areaDef.pois.map((p) => {
      const n = NODES[p.node], f = NODES[p.from];
      const y = ROAD.y[this.nearestIdx(f.x, f.z)];
      return { x: n.x, z: n.z, y, r: 10 };
    });
    this.ground = new HarunaGround(lots);
    this.lots = lots;
    this.courseGroup = null;
    this.gateMarkers = [];
    this.build();
  }

  nearestIdx(x, z) {
    let best = 0, bd = 1e18;
    for (let i = 0; i < N; i++) { const d = (ROAD.x[i] - x) ** 2 + (ROAD.z[i] - z) ** 2; if (d < bd) { bd = d; best = i; } }
    return best;
  }

  build() {
    const S = this.scene;
    S.add(new THREE.HemisphereLight(0x6f82b8, 0x1a1c20, 0.9));
    const moon = new THREE.DirectionalLight(0xa9bcff, 0.55);
    moon.position.set(-300, 600, -200);
    S.add(moon);
    this.ikahoZone = { x: ROAD.x[N - 1], z: ROAD.z[N - 1], r: 260 };
    this.buildTerrain();
    this.buildRoad();
    this.buildRails();
    this.buildForest();
    this.buildSigns();
    this.buildIkaho();
    this.buildPOIs();
    this.buildStars();
  }

  buildTerrain() {
    const T = TERRAIN;
    // 施設への引き込み道路と駐車場も地形を削って平らにする（入口が斜面に埋もれないように）
    const extra = [];
    for (const r of this.areaDef.roads) {
      if (r.touge) continue;
      for (let k = 0; k < r.nodes.length - 1; k++) {
        const a = NODES[r.nodes[k]], b = NODES[r.nodes[k + 1]];
        const len = Math.hypot(b.x - a.x, b.z - a.z);
        for (let t = 0; t <= len; t += 2) { const x = a.x + (b.x - a.x) * (t / len), z = a.z + (b.z - a.z) * (t / len); extra.push({ x, z, y: this.ground.h(x, z) }); }
      }
    }
    for (const L of this.lots) for (let a = 0; a < 12; a++) for (const rr of [0, 6, 11]) extra.push({ x: L.x + Math.cos(a / 2) * rr, z: L.z + Math.sin(a / 2) * rr, y: L.y });
    const { H } = buildCarvedHeights(extra);
    this.terrainH = H;
    const pos = new Float32Array(T.nx * T.nz * 3);
    const col = new Float32Array(T.nx * T.nz * 3);
    const r = rng(11);
    for (let j = 0; j < T.nz; j++) for (let i = 0; i < T.nx; i++) {
      const k = j * T.nx + i;
      pos[k * 3] = T.x0 + i * T.cell; pos[k * 3 + 1] = H[k]; pos[k * 3 + 2] = T.z0 + j * T.cell;
      const v = 0.75 + r() * 0.35;
      col[k * 3] = 0.11 * v; col[k * 3 + 1] = 0.15 * v; col[k * 3 + 2] = 0.1 * v;
    }
    const idx = new Uint32Array((T.nx - 1) * (T.nz - 1) * 6);
    let q = 0;
    for (let j = 0; j < T.nz - 1; j++) for (let i = 0; i < T.nx - 1; i++) {
      const a = j * T.nx + i, b = a + 1, c = a + T.nx, d = c + 1;
      idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true }));
    this.scene.add(mesh);
  }

  terrainAt(x, z) {
    const T = TERRAIN, H = this.terrainH;
    const fx = (x - T.x0) / T.cell, fz = (z - T.z0) / T.cell;
    const i = Math.max(0, Math.min(T.nx - 2, Math.floor(fx))), j = Math.max(0, Math.min(T.nz - 2, Math.floor(fz)));
    const u = fx - i, v = fz - j;
    const at = (a, b) => H[b * T.nx + a];
    return at(i, j) * (1 - u) * (1 - v) + at(i + 1, j) * u * (1 - v) + at(i, j + 1) * (1 - u) * v + at(i + 1, j + 1) * u * v;
  }

  buildRoad() {
    const S = this.scene;
    const asphalt = asphaltTex();
    const roadMat = new THREE.MeshLambertMaterial({ map: asphalt, color: 0x9a9ea8 });
    const shoulderMat = new THREE.MeshLambertMaterial({ color: 0x2b2e2a });
    // 路肩の土・砂利（道路の外側2.5m）
    S.add(strip((i) => -ROAD.hw[i] - 2.6, (i) => -ROAD.hw[i] + 0.1, -0.05, shoulderMat));
    S.add(strip((i) => ROAD.hw[i] - 0.1, (i) => ROAD.hw[i] + 2.6, -0.05, shoulderMat));
    S.add(strip((i) => -ROAD.hw[i] - 0.15, (i) => ROAD.hw[i] + 0.15, 0.02, roadMat, { uvScale: 0.08 }));
    // 区画線：中央は黄色の実線（はみ出し禁止）、外側線は白
    const lineMat = (color) => new THREE.MeshBasicMaterial({ color, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
    const yellow = lineMat(0xd8a640);
    const white = lineMat(0xcfd3da);
    S.add(strip(-0.22, -0.08, 0.05, yellow), strip(0.08, 0.22, 0.05, yellow));
    S.add(strip((i) => -ROAD.hw[i] + 0.6, (i) => -ROAD.hw[i] + 0.75, 0.05, white));
    S.add(strip((i) => ROAD.hw[i] - 0.75, (i) => ROAD.hw[i] - 0.6, 0.05, white));
    // 道の両端の転回場
    for (const i of [0, N - 1]) {
      const disc = new THREE.Mesh(new THREE.CircleGeometry(10.2, 32), roadMat);
      disc.rotation.x = -Math.PI / 2; disc.position.set(ROAD.x[i], ROAD.y[i] + 0.015, ROAD.z[i]);
      S.add(disc);
    }
    // 駐車場への引き込み
    for (const L of this.lots) {
      const disc = new THREE.Mesh(new THREE.CircleGeometry(L.r + 1, 28), roadMat);
      disc.rotation.x = -Math.PI / 2; disc.position.set(L.x, L.y + 0.025, L.z);
      S.add(disc);
    }
    for (const r of this.areaDef.roads) {
      if (r.touge) continue;
      for (let i = 0; i < r.nodes.length - 1; i++) {
        const a = NODES[r.nodes[i]], b = NODES[r.nodes[i + 1]];
        const len = Math.hypot(b.x - a.x, b.z - a.z);
        const y = this.ground.h((a.x + b.x) / 2, (a.z + b.z) / 2);
        const m = new THREE.Mesh(new THREE.PlaneGeometry(r.width, len + 2), roadMat);
        m.rotation.order = 'YXZ'; m.rotation.y = Math.atan2(b.x - a.x, b.z - a.z); m.rotation.x = -Math.PI / 2;
        m.position.set((a.x + b.x) / 2, y + 0.022, (a.z + b.z) / 2);
        S.add(m);
      }
    }
  }

  // ガードレール（谷側）と擁壁（山側）。当たり判定は道路の縁（Corridor）
  buildRails() {
    const S = this.scene;
    const railGeo = new THREE.BoxGeometry(0.06, 0.32, 4.0);
    const postGeo = new THREE.BoxGeometry(0.12, 0.8, 0.12);
    const railMat = new THREE.MeshLambertMaterial({ color: 0xd8dade, emissive: 0x1a1a1a });
    const postMat = new THREE.MeshLambertMaterial({ color: 0x9a9ca0 });
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x55585c });
    const reflMat = new THREE.MeshBasicMaterial({ color: 0xffb030 });
    const rails = [], posts = [], refl = [];
    const wallSegs = { L: [], R: [] };
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    const STEP = 2; // データ点4m毎
    for (const side of [-1, 1]) {
      for (let i = 0; i < N - STEP; i += STEP) {
        const lat = side * (ROAD.hw[i] + 0.25);
        { const rp = roadPoint(i, lat); if (this.nearLot(rp.x, rp.z) || this.nearEntrance(rp.x, rp.z, 7)) continue; }
        const a = roadPoint(i, lat), b = roadPoint(i + STEP, side * (ROAD.hw[i + STEP] + 0.25));
        // 外側の地形が路面より高ければ山側（擁壁）
        const out = roadPoint(i, side * (ROAD.hw[i] + 12));
        const up = TERRAIN.sample(out.x, out.z) - ROAD.y[i];
        if (up > 2.5) { wallSegs[side > 0 ? 'R' : 'L'].push(i); continue; }
        const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2, my = (a.y + b.y) / 2;
        const len = Math.hypot(b.x - a.x, b.z - a.z);
        e.set(-Math.atan2(b.y - a.y, len), Math.atan2(b.x - a.x, b.z - a.z), 0, 'YXZ'); q.setFromEuler(e);
        m4.compose(p.set(mx, my + 0.62, mz), q, new THREE.Vector3(1, 1, (len + 0.1) / 4)); rails.push(m4.clone());
        m4.compose(p.set(a.x, a.y + 0.4, a.z), q, one); posts.push(m4.clone());
        if ((i / STEP) % 3 === 0) { m4.compose(p.set(a.x - side * 0.05 * a.rx, a.y + 0.62, a.z - side * 0.05 * a.rz), q, new THREE.Vector3(1.4, 0.35, 0.04)); refl.push(m4.clone()); }
      }
    }
    const inst = (geo, mat, list) => { const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length)); list.forEach((x, k) => m.setMatrixAt(k, x)); m.count = list.length; return m; };
    S.add(inst(railGeo, railMat, rails), inst(postGeo, postMat, posts), inst(new THREE.BoxGeometry(0.12, 0.3, 0.1), reflMat, refl));
    // 擁壁（法面のコンクリート）：連続区間を1枚の壁にする
    for (const [k, list] of Object.entries(wallSegs)) {
      const side = k === 'R' ? 1 : -1;
      const pos = [], idx = [];
      let prev = -99;
      for (const i of list) {
        const a = roadPoint(i, side * (ROAD.hw[i] + 0.3));
        const b = roadPoint(i, side * (ROAD.hw[i] + 2.0));
        const top = Math.min(this.terrainAt(b.x, b.z), a.y + 6) + 0.3;
        pos.push(a.x, a.y - 0.3, a.z, b.x, Math.max(a.y + 1.2, top), b.z);
        const v = pos.length / 3 - 2;
        if (i - prev === STEP) idx.push(v - 2, v, v - 1, v - 1, v, v + 1);
        prev = i;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx); g.computeVertexNormals();
      const mat = wallMat.clone(); mat.side = THREE.DoubleSide;
      S.add(new THREE.Mesh(g, mat));
    }
  }

  nearLot(x, z) { return this.lots.some((L) => Math.hypot(L.x - x, L.z - z) < L.r + 9) || this.nearEntrance(x, z); }

  // 施設への引き込み道路の付近（ガードレール・擁壁・標識・木を置かない）
  nearEntrance(x, z, margin = 9) {
    if (!this._spurs) {
      this._spurs = [];
      for (const r of this.areaDef.roads) if (!r.touge) for (let k = 0; k < r.nodes.length - 1; k++) this._spurs.push([NODES[r.nodes[k]], NODES[r.nodes[k + 1]], r.width / 2]);
    }
    for (const [a, b, hw] of this._spurs) {
      const dx = b.x - a.x, dz = b.z - a.z, l2 = dx * dx + dz * dz || 1;
      const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / l2));
      if (Math.hypot(x - a.x - dx * t, z - a.z - dz * t) < hw + margin) return true;
    }
    return false;
  }

  // 杉・広葉樹の森（道路から離して配置）
  buildForest() {
    const T = TERRAIN;
    const r = rng(5);
    const trunks = [], crowns = [], crowns2 = [];
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3();
    const near = (x, z) => this.ground.nearest(x, z);
    for (let it = 0; it < 26000 && crowns.length + crowns2.length < 9000; it++) {
      // 道路の近く（〜150m）に密に、遠くは疎に
      const i = Math.floor(r() * N);
      const ang = r() * Math.PI * 2, dist = 9 + Math.pow(r(), 1.6) * 160;
      const x = ROAD.x[i] + Math.cos(ang) * dist, z = ROAD.z[i] + Math.sin(ang) * dist;
      if (x < T.x0 || z < T.z0 || x > T.x0 + (T.nx - 1) * T.cell || z > T.z0 + (T.nz - 1) * T.cell) continue;
      const nq = near(x, z);
      if (nq && nq.d < ROAD.hw[nq.i] + 6) continue;
      if (this.nearLot(x, z)) continue;
      // 伊香保の温泉街には木を置かない
      if (this.ikahoZone && Math.hypot(x - this.ikahoZone.x, z - this.ikahoZone.z) < this.ikahoZone.r) continue;
      const y = this.terrainAt(x, z);
      const h = 9 + r() * 12;
      const cedar = r() < 0.65;
      m4.compose(p.set(x, y + h * 0.25, z), q, sc.set(1, h * 0.5, 1)); trunks.push(m4.clone());
      if (cedar) { m4.compose(p.set(x, y + h * 0.62, z), q, sc.set(2.2 + r(), h * 0.8, 2.2 + r())); crowns.push(m4.clone()); }
      else { m4.compose(p.set(x, y + h * 0.7, z), q, sc.set(3.5 + r() * 2, 3 + r() * 2, 3.5 + r() * 2)); crowns2.push(m4.clone()); }
    }
    const inst = (geo, mat, list) => { const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length)); list.forEach((x, k) => m.setMatrixAt(k, x)); m.count = list.length; return m; };
    this.scene.add(
      inst(new THREE.CylinderGeometry(0.15, 0.25, 1, 5), new THREE.MeshLambertMaterial({ color: 0x2a2018 }), trunks),
      inst(new THREE.ConeGeometry(1, 1, 7), new THREE.MeshLambertMaterial({ color: 0x14261a }), crowns),
      inst(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshLambertMaterial({ color: 0x1d2e1a, flatShading: true }), crowns2),
    );
  }

  // カーブの矢印板・視線誘導標、区間の標識
  buildSigns() {
    const S = this.scene;
    const arrowTex = canvasTex(64, 64, (c, w, h) => {
      c.fillStyle = '#1b2a8f'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#fff'; c.beginPath(); c.moveTo(14, 10); c.lineTo(44, 32); c.lineTo(14, 54); c.lineTo(24, 32); c.closePath(); c.fill();
    }, false);
    const arrowMat = new THREE.MeshBasicMaterial({ map: arrowTex, side: THREE.DoubleSide });
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const g = new THREE.Group();
    for (let i = 10; i < N - 10; i += 4) {
      const k = ROAD.curv[i];
      if (Math.abs(k) < 1 / 45) continue;
      if (i % 12) continue;
      // カーブ外側に矢印板（進行方向に向けて両面）
      const side = k > 0 ? -1 : 1; // 右カーブの外側＝左
      const pt = roadPoint(i, side * (ROAD.hw[i] + 0.9));
      if (this.nearEntrance(pt.x, pt.z, 6)) continue;
      const board = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), arrowMat);
      board.position.set(pt.x, pt.y + 1.25, pt.z);
      board.rotation.y = Math.atan2(pt.rx, pt.rz) + (k > 0 ? Math.PI : 0);
      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.25, 0.06), poleMat);
      pole.position.set(pt.x, pt.y + 0.6, pt.z);
      g.add(board, pole);
    }
    // 標高・区間の看板（km毎）
    for (let s = 1000; s < ROAD.length; s += 1000) {
      const i = Math.round(s / 2);
      const pt = roadPoint(Math.min(N - 1, i), -(ROAD.hw[Math.min(N - 1, i)] + 1.2));
      const tex = textSprite(`${(s / 1000).toFixed(0)}km　標高${Math.round(ROAD.y[i])}m`, '#fff', '#1b5c2f', 70, '#7dffb0');
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.5), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
      sign.position.set(pt.x, pt.y + 2.2, pt.z); sign.rotation.y = Math.atan2(pt.tx, pt.tz);
      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.2, 0.08), poleMat);
      pole.position.set(pt.x, pt.y + 1.1, pt.z);
      g.add(sign, pole);
    }
    S.add(g);
  }

  // 伊香保温泉（終点付近）：旅館・温泉街の灯り、石段街の石段と灯籠
  buildIkaho() {
    const S = this.scene;
    const end = N - 1;
    const ex = ROAD.x[end], ez = ROAD.z[end];
    const r = rng(77);
    const mat = new THREE.MeshLambertMaterial({ color: 0x6b5a4a, emissive: 0x1a1008 });
    const winMat = new THREE.MeshBasicMaterial({ color: 0xffc77a });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x2c2f36 });
    const g = new THREE.Group();
    let placed = 0;
    for (let it = 0; it < 900 && placed < 70; it++) {
      const ang = r() * Math.PI * 2, d = 25 + r() * 230;
      const x = ex + Math.cos(ang) * d, z = ez + Math.sin(ang) * d;
      const nq = this.ground.nearest(x, z);
      const w = 10 + r() * 14, dd = 8 + r() * 10, h = 6 + Math.floor(r() * 4) * 3.2;
      if (nq && nq.d < ROAD.hw[nq.i] + Math.max(w, dd) / 2 + 3) continue;
      if (this.nearLot(x, z)) continue;
      const y = this.terrainAt(x, z);
      const rot = r() * Math.PI;
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, dd), mat);
      b.position.set(x, y + h / 2 - 1, z); b.rotation.y = rot;
      const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 1, 0.6, dd + 1), roofMat);
      roof.position.set(x, y + h - 0.7, z); roof.rotation.y = rot;
      g.add(b, roof);
      // 窓の灯り
      for (let f = 0; f < Math.floor(h / 3.2); f++) {
        const lit = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.8, 0.9), winMat);
        lit.position.set(x + Math.sin(rot) * (dd / 2 + 0.05), y + 1.2 + f * 3.2, z + Math.cos(rot) * (dd / 2 + 0.05));
        lit.rotation.y = rot;
        if (r() < 0.7) g.add(lit);
      }
      placed++;
    }
    // 石段街（終点の先へ上る石段と両脇の灯籠）
    const i0 = end - 2;
    const pt = roadPoint(i0, 0);
    const dirx = pt.tx, dirz = pt.tz;
    const stepMat = new THREE.MeshLambertMaterial({ color: 0x8a8378 });
    const lantern = new THREE.MeshBasicMaterial({ color: 0xffb35a });
    const base = { x: pt.x + dirx * 14, z: pt.z + dirz * 14, y: pt.y };
    for (let k = 0; k < 40; k++) {
      const st = new THREE.Mesh(new THREE.BoxGeometry(5, 0.18, 0.9), stepMat);
      st.position.set(base.x + dirx * k * 0.9, base.y + k * 0.18 + 0.09, base.z + dirz * k * 0.9);
      st.rotation.y = Math.atan2(dirx, dirz);
      g.add(st);
      if (k % 4 === 0) for (const sd of [-1, 1]) {
        const l = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.6, 0.4), lantern);
        l.position.set(st.position.x + pt.rx * sd * 3, st.position.y + 1.0, st.position.z + pt.rz * sd * 3);
        g.add(l);
      }
    }
    const tex = textSprite('伊香保温泉　石段街', '#fff', 'rgba(40,20,10,0.9)', 80, '#ffb35a');
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 0.9), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
    sign.position.set(base.x - dirx * 2, base.y + 3.2, base.z - dirz * 2); sign.rotation.y = Math.atan2(dirx, dirz);
    g.add(sign);
    // 温泉街の灯り
    for (let k = 0; k < 4; k++) {
      const L = new THREE.PointLight(0xffb070, 60, 60, 2);
      const a = roadPoint(Math.max(0, end - 20 - k * 40), 0);
      L.position.set(a.x, a.y + 6, a.z);
      g.add(L);
    }
    S.add(g);
  }

  buildPOIs() {
    this.poiMarkers = [];
    for (const poi of this.areaDef.pois) {
      const n = NODES[poi.node];
      const L = this.lots.find((l) => l.x === n.x && l.z === n.z);
      const y = L ? L.y : this.ground.h(n.x, n.z);
      const g = new THREE.Group();
      g.position.set(n.x, y, n.z);
      const col = poi.type === 'shop' ? 0xff3b6b : 0x2ee6a8;
      const ring = new THREE.Mesh(new THREE.RingGeometry(5, 6, 40), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85, side: THREE.DoubleSide }));
      ring.rotation.x = -Math.PI / 2; ring.position.y = 0.06;
      g.add(ring);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 5.5, 30, 24, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false }));
      beam.position.y = 15; g.add(beam);
      const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: textSprite(poi.short, '#ffffff', 'rgba(10,10,20,0.85)', 92, poi.type === 'shop' ? '#ff3b6b' : '#2ee6a8'), depthWrite: false }));
      sign.scale.set(16, 2.5, 1); sign.position.y = 11; g.add(sign);
      // 建物（奥側）
      const F = NODES[poi.from];
      const ux = n.x - F.x, uz = n.z - F.z, ul = Math.hypot(ux, uz) || 1;
      const bld = new THREE.Mesh(new THREE.BoxGeometry(14, 6, 10), new THREE.MeshLambertMaterial({ color: poi.type === 'shop' ? 0x2a2030 : 0xe8e8e8, emissive: poi.type === 'shop' ? 0x220818 : 0x333333 }));
      bld.position.set((ux / ul) * 15, 3, (uz / ul) * 15); bld.rotation.y = Math.atan2(ux, uz);
      g.add(bld);
      if (poi.type === 'gs') {
        const canopy = new THREE.Mesh(new THREE.BoxGeometry(12, 0.8, 10), new THREE.MeshLambertMaterial({ color: 0xdddddd, emissive: 0x335544 }));
        canopy.position.set(0, 6, 0); g.add(canopy);
        const lamp = new THREE.PointLight(0xfff2dd, 50, 40, 2); lamp.position.set(0, 5.5, 0); g.add(lamp);
      } else {
        const lamp = new THREE.PointLight(0xff6a8a, 40, 40, 2); lamp.position.set(0, 5.5, 0); g.add(lamp);
      }
      this.scene.add(g);
      this.poiMarkers.push({ poi, group: g, ring, x: n.x, z: n.z });
    }
  }

  buildStars() {
    const r = rng(3);
    const pos = [];
    for (let i = 0; i < 1500; i++) {
      const th = r() * Math.PI * 2, ph = r() * 1.2 + 0.15;
      pos.push(Math.cos(th) * Math.cos(ph) * 3000, 900 + Math.sin(ph) * 2500, Math.sin(th) * Math.cos(ph) * 3000);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    this.scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0x9aaad0, size: 2, sizeAttenuation: false, fog: false })));
  }

  // コース（スタート・ゴールのゲート）
  setCourse(path) {
    if (this.courseGroup) { this.scene.remove(this.courseGroup); this.courseGroup = null; }
    if (!path || !path.open) return;
    const g = new THREE.Group();
    const chk = canvasTex(128, 32, (c) => { for (let x = 0; x < 16; x++) for (let y = 0; y < 4; y++) { c.fillStyle = (x + y) % 2 ? '#111' : '#eee'; c.fillRect(x * 8, y * 8, 8, 8); } }, false);
    const gantryMat = new THREE.MeshLambertMaterial({ color: 0x333842, emissive: 0x111111 });
    for (const [s, label, color] of [[path.startS, 'START', '#33e1ff'], [path.finishS, 'GOAL', '#ffd23f']]) {
      const p = path.posAt(s, 0);
      const hw = path.hw[p.i];
      const lg = new THREE.Group(); lg.position.set(p.x, p.y, p.z); lg.rotation.y = p.h;
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2, 1.6), new THREE.MeshBasicMaterial({ map: chk }));
      plane.rotation.x = -Math.PI / 2; plane.position.y = 0.06; lg.add(plane);
      for (const sx of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.4, 6, 0.4), gantryMat);
        post.position.set(sx * (hw + 0.8), 3, 0); lg.add(post);
      }
      const beam = new THREE.Mesh(new THREE.BoxGeometry(hw * 2 + 2, 0.9, 0.4), gantryMat);
      beam.position.y = 6; lg.add(beam);
      const board = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2, 0.8), new THREE.MeshBasicMaterial({ map: textSprite(label, '#fff', 'rgba(0,0,0,0.9)', 110, color), side: THREE.DoubleSide }));
      board.position.set(0, 6, -0.22); board.rotation.y = Math.PI; lg.add(board);
      g.add(lg);
    }
    this.scene.add(g);
    this.courseGroup = g;
  }

  update(t) {
    for (const m of this.poiMarkers) m.ring.material.opacity = 0.6 + 0.3 * Math.sin(t * 4);
  }
}
