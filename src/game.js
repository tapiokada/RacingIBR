// ゲーム本体：レンダラ・ループ・モード切替
import * as THREE from 'three';
import { World } from './render/world.js';
import { CameraRig } from './render/cameras.js';
import { Input, loadSettings } from './input.js';
import { AudioSys } from './audio.js';
import { el } from './ui/ui.js';

export class Game {
  constructor(container) {
    this.container = container;
    this.settings = loadSettings();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.4;
    container.appendChild(this.renderer.domElement);
    this.ui = el('div', { class: 'ui-root' });
    container.appendChild(this.ui);
    this.overlay = el('div', { class: 'fade-overlay' });
    container.appendChild(this.overlay);
    this.input = new Input(this.settings);
    this.audio = new AudioSys(this.settings);
    this.world = new World(this.renderer);
    this.rig = new CameraRig(window.innerWidth / window.innerHeight);
    this.mode = null;
    this.mirrorOn = false;
    this.story = null; // 進行中のストーリー状態
    this.clock = performance.now();
    this.t = 0;
    window.addEventListener('resize', () => this.resize());
    const unlock = () => this.audio.unlock();
    window.addEventListener('keydown', unlock);
    window.addEventListener('pointerdown', unlock);
    requestAnimationFrame(() => this.loop());
  }

  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rig.camera.aspect = window.innerWidth / window.innerHeight;
    this.rig.camera.updateProjectionMatrix();
  }

  setMode(m) {
    if (this.mode && this.mode.exit) this.mode.exit();
    this.ui.innerHTML = '';
    this.input.pressed.clear();
    this.mirrorOn = false;
    this.mode = m;
    if (m.enter) m.enter();
  }

  // 暗転しながら切替
  async transition(fn, ms = 350) {
    this.overlay.classList.add('on');
    await new Promise((r) => setTimeout(r, ms));
    await fn();
    await new Promise((r) => setTimeout(r, 60));
    this.overlay.classList.remove('on');
  }

  loop() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.clock) / 1000);
    this.clock = now;
    this.t += dt;
    try {
      if (this.mode && this.mode.update) this.mode.update(dt);
      this.world.update(this.t);
      this.render();
    } catch (e) {
      console.error(e);
    }
    this.input.endFrame();
    requestAnimationFrame(() => this.loop());
  }

  // テスト用：描画せずにシミュレーションを進める
  debugStep(sec, dt = 1 / 60) {
    for (let t = 0; t < sec; t += dt) {
      if (this.mode && this.mode.update) this.mode.update(dt);
      this.input.endFrame();
    }
  }

  render() {
    const r = this.renderer;
    const W = window.innerWidth, H = window.innerHeight;
    r.setScissorTest(false);
    r.setViewport(0, 0, W, H);
    r.render(this.world.scene, this.rig.camera);
    if (this.mirrorOn && this.mirrorModel) {
      const mw = Math.round(W * 0.3), mh = Math.round(mw / 3.2);
      const x = Math.round((W - mw) / 2), y = H - mh - 14;
      this.rig.updateMirror(this.mirrorModel);
      this.rig.mirrorCam.aspect = mw / mh;
      this.rig.mirrorCam.updateProjectionMatrix();
      const cv = this.mirrorModel.userData.cockpit.visible;
      this.mirrorModel.userData.cockpit.visible = false;
      r.setScissorTest(true);
      r.setScissor(x, y, mw, mh);
      r.setViewport(x, y, mw, mh);
      r.render(this.world.scene, this.rig.mirrorCam);
      r.setScissorTest(false);
      this.mirrorModel.userData.cockpit.visible = cv;
    }
  }
}
