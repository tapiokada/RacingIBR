// 夜の西池袋（ミニチュア）シーン構築
import * as THREE from 'three';
import { NODES, AREAS, geo, roadPolyline } from '../data/map.js';
import { TownDetail } from './townDetail.js';
import { WestExit } from './westExit.js';
import { EastSide, buildSunshineTower } from './eastSide.js';
import { townCorridor, boxClearOfCourse, courseClearance, townCornerPads } from '../physics/track.js';
import { buildEdges } from './edges.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

export function canvasTex(w, h, draw, repeat = true) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function asphaltTex() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#4a4d55'; g.fillRect(0, 0, w, h);
    const r = rng(7);
    for (let i = 0; i < 5000; i++) {
      const v = 50 + r() * 50;
      g.fillStyle = `rgba(${v},${v},${v + 6},${0.25 + r() * 0.4})`;
      g.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2);
    }
  });
}

// 帯状メッシュ（ポリライン沿い）
export function ribbon(points, halfW, y, mat, uvScale = 0.1) {
  const pos = [], uv = [], idx = [];
  let acc = 0;
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)];
    let tx = b.x - a.x, tz = b.z - a.z;
    const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
    const rx = -tz, rz = tx;
    const hw = typeof halfW === 'function' ? halfW(i) : halfW;
    if (i > 0) acc += Math.hypot(p.x - points[i - 1].x, p.z - points[i - 1].z);
    pos.push(p.x - rx * hw, y, p.z - rz * hw, p.x + rx * hw, y, p.z + rz * hw);
    uv.push(0, acc * uvScale, 1, acc * uvScale);
    if (i > 0) { const k = (i - 1) * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return new THREE.Mesh(g, mat);
}

// 縦の壁リボン（ガードレール）
export function wallRibbon(points, offsetFn, h, mat, closed = true) {
  const pos = [], uv = [], idx = [];
  const n = points.length;
  let acc = 0;
  const cnt = closed ? n + 1 : n;
  for (let k = 0; k < cnt; k++) {
    const i = k % n;
    const p = points[i];
    const a = points[(i - 1 + n) % n], b = points[(i + 1) % n];
    let tx = b.x - a.x, tz = b.z - a.z;
    const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
    const rx = -tz, rz = tx;
    const o = offsetFn(i);
    if (k > 0) { const q = points[(k - 1) % n]; acc += Math.hypot(p.x - q.x, p.z - q.z); }
    const x = p.x + rx * o, z = p.z + rz * o;
    pos.push(x, 0, z, x, h, z);
    uv.push(acc / 4, 0, acc / 4, 1);
    if (k > 0) { const j = (k - 1) * 2; idx.push(j, j + 2, j + 1, j + 1, j + 2, j + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return new THREE.Mesh(g, mat);
}

function buildingMaterial() {
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWp; varying vec3 vNw;')
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
        vec4 wpp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wpp = instanceMatrix * wpp;
        #endif
        wpp = modelMatrix * wpp;
        vWp = wpp.xyz;
        #ifdef USE_INSTANCING
          vNw = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
        #else
          vNw = normalize(mat3(modelMatrix) * objectNormal);
        #endif`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWp; varying vec3 vNw;
        float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        if (abs(vNw.y) < 0.5) {
          float u = abs(vNw.x) > 0.5 ? vWp.z : vWp.x;
          vec2 cell = vec2(floor(u / 2.6), floor((vWp.y - 1.0) / 3.2));
          vec2 f = vec2(fract(u / 2.6), fract((vWp.y - 1.0) / 3.2));
          float win = step(0.18, f.x) * step(f.x, 0.82) * step(0.25, f.y) * step(f.y, 0.78);
          float rnd = h21(cell + floor(vWp.xz * 0.013) * 17.0);
          float lit = step(0.58, rnd) * step(1.2, vWp.y);
          vec3 wc = mix(vec3(1.0, 0.78, 0.45), vec3(0.65, 0.85, 1.0), step(0.8, h21(cell.yx + 3.1)));
          totalEmissiveRadiance += win * lit * wc * (0.55 + 0.45 * h21(cell * 1.7));
          diffuseColor.rgb *= mix(1.0, 0.35, win);
        }
        if (vNw.y > 0.5) { diffuseColor.rgb *= 0.55; }`);
  };
  return mat;
}

export function textSprite(text, color = '#fff', bg = 'rgba(0,0,0,0)', size = 64, glow = '#0ff') {
  const t = canvasTex(1024, 160, (g, w, h) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.font = `bold ${size}px "Hiragino Sans","Noto Sans JP",sans-serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = glow; g.shadowBlur = 24;
    g.fillStyle = color; g.fillText(text, w / 2, h / 2);
  }, false);
  return t;
}

export class World {
  constructor(renderer, area = 'west') {
    this.area = area;
    this.areaDef = AREAS[area];
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070a14);
    this.scene.fog = new THREE.Fog(0x0b1020, 80, 820);
    const pm = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.35;
    this.corridor = townCorridor(area);
    this.renderer = renderer;
    this.courseGroup = null;
    this.build();
  }

  build() {
    const S = this.scene;
    S.add(new THREE.HemisphereLight(0x8aa0d8, 0x2a2a34, 1.45));
    const moon = new THREE.DirectionalLight(0x9fb4ff, 0.5);
    moon.position.set(-200, 300, -100);
    S.add(moon);

    // 地面
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), new THREE.MeshLambertMaterial({ color: 0x101115 }));
    ground.rotation.x = -Math.PI / 2;
    S.add(ground);

    const asphalt = asphaltTex();
    const roadMat = new THREE.MeshLambertMaterial({ map: asphalt, color: 0xb0b4c0 });
    const walkMat = new THREE.MeshLambertMaterial({ color: 0x24262c });
    for (const r of this.areaDef.roads) {
      const pts = roadPolyline(r);
      S.add(ribbon(pts, r.width / 2 + 3.2, 0.01, walkMat));
      S.add(ribbon(pts, r.width / 2, 0.02, roadMat, 0.08));
      // 折れ点・交差点の円盤（継ぎ目を埋める）
      pts.forEach((p, i) => {
        const isNode = r.nodes.some((id) => NODES[id].x === p.x && NODES[id].z === p.z) || i === 0 || i === pts.length - 1;
        if (!isNode && r.smooth) return;
        const disc = new THREE.Mesh(new THREE.CircleGeometry(r.width / 2, 24), roadMat);
        disc.rotation.x = -Math.PI / 2; disc.position.set(p.x, 0.021, p.z);
        S.add(disc);
        const wd = new THREE.Mesh(new THREE.CircleGeometry(r.width / 2 + 3.2, 24), walkMat);
        wd.rotation.x = -Math.PI / 2; wd.position.set(p.x, 0.011, p.z);
        S.add(wd);
      });
    }
    // 隅切り（狭い道の鋭い角を丸く広げた部分）
    for (const p of townCornerPads(this.area)) {
      const disc = new THREE.Mesh(new THREE.CircleGeometry(p.r, 28), roadMat);
      disc.rotation.x = -Math.PI / 2; disc.position.set(p.x, 0.0205, p.z);
      const wd = new THREE.Mesh(new THREE.CircleGeometry(p.r + 3.2, 28), walkMat);
      wd.rotation.x = -Math.PI / 2; wd.position.set(p.x, 0.0105, p.z);
      S.add(disc, wd);
    }
    // 車線・分離帯・横断歩道・信号・首都高・歩道橋
    this.detail = new TownDetail(S, this.area);
    // 駅前のランドマーク（西口／東口・サンシャイン）
    this.westExit = this.area === 'west' ? new WestExit(S) : new EastSide(S);

    // 歩道の段差・ガードレール・植え込み（当たり判定の境界に配置）
    this.townEdges = buildEdges(this.corridor);
    S.add(this.townEdges);
    this.buildBuildings();
    this.buildStreetLights();
    this.buildPOIs();
    this.buildGates();
    this.buildLandmarks();
    this.buildStars();
  }

  buildBuildings() {
    const r = rng(42);
    let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
    for (const r of this.areaDef.roads) for (const id of r.nodes) { const n = NODES[id]; minX = Math.min(minX, n.x); maxX = Math.max(maxX, n.x); minZ = Math.min(minZ, n.z); maxZ = Math.max(maxZ, n.z); }
    const M = 220;
    const items = [];
    const station = this.area === 'west' ? geo(35.7295, 139.7109) : geo(35.7295, 139.7141);
    for (let x = minX - M; x < maxX + M; x += 15) {
      for (let z = minZ - M; z < maxZ + M; z += 15) {
        const px = x + (r() - 0.5) * 5, pz = z + (r() - 0.5) * 5;
        const q = this.corridor.query(px, pz);
        const d = q.far ? 40 : q.d;
        if (d < 6.5) continue;
        if (this.westExit.excludes(px, pz, 6)) continue;
        if (this.areaDef.pois.some((poi) => { const pp = this.poiPos(poi); return Math.hypot(pp.x - px, pp.z - pz) < 34; })) continue;
        const s = Math.min(8, d - 3.2);
        const w = s * (1.2 + r() * 0.8), dd = s * (1.2 + r() * 0.8);
        const nearSt = Math.max(0, 1 - Math.hypot(px - (station.x + 120), pz - station.z) / 500);
        const hgt = 6 + r() * 18 + (r() < 0.12 ? 25 : 0) + nearSt * (10 + r() * 25);
        const rot = (r() - 0.5) * 0.2;
        if (!boxClearOfCourse(px, pz, w, dd, rot, 3.0, this.area)) continue; // レースコースに被らない
        items.push({ px, pz, w, d: dd, h: hgt, rot });
      }
    }
    const geoB = new THREE.BoxGeometry(1, 1, 1);
    geoB.translate(0, 0.5, 0);
    const mesh = new THREE.InstancedMesh(geoB, buildingMaterial(), items.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    const col = new THREE.Color();
    items.forEach((it, i) => {
      e.set(0, it.rot, 0); q.setFromEuler(e);
      m.compose(p.set(it.px, 0, it.pz), q, sc.set(it.w, it.h, it.d));
      mesh.setMatrixAt(i, m);
      const v = 0.18 + r() * 0.22;
      col.setRGB(v * (0.9 + r() * 0.2), v, v * (1 + r() * 0.25));
      mesh.setColorAt(i, col);
    });
    this.scene.add(mesh);
    // ネオン看板（ランダム）
    const neonCols = [0xff2a6d, 0x05d9e8, 0xf9c80e, 0x7b2ff7, 0x01ff89];
    const neonGeo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < 90; i++) {
      const it = items[Math.floor(r() * items.length)];
      if (it.h < 10) continue;
      const mat = new THREE.MeshBasicMaterial({ color: neonCols[Math.floor(r() * neonCols.length)], side: THREE.DoubleSide, fog: true });
      const sign = new THREE.Mesh(neonGeo, mat);
      const vertical = r() < 0.5;
      sign.scale.set(vertical ? 1.2 : 4 + r() * 3, vertical ? 5 + r() * 4 : 1.2, 1);
      const face = Math.floor(r() * 4);
      const ang = it.rot + (face * Math.PI) / 2;
      const off = (face % 2 === 0 ? it.d : it.w) / 2 + 0.15;
      sign.position.set(it.px + Math.sin(ang) * off, 4 + r() * Math.min(10, it.h - 6), it.pz + Math.cos(ang) * off);
      sign.rotation.y = ang;
      this.scene.add(sign);
    }
  }

  buildStreetLights() {
    const poles = [], pools = [];
    for (const r of this.areaDef.roads) {
      if (r.alley) continue;
      const P = roadPolyline(r);
      let side = 1, acc = 10;
      for (let i = 0; i < P.length - 1; i++) {
        const a = P[i], b = P[i + 1];
        const len = Math.hypot(b.x - a.x, b.z - a.z);
        const tx = (b.x - a.x) / len, tz = (b.z - a.z) / len;
        const rx = -tz, rz = tx;
        for (let s = acc; s < len; s += 26) {
          acc = s + 26 - len;
          const o = (r.width / 2 + 2.4) * side;
          const x = a.x + tx * s + rx * o, z = a.z + tz * s + rz * o;
          if (courseClearance(x, z, this.area) < 1.2) continue;
          poles.push({ x, z, side, rx, rz });
          pools.push({ x: x - rx * side * 4.2, z: z - rz * side * 4.2 });
          side = -side;
        }
        if (acc >= len) acc -= len;
      }
    }
    const poleGeo = new THREE.CylinderGeometry(0.08, 0.1, 7, 6);
    poleGeo.translate(0, 3.5, 0);
    const poleMesh = new THREE.InstancedMesh(poleGeo, new THREE.MeshLambertMaterial({ color: 0x555b66 }), poles.length);
    const lampGeo = new THREE.BoxGeometry(0.5, 0.15, 0.9);
    const lampMesh = new THREE.InstancedMesh(lampGeo, new THREE.MeshBasicMaterial({ color: 0xffe2b0 }), poles.length);
    const m = new THREE.Matrix4();
    poles.forEach((p, i) => {
      m.makeTranslation(p.x, 0, p.z); poleMesh.setMatrixAt(i, m);
      m.makeTranslation(p.x - p.rx * p.side * 0.9, 7, p.z - p.rz * p.side * 0.9); lampMesh.setMatrixAt(i, m);
    });
    this.scene.add(poleMesh, lampMesh);
    // 光だまり
    const poolTex = canvasTex(128, 128, (g, w, h) => {
      const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      gr.addColorStop(0, 'rgba(255,220,160,0.55)'); gr.addColorStop(0.5, 'rgba(255,200,140,0.18)'); gr.addColorStop(1, 'rgba(255,200,140,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    }, false);
    const poolMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(14, 14).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: true }), pools.length);
    pools.forEach((p, i) => { m.makeTranslation(p.x, 0.05, p.z); poolMesh.setMatrixAt(i, m); });
    this.scene.add(poolMesh);
  }

  poiPos(poi) {
    const n = NODES[poi.node];
    return { x: n.x + poi.offset[0], z: n.z + poi.offset[1] };
  }

  buildPOIs() {
    this.poiMarkers = [];
    for (const poi of this.areaDef.pois) {
      const p = this.poiPos(poi);
      const g = new THREE.Group();
      g.position.set(p.x, 0, p.z);
      // 引き込み道路の奥向きにローカル+xを合わせる
      const F = NODES[poi.from], T = NODES[poi.node];
      g.rotation.y = Math.atan2(-(T.z - F.z), T.x - F.x);
      const label = new THREE.Group(); // 看板は回転させない
      label.rotation.y = -g.rotation.y;
      g.add(label);
      const col = poi.type === 'shop' ? 0xff3b6b : 0x2ee6a8;
      const ring = new THREE.Mesh(new THREE.RingGeometry(5, 6, 40), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85, side: THREE.DoubleSide }));
      ring.rotation.x = -Math.PI / 2; ring.position.y = 0.06;
      label.add(ring);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 5.5, 30, 24, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false }));
      beam.position.y = 15;
      g.add(beam);
      // 看板
      const tex = textSprite(poi.short, '#ffffff', 'rgba(10,10,20,0.85)', 92, poi.type === 'shop' ? '#ff3b6b' : '#2ee6a8');
      const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false }));
      sign.scale.set(16, 2.5, 1); sign.position.y = 11;
      label.add(sign);
      if (poi.type === 'gs') {
        const canopy = new THREE.Mesh(new THREE.BoxGeometry(16, 0.8, 12), new THREE.MeshLambertMaterial({ color: 0xdddddd, emissive: 0x335544 }));
        canopy.position.set(13, 6, 0); g.add(canopy);
        for (const [dx, dz] of [[7, -5], [7, 5], [19, -5], [19, 5]]) {
          const pole = new THREE.Mesh(new THREE.BoxGeometry(0.5, 6, 0.5), new THREE.MeshLambertMaterial({ color: 0x999999 }));
          pole.position.set(dx, 3, dz); g.add(pole);
        }
        const under = new THREE.Mesh(new THREE.PlaneGeometry(16, 12), new THREE.MeshBasicMaterial({ color: 0xfff6dd, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
        under.rotation.x = -Math.PI / 2; under.position.set(13, 0.04, 0); g.add(under);
        const shopBox = new THREE.Mesh(new THREE.BoxGeometry(10, 5, 9), new THREE.MeshLambertMaterial({ color: 0xe8e8e8, emissive: 0x333333 }));
        shopBox.position.set(26, 2.5, 0); g.add(shopBox);
      } else {
        const bld = new THREE.Mesh(new THREE.BoxGeometry(22, 14, 18), new THREE.MeshLambertMaterial({ color: 0x2a2030, emissive: 0x220818 }));
        bld.position.set(17, 7, 0); g.add(bld);
        const band = new THREE.Mesh(new THREE.BoxGeometry(22.2, 1.6, 18.2), new THREE.MeshBasicMaterial({ color: 0xff3b6b }));
        band.position.set(17, 12, 0); g.add(band);
      }
      this.scene.add(g);
      this.poiMarkers.push({ poi, group: g, ring, x: p.x, z: p.z });
    }
  }

  // エリア出口の門型看板
  buildGates() {
    this.gateMarkers = [];
    for (const gt of this.areaDef.gates) {
      const A = NODES[gt.from], B = NODES[gt.node];
      const len = Math.hypot(B.x - A.x, B.z - A.z);
      const ux = (B.x - A.x) / len, uz = (B.z - A.z) / len;
      const road = this.areaDef.roads.find((r) => r.nodes.includes(gt.node));
      const hw = road.width / 2;
      const g = new THREE.Group();
      g.position.set(A.x + ux * len * 0.55, 0, A.z + uz * len * 0.55);
      g.rotation.y = Math.atan2(ux, uz); // ローカル+zを出口方向へ
      const mat = new THREE.MeshLambertMaterial({ color: 0x2b5c3a, emissive: 0x0d2414 });
      for (const sx of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7, 0.5), mat);
        post.position.set(sx * (hw + 1.2), 3.5, 0); g.add(post);
      }
      const board = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2 + 2, 2.2), new THREE.MeshBasicMaterial({ map: textSprite(`${gt.label}  →`, '#ffffff', '#1f6b3a', 86, '#a6ffbf'), side: THREE.DoubleSide }));
      board.position.set(0, 6.4, 0); board.rotation.y = Math.PI; g.add(board);
      // 出口の光の帯
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2, 3), new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      glow.position.set(0, 1.5, len * 0.4);
      g.add(glow);
      this.scene.add(g);
      this.gateMarkers.push({ gate: gt, x: B.x, z: B.z, group: g });
    }
  }

  buildLandmarks() {
    // 西池袋からは東に見えるサンライズ60（東池袋エリアでは EastSide が本体を作る）
    if (this.area === 'west') {
      const g = buildSunshineTower();
      this.scene.add(g);
      this.blinkers = g.userData.blinkers;
    } else {
      this.blinkers = this.westExit.blinkers;
    }
  }

  buildStars() {
    const r = rng(9);
    const pos = [];
    for (let i = 0; i < 600; i++) {
      const th = r() * Math.PI * 2, ph = r() * 0.45 + 0.1;
      const R = 1500;
      pos.push(Math.cos(th) * Math.cos(ph) * R, Math.sin(ph) * R, Math.sin(th) * Math.cos(ph) * R);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    this.stars = new THREE.Points(g, new THREE.PointsMaterial({ color: 0x8899bb, size: 2, sizeAttenuation: false, fog: false }));
    this.scene.add(this.stars);
  }

  // コース装飾（ガードレール・スタートライン）
  setCourse(path) {
    if (this.courseGroup) { this.scene.remove(this.courseGroup); this.courseGroup = null; }
    this.townEdges.visible = !path;
    for (const gm of this.gateMarkers || []) gm.group.visible = !path;
    this.detail.setCourseMode(!!path);
    if (!path) return;
    const g = new THREE.Group();
    const pts = [];
    for (let i = 0; i < path.n; i++) pts.push({ x: path.x[i], z: path.z[i] });
    const roadTex = asphaltTex();
    const surf = ribbon([...pts, pts[0]], (i) => path.hw[i % path.n] + 0.2, 0.028, new THREE.MeshLambertMaterial({ map: roadTex, color: 0xb6b9c4 }), 0.08);
    g.add(surf);
    // 縁石（低い段差）＋ガードレール：衝突境界に沿って配置。コーナー付近は紅白
    let hint = -1;
    g.add(buildEdges(path.corridor, {
      course: true,
      isCorner: (x, z) => { const pr = path.project(x, z, hint); hint = pr.i; return path.extra[pr.i] > 0.5; },
    }));
    // スタートライン
    const st = path.posAt(0, 0);
    const chk = canvasTex(128, 32, (c, w, h) => {
      for (let x = 0; x < 16; x++) for (let y = 0; y < 4; y++) { c.fillStyle = (x + y) % 2 ? '#111' : '#eee'; c.fillRect(x * 8, y * 8, 8, 8); }
    }, false);
    const lg = new THREE.Group(); lg.position.set(st.x, 0, st.z); lg.rotation.y = st.h;
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(path.hw[0] * 2, 1.6), new THREE.MeshBasicMaterial({ map: chk }));
    plane.rotation.x = -Math.PI / 2; plane.position.y = 0.05; lg.add(plane);
    const gantryMat = new THREE.MeshLambertMaterial({ color: 0x333842, emissive: 0x111111 });
    for (const sx of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7, 0.5), gantryMat);
      post.position.set(sx * (path.hw[0] + 0.8), 3.5, 0); lg.add(post);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(path.hw[0] * 2 + 2, 1.4, 0.4), gantryMat);
    beam.position.set(0, 7, 0); lg.add(beam);
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(path.hw[0] * 2, 1.2), new THREE.MeshBasicMaterial({ map: textSprite('START / FINISH', '#fff', '#101420', 80, '#ff2a6d'), side: THREE.DoubleSide }));
    banner.position.set(0, 7, -0.25); banner.rotation.y = Math.PI; lg.add(banner);
    g.add(lg);
    this.courseGroup = g;
    this.scene.add(g);
  }

  update(t) {
    this.detail.update(t);
    this.westExit.update(t);
    if (this.blinkers) for (const b of this.blinkers) b.visible = Math.sin(t * 3) > 0;
    if (this.poiMarkers) for (const m of this.poiMarkers) m.ring.material.opacity = 0.6 + 0.3 * Math.sin(t * 4);
  }
}
