// ストーリー：サーキット走行会（つくば山麓サーキット）
// 参加費を払って、ストーリーのマシン（チューニング・セッティング・燃料そのまま）で1枠15分を自由に周回する。
// コントロールラインを通過した周からタイム計測（フライングラップ）。ベストラップは走行会の記録として残る。
import { DriveSession } from '../session.js';
import { Hud } from '../ui/hud.js';
import { el, Menu, panel } from '../ui/ui.js';
import { CARS, PLAYER } from '../data/cars.js';
import { activeCar, fuelState, fmtMoney, fmtTime, recordCircuitLap } from '../save.js';
import { openSetup } from '../ui/setup.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { LapTracker, pauseMenu } from './common.js';
import { coursePath } from './town.js';
import { areaOfLayout } from '../data/map.js';

export const SESSION_TIME = 15 * 60; // 1枠の走行時間[秒]

export class TrackDayMode {
  // opts: { layout, returnPos, townMode }
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const { layout } = this.opts;
    const path = coursePath(layout);
    this.path = path;
    this.area = areaOfLayout(layout);
    g.setArea(this.area);
    g.audio.playBgm('town');
    g.world.setCourse(path);
    g.rig.setGallerySpots(path);
    this.session = new DriveSession(g, { corridor: path.corridor, path });
    const mine = activeCar(g.story);
    this.mine = mine;
    const P = this.session.addCar({ carId: mine.carId, equipped: mine.equipped, setup: mine.setup || null, color: mine.color, isPlayer: true, name: PLAYER.name, fuel: fuelState(mine) });
    // ホームストレートのグリッド後方からスタート（1周目はアウトラップ）
    const sp = path.posAt(-110, -2.5);
    P.car.place(sp.x, sp.z, sp.h, 0);
    // 走行会は1枠15分を走り切れるように、燃料は実燃費どおりに減る（街・バトルは実燃費の5倍）
    P.car.fuelRate = 1;
    this.P = P;
    this.tracker = new LapTracker(path, -110);
    g.mirrorModel = P.model;
    if (g.rig.mode === 'gallery') g.rig.mode = 'chase';
    g.rig.reset();
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(path, this.area);
    this.t = 0;
    this.remain = SESSION_TIME;
    this.state = 'run';
    this.sectorFlash = '';
    const rec = (g.story.trackday ||= {})[layout.key];
    this.prevBest = rec ? rec.best : null;
    this.hud.flash('サーキット走行会', 2.4, `${layout.name}　1枠${SESSION_TIME / 60}分（コントロールライン通過から計測）`);
  }

  update(dt) {
    const g = this.game;
    if (this.paused) return;
    if (g.input.hitCode('Escape') && this.state === 'run') { this.pause(); return; }
    this.t += dt;
    if (this.state === 'run') {
      this.remain -= dt;
      g.story.playtime = (g.story.playtime || 0) + dt;
    }
    this.session.update(dt);
    const tr = this.tracker;
    const ev = tr.update(this.P.car, this.t);
    if (!tr.started && tr.dist >= 0) { tr.start(this.t); tr.dist = 0; tr.prevS = null; }
    if (ev) this.onEvent(ev);
    if (this.state === 'run' && this.remain <= 0) { this.remain = 0; this.state = 'checker'; this.hud.flash('CHECKER', 2.2, 'この周で走行終了です'); }
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'near', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    this.session.updateAudio(this.P);
    // HUD
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    const cur = tr.started ? this.t - tr.lapStart : 0;
    const mm = Math.floor(this.remain / 60), ss = Math.floor(this.remain % 60);
    this.hud.tc.innerHTML = `<div class="lap">${tr.started ? `LAP <b>${tr.lap + 1}</b>` : 'OUT LAP'}</div><div class="time">${tr.started ? fmtTime(cur) : '--:--.---'}</div><div class="sectors">${this.sectorFlash}</div>`;
    const rows = tr.laps.map((l, i) => `<div class="${l === tr.best ? 'best' : ''}">L${i + 1} ${fmtTime(l)}</div>`).slice(-5).join('');
    this.hud.tr.innerHTML = `<div class="lbl">BEST</div><div class="big">${fmtTime(tr.best)}</div><div class="lbl">自己ベスト ${fmtTime(this.prevBest)}</div><div class="laps">${rows}</div>`;
    this.hud.tl.innerHTML = `<div class="who">サーキット走行会　<span>${CARS[this.mine.carId].name}</span></div><div>残り時間 <b>${this.state === 'run' ? `${mm}:${String(ss).padStart(2, '0')}` : 'CHECKER'}</b></div><div class="hint">Escでメニュー（セッティング・走行終了）</div>`;
    this.hud.drawMap([{ x: this.P.car.x, z: this.P.car.z, h: this.P.car.h, color: '#33e1ff' }]);
  }

  onEvent(ev) {
    const tr = this.tracker;
    if (ev.type === 'sector') {
      const i = ev.idx - 1;
      const bs = tr.sectors.map((s) => s[i]).filter((x) => x != null);
      const b = bs.length ? Math.min(...bs) : null;
      const diff = b != null ? ev.time - b : null;
      this.sectorFlash = `S${ev.idx} ${fmtTime(ev.time)} ${diff != null ? `<span class="${diff <= 0 ? 'neg' : 'pos'}">${diff <= 0 ? '−' : '+'}${Math.abs(diff).toFixed(3)}</span>` : ''}`;
    } else if (ev.type === 'lap') {
      const isBest = ev.time === tr.best;
      const pb = this.prevBest == null || ev.time < this.prevBest;
      this.hud.flash(fmtTime(ev.time), 2, pb ? '自己ベスト更新！' : isBest ? 'BEST LAP' : `LAP ${ev.lap}`);
      if (pb) {
        this.prevBest = ev.time;
        this.game.story.trackday[this.opts.layout.key] = { best: ev.time, carId: this.mine.carId, date: new Date().toISOString() };
      }
      recordCircuitLap(this.game.story, this.opts.layout.key, ev.time, this.mine, 'trackday', this.P.car.spec.pwr);
      if (this.state === 'checker') this.finish();
    }
  }

  finish() {
    const g = this.game;
    if (this.state === 'done') return;
    this.state = 'done';
    this.session.controlsEnabled = false;
    this.session.coastBrake = 0.6;
    const tr = this.tracker;
    setTimeout(() => {
      if (g.mode !== this) return;
      const box = panel('走行会 — 結果',
        el('div', { class: 'reward' }, `ベストラップ ${fmtTime(tr.best)}　（${tr.laps.length}周）`),
        el('div', { class: 'hint' }, `自己ベスト ${fmtTime(this.prevBest)}　／　${CARS[this.mine.carId].name}`));
      const dlg = el('div', { class: 'screen dialog result' }, box);
      const menu = new Menu(g, [{ label: '街へ戻る', action: () => { menu.destroy(); dlg.remove(); this.leave(); } }]);
      box.appendChild(menu.root);
      g.ui.appendChild(dlg);
    }, 1200);
  }

  leave() {
    const g = this.game;
    const Town = this.opts.townMode;
    const pos = this.opts.returnPos;
    const best = this.tracker.best;
    g.transition(() => g.setMode(new Town(g, { area: pos.area, returnPos: pos, message: best ? `走行会ベスト ${fmtTime(best)}` : 'サーキットから戻りました' })));
  }

  pause() {
    const g = this.game;
    this.paused = true;
    pauseMenu(g, 'サーキット走行会', [
      { label: '再開', action: () => { this.paused = false; } },
      { label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォース（走行会では自由に変更できます）', action: () => this.openSetting() },
      { label: 'ピットからやり直す', sub: 'ホームストレートのグリッド後方へ（残り時間はそのまま）', action: () => { this.paused = false; this.toPit(); } },
      { label: '走行を終えて街へ戻る', sub: `ここまでのベスト ${fmtTime(this.tracker.best)}`, action: () => this.leave() },
    ], () => { this.paused = false; });
  }

  toPit() {
    const sp = this.path.posAt(-110, -2.5);
    this.P.car.place(sp.x, sp.z, sp.h, 0);
    const tr = this.tracker;
    tr.dist = -110; tr.prevS = null; tr.hint = -1; tr.started = false; tr.sector = 0; tr.curSectors = [];
    tr.lap = 0; // 記録（laps）は残す
    this.game.rig.reset();
  }

  openSetting() {
    const g = this.game;
    const car = this.mine;
    this.paused = true;
    openSetup(g, {
      carId: car.carId, equipped: car.equipped, setup: car.setup,
      onChange: (S) => { car.setup = S; this.session.applySetup(this.P, S); },
      onClose: () => { g.input.pressed.clear(); this.paused = false; },
    });
  }

  exit() {
    this.session.dispose();
    this.hud.destroy();
    this.game.world.setCourse(null);
    this.game.mirrorModel = null;
  }
}
