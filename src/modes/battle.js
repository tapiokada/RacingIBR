// エンカウントバトル
import { DriveSession } from '../session.js';
import { Hud } from '../ui/hud.js';
import { el, Menu, panel } from '../ui/ui.js';
import { RaceAI } from '../ai.js';
import { CARS, PLAYER } from '../data/cars.js';
import { PART_BY_ID, CATEGORY_NAME, RANK_STARS } from '../data/parts.js';
import { activeCar, addPart, fmtMoney, fmtTime } from '../save.js';
import { fuelState } from '../save.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { LapTracker, Countdown, pauseMenu } from './common.js';
import { coursePath, TownMode } from './town.js';
import { areaOfLayout, HARUNA_UNLOCK_WINS } from '../data/map.js';

const SNAP_GAP = 200; // ちぎり判定距離[m]

export class BattleMode {
  constructor(game, opts) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const { rival, layout } = this.opts;
    const path = coursePath(layout);
    this.path = path;
    this.area = areaOfLayout(layout);
    g.setArea(this.area);
    g.audio.playBgm('battle');
    g.world.setCourse(path);
    g.rig.setGallerySpots(path);
    this.session = new DriveSession(g, { corridor: path.corridor, path });
    const mine = activeCar(g.story);
    const P = this.session.addCar({ carId: mine.carId, equipped: mine.equipped, setup: mine.setup || null, color: mine.color, isPlayer: true, name: PLAYER.name, fuel: fuelState(mine) });
    const R = this.session.addCar({ carId: rival.car, equipped: rival.parts, setup: rival.setup || null, color: rival.color, name: rival.name });
    const hw = path.hw[0];
    const lat = Math.min(2.4, hw - 1.4);
    const s0 = path.open ? path.startS : 0;
    const pp = path.posAt(s0 - 9, lat), rp = path.posAt(s0 - 9, -lat);
    P.car.place(pp.x, pp.z, pp.h, 0);
    R.car.place(rp.x, rp.z, rp.h, 0);
    R.ai = new RaceAI(R.car, path, rival.skill, { margin: rival.margin });
    this.P = P; this.R = R;
    this.tp = new LapTracker(path, -9);
    this.tr = new LapTracker(path, -9);
    this.laps = layout.course.laps;
    this.total = this.laps * (path.open ? path.raceLen : path.length);
    this.session.frozen = true;
    this.session.controlsEnabled = false;
    g.mirrorModel = P.model;
    g.rig.mode = g.rig.mode === 'gallery' ? 'chase' : g.rig.mode;
    g.rig.reset();
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(path, this.area);
    // バトル中のリセットは10km/h以下のときだけ、10m後方へ
    this.session.resetRule = 'battle';
    this.session.onResetDenied = () => this.hud.flash('', 1.2, 'リセットは10km/h以下で使用できます');
    this.session.onReset = () => this.hud.flash('RESET', 0.8, '10m後方から再スタート');
    this.t = 0;
    this.raceT = 0;
    this.state = 'intro';
    this.result = null;
    this.introT = 2.2;
    this.hud.flash(`VS ${rival.name}`, 2.2, path.open ? `${layout.name}　${(path.raceLen / 1000).toFixed(2)}km` : `${layout.name}　${this.laps}LAP`);
    this.countdown = new Countdown(g, this.hud, () => {
      this.state = 'race';
      this.session.frozen = false;
      this.session.controlsEnabled = true;
      this.tp.start(this.raceT); this.tr.start(this.raceT);
    });
  }

  update(dt) {
    const g = this.game;
    const s = this.session;
    if (this.paused) return;
    if (g.input.hitCode('Escape') && this.state !== 'result') { this.pause(); return; }
    if (this.state === 'intro') { this.introT -= dt; if (this.introT <= 0) this.state = 'count'; }
    if (this.state === 'count') this.countdown.update(dt);
    if (this.state === 'race' || this.state === 'finish') this.raceT += dt;
    // ラバーバンド（控えめ）
    const gap = this.tp.dist - this.tr.dist;
    if (this.R.ai) this.R.ai.boost = gap > 80 ? 1.03 : gap < -100 ? 0.985 : 1.0;
    s.update(dt);
    { const c = activeCar(g.story); c.km = (c.km || 0) + this.P.car.speed * dt / 1000; }
    this.tp.update(this.P.car, this.raceT);
    this.tr.update(this.R.car, this.raceT);
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'near', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    s.updateAudio(this.P);

    if (this.state === 'race') {
      let res = null;
      if (this.tp.dist >= this.total) {
        res = { win: true, how: 'finish' };
        // 完走タイムを記録（GSのタイムランキング用）
        const st = g.story, k = this.opts.layout.key, mine = activeCar(st);
        st.bestTimes ||= {};
        const prev = st.bestTimes[k];
        if (!prev || this.raceT < prev.time) st.bestTimes[k] = { time: +this.raceT.toFixed(2), carId: mine.carId, date: new Date().toISOString() };
      }
      else if (this.tr.dist >= this.total) res = { win: false, how: 'finish' };
      else if (gap >= SNAP_GAP) res = { win: true, how: 'snap' };
      else if (gap <= -SNAP_GAP) res = { win: false, how: 'snap' };
      if (res) {
        this.state = 'finish';
        this.result = res;
        this.finishT = 2.5;
        this.session.controlsEnabled = false;
        // ゴール後はAIに任せて減速
        this.session.coastBrake = this.path.open ? 0.75 : 0.3;
        this.hud.flash(res.win ? 'YOU WIN!' : 'YOU LOSE…', 2.5, res.how === 'snap' ? (res.win ? 'ライバルを引き離した！' : '引き離された…') : 'FINISH');
        g.audio.beep(res.win ? 1320 : 330, 0.5, 0.3);
      }
    }
    if (this.state === 'finish') {
      this.finishT -= dt;
      if (this.finishT <= 0) { this.state = 'result'; this.showResult(); }
    }

    // HUD
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    const lap = Math.min(this.laps, Math.max(1, Math.floor(this.tp.dist / this.path.length) + 1));
    const ahead = gap >= 0;
    const head = this.path.open ? `残り <b>${(Math.max(0, this.total - this.tp.dist) / 1000).toFixed(2)}</b> km` : `LAP <b>${lap}</b>/${this.laps}`;
    this.hud.tc.innerHTML = `<div class="lap">${head}</div><div class="time">${fmtTime(this.raceT)}</div>`;
    const pct = Math.max(-1, Math.min(1, gap / SNAP_GAP));
    this.hud.tr.innerHTML = `<div class="pos ${ahead ? 'p1' : 'p2'}">${ahead ? '1st' : '2nd'}</div>
      <div class="gap">${ahead ? '+' : '−'}${Math.abs(gap).toFixed(0)} m</div>
      <div class="gapbar"><div class="mid"></div><div class="fill" style="left:${50 + Math.min(0, pct) * 50}%;width:${Math.abs(pct) * 50}%;background:${ahead ? '#33e1ff' : '#ff4d6d'}"></div></div>
      <div class="rival">${this.opts.rival.name}（${CARS[this.opts.rival.car].name}）</div>`;
    this.hud.tl.innerHTML = `<div class="who">${this.opts.layout.name}</div><div class="hint">${SNAP_GAP}m引き離しで勝利</div>`;
    // バトル中はマップを自車中心に約300m四方へ拡大
    this.hud.mapZoom = 300; this.hud.mapCenter = { x: this.P.car.x, z: this.P.car.z };
    this.hud.drawMap([
      { x: this.R.car.x, z: this.R.car.z, h: this.R.car.h, color: '#ff4d6d' },
      { x: this.P.car.x, z: this.P.car.z, h: this.P.car.h, color: '#33e1ff' },
    ]);
  }

  pause() {
    const g = this.game;
    this.paused = true;
    pauseMenu(g, 'PAUSE', [
      { label: '再開', action: () => { this.paused = false; } },
      { label: 'リタイア', sub: '敗北扱いで街に戻ります', action: () => { this.paused = false; this.result = { win: false, how: 'retire' }; this.state = 'result'; this.showResult(); } },
    ], () => { this.paused = false; });
  }

  showResult() {
    const g = this.game;
    const st = g.story;
    const r = this.opts.rival;
    const win = this.result.win;
    this.session.controlsEnabled = false;
    this.session.frozen = true;
    let unlockMsg = '';
    if (win) {
      st.wins++; st.money += r.reward; st.defeated[r.id] = (st.defeated[r.id] || 0) + 1;
      if (st.wins === HARUNA_UNLOCK_WINS) unlockMsg = '榛名山エリアが解放された！（ポーズメニューから移動）';
    }
    else st.losses++;
    const box = panel(win ? 'BATTLE WIN' : 'BATTLE LOSE',
      el('div', { class: 'enc-head' }, el('span', { class: 'enc-team' }, r.team), el('span', { class: 'enc-name' }, r.name)),
      el('div', { class: 'enc-line' }, `「${win ? r.lines.win : r.lines.lose}」`),
      el('div', { class: 'hint' }, `タイム ${fmtTime(this.raceT)}　${this.result.how === 'snap' ? '（ちぎり決着）' : this.result.how === 'retire' ? '（リタイア）' : ''}`));
    const dlg = el('div', { class: 'screen dialog result' }, box);
    g.ui.appendChild(dlg);
    const back = (msg) => {
      g.transition(() => g.setMode(new TownMode(g, { returnPos: this.opts.returnPos, message: msg })));
    };
    if (win) {
      box.appendChild(el('div', { class: 'reward' }, `賞金 ${fmtMoney(r.reward)} 獲得！`));
      box.appendChild(el('div', { class: 'hint' }, '戦利品：ライバルのマシンからパーツを1つ選んで持ち帰れます'));
      const parts = Object.entries(r.parts).filter(([, id]) => id).map(([cat, id]) => ({ cat, p: PART_BY_ID[id] }));
      const menu = new Menu(g, parts.map(({ cat, p }) => ({
        label: `${CATEGORY_NAME[cat]}：${p.name}`,
        sub: `${RANK_STARS(p.rank)}　${p.desc}　（所持 ${st.owned[p.id] || 0}）`,
        action: () => {
          addPart(st, p.id);
          menu.destroy();
          back(unlockMsg || `${p.name} を手に入れた！`);
        },
      })), { className: 'scroll' });
      box.appendChild(menu.root);
    } else {
      const menu = new Menu(g, [{ label: '街に戻る', action: () => { menu.destroy(); back('次は負けない…'); } }]);
      box.appendChild(menu.root);
    }
  }

  exit() {
    this.session.dispose();
    this.hud.destroy();
    this.game.world.setCourse(null);
    this.game.mirrorModel = null;
  }
}
