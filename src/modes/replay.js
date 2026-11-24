// リプレイ再生（運転席 / 後方 / ボンネット / ギャラリー）
import { buildCarModel, syncCarModel, addHeadlights } from '../render/carModel.js';
import { CARS } from '../data/cars.js';
import { buildSpec } from '../physics/spec.js';
import { Hud } from '../ui/hud.js';
import { fmtTime } from '../save.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { coursePath } from './town.js';
import { areaOfLayout } from '../data/map.js';
import { keyLabel } from '../input.js';

const VIEWS = ['chase', 'cockpit', 'hood', 'gallery'];

export class ReplayMode {
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const { layout, replay } = this.opts;
    g.setArea(areaOfLayout(layout));
    this.path = coursePath(layout);
    g.world.setCourse(this.path);
    g.rig.setGallerySpots(this.path);
    g.audio.playBgm(null);
    const spec = buildSpec(replay.carId, replay.equipped, replay.setup || null);
    this.model = buildCarModel(CARS[replay.carId], replay.color, { aero: replay.equipped.aero, wing: replay.equipped.aero === 'aero_wing' || replay.equipped.aero === 'aero_full' ? 'gt' : undefined });
    g.world.scene.add(this.model);
    addHeadlights(this.model);
    const L = spec.wheelbase;
    const b = L * spec.frontWeight;
    this.ghost = {
      spec, a: L - b, b, x: 0, z: 0, h: 0, pitch: 0, roll: 0, gy: 0, gp: 0, gr: 0, heave: 0, steer: 0, spinF: 0, spinR: 0, rpm: 0, vu: 0, vv: 0, gear: 1, boost: 0, slip: 0,
      input: { brake: 0, throttle: 0, steer: 0 },
      get speed() { return Math.abs(this.vu); },
      groundAt: (x, z) => (g.world.ground ? g.world.ground.h(x, z) : 0),
      right() { return [-Math.cos(this.h), Math.sin(this.h)]; },
    };
    this.engine = g.audio.createEngine(spec);
    this.t = 0;
    this.speed = 1;
    this.playing = true;
    this.duration = replay.frames / replay.rate;
    g.rig.mode = 'chase';
    g.rig.reset();
    g.mirrorModel = this.model;
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(this.path, areaOfLayout(layout));
    this.hud.flash('REPLAY', 1.5, layout.name);
    this.hud.setView(VIEW_NAMES[g.rig.mode]);
  }

  frame(t) {
    const r = this.opts.replay;
    const f = Math.min(r.frames - 1.001, Math.max(0, t * r.rate));
    const i = Math.floor(f), k = f - i;
    const d = r.data, S = r.stride;
    const a = i * S, b = (i + 1) * S;
    const lerp = (j) => d[a + j] + (d[b + j] - d[a + j]) * k;
    const G = this.ghost;
    G.x = lerp(0); G.z = lerp(1);
    let dh = d[b + 2] - d[a + 2];
    if (dh > Math.PI) dh -= Math.PI * 2; if (dh < -Math.PI) dh += Math.PI * 2;
    G.h = d[a + 2] + dh * k;
    G.pitch = lerp(3); G.roll = lerp(4); G.steer = lerp(5); G.spinF = lerp(6); G.spinR = lerp(7);
    G.rpm = lerp(8); G.vu = lerp(9); G.gear = d[a + 10]; G.input.brake = d[a + 11]; G.input.throttle = d[a + 12];
    G.boost = lerp(13); G.slip = lerp(14);
    if (S >= 19) { G.gy = lerp(15); G.gp = lerp(16); G.gr = lerp(17); G.heave = lerp(18); }
  }

  update(dt) {
    const g = this.game;
    const inp = g.input;
    if (inp.hitCode('Escape')) { g.transition(() => g.setMode(this.opts.back())); return; }
    if (inp.hitCode('Space')) this.playing = !this.playing;
    if (inp.hitCode('ArrowRight')) this.t = Math.min(this.duration, this.t + 5);
    if (inp.hitCode('ArrowLeft')) this.t = Math.max(0, this.t - 5);
    if (inp.hitCode('ArrowUp')) this.speed = Math.min(4, this.speed * 2);
    if (inp.hitCode('ArrowDown')) this.speed = Math.max(0.25, this.speed / 2);
    if (inp.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(VIEWS)]);
    for (let n = 1; n <= 4; n++) if (inp.hitCode('Digit' + n)) { g.rig.mode = VIEWS[n - 1]; g.rig.reset(); g.rig.galleryIdx = -1; this.hud.setView(VIEW_NAMES[g.rig.mode]); }
    if (inp.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    if (this.playing) this.t += dt * this.speed;
    if (this.t >= this.duration) { this.t = 0; g.rig.reset(); }
    this.frame(this.t);
    syncCarModel(this.model, this.ghost);
    g.rig.update(dt, this.model, this.ghost);
    g.audio.updateEngine(this.engine, this.ghost, this.playing ? 1 : 0, 0);
    this.hud.update(dt);
    this.hud.drawTach(this.ghost);
    const rec = this.opts.record;
    this.hud.tc.innerHTML = `<div class="lap">REPLAY ${this.playing ? '▶' : '❚❚'} ×${this.speed}</div><div class="time">${fmtTime(this.t)} / ${fmtTime(this.duration)}</div>`;
    this.hud.tr.innerHTML = rec ? `<div class="lbl">BEST</div><div class="big">${fmtTime(rec.best)}</div><div class="laps">${rec.laps.map((l, i) => `<div>L${i + 1} ${fmtTime(l)}</div>`).join('')}</div>` : '';
    this.hud.tl.innerHTML = `<div class="who">${this.opts.layout.name}</div><div class="hint">視点 ${keyLabel(g.settings.keys.view)} / 1-4　一時停止 Space　早送り/巻戻し ←→　速度 ↑↓　終了 Esc</div>`;
    this.hud.drawMap([{ x: this.ghost.x, z: this.ghost.z, h: this.ghost.h, color: '#33e1ff' }]);
  }

  exit() {
    const g = this.game;
    g.world.scene.remove(this.model);
    g.audio.destroyEngine(this.engine);
    this.hud.destroy();
    g.world.setCourse(null);
    g.mirrorModel = null;
  }
}
