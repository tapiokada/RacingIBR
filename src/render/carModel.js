// 手続き生成の車モデル（ローポリ）
import * as THREE from 'three';
import { buildGlbCarModel, hasGlbModel } from './glbCars.js';

const glassMat = new THREE.MeshStandardMaterial({ color: 0x0b0f16, metalness: 0.6, roughness: 0.15 });
const tireMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
const rimMat = new THREE.MeshStandardMaterial({ color: 0x9aa0a8, metalness: 0.9, roughness: 0.3 });
const blackMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.6 });
const headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2cc, emissiveIntensity: 1.6 });
const plateMat = new THREE.MeshStandardMaterial({ color: 0xe8e8e0, emissive: 0x333333 });

function profileShape(pts) {
  const s = new THREE.Shape();
  s.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
  s.closePath();
  return s;
}

function extrudeSide(pts, width, mat, bevel = 0.06) {
  const geo = new THREE.ExtrudeGeometry(profileShape(pts), {
    depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: 2, steps: 1,
  });
  geo.translate(0, 0, -(width - bevel * 2) / 2);
  geo.rotateY(-Math.PI / 2); // shape x(前後) → z, 押し出し(左右) → x
  const m = new THREE.Mesh(geo, mat);
  return m;
}

// carDef: data/cars.js のエントリ, color: 0xRRGGBB, opts: { aero, wing }
export function buildCarModel(carDef, color, opts = {}) {
  if (hasGlbModel(carDef.id)) return buildGlbCarModel(carDef, color, opts);
  const root = new THREE.Group();
  const body = new THREE.Group(); // ピッチ/ロール用
  root.add(body);
  const L = carDef.length, W = carDef.width, H = carDef.height;
  const b = carDef.body;
  const paint = new THREE.MeshStandardMaterial({ color, metalness: 0.25, roughness: 0.38, envMapIntensity: 0.8 });
  const exterior = [];
  const hl = L / 2;
  const belt = H * 0.56;
  const hoodLen = L * b.hood, tailLen = L * b.tail;
  const noseY = 0.52;
  const lower = [
    [-hl, 0.22], [hl - 0.08, 0.22], [hl, 0.34], [hl, noseY - 0.05], [hl - 0.12, noseY],
    [hl - hoodLen, belt], [-hl + tailLen, belt + 0.02], [-hl + 0.04, belt - 0.02], [-hl, belt - 0.12],
  ];
  const lowerMesh = extrudeSide(lower, W, paint);
  body.add(lowerMesh);

  // キャビン（グリーンハウス）
  const wsBase = hl - hoodLen;
  if (b.style === 'roadster') {
    const ws = extrudeSide([[wsBase, belt], [wsBase - 0.32, belt + 0.38], [wsBase - 0.38, belt + 0.38], [wsBase - 0.12, belt]], W * 0.86, glassMat, 0.02);
    body.add(ws);
    // ロールバー/ヘッドレスト
    for (const sx of [-0.33, 0.33]) {
      const hr = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.32, 0.12), blackMat);
      hr.position.set(sx, belt + 0.16, wsBase - 1.25);
      body.add(hr);
    }
    const tonneau = new THREE.Mesh(new THREE.BoxGeometry(W * 0.86, 0.05, 1.3), blackMat);
    tonneau.position.set(0, belt + 0.02, wsBase - 0.95);
    body.add(tonneau);
  } else {
    const roofLen = L * b.roof;
    const roofFront = wsBase - L * 0.15;
    const roofRear = roofFront - roofLen;
    let rearBase = -hl + tailLen;
    if (b.style === 'hatch') rearBase = -hl + 0.12;
    const cab = [
      [wsBase, belt], [roofFront, H], [roofRear, H],
      [b.style === 'hatch' ? rearBase + 0.08 : rearBase, b.style === 'hatch' ? belt + 0.1 : belt],
    ];
    const cabGlass = extrudeSide(cab, W * 0.84, glassMat, 0.04);
    body.add(cabGlass);
    // ルーフパネル（ボディ色）
    const roof = new THREE.Mesh(new THREE.BoxGeometry(W * 0.78, 0.05, Math.max(0.3, roofLen - 0.1)), paint);
    roof.position.set(0, H + 0.005, (roofFront + roofRear) / 2);
    body.add(roof);
    exterior.push(roof);
    // ピラー
    for (const sx of [-1, 1]) {
      const pts = [[wsBase, belt], [roofFront, H]];
      const dx = pts[1][0] - pts[0][0], dy = pts[1][1] - pts[0][1];
      const len = Math.hypot(dx, dy);
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, len), paint);
      p.position.set(sx * W * 0.42, (pts[0][1] + pts[1][1]) / 2, (pts[0][0] + pts[1][0]) / 2);
      p.rotation.x = -Math.atan2(dy, Math.abs(dx));
      body.add(p);
      exterior.push(p);
    }
  }
  if (b.scoop) {
    const scoop = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.08, 0.45), paint);
    scoop.position.set(0, belt - 0.02 + (noseY - belt) * 0.35, hl - hoodLen * 0.45);
    body.add(scoop);
  }

  // ウイング
  const wingType = opts.wing || b.wing;
  const addWing = (h, chord, width, mat) => {
    const wing = new THREE.Group();
    const plane = new THREE.Mesh(new THREE.BoxGeometry(width, 0.04, chord), mat);
    plane.position.y = h;
    wing.add(plane);
    for (const sx of [-1, 1]) {
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.05, h - belt, 0.12), blackMat);
      st.position.set(sx * width * 0.32, (h + belt) / 2, 0);
      wing.add(st);
    }
    wing.position.z = -hl + 0.28;
    body.add(wing);
  };
  if (wingType === 'gt') addWing(belt + 0.32, 0.3, W * 0.92, blackMat);
  else if (wingType === 'high') addWing(belt + 0.22, 0.22, W * 0.8, paint);
  else if (wingType === 'loop') addWing(belt + 0.14, 0.2, W * 0.86, paint);
  else if (wingType === 'duck') {
    const lip = new THREE.Mesh(new THREE.BoxGeometry(W * 0.8, 0.05, 0.12), paint);
    lip.position.set(0, belt + 0.05, -hl + 0.12);
    body.add(lip);
  } else if (wingType === 'roof') {
    const sp = new THREE.Mesh(new THREE.BoxGeometry(W * 0.75, 0.04, 0.22), paint);
    sp.position.set(0, H + 0.02, -hl + 0.25);
    body.add(sp);
  }
  if (opts.aero === 'aero_lip' || opts.aero === 'aero_full') {
    const lip = new THREE.Mesh(new THREE.BoxGeometry(W * 0.95, 0.04, 0.18), blackMat);
    lip.position.set(0, 0.2, hl - 0.05);
    body.add(lip);
  }
  if (opts.aero === 'aero_full') {
    for (const sx of [-1, 1]) {
      const sk = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, L * 0.5), blackMat);
      sk.position.set(sx * (W / 2 - 0.02), 0.22, 0);
      body.add(sk);
    }
  }

  // ライト
  const lightsFront = [];
  for (const sx of [-1, 1]) {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.08, 0.06), headMat.clone());
    h.position.set(sx * (W / 2 - 0.3), noseY - 0.06, hl - 0.06);
    body.add(h);
    lightsFront.push(h);
  }
  const tailMat = new THREE.MeshStandardMaterial({ color: 0x550000, emissive: 0xff1010, emissiveIntensity: 0.6 });
  for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.08, 0.05), tailMat);
    t.position.set(sx * (W / 2 - 0.28), belt - 0.12, -hl - 0.005);
    body.add(t);
  }
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.16, 0.02), plateMat);
  plate.position.set(0, 0.4, -hl - 0.01);
  body.add(plate);

  // ホイール
  const wheels = [];
  const R = carDef.tireRadius;
  const tireGeo = new THREE.CylinderGeometry(R, R, 0.22, 18);
  tireGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(R * 0.66, R * 0.66, 0.235, 10);
  rimGeo.rotateZ(Math.PI / 2);
  const spokeGeo = new THREE.BoxGeometry(0.24, R * 1.2, 0.06);
  const wbHalf = carDef.wheelbase / 2;
  for (const [sz, sx, tw] of [[1, -1, carDef.trackF], [1, 1, carDef.trackF], [-1, -1, carDef.trackR], [-1, 1, carDef.trackR]]) {
    const pivot = new THREE.Group(); // 操舵
    pivot.position.set(sx * (tw / 2), R, sz * wbHalf);
    const spin = new THREE.Group();
    spin.add(new THREE.Mesh(tireGeo, tireMat));
    spin.add(new THREE.Mesh(rimGeo, rimMat));
    const sp = new THREE.Mesh(spokeGeo, blackMat);
    spin.add(sp);
    const sp2 = sp.clone(); sp2.rotation.x = Math.PI / 2; spin.add(sp2);
    pivot.add(spin);
    root.add(pivot);
    wheels.push({ pivot, spin, front: sz > 0 });
  }

  // 影
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.15, L * 1.05), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.035;
  root.add(shadow);

  // 運転席（コクピット視点で表示）
  const cockpit = new THREE.Group();
  const dashMat = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: 0.85 });
  const dash = new THREE.Mesh(new THREE.BoxGeometry(W * 0.9, 0.2, 0.5), dashMat);
  dash.position.set(0, belt + 0.02, wsBase - 0.45);
  cockpit.add(dash);
  const hood = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.22), dashMat);
  hood.position.set(-0.37, belt + 0.14, wsBase - 0.62);
  cockpit.add(hood);
  const wheelGroup = new THREE.Group();
  const sw = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.022, 8, 24), new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 0.7 }));
  wheelGroup.add(sw);
  const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 0.02), dashMat);
  wheelGroup.add(spoke);
  const mark = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.05, 0.03), new THREE.MeshBasicMaterial({ color: 0xff3030 }));
  mark.position.y = 0.17; wheelGroup.add(mark);
  wheelGroup.position.set(-0.37, belt + 0.05, wsBase - 0.78);
  wheelGroup.rotation.x = -0.35;
  cockpit.add(wheelGroup);
  // Aピラー
  if (b.style !== 'roadster') {
    for (const sx of [-1, 1]) {
      const ap = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.6, 0.07), dashMat);
      ap.position.set(sx * W * 0.41, belt + 0.27, wsBase - 0.22);
      ap.rotation.x = -0.75;
      cockpit.add(ap);
    }
    const header = new THREE.Mesh(new THREE.BoxGeometry(W * 0.84, 0.06, 0.25), dashMat);
    header.position.set(0, H - 0.04, wsBase - L * 0.15 - 0.05);
    cockpit.add(header);
  }
  cockpit.visible = false;
  body.add(cockpit);

  root.userData = { exterior, body, wheels, lightsFront, tailMat, cockpit, steeringWheel: wheelGroup, paint, belt, wsBase, H, L, W };
  return root;
}

// 物理状態をモデルに反映
export function syncCarModel(model, car, extra = {}) {
  const u = model.userData;
  const off = (car.a - car.b) / 2; // ホイールベース中心はCGより前
  const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
  // 路面の高さ・傾き（坂・片勾配）で車全体を傾け、車体はサスペンションの姿勢分だけ動かす
  const gp = car.gp || 0, gr = car.gr || 0;
  model.position.set(car.x + f0 * off, (car.gy || 0) + off * Math.sin(gp), car.z + f1 * off);
  model.rotation.order = 'YXZ';
  model.rotation.y = car.h;
  model.rotation.x = -gp;
  model.rotation.z = gr;
  u.body.rotation.x = car.pitch;
  u.body.rotation.z = -car.roll;
  u.body.position.y = Math.max(-0.08, Math.min(0.1, car.heave || 0));
  for (const w of u.wheels) {
    w.pivot.rotation.y = w.front ? -car.steer : 0;
    w.spin.rotation.x = w.front ? car.spinF : car.spinR;
  }
  u.steeringWheel.rotation.z = car.steer * 9;
  const braking = car.input.brake > 0.05 && car.gear !== -1;
  u.tailMat.emissiveIntensity = braking ? 2.6 : 0.7;
  const flash = extra.flash || 0;
  for (const l of u.lightsFront) l.material.emissiveIntensity = (u.glb ? 1.2 : 1.4) + flash * 6;
}

// ヘッドライト（プレイヤー車のみ。路面と障害物を照らす）
export function addHeadlights(model) {
  const u = model.userData;
  const light = new THREE.SpotLight(0xfff1d6, 900, 110, 0.55, 0.55, 2);
  light.position.set(0, 0.75, u.L / 2 - 0.1);
  const target = new THREE.Object3D();
  target.position.set(0, 0, u.L / 2 + 22);
  u.body.add(light, target);
  light.target = target;
  const fill = new THREE.PointLight(0xffe8c8, 25, 14, 2);
  fill.position.set(0, 1.2, u.L / 2 + 3);
  u.body.add(fill);
  u.headlight = light;
  return light;
}
