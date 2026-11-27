// 首都高速 都心環状線（C1）・5号池袋線（北池袋〜竹橋JCT）・竹橋JCT連絡路の夜景シーン（C1 と 5号のエリアで共用）
// 外回り・内回りの両方の車線（それぞれ2車線＋路肩）、高架（床版・桁・橋脚）、掘割（擁壁）、トンネル（側壁・天井・照明）、
// 剛性防護柵（コンクリート壁）、遮音壁、道路照明、JCTの案内標識・速度標識、
// 沿線の建物（国土地理院 基盤地図情報の外形から押し出し。高さは推定）、東京タワーのような電波塔（名称なし）
import * as THREE from 'three';
import { AREAS } from '../data/map.js';
import { CIRCUITS, SHUTO5, CircuitGround, circuitCorridor, makeNet, terrainAt } from '../physics/circuit.js';
import BLD from '../data/c1_buildings.js';
import { canvasTex, asphaltTex, textSprite, rng } from './world.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const DECK = 2.2; // 床版＋桁の厚さ

// 車線の点（lat：進行方向の右が正）
function P(C, i, lat, yOff = 0) {
  const N = C.n; i = C.open ? Math.max(0, Math.min(N - 1, i)) : ((i % N) + N) % N;
  const rx = -C.tz[i], rz = C.tx[i];
  return { x: C.x[i] + rx * lat, y: C.y[i] + yOff, z: C.z[i] + rz * lat, rx, rz, tx: C.tx[i], tz: C.tz[i], i };
}

// 帯／壁のジオメトリを1つにまとめる
class Builder {
  constructor() { this.pos = []; this.uv = []; this.idx = []; }
  // 連続する区間ごとに帯を作る。fn(i) が {a:[x,y,z], b:[x,y,z], u} を返すか null で切れ目
  strip(C, fn, uvScale = 0.1) {
    let prev = -1;
    for (let k = 0; k <= (C.open ? C.n - 1 : C.n); k++) {
      const i = k % C.n;
      const r = fn(i);
      if (!r) { prev = -1; continue; }
        const s = k === C.n ? C.length : C.s[i];
      this.pos.push(...r.a, ...r.b);
      this.uv.push(0, s * uvScale, r.u ?? 1, s * uvScale);
      const v = this.pos.length / 3 - 2;
      if (prev >= 0) this.idx.push(prev, v, prev + 1, prev + 1, v, v + 1);
      prev = v;
    }
  }
  box(x, y, z, w, h, d, rot) {
    const c = Math.cos(rot), s = Math.sin(rot);
    const v0 = this.pos.length / 3;
    const corners = [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]];
    for (const yy of [y, y + h]) for (const [a, b] of corners) { this.pos.push(x + a * c + b * s, yy, z - a * s + b * c); this.uv.push((a + b) * 0.2, yy * 0.2); }
    for (let k = 0; k < 4; k++) { const a = v0 + k, b = v0 + ((k + 1) % 4); this.idx.push(a, b, a + 4, b, b + 4, a + 4); }
    this.idx.push(v0 + 4, v0 + 5, v0 + 6, v0 + 4, v0 + 6, v0 + 7);
  }
  mesh(mat) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx);
    g.computeVertexNormals();
    mat.side = THREE.DoubleSide;
    return new THREE.Mesh(g, mat);
  }
}

export class C1World {
  constructor(renderer, area = 'c1') {
    this.area = area;
    this.areaDef = AREAS[area];
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x05070f);
    this.scene.fog = new THREE.Fog(0x0b1020, 120, 1500);
    const pm = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.3;
    this.C = CIRCUITS[this.areaDef.circuit];
    this.lanes = [CIRCUITS.c1_outer, CIRCUITS.c1_inner, SHUTO5.U, SHUTO5.D, SHUTO5.UO, SHUTO5.UI, SHUTO5.DO, SHUTO5.DI];
    this.all = makeNet('shuto_all', this.lanes); // 壁を作らない所（別の車線の路面の上）の判定用
    this.allGround = new CircuitGround(this.all);
    this.terrain = SHUTO5.terrain;
    this.setLane(this.C);
    this.poiMarkers = [];
    this.gateMarkers = [];
    this.courseGroup = null;
    this.build();
  }

  // 走る車線（外回り／内回り）に合わせて路面・壁の判定を切り替える
  setLane(C) { this.setNet(C); }

  // 走行ネットワーク（車線や連絡路の組み合わせ）を切り替える
  setNet(net) {
    this.net = net;
    this.corridor = circuitCorridor(net);
    this.ground = new CircuitGround(net);
  }

  // 高架の下（橋脚・横梁の位置）を別の車線がくぐっているか：(x,z) から reach[m] 以内に、高さ yTop より 3m 以上低い別の車線の路面
  underRoad(C, x, z, yTop, reach) {
    const A = this.all, G = 24;
    if (!this.under) {
      this.under = new Map();
      for (let i = 0; i < A.n; i++) { const k = Math.floor(A.x[i] / G) * 7919 + Math.floor(A.z[i] / G); (this.under.get(k) || this.under.set(k, []).get(k)).push(i); }
    }
    const gx = Math.floor(x / G), gz = Math.floor(z / G);
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const i of this.under.get((gx + a) * 7919 + gz + b) || []) {
      if (A.lanes[A.laneOf[i]] === C || A.y[i] > yTop - 3) continue;
      if (Math.hypot(A.x[i] - x, A.z[i] - z) < A.hw[i] + 0.75 + reach) return true;
    }
    return false;
  }

  // 点 p（車線 C の i 番目の点から lat の位置）が、別の車線の路面（＋0.3m）の上か
  onOther(C, p) {
    const q = this.allGround.nearest(p.x, p.z, p.y);
    if (!q) return false;
    const L = this.all.lanes[this.all.laneOf[q.i]];
    if (L === C) return false;
    return Math.abs(q.lat) < this.all.hw[q.i] + 0.75 && Math.abs(this.all.y[q.i] - p.y) < 3;
  }

  build() {
    const S = this.scene;
    S.add(new THREE.HemisphereLight(0x52608a, 0x1a1612, 0.75));
    const moon = new THREE.DirectionalLight(0x8fa4d8, 0.35);
    moon.position.set(600, 900, -400);
    S.add(moon);
    this.buildSky();
    this.buildGround();
    for (const C of this.lanes) this.buildLane(C);
    this.buildBuildings();
    this.buildTower();
  }

  buildSky() {
    const tex = canvasTex(8, 256, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0, '#03050c'); gr.addColorStop(0.6, '#0a1024'); gr.addColorStop(0.85, '#1b1f3a'); gr.addColorStop(1, '#3a2a3a');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    }, false);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(2600, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2 + 0.05), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false }));
    dome.position.y = -30;
    this.scene.add(dome);
    // 遠くの街明かり（地平線の光の帯）
    const glow = canvasTex(1024, 64, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      const r = rng(4);
      for (let i = 0; i < 1400; i++) { const x = r() * w, y = h * (0.45 + r() * 0.55), s = 1 + r() * 2; g.fillStyle = `rgba(255,${180 + r() * 60},${120 + r() * 80},${0.3 + r() * 0.6})`; g.fillRect(x, y, s, s); }
    }, false);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(2400, 2400, 90, 48, 1, true), new THREE.MeshBasicMaterial({ map: glow, transparent: true, side: THREE.BackSide, fog: false, depthWrite: false }));
    ring.position.y = 40;
    this.scene.add(ring);
  }

  // 地面（DEM 20m格子）。街路の明かりをぼんやり
  buildGround() {
    const T = this.terrain;
    const nx = T.nx, nz = T.nz;
    const pos = new Float32Array(nx * nz * 3), col = new Float32Array(nx * nz * 3);
    const r = rng(9);
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i, x = T.x0 + i * T.cell, z = T.z0 + j * T.cell;
      pos[k * 3] = x; pos[k * 3 + 1] = T.H[k] - 0.3; pos[k * 3 + 2] = z;
      const v = 0.07 + r() * 0.03;
      col[k * 3] = v * 1.1; col[k * 3 + 1] = v; col[k * 3 + 2] = v * 0.95;
    }
    // 地面より低い道路（掘割・トンネル）の上に地面がかぶらないように：
    // 掘割は道路の周り（約16m）の地面を路面より下へ下げ、トンネルは地面を天井（路面＋5.6m）より上に保つ
    let roadMin = 0;
    for (const C of this.lanes) for (let i = 0; i < C.n; i++) {
      roadMin = Math.min(roadMin, C.y[i]);
      const kind = C.kind[i];
      if (kind === 0 || i % 2) continue;
      const ci = Math.round((C.x[i] - T.x0) / T.cell), cj = Math.round((C.z[i] - T.z0) / T.cell);
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        const gi = ci + di, gj = cj + dj; if (gi < 0 || gj < 0 || gi >= nx || gj >= nz) continue;
        const k = gj * nx + gi, d = Math.hypot(pos[k * 3] - C.x[i], pos[k * 3 + 2] - C.z[i]);
        if (d > 16) continue;
        if (kind === 1) pos[k * 3 + 1] = Math.min(pos[k * 3 + 1], C.y[i] - 1.0);
        else pos[k * 3 + 1] = Math.max(pos[k * 3 + 1], C.y[i] + 6.2);
      }
    }
    const idx = new Uint32Array((nx - 1) * (nz - 1) * 6);
    let q = 0;
    for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) { const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1; idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    this.scene.add(new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true })));
    const far = new THREE.Mesh(new THREE.PlaneGeometry(8000, 8000), new THREE.MeshLambertMaterial({ color: 0x0b0c10 }));
    far.rotation.x = -Math.PI / 2; far.position.y = Math.min(T.hmin, roadMin) - 30; this.scene.add(far); // 一番低い道路（トンネル）よりずっと下
  }

  buildLane(C) {
    const S = this.scene, N = C.n;
    const ci = (i) => (C.open ? Math.max(0, Math.min(N - 1, i)) : ((i % N) + N) % N);
    const HF = (i) => C.hw[ci(i)] + 0.75; // 路面の半幅（車線＋路肩）
    const WL = (i) => HF(i) + 0.15; // 防護柵の位置
    const other = (i, lat) => this.onOther(C, P(C, i, lat, 0)); // 別の車線の路面の上（合流・分岐部）には壁を作らない
    const kindAt = (i) => C.kind[((i % N) + N) % N];
    const isV = (i) => kindAt(i) === 0, isT = (i) => kindAt(i) === 2, isTr = (i) => kindAt(i) === 1;
    // 路面
    const road = new Builder();
    road.strip(C, (i) => { const a = P(C, i, -HF(i), 0.02), b = P(C, i, HF(i), 0.02); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z], u: 1.6 }; }, 0.08);
    const asp = asphaltTex();
    S.add(road.mesh(new THREE.MeshStandardMaterial({ map: asp, color: 0x6d7078, roughness: 0.85, metalness: 0.05 })));
    // 区画線：外側線（実線）・車線境界線（破線）
    const lines = new Builder();
    for (const sd of [-1, 1]) lines.strip(C, (i) => { const lat = sd * (HF(i) - 0.65); const a = P(C, i, lat - 0.08, 0.04), b = P(C, i, lat + 0.08, 0.04); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; });
    lines.strip(C, (i) => { if (Math.floor(C.s[i] / 6) % 3 !== 0 || C.hw[i] < 3) return null; const a = P(C, i, -0.08, 0.04), b = P(C, i, 0.08, 0.04); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; });
    S.add(lines.mesh(new THREE.MeshBasicMaterial({ color: 0xd8d8d0 })));
    // 照明の光だまり（路面に薄いオレンジ）
    const pool = canvasTex(64, 128, (g, w, h) => { const gr = g.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, h / 2); gr.addColorStop(0, 'rgba(255,190,110,0.55)'); gr.addColorStop(1, 'rgba(255,170,90,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); }, false);
    const poolMat = new THREE.MeshBasicMaterial({ map: pool, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    // 剛性防護柵（両側）
    const barrier = new Builder();
    for (const side of [-1, 1]) {
      barrier.strip(C, (i) => { if (other(i, side * WL(i))) return null; const a = P(C, i, side * WL(i), 0), b = P(C, i, side * WL(i), 1.1); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; }, 0.25);
      barrier.strip(C, (i) => { if (other(i, side * WL(i))) return null; const a = P(C, i, side * WL(i), 1.1), b = P(C, i, side * (WL(i) + 0.45), 1.1); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; });
    }
    const conc = canvasTex(64, 64, (g, w, h) => { g.fillStyle = '#9a9c9e'; g.fillRect(0, 0, w, h); g.fillStyle = '#7c7e80'; g.fillRect(0, 0, 2, h); const r = rng(3); for (let k = 0; k < 300; k++) { g.fillStyle = `rgba(60,60,60,${r() * 0.2})`; g.fillRect(r() * w, r() * h, 2, 2); } });
    S.add(barrier.mesh(new THREE.MeshLambertMaterial({ map: conc })));
    // 視線誘導の反射材（壁の上端の連続した帯）
    const refl = new Builder();
    for (const side of [-1, 1]) refl.strip(C, (i) => { if (isT(i) || other(i, side * WL(i))) return null; const a = P(C, i, side * (WL(i) - 0.02), 0.85), b = P(C, i, side * (WL(i) - 0.02), 0.95); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; });
    S.add(refl.mesh(new THREE.MeshBasicMaterial({ color: 0xffb648 })));
    // 高架：桁（側面）・床版の下面・橋脚
    const deck = new Builder();
    for (const side of [-1, 1]) deck.strip(C, (i) => { if (!isV(i) || other(i, side * WL(i))) return null; const a = P(C, i, side * (WL(i) + 0.45), -DECK), b = P(C, i, side * (WL(i) + 0.45), 0); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; }, 0.25);
    deck.strip(C, (i) => { if (!isV(i)) return null; const a = P(C, i, -(WL(i) + 0.45), -DECK), b = P(C, i, WL(i) + 0.45, -DECK); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; });
    for (let i = 0; i < N; i += 17) {
      if (!isV(i) || !isV(i + 4) || !isV(i - 4)) continue;
      const p = P(C, i, 0), gy = C.ground[i];
      const h = p.y - DECK - gy;
      if (h < 2) continue;
      if (this.underRoad(C, p.x, p.z, p.y, 5.5)) continue; // 下を別の車線（連絡路）がくぐる所には橋脚を立てない
      deck.box(p.x, gy - 0.5, p.z, 2.2, h + 0.5, 2.0, Math.atan2(p.tx, p.tz));
      deck.box(p.x, p.y - DECK - 1.2, p.z, 9.6, 1.2, 1.8, Math.atan2(p.tx, p.tz)); // 横梁
    }
    S.add(deck.mesh(new THREE.MeshLambertMaterial({ color: 0x8e9196 })));
    // 遮音壁（高架の外側＝左側）：半透明の板
    const sw = new Builder();
    sw.strip(C, (i) => { if (!isV(i) || Math.floor(C.s[i] / 400) % 3 === 2 || C.hw[i] < 3 || other(i, -WL(i))) return null; const a = P(C, i, -(WL(i) + 0.3), 1.1), b = P(C, i, -(WL(i) + 0.3), 3.6); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; }, 0.5);
    S.add(sw.mesh(new THREE.MeshLambertMaterial({ color: 0x7fa3b8, transparent: true, opacity: 0.35, depthWrite: false })));
    // 掘割の擁壁（路面から地盤まで）
    const tw = new Builder();
    for (const side of [-1, 1]) tw.strip(C, (i) => { if (!isTr(i) || other(i, side * WL(i))) return null; const a = P(C, i, side * (WL(i) + 0.45), 1.1), top = Math.max(C.ground[i] + 1.2, C.y[i] + 2); const b = P(C, i, side * (WL(i) + 0.45), top - C.y[i]); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; }, 0.25);
    S.add(tw.mesh(new THREE.MeshLambertMaterial({ map: conc, color: 0xb8b8b4 })));
    // トンネル：側壁・天井・照明（天井の両側に連続した灯具）
    const tun = new Builder();
    const TH = 5.6;
    for (const side of [-1, 1]) tun.strip(C, (i) => { if (!isT(i) || other(i, side * WL(i))) return null; const a = P(C, i, side * (WL(i) + 0.45), 1.1), b = P(C, i, side * (WL(i) + 0.45), TH); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; }, 0.25);
    tun.strip(C, (i) => { if (!isT(i)) return null; const a = P(C, i, -(WL(i) + 0.45), TH), b = P(C, i, WL(i) + 0.45, TH); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; });
    const tile = canvasTex(64, 64, (g, w, h) => { g.fillStyle = '#c8c4b0'; g.fillRect(0, 0, w, h); g.strokeStyle = '#a8a490'; g.strokeRect(0, 0, w, h); }, true);
    S.add(tun.mesh(new THREE.MeshLambertMaterial({ map: tile, emissive: 0x2a2416 })));
    const tl = new Builder();
    for (const side of [-1, 1]) tl.strip(C, (i) => { if (!isT(i) || Math.floor(C.s[i] / 4) % 2) return null; const a = P(C, i, side * (HF(i) - 0.8), TH - 0.05), b = P(C, i, side * (HF(i) - 0.4), TH - 0.05); return { a: [a.x, a.y, a.z], b: [b.x, b.y, b.z] }; });
    S.add(tl.mesh(new THREE.MeshBasicMaterial({ color: 0xffd9a0 })));
    // トンネル内の光だまり（照明の下）・道路照明（高架・掘割は左側の柵の上に約45m間隔）
    const pools = new Builder(), poles = new Builder(), heads = new Builder();
    for (let i = 0; i < N; i += 2) {
      const tunnel = isT(i);
      const step = tunnel ? 6 : 22; // 点の間隔は約2m
      if (i % step) continue;
      const c = P(C, i, tunnel ? 0 : -1.2, 0.05);
      // 光だまり（縦長の板）
      const a = P(C, i - 4, tunnel ? -3.5 : -4.2, 0.05), b = P(C, i - 4, tunnel ? 3.5 : 2.0, 0.05), a2 = P(C, i + 4, tunnel ? -3.5 : -4.2, 0.05), b2 = P(C, i + 4, tunnel ? 3.5 : 2.0, 0.05);
      const v0 = pools.pos.length / 3;
      pools.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, a2.x, a2.y, a2.z, b2.x, b2.y, b2.z);
      pools.uv.push(0, 0, 1, 0, 0, 1, 1, 1);
      pools.idx.push(v0, v0 + 2, v0 + 1, v0 + 1, v0 + 2, v0 + 3);
      if (!tunnel && (i / step) % 2 === 0) {
        const pp = P(C, i, -(WL(i) + 0.2), 1.1);
        poles.box(pp.x, pp.y, pp.z, 0.22, 9, 0.22, 0);
        const hd = P(C, i, -1.6, 10.0);
        const rot = Math.atan2(pp.tx, pp.tz);
        poles.box((pp.x + hd.x) / 2, hd.y - 0.15, (pp.z + hd.z) / 2, 0.15, 0.15, 2.6, rot + Math.PI / 2);
        heads.box(hd.x, hd.y - 0.35, hd.z, 0.5, 0.25, 1.0, rot);
      }
    }
    S.add(pools.mesh(poolMat));
    S.add(poles.mesh(new THREE.MeshLambertMaterial({ color: 0x6a6e74 })));
    S.add(heads.mesh(new THREE.MeshBasicMaterial({ color: 0xffc27a })));
    // 案内標識（JCTの約300m手前・門型）と速度標識
    const g = new THREE.Group();
    const gantry = new THREE.MeshLambertMaterial({ color: 0x7a7e84 });
    for (const sgn of C.signs) {
      const i0 = this.idxAt(C, sgn.board ? sgn.s : sgn.s - 300);
      if (isT(i0) || (C.open && (i0 < 3 || i0 > N - 4))) continue;
      const p = P(C, i0, 0, 0);
      const rot = Math.atan2(p.tx, p.tz);
      const wide = sgn.board && sgn.board.length > 14;
      const half = Math.max(HF(i0) + 0.4, wide ? 6 : 4.4);
      const grp = new THREE.Group(); grp.position.set(p.x, p.y, p.z); grp.rotation.y = rot;
      const tex = textSprite(sgn.board || `${sgn.name}　300m`, '#ffffff', '#0b6a3a', wide ? 60 : 84, '#0b6a3a');
      const board = new THREE.Mesh(new THREE.PlaneGeometry(wide ? 11.5 : 7.4, 1.9), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
      board.position.set(0, 6.6, 0.05); board.rotation.y = Math.PI; grp.add(board);
      const beam = new THREE.Mesh(new THREE.BoxGeometry(half * 2, 0.35, 0.35), gantry); beam.position.set(0, 7.7, 0.25); grp.add(beam);
      for (const sd of [-1, 1]) { const post = new THREE.Mesh(new THREE.BoxGeometry(0.3, 7.7, 0.3), gantry); post.position.set(sd * half, 3.85, 0.25); grp.add(post); }
      g.add(grp);
    }
    // 速度標識（最高速度50km/h）を約1.5kmごと
    const speedTex = canvasTex(128, 128, (c, w, h) => { c.fillStyle = '#fff'; c.beginPath(); c.arc(64, 64, 60, 0, Math.PI * 2); c.fill(); c.lineWidth = 12; c.strokeStyle = '#d0141e'; c.beginPath(); c.arc(64, 64, 52, 0, Math.PI * 2); c.stroke(); c.fillStyle = '#1b3fb0'; c.font = 'bold 56px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('50', 64, 68); }, false);
    const speedMat = new THREE.MeshBasicMaterial({ map: speedTex, transparent: true, side: THREE.DoubleSide });
    for (let s = 700; s < C.length - 100; s += 1500) {
      const i = this.idxAt(C, s);
      if (isT(i)) continue;
      const p = P(C, i, -(WL(i) + 0.1), 0);
      const m = new THREE.Mesh(new THREE.CircleGeometry(0.6, 24), speedMat);
      m.position.set(p.x, p.y + 2.6, p.z); m.rotation.y = Math.atan2(-p.tx, -p.tz);
      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.5, 0.08), gantry); pole.position.set(p.x, p.y + 1.8, p.z);
      g.add(m, pole);
    }
    S.add(g);
  }

  terrainY(x, z) { return terrainAt({ terrain: this.terrain }, x, z); }

  idxAt(C, s) {
    s = ((s % C.length) + C.length) % C.length;
    let lo = 0, hi = C.n - 1;
    while (lo < hi) { const m = (lo + hi + 1) >> 1; if (C.s[m] <= s) lo = m; else hi = m - 1; }
    return lo;
  }

  // 沿線の建物（外形を押し出し。窓の明かりのテクスチャ）。400m四方ごとにまとめる（視野外を描かない）
  buildBuildings() {
    const bin = typeof atob === 'function' ? atob(BLD.data) : Buffer.from(BLD.data, 'base64').toString('binary');
    const n = bin.length / 4; // Int32（デシメートル）
    const I = new Int32Array(n);
    for (let k = 0; k < n; k++) I[k] = bin.charCodeAt(4 * k) | (bin.charCodeAt(4 * k + 1) << 8) | (bin.charCodeAt(4 * k + 2) << 16) | (bin.charCodeAt(4 * k + 3) << 24);
    const winTex = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#20232a'; g.fillRect(0, 0, w, h);
      const r = rng(17);
      for (let fy = 0; fy < 16; fy++) for (let fx = 0; fx < 16; fx++) {
        const lit = r() < 0.42;
        const c = lit ? (r() < 0.7 ? `rgba(255,${210 + r() * 40},${150 + r() * 70},1)` : `rgba(${190 + r() * 40},${220 + r() * 30},255,1)`) : `rgba(${30 + r() * 20},${34 + r() * 20},${44 + r() * 20},1)`;
        g.fillStyle = c; g.fillRect(fx * 16 + 3, fy * 16 + 4, 10, 8);
      }
    });
    winTex.wrapS = winTex.wrapT = THREE.RepeatWrapping;
    const lowTex = canvasTex(64, 64, (g, w, h) => { g.fillStyle = '#2a2a2c'; g.fillRect(0, 0, w, h); const r = rng(5); for (let k = 0; k < 6; k++) { g.fillStyle = r() < 0.5 ? '#c9a46a' : '#3a3d44'; g.fillRect(4 + (k % 3) * 20, 8 + Math.floor(k / 3) * 30, 12, 14); } });
    const chunks = new Map();
    const getChunk = (x, z, t) => { const key = `${Math.floor(x / 400)},${Math.floor(z / 400)},${t === 1 ? 1 : 0}`; let c = chunks.get(key); if (!c) chunks.set(key, (c = { pos: [], uv: [], idx: [], roof: [] })); return c; };
    const T = this.C.terrain;
    let k = 0;
    while (k < n) {
      const t = I[k], h = I[k + 1] / 10, m = I[k + 2]; k += 3;
      const pts = [];
      for (let j = 0; j < m; j++) { pts.push([I[k] / 10, I[k + 1] / 10]); k += 2; }
      let cx = 0, cz = 0; for (const p of pts) { cx += p[0]; cz += p[1]; } cx /= m; cz /= m;
      const gy = this.terrainY(cx, cz) - 0.3;
      const c = getChunk(cx, cz, t);
      // 側面（u：周長[m]／v：高さ[m]、窓1つ＝約3m）
      let per = 0;
      for (let j = 0; j < m; j++) {
        const a = pts[j], b = pts[(j + 1) % m];
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const v0 = c.pos.length / 3;
        c.pos.push(a[0], gy, a[1], b[0], gy, b[1], b[0], gy + h, b[1], a[0], gy + h, a[1]);
        const u0 = per / 3.2 / 16, u1 = (per + len) / 3.2 / 16, vt = h / 3.4 / 16;
        c.uv.push(u0, 0, u1, 0, u1, vt, u0, vt);
        c.idx.push(v0, v0 + 1, v0 + 2, v0, v0 + 2, v0 + 3);
        per += len;
      }
      // 屋上
      const contour = pts.map((p) => new THREE.Vector2(p[0], p[1]));
      let tris;
      try { tris = THREE.ShapeUtils.triangulateShape(contour, []); } catch { tris = []; }
      const v0 = c.pos.length / 3;
      for (const p of pts) { c.pos.push(p[0], gy + h, p[1]); c.uv.push(0.01, 0.01); }
      for (const tr of tris) c.idx.push(v0 + tr[0], v0 + tr[2], v0 + tr[1]);
    }
    const hiMat = new THREE.MeshLambertMaterial({ map: winTex, emissiveMap: winTex, emissive: 0xffffff, emissiveIntensity: 0.9, color: 0x9aa0aa });
    const loMat = new THREE.MeshLambertMaterial({ map: lowTex, emissiveMap: lowTex, emissive: 0xffffff, emissiveIntensity: 0.6, color: 0x8a8a8a });
    lowTex.wrapS = lowTex.wrapT = THREE.RepeatWrapping;
    for (const [key, c] of chunks) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(c.pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(c.uv, 2));
      g.setIndex(c.idx);
      g.computeVertexNormals();
      g.computeBoundingSphere();
      const mesh = new THREE.Mesh(g, key.endsWith(',1') ? hiMat : loMat);
      hiMat.side = loMat.side = THREE.DoubleSide;
      this.scene.add(mesh);
    }
    this.buildingCount = BLD.count;
  }

  // 電波塔（芝公園・高さ333m。名称なし）：赤白の鉄塔とライトアップ
  buildTower() {
    const x = -869, z = 1481, gy = this.terrainY(x, z);
    const g = new THREE.Group(); g.position.set(x, gy, z);
    const red = new THREE.MeshBasicMaterial({ color: 0xff7a2a }), white = new THREE.MeshBasicMaterial({ color: 0xffe2c0 });
    const seg = 14;
    for (let k = 0; k < seg; k++) {
      const y0 = (k / seg) * 250, y1 = ((k + 1) / seg) * 250;
      const w0 = 80 * (1 - k / seg) ** 1.6 + 6, w1 = 80 * (1 - (k + 1) / seg) ** 1.6 + 6;
      const m = new THREE.Mesh(new THREE.CylinderGeometry(w1 / 2, w0 / 2, y1 - y0, 4, 1, true), k % 2 ? white : red);
      m.material = m.material.clone(); m.material.wireframe = true;
      m.position.y = (y0 + y1) / 2; m.rotation.y = Math.PI / 4; g.add(m);
    }
    for (const [y, w] of [[125, 36], [223, 18]]) { const deck = new THREE.Mesh(new THREE.BoxGeometry(w, 8, w), white); deck.position.y = y; g.add(deck); }
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(1, 2.5, 83, 6), red); ant.position.y = 250 + 41; g.add(ant);
    this.scene.add(g);
  }

  // コース（スタート・フィニッシュのゲート）：走る車線に切り替え
  setCourse(path) {
    if (this.courseGroup) { this.scene.remove(this.courseGroup); this.courseGroup = null; }
    if (!path) return;
    if (path.C) { this.C = path.C; this.setNet(path.C); }
    const C = this.C;
    const g = new THREE.Group();
    const p = P(C, 0, 0, 0);
    const chk = canvasTex(256, 32, (c) => { for (let x = 0; x < 32; x++) for (let y = 0; y < 4; y++) { c.fillStyle = (x + y) % 2 ? '#111' : '#eee'; c.fillRect(x * 8, y * 8, 8, 8); } }, false);
    const line = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.2), new THREE.MeshBasicMaterial({ map: chk }));
    line.rotation.x = -Math.PI / 2; line.rotation.z = Math.atan2(p.tx, p.tz); line.position.set(p.x, p.y + 0.05, p.z);
    g.add(line);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.2), new THREE.MeshBasicMaterial({ map: textSprite('START / FINISH', '#fff', 'rgba(0,0,0,0.9)', 100, '#33e1ff'), side: THREE.DoubleSide }));
    board.position.set(p.x, p.y + 7.2, p.z); board.rotation.y = Math.atan2(p.tx, p.tz) + Math.PI;
    g.add(board);
    this.scene.add(g);
    this.courseGroup = g;
  }

  update() {}
}
