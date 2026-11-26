// 実在サーキット（筑波・鈴鹿・富士）を元にした架空名称のサーキットの夕暮れのシーン
// コース・縁石・ランオフ（芝／グラベル／舗装）・タイヤバリア・ガードレール・ピットウォール、
// ピットビル・コントロールタワー・グランドスタンド・コーナー看板、立体交差の橋（鈴鹿）、
// 筑波のブリッジ・隣接コース、鈴鹿の観覧車、富士の富士山など（施設名はすべて架空）
import * as THREE from 'three';
import { AREAS } from '../data/map.js';
import { CIRCUITS, CircuitGround, circuitCorridor, terrainAt as terrainAtC } from '../physics/circuit.js';
import { canvasTex, asphaltTex, textSprite, rng } from './world.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// 構築中のサーキット（CircuitWorld の構築時に設定）
let C = null, N = 0, L = 0;
const W = (i) => ((i % N) + N) % N;
const terrainAt = (x, z) => terrainAtC(C, x, z);
const SIGN_TEXT = {
  tsukuba: ['TSUKUBA SANROKU CIRCUIT', 'つくば山麓サーキット'],
  suzuka: ['SUZUKA KYURYO CIRCUIT', '鈴鹿丘陵サーキット'],
  fuji: ['FUJI SANROKU CIRCUIT', '富士山麓サーキット'],
};

// 中心線から lat（右正）の点
function pt(i, lat, yOff = 0) {
  i = W(i);
  const rx = -C.tz[i], rz = C.tx[i];
  return { x: C.x[i] + rx * lat, y: C.y[i] + yOff, z: C.z[i] + rz * lat, rx, rz, tx: C.tx[i], tz: C.tz[i] };
}
// 距離 s の位置（補間なし・最寄りの点）
const idxAt = (s) => { s = ((s % L) + L) % L; let lo = 0, hi = N - 1; while (lo < hi) { const m = (lo + hi + 1) >> 1; if (C.s[m] <= s) lo = m; else hi = m - 1; } return lo; };
const inRange = (s, a, b) => (a <= b ? s >= a && s <= b : s >= a || s <= b);

// コースに沿った帯。lat0/lat1 は i の関数か数値。mask(i) が偽の区間は作らない
function band(lat0, lat1, yOff, mat, { mask = null, uvLen = 0.1, uAcross = 1 } = {}) {
  const pos = [], uv = [], idx = [];
  const f = (v, i) => (typeof v === 'function' ? v(i) : v);
  let prev = -1;
  for (let k = 0; k <= N; k++) {
    const i = W(k);
    const on = !mask || mask(i) || (k > 0 && mask(W(k - 1)));
    if (!on) { prev = -1; continue; }
    const a = pt(i, f(lat0, i), yOff), b = pt(i, f(lat1, i), yOff);
    const s = k === N ? L : C.s[i];
    pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
    uv.push(0, s * uvLen, uAcross, s * uvLen);
    const v = pos.length / 3 - 2;
    if (prev >= 0) idx.push(prev, v, prev + 1, prev + 1, v, v + 1);
    prev = v;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  mat.side = THREE.DoubleSide;
  return new THREE.Mesh(g, mat);
}

// 点(x,z)が、別の区間（s が離れた区間）の走行範囲（路面＋縁石＋2m）に入っているか。
// 並走する区間・ヘアピンの近くで、片方の外周の壁・フェンスがもう片方のコース上に立たないように
let GROUND = null;
function onOtherTrack(i, x, z, y) {
  const q = GROUND.nearest(x, z, y);
  if (!q) return false;
  let ds = Math.abs(C.s[q.i] - C.s[i]); ds = Math.min(ds, L - ds);
  return ds > 40 && Math.abs(q.lat) < C.hw[q.i] + 3.3 && Math.abs(C.y[q.i] - y) < 3;
}

// コースに沿った壁（lat の位置に高さ h）
function wall(lat, h, mat, { mask = null, yBase = 0, uvLen = 0.5 } = {}) {
  const pos = [], uv = [], idx = [];
  const f = (v, i) => (typeof v === 'function' ? v(i) : v);
  let prev = -1;
  for (let k = 0; k <= N; k++) {
    const i = W(k);
    const on = !mask || mask(i) || (k > 0 && mask(W(k - 1)));
    if (!on) { prev = -1; continue; }
    const p = pt(i, f(lat, i), yBase);
    if (onOtherTrack(i, p.x, p.z, p.y - yBase)) { prev = -1; continue; }
    const s = k === N ? L : C.s[i];
    pos.push(p.x, p.y, p.z, p.x, p.y + h, p.z);
    uv.push(s * uvLen, 0, s * uvLen, 1);
    const v = pos.length / 3 - 2;
    if (prev >= 0) idx.push(prev, v, prev + 1, prev + 1, v, v + 1);
    prev = v;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  mat.side = THREE.DoubleSide;
  return new THREE.Mesh(g, mat);
}

export class CircuitWorld {
  constructor(renderer, area = 'tsukuba') {
    this.area = area;
    this.areaDef = AREAS[area];
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x2a2440, 200, area === 'tsukuba' ? 1100 : 1900);
    const pm = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.45;
    C = this.C = CIRCUITS[this.areaDef.circuit]; N = C.n; L = C.length;
    this.corridor = circuitCorridor(C);
    this.ground = new CircuitGround(C);
    GROUND = this.ground;
    this.poiMarkers = [];
    this.gateMarkers = [];
    this.courseGroup = null;
    this.lamps = [];
    this.build();
  }

  build() {
    this.buildSky();
    this.buildGround();
    this.buildTrack();
    this.buildBarriers();
    this.buildPit();
    this.buildGrandstand();
    this.noTree = [];
    if (C.id === 'tsukuba') { this.buildBridge(); this.buildOtherCourses(); }
    this.buildOverpass();
    this.buildEmbankment();
    this.buildSigns();
    if (C.id === 'suzuka') this.buildFerrisWheel();
    if (C.id === 'fuji') this.buildMtFuji();
    this.buildTrees();
    this.buildLights();
  }

  // 夕暮れの空（グラデーションのドーム）と太陽光
  buildSky() {
    const S = this.scene;
    const tex = canvasTex(8, 256, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0, '#0c1030'); gr.addColorStop(0.45, '#2b2a5a'); gr.addColorStop(0.7, '#7a4a6a'); gr.addColorStop(0.86, '#e07a4a'); gr.addColorStop(1, '#ffb070');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    }, false);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(2500, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2 + 0.05), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false }));
    dome.position.y = C.terrain.hmin - 40;
    S.add(dome);
    // 遠くの山並み（筑波山の方角＝北東にシルエット）
    const mtn = canvasTex(1024, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.fillStyle = '#1a1830';
      g.beginPath(); g.moveTo(0, h);
      for (let x = 0; x <= w; x += 8) { const t = x / w; const pk = C.id === 'tsukuba' ? 1 : 0.25; const y = h - (18 + pk * (70 * Math.exp(-((t - 0.42) ** 2) / 0.004) + 55 * Math.exp(-((t - 0.47) ** 2) / 0.003)) + 14 * Math.sin(t * 40) + (C.id === 'tsukuba' ? 0 : 10 * Math.sin(t * 13 + 1))); g.lineTo(x, y); }
      g.lineTo(w, h); g.closePath(); g.fill();
    }, false);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(2200, 2200, 260, 48, 1, true), new THREE.MeshBasicMaterial({ map: mtn, transparent: true, side: THREE.BackSide, fog: false, depthWrite: false }));
    ring.position.y = C.terrain.hmin + 40; ring.rotation.y = -0.6;
    S.add(ring);
    S.background = new THREE.Color(0x0c1030);
    S.add(new THREE.HemisphereLight(0x9a90c8, 0x3a3020, 1.15));
    const sun = new THREE.DirectionalLight(0xffb080, 1.1);
    sun.position.set(-600, 180, 300);
    S.add(sun);
  }

  // 地面（芝）：コース周辺は路面より少し低く、外は地形
  buildGround() {
    const T = C.terrain;
    const x0 = T.x0 + 8, z0 = T.z0 + 8, x1 = T.x0 + (T.nx - 2) * T.cell, z1 = T.z0 + (T.nz - 2) * T.cell, cell = C.id === 'tsukuba' ? 4 : 5;
    const nx = Math.round((x1 - x0) / cell) + 1, nz = Math.round((z1 - z0) / cell) + 1;
    const pos = new Float32Array(nx * nz * 3), col = new Float32Array(nx * nz * 3);
    const r = rng(21);
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i, x = x0 + i * cell, z = z0 + j * cell;
      const y = this.ground.groundY(x, z);
      pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = z;
      const v = 0.8 + r() * 0.3;
      col[k * 3] = 0.16 * v; col[k * 3 + 1] = 0.24 * v; col[k * 3 + 2] = 0.12 * v;
    }
    const idx = new Uint32Array((nx - 1) * (nz - 1) * 6);
    let q = 0;
    for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
      idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    this.scene.add(new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true })));
    // 遠景の田畑
    const far = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), new THREE.MeshLambertMaterial({ color: 0x1c2a16 }));
    far.rotation.x = -Math.PI / 2; far.position.y = C.terrain.hmin - 2; this.scene.add(far);
  }

  buildTrack() {
    const S = this.scene;
    const asp = asphaltTex(); asp.repeat.set(1, 1);
    S.add(band((i) => -C.hw[i], (i) => C.hw[i], 0.02, new THREE.MeshStandardMaterial({ map: asp, color: 0x8a8d96, roughness: 0.92, metalness: 0 }), { uvLen: 0.08, uAcross: 2 }));
    // 白線（コース両端）
    const white = new THREE.MeshBasicMaterial({ color: 0xd8d8d8 });
    S.add(band((i) => -C.hw[i] + 0.1, (i) => -C.hw[i] + 0.32, 0.03, white));
    S.add(band((i) => C.hw[i] - 0.32, (i) => C.hw[i] - 0.1, 0.03, white.clone()));
    // 縁石（赤白）
    const kerbTex = canvasTex(32, 64, (g, w, h) => { g.fillStyle = '#d8d8d8'; g.fillRect(0, 0, w, h / 2); g.fillStyle = '#c4161c'; g.fillRect(0, h / 2, w, h / 2); });
    const kerbMat = () => new THREE.MeshLambertMaterial({ map: kerbTex });
    S.add(band((i) => -C.hw[i] - 1.3, (i) => -C.hw[i], 0.05, kerbMat(), { mask: (i) => C.kerbL[i], uvLen: 0.5 }));
    S.add(band((i) => C.hw[i], (i) => C.hw[i] + 1.3, 0.05, kerbMat(), { mask: (i) => C.kerbR[i], uvLen: 0.5 }));
    // ゼブラ（コーナー出口の外側の舗装された部分）
    const zebraTex = canvasTex(64, 64, (g, w, h) => { g.fillStyle = '#5a5c62'; g.fillRect(0, 0, w, h); g.strokeStyle = '#d8d8d8'; g.lineWidth = 10; for (let k = -2; k < 4; k++) { g.beginPath(); g.moveTo(k * 32, h); g.lineTo(k * 32 + h, 0); g.stroke(); } });
    const zebraMask = (side) => (i) => {
      const run = side < 0 ? C.runL[i] : C.runR[i];
      const kerb = side < 0 ? C.kerbL[i] : C.kerbR[i];
      const k = C.curv[W(i - 12)], out = k > 0 ? -1 : 1; // 少し手前のコーナーの外側＝出口の外
      return kerb && run > 5 && side === out && Math.abs(k) > 1 / 90;
    };
    S.add(band((i) => -C.hw[i] - 3.8, (i) => -C.hw[i] - 1.3, 0.045, new THREE.MeshLambertMaterial({ map: zebraTex }), { mask: zebraMask(-1), uvLen: 0.25 }));
    S.add(band((i) => C.hw[i] + 1.3, (i) => C.hw[i] + 3.8, 0.045, new THREE.MeshLambertMaterial({ map: zebraTex }), { mask: zebraMask(1), uvLen: 0.25 }));
    // グラベル
    const gravelTex = canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#9c8a68'; g.fillRect(0, 0, w, h); const r = rng(4); for (let k = 0; k < 3000; k++) { const v = 120 + r() * 90; g.fillStyle = `rgba(${v},${v * 0.9},${v * 0.7},0.6)`; g.fillRect(r() * w, r() * h, 1.5, 1.5); } });
    const gm = () => new THREE.MeshLambertMaterial({ map: gravelTex, color: 0xb0a090 });
    S.add(band((i) => -C.hw[i] - C.runL[i], (i) => -C.hw[i] - 2.5, 0.0, gm(), { mask: (i) => C.gravelL[i], uvLen: 0.15, uAcross: 3 }));
    S.add(band((i) => C.hw[i] + 2.5, (i) => C.hw[i] + C.runR[i], 0.0, gm(), { mask: (i) => C.gravelR[i], uvLen: 0.15, uAcross: 3 }));
    // 舗装のランオフ（ホームストレートのピットウォール側）
    const paved = new THREE.MeshStandardMaterial({ map: asp, color: 0x6a6d74, roughness: 0.95 });
    S.add(band((i) => C.hw[i], (i) => C.hw[i] + C.runR[i], 0.015, paved, { mask: (i) => C.pavedR[i] }));
    // コントロールライン（市松）とグリッド
    const chk = canvasTex(256, 32, (g) => { for (let x = 0; x < 32; x++) for (let y = 0; y < 4; y++) { g.fillStyle = (x + y) % 2 ? '#111' : '#eee'; g.fillRect(x * 8, y * 8, 8, 8); } }, false);
    const p0 = pt(0, 0, 0.04);
    const line = new THREE.Mesh(new THREE.PlaneGeometry(C.hw[0] * 2, 1.4), new THREE.MeshBasicMaterial({ map: chk }));
    line.rotation.x = -Math.PI / 2; line.rotation.z = Math.atan2(p0.tx, p0.tz);
    line.position.set(p0.x, p0.y, p0.z);
    S.add(line);
    const gridMat = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
    for (let k = 1; k <= 12; k++) {
      const i = idxAt(L - 10 - k * 8);
      const side = k % 2 ? -1 : 1;
      const p = pt(i, side * 3.2, 0.04);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.25), gridMat);
      m.rotation.x = -Math.PI / 2; m.rotation.z = Math.atan2(p.tx, p.tz);
      m.position.set(p.x, p.y, p.z);
      S.add(m);
    }
  }

  // バリア：コーナー外側（グラベルの奥）はタイヤバリア、その他はガードレール、ホームストレートのイン側はピットウォール
  buildBarriers() {
    const S = this.scene;
    const pitSide = (i) => inRange(C.s[i], C.pitWall[0], C.pitWall[1]);
    const tyreTex = canvasTex(64, 32, (g, w, h) => { g.fillStyle = '#111'; g.fillRect(0, 0, w, h); for (let k = 0; k < 4; k++) { g.fillStyle = '#2a2a2a'; g.beginPath(); g.arc(8 + k * 16, 16, 7, 0, Math.PI * 2); g.fill(); g.fillStyle = '#0a0a0a'; g.beginPath(); g.arc(8 + k * 16, 16, 3, 0, Math.PI * 2); g.fill(); } });
    const railTex = canvasTex(64, 32, (g, w, h) => { g.fillStyle = '#9aa0a8'; g.fillRect(0, 0, w, h); g.fillStyle = '#c8ccd2'; g.fillRect(0, 6, w, 6); g.fillRect(0, 20, w, 6); g.fillStyle = '#555'; g.fillRect(0, 0, 3, h); });
    const tyreZone = (side) => (i) => {
      const run = side < 0 ? C.runL[i] : C.runR[i];
      const gr = side < 0 ? C.gravelL[i] : C.gravelR[i];
      return (gr || run > 12) && !(side > 0 && pitSide(i));
    };
    for (const side of [-1, 1]) {
      const lat = (i) => side * (C.hw[i] + (side < 0 ? C.runL[i] : C.runR[i]) + 0.35);
      const tz = tyreZone(side);
      S.add(wall(lat, 0.95, new THREE.MeshLambertMaterial({ map: tyreTex }), { mask: tz, yBase: -0.1, uvLen: 1.6 }));
      const railMask = (i) => !tz(i) && !(side > 0 && pitSide(i));
      S.add(wall((i) => lat(i) + side * 0.2, 0.75, new THREE.MeshLambertMaterial({ map: railTex }), { mask: railMask, yBase: 0, uvLen: 0.25 }));
      // フェンス（金網）
      const fenceTex = canvasTex(32, 32, (g, w, h) => { g.clearRect(0, 0, w, h); g.strokeStyle = 'rgba(200,210,220,0.55)'; g.lineWidth = 1; for (let k = -32; k < 64; k += 8) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k + 32, 32); g.stroke(); g.beginPath(); g.moveTo(k + 32, 0); g.lineTo(k, 32); g.stroke(); } });
      const fm = new THREE.MeshBasicMaterial({ map: fenceTex, transparent: true, depthWrite: false });
      S.add(wall((i) => lat(i) + side * 1.2, 3.2, fm, { mask: (i) => !(side > 0 && pitSide(i)) && (side < 0 ? C.runL[i] : C.runR[i]) > 6, yBase: 0.9, uvLen: 0.4 }));
    }
    // ピットウォール（白いコンクリート）＋フェンス
    const pw = (i) => C.hw[i] + C.runR[i] + 0.3;
    S.add(wall(pw, 1.1, new THREE.MeshLambertMaterial({ color: 0xd8d8d8, emissive: 0x202020 }), { mask: pitSide }));
    S.add(wall((i) => pw(i) + 0.4, 1.1, new THREE.MeshLambertMaterial({ color: 0xc8c8c8 }), { mask: pitSide }));
    S.add(band(pw, (i) => pw(i) + 0.4, 1.1, new THREE.MeshLambertMaterial({ color: 0xbcbcbc }), { mask: pitSide }));
  }

  // ピットロード・ピットビル（ガレージ）・コントロールタワー（ホームストレートのイン側）
  buildPit() {
    const S = this.scene;
    const g = new THREE.Group();
    const s0 = C.pitWall[0] + 25, s1 = C.pitWall[1] - 20; // 0 をまたぐ
    const span = (s1 - s0 + L) % L;
    const pitMask = (i) => inRange(C.s[i], s0, s1);
    const wallLat = (i) => C.hw[i] + C.runR[i] + 0.7;
    const asp = asphaltTex();
    S.add(band(wallLat, (i) => wallLat(i) + 11, 0.0, new THREE.MeshStandardMaterial({ map: asp, color: 0x7a7d84, roughness: 0.95 }), { mask: pitMask }));
    S.add(band((i) => wallLat(i) + 5.4, (i) => wallLat(i) + 5.6, 0.02, new THREE.MeshBasicMaterial({ color: 0xffffff }), { mask: pitMask }));
    // ガレージ棟：区画ごとに箱を並べる（開口部の明かり）
    const garageMat = new THREE.MeshLambertMaterial({ color: 0xd8dde4 });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x3b7f6b });
    const doorMat = new THREE.MeshBasicMaterial({ color: 0xfff1d0 });
    const darkDoor = new THREE.MeshLambertMaterial({ color: 0x30343c });
    const r = rng(9);
    for (let d = 0; d < span - 8; d += 8) {
      const s = s0 + d + 4;
      const i = idxAt(s);
      const lat = wallLat(i) + 11 + 6;
      const p = pt(i, lat);
      const rot = Math.atan2(p.tx, p.tz);
      const box = new THREE.Mesh(new THREE.BoxGeometry(12, 6, 7.8), garageMat);
      box.position.set(p.x, p.y + 3, p.z); box.rotation.y = rot + Math.PI / 2;
      g.add(box);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(14, 0.4, 8), roofMat);
      roof.position.set(p.x - p.rx * 1, p.y + 6.2, p.z - p.rz * 1); roof.rotation.y = rot + Math.PI / 2;
      g.add(roof);
      const q = pt(i, lat - 6.02);
      const door = new THREE.Mesh(new THREE.PlaneGeometry(6.6, 3.6), r() < 0.6 ? doorMat : darkDoor);
      door.position.set(q.x, q.y + 1.9, q.z); door.rotation.y = rot - Math.PI / 2;
      g.add(door);
    }
    // ピットビル2階の看板
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(60, 2.4), new THREE.MeshBasicMaterial({ map: textSprite(SIGN_TEXT[C.id][0], '#fff', 'rgba(20,40,80,0.95)', 92, '#4ad'), side: THREE.DoubleSide }));
    { const i = idxAt(s0 + span * 0.45); const p = pt(i, wallLat(i) + 10.7); sign.position.set(p.x, p.y + 7.6, p.z); sign.rotation.y = Math.atan2(p.tx, p.tz) - Math.PI / 2; g.add(sign); }
    // コントロールタワー（コントロールライン付近）
    {
      const i = idxAt(6);
      const p = pt(i, wallLat(i) + 11 + 9);
      const rot = Math.atan2(p.tx, p.tz);
      const tower = new THREE.Mesh(new THREE.BoxGeometry(16, 16, 12), new THREE.MeshLambertMaterial({ color: 0xe4e6ea }));
      tower.position.set(p.x, p.y + 8, p.z); tower.rotation.y = rot;
      const glass = new THREE.Mesh(new THREE.BoxGeometry(17, 3.2, 12.6), new THREE.MeshStandardMaterial({ color: 0x223344, emissive: 0x8899aa, emissiveIntensity: 0.5, roughness: 0.2, metalness: 0.6 }));
      glass.position.set(p.x, p.y + 13.5, p.z); glass.rotation.y = rot;
      const roof = new THREE.Mesh(new THREE.BoxGeometry(18, 0.6, 13.5), new THREE.MeshLambertMaterial({ color: 0x555a63 }));
      roof.position.set(p.x, p.y + 16.3, p.z); roof.rotation.y = rot;
      g.add(tower, glass, roof);
      const t = new THREE.Mesh(new THREE.PlaneGeometry(14, 2), new THREE.MeshBasicMaterial({ map: textSprite(SIGN_TEXT[C.id][1], '#fff', 'rgba(170,20,30,0.95)', 90, '#f66'), side: THREE.DoubleSide }));
      const q = pt(i, wallLat(i) + 11 + 2.9);
      t.position.set(q.x, q.y + 10, q.z); t.rotation.y = rot - Math.PI / 2;
      g.add(t);
      // スタートシグナル（コントロールラインの上のガントリー）
      const p0 = pt(0, 0);
      const gm = new THREE.MeshLambertMaterial({ color: 0x2a2e36 });
      const beam = new THREE.Mesh(new THREE.BoxGeometry(C.hw[0] * 2 + C.runL[0] + C.runR[0] + 2, 0.8, 0.6), gm);
      const mid = pt(0, (C.runR[0] - C.runL[0]) / 2);
      beam.position.set(mid.x, mid.y + 7, mid.z); beam.rotation.y = Math.atan2(p0.tx, p0.tz);
      g.add(beam);
      for (const side of [-1, 1]) {
        const lat = side < 0 ? -(C.hw[0] + C.runL[0] + 0.5) : C.hw[0] + C.runR[0] + 0.5;
        const pp = pt(0, lat);
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7, 0.5), gm);
        post.position.set(pp.x, pp.y + 3.5, pp.z); g.add(post);
      }
      this.signal = [];
      for (let k = 0; k < 5; k++) {
        const pp = pt(0, (k - 2) * 0.9);
        const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.32, 16), new THREE.MeshBasicMaterial({ color: 0x330000 }));
        lamp.position.set(pp.x - p0.tx * 0.32, pp.y + 7, pp.z - p0.tz * 0.32); lamp.rotation.y = Math.atan2(p0.tx, p0.tz) + Math.PI;
        g.add(lamp); this.signal.push(lamp);
      }
    }
    S.add(g);
    if (C.id !== 'tsukuba') return;
    // パドックの建物（インフィールド・筑波）
    const bm = new THREE.MeshLambertMaterial({ color: 0xbfc4cc });
    // コース（ランオフ・バリアを含む）から3m以上離れていない建物は置かない
    const clear = (x, z, w, d, rot) => {
      const c = Math.cos(rot), sn = Math.sin(rot);
      for (let i = 0; i <= 6; i++) for (let j = 0; j <= 6; j++) {
        const lx = (i / 6 - 0.5) * w, lz = (j / 6 - 0.5) * d;
        const px = x + lx * c + lz * sn, pz = z - lx * sn + lz * c;
        const q = this.ground.nearest(px, pz, null);
        if (q && q.d < C.hw[q.i] + Math.max(C.runL[q.i], C.runR[q.i]) + 3) return false;
      }
      return true;
    };
    const placeBld = (x, z, w, d, h, rot, mat = bm) => {
      if (!clear(x, z, w, d, rot)) return;
      const y = terrainAt(x, z);
      const q = this.ground.nearest(x, z);
      const yy = q ? Math.max(y, C.y[q.i] - 0.12) : y;
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      b.position.set(x, yy + h / 2, z); b.rotation.y = rot;
      g.add(b);
    };
    // 航空写真で建物のある位置（パドック・管理棟など）
    placeBld(-40, -48, 9, 40, 5, -0.35);
    placeBld(-20, 25, 8, 12, 4, 0.1);
    placeBld(-55, 85, 9, 12, 4, 0);
    placeBld(-88, 95, 7, 22, 5, 0.05);
    placeBld(-80, 15, 10, 10, 6, 0);
    placeBld(-105, 140, 14, 22, 7, 0.05);
    placeBld(85, 95, 26, 8, 5, -0.5);
    placeBld(5, 40, 28, 7, 4, 0.45, new THREE.MeshLambertMaterial({ color: 0xd0d4da }));
  }

  // グランドスタンド（ホームストレートのアウト側）
  buildGrandstand() {
    const S = this.scene;
    const g = new THREE.Group();
    const seatMat = new THREE.MeshLambertMaterial({ color: 0x2c5aa0 });
    const stepMat = new THREE.MeshLambertMaterial({ color: 0x9aa0a8 });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0xd0d4da });
    const crowd = new THREE.MeshLambertMaterial({ color: 0x6a5a50 });
    const r = rng(14);
    for (let s = C.stand[0]; s <= C.stand[1]; s += 10) {
      const i = idxAt(s);
      const base = C.hw[i] + C.runL[i] + 3.5;
      const rot = Math.atan2(C.tx[i], C.tz[i]);
      for (let row = 0; row < 8; row++) {
        const p = pt(i, -(base + row * 1.2));
        const st = new THREE.Mesh(new THREE.BoxGeometry(10, 0.45 + row * 0.55, 1.2), row % 2 ? seatMat : stepMat);
        st.position.set(p.x, p.y + (0.45 + row * 0.55) / 2 + 0.6, p.z); st.rotation.y = rot + Math.PI / 2;
        g.add(st);
        if (r() < 0.35) { const c = new THREE.Mesh(new THREE.BoxGeometry(10 * (0.3 + r() * 0.5), 0.5, 0.5), crowd); c.position.set(p.x, p.y + 0.45 + row * 0.55 + 0.9, p.z); c.rotation.y = rot + Math.PI / 2; g.add(c); }
      }
      const pr = pt(i, -(base + 5));
      const roof = new THREE.Mesh(new THREE.BoxGeometry(10.2, 0.3, 11), roofMat);
      roof.position.set(pr.x, pr.y + 8.5, pr.z); roof.rotation.y = rot + Math.PI / 2; roof.rotation.x = 0;
      g.add(roof);
      const pp = pt(i, -(base + 9.8));
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.4, 8.5, 0.4), stepMat);
      post.position.set(pp.x, pp.y + 4.25, pp.z); g.add(post);
    }
    const i = idxAt(10);
    const p = pt(i, -(C.hw[i] + C.runL[i] + 4.2));
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(40, 2), new THREE.MeshBasicMaterial({ map: textSprite('MAIN GRANDSTAND', '#fff', 'rgba(30,30,40,0.95)', 96, '#fc6'), side: THREE.DoubleSide }));
    sign.position.set(p.x, p.y + 9.6, p.z); sign.rotation.y = Math.atan2(C.tx[i], C.tz[i]) + Math.PI / 2;
    g.add(sign);
    S.add(g);
  }

  // ブリッジ（第1ヘアピンの先でコースをまたぐ歩道橋。実在の看板は使わず架空の広告）
  buildBridge() {
    const q = this.ground.nearest(38, 45);
    if (!q) return;
    const i = q.i;
    const p = pt(i, 0);
    const rot = Math.atan2(p.tx, p.tz);
    const g = new THREE.Group();
    g.position.set(p.x, p.y, p.z); g.rotation.y = rot;
    const span = C.hw[i] * 2 + C.runL[i] + C.runR[i] + 8;
    const mid = (C.runR[i] - C.runL[i]) / 2;
    const m = new THREE.MeshLambertMaterial({ color: 0xe8e8ec });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(span, 1.0, 3.2), m);
    deck.position.set(-mid, 6.2, 0); g.add(deck);
    const ad = textSprite('RACING IBR  ★  NIGHT RUN', '#fff', 'rgba(200,20,40,0.95)', 84, '#f88');
    for (const sd of [-1, 1]) {
      const pan = new THREE.Mesh(new THREE.PlaneGeometry(span * 0.8, 2.2), new THREE.MeshBasicMaterial({ map: ad, side: THREE.DoubleSide }));
      pan.position.set(-mid, 6.2, sd * 1.65); g.add(pan);
      const tw = new THREE.Mesh(new THREE.BoxGeometry(3, 7.5, 3.6), m);
      tw.position.set(-mid + sd * (span / 2 - 1.5), 3.75, 0); g.add(tw);
    }
    // 手すり
    const rail = new THREE.Mesh(new THREE.BoxGeometry(span, 1.2, 0.1), new THREE.MeshLambertMaterial({ color: 0x8899aa }));
    rail.position.set(-mid, 7.3, 1.5); g.add(rail);
    const rail2 = rail.clone(); rail2.position.z = -1.5; g.add(rail2);
    this.scene.add(g);
  }

  // コーナー名の看板・ブレーキングの距離板
  buildSigns() {
    const S = this.scene;
    const g = new THREE.Group();
    const pole = new THREE.MeshLambertMaterial({ color: 0x888888 });
    for (const c of C.signs) {
      const i = idxAt(c.s);
      const side = c.right ? -1 : 1; // コーナーの外側
      const lat = side * (C.hw[i] + (side < 0 ? C.runL[i] : C.runR[i]) + 2.5);
      const p = pt(i, lat);
      const b = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.5), new THREE.MeshBasicMaterial({ map: textSprite(c.name, '#fff', 'rgba(15,25,60,0.95)', 96, '#6cf'), side: THREE.DoubleSide }));
      b.position.set(p.x, p.y + 3.2, p.z); b.rotation.y = Math.atan2(p.rx, p.rz) + Math.PI / 2;
      // 進行方向から読めるように、少し手前を向ける
      b.rotation.y = Math.atan2(-p.tx, -p.tz);
      const po = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.5, 0.12), pole);
      po.position.set(p.x, p.y + 1.25, p.z);
      g.add(b, po);
    }
    // 距離板（1コーナー・第1/第2ヘアピン・最終コーナーの手前）
    const boards = C.signs.filter((c) => /1コーナー|ヘアピン|最終|シケイン|スプーン/.test(c.name));
    for (const c of boards) {
      for (const d of [150, 100, 50]) {
        const s = c.s - d - (c.name === '1コーナー' ? 0 : 25);
        const i = idxAt(s);
        const side = c.right ? -1 : 1;
        const lat = side * (C.hw[i] + Math.min(4, (side < 0 ? C.runL[i] : C.runR[i]) - 0.5));
        const p = pt(i, lat);
        const b = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.9), new THREE.MeshBasicMaterial({ map: textSprite(String(d), '#111', '#f2f2f2', 120, '#fff'), side: THREE.DoubleSide }));
        b.position.set(p.x, p.y + 1.0, p.z); b.rotation.y = Math.atan2(-p.tx, -p.tz);
        g.add(b);
      }
    }
    S.add(g);
  }

  // 隣接する別コース（オーバル・1000コース）とパドックの舗装（走行はできない背景）
  buildOtherCourses() {
    const S = this.scene;
    const m = new THREE.MeshLambertMaterial({ color: 0x3e4046 });
    const ell = (cx, cz, rx, rz, ir, rot, y) => {
      const shape = new THREE.Shape();
      shape.absellipse(0, 0, rx, rz, 0, Math.PI * 2, false, 0);
      const hole = new THREE.Path(); hole.absellipse(0, 0, rx - ir, rz - ir, 0, Math.PI * 2, true, 0); shape.holes.push(hole);
      const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape, 48), m);
      mesh.rotation.x = -Math.PI / 2; mesh.rotation.z = rot;
      mesh.position.set(cx, y, cz);
      S.add(mesh);
    };
    ell(118, -118, 96, 128, 20, 0.35, terrainAt(118, -118) + 0.08); // オーバル
    this.noTree.push({ x: 118, z: -118, r: 140 }, { x: 255, z: 75, r: 115 }, { x: -60, z: 40, r: 70 }, { x: -30, z: -60, r: 50 }, { x: 60, z: 120, r: 45 });
    ell(255, 75, 62, 95, 12, 0.2, terrainAt(255, 75) + 0.08); // 1000コース（簡略）
  }

  buildTrees() {
    const r = rng(8);
    const trunks = [], crowns = [];
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3();
    const T = C.terrain, tx0 = T.x0 + 10, tz0 = T.z0 + 10, tw = (T.nx - 3) * T.cell, td = (T.nz - 3) * T.cell;
    const maxN = C.id === 'tsukuba' ? 2600 : 5000;
    for (let it = 0; it < 30000 && crowns.length < maxN; it++) {
      const x = tx0 + r() * tw, z = tz0 + r() * td;
      const nq = this.ground.nearest(x, z, null);
      if (nq && nq.d < C.hw[nq.i] + Math.max(C.runL[nq.i], C.runR[nq.i]) + 14) continue;
      if (this.noTree.some((a) => Math.hypot(x - a.x, z - a.z) < a.r)) continue;
      // 南東の雑木林は密に、それ以外は疎ら
      if (C.id === 'tsukuba') { const forest = x > -20 && x < 260 && z > 170 && z < 320; if (!forest && r() < 0.8) continue; }
      else if (nq && nq.d < 60 && r() < 0.7) continue; // コースのすぐ近くは疎らに
      const y = terrainAt(x, z);
      const h = 8 + r() * 10;
      m4.compose(p.set(x, y + h * 0.25, z), q, sc.set(1, h * 0.5, 1)); trunks.push(m4.clone());
      m4.compose(p.set(x, y + h * 0.68, z), q, sc.set(3 + r() * 2, 3 + r() * 2.5, 3 + r() * 2)); crowns.push(m4.clone());
    }
    const inst = (geo, mat, list) => { const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length)); list.forEach((x, k) => m.setMatrixAt(k, x)); m.count = list.length; return m; };
    this.scene.add(
      inst(new THREE.CylinderGeometry(0.15, 0.25, 1, 5), new THREE.MeshLambertMaterial({ color: 0x2a2018 }), trunks),
      inst(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshLambertMaterial({ color: 0x3d5a2c, emissive: 0x0c1408, flatShading: true }), crowns),
    );
  }

  // 照明塔（灯具は発光、光源は数を絞る）
  buildLights() {
    const g = new THREE.Group();
    const poleM = new THREE.MeshLambertMaterial({ color: 0x777c84 });
    const headM = new THREE.MeshBasicMaterial({ color: 0xfff4d8 });
    let n = 0;
    for (let s = 40; s < L; s += 150) {
      const i = idxAt(s);
      const side = C.runL[i] > C.runR[i] ? -1 : 1;
      const lat = side * (C.hw[i] + (side < 0 ? C.runL[i] : C.runR[i]) + 4);
      const p = pt(i, lat);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 18, 6), poleM);
      pole.position.set(p.x, p.y + 9, p.z);
      const head = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.2, 0.4), headM);
      head.position.set(p.x, p.y + 18, p.z); head.rotation.y = Math.atan2(p.tx, p.tz);
      g.add(pole, head);
      if (n++ % 2 === 0) { const L0 = new THREE.PointLight(0xfff0d0, 260, 120, 1.6); L0.position.set(p.x - p.rx * side * 6, p.y + 17, p.z - p.rz * side * 6); g.add(L0); }
    }
    this.scene.add(g);
  }

  // 点 i（lat の位置）が、下を通る別の区間の上空にあるか（立体交差の橋の部分）
  overLower(i, lat = 0) {
    if (!C.crossings.length) return false;
    const p = pt(i, lat);
    for (const cr of C.crossings) {
      const lo = C.y[cr.i] < C.y[cr.j] ? cr.i : cr.j;
      if (C.y[i] < C.y[lo] + 3) continue;
      for (let k = -25; k <= 25; k++) {
        const j = W(lo + k);
        const d = Math.hypot(p.x - C.x[j], p.z - C.z[j]);
        if (d < C.hw[j] + Math.max(C.runL[j], C.runR[j]) + 3) return true;
      }
    }
    return false;
  }

  // 立体交差：上を通る区間の橋桁（下の道の上だけ）と橋脚
  buildOverpass() {
    if (!C.crossings.length) return;
    const S = this.scene;
    const mask = (i) => this.overLower(i, 0);
    const conc = new THREE.MeshLambertMaterial({ color: 0xa8aab0 });
    const run = (i, side) => C.hw[i] + (side < 0 ? C.runL[i] : C.runR[i]) + 0.6;
    S.add(band((i) => -run(i, -1), (i) => run(i, 1), -1.3, conc, { mask }));
    for (const side of [-1, 1]) S.add(wall((i) => side * run(i, side), 2.4, new THREE.MeshLambertMaterial({ color: 0xc4c6cc }), { mask, yBase: -1.3 }));
    // 看板（架空の広告）
    for (const cr of C.crossings) {
      const up = C.y[cr.i] > C.y[cr.j] ? cr.i : cr.j;
      // 橋の側面（下を通る区間から見える面）に、路面より下へ吊り下げる
      for (const sd of [-1, 1]) {
        const q = pt(up, sd * (C.hw[up] + (sd < 0 ? C.runL[up] : C.runR[up]) + 0.75));
        const ad = new THREE.Mesh(new THREE.PlaneGeometry(22, 1.4), new THREE.MeshBasicMaterial({ map: textSprite('RACING IBR', '#fff', 'rgba(20,20,120,0.95)', 96, '#8af'), side: THREE.DoubleSide }));
        ad.position.set(q.x, q.y - 2.1, q.z); ad.rotation.y = Math.atan2(-q.tz, q.tx);
        S.add(ad);
      }
    }
  }

  // 盛土の法面：路面（バリアの外）が地面より高い所はコンクリートの擁壁で地面まで
  buildEmbankment() {
    const g = new THREE.Group();
    const mat = new THREE.MeshLambertMaterial({ color: 0x5a5a52, side: THREE.DoubleSide });
    for (const side of [-1, 1]) {
      const pos = [], idx = [];
      let prev = -1;
      for (let k = 0; k <= N; k++) {
        const i = W(k);
        const lat = side * (C.hw[i] + (side < 0 ? C.runL[i] : C.runR[i]) + 1.4);
        const p = pt(i, lat);
        const gy = this.ground.groundY(p.x, p.z);
        if (p.y - gy < 0.6 || this.overLower(i, lat) || onOtherTrack(i, p.x, p.z, p.y)) { prev = -1; continue; }
        pos.push(p.x, p.y + 0.05, p.z, p.x, gy - 0.3, p.z);
        const v = pos.length / 3 - 2;
        if (prev >= 0) idx.push(prev, v, prev + 1, prev + 1, v, v + 1);
        prev = v;
      }
      if (!idx.length) continue;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setIndex(idx); geo.computeVertexNormals();
      g.add(new THREE.Mesh(geo, mat));
    }
    this.scene.add(g);
  }

  // 鈴鹿：遊園地の観覧車（コース北東の丘の上・名称なし）
  buildFerrisWheel() {
    const g = new THREE.Group();
    const x = 620, z = -560, y = terrainAt(x, z);
    g.position.set(x, y, z); g.rotation.y = 0.6;
    const R = 25;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.4, 6, 48), new THREE.MeshBasicMaterial({ color: 0xff9ad0 }));
    rim.position.y = R + 6; g.add(rim);
    const spokeM = new THREE.MeshLambertMaterial({ color: 0xdddddd });
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.2, R, 0.2), spokeM);
      sp.position.set(Math.cos(a) * R / 2, R + 6 + Math.sin(a) * R / 2, 0); sp.rotation.z = a - Math.PI / 2; g.add(sp);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2, 1.8), new THREE.MeshBasicMaterial({ color: [0xff5a5a, 0xffd25a, 0x5ad2ff, 0x9aff5a][k % 4] }));
      cab.position.set(Math.cos(a) * R, R + 6 + Math.sin(a) * R - 1.2, 0); g.add(cab);
    }
    for (const sd of [-1, 1]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.8, R + 8, 0.8), spokeM); leg.position.set(sd * 8, (R + 6) / 2, 0); leg.rotation.z = sd * 0.28; g.add(leg); }
    this.scene.add(g);
    this.noTree.push({ x, z, r: 40 });
  }

  // 富士：北西の富士山（遠景）
  buildMtFuji() {
    const g = new THREE.Group();
    const d = 2350, a = Math.atan2(-1, -0.9); // 北西
    const x = Math.cos(a) * d, z = Math.sin(a) * d, H = 760, R = 950, base = C.terrain.hmin - 40;
    const mtn = new THREE.Mesh(new THREE.ConeGeometry(R, H, 48, 1, true), new THREE.MeshBasicMaterial({ color: 0x2a2c48, fog: false }));
    mtn.position.set(x, base + H / 2, z); g.add(mtn);
    const capH = H * 0.3, capR = R * 0.3;
    const cap = new THREE.Mesh(new THREE.ConeGeometry(capR * 1.01, capH, 48, 1, true), new THREE.MeshBasicMaterial({ color: 0xe8e4f0, fog: false }));
    cap.position.set(x, base + H - capH / 2 + 0.5, z); g.add(cap);
    this.scene.add(g);
  }

  // スタートシグナル：n個点灯（0=消灯, -1=全消灯でGO）
  setSignal(n) {
    if (!this.signal) return;
    this.signal.forEach((m, k) => m.material.color.setHex(k < n ? 0xff2020 : 0x330000));
  }

  setCourse(path) { this.setSignal(0); }

  update() {}
}
