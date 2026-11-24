// 86-GR の車両モデル：GR86(ZN8) 3Dモデル（"Toyota GR86 (ZN8)" by Mona x Supercars / Sketchfab, CC-BY-4.0）
// tools/gr86_model.mjs で座標変換・車輪分離・圧縮した assets/models/gr86.glb を使う
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import GLB from '../../assets/models/gr86.glb';

export const GR86_CREDIT = '86-GRの3Dモデル："Toyota GR86 (ZN8)" by Mona x Supercars (Sketchfab) — CC BY 4.0';
let template = null;
let loading = null;

export function loadGr86() {
  if (template) return Promise.resolve(template);
  if (!loading) {
    loading = new Promise((resolve) => {
      const loader = new GLTFLoader();
      loader.setMeshoptDecoder(MeshoptDecoder);
      const buf = GLB.buffer.slice(GLB.byteOffset, GLB.byteOffset + GLB.byteLength);
      loader.parse(buf, '', (gltf) => { template = gltf.scene; resolve(template); }, (e) => { console.error('GR86モデルの読み込みに失敗', e); resolve(null); });
    });
  }
  return loading;
}
export const gr86Ready = () => !!template;

const blackMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.6 });

// carDef: 86-GR, color: ボディ色, opts: { aero, wing }
export function buildGr86Model(carDef, color, opts = {}) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const src = template.clone(true);
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
      if (/^Paint1/.test(n)) c.color.copy(paint); // ボディ塗装
      if (/^FariFront/.test(n)) { c.emissive = new THREE.Color(0xfff2cc); c.emissiveIntensity = 1.4; c.emissiveMap = c.map; lightsFront.push({ material: c }); }
      // テールランプ（レンズ）：ブレーキで明るく
      if (/^Fari005|^Ln4/.test(n)) { c.emissive = new THREE.Color(0xff1a10); if (c.map) c.emissiveMap = c.map; c.emissiveIntensity = 0.7; tailMats.push(c); }
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
  const belt = 0.8, hl = L / 2;
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
  const wsBase = 0.72;
  root.userData = { exterior: [], body, wheels, lightsFront, tailMat, cockpit, steeringWheel, paint: null, belt: 0.74, wsBase, H, L, W, glb: true, driverX: 0.36 }; // このモデルは左ハンドル
  return root;
}
