// 池袋駅西口のランドマーク（東部デパート・西口公園・池袋芸術劇場・ロータリー・西一番街）
// 施設名・店名はすべて架空。形・配置・色は実在の街並みを参考にしている。
import * as THREE from 'three';
import { NODES, LANDMARKS, geo, MAP_SCALE } from '../data/map.js';
import { boxClearOfCourse, courseClearance } from '../physics/track.js';

const S = MAP_SCALE;

function rect(r) {
  const a = geo(r[0], r[1]), b = geo(r[2], r[3]);
  return { x0: a.x, x1: b.x, z0: b.z, z1: a.z, cx: (a.x + b.x) / 2, cz: (a.z + b.z) / 2, w: b.x - a.x, d: a.z - b.z };
}

function tex(w, h, draw, repeat = false) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}

function signTex(text, { fg = '#fff', bg = '#c8102e', font = 'bold', vertical = false, glow = null, w = 512, h = 128 } = {}) {
  return tex(vertical ? h : w, vertical ? w : h, (g, W, H) => {
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.fillStyle = fg;
    if (glow) { g.shadowColor = glow; g.shadowBlur = 18; }
    g.textAlign = 'center'; g.textBaseline = 'middle';
    const fam = '"Hiragino Sans","Noto Sans JP","Yu Gothic",sans-serif';
    if (vertical) {
      const n = text.length;
      const fs = Math.min(W * 0.78, (H * 0.9) / n);
      g.font = `${font} ${fs}px ${fam}`;
      [...text].forEach((ch, i) => g.fillText(ch, W / 2, H * 0.05 + fs * (i + 0.5)));
    } else {
      let fs = H * 0.62;
      g.font = `${font} ${fs}px ${fam}`;
      while (g.measureText(text).width > W * 0.92 && fs > 10) { fs -= 2; g.font = `${font} ${fs}px ${fam}`; }
      g.fillText(text, W / 2, H / 2 + 2);
    }
  });
}

function plane(w, h, map, opts = {}) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map, side: opts.double ? THREE.DoubleSide : THREE.FrontSide, transparent: !!opts.transparent, fog: true }));
  return m;
}

export class WestExit {
  constructor(scene) {
    this.g = new THREE.Group();
    scene.add(this.g);
    this.exclude = [rect(LANDMARKS.plaza)]; // ランダムビルを置かない矩形
    this.buildPlaza();
    this.buildDept();
    this.buildPark();
    this.buildTheatre();
    this.buildRotaryIsland();
    this.buildAlley();
  }

  excludes(x, z, pad = 3) {
    return this.exclude.some((r) => x > r.x0 - pad && x < r.x1 + pad && z > r.z0 - pad && z < r.z1 + pad);
  }

  // ---- 駅前広場の舗装 ----
  buildPlaza() {
    const R = rect(LANDMARKS.plaza);
    const paving = tex(128, 128, (g, W, H) => {
      g.fillStyle = '#5d5f66'; g.fillRect(0, 0, W, H);
      g.fillStyle = '#676a72';
      for (let y = 0; y < H; y += 16) for (let x = (y / 16) % 2 ? 0 : 16; x < W; x += 32) g.fillRect(x, y, 30, 14);
    }, true);
    paving.repeat.set(R.w / 6, R.d / 6);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(R.w + 30, R.d + 10), new THREE.MeshLambertMaterial({ map: paving }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(R.cx + 10, 0.004, R.cz);
    this.g.add(m);
  }

  // ---- 東部デパート（池袋駅西口の駅ビル） ----
  buildDept() {
    const R = rect(LANDMARKS.dept);
    this.exclude.push(R);
    const H = 60 * S;
    const facade = tex(256, 512, (g, W, Hh) => {
      g.fillStyle = '#d9ccb0'; g.fillRect(0, 0, W, Hh);
      for (let y = 30; y < Hh; y += 44) {
        g.fillStyle = '#3d4250'; g.fillRect(0, y, W, 16);
        for (let x = 6; x < W; x += 22) { if (Math.random() < 0.55) { g.fillStyle = 'rgba(255,226,170,0.95)'; g.fillRect(x, y + 2, 14, 12); } }
      }
      g.fillStyle = 'rgba(0,0,0,0.08)'; for (let x = 0; x < W; x += 32) g.fillRect(x, 0, 2, Hh);
    }, true);
    facade.repeat.set(R.d / 30, 1);
    const mat = new THREE.MeshLambertMaterial({ map: facade, emissive: 0xffffff, emissiveMap: facade, emissiveIntensity: 0.25 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(R.w, H, R.d), mat);
    body.position.set(R.cx, H / 2, R.cz);
    this.g.add(body);
    // 上層のセットバック
    const top = new THREE.Mesh(new THREE.BoxGeometry(R.w * 0.6, 10 * S, R.d * 0.55), new THREE.MeshLambertMaterial({ color: 0xbdb39c }));
    top.position.set(R.cx + R.w * 0.15, H + 5 * S, R.cz);
    this.g.add(top);
    // 屋上看板（西向き）
    const sign = plane(26, 6.5, signTex('東部デパート', { bg: '#0d2a5c', fg: '#fff', glow: '#7fb3ff' }));
    sign.position.set(R.x0 - 0.3, H - 4, R.cz - R.d * 0.25);
    sign.rotation.y = -Math.PI / 2;
    this.g.add(sign);
    const vsign = plane(3.2, 18, signTex('東部デパート', { bg: '#0d2a5c', vertical: true, glow: '#7fb3ff' }));
    vsign.position.set(R.x0 - 0.3, H * 0.55, R.cz + R.d * 0.3);
    vsign.rotation.y = -Math.PI / 2;
    this.g.add(vsign);
    // 西口の入口と庇
    const ent = new THREE.Group();
    ent.position.set(R.x0, 0, R.cz + 4);
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(5, 0.4, 26), new THREE.MeshLambertMaterial({ color: 0x9aa1ab, emissive: 0x222222 }));
    canopy.position.set(-2.4, 4.6, 0); ent.add(canopy);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(22, 3.6), new THREE.MeshBasicMaterial({ color: 0xfff2d6 }));
    glow.position.set(-0.05, 2.0, 0); glow.rotation.y = -Math.PI / 2; ent.add(glow);
    const exitSign = plane(12, 1.8, signTex('池袋駅  西口  West Exit', { bg: '#20242c', fg: '#ffe680' }));
    exitSign.position.set(-4.95, 5.4, 0); exitSign.rotation.y = -Math.PI / 2; ent.add(exitSign);
    this.g.add(ent);
    // 線路側（JR線）の低い建物
    const tracks = new THREE.Mesh(new THREE.BoxGeometry(40, 8, R.d + 60), new THREE.MeshLambertMaterial({ color: 0x2a2d33 }));
    tracks.position.set(R.x1 + 22, 4, R.cz);
    this.g.add(tracks);
  }

  // ---- 西口公園（円形広場とリング状の大屋根） ----
  buildPark() {
    const R = rect(LANDMARKS.park);
    this.exclude.push(R);
    const tile = tex(128, 128, (g, W, H) => {
      g.fillStyle = '#8f9196'; g.fillRect(0, 0, W, H);
      g.strokeStyle = '#7a7c81'; g.lineWidth = 2;
      for (let i = 0; i <= 128; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, H); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(W, i); g.stroke(); }
    }, true);
    tile.repeat.set(R.w / 4, R.d / 4);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(R.w, R.d), new THREE.MeshLambertMaterial({ map: tile }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(R.cx, 0.06, R.cz);
    this.g.add(ground);
    // 円形ステージ
    const cx = R.cx + R.w * 0.08, cz = R.cz;
    const stage = new THREE.Mesh(new THREE.CylinderGeometry(7, 7.3, 0.5, 40), new THREE.MeshLambertMaterial({ color: 0xb9bcc2 }));
    stage.position.set(cx, 0.25, cz);
    this.g.add(stage);
    // リング大屋根（LEDで色が変わる）
    this.ringMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x66ccff, emissiveIntensity: 1.2, metalness: 0.4, roughness: 0.4 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(10.5, 0.75, 10, 72), this.ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.scale.set(1, 1, 0.55);
    ring.position.set(cx, 7.5, cz);
    this.g.add(ring);
    const colMat = new THREE.MeshLambertMaterial({ color: 0xe6e8ec });
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2 + 0.3;
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 7.8, 8), colMat);
      col.position.set(cx + Math.cos(a) * 9.6, 3.8, cz + Math.sin(a) * 9.6);
      col.rotation.z = Math.cos(a) * 0.12; col.rotation.x = -Math.sin(a) * 0.12;
      this.g.add(col);
    }
    // 植栽と街灯
    const trunk = new THREE.MeshLambertMaterial({ color: 0x4a3828 });
    const leaf = new THREE.MeshLambertMaterial({ color: 0x2c5a2e, emissive: 0x081208 });
    const tree = (x, z, s = 1) => {
      if (courseClearance(x, z) < 2.5 * s) return;
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.15 * s, 0.22 * s, 3 * s, 6), trunk);
      t.position.set(x, 1.5 * s, z);
      const f = new THREE.Mesh(new THREE.SphereGeometry(2.0 * s, 10, 8), leaf);
      f.position.set(x, 3.8 * s, z);
      this.g.add(t, f);
    };
    for (let i = 0; i <= 8; i++) { tree(R.x0 + 2.5, R.z0 + 2 + (i / 8) * (R.d - 4)); }
    for (let i = 0; i <= 6; i++) { tree(R.x0 + 2 + (i / 6) * (R.w - 4), R.z1 - 2.5, 0.9); }
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xfff0d0 });
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const x = cx + Math.cos(a) * 15, z = cz + Math.sin(a) * 15 * 0.7;
      if (courseClearance(x, z) < 1) continue;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 4, 6), new THREE.MeshLambertMaterial({ color: 0x555b66 }));
      pole.position.set(x, 2, z);
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), lampMat);
      l.position.set(x, 4.1, z);
      this.g.add(pole, l);
    }
    const name = plane(8, 1.4, signTex('西口公園', { bg: '#1d3b2a', fg: '#e8f5e9' }), { double: true });
    name.position.set(R.x1 - 1, 1.6, R.z0 + 3); name.rotation.y = Math.PI / 2;
    this.g.add(name);
  }

  // ---- 池袋芸術劇場（大ガラス屋根のアトリウム） ----
  buildTheatre() {
    const R = rect(LANDMARKS.theatre);
    this.exclude.push(R);
    const H = 50 * S;
    const brick = tex(128, 128, (g, W, Hh) => {
      g.fillStyle = '#7d4b3b'; g.fillRect(0, 0, W, Hh);
      g.fillStyle = '#6b3e31';
      for (let y = 0; y < Hh; y += 8) for (let x = (y / 8) % 2 ? 0 : 8; x < W; x += 16) g.fillRect(x, y, 15, 7);
    }, true);
    brick.repeat.set(R.d / 6, H / 6);
    const body = new THREE.Mesh(new THREE.BoxGeometry(R.w * 0.62, H, R.d), new THREE.MeshLambertMaterial({ map: brick }));
    body.position.set(R.x0 + R.w * 0.31, H / 2, R.cz);
    this.g.add(body);
    // 東側（公園側）の傾斜ガラスアトリウム
    const aw = R.w * 0.38;
    const shape = new THREE.Shape();
    shape.moveTo(0, 0); shape.lineTo(aw, 0); shape.lineTo(0, H * 0.85); shape.closePath();
    const geoA = new THREE.ExtrudeGeometry(shape, { depth: R.d * 0.9, bevelEnabled: false });
    geoA.translate(0, 0, -R.d * 0.45);
    const glass = new THREE.MeshStandardMaterial({ color: 0x9fc6e8, emissive: 0xffc98a, emissiveIntensity: 0.45, transparent: true, opacity: 0.7, metalness: 0.3, roughness: 0.1 });
    const atrium = new THREE.Mesh(geoA, glass);
    atrium.position.set(R.x0 + R.w * 0.62, 0, R.cz);
    this.g.add(atrium);
    // ガラスの格子
    const frame = new THREE.MeshLambertMaterial({ color: 0x404650 });
    for (let k = -4; k <= 4; k++) {
      const len = Math.hypot(aw, H * 0.85);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(len, 0.15, 0.15), frame);
      bar.position.set(R.x0 + R.w * 0.62 + aw / 2, H * 0.425, R.cz + (k / 4) * R.d * 0.44);
      bar.rotation.z = -Math.atan2(H * 0.85, aw);
      this.g.add(bar);
    }
    const name = plane(16, 2.4, signTex('池袋芸術劇場', { bg: '#2a1f1b', fg: '#f6e7c8' }));
    name.position.set(R.x0 + R.w * 0.62 + 0.1, H - 3, R.cz);
    name.rotation.y = Math.PI / 2;
    this.g.add(name);
  }

  // ---- 西口ロータリーの島（バス乗り場） ----
  buildRotaryIsland() {
    const x0 = NODES.RT_W.x + 6, x1 = NODES.RT_B1.x - 6;
    const z0 = NODES.RT_A1.z + 6, z1 = NODES.RT_C1.z - 6;
    const w = x1 - x0, d = z1 - z0;
    if (w <= 2 || d <= 2) return;
    const base = new THREE.Mesh(new THREE.BoxGeometry(w, 0.2, d), new THREE.MeshLambertMaterial({ color: 0x9a9ca2 }));
    base.position.set((x0 + x1) / 2, 0.1, (z0 + z1) / 2);
    this.g.add(base);
    const roof = new THREE.MeshLambertMaterial({ color: 0x2f6db5, emissive: 0x0b1c33 });
    const post = new THREE.MeshLambertMaterial({ color: 0xcfd3d8 });
    const adMat = new THREE.MeshBasicMaterial({ color: 0xfff4e0 });
    for (let k = 0; k < 3; k++) {
      const z = z0 + ((k + 0.5) / 3) * d;
      for (const side of [-1, 1]) {
        const x = (x0 + x1) / 2 + side * (w / 2 - 1.2);
        const r = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, d / 3 - 1.5), roof);
        r.position.set(x, 2.8, z);
        const p = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.8, 0.12), post);
        p.position.set(x - side * 0.8, 1.4, z);
        const ad = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.6, 1.0), adMat);
        ad.position.set(x - side * 0.85, 1.2, z + 1.2);
        this.g.add(r, p, ad);
      }
    }
    const sign = plane(6, 1.1, signTex('バスのりば  Bus Stop', { bg: '#1c4f8f' }), { double: true });
    sign.position.set((x0 + x1) / 2, 3.6, z0 - 0.2);
    this.g.add(sign);
  }

  // ---- 西一番街（路地・アーチ看板・提灯・飲食店） ----
  buildAlley() {
    const Sp = NODES.NI_S, Np = NODES.NI_N;
    const x = Sp.x;
    const zS = Sp.z, zN = Np.z; // 南が大きいz
    this.exclude.push({ x0: x - 20, x1: x + 20, z0: zN + 6, z1: zS - 6 });
    // アーチ看板（南の入口）
    const gate = new THREE.Group();
    gate.position.set(x, 0, zS - 6.5);
    gate.visible = courseClearance(x - 3.9, zS - 6.5) > 0.8 && courseClearance(x + 3.9, zS - 6.5) > 0.8;
    const postMat = new THREE.MeshLambertMaterial({ color: 0x9da3ab, emissive: 0x1a1a1a });
    for (const sx of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.4, 6.4, 0.4), postMat);
      p.position.set(sx * 3.9, 3.2, 0); gate.add(p);
    }
    const signT = signTex('西一番街', { bg: '#b5121b', fg: '#fff', glow: '#ffd0d0' });
    for (const ry of [0, Math.PI]) {
      const s = plane(7.2, 1.6, signT);
      s.position.set(0, 5.8, ry ? -0.21 : 0.21); s.rotation.y = ry; gate.add(s);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(8.2, 1.8, 0.4), new THREE.MeshLambertMaterial({ color: 0x3a1214 }));
    beam.position.y = 5.8; gate.add(beam);
    this.g.add(gate);
    // 店舗（架空の店名）
    const names = ['ラーメン 池虎', '居酒屋 ふくろう', 'カラオケ BIG SONG', '焼肉 西一苑', '喫茶 灯', '中華 龍門', '串カツ だるま屋', 'バー NIGHT OWL', '立ち飲み 角', 'ゲーム ARCADIA', '牛丼 大盛軒', '餃子 一番', 'BAR BLUE', 'うどん 讃', '寿司 まる', 'ネットカフェ MOON'];
    const cols = ['#ff2a6d', '#05d9e8', '#f9c80e', '#7b2ff7', '#01ff89', '#ff7a00'];
    let n = 0;
    const L = zS - zN;
    for (const side of [-1, 1]) {
      for (let z = zN + 5; z < zS - 6; z += 8) {
        const w = 7.5, h = 8 + ((n * 37) % 15), dpt = 10;
        const bx = x + side * (3.0 + 1.6 + dpt / 2);
        if (!boxClearOfCourse(bx, z + w / 2, dpt + 1.6, w, 0, 2.5)) continue; // 池袋WGPの車道に被る店は置かない
        const col = new THREE.Color().setHSL(((n * 0.13) % 1), 0.15, 0.22 + ((n * 7) % 5) * 0.03);
        const b = new THREE.Mesh(new THREE.BoxGeometry(dpt, h, w - 0.4), new THREE.MeshLambertMaterial({ color: col }));
        b.position.set(bx, h / 2, z + w / 2);
        this.g.add(b);
        // 1階の明るい店先
        const front = new THREE.Mesh(new THREE.PlaneGeometry(w - 1, 2.8), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.1, 0.6, 0.75) }));
        front.position.set(bx - side * (dpt / 2 + 0.02), 1.5, z + w / 2);
        front.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
        this.g.add(front);
        // 袖看板（縦型ネオン）
        const nm = names[n % names.length];
        const c = cols[n % cols.length];
        const sg = plane(1.2, 5, signTex(nm, { bg: '#111', fg: c, vertical: true, glow: c }), { double: true });
        sg.position.set(bx - side * (dpt / 2 + 0.7), 5.5, z + 1.2);
        sg.rotation.y = 0;
        this.g.add(sg);
        n++;
      }
    }
    // 提灯（左右に並ぶ赤い灯り）
    const lantern = new THREE.MeshBasicMaterial({ color: 0xff4a3a });
    const lg = new THREE.SphereGeometry(0.28, 10, 8);
    lg.scale(1, 1.3, 1);
    for (let z = zN + 3; z < zS - 7; z += 3.5) {
      for (const sx of [-1, 1]) {
        if (courseClearance(x + sx * 3.4, z) < 1.5) continue;
        const l = new THREE.Mesh(lg, lantern);
        l.position.set(x + sx * 3.4, 3.6, z);
        this.g.add(l);
      }
    }
    void L;
  }

  update(t) {
    if (this.ringMat) this.ringMat.emissive.setHSL((t * 0.04) % 1, 0.8, 0.55);
  }
}
