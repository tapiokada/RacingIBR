// Practice：タイムアタック / フリーラン
import { DriveSession, Recorder } from '../session.js';
import { Hud } from '../ui/hud.js';
import { el, Menu, panel } from '../ui/ui.js';
import { fmtTime, addRecord, putReplay, loadRecords } from '../save.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { LapTracker, Countdown, pauseMenu } from './common.js';
import { coursePath } from './town.js';
import { areaOfLayout } from '../data/map.js';
import { TitleMode } from './title.js';
import { ReplayMode } from './replay.js';

const TA_LAPS = 3;

export class PracticeMode {
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const { layout, carId, equipped, color, kind } = this.opts;
    this.ta = kind === 'ta';
    const path = coursePath(layout);
    this.path = path;
    this.area = areaOfLayout(layout);
    g.setArea(this.area);
    g.audio.playBgm(this.ta ? 'battle' : 'town');
    g.world.setCourse(path);
    g.rig.setGallerySpots(path);
    this.session = new DriveSession(g, { corridor: path.corridor, path });
    const P = this.session.addCar({ carId, equipped, color, isPlayer: true });
    const sp = path.posAt(-8, 0);
    P.car.place(sp.x, sp.z, sp.h, 0);
    this.P = P;
    this.tracker = new LapTracker(path, -8);
    this.recorder = this.ta ? new Recorder(30) : null;
    g.mirrorModel = P.model;
    if (g.rig.mode === 'gallery') g.rig.mode = 'chase';
    g.rig.reset();
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(path, this.area);
    this.t = 0;
    this.state = 'count';
    this.session.frozen = true;
    this.session.controlsEnabled = false;
    const prev = loadRecords()[layout.key]?.[0];
    this.recordBest = prev ? prev.best : null;
    this.lastLap = null;
    this.sectorFlash = '';
    this.hud.flash(this.ta ? 'TIME ATTACK' : 'FREE RUN', 1.4, layout.name);
    this.countdown = new Countdown(g, this.hud, () => {
      this.state = 'run';
      this.session.frozen = false;
      this.session.controlsEnabled = true;
      this.tracker.start(this.t);
    });
  }

  update(dt) {
    const g = this.game;
    if (this.paused) return;
    if (g.input.hitCode('Escape') && this.state !== 'done') { this.pause(); return; }
    if (this.state === 'count') this.countdown.update(dt);
    if (this.state === 'run') this.t += dt;
    this.session.update(dt);
    if (this.recorder && this.state === 'run') this.recorder.sample(dt, this.P.car);
    const ev = this.tracker.update(this.P.car, this.t);
    if (ev && this.state === 'run') this.onEvent(ev);
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    this.session.updateAudio(this.P);
    // HUD
    const tr = this.tracker;
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    const cur = this.state === 'run' ? this.t - tr.lapStart : 0;
    const lapNo = this.ta ? `LAP <b>${Math.min(TA_LAPS, tr.lap + 1)}</b>/${TA_LAPS}` : `LAP <b>${tr.lap + 1}</b>`;
    this.hud.tc.innerHTML = `<div class="lap">${lapNo}</div><div class="time">${fmtTime(cur)}</div><div class="sectors">${this.sectorFlash}</div>`;
    const rows = tr.laps.map((l, i) => `<div class="${l === tr.best ? 'best' : ''}">L${i + 1} ${fmtTime(l)}</div>`).slice(-5).join('');
    this.hud.tr.innerHTML = `<div class="lbl">BEST</div><div class="big">${fmtTime(tr.best)}</div>${this.ta ? `<div class="lbl">RECORD ${fmtTime(this.recordBest)}</div>` : ''}<div class="laps">${rows}</div>`;
    this.hud.tl.innerHTML = `<div class="who">${this.opts.layout.name}</div><div class="hint">${this.ta ? 'TIME ATTACK ' + TA_LAPS + '周' : 'FREE RUN　Escでメニュー'}</div>`;
    this.hud.drawMap([{ x: this.P.car.x, z: this.P.car.z, h: this.P.car.h, color: '#33e1ff' }]);
  }

  onEvent(ev) {
    const tr = this.tracker;
    if (ev.type === 'sector') {
      const i = ev.idx - 1;
      const bestSecs = tr.sectors.map((s) => s[i]).filter((x) => x != null);
      const b = bestSecs.length ? Math.min(...bestSecs) : null;
      const diff = b != null ? ev.time - b : null;
      this.sectorFlash = `S${ev.idx} ${fmtTime(ev.time)} ${diff != null ? `<span class="${diff <= 0 ? 'neg' : 'pos'}">${diff <= 0 ? '−' : '+'}${Math.abs(diff).toFixed(3)}</span>` : ''}`;
    } else if (ev.type === 'lap') {
      const isBest = ev.time === tr.best;
      this.sectorFlash = `S3 ${fmtTime(tr.sectors[tr.sectors.length - 1][2])}`;
      this.hud.flash(fmtTime(ev.time), 2, isBest ? 'BEST LAP!' : `LAP ${ev.lap}`);
      if (this.ta && tr.lap >= TA_LAPS) this.finishTA();
    }
  }

  async finishTA() {
    const g = this.game;
    this.state = 'done';
    this.session.controlsEnabled = false;
    const tr = this.tracker;
    const id = `${this.opts.layout.key}_${Date.now()}`;
    const rec = {
      id, date: new Date().toISOString(), laps: tr.laps, sectors: tr.sectors, best: tr.best,
      total: tr.laps.reduce((a, b) => a + b, 0), carId: this.opts.carId,
    };
    const replay = this.recorder.finish({ carId: this.opts.carId, equipped: this.opts.equipped, color: this.opts.color, layoutKey: this.opts.layout.key });
    const rank = addRecord(this.opts.layout.key, rec);
    await putReplay(id, replay);
    setTimeout(() => this.showResult(rec, rank, replay), 1500);
  }

  showResult(rec, rank, replay) {
    const g = this.game;
    const table = el('table', { class: 'rec-table' }, el('tr', {}, el('th', {}, 'LAP'), el('th', {}, 'S1'), el('th', {}, 'S2'), el('th', {}, 'S3'), el('th', {}, 'TIME')));
    rec.laps.forEach((l, i) => {
      const s = rec.sectors[i];
      table.appendChild(el('tr', { class: l === rec.best ? 'best' : '' }, el('td', {}, String(i + 1)), el('td', {}, fmtTime(s[0])), el('td', {}, fmtTime(s[1])), el('td', {}, fmtTime(s[2])), el('td', { class: 'hl' }, fmtTime(l))));
    });
    const box = panel('TIME ATTACK RESULT',
      el('div', { class: 'reward' }, `BEST LAP ${fmtTime(rec.best)}　${rank === 0 ? '★ コースレコード更新！' : rank >= 0 ? `（${rank + 1}位）` : ''}`),
      table,
      el('div', { class: 'hint' }, `TOTAL ${fmtTime(rec.total)}　/　${new Date(rec.date).toLocaleString('ja-JP')}`));
    const dlg = el('div', { class: 'screen dialog result' }, box);
    const menu = new Menu(g, [
      { label: 'リプレイを見る', action: () => { menu.destroy(); g.transition(() => g.setMode(new ReplayMode(g, { layout: this.opts.layout, replay, record: rec, back: () => new PracticeMode(g, this.opts) }))); } },
      { label: 'もう一度走る', action: () => { menu.destroy(); g.transition(() => g.setMode(new PracticeMode(g, this.opts))); } },
      { label: 'PRACTICEメニューへ', action: () => { menu.destroy(); g.transition(() => g.setMode(new TitleMode(g, 'practice'))); } },
    ]);
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
  }

  pause() {
    const g = this.game;
    this.paused = true;
    pauseMenu(g, 'PAUSE', [
      { label: '再開', action: () => { this.paused = false; } },
      { label: 'リスタート', action: () => g.transition(() => g.setMode(new PracticeMode(g, this.opts))) },
      { label: 'PRACTICEメニューへ', action: () => g.transition(() => g.setMode(new TitleMode(g, 'practice'))) },
    ], () => { this.paused = false; });
  }

  exit() {
    this.session.dispose();
    this.hud.destroy();
    this.game.world.setCourse(null);
    this.game.mirrorModel = null;
  }
}
