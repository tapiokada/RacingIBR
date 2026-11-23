// 東池袋のランドマーク（池袋駅東口・サンシャイン60通り・サンライズシティ）
// 施設名・店名はすべて架空。形・配置・色は実在の街並み（東口の駅ビルと大型ビジョン、
// ネオンの続くサンシャイン60通り、高層タワーのあるサンシャインシティ）を参考にしている。
import * as THREE from 'three';
import { NODES, LANDMARKS, EAST_ROADS, geo, MAP_SCALE, roadPolyline } from '../data/map.js';
import { boxClearOfCourse, courseClearance, townCorridor } from '../physics/track.js';
import { rect, tex, signTex, plane } from './westExit.js';

const S = MAP_SCALE;

function inPoly(poly, x, z) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a.z > z) !== (b.z > z) && x < ((b.x - a.x) * (z - a.z)) / (b.z - a.z) + a.x) inside = !inside;
  }
  return inside;
}

function facadeTex(base, band, lit = 0.55, vertical = false) {
  return tex(256, 512, (g, W, H) => {
    g.fillStyle = base; g.fillRect(0, 0, W, H);
    if (vertical) {
      for (let x = 4; x < W; x += 16) {
        g.fillStyle = band; g.fillRect(x, 0, 6, H);
        for (let y = 4; y < H; y += 14) if (Math.random() < lit) { g.fillStyle = 'rgba(255,228,170,0.9)'; g.fillRect(x, y, 6, 8); }
      }
    } else {
      for (let y = 20; y < H; y += 34) {
        g.fillStyle = band; g.fillRect(0, y, W, 14);
        for (let x = 4; x < W; x += 18) if (Math.random() < lit) { g.fillStyle = 'rgba(255,230,180,0.95)'; g.fillRect(x, y + 2, 12, 10); }
      }
    }
  }, true);
}

// サンライズ60（サンシャイン60風の架空タワー）。西池袋エリアでは遠景として使う
export function buildSunshineTower() {
  const g = new THREE.Group();
  const c = geo(35.72955, 139.71935);
  const W = 70 * S, D = 40 * S, H = 240 * S;
  const t = facadeTex('#565c66', '#262a31', 0.45, true);
  t.repeat.set(1.2, 2.5);
  const mat = new THREE.MeshLambertMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.22 });
  const tower = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), mat);
  tower.position.set(c.x, H / 2, c.z);
  g.add(tower);
  const crown = new THREE.Mesh(new THREE.BoxGeometry(W * 0.92, 4, D * 0.9), new THREE.MeshLambertMaterial({ color: 0x2c3038, emissive: 0x111111 }));
  crown.position.set(c.x, H + 2, c.z);
  g.add(crown);
  const red = new THREE.MeshBasicMaterial({ color: 0xff2020 });
  const blinkers = [];
  for (const [dx, dz] of [[-W / 2 + 2, -D / 2 + 2], [W / 2 - 2, -D / 2 + 2], [-W / 2 + 2, D / 2 - 2], [W / 2 - 2, D / 2 - 2]]) {
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 6), red);
    l.position.set(c.x + dx, H + 4.6, c.z + dz);
    g.add(l);
    blinkers.push(l);
  }
  // 屋上のロゴ（架空名）
  const sign = plane(30, 4, signTex('SUNRISE 60', { bg: '#101418', fg: '#ffffff', glow: '#7ad0ff' }), { double: true });
  sign.position.set(c.x, H - 6, c.z + D / 2 + 0.3);
  g.add(sign);
  const sign2 = sign.clone(); sign2.position.set(c.x, H - 6, c.z - D / 2 - 0.3); g.add(sign2);
  g.userData.blinkers = blinkers;
  return g;
}

export class EastSide {
  constructor(scene) {
    this.g = new THREE.Group();
    scene.add(this.g);
    this.corridor = townCorridor('east');
    this.exclude = [rect(LANDMARKS.eplaza)];
    this.buildEastExit();
    this.buildScreens();
    this.buildSunshineCity();
    this.buildS60Street();
    this.buildGreenTrees();
    this.buildStation();
  }

  excludes(x, z, pad = 3) {
    return this.exclude.some((r) => (r.poly ? inPoly(r.poly, x, z) : x > r.x0 - pad && x < r.x1 + pad && z > r.z0 - pad && z < r.z1 + pad));
  }

  // 道路にもコースにも被らない箱か
  boxOk(cx, cz, w, d, rot = 0, margin = 2.5) {
    const c = Math.cos(rot), s = Math.sin(rot);
    for (let i = 0; i <= 4; i++) for (let j = 0; j <= 4; j++) {
      const lx = (i / 4 - 0.5) * w, lz = (j / 4 - 0.5) * d;
      const x = cx + lx * c + lz * s, z = cz - lx * s + lz * c;
      const q = this.corridor.query(x, z);
      if (!q.far && q.d < margin + 1.5) return false;
    }
    return boxClearOfCourse(cx, cz, w, d, rot, margin, 'east');
  }

  addBox(cx, cz, w, d, h, mat, rot = 0) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(cx, h / 2, cz);
    m.rotation.y = rot;
    this.g.add(m);
    return m;
  }

  // ---- 池袋駅東口：西部デパート・パルクス・駅前広場 ----
  buildEastExit() {
    const Rs = rect(LANDMARKS.seibu), Rp = rect(LANDMARKS.parco);
    this.exclude.push(Rs, Rp);
    // 西部デパート（線路沿いの長い駅ビル。茶系の外壁）
    const ft = facadeTex('#7a6450', '#3a2f28', 0.5);
    ft.repeat.set(Rs.d / 25, 1);
    const Hs = 48 * S;
    const seibu = this.addBox(Rs.cx, Rs.cz, Rs.w, Rs.d, Hs, new THREE.MeshLambertMaterial({ map: ft, emissive: 0xffffff, emissiveMap: ft, emissiveIntensity: 0.2 }));
    void seibu;
    const vs = plane(3.4, 20, signTex('西部デパート', { bg: '#0c1a3a', vertical: true, glow: '#8fb8ff' }));
    vs.position.set(Rs.x1 + 0.3, Hs * 0.55, Rs.cz - Rs.d * 0.2); vs.rotation.y = Math.PI / 2;
    this.g.add(vs);
    const top = plane(24, 5, signTex('西部デパート', { bg: '#0c1a3a', glow: '#8fb8ff' }));
    top.position.set(Rs.x1 + 0.3, Hs - 3.5, Rs.cz + Rs.d * 0.18); top.rotation.y = Math.PI / 2;
    this.g.add(top);
    // 東口の出入口
    const ent = new THREE.Mesh(new THREE.PlaneGeometry(16, 3.2), new THREE.MeshBasicMaterial({ color: 0xfff2d6 }));
    ent.position.set(Rs.x1 + 0.05, 2, Rs.z0 + Rs.d * 0.82); ent.rotation.y = Math.PI / 2;
    this.g.add(ent);
    const es = plane(11, 1.8, signTex('池袋駅  東口  East Exit', { bg: '#20242c', fg: '#ffe680' }));
    es.position.set(Rs.x1 + 0.1, 4.6, Rs.z0 + Rs.d * 0.82); es.rotation.y = Math.PI / 2;
    this.g.add(es);
    // パルクス（白い外壁とカラフルな縦看板）
    const pt = facadeTex('#d9d9d6', '#5a5d63', 0.6);
    pt.repeat.set(Rp.d / 20, 1);
    const Hp = 38 * S;
    this.addBox(Rp.cx, Rp.cz, Rp.w, Rp.d, Hp, new THREE.MeshLambertMaterial({ map: pt, emissive: 0xffffff, emissiveMap: pt, emissiveIntensity: 0.18 }));
    const pv = plane(3, 14, signTex('PALCS', { bg: '#e6007e', vertical: true, glow: '#ffd1ea' }));
    pv.position.set(Rp.x1 + 0.3, Hp * 0.6, Rp.cz); pv.rotation.y = Math.PI / 2;
    this.g.add(pv);
    // 駅前広場の舗装
    const R = rect(LANDMARKS.eplaza);
    const pav = tex(64, 64, (g, W, H) => { g.fillStyle = '#5b5e66'; g.fillRect(0, 0, W, H); g.fillStyle = '#666a73'; for (let y = 0; y < H; y += 8) for (let x = (y / 8) % 2 ? 0 : 8; x < W; x += 16) g.fillRect(x, y, 15, 7); }, true);
    pav.repeat.set(R.w / 4, R.d / 4);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(R.w, R.d), new THREE.MeshLambertMaterial({ map: pav }));
    m.rotation.x = -Math.PI / 2; m.position.set(R.cx, 0.006, R.cz);
    this.g.add(m);
  }

  // ---- 明治通りの向かい：家電量販店と大型ビジョン ----
  buildScreens() {
    this.screens = [];
    const shops = [
      { lat: 35.73085, lon: 139.71335, w: 26, d: 22, h: 30, name: 'ビックリカメラ', col: '#d4001a' },
      { lat: 35.72925, lon: 139.71330, w: 24, d: 20, h: 26, name: 'ヤマモト電機', col: '#e8380d' },
      { lat: 35.73205, lon: 139.71330, w: 22, d: 20, h: 24, name: 'カラオケ BIG SONG', col: '#7b2ff7' },
    ];
    for (const sh of shops) {
      const c = geo(sh.lat, sh.lon);
      if (!this.boxOk(c.x, c.z, sh.w, sh.d, 0, 1.0)) continue;
      this.exclude.push({ x0: c.x - sh.w / 2, x1: c.x + sh.w / 2, z0: c.z - sh.d / 2, z1: c.z + sh.d / 2 });
      const ft = facadeTex('#3b3f47', '#20232a', 0.5);
      ft.repeat.set(2, 1);
      this.addBox(c.x, c.z, sh.w, sh.d, sh.h, new THREE.MeshLambertMaterial({ map: ft, emissive: 0xffffff, emissiveMap: ft, emissiveIntensity: 0.2 }));
      // 西面（明治通り側）に大型ビジョンと看板
      const scr = document.createElement('canvas');
      scr.width = 256; scr.height = 160;
      const tx = new THREE.CanvasTexture(scr);
      tx.colorSpace = THREE.SRGBColorSpace;
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(sh.d * 0.8, sh.h * 0.32), new THREE.MeshBasicMaterial({ map: tx }));
      screen.position.set(c.x - sh.w / 2 - 0.2, sh.h * 0.62, c.z);
      screen.rotation.y = -Math.PI / 2;
      this.g.add(screen);
      this.screens.push({ canvas: scr, tex: tx, seed: Math.random() * 10 });
      const sg = plane(sh.d * 0.9, 2.6, signTex(sh.name, { bg: sh.col, glow: '#fff' }));
      sg.position.set(c.x - sh.w / 2 - 0.25, sh.h - 2, c.z); sg.rotation.y = -Math.PI / 2;
      this.g.add(sg);
    }
  }

  // ---- サンライズシティ（サンシャインシティ風）：外周道路の内側に配置 ----
  buildSunshineCity() {
    const loop = ['GB1', 'SC_O', 'SC_P', 'SC_A', 'SC_B', 'SC_C', 'SC_W', 'SC_D', 'SC_E', 'SC_F', 'SC_G', 'SC_H', 'SC_I', 'EG_E', 'SC_K', 'SC_L', 'SC_M', 'J5'].map((id) => NODES[id]);
    this.exclude.push({ poly: loop });
    const tower = buildSunshineTower();
    this.g.add(tower);
    this.blinkers = tower.userData.blinkers;
    // 外周の南西辺に沿った向き
    const A = NODES.SC_A, B = NODES.SC_B;
    const rot = Math.atan2(-(B.z - A.z), B.x - A.x); // ローカルxを南西辺に平行に
    let cx = 0, cz = 0;
    for (const p of loop) { cx += p.x; cz += p.z; }
    cx /= loop.length; cz /= loop.length;
    // 低層の商業棟（アルパ風）：収まる最大サイズ
    const pod = facadeTex('#8c8f96', '#3a3d44', 0.7);
    for (let k = 1; k >= 0.3; k -= 0.05) {
      const w = 150 * k, d = 75 * k;
      if (!this.boxOk(cx, cz, w, d, rot, 2)) continue;
      pod.repeat.set(w / 20, 0.4);
      this.addBox(cx, cz, w, d, 14, new THREE.MeshLambertMaterial({ map: pod, emissive: 0xffffff, emissiveMap: pod, emissiveIntensity: 0.2 }), rot);
      // 入口の看板（南西面）
      const sg = plane(Math.min(24, w * 0.4), 3, signTex('SUNRISE CITY', { bg: '#0f2440', fg: '#ffd36b', glow: '#ffd36b' }));
      const nx = Math.sin(rot), nz = Math.cos(rot); // ローカル+z
      sg.position.set(cx + nx * (d / 2 + 0.3), 10, cz + nz * (d / 2 + 0.3));
      sg.rotation.y = rot;
      this.g.add(sg);
      break;
    }
    // ホテル棟（プリンスホテル風）と中層棟（ワールドインポートマート風）＋屋上の水族館ドーム
    const place = (cands, w, d, h, mat) => {
      for (const [la, lo] of cands) {
        const c = geo(la, lo);
        if (this.boxOk(c.x, c.z, w, d, rot, 2)) { this.addBox(c.x, c.z, w, d, h, mat, rot); return c; }
      }
      return null;
    };
    const ht = facadeTex('#b9b4a8', '#575247', 0.5, true);
    ht.repeat.set(1, 1.5);
    place([[35.72905, 139.72045], [35.7289, 139.7200], [35.7292, 139.7198]], 34, 20, 140 * S, new THREE.MeshLambertMaterial({ map: ht, emissive: 0xffffff, emissiveMap: ht, emissiveIntensity: 0.2 }));
    const wt = facadeTex('#7f8a96', '#404750', 0.6);
    wt.repeat.set(3, 1);
    const wc = place([[35.7298, 139.72035], [35.7296, 139.7202], [35.7294, 139.7188]], 40, 28, 60 * S, new THREE.MeshLambertMaterial({ map: wt, emissive: 0xffffff, emissiveMap: wt, emissiveIntensity: 0.2 }));
    if (wc) {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(9, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x7fd3ff, emissive: 0x1a6aa0, emissiveIntensity: 0.6, transparent: true, opacity: 0.8 }));
      dome.position.set(wc.x, 60 * S, wc.z);
      this.g.add(dome);
    }
  }

  // ---- サンシャイン60通り：映画館・ゲームセンター・飲食店のネオン ----
  buildS60Street() {
    const r = EAST_ROADS.find((x) => x.neon);
    const P = roadPolyline(r);
    const names = ['シネマ 60', 'GAME LAND', 'ラーメン 東池', 'カラオケ 歌広', '牛丼 大盛軒', 'BOWLING', 'クレープ ミルク', '回転寿司 まる', 'MANGA CAFE', 'ゲーム ARCADIA', 'たい焼き 東', '焼肉 炎'];
    const cols = ['#ff2a6d', '#05d9e8', '#f9c80e', '#7b2ff7', '#01ff89', '#ff7a00'];
    let n = 0;
    const lantern = new THREE.MeshBasicMaterial({ color: 0xffe08a });
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], b = P[i + 1];
      const len = Math.hypot(b.x - a.x, b.z - a.z);
      const ux = (b.x - a.x) / len, uz = (b.z - a.z) / len, rx = -uz, rz = ux;
      const rot = Math.atan2(ux, uz);
      for (let d = 8; d < len - 6; d += 9) {
        for (const sd of [-1, 1]) {
          const off = r.width / 2 + 3.4 + 5;
          const cx = a.x + ux * d + rx * off * sd, cz = a.z + uz * d + rz * off * sd;
          const h = 9 + ((n * 37) % 16);
          if (!this.boxOk(cx, cz, 10.6, 8, rot, 1.5)) continue;
          const col = new THREE.Color().setHSL((n * 0.17) % 1, 0.18, 0.22 + ((n * 5) % 4) * 0.03);
          this.addBox(cx, cz, 10, 8, h, new THREE.MeshLambertMaterial({ color: col }), rot);
          this.exclude.push({ x0: cx - 7, x1: cx + 7, z0: cz - 7, z1: cz + 7 });
          // 店先の明かり
          const fx = cx - rx * sd * 5.05, fz = cz - rz * sd * 5.05;
          const front = new THREE.Mesh(new THREE.PlaneGeometry(7, 2.8), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.11, 0.6, 0.72) }));
          front.position.set(fx, 1.5, fz);
          front.rotation.y = Math.atan2(-rx * sd, -rz * sd);
          this.g.add(front);
          // 袖看板
          const c = cols[n % cols.length];
          const sg = plane(1.3, 5.5, signTex(names[n % names.length], { bg: '#111', fg: c, vertical: true, glow: c }), { double: true });
          sg.position.set(cx - rx * sd * 5.8, 5.8, cz - rz * sd * 5.8);
          sg.rotation.y = rot;
          this.g.add(sg);
          n++;
        }
      }
      // 通りの上の装飾灯
      for (let d = 4; d < len; d += 6) {
        const x = a.x + ux * d, z = a.z + uz * d;
        const l = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), lantern);
        l.position.set(x + rx * (r.width / 2 + 0.6), 5.2, z + rz * (r.width / 2 + 0.6));
        const l2 = l.clone(); l2.position.set(x - rx * (r.width / 2 + 0.6), 5.2, z - rz * (r.width / 2 + 0.6));
        this.g.add(l, l2);
      }
    }
    // 通りの入口のゲート（明治通り側）
    const A = NODES.MJ_2, B = NODES.S60M;
    const len = Math.hypot(B.x - A.x, B.z - A.z);
    const ux = (B.x - A.x) / len, uz = (B.z - A.z) / len;
    const gp = { x: A.x + ux * 14, z: A.z + uz * 14 };
    if (courseClearance(gp.x - uz * (r.width / 2 + 1), gp.z + ux * (r.width / 2 + 1), 'east') > 0.8 && courseClearance(gp.x + uz * (r.width / 2 + 1), gp.z - ux * (r.width / 2 + 1), 'east') > 0.8) {
      const gate = new THREE.Group();
      gate.position.set(gp.x, 0, gp.z);
      gate.rotation.y = Math.atan2(ux, uz);
      const pm = new THREE.MeshLambertMaterial({ color: 0x9aa2ab, emissive: 0x1a1a1a });
      for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.4, 6.6, 0.4), pm); p.position.set(sx * (r.width / 2 + 1), 3.3, 0); gate.add(p); }
      const sg = plane(r.width + 2.4, 1.6, signTex('SUNRISE 60 STREET', { bg: '#14223a', fg: '#ffd36b', glow: '#ffd36b' }), { double: true });
      sg.position.y = 6.2; gate.add(sg);
      this.g.add(gate);
    }
  }

  // ---- グリーン大通りの並木（中央分離帯） ----
  buildGreenTrees() {
    const r = EAST_ROADS.find((x) => x.green);
    const P = roadPolyline(r);
    const trunk = new THREE.MeshLambertMaterial({ color: 0x4a3828 });
    const leaf = new THREE.MeshLambertMaterial({ color: 0x2f6a35, emissive: 0x0a160a });
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], b = P[i + 1];
      const len = Math.hypot(b.x - a.x, b.z - a.z);
      for (let d = 34; d < len - 34; d += 9) {
        const x = a.x + ((b.x - a.x) * d) / len, z = a.z + ((b.z - a.z) * d) / len;
        if (courseClearance(x, z, 'east') < 0.8) continue; // コース走行時に被るなら置かない
        const t = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 3, 6), trunk);
        t.position.set(x, 1.5, z);
        const f = new THREE.Mesh(new THREE.SphereGeometry(1.7, 10, 8), leaf);
        f.position.set(x, 4, z);
        this.g.add(t, f);
      }
    }
  }

  // ---- 東池袋駅の出入口 ----
  buildStation() {
    const J = NODES.J5;
    const sg = plane(6, 1.2, signTex('東池袋駅  地下鉄', { bg: '#00305e', fg: '#fff' }), { double: true });
    for (const [dx, dz] of [[14, -14], [-14, 14]]) {
      const x = J.x + dx, z = J.z + dz;
      if (courseClearance(x, z, 'east') < 2 || this.corridor.query(x, z).d < 2) continue;
      const box = this.addBox(x, z, 3, 5, 3, new THREE.MeshLambertMaterial({ color: 0x9aa1aa, emissive: 0x222222 }));
      void box;
      const s2 = sg.clone(); s2.position.set(x, 3.6, z); this.g.add(s2);
    }
  }

  update(t) {
    if (!this.screens) return;
    // 大型ビジョンのアニメーション（数フレームに一度描き換え）
    this.frame = (this.frame || 0) + 1;
    if (this.frame % 6) return;
    for (const s of this.screens) {
      const g = s.canvas.getContext('2d');
      const k = t * 0.4 + s.seed;
      const hue = (k * 40) % 360;
      const grd = g.createLinearGradient(0, 0, 256, 160);
      grd.addColorStop(0, `hsl(${hue},80%,45%)`);
      grd.addColorStop(1, `hsl(${(hue + 80) % 360},80%,25%)`);
      g.fillStyle = grd; g.fillRect(0, 0, 256, 160);
      g.fillStyle = '#fff';
      g.font = 'bold 40px sans-serif';
      g.textAlign = 'center';
      const msgs = ['IKEBUKURO', 'NIGHT RACERS', 'EAST GATE', 'SUNRISE 60'];
      g.fillText(msgs[Math.floor(k / 2) % msgs.length], 128 + Math.sin(k * 2) * 20, 95);
      s.tex.needsUpdate = true;
    }
  }
}
