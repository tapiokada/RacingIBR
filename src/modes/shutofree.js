// Practice FREE RUN：首都高（都心環状線 C1 と 5号池袋線・竹橋JCT連絡路）
// 西池袋タウンの北池袋入口（池袋本町）→ 5号上り → 竹橋JCT で分岐を選んで C1 外回り／内回りへ。
// C1 からは竹橋JCTで 5号下り → 北池袋出口 → 西池袋タウン（川越街道）へ戻れる。
// エリアの切り替えはボタンなしで自動。切り替わった先では 40km/h で走っている状態から始まる。
// opts.story = true のときはストーリーの首都高（ガレージの車・燃料・所持金。C1 にライバルが流していて、パッシングでバトル）
import * as THREE from 'three';
import { DriveSession } from '../session.js';
import { el, Menu, panel } from '../ui/ui.js';
import { RaceAI } from '../ai.js';
import { ALL_RIVALS } from '../data/rivals.js';
import { CARS, PLAYER } from '../data/cars.js';
import { PART_BY_ID, CATEGORY_NAME, RANK_STARS } from '../data/parts.js';
import { buildSpec } from '../physics/spec.js';
import { activeCar, fuelState, addPart, fmtMoney } from '../save.js';
import { TownMode, keyName } from './town.js';
import { Hud } from '../ui/hud.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { pauseMenu, LapTracker, Countdown } from './common.js';
import { openSetup } from '../ui/setup.js';
import { savePracticeSetup, fmtTime } from '../save.js';
import { LAYOUTS, shutoExitSpot } from '../data/map.js';
import { getCoursePath } from '../physics/track.js';
import { CIRCUITS, SHUTO5, shuto5Net, c1Net, C1_LINK_LEN, lanePose } from '../physics/circuit.js';
export { lanePose };
import { TownFreeMode } from './townfree.js';
import { TitleMode } from './title.js';

export const LINK_SPEED = 40 / 3.6; // 切り替え後の速度
// ---- 首都高バトル（ストーリー・C1） ----
export const AUTO_V = 80 / 3.6; // パッシング後の自動走行（並走）の速度
const MAX_HWY_RIVALS = 3; // 同時に流しているライバルの数
const CRUISE = [70, 95]; // ライバルの巡航速度[km/h]
// SP ゲージ（100で満タン）：後ろの車は差に応じて減る（差 GAP_FREE m までは減らない）。壁に当たると減る
export const SP_GAP = { free: 3, base: 0.8, perM: 0.07 }; // [%/s] = base + perM × 差[m]
export const SP_WALL = { base: 3, perV: 0.2, cool: 0.5 }; // 1回 [%] = base + perV × 速度[m/s]（cool 秒に1回まで）
export function spDrain(gap) { return gap > SP_GAP.free ? SP_GAP.base + SP_GAP.perM * gap : 0; }
export function spWall(v) { return SP_WALL.base + SP_WALL.perV * v; }
const v3 = new THREE.Vector3();
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
    if (o.story) {
      const mine = activeCar(g.story);
      this.P = this.session.addCar({ carId: mine.carId, equipped: mine.equipped, setup: mine.setup || null, color: mine.color, isPlayer: true, name: PLAYER.name, fuel: fuelState(mine) });
      g.story.area = 'west'; // 首都高の上ではセーブしない（タイトルから続けると西池袋から）
    } else this.P = this.session.addCar({ carId: o.carId, equipped: o.equipped, setup: o.setup || null, color: o.color, isPlayer: true });
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
    // リセット：今いる車線の進行方向へ向ける（首都高は一方通行。スピンして後ろを向いていても逆走にしない）
    this.session.resetPose = (back = 0) => { const w = this.where(); return w ? lanePose(w.C, w.s + back) : null; };
    this.session.onResetDenied = () => this.hud.flash('', 1.2, 'バトル中のリセットは10km/h以下で使用できます');
    this.labels = el('div', { class: 'labels' });
    g.ui.appendChild(this.labels);
    this.bt = null; this.dialog = null; this.spawnT = 0;
    if (o.story && this.area === 'c1') for (let i = 0; i < MAX_HWY_RIVALS; i++) this.spawnRival(true);
    this.t = 0;
    this.laneName = '';
    const title = this.area === 'c1' ? LANE_NAME[o.lane] : '首都高速5号池袋線';
    this.hud.flash(title, 2, o.story ? (this.area === 'c1' ? `ライバルの後ろでパッシング（${keyName(g, 'flash')}）してバトルを挑め！` : '') : o.speed ? '' : 'FREE RUN　Escでメニュー');
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

  carOpts() { const o = this.opts; return o.story ? { story: true } : { carId: o.carId, equipped: o.equipped, color: o.color, setup: o.setup, setupKey: o.setupKey }; }

  // 北池袋出口 → 西池袋（ストーリーは街のモードへ）
  toWest(speed) {
    const g = this.game;
    if (this.opts.story) return new TownMode(g, { area: 'west', returnPos: { ...shutoExitSpot(), area: 'west' }, speed, message: '西池袋エリア' });
    return new TownFreeMode(g, { ...this.carOpts(), area: 'west', pos: shutoExitSpot(), speed });
  }

  // ===== ライバル（ストーリー・C1）=====
  // その車線（外回り／内回り）のライバルが、プレイヤーから見えない前後の位置に現れて巡航している
  spawnRival(initial = false) {
    const st = this.game.story, s = this.session, path = this.path, P = this.P.car;
    const present = new Set(s.entries.filter((e) => e.rival).map((e) => e.rival.id));
    const pool = ALL_RIVALS.filter((r) => r.lane === this.opts.lane && r.minWins <= st.wins && !present.has(r.id));
    if (!pool.length) return;
    pool.sort((a, b) => (st.defeated[a.id] || 0) - (st.defeated[b.id] || 0) + (Math.random() - 0.5) * 0.8); // 未撃破を優先
    const r = pool[0];
    const ps = path.project(P.x, P.z, -1).s;
    for (let tries = 0; tries < 20; tries++) {
      const ahead = Math.random() < 0.65;
      const ds = (ahead ? 1 : -1) * (initial ? 220 + Math.random() * 450 : 380 + Math.random() * 300);
      const pos = path.posAt(ps + ds, (Math.random() - 0.5) * 3);
      if (s.entries.some((e) => Math.hypot(e.car.x - pos.x, e.car.z - pos.z) < 40)) continue;
      const cruise = (CRUISE[0] + Math.random() * (CRUISE[1] - CRUISE[0])) / 3.6;
      const e = s.addCar({ carId: r.car, equipped: r.parts, setup: r.setup || null, color: r.color, name: r.name });
      e.car.place(pos.x, pos.z, pos.h, cruise);
      e.ai = new RaceAI(e.car, path, r.skill, { margin: r.margin, vmax: cruise });
      e.cruise = cruise; e.rival = r; e.cool = 0;
      e.rating = buildSpec(r.car, r.parts, r.setup || null).rating;
      e.label = el('div', { class: 'rival-tag' }, el('b', {}, r.name), el('span', {}, `${CARS[r.car].name}　戦闘力 ${e.rating}`));
      this.labels.appendChild(e.label);
      return;
    }
  }

  removeRival(e) { e.label?.remove(); this.session.removeCar(e); }

  // コース上の前後の差（+ = b が前）。周回コースなので半周で折り返す
  dsOf(a, b) {
    const L = this.path.length;
    let d = this.path.project(b.x, b.z, -1).s - this.path.project(a.x, a.z, -1).s;
    if (d > L / 2) d -= L; if (d < -L / 2) d += L;
    return d;
  }

  findFlashTarget() {
    const P = this.P.car;
    const [f0, f1] = P.fwd();
    let best = null, bd = 1e9;
    for (const e of this.session.entries) {
      if (!e.rival || e.cool > 0) continue;
      const dx = e.car.x - P.x, dz = e.car.z - P.z, d = Math.hypot(dx, dz);
      if (d > 75 || (dx * f0 + dz * f1) / (d || 1) < 0.8 || Math.abs(e.car.y - P.y) > 4) continue;
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  // プレイヤーの車も AI が運転する（パッシング後の並走・バトル後）
  autoOn() {
    if (!this.P.ai) this.P.ai = new RaceAI(this.P.car, this.path, 0.9, { vmax: AUTO_V, mistakes: false, margin: 1.2 });
    this.P.ai.vmax = AUTO_V;
    this.session.controlsEnabled = false;
  }
  autoOff() { this.P.ai = null; this.session.controlsEnabled = true; this.game.input.pressed.clear(); }

  // パッシング → 双方 80km/h の自動走行 → ウィンドウ
  challenge(e) {
    e.flash = 1.0;
    e.ai.vmax = AUTO_V;
    this.autoOn();
    this.bt = { e, phase: 'auto', t: 1.4 };
    this.hud.flash('', 1.4, `${e.rival.name}にパッシング！`);
  }

  openEncounter() {
    const g = this.game, e = this.bt.e, r = e.rival;
    this.bt.phase = 'dialog';
    const box = panel(null,
      el('div', { class: 'enc-head' }, el('span', { class: 'enc-team' }, r.team), el('span', { class: 'enc-name' }, r.name)),
      el('div', { class: 'enc-car' }, `${CARS[r.car].name}　（${CARS[r.car].ref}）`),
      el('div', { class: 'enc-line' }, `「${r.lines.meet}」`),
      el('div', { class: 'enc-vs' },
        el('div', {}, el('small', {}, 'YOU'), el('b', {}, String(this.P.car.spec.rating))),
        el('div', { class: 'vs' }, 'VS'),
        el('div', {}, el('small', {}, 'RIVAL'), el('b', {}, String(e.rating)))),
      el('div', { class: 'enc-course' }, `${LANE_NAME[this.opts.lane]}　— ゴールなし`, el('br'), el('small', {}, '負けている方のSPゲージが減る（差が大きいほど速く・壁に当たっても減る）。ゼロになった方の負け')),
      el('div', { class: 'hint' }, '竹橋JCTでライバルと別の方向へ分かれたら引き分け'));
    const dlg = el('div', { class: 'screen dialog encounter hwy' }, box);
    const close = () => { g.input.pressed.clear(); menu.destroy(); dlg.remove(); this.dialog = null; };
    const menu = new Menu(g, [
      { label: 'バトルする', sub: 'その場でスタート（カウントダウンのあと操作が戻る）', action: () => { close(); this.startBattle(); } },
      { label: 'やめておく', action: () => { close(); this.cancelBattle(); } },
    ], { onBack: () => { close(); this.cancelBattle(); } });
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
    this.dialog = dlg;
  }

  cancelBattle() {
    const e = this.bt.e;
    e.ai.vmax = e.cruise; e.cool = 20;
    this.bt = null;
    this.autoOff();
  }

  startBattle() {
    const g = this.game, bt = this.bt;
    bt.phase = 'count';
    g.audio.playBgm('battle');
    bt.countdown = new Countdown(g, this.hud, () => {
      bt.phase = 'race'; bt.t = 0;
      bt.spP = 100; bt.spR = 100; bt.wallP = 0; bt.wallR = 0;
      bt.gap = this.dsOf(bt.e.car, this.P.car); // + = プレイヤーが前
      bt.sP = this.path.project(this.P.car.x, this.P.car.z, -1).s; bt.sR = this.path.project(bt.e.car.x, bt.e.car.z, -1).s;
      this.P.impact = 0; bt.e.impact = 0;
      bt.e.ai.vmax = Infinity;
      this.session.resetRule = 'battle';
      this.autoOff();
    });
  }

  // バトル中：差・SP ゲージ・決着
  updateBattle(dt) {
    const bt = this.bt, P = this.P, R = bt.e, path = this.path, L = path.length;
    bt.t += dt;
    // 進んだ距離の差（周回の折り返しを考慮して積算）
    const adv = (car, key) => { const s = path.project(car.x, car.z, -1).s; let d = s - bt[key]; if (d > L / 2) d -= L; if (d < -L / 2) d += L; bt[key] = s; return d; };
    bt.gap += adv(P.car, 'sP') - adv(R.car, 'sR');
    const gap = Math.abs(bt.gap), drain = spDrain(gap) * dt;
    if (bt.gap > 0) bt.spR -= drain; else bt.spP -= drain;
    // 壁への接触
    bt.wallP -= dt; bt.wallR -= dt;
    if (P.impact > 2 && bt.wallP <= 0) { bt.spP -= spWall(P.impact); bt.wallP = SP_WALL.cool; this.hud.flash('', 0.6, '壁に接触！ SPダウン'); }
    if (R.impact > 2 && bt.wallR <= 0) { bt.spR -= spWall(R.impact); bt.wallR = SP_WALL.cool; }
    P.impact = 0; R.impact = 0;
    bt.spP = Math.max(0, bt.spP); bt.spR = Math.max(0, bt.spR);
    // 決着：竹橋JCTで別の分岐（プレイヤーが 5号への連絡路へ）＝引き分け
    if (this.cur && (this.cur.lane === 'DO' || this.cur.lane === 'DI')) return this.endBattle('draw');
    if (bt.spP <= 0) return this.endBattle('lose');
    if (bt.spR <= 0) return this.endBattle('win');
  }

  endBattle(res) {
    const g = this.game, st = g.story, bt = this.bt, e = bt.e, r = e.rival;
    bt.phase = 'result';
    this.session.resetRule = null;
    g.audio.playBgm('town');
    e.cool = 60;
    e.ai.vmax = res === 'win' ? 60 / 3.6 : e.cruise; // 負けたライバルはペースを落として離れていく
    if (res === 'draw') {
      this.hud.flash('DRAW', 2.5, `${r.name}と別の方向へ分かれた（引き分け）`);
      g.audio.beep(800, 0.4, 0.25);
      this.bt = null;
      return;
    }
    const win = res === 'win';
    g.audio.beep(win ? 1320 : 330, 0.5, 0.3);
    this.hud.flash(win ? 'YOU WIN!' : 'YOU LOSE…', 2.2, win ? 'ライバルのSPがゼロになった！' : 'SPがゼロになった…');
    this.autoOn(); // 結果のウィンドウの間は 80km/h で自動走行
    if (win) { st.wins++; st.money += r.reward; st.defeated[r.id] = (st.defeated[r.id] || 0) + 1; } else st.losses++;
    const box = panel(win ? 'BATTLE WIN' : 'BATTLE LOSE',
      el('div', { class: 'enc-head' }, el('span', { class: 'enc-team' }, r.team), el('span', { class: 'enc-name' }, r.name)),
      el('div', { class: 'enc-line' }, `「${win ? r.lines.win : r.lines.lose}」`),
      el('div', { class: 'hint' }, `バトル時間 ${fmtTime(bt.t)}　SP 残り YOU ${bt.spP.toFixed(0)}% / RIVAL ${bt.spR.toFixed(0)}%`));
    const dlg = el('div', { class: 'screen dialog result hwy' }, box);
    const close = (msg) => { g.input.pressed.clear(); menu.destroy(); dlg.remove(); this.dialog = null; this.bt = null; this.autoOff(); if (msg) this.hud.flash(msg, 1.6); };
    let menu;
    if (win) {
      box.appendChild(el('div', { class: 'reward' }, `賞金 ${fmtMoney(r.reward)} 獲得！`));
      box.appendChild(el('div', { class: 'hint' }, '戦利品：ライバルのマシンからパーツを1つ選んで持ち帰れます'));
      const parts = Object.entries(r.parts).filter(([, id]) => id).map(([cat, id]) => ({ cat, p: PART_BY_ID[id] }));
      menu = new Menu(g, parts.map(({ cat, p }) => ({
        label: `${CATEGORY_NAME[cat]}：${p.name}`, sub: `${RANK_STARS(p.rank)}　${p.desc}　（所持 ${st.owned[p.id] || 0}）`,
        action: () => { addPart(st, p.id); close(`${p.name} を手に入れた！`); },
      })), { className: 'scroll' });
    } else menu = new Menu(g, [{ label: '走り続ける', action: () => close('次は負けない…') }]);
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
    this.dialog = dlg;
  }

  updateRivals(dt) {
    const s = this.session, P = this.P.car;
    for (const e of s.entries.filter((x) => x.rival)) {
      e.cool -= dt;
      if (this.bt && this.bt.e === e) continue;
      if (Math.abs(this.dsOf(P, e.car)) > 950 || Math.hypot(e.car.x - P.x, e.car.z - P.z) > 1000) this.removeRival(e);
    }
    this.spawnT -= dt;
    if (this.spawnT <= 0 && s.entries.filter((x) => x.rival).length < MAX_HWY_RIVALS) { this.spawnRival(); this.spawnT = 3; }
  }

  updateLabels() {
    const cam = this.game.rig.camera, P = this.P.car;
    for (const e of this.session.entries) {
      if (!e.label) continue;
      const d = Math.hypot(e.car.x - P.x, e.car.z - P.z);
      v3.set(e.car.x, e.car.y + 2.4, e.car.z).project(cam);
      const vis = d < 140 && v3.z < 1 && Math.abs(v3.x) < 1.1 && Math.abs(v3.y) < 1.1 && !(this.bt && this.bt.phase === 'race');
      e.label.style.display = vis ? 'block' : 'none';
      if (vis) {
        e.label.style.left = `${((v3.x + 1) / 2) * window.innerWidth}px`;
        e.label.style.top = `${((1 - v3.y) / 2) * window.innerHeight}px`;
        e.label.style.opacity = String(Math.max(0.3, 1 - d / 140));
        e.label.classList.toggle('near', d < 75 && !(e.cool > 0));
      }
    }
  }

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
        this.switchTo(() => this.toWest(LINK_SPEED));
      }
    } else if ((w.lane === 'DO' || w.lane === 'DI') && w.s > 120) {
      // C1 から 5号への分岐に入ったら 5号エリアへ
      this.switchTo(() => new ShutoFreeMode(this.game, { ...this.carOpts(), area: 'shuto5', pose, speed: LINK_SPEED }));
    }
  }

  update(dt) {
    const g = this.game;
    if (this.paused) return;
    if (g.input.hitCode('Escape') && !this.dialog) { this.pause(); return; }
    this.t += dt;
    const story = this.opts.story, st = g.story;
    if (story) { st.playtime += dt; const c = activeCar(st); c.km = (c.km || 0) + this.P.car.speed * dt / 1000; }
    this.session.update(dt);
    if (!this.leaving && !this.dialog) this.checkLinks();
    // ---- 首都高バトル（ストーリー・C1）----
    if (story && this.area === 'c1' && !this.leaving) {
      this.updateRivals(dt);
      if (g.input.hit('flash') && !this.bt && !this.dialog) {
        this.P.flash = 0.35;
        const tgt = this.findFlashTarget();
        if (tgt) this.challenge(tgt);
      }
      const bt = this.bt;
      // 自動走行の間はライバルの斜め後ろ（約8m）まで詰めて並走する
      if (bt && bt.phase !== 'race' && bt.phase !== 'result' && this.P.ai) {
        const d = this.dsOf(this.P.car, bt.e.car); // + = ライバルが前
        this.P.ai.vmax = AUTO_V + Math.max(-3, Math.min(5, (d - 8) * 0.25));
      }
      if (bt && bt.phase === 'auto') { bt.t -= dt; if (bt.t <= 0) this.openEncounter(); }
      else if (bt && bt.phase === 'count') bt.countdown.update(dt);
      else if (bt && bt.phase === 'race') this.updateBattle(dt);
    }
    // C1 の周回計測（コース上にいるときだけ）
    let lapHtml = '';
    if (this.tracker && this.cur && !this.cur.C.open && !this.opts.story) { // 周回タイムは FREE RUN だけ
      const tr = this.tracker;
      const ev = tr.update(this.P.car, this.t);
      if (!tr.started && tr.dist >= 0) { tr.start(this.t); tr.dist = 0; tr.prevS = null; }
      if (ev && ev.type === 'lap') this.hud.flash(fmtTime(ev.time), 2, ev.time === tr.best ? 'BEST LAP' : `LAP ${ev.lap}`);
      lapHtml = `<div class="lap">${tr.started ? `LAP <b>${tr.lap + 1}</b>` : 'OUT LAP'}</div><div class="time">${tr.started ? fmtTime(this.t - tr.lapStart) : '--:--.---'}</div>`;
      this.hud.tr.innerHTML = `<div class="lbl">BEST</div><div class="big">${fmtTime(tr.best)}</div>`;
    }
    if (this.bt && this.bt.phase === 'race') lapHtml = `<div class="lap">BATTLE</div><div class="time">${fmtTime(this.bt.t)}</div>`;
    this.hud.tc.innerHTML = lapHtml;
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'near', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    this.session.updateAudio(this.P);
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    const name = this.cur ? LANE_NAME[this.cur.lane] || '' : '';
    if (story) {
      this.hud.tl.innerHTML = `<div class="who">${PLAYER.name}　<span>${CARS[this.P.carId].name}</span></div><div>${name}</div><div>所持金 <b>${fmtMoney(st.money)}</b></div><div>戦績 <b>${st.wins}</b>勝 ${st.losses}敗</div>`;
      if (this.bt && this.bt.phase === 'race') this.hud.tr.innerHTML = this.gaugeHtml();
    } else this.hud.tl.innerHTML = `<div class="who">${name}</div><div class="hint">FREE RUN（首都高）　R:リセット　Esc:メニュー</div>`;
    this.hud.mapZoom = this.bt ? 500 : 1200; this.hud.mapCenter = { x: this.P.car.x, z: this.P.car.z };
    const st2 = story ? st : null;
    const dots = this.session.entries.filter((e) => e.rival).map((e) => ({ x: e.car.x, z: e.car.z, h: e.car.h, color: st2 && st2.defeated[e.rival.id] ? '#3ddc6a' : '#ff4d6d' }));
    this.hud.drawMap([...dots, { x: this.P.car.x, z: this.P.car.z, h: this.P.car.h, color: '#33e1ff' }]);
    this.updateLabels();
  }

  gaugeHtml() {
    const bt = this.bt, ahead = bt.gap >= 0;
    const bar = (v, col) => `<div class="spbar"><div class="fill" style="width:${v.toFixed(1)}%;background:${v < 25 ? '#ff3b3b' : col}"></div></div>`;
    return `<div class="pos ${ahead ? 'p1' : 'p2'}">${ahead ? 'LEAD' : 'CHASE'}</div>
      <div class="gap">${ahead ? '+' : '−'}${Math.abs(bt.gap).toFixed(0)} m</div>
      <div class="sp"><span>YOU</span>${bar(bt.spP, '#33e1ff')}<span>${bt.spP.toFixed(0)}</span></div>
      <div class="sp"><span>RIVAL</span>${bar(bt.spR, '#ff4d6d')}<span>${bt.spR.toFixed(0)}</span></div>
      <div class="rival">${bt.e.rival.name}（${CARS[bt.e.rival.car].name}）</div>`;
  }

  pause() {
    const g = this.game;
    this.paused = true;
    const go = (make) => g.transition(() => g.setMode(make()));
    if (this.opts.story) {
      const st = g.story;
      const inRace = this.bt && this.bt.phase === 'race';
      pauseMenu(g, 'PAUSE', [
        { label: '再開', action: () => { this.paused = false; } },
        ...(inRace ? [{ label: 'リタイア', sub: '敗北扱い', action: () => { this.paused = false; this.endBattle('lose'); } }] : []),
        { label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォースの調整とパワー/トルク曲線', action: () => this.openSetting() },
        ...(inRace ? [] : [{ label: '北池袋出口から西池袋へ', sub: '首都高を降りて川越街道へ（GSでセーブできます）', action: () => go(() => this.toWest(0)) }]),
        { label: 'タイトルへ戻る', sub: `未セーブの進行は失われます　（所持金 ${fmtMoney(st.money)}　${st.wins}勝${st.losses}敗）`, action: () => go(() => new TitleMode(g)) },
      ], () => { this.paused = false; });
      return;
    }
    const c1Start = (lane) => { const p = getCoursePath(LAYOUTS.find((l) => l.key === lane)).posAt(-8, 0); return { x: p.x, z: p.z, h: p.h }; };
    pauseMenu(g, 'PAUSE', [
      { label: '再開', action: () => { this.paused = false; } },
      { label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォースの調整とパワー/トルク曲線', action: () => this.openSetting() },
      { label: 'C1 外回りのスタート地点へ', sub: '江戸橋JCT付近', action: () => go(() => new ShutoFreeMode(g, { ...this.carOpts(), area: 'c1', lane: 'c1_outer', pose: c1Start('c1_outer'), speed: 0 })) },
      { label: 'C1 内回りのスタート地点へ', sub: '江戸橋JCT付近', action: () => go(() => new ShutoFreeMode(g, { ...this.carOpts(), area: 'c1', lane: 'c1_inner', pose: c1Start('c1_inner'), speed: 0 })) },
      { label: '5号池袋線 北池袋入口へ', sub: '上り（都心方面）の入口', action: () => go(() => new ShutoFreeMode(g, { ...this.carOpts(), area: 'shuto5', pose: lanePose(SHUTO5.U, 12), speed: LINK_SPEED })) },
      { label: '西池袋タウンへ', sub: '北池袋出口から川越街道へ', action: () => go(() => this.toWest(0)) },
      { label: 'PRACTICEメニューへ', action: () => go(() => new TitleMode(g, 'practice')) },
    ], () => { this.paused = false; });
  }

  openSetting() {
    const g = this.game;
    this.paused = true;
    if (this.opts.story) {
      const car = activeCar(g.story);
      openSetup(g, { carId: car.carId, equipped: car.equipped, setup: car.setup, onChange: (S) => { car.setup = S; this.session.applySetup(this.P, S); }, onClose: () => { g.input.pressed.clear(); this.paused = false; } });
      return;
    }
    openSetup(g, {
      carId: this.opts.carId, equipped: this.opts.equipped, setup: this.opts.setup,
      onChange: (S) => { this.opts.setup = S; this.session.applySetup(this.P, S); if (this.opts.setupKey) savePracticeSetup(this.opts.setupKey, S); },
      onClose: () => { g.input.pressed.clear(); this.paused = false; },
    });
  }

  exit() {
    this.dialog?.remove?.();
    this.labels?.remove();
    this.session.dispose();
    this.hud.destroy();
    this.game.world.setCourse(null);
    this.game.mirrorModel = null;
  }
}
