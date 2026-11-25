// 小さな3Dプレビュー（中古車店で選択中の車を回転表示）
import * as THREE from 'three';
import { buildCarModel, syncCarModel } from '../render/carModel.js';
import { CARS } from '../data/cars.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export class CarPreview {
  constructor(w = 340, h = 200) {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'car-preview';
    this.canvas.style.width = `${w}px`; this.canvas.style.height = `${h}px`;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(w, h, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;
    const S = (this.scene = new THREE.Scene());
    S.background = new THREE.Color(0x14171f);
    S.environment = new THREE.PMREMGenerator(this.renderer).fromScene(new RoomEnvironment(), 0.04).texture;
    S.environmentIntensity = 0.7;
    S.add(new THREE.HemisphereLight(0xdfe8ff, 0x30303a, 1.3));
    const d = new THREE.DirectionalLight(0xffffff, 1.6); d.position.set(4, 8, 5); S.add(d);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(4.2, 48), new THREE.MeshStandardMaterial({ color: 0x2a2e38, roughness: 0.6 }));
    floor.rotation.x = -Math.PI / 2; S.add(floor);
    this.camera = new THREE.PerspectiveCamera(32, w / h, 0.1, 100);
    this.ang = 0.8; this.model = null; this.key = null;
    this.alive = true;
    const loop = () => { if (!this.alive) return; this.render(); this.raf = requestAnimationFrame(loop); };
    this.last = performance.now();
    loop();
  }

  show(carId, color, equipped = {}) {
    const key = `${carId}|${color}|${equipped.aero || ''}`;
    if (key === this.key) return;
    this.key = key;
    if (this.model) this.scene.remove(this.model);
    if (!carId) { this.model = null; return; }
    const def = CARS[carId];
    const m = buildCarModel(def, color, { aero: equipped.aero, tirewidth: equipped.tirewidth, wheel: equipped.wheel, wing: equipped.aero === 'aero_wing' || equipped.aero === 'aero_full' ? 'gt' : undefined });
    syncCarModel(m, { x: 0, z: 0, h: 0, a: 0, b: 0, gy: 0, gp: 0, gr: 0, heave: 0, pitch: 0, roll: 0, steer: 0, spinF: 0, spinR: 0, gear: 1, input: { brake: 0, throttle: 0, steer: 0 } });
    m.position.set(0, 0, 0);
    m.userData.cockpit.visible = false;
    this.scene.add(m);
    this.model = m;
  }

  render() {
    const now = performance.now(), dt = Math.min(0.05, (now - this.last) / 1000); this.last = now;
    this.ang += dt * 0.5;
    const r = 8.2;
    this.camera.position.set(Math.sin(this.ang) * r, 2.6, Math.cos(this.ang) * r);
    this.camera.lookAt(0, 0.55, 0);
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.alive = false;
    cancelAnimationFrame(this.raf);
    this.renderer.dispose();
    this.renderer.forceContextLoss?.();
  }
}
