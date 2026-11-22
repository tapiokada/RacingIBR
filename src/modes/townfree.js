// Practice FREE RUN：西池袋タウン（全道路を自由に走行）
import { DriveSession } from '../session.js';
import { Hud } from '../ui/hud.js';
import { NODES, START_SPOT } from '../data/map.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { pauseMenu } from './common.js';
import { TitleMode } from './title.js';

export class TownFreeMode {
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const { carId, equipped, color } = this.opts;
    g.audio.playBgm('town');
    g.world.setCourse(null);
    this.session = new DriveSession(g, { corridor: g.world.corridor });
    this.P = this.session.addCar({ carId, equipped, color, isPlayer: true });
    const n = NODES[START_SPOT.node];
    this.P.car.place(n.x - 2.5, n.z + 22, START_SPOT.heading, 0);
    g.mirrorModel = this.P.model;
    if (g.rig.mode === 'gallery') g.rig.mode = 'chase';
    g.rig.reset();
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(null);
    this.session.onReset = () => this.hud.flash('RESET', 0.8);
    this.hud.flash('西池袋タウン', 2, 'FREE RUN　全道路を自由に走行できます　Escでメニュー');
  }

  update(dt) {
    const g = this.game;
    if (this.paused) return;
    if (g.input.hitCode('Escape')) { this.pause(); return; }
    this.session.update(dt);
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    this.session.updateAudio(this.P);
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    this.hud.tl.innerHTML = '<div class="who">西池袋タウン</div><div class="hint">FREE RUN　R:リセット　Esc:メニュー</div>';
    this.hud.drawMap([{ x: this.P.car.x, z: this.P.car.z, h: this.P.car.h, color: '#33e1ff' }]);
  }

  pause() {
    const g = this.game;
    this.paused = true;
    pauseMenu(g, 'PAUSE', [
      { label: '再開', action: () => { this.paused = false; } },
      { label: 'スタート地点へ戻る', action: () => g.transition(() => g.setMode(new TownFreeMode(g, this.opts))) },
      { label: 'PRACTICEメニューへ', action: () => g.transition(() => g.setMode(new TitleMode(g, 'practice'))) },
    ], () => { this.paused = false; });
  }

  exit() {
    this.session.dispose();
    this.hud.destroy();
    this.game.mirrorModel = null;
  }
}
