// 街の道路ディテール：車線区分線・中央分離帯・右折レーン矢印・横断歩道・停止線・信号機・首都高・歩道橋
import * as THREE from 'three';
import { NODES, ROADS, roadPolyline } from '../data/map.js';
import { townJunctions, townMedians, MEDIAN_TRIM } from '../physics/track.js';

// ---- 共通ヘルパ ----
function cumulate(P) {
  const s = [0];
  for (let i = 1; i < P.length; i++) s.push(s[i - 1] + Math.hypot(P[i].x - P[i - 1].x, P[i].z - P[i - 1].z));
  return s;
}

function sampleAt(P, S, d) {
  d = Math.max(0, Math.min(S[S.length - 1], d));
  let i = 0;
  while (i < S.length - 2 && S[i + 1] < d) i++;
  const a = P[i], b = P[i + 1];
  const l = S[i + 1] - S[i] || 1;
  const t = (d - S[i]) / l;
  const ux = (b.x - a.x) / l, uz = (b.z - a.z) / l;
  return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, ux, uz, rx: -uz, rz: ux };
}

// 平面の四角形を大量にまとめる
class QuadBatch {
  constructor() { this.pos = []; this.uv = []; this.idx = []; }
  // 中心(x,z)、長手方向(ux,uz)、長さL、幅W
  add(x, z, ux, uz, L, W, y = 0.04) {
    const rx = -uz, rz = ux;
    const hl = L / 2, hw = W / 2;
    const k = this.pos.length / 3;
    const pts = [[-hl, -hw, 0, 0], [hl, -hw, 1, 0], [-hl, hw, 0, 1], [hl, hw, 1, 1]];
    for (const [l, w, u, v] of pts) { this.pos.push(x + ux * l + rx * w, y, z + uz * l + rz * w); this.uv.push(u, v); }
    this.idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3);
  }
  mesh(mat) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx);
    g.computeVertexNormals();
    return new THREE.Mesh(g, mat);
  }
}

function arrowTexture(kind) {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.strokeStyle = '#fff';
  g.lineWidth = 12;
  if (kind === 'right') {
    // 進行方向＝上。右折矢印
    g.beginPath(); g.moveTo(26, 250); g.lineTo(26, 110); g.quadraticCurveTo(26, 70, 52, 62); g.stroke();
    g.beginPath(); g.moveTo(64, 62); g.lineTo(40, 40); g.lineTo(40, 84); g.closePath(); g.fill();
  } else {
    g.beginPath(); g.moveTo(40, 250); g.lineTo(40, 60); g.stroke();
    g.beginPath(); g.moveTo(40, 4); g.lineTo(18, 62); g.lineTo(62, 62); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(40, 150); g.quadraticCurveTo(14, 140, 12, 100); g.stroke();
    g.beginPath(); g.moveTo(12, 70); g.lineTo(0, 102); g.lineTo(24, 102); g.closePath(); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class TownDetail {
  constructor(scene) {
    this.scene = scene;
    this.paint = new THREE.Group(); // 路面表示＋分離帯＋信号（コース走行時は非表示）
    this.always = new THREE.Group(); // 首都高・歩道橋（常に表示）
    this.signals = [];
    scene.add(this.paint, this.always);
    this.junctions = townJunctions();
    this.jr = {};
    for (const id of this.junctions) {
      let r = 0;
      for (const rd of ROADS) if (rd.nodes.includes(id)) r = Math.max(r, rd.width / 2);
      this.jr[id] = r;
    }
    this.buildLines();
    this.buildMedians();
    this.buildApproaches();
    this.buildHighway();
    this.buildFootbridges();
  }

  nearJunction(x, z, extra = 0) {
    for (const id of this.junctions) {
      const n = NODES[id];
      if (Math.hypot(n.x - x, n.z - z) < this.jr[id] + extra) return id;
    }
    return null;
  }

  // ---- 車線区分線 ----
  buildLines() {
    const white = new QuadBatch(), yellow = new QuadBatch();
    const STEP = 1.0;
    for (const r of ROADS) {
      if (r.lanes === 0) continue;
      const P = roadPolyline(r);
      const S = cumulate(P);
      const L = S[S.length - 1];
      const edge = r.median / 2 + r.lanes * r.laneW;
      for (let d = 0; d < L; d += STEP) {
        const p = sampleAt(P, S, d + STEP / 2);
        if (this.nearJunction(p.x, p.z, 1.0)) continue; // 交差点内は描かない
        const inTurnZone = r.median > 0 && this.withinJ(p.x, p.z, MEDIAN_TRIM + 1);
        const put = (b, off, w = 0.15) => b.add(p.x + p.rx * off, p.z + p.rz * off, p.ux, p.uz, STEP + 0.02, w);
        // 外側線
        put(white, edge + 0.08); put(white, -edge - 0.08);
        // 中央
        if (r.median > 0) {
          if (inTurnZone) { put(yellow, 0.12); put(yellow, -0.12); }
        } else if (r.lanes >= 2) { put(yellow, 0.12); put(yellow, -0.12); }
        else if (d % 9 < 5) put(white, 0, 0.15);
        // 車線境界（破線。右折レーン区間は実線）
        for (let k = 1; k < r.lanes; k++) {
          const off = r.median / 2 + r.laneW * k;
          if (inTurnZone || d % 15 < 6) { put(white, off, 0.12); put(white, -off, 0.12); }
        }
      }
    }
    this.paint.add(white.mesh(new THREE.MeshBasicMaterial({ color: 0xdedcd2 })));
    this.paint.add(yellow.mesh(new THREE.MeshBasicMaterial({ color: 0xe8b72a })));
  }

  withinJ(x, z, R) {
    return this.junctions.some((id) => Math.hypot(NODES[id].x - x, NODES[id].z - z) < R);
  }

  // ---- 中央分離帯（縁石＋植え込み） ----
  buildMedians() {
    const meds = townMedians();
    const curbGeo = new THREE.BoxGeometry(1, 0.22, 1).translate(0, 0.11, 0);
    const hedgeGeo = new THREE.BoxGeometry(1, 0.6, 1).translate(0, 0.52, 0);
    const curb = new THREE.InstancedMesh(curbGeo, new THREE.MeshLambertMaterial({ color: 0xc9ccd2, emissive: 0x3a3a3a }), meds.length);
    const hedge = new THREE.InstancedMesh(hedgeGeo, new THREE.MeshLambertMaterial({ color: 0x2f6a35, emissive: 0x0c1a0c }), meds.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3();
    meds.forEach((s, i) => {
      const len = Math.hypot(s.bx - s.ax, s.bz - s.az);
      e.set(0, Math.atan2(s.bx - s.ax, s.bz - s.az), 0); q.setFromEuler(e);
      m.compose(p.set((s.ax + s.bx) / 2, 0, (s.az + s.bz) / 2), q, sc.set(s.hw * 2, 1, len + 0.05)); curb.setMatrixAt(i, m);
      m.compose(p, q, sc.set(s.hw * 2 - 0.5, 1, len)); hedge.setMatrixAt(i, m);
    });
    this.paint.add(curb, hedge);
    // 分離帯の端（ノーズ）に反射材
  }

  // ---- 交差点の流入部：横断歩道・停止線・矢印・信号 ----
  buildApproaches() {
    const zebra = new QuadBatch(), stop = new QuadBatch();
    const arrowR = new QuadBatch(), arrowS = new QuadBatch();
    const sigGroupMats = [0, 1].map(() => ({
      g: new THREE.MeshBasicMaterial({ color: 0x0c3a28 }), y: new THREE.MeshBasicMaterial({ color: 0x3a2a08 }), r: new THREE.MeshBasicMaterial({ color: 0x3a0a0a }),
    }));
    this.sigMats = sigGroupMats;
    const headGeo = new THREE.BoxGeometry(1.3, 0.42, 0.3);
    const lampGeo = new THREE.CircleGeometry(0.15, 14);
    const headMat = new THREE.MeshLambertMaterial({ color: 0x2b2e33 });
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x8a8f97 });
    for (const id of this.junctions) {
      const J = NODES[id];
      const jr = this.jr[id];
      const approaches = [];
      for (const r of ROADS) {
        const idx = r.nodes.indexOf(id);
        if (idx < 0) continue;
        const P = roadPolyline(r);
        // ノードに一番近い折れ点
        let pi = 0, bd = 1e9;
        P.forEach((p, i) => { const d = Math.hypot(p.x - J.x, p.z - J.z); if (d < bd) { bd = d; pi = i; } });
        for (const dir of [-1, 1]) {
          const j = pi + dir;
          if (j < 0 || j >= P.length) continue;
          // ノードから外向きに辿った折れ線
          const sub = [];
          for (let k = pi; k >= 0 && k < P.length; k += dir) sub.push(P[k]);
          if (sub.length < 2) continue;
          approaches.push({ r, sub, S: cumulate(sub) });
        }
      }
      const deg = approaches.length;
      const signal = deg >= 3 && approaches.some((a) => a.r.lanes > 0);
      const ref = approaches[0] ? sampleAt(approaches[0].sub, approaches[0].S, 4) : null;
      for (const a of approaches) {
        const r = a.r;
        if (r.lanes === 0 || deg < 2) continue;
        const total = a.S[a.S.length - 1];
        const dCW = jr + 2.0;
        if (total < dCW + 8) continue;
        const c = sampleAt(a.sub, a.S, dCW);
        const hw = r.width / 2;
        // 横断歩道（道路を横切る縞）
        for (let w = -hw + 0.6; w <= hw - 0.6; w += 0.9) zebra.add(c.x + c.rx * w, c.z + c.rz * w, c.ux, c.uz, 3.2, 0.45);
        // 停止線（交差点へ向かう車線＝外向きuの右側）
        const st = sampleAt(a.sub, a.S, dCW + 3.4);
        const inner = r.median / 2, outer = r.median / 2 + r.lanes * r.laneW;
        stop.add(st.x + st.rx * (inner + outer) / 2, st.z + st.rz * (inner + outer) / 2, st.rx, st.rz, outer - inner, 0.45);
        // 矢印（中央分離帯のある道路は右折レーン）
        for (const back of [9, 20]) {
          if (total < dCW + back + 6) continue;
          const ap = sampleAt(a.sub, a.S, dCW + back);
          for (let k = 0; k < r.lanes; k++) {
            const off = r.median / 2 + r.laneW * (k + 0.5);
            const isRight = r.median > 0 && k === 0;
            (isRight ? arrowR : arrowS).add(ap.x + ap.rx * off, ap.z + ap.rz * off, -ap.ux, -ap.uz, 5, 1.25, 0.045);
          }
        }
        // 信号機（交差点の向こう側、運転者の左手の歩道から道路上へアーム）
        if (signal) {
          const group = ref && Math.abs(c.ux * ref.ux + c.uz * ref.uz) > 0.7 ? 0 : 1;
          const mats = sigGroupMats[group];
          // 対向側（交差点をはさんだ反対）の位置：J - u*(jr+1)
          const fx = J.x - c.ux * (jr + 1.2), fz = J.z - c.uz * (jr + 1.2);
          const side = hw + 1.6;
          const px = fx + c.rx * side, pz = fz + c.rz * side;
          const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 6, 8).translate(0, 3, 0), poleMat);
          pole.position.set(px, 0, pz);
          const armLen = Math.min(side - 0.5, r.median / 2 + r.lanes * r.laneW * 0.6 + 1.2);
          const arm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, armLen), poleMat);
          const ang = Math.atan2(-c.rx, -c.rz);
          arm.position.set(px - c.rx * armLen / 2, 5.6, pz - c.rz * armLen / 2);
          arm.rotation.y = ang;
          const head = new THREE.Group();
          head.position.set(px - c.rx * (armLen - 0.4), 5.6, pz - c.rz * (armLen - 0.4));
          head.rotation.y = Math.atan2(c.ux, c.uz); // +u（接近してくる車）の方を向く
          head.add(new THREE.Mesh(headGeo, headMat));
          [['g', -0.42], ['y', 0], ['r', 0.42]].forEach(([k, x]) => {
            const l = new THREE.Mesh(lampGeo, mats[k]);
            l.position.set(x, 0, 0.16); // 日本の横型：運転者から見て左から青・黄・赤
            head.add(l);
          });
          this.paint.add(pole, arm, head);
        }
      }
    }
    this.paint.add(zebra.mesh(new THREE.MeshBasicMaterial({ color: 0xe6e4da })));
    this.paint.add(stop.mesh(new THREE.MeshBasicMaterial({ color: 0xe6e4da })));
    this.paint.add(arrowR.mesh(new THREE.MeshBasicMaterial({ map: arrowTexture('right'), transparent: true, depthWrite: false })));
    this.paint.add(arrowS.mesh(new THREE.MeshBasicMaterial({ map: arrowTexture('straight'), transparent: true, depthWrite: false })));
  }

  // ---- 首都高5号池袋線（川越街道の上空） ----
  buildHighway() {
    const r = ROADS.find((x) => x.highway);
    if (!r) return;
    let P = roadPolyline(r);
    const ext = (a, b, d) => { const l = Math.hypot(a.x - b.x, a.z - b.z); return { x: a.x + ((a.x - b.x) / l) * d, z: a.z + ((a.z - b.z) / l) * d }; };
    P = [ext(P[0], P[1], 320), ...P, ext(P[P.length - 1], P[P.length - 2], 320)];
    const S = cumulate(P);
    const L = S[S.length - 1];
    const Y = 10, HW = 7.6;
    // 細かく分割
    const pts = [];
    for (let d = 0; d <= L; d += 4) pts.push(sampleAt(P, S, d));
    const deck = new THREE.MeshLambertMaterial({ color: 0x6d727b, side: THREE.DoubleSide });
    const top = new THREE.MeshLambertMaterial({ color: 0x3b3e45 });
    const mk = (y, hw, mat) => {
      const pos = [], idx = [];
      pts.forEach((p, i) => {
        pos.push(p.x - p.rx * hw, y, p.z - p.rz * hw, p.x + p.rx * hw, y, p.z + p.rz * hw);
        if (i > 0) { const k = (i - 1) * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx); g.computeVertexNormals();
      return new THREE.Mesh(g, mat);
    };
    this.always.add(mk(Y, HW, top), mk(Y - 1.4, HW, deck));
    // 側壁
    for (const sg of [-1, 1]) {
      const pos = [], idx = [];
      pts.forEach((p, i) => {
        const x = p.x + p.rx * HW * sg, z = p.z + p.rz * HW * sg;
        pos.push(x, Y - 1.4, z, x, Y + 1.1, z);
        if (i > 0) { const k = (i - 1) * 2; idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx); g.computeVertexNormals();
      this.always.add(new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: 0x9aa0a8, emissive: 0x1c1c1c, side: THREE.DoubleSide })));
    }
    // 門型橋脚（柱は歩道側。熊野町・コーナー付近は避ける）
    const colGeo = new THREE.BoxGeometry(1.1, Y - 1.4, 1.1).translate(0, (Y - 1.4) / 2, 0);
    const pierMat = new THREE.MeshLambertMaterial({ color: 0x8b9098 });
    const avoid = ['KUMANO', 'AXIA', 'K3', 'K1'].map((id) => NODES[id]);
    for (let d = 16; d < L; d += 34) {
      const p = sampleAt(P, S, d);
      if (avoid.some((n) => Math.hypot(n.x - p.x, n.z - p.z) < 28)) continue;
      const span = r.width / 2 + 2.1;
      for (const sg of [-1, 1]) {
        const c = new THREE.Mesh(colGeo, pierMat);
        c.position.set(p.x + p.rx * span * sg, 0, p.z + p.rz * span * sg);
        this.always.add(c);
      }
      const beam = new THREE.Mesh(new THREE.BoxGeometry(span * 2 + 1.2, 1.2, 1.4), pierMat);
      beam.position.set(p.x, Y - 2.0, p.z);
      beam.rotation.y = Math.atan2(-p.rz, p.rx); // ローカルxを横断方向へ
      this.always.add(beam);
    }
    // 照明（ナトリウム灯）
    const lampGeo = new THREE.BoxGeometry(0.5, 0.2, 1.0);
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xffb455 });
    for (let d = 10; d < L; d += 30) {
      const p = sampleAt(P, S, d);
      for (const sg of [-1, 1]) {
        const l = new THREE.Mesh(lampGeo, lampMat);
        l.position.set(p.x + p.rx * (HW - 0.6) * sg, Y + 3.2, p.z + p.rz * (HW - 0.6) * sg);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 6).translate(0, 1.6, 0), new THREE.MeshLambertMaterial({ color: 0x777b83 }));
        pole.position.set(p.x + p.rx * (HW - 0.2) * sg, Y, p.z + p.rz * (HW - 0.2) * sg);
        this.always.add(l, pole);
      }
    }
  }

  // ---- 歩道橋 ----
  buildFootbridges() {
    const spots = [['山手通り', 'Y_RK', 'Y_KN', 0.5], ['劇場通り', 'G1', 'G2', 0.55], ['要町通り', 'Q4', 'Q3', 0.4]];
    const mat = new THREE.MeshLambertMaterial({ color: 0x5f8fb0, emissive: 0x0d1a24 });
    const rail = new THREE.MeshLambertMaterial({ color: 0xd8dde3, emissive: 0x222222 });
    for (const [name, a, b, t] of spots) {
      const r = ROADS.find((x) => x.name === name);
      const A = NODES[a], B = NODES[b];
      const len = Math.hypot(B.x - A.x, B.z - A.z);
      const ux = (B.x - A.x) / len, uz = (B.z - A.z) / len, rx = -uz, rz = ux;
      const cx = A.x + (B.x - A.x) * t, cz = A.z + (B.z - A.z) * t;
      const span = r.width + 6.4;
      const H = 5.3;
      const g = new THREE.Group();
      g.position.set(cx, 0, cz);
      g.rotation.y = Math.atan2(rx, rz); // ローカルzを道路の横断方向へ
      const deck = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.45, span), mat);
      deck.position.y = H; g.add(deck);
      for (const sx of [-1.05, 1.05]) {
        const rl = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.0, span), rail);
        rl.position.set(sx, H + 0.7, 0); g.add(rl);
      }
      // 階段（歩道上を道路と平行に降りる）
      for (const sz of [-1, 1]) {
        const stair = new THREE.Group();
        stair.position.set(0, 0, sz * (span / 2 - 1.1));
        const st = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.4, 1.8), mat);
        st.position.set(-4.5, H / 2, 0);
        st.rotation.z = Math.atan2(H, 9);
        stair.add(st);
        for (const px of [-0.3, -8.7]) {
          const post = new THREE.Mesh(new THREE.BoxGeometry(0.3, H, 0.3), mat);
          post.position.set(px, H / 2, 0);
          stair.add(post);
        }
        g.add(stair);
      }
      this.always.add(g);
    }
  }

  setCourseMode(on) { this.paint.visible = !on; }

  update(t) {
    // 信号サイクル（青10s・黄3s・全赤2s）×2方向
    const cyc = t % 30;
    const phase = (g) => {
      const c = (cyc + g * 15) % 30;
      return c < 10 ? 'g' : c < 13 ? 'y' : 'r';
    };
    const on = { g: 0x26ffb0, y: 0xffc21a, r: 0xff2a2a }, off = { g: 0x0c3a28, y: 0x3a2a08, r: 0x3a0a0a };
    this.sigMats.forEach((m, gi) => {
      const ph = phase(gi);
      for (const k of ['g', 'y', 'r']) m[k].color.setHex(ph === k ? on[k] : off[k]);
    });
  }
}
