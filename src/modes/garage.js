// ガレージ（ポーズメニューから）：①車を全方位から確認 ②乗り換え ③セッティング
import * as THREE from 'three';
import { el, Menu, panel } from '../ui/ui.js';
import { CARS } from '../data/cars.js';
import { PART_BY_ID, CATEGORIES } from '../data/parts.js';
import { buildSpec } from '../physics/spec.js';
import { buildCarModel, syncCarModel } from '../render/carModel.js';
import { activeCar } from '../save.js';
import { openSetup } from '../ui/setup.js';
import { powerGraph } from '../ui/graph.js';
import { canvasTex } from '../render/world.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const DRIVE_NAME = { FR: 'FR（後輪駆動）', FF: 'FF（前輪駆動）', AWD: 'AWD（四輪駆動）' };
const VIEWS = { Digit1: [0, 0.15, '前'], Digit2: [Math.PI, 0.15, '後'], Digit3: [Math.PI / 2, 0.12, '左'], Digit4: [-Math.PI / 2, 0.12, '右'], Digit5: [0.6, 1.45, '真上'], Digit6: [0.6, -0.5, '真下'] };

export class GarageMode {
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const st = g.story;
    g.audio.playBgm('town');
    this.idx = st.active;
    this.yaw = 0.7; this.pitch = 0.2; this.dist = 9;
    this.tYaw = this.yaw; this.tPitch = this.pitch; this.tDist = this.dist;
    this.autoSpin = true;
    this.chassisView = true;
    this.buildScene();
    // 描画対象をガレージのシーンに差し替える（街へ戻るときにエリアのワールドへ戻す）
    this.prevWorld = g.world;
    g.world = { scene: this.scene, update: () => {}, setCourse: () => {} };
    this.root = el('div', { class: 'screen garage' });
    g.ui.appendChild(this.root);
    this.showCar();
    this.bindMouse();
  }

  buildScene() {
    const S = (this.scene = new THREE.Scene());
    S.background = new THREE.Color(0x0b0d12);
    const pm = new THREE.PMREMGenerator(this.game.renderer);
    S.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    S.environmentIntensity = 0.6;
    S.add(new THREE.HemisphereLight(0xdfe8ff, 0x303038, 1.4));
    for (const [x, z] of [[-5, -5], [5, -5], [0, 6]]) {
      const L = new THREE.SpotLight(0xffffff, 260, 30, 0.7, 0.5, 1.5);
      L.position.set(x, 7, z); L.target.position.set(0, 0, 0);
      S.add(L, L.target);
    }
    // 床（ガラス張りのリフト台：真下からも見える）
    const tex = canvasTex(512, 512, (c, w, h) => {
      c.fillStyle = '#2a2d34'; c.fillRect(0, 0, w, h);
      c.strokeStyle = 'rgba(255,255,255,0.12)'; c.lineWidth = 2;
      for (let i = 0; i <= 8; i++) { c.beginPath(); c.moveTo(i * 64, 0); c.lineTo(i * 64, h); c.stroke(); c.beginPath(); c.moveTo(0, i * 64); c.lineTo(w, i * 64); c.stroke(); }
    });
    tex.repeat.set(6, 6);
    this.floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.2, transparent: true, opacity: 1 }));
    this.floor.rotation.x = -Math.PI / 2;
    S.add(this.floor);
    const ring = new THREE.Mesh(new THREE.RingGeometry(3.3, 3.45, 64), new THREE.MeshBasicMaterial({ color: 0x33e1ff }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.01; S.add(ring);
    // 壁
    const wall = new THREE.MeshStandardMaterial({ color: 0x1a1d24, roughness: 0.9, side: THREE.BackSide });
    const room = new THREE.Mesh(new THREE.BoxGeometry(40, 14, 40), wall);
    room.position.y = 6.99; S.add(room);
  }

  // 選択中の車を表示（シャシー表示：重心・軸・駆動輪・空力）
  showCar() {
    const g = this.game;
    const st = g.story;
    const car = st.garage[this.idx];
    if (this.model) this.scene.remove(this.model);
    if (this.helpers) this.scene.remove(this.helpers);
    const def = CARS[car.carId];
    this.spec = buildSpec(car.carId, car.equipped, car.setup || null);
    const sp = this.spec;
    const m = buildCarModel(def, car.color, { aero: car.equipped.aero, wing: car.equipped.aero === 'aero_wing' || car.equipped.aero === 'aero_full' ? 'gt' : undefined });
    const L = sp.wheelbase, b = L * sp.frontWeight, a = L - b;
    this.stub = { x: 0, z: 0, h: 0, a, b, gy: 0, gp: 0, gr: 0, heave: 0, pitch: 0, roll: 0, steer: 0, spinF: 0, spinR: 0, gear: 1, input: { brake: 0, throttle: 0, steer: 0 } };
    syncCarModel(m, this.stub);
    m.position.set(0, 0, 0); // ホイールベース中心を原点に
    this.scene.add(m);
    this.model = m;
    // シャシー表示
    const H = new THREE.Group();
    const off = (a - b) / 2; // ホイールベース中心→重心（後ろ向き正のずれ）
    const cg = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffd23f, depthTest: false }));
    cg.position.set(0, sp.cgHeight, -off); cg.renderOrder = 10; H.add(cg);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x33e1ff, depthTest: false });
    const seg = (p, q, mat = lineMat) => { const geo = new THREE.BufferGeometry().setFromPoints([p, q]); const l = new THREE.Line(geo, mat); l.renderOrder = 10; H.add(l); };
    const R = sp.tireRadius;
    const zF = L / 2, zR = -L / 2;
    seg(new THREE.Vector3(-sp.trackF / 2, R, zF), new THREE.Vector3(sp.trackF / 2, R, zF));
    seg(new THREE.Vector3(-sp.trackR / 2, R, zR), new THREE.Vector3(sp.trackR / 2, R, zR));
    seg(new THREE.Vector3(0, R, zF), new THREE.Vector3(0, R, zR));
    seg(new THREE.Vector3(0, sp.cgHeight, -off), new THREE.Vector3(0, 0.02, -off), new THREE.LineBasicMaterial({ color: 0xffd23f, depthTest: false }));
    // 駆動輪（緑のリング）
    const driven = sp.drive === 'FF' ? [zF] : sp.drive === 'FR' ? [zR] : [zF, zR];
    for (const z of driven) for (const sx of [-1, 1]) {
      const tw = z === zF ? sp.trackF : sp.trackR;
      const r = new THREE.Mesh(new THREE.TorusGeometry(R * 1.12, 0.025, 6, 32), new THREE.MeshBasicMaterial({ color: 0x2ee6a8, depthTest: false }));
      r.rotation.y = Math.PI / 2; r.position.set(sx * (tw / 2 + 0.14), R, z); r.renderOrder = 10; H.add(r);
    }
    // 空力（200km/h時）：下向き＝ダウンフォース（青）、上向き＝揚力（赤）
    const q = 0.5 * 1.2 * (200 / 3.6) ** 2 * sp.area;
    for (const [z, cl] of [[zF, sp.clF], [zR, sp.clR]]) {
      const kgf = (cl * q) / 9.81;
      const len = Math.min(1.6, Math.abs(kgf) / 60 + 0.2);
      const dir = new THREE.Vector3(0, kgf >= 0 ? -1 : 1, 0);
      const from = new THREE.Vector3(0, def.height + 0.35 + (kgf >= 0 ? len : 0), z);
      const arr = new THREE.ArrowHelper(dir, from, len, kgf >= 0 ? 0x4f8bff : 0xff4d6d, 0.18, 0.12);
      arr.traverse((o) => { if (o.material) { o.material.depthTest = false; o.renderOrder = 10; } });
      H.add(arr);
    }
    H.visible = this.chassisView;
    this.helpers = H;
    this.scene.add(H);
    this.buildPanel();
  }

  buildPanel() {
    const g = this.game;
    const st = g.story;
    const car = st.garage[this.idx];
    const def = CARS[car.carId];
    const sp = this.spec;
    this.root.innerHTML = '';
    const list = el('div', { class: 'garage-list' });
    st.garage.forEach((c, i) => {
      const s2 = i === this.idx ? sp : buildSpec(c.carId, c.equipped, c.setup || null);
      const row = el('div', { class: 'garage-row' + (i === this.idx ? ' sel' : ''), onclick: () => { this.idx = i; this.showCar(); } },
        el('b', {}, CARS[c.carId].name), i === st.active ? el('span', { class: 'tag' }, '乗車中') : '',
        el('small', {}, `${CARS[c.carId].drive}　${s2.maxPowerPS.toFixed(0)}PS　${s2.mass.toFixed(0)}kg　戦闘力 ${s2.rating}`),
        el('small', {}, `${c.year ? c.year + '年式　' : ''}${c.colorName ? c.colorName + '　' : ''}走行 ${Math.round(c.km || 0).toLocaleString('ja-JP')}km　燃料 ${(typeof c.fuel === 'number' ? c.fuel : CARS[c.carId].tank).toFixed(0)}/${CARS[c.carId].tank}L`));
      list.appendChild(row);
    });
    const q = 0.5 * 1.2 * (200 / 3.6) ** 2 * sp.area / 9.81;
    const fw = sp.frontWeight;
    const rows = [
      ['シャシー', ''],
      ['駆動方式', DRIVE_NAME[sp.drive] + (sp.center ? `　センターデフ 前${Math.round(sp.center.split * 100)}:後${Math.round(100 - sp.center.split * 100)}${sp.center.visc ? '（後輪空転で前へ伝達）' : ''}` : '')],
      ['ホイールベース／トレッド前後', `${sp.wheelbase.toFixed(3)} m ／ ${sp.trackF.toFixed(3)}・${sp.trackR.toFixed(3)} m`],
      ['車両重量／前後重量配分', `${sp.mass.toFixed(0)} kg ／ ${Math.round(fw * 100)} : ${Math.round(100 - fw * 100)}`],
      ['重心高', `${(sp.cgHeight * 1000).toFixed(0)} mm`],
      ['ヨー慣性モーメント', `${Math.round(sp.mass * sp.wheelbase * fw * sp.wheelbase * (1 - fw) * (def.yawK || 0.95) * 1.08)} kg·m²`],
      ['ロール剛性配分（前）', `${(sp.rollFront * 100).toFixed(0)} %`],
      ['ボディ（空力）', ''],
      ['Cd／前面投影面積／CdA', `${sp.cd.toFixed(3)} ／ ${sp.area.toFixed(2)} m² ／ ${(sp.cd * sp.area).toFixed(3)}`],
      ['揚力(+)/ダウンフォース(−) 200km/h', `前 ${(-sp.clF * q).toFixed(0)} kgf ／ 後 ${(-sp.clR * q).toFixed(0)} kgf`],
      ['全長×全幅×全高', `${def.length}×${def.width}×${def.height} m`],
    ];
    const info = el('div', { class: 'stats garage-spec' }, ...rows.map(([k, v]) => (v === '' ? el('div', { class: 'key-sep' }, k) : el('div', { class: 'stat' }, el('span', {}, k), el('b', {}, v)))));
    const parts = el('div', { class: 'garage-parts' }, ...CATEGORIES.map((c) => { const p = car.equipped[c.id] ? PART_BY_ID[car.equipped[c.id]] : null; return p ? el('span', {}, `${c.name}：${p.name}`) : ''; }));
    const left = panel(`GARAGE（${st.garage.length}台）`, list,
      el('div', { class: 'hint' }, '↑↓：車を選ぶ　Enter：乗り換え／セッティング　Esc：街へ戻る'),
      el('div', { class: 'hint' }, '←→：回転　Z/X：上下　C/V：寄る/離れる　1〜6：前/後/左/右/真上/真下　G：シャシー表示　ドラッグ・ホイールでも操作'));
    const right = panel(`${def.name}`, el('div', { class: 'hint' }, def.ref), info,
      el('div', { class: 'key-sep' }, 'パワー・トルク曲線（点線：純正）'), powerGraph(sp, buildSpec(car.carId, def.stock), { w: 300, h: 140 }), parts,
      el('div', { class: 'hint legend' }, '黄：重心　水色：車軸　緑：駆動輪　矢印：空力（青＝ダウンフォース、赤＝揚力）'));
    left.classList.add('garage-left'); right.classList.add('garage-right');
    this.root.append(left, right);
    this.viewLabel = el('div', { class: 'garage-view' }, '');
    this.root.appendChild(this.viewLabel);
  }

  bindMouse() {
    const cv = this.game.renderer.domElement;
    let drag = null;
    this.onDown = (e) => { drag = { x: e.clientX, y: e.clientY }; this.autoSpin = false; };
    this.onMove = (e) => { if (!drag) return; this.tYaw -= (e.clientX - drag.x) * 0.008; this.tPitch = Math.max(-0.7, Math.min(1.5, this.tPitch + (e.clientY - drag.y) * 0.006)); drag = { x: e.clientX, y: e.clientY }; };
    this.onUp = () => { drag = null; };
    this.onWheel = (e) => { this.tDist = Math.max(4, Math.min(16, this.tDist + Math.sign(e.deltaY) * 0.5)); };
    cv.addEventListener('pointerdown', this.onDown);
    window.addEventListener('pointermove', this.onMove);
    window.addEventListener('pointerup', this.onUp);
    cv.addEventListener('wheel', this.onWheel);
  }

  openActions() {
    const g = this.game;
    const st = g.story;
    const car = st.garage[this.idx];
    this.busy = true;
    const box = panel(CARS[car.carId].name);
    const dlg = el('div', { class: 'screen dialog' }, box);
    const close = () => { g.input.pressed.clear(); menu.destroy(); dlg.remove(); this.busy = false; };
    const menu = new Menu(g, [
      {
        label: 'この車に乗り換える', disabled: this.idx === st.active, sub: this.idx === st.active ? '現在乗っている車です' : '街へ戻るとこの車で走ります',
        action: () => { close(); st.active = this.idx; g.audio.beep(1000, 0.08, 0.12); this.buildPanel(); this.flash = `${CARS[car.carId].name} に乗り換えました`; this.flashT = 2; },
      },
      {
        label: 'セッティング', sub: '★5フルカスタマイズパーツ／調整式エアロの調整（パーツの交換はチューニングショップで）',
        action: () => {
          close();
          this.busy = true;
          this.root.style.display = 'none';
          openSetup(g, {
            carId: car.carId, equipped: car.equipped, setup: car.setup,
            onChange: (S) => { car.setup = S; },
            onClose: () => { g.input.pressed.clear(); this.busy = false; this.root.style.display = ''; this.showCar(); },
          });
        },
      },
      { label: 'キャンセル', action: () => close() },
    ], { onBack: () => close() });
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
  }

  update(dt) {
    const g = this.game;
    const inp = g.input;
    const st = g.story;
    if (!this.busy) {
      if (inp.hitCode('Escape')) { this.leave(); return; }
      if (inp.hitCode('ArrowDown')) { this.idx = (this.idx + 1) % st.garage.length; this.showCar(); }
      if (inp.hitCode('ArrowUp')) { this.idx = (this.idx - 1 + st.garage.length) % st.garage.length; this.showCar(); }
      if (inp.hitCode('Enter')) this.openActions();
      if (inp.hitCode('KeyG')) { this.chassisView = !this.chassisView; this.helpers.visible = this.chassisView; }
      for (const [k, [y, p, name]] of Object.entries(VIEWS)) if (inp.hitCode(k)) { this.tYaw = y; this.tPitch = p; this.autoSpin = false; this.viewLabel.textContent = name; }
      const rot = (inp.down.has('ArrowLeft') ? 1 : 0) - (inp.down.has('ArrowRight') ? 1 : 0);
      if (rot) { this.tYaw += rot * dt * 1.6; this.autoSpin = false; }
      const pv = (inp.down.has('KeyZ') ? 1 : 0) - (inp.down.has('KeyX') ? 1 : 0);
      if (pv) { this.tPitch = Math.max(-0.7, Math.min(1.5, this.tPitch + pv * dt * 1.0)); this.autoSpin = false; }
      const zv = (inp.down.has('KeyV') ? 1 : 0) - (inp.down.has('KeyC') ? 1 : 0);
      if (zv) this.tDist = Math.max(4, Math.min(16, this.tDist + zv * dt * 5));
    }
    if (this.autoSpin) this.tYaw += dt * 0.25;
    const k = 1 - Math.exp(-dt * 6);
    this.yaw += (this.tYaw - this.yaw) * k; this.pitch += (this.tPitch - this.pitch) * k; this.dist += (this.tDist - this.dist) * k;
    const cam = g.rig.camera;
    const cy = 0.6;
    cam.position.set(Math.sin(this.yaw) * Math.cos(this.pitch) * this.dist, cy + Math.sin(this.pitch) * this.dist, Math.cos(this.yaw) * Math.cos(this.pitch) * this.dist);
    cam.lookAt(0, cy, 0);
    // 左右のパネルの間（やや左寄り）に車を写す：カメラの右方向へずらす
    const W = window.innerWidth;
    const shift = ((W - 360 - 12) / 2 + (280 + 12) / 2 - W / 2) / W; // 画面幅に対する中心のずれ
    cam.fov = 45; cam.updateProjectionMatrix();
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const span = 2 * this.dist * Math.tan((cam.fov * Math.PI) / 360) * cam.aspect;
    cam.position.addScaledVector(right, -shift * span);
    // 床より下から見るときは床を透かす
    this.floor.material.opacity = cam.position.y < 0.05 ? 0.15 : 1;
    if (this.flashT > 0) { this.flashT -= dt; this.viewLabel.textContent = this.flash; }
  }

  leave() {
    const g = this.game;
    const TownMode = this.opts.townMode;
    g.transition(() => g.setMode(new TownMode(g, { area: this.opts.area, returnPos: this.opts.returnPos, message: `${CARS[activeCar(g.story).carId].name} で出発`, view: this.opts.view })));
  }

  exit() {
    const cv = this.game.renderer.domElement;
    cv.removeEventListener('pointerdown', this.onDown);
    window.removeEventListener('pointermove', this.onMove);
    window.removeEventListener('pointerup', this.onUp);
    cv.removeEventListener('wheel', this.onWheel);
    if (this.game.world && this.game.world.scene === this.scene) this.game.world = this.prevWorld;
  }
}
