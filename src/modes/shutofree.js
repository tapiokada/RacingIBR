// Practice FREE RUN：首都高（都心環状線 C1 と 5号池袋線・竹橋JCT連絡路）
// 西池袋タウンの北池袋入口（池袋本町）→ 5号上り → 竹橋JCT で分岐を選んで C1 外回り／内回りへ。
// C1 からは竹橋JCTで 5号下り → 北池袋出口 → 西池袋タウン（川越街道）へ戻れる。
// エリアの切り替えはボタンなしで自動。切り替わった先では 40km/h で走っている状態から始まる。
import { DriveSession } from '../session.js';
import { Hud } from '../ui/hud.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { pauseMenu, LapTracker } from './common.js';
import { openSetup } from '../ui/setup.js';
import { savePracticeSetup, fmtTime } from '../save.js';
import { LAYOUTS, shutoExitSpot } from '../data/map.js';
import { getCoursePath } from '../physics/track.js';
import { CIRCUITS, SHUTO5, shuto5Net, c1Net, C1_LINK_LEN, lanePose } from '../physics/circuit.js';
export { lanePose };
import { TownFreeMode } from './townfree.js';
import { TitleMode } from './title.js';

export const LINK_SPEED = 40 / 3.6; // 切り替え後の速度
const LANE_NAME = {
  c1_outer: '都心環状線 C1 外回り', c1_inner: '都心環状線 C1 内回り',
  U: '5号池袋線 上り（都心方面）', D: '5号池袋線 下り（池袋方面）',
  UO: '竹橋JCT 連絡路（→ C1 外回り）', UI: '竹橋JCT 連絡路（→ C1 内回り）',
  DO: '竹橋JCT 連絡路（C1 外回り →）', DI: '竹橋JCT 連絡路（C1 内回り →）',
};

export class ShutoFreeMode {
  // opts: { carId, equipped, color, setup, setupKey, area: 'c1'|'shuto5', lane: 'c1_outer'|'c1_inner'（C1 のとき）, pose: {x,z,h}, speed }
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game, o = this.opts;
    g.audio.playBgm('town');
    this.area = o.area;
    g.setArea(this.area);
    const W = g.world;
    // C1：その車線のコース（スタートライン・周回計測）＋連絡路の端。5号：全車線
    if (this.area === 'c1') {
      this.layout = LAYOUTS.find((l) => l.key === o.lane);
      this.path = getCoursePath(this.layout);
      W.setCourse(this.path);
      W.setNet(c1Net(o.lane));
    } else {
      W.setCourse(null);
      W.setNet(shuto5Net());
    }
    this.net = W.net;
    this.session = new DriveSession(g, { corridor: W.corridor });
    this.P = this.session.addCar({ carId: o.carId, equipped: o.equipped, setup: o.setup || null, color: o.color, isPlayer: true });
    const p = o.pose;
    this.P.car.place(p.x, p.z, p.h, o.speed || 0);
    if (this.path) {
      const pr = this.path.project(p.x, p.z, -1);
      // スタートラインの手前から始まる＝すぐ計測。途中から入ったときは次にラインを通過してから
      this.tracker = new LapTracker(this.path, pr.s - this.path.length);
    }
    g.mirrorModel = this.P.model;
    if (g.rig.mode === 'gallery') g.rig.mode = 'chase';
    g.rig.reset();
    this.hud = new Hud(g.ui);
    this.hud.setMapLines(this.mapLines());
    this.session.onReset = () => this.hud.flash('RESET', 0.8);
    this.t = 0;
    this.laneName = '';
    const title = this.area === 'c1' ? LANE_NAME[o.lane] : '首都高速5号池袋線';
    this.hud.flash(title, 2, o.speed ? '' : 'FREE RUN　Escでメニュー');
  }

  mapLines() {
    const L = [CIRCUITS.c1_outer, CIRCUITS.c1_inner, SHUTO5.U, SHUTO5.D, SHUTO5.UO, SHUTO5.UI, SHUTO5.DO, SHUTO5.DI];
    return L.map((C) => { const pts = []; for (let i = 0; i < C.n; i += 4) pts.push([C.x[i], C.z[i]]); if (!C.open) pts.push([C.x[0], C.z[0]]); return pts; });
  }

  // 今いる車線と距離
  where() {
    const car = this.P.car, W = this.game.world;
    const q = W.ground.nearest(car.x, car.z, car.y);
    if (!q) return null;
    const C = this.net.lanes ? this.net.lanes[this.net.laneOf[q.i]] : this.net;
    return { C, s: q.s, lane: C.lane || C.id };
  }

  switchTo(make, msg) {
    if (this.leaving) return;
    this.leaving = true;
    const g = this.game;
    g.transition(() => g.setMode(make()), 300);
    if (msg) this.hud.flash(msg, 1);
  }

  carOpts() { const o = this.opts; return { carId: o.carId, equipped: o.equipped, color: o.color, setup: o.setup, setupKey: o.setupKey }; }

  checkLinks() {
    const w = this.where();
    if (!w) return;
    this.cur = w;
    const car = this.P.car, pose = { x: car.x, z: car.z, h: car.h };
    if (this.area === 'shuto5') {
      // 竹橋JCT：連絡路の終わりの区間（C1 エリアで走れる部分）に入ったら C1 へ
      if ((w.lane === 'UO' || w.lane === 'UI') && w.s > w.C.length - C1_LINK_LEN + 30) {
        const lane = w.lane === 'UO' ? 'c1_outer' : 'c1_inner';
        this.switchTo(() => new ShutoFreeMode(this.game, { ...this.carOpts(), area: 'c1', lane, pose, speed: LINK_SPEED }));
      }
      // 北池袋出口：下りの終わりで西池袋タウンへ
      if (w.lane === 'D' && w.s > w.C.length - 20) {
        this.switchTo(() => new TownFreeMode(this.game, { ...this.carOpts(), area: 'west', pos: shutoExitSpot(), speed: LINK_SPEED }));
      }
    } else if ((w.lane === 'DO' || w.lane === 'DI') && w.s > 120) {
      // C1 から 5号への分岐に入ったら 5号エリアへ
      this.switchTo(() => new ShutoFreeMode(this.game, { ...this.carOpts(), area: 'shuto5', pose, speed: LINK_SPEED }));
    }
  }

  update(dt) {
    const g = this.game;
    if (this.paused) return;
    if (g.input.hitCode('Escape')) { this.pause(); return; }
    this.t += dt;
    this.session.update(dt);
    if (!this.leaving) this.checkLinks();
    // C1 の周回計測（コース上にいるときだけ）
    let lapHtml = '';
    if (this.tracker && this.cur && !this.cur.C.open) {
      const tr = this.tracker;
      const ev = tr.update(this.P.car, this.t);
      if (!tr.started && tr.dist >= 0) { tr.start(this.t); tr.dist = 0; tr.prevS = null; }
      if (ev && ev.type === 'lap') this.hud.flash(fmtTime(ev.time), 2, ev.time === tr.best ? 'BEST LAP' : `LAP ${ev.lap}`);
      lapHtml = `<div class="lap">${tr.started ? `LAP <b>${tr.lap + 1}</b>` : 'OUT LAP'}</div><div class="time">${tr.started ? fmtTime(this.t - tr.lapStart) : '--:--.---'}</div>`;
      this.hud.tr.innerHTML = `<div class="lbl">BEST</div><div class="big">${fmtTime(tr.best)}</div>`;
    }
    this.hud.tc.innerHTML = lapHtml;
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'near', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    this.session.updateAudio(this.P);
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    const name = this.cur ? LANE_NAME[this.cur.lane] || '' : '';
    this.hud.tl.innerHTML = `<div class="who">${name}</div><div class="hint">FREE RUN（首都高）　R:リセット　Esc:メニュー</div>`;
    this.hud.mapZoom = 1200; this.hud.mapCenter = { x: this.P.car.x, z: this.P.car.z };
    this.hud.drawMap([{ x: this.P.car.x, z: this.P.car.z, h: this.P.car.h, color: '#33e1ff' }]);
  }

  pause() {
    const g = this.game;
    this.paused = true;
    const go = (make) => g.transition(() => g.setMode(make()));
    const c1Start = (lane) => { const p = getCoursePath(LAYOUTS.find((l) => l.key === lane)).posAt(-8, 0); return { x: p.x, z: p.z, h: p.h }; };
    pauseMenu(g, 'PAUSE', [
      { label: '再開', action: () => { this.paused = false; } },
      { label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォースの調整とパワー/トルク曲線', action: () => this.openSetting() },
      { label: 'C1 外回りのスタート地点へ', sub: '江戸橋JCT付近', action: () => go(() => new ShutoFreeMode(g, { ...this.carOpts(), area: 'c1', lane: 'c1_outer', pose: c1Start('c1_outer'), speed: 0 })) },
      { label: 'C1 内回りのスタート地点へ', sub: '江戸橋JCT付近', action: () => go(() => new ShutoFreeMode(g, { ...this.carOpts(), area: 'c1', lane: 'c1_inner', pose: c1Start('c1_inner'), speed: 0 })) },
      { label: '5号池袋線 北池袋入口へ', sub: '上り（都心方面）の入口', action: () => go(() => new ShutoFreeMode(g, { ...this.carOpts(), area: 'shuto5', pose: lanePose(SHUTO5.U, 12), speed: LINK_SPEED })) },
      { label: '西池袋タウンへ', sub: '北池袋出口から川越街道へ', action: () => go(() => new TownFreeMode(g, { ...this.carOpts(), area: 'west', pos: shutoExitSpot(), speed: 0 })) },
      { label: 'PRACTICEメニューへ', action: () => go(() => new TitleMode(g, 'practice')) },
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

  exit() {
    this.session.dispose();
    this.hud.destroy();
    this.game.world.setCourse(null);
    this.game.mirrorModel = null;
  }
}
