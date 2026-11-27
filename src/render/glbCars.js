// 実車の3Dモデル（GLB）を使う車両：tools/car_model.mjs で座標変換・車輪分離・圧縮したもの
//  86-GR："Toyota GR86 (ZN8)" by Mona x Supercars（Sketchfab, CC BY 4.0）
//  Z-32 ："Nissan Fairlady 300ZX (Z32) 1989" by Lexyc16（Sketchfab, CC BY-NC 4.0 — 非営利のみ）
//  RS-RS ："2016 Mazda MX-5 Miata" by Galaxy Car Showroom（Sketchfab, CC BY 4.0）
//  80-Supra："Toyota Supra MK4 | supra 1997" by Pooya_dh（Sketchfab, CC BY-NC 4.0 — 非営利のみ）
//  SWIFT-S："2020 Suzuki Swift Sport (ZC33S)" by DisneyCars（Sketchfab, CC BY 4.0）
//  S2K-AP："Honda S2000 Ultimate Edition (AP2)" by Mona x Supercars（Sketchfab, CC BY 4.0）
//  BRZ-ZD："2023 Subaru BRZ" by Nazh Design（Sketchfab, CC BY 4.0）
//  EVO-IX："2006 Mitsubishi Lancer Evolution IX MR" by OUTPISTON（Sketchfab, CC BY-NC-SA 4.0 — 非営利・継承）
//  R34-GTR："2002_nissan_skyline_r34_gt-r" by 007（Sketchfab, CC BY 4.0）
//  WRX-IMP："2012 Varis Subaru Impreza WRX STI GRB Ver." by Ddiaz Design（Sketchfab, CC BY-NC-SA 4.0 — 非営利・継承）
//  NSX-NA1："1990 Honda NSX" by lilModels（Sketchfab, CC BY 4.0）
//  NSX-NA2："2002 Honda NSX-R NA2" by SIU Car Garage（Sketchfab, CC BY-NC 4.0 — 非営利のみ）
//  RX7-FC："1990 Mazda RX-7 Savanna Infini III FC3S" by Galaxy Car Showroom（Sketchfab, CC BY 4.0）
//  RX7-FD："1999 Mazda RX-7 FD" by OUTPISTON（Sketchfab, CC BY-NC-SA 4.0 — 非営利・継承）
//  R33-GTR："Nissan Skyline GTR r33" by Black Snow（Sketchfab, CC BY 4.0）
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import GR86 from '../../assets/models/gr86.glb';
import Z32 from '../../assets/models/z32.glb';
import WRX from '../../assets/models/wrx.glb';
import ND from '../../assets/models/nd.glb';
import SUPRA from '../../assets/models/supra.glb';
import SWIFT from '../../assets/models/swift.glb';
import S2K from '../../assets/models/s2k.glb';
import BRZ from '../../assets/models/brz.glb';
import EVO from '../../assets/models/evo.glb';
import R34 from '../../assets/models/r34.glb';
import NA1 from '../../assets/models/na1.glb';
import NA2 from '../../assets/models/na2.glb';
import FC from '../../assets/models/fc.glb';
import FD from '../../assets/models/fd.glb';
import R33 from '../../assets/models/r33.glb';

// paint: 塗装色を置き換えるマテリアル名、head/tail: ヘッドライト・テールランプのマテリアル名
// glass: 不透明で作られている窓ガラスのマテリアル名（半透明にする）
// driverX: 運転席の左右位置（+が左）、belt/wsBase: カメラ位置の基準（cameras.js）
export const GLB_CARS = {
  '86-GR': {
    data: GR86, paint: /^Paint1/, head: /^FariFront/, tail: /^Fari005|^Ln4/, driverX: 0.36, belt: 0.74, wsBase: 0.72, wingY: 0.8,
    credit: '86-GRの3Dモデル："Toyota GR86 (ZN8)" by Mona x Supercars (Sketchfab) — CC BY 4.0',
  },
  'Z-32': {
    data: Z32, paint: /^Material\.001$/, head: /^Material\.010$/, tail: /^Material\.016$/, driverX: -0.36, belt: 0.62, wsBase: 0.62, wingY: 0.82,
    credit: 'Z-32の3Dモデル："Nissan Fairlady 300ZX (Z32) 1989" by Lexyc16 (Sketchfab) — CC BY-NC 4.0（非営利）',
  },
  'RS-RS': {
    data: ND, paint: /^M_CarPaintNormal_Max$/, head: /^M_LightGlassNormal_Clear_Low$/, tail: /^M_LightGlassNormal_Red_Low$/, driverX: 0.35, belt: 0.62, wsBase: 0.62, wingY: 0.78,
    credit: 'RS-RSの3Dモデル："2016 Mazda MX-5 Miata" by Galaxy Car Showroom (Sketchfab) — CC BY 4.0',
  },
  '80-Supra': {
    data: SUPRA, paint: /^Paint$/, head: /^Bright_White_Light$/, tail: /^Bright_Red_Light$|^Trunk_Stoplight$/, driverX: 0.36, belt: 0.66, wsBase: 0.7, wingY: 0.85,
    credit: '80-Supraの3Dモデル："Toyota Supra MK4 | supra 1997" by Pooya_dh (Sketchfab) — CC BY-NC 4.0（非営利）',
  },
  'SWIFT-S': {
    data: SWIFT, paint: /^New_Material$/, head: /^Puncheffnuminnernalphaalphaita/, tail: /(?!)/, driverX: 0.36, belt: 0.78, wsBase: 0.98, wingY: 1.0,
    credit: 'SWIFT-Sの3Dモデル："2020 Suzuki Swift Sport (ZC33S)" by DisneyCars (Sketchfab) — CC BY 4.0',
  },
  'S2K-AP': {
    data: S2K, paint: /ext_chicane_silver/, head: /(?!)/, tail: /(?!)/, driverX: 0.37, belt: 0.6, wsBase: 0.62, wingY: 0.82,
    credit: 'S2K-APの3Dモデル："Honda S2000 Ultimate Edition (AP2)" by Mona x Supercars (Sketchfab) — CC BY 4.0',
  },
  'BRZ-ZD': {
    data: BRZ, paint: /^Paint$/, head: /(?!)/, tail: /(?!)/, driverX: 0.36, belt: 0.74, wsBase: 0.72, wingY: 0.8,
    credit: 'BRZ-ZDの3Dモデル："2023 Subaru BRZ" by Nazh Design (Sketchfab) — CC BY 4.0',
  },
  'EVO-IX': {
    data: EVO, paint: /^mM_CarPaint(Normal)?_Max/, head: /^mM_LightGlassNormal_Clear_Low1$/, tail: /^mM_LightGlass(Normal)?_Red_Low1$/, driverX: 0.37, belt: 0.72, wsBase: 0.78, wingY: 1.0,
    credit: 'EVO-IXの3Dモデル："2006 Mitsubishi Lancer Evolution IX MR" by OUTPISTON (Sketchfab) — CC BY-NC-SA 4.0（非営利・継承）',
  },
  'R34-GTR': {
    data: R34, paint: /PaintTNR_Material1$/, head: /(?!)/, tail: /^red_glass$/, driverX: -0.37, belt: 0.68, wsBase: 0.78, wingY: 0.95,
    credit: 'R34-GTRの3Dモデル："2002_nissan_skyline_r34_gt-r" by 007 (Sketchfab) — CC BY 4.0',
  },
  'WRX-IMP': {
    data: WRX, paint: /^wrxM_CarPaint(Normal)?_Max1$/, head: /^wrxM_LightGlassNormal_Clear_Low1$/, tail: /^wrxM_LightGlass_Red_Low1$|^varisM_Light_Taillight/, driverX: 0.37, belt: 0.72, wsBase: 0.78, wingY: 0.95,
    credit: 'WRX-IMPの3Dモデル："2012 Varis Subaru Impreza WRX STI GRB Ver." by Ddiaz Design (Sketchfab) — CC BY-NC-SA 4.0（非営利・継承）',
  },
  'NSX-NA1': {
    data: NA1, paint: /^Material\.005$/, glass: /^Material\.033$/, head: /(?!)/, tail: /(?!)/, driverX: -0.37, belt: 0.62, wsBase: 0.95, wingY: 0.82,
    credit: 'NSX-NA1の3Dモデル："1990 Honda NSX" by lilModels (Sketchfab) — CC BY 4.0',
  },
  'NSX-NA2': {
    data: NA2, paint: /^Vehicle_Exterior_mm_ext$/, head: /(?!)/, tail: /(?!)/, driverX: -0.37, belt: 0.62, wsBase: 0.95, wingY: 0.82,
    credit: 'NSX-NA2の3Dモデル："2002 Honda NSX-R NA2" by SIU Car Garage (Sketchfab) — CC BY-NC 4.0（非営利）',
  },
  'RX7-FC': {
    data: FC, paint: /^RX-7_FC_Paint$/, head: /(?!)/, tail: /^Red_Glass$/, driverX: -0.37, belt: 0.64, wsBase: 0.62, wingY: 0.85,
    credit: 'RX7-FCの3Dモデル："1990 Mazda RX-7 Savanna Infini III FC3S" by Galaxy Car Showroom (Sketchfab) — CC BY 4.0',
  },
  'RX7-FD': {
    data: FD, paint: /^Material$/, head: /(?!)/, tail: /^redglass$/, driverX: -0.37, belt: 0.62, wsBase: 0.66, wingY: 0.85,
    credit: 'RX7-FDの3Dモデル："1999 Mazda RX-7 FD" by OUTPISTON (Sketchfab) — CC BY-NC-SA 4.0（非営利・継承）',
  },
  'R33-GTR': {
    data: R33, paint: /^body$/, head: /(?!)/, tail: /^rl33$|^rr33$/, driverX: -0.37, belt: 0.7, wsBase: 0.8, wingY: 0.95,
    credit: 'R33-GTRの3Dモデル："Nissan Skyline GTR r33" by Black Snow (Sketchfab) — CC BY 4.0',
  },
};
export const GLB_CREDITS = Object.values(GLB_CARS).map((c) => c.credit);
const templates = {};
let loading = null;

// 全モデルを読み込む（失敗した車種は簡易モデルのまま）
export function loadGlbCars() {
  if (!loading) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loading = Promise.all(Object.entries(GLB_CARS).map(([id, c]) => new Promise((resolve) => {
      const buf = c.data.buffer.slice(c.data.byteOffset, c.data.byteOffset + c.data.byteLength);
      loader.parse(buf, '', (gltf) => { templates[id] = gltf.scene; resolve(); }, (e) => { console.error(`${id}のモデルの読み込みに失敗`, e); resolve(); });
    })));
  }
  return loading;
}
export const hasGlbModel = (id) => !!templates[id];

const blackMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.6 });

// carDef: 車種データ, color: ボディ色, opts: { aero, wing }
export function buildGlbCarModel(carDef, color, opts = {}) {
  const cfg = GLB_CARS[carDef.id];
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const src = templates[carDef.id].clone(true);
  const L = carDef.length, W = carDef.width, H = carDef.height;
  const wheels = [];
  const lightsFront = [];
  const tailMats = [];
  const paint = new THREE.Color(color);
  // マテリアルは個体ごとに複製（塗装色・ライトの発光を個別に変える）
  const matCache = new Map();
  const own = (m) => {
    if (!matCache.has(m)) {
      const c = m.clone();
      const n = m.name || '';
      if (cfg.paint.test(n)) c.color.copy(paint); // ボディ塗装
      if (cfg.glass && cfg.glass.test(n)) { c.color.set(0x0c1016); c.transparent = true; c.opacity = 0.35; c.depthWrite = false; c.metalness = 0.2; c.roughness = 0.05; } // 不透明で作られた窓ガラス
      if (cfg.head.test(n)) { c.emissive = new THREE.Color(0xfff2cc); c.emissiveIntensity = 1.4; c.emissiveMap = c.map; lightsFront.push({ material: c }); }
      // テールランプ（レンズ）：ブレーキで明るく
      if (cfg.tail.test(n)) { c.emissive = new THREE.Color(0xff1a10); if (c.map) c.emissiveMap = c.map; c.emissiveIntensity = 0.7; tailMats.push(c); }
      matCache.set(m, c);
    }
    return matCache.get(m);
  };
  src.traverse((o) => { if (o.isMesh) { o.material = Array.isArray(o.material) ? o.material.map(own) : own(o.material); o.castShadow = false; } });
  const bodyNode = src.getObjectByName('body');
  body.add(bodyNode);
  for (const name of ['wheel_FL', 'wheel_FR', 'wheel_RL', 'wheel_RR']) {
    const n = src.getObjectByName(name);
    const pivot = new THREE.Group();
    pivot.position.copy(n.position);
    const spin = new THREE.Group();
    n.position.set(0, 0, 0);
    spin.add(n);
    pivot.add(spin);
    root.add(pivot);
    wheels.push({ pivot, spin, front: name[6] === 'F' });
  }
  // syncCarModel は tailMat.emissiveIntensity を書き換えるので、複数マテリアルへ配る
  const tailMat = { set emissiveIntensity(v) { for (const m of tailMats) m.emissiveIntensity = v; } };
  // エアロパーツ（装着時のみ）
  const belt = cfg.wingY, hl = L / 2;
  const wingType = opts.wing;
  if (wingType === 'gt') {
    const wing = new THREE.Group();
    const plane = new THREE.Mesh(new THREE.BoxGeometry(W * 0.92, 0.04, 0.3), blackMat);
    plane.position.y = belt + 0.36; wing.add(plane);
    for (const sx of [-1, 1]) { const st = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.36, 0.12), blackMat); st.position.set(sx * W * 0.3, belt + 0.18, 0); wing.add(st); }
    wing.position.z = -hl + 0.3;
    body.add(wing);
  }
  if (opts.aero === 'aero_lip' || opts.aero === 'aero_full') {
    const lip = new THREE.Mesh(new THREE.BoxGeometry(W * 0.9, 0.035, 0.16), blackMat);
    lip.position.set(0, 0.13, hl - 0.08); body.add(lip);
  }
  if (opts.aero === 'aero_full') {
    for (const sx of [-1, 1]) { const sk = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, L * 0.45), blackMat); sk.position.set(sx * (W / 2 - 0.06), 0.14, 0); body.add(sk); }
  }
  // 影
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.15, L * 1.05), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.035;
  root.add(shadow);
  // 運転席視点：実車の室内がモデルにあるので、車体は隠さない（ハンドル回転用のダミーのみ）
  const cockpit = new THREE.Group(); cockpit.visible = false; body.add(cockpit);
  const steeringWheel = new THREE.Object3D(); cockpit.add(steeringWheel);
  // カメラ位置の基準（cameras.js：運転席 = (−0.37, belt+0.34, wsBase−1.05)）
  root.userData = { exterior: [], body, wheels, lightsFront, tailMat, cockpit, steeringWheel, paint: null, belt: cfg.belt, wsBase: cfg.wsBase, H, L, W, glb: true, driverX: cfg.driverX };
  return root;
}
