// Practice FREE RUN：西池袋タウン（全道路を自由に走行）
import { DriveSession } from '../session.js';
import { Hud } from '../ui/hud.js';
import { AREAS, areaStart, arriveSpot } from '../data/map.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { pauseMenu } from './common.js';
import { TitleMode } from './title.js';
import { openSetup } from '../ui/setup.js';
import { savePracticeSetup } from '../save.js';
import { ShutoFreeMode, lanePose, LINK_SPEED } from './shutofree.js';
import { SHUTO5 } from '../physics/circuit.js';

export class TownFreeMode {
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const { carId, equipped, color } = this.opts;
    g.audio.playBgm('town');
    const area = (this.area = this.opts.area || 'west');
    g.setArea(area);
    g.world.setCourse(null);
    this.session = new DriveSession(g, { corridor: g.world.corridor });
    this.P = this.session.addCar({ carId, equipped, setup: this.opts.setup || null, color, isPlayer: true });
    const sp = this.opts.pos || areaStart(area);
    this.P.car.place(sp.x, sp.z, sp.h, this.opts.speed || 0);
    for (const gm of g.world.gateMarkers || []) gm.group.visible = true; // 首都高入口の看板（FREE RUN のみ）
    g.mirrorModel = this.P.model;
    if (g.rig.mode === 'gallery') g.rig.mode = 'chase';
    g.rig.reset();
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(null, area);
    this.session.onReset = () => this.hud.flash('RESET', 0.8);
    this.hud.flash(AREAS[area].touge ? AREAS[area].name : `${AREAS[area].name}タウン`, 2, AREAS[area].touge ? 'FREE RUN　県道33号（ゆうすげ入口〜伊香保温泉）を自由に走行　Escでメニュー' : 'FREE RUN　全道路を自由に走行できます　Escでメニュー');
  }

  update(dt) {
    const g = this.game;
    if (this.paused) return;
    if (g.input.hitCode('Escape')) { this.pause(); return; }
    this.session.update(dt);
    // エリア出口
    if (!this.leaving) for (const gm of g.world.gateMarkers) {
      if (Math.hypot(gm.x - this.P.car.x, gm.z - this.P.car.z) < 9) {
        if (gm.gate.to === 'shuto5') this.enterShuto(); // 首都高 北池袋入口：5号上りへ（40km/h で走っている状態から）
        else this.changeArea(gm.gate.to, arriveSpot(gm.gate));
        break;
      }
    }
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'near', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    this.session.updateAudio(this.P);
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    this.hud.tl.innerHTML = `<div class="who">${AREAS[this.area].name}${AREAS[this.area].touge ? '' : 'タウン'}</div><div class="hint">FREE RUN　R:リセット　Esc:メニュー</div>`;
    this.hud.drawMap([{ x: this.P.car.x, z: this.P.car.z, h: this.P.car.h, color: '#33e1ff' }]);
  }

  pause() {
    const g = this.game;
    this.paused = true;
    pauseMenu(g, 'PAUSE', [
      { label: '再開', action: () => { this.paused = false; } },
      { label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォースの調整とパワー/トルク曲線', action: () => this.openSetting() },
      { label: 'スタート地点へ戻る', action: () => g.transition(() => g.setMode(new TownFreeMode(g, { ...this.opts, pos: null }))) },
      ...Object.values(AREAS).filter((a) => a.id !== this.area && !a.hidden).map((a) => ({ label: `エリア切り替え：${a.name}へ`, action: () => this.changeArea(a.id, areaStart(a.id)) })),
      { label: 'PRACTICEメニューへ', action: () => g.transition(() => g.setMode(new TitleMode(g, 'practice'))) },
    ], () => { this.paused = false; });
  }

  openSetting() {
    const g = this.game;
    this.paused = true;
    openSetup(g, {
      carId: this.opts.carId, equipped: this.opts.equipped, setup: this.opts.setup,
      onChange: (S) => { this.opts.setup = S; this.session.applySetup(this.P, S); if (this.opts.setupKey) savePracticeSetup(this.opts.setupKey, S); },
      onClose: () => { g.input.pressed.clear(); this.paused = false; },
    });
  }

  enterShuto() {
    const g = this.game, o = this.opts;
    this.leaving = true;
    g.transition(() => g.setMode(new ShutoFreeMode(g, { carId: o.carId, equipped: o.equipped, color: o.color, setup: o.setup, setupKey: o.setupKey, area: 'shuto5', pose: lanePose(SHUTO5.U, 12), speed: LINK_SPEED })), 300);
  }

  changeArea(to, pos) {
    const g = this.game;
    this.leaving = true;
    this.session.controlsEnabled = false;
    g.transition(() => g.setMode(new TownFreeMode(g, { ...this.opts, area: to, pos })), 450);
  }

  exit() {
    this.session.dispose();
    this.hud.destroy();
    this.game.mirrorModel = null;
  }
}
