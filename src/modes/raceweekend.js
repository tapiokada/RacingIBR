// ストーリー：サーキットレース（8台出走）
// プラクティス（時間制・省略可）→ 予選（時間制・省略可）→ 決勝（規定周回・スタンディングスタート）
// 予選のベストラップ順に決勝のグリッドが決まる。時間制セッションはポーズメニューから途中で終えて次へ進める。
// 途中で終えたとき・省略したときは、残り時間にライバルが走る分を見積もってタイムに反映する（ライバルがタイムを上げて順位が入れ替わることがある）
import { DriveSession } from '../session.js';
import { Hud } from '../ui/hud.js';
import { el, Menu, panel } from '../ui/ui.js';
import { RaceAI } from '../ai.js';
import { CARS, PLAYER } from '../data/cars.js';
import { RIVAL_BY_ID } from '../data/rivals.js';
import { activeCar, fuelState, fmtMoney, fmtTime } from '../save.js';
import { openSetup } from '../ui/setup.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { LapTracker, pauseMenu } from './common.js';
import { coursePath } from './town.js';
import { areaOfLayout, CIRCUIT_LAYOUTS } from '../data/map.js';
import { CLASSES, classOfPwr, pwrOf, pickEntrants, raceMoney, RACE_FORMAT, SESSION_LEN, refLap, simSession } from '../data/races.js';

const PHASE_NAME = { practice: 'プラクティス', qualify: '予選', race: '決勝' };
const PIT_S = -110; // 時間制セッションでコースに出る位置（ホームストレート後方）

// ---------------- エントリー（街のポーズメニューから） ----------------
export function raceEntryItems(game, { returnPos, townMode, close, onCancel }) {
  const st = game.story;
  const mine = activeCar(st);
  const pwr = pwrOf(mine.carId, mine.equipped, mine.setup);
  const cls = classOfPwr(pwr);
  return CIRCUIT_LAYOUTS.map((L) => {
    const cid = L.course.circuit;
    const m = raceMoney(cls.id, cid);
    const rec = st.raceRecords?.[`${L.key}_${cls.id}`];
    const poor = st.money < m.fee;
    return {
      label: `サーキットレース：${L.course.name.replace(/ .*$/, '')}（${cls.id}）`, disabled: poor,
      sub: `${cls.name}・8台・決勝${RACE_FORMAT[cid].laps}周　参加費 ${fmtMoney(m.fee)}（給油込み）　優勝賞金 ${fmtMoney(m.prize[0])}${rec ? `　最高位 ${rec.best}位・優勝${rec.wins}回` : ''}${poor ? '　（所持金が足りません）' : ''}`,
      action: () => { close(); openEntry(game, L, cls, pwr, m, { returnPos, townMode, onCancel }); },
    };
  });
}

function openEntry(game, L, cls, pwr, money, { returnPos, townMode, onCancel }) {
  const st = game.story;
  const mine = activeCar(st);
  const seed = (st.raceCount || 0) + 1;
  const entrants = pickEntrants(cls.id, st.wins || 0, seed + L.key.length * 31);
  const rows = entrants.map((id) => { const r = RIVAL_BY_ID[id]; const p = pwrOf(r.car, r.parts, r.setup || null); return el('tr', {}, el('td', {}, r.name), el('td', {}, r.team), el('td', {}, CARS[r.car].name), el('td', {}, `${p.toFixed(2)}kg/PS`), el('td', {}, classOfPwr(p).id)); });
  const box = panel(`${L.course.name} — エントリー`,
    el('div', { class: 'hint' }, `${cls.name}（${cls.desc}）　あなたの車：${CARS[mine.carId].name} ${pwr.toFixed(2)}kg/PS`),
    el('div', { class: 'hint' }, `プラクティス${SESSION_LEN.practice / 60}分・予選${SESSION_LEN.qualify / 60}分（どちらも省略可）→ 決勝${RACE_FORMAT[L.course.circuit].laps}周（スタンディングスタート）`),
    el('table', { class: 'rec-table' }, el('tr', {}, el('th', {}, '出走者'), el('th', {}, 'チーム'), el('th', {}, '車'), el('th', {}, 'PWR'), el('th', {}, 'クラス')), ...rows),
    el('div', { class: 'hint' }, `賞金：${money.prize.map((v, i) => `${i + 1}位 ${fmtMoney(v)}`).join('　')}`));
  const dlg = el('div', { class: 'screen dialog' }, box);
  const done = () => { game.input.pressed.clear(); menu.destroy(); dlg.remove(); };
  const menu = new Menu(game, [
    {
      label: `参加する（${fmtMoney(money.fee)}）`, sub: '参加費には燃料の満タン給油が含まれます',
      action: () => {
        done();
        st.money -= money.fee;
        st.raceCount = seed;
        mine.fuel = CARS[mine.carId].tank || 50;
        const wk = { layout: L, cls: cls.id, entrants, money, returnPos, townMode, practice: null, qualify: null, done: {} };
        game.transition(() => game.setMode(new RaceWeekendMode(game, { wk, phase: 'hub' })), 450);
      },
    },
    { label: 'やめる', action: () => { done(); onCancel && onCancel(); } },
  ], { onBack: () => { done(); onCancel && onCancel(); } });
  box.appendChild(menu.root);
  game.ui.appendChild(dlg);
}

// ---------------- 週末（ハブ・各セッション） ----------------
export class RaceWeekendMode {
  constructor(game, opts) { this.game = game; this.opts = opts; this.wk = opts.wk; this.phase = opts.phase; }

  enter() {
    const g = this.game, wk = this.wk;
    const path = coursePath(wk.layout);
    this.path = path;
    this.area = areaOfLayout(wk.layout);
    g.setArea(this.area);
    g.world.setCourse(path);
    g.rig.setGallerySpots(path);
    this.session = new DriveSession(g, { corridor: path.corridor, path });
    const mine = (this.mine = activeCar(g.story));
    const P = this.session.addCar({ carId: mine.carId, equipped: mine.equipped, setup: mine.setup || null, color: mine.color, isPlayer: true, name: PLAYER.name, fuel: fuelState(mine) });
    P.car.fuelRate = 1; // サーキットでは燃料は実燃費どおりに減る
    P.id = 'player';
    this.P = P;
    this.cars = [P];
    g.mirrorModel = P.model;
    if (g.rig.mode === 'gallery') g.rig.mode = 'chase';
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(path, this.area);
    this.t = 0;
    if (this.phase === 'hub') this.enterHub();
    else if (this.phase === 'race') this.enterRace();
    else this.enterTimed();
    g.rig.reset();
  }

  nameOf(id) { return id === 'player' ? PLAYER.name : RIVAL_BY_ID[id].name; }
  carOf(id) { return id === 'player' ? CARS[this.mine.carId].name : CARS[RIVAL_BY_ID[id].car].name; }

  addRivals(placeFn) {
    this.wk.entrants.forEach((id, k) => {
      const r = RIVAL_BY_ID[id];
      const e = this.session.addCar({ carId: r.car, equipped: r.parts, setup: r.setup || null, color: r.color, name: r.name });
      e.id = id;
      const p = placeFn(k);
      e.car.place(p.x, p.z, p.h, 0);
      e.ai = new RaceAI(e.car, this.path, r.skill, { margin: r.margin });
      this.cars.push(e);
    });
  }

  // ---------- ハブ（セッションの合間） ----------
  enterHub() {
    const g = this.game, wk = this.wk;
    g.audio.playBgm('town');
    const sp = this.path.posAt(PIT_S, -2.5);
    this.P.car.place(sp.x, sp.z, sp.h, 0);
    this.session.frozen = true; this.session.controlsEnabled = false;
    if (g.rig.mode !== 'gallery') g.rig.mode = 'chase';
    this.showHub();
  }

  showHub() {
    const g = this.game, wk = this.wk;
    const items = [];
    const go = (phase) => g.transition(() => g.setMode(new RaceWeekendMode(g, { wk, phase })));
    if (!wk.done.practice && !wk.done.qualify) {
      items.push({ label: `プラクティス（${SESSION_LEN.practice / 60}分）を走る`, sub: 'コースとセッティングの確認。ライバル7台も同時に走行', action: () => go('practice') });
      items.push({ label: 'プラクティスを省略', action: () => { wk.done.practice = true; this.refreshHub(); } });
    } else if (!wk.done.qualify) {
      items.push({ label: `予選（${SESSION_LEN.qualify / 60}分）を走る`, sub: 'ベストラップの順に決勝のグリッドが決まる', action: () => go('qualify') });
      items.push({ label: '予選を省略（最後尾スタート）', sub: 'ライバルは予選を走ります', action: () => { wk.qualify = this.simulateWhole('qualify'); wk.done.qualify = true; this.refreshHub(); } });
    } else {
      items.push({ label: `決勝（${RACE_FORMAT[wk.layout.course.circuit].laps}周）スタート`, sub: 'スタンディングスタート。シグナル消灯でスタート', action: () => go('race') });
    }
    items.push({ label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォース', action: () => this.openSetting(() => this.refreshHub()) });
    items.push({ label: '棄権して街へ戻る', sub: '参加費は戻りません', action: () => this.leave('レースを棄権した') });
    const box = panel(`${wk.layout.course.name}　${CLASSES.find((c) => c.id === wk.cls).name}`,
      el('div', { class: 'hint' }, `プラクティス：${wk.done.practice ? (wk.practice ? '走行済み' : '省略') : '—'}　／　予選：${wk.done.qualify ? (wk.qualify?.player != null ? '走行済み' : '省略（最後尾）') : '—'}　／　燃料 ${this.mine.fuel.toFixed(1)}L`),
      this.standingsTable(wk.qualify || wk.practice, wk.qualify ? '予選結果（決勝グリッド）' : wk.practice ? 'プラクティス結果' : 'エントリー'));
    const dlg = el('div', { class: 'screen dialog' }, box);
    const menu = new Menu(g, items);
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
    this.hubDlg = { dlg, menu };
  }

  refreshHub() { if (this.hubDlg) { this.game.input.pressed.clear(); this.hubDlg.menu.destroy(); this.hubDlg.dlg.remove(); } this.showHub(); }

  // ベストラップの表（times: { id: best|null }）。null のときはエントリー一覧
  standingsTable(times, title) {
    const ids = ['player', ...this.wk.entrants];
    const order = times ? this.order(times) : ids;
    const best = times ? Math.min(...order.map((id) => times[id] ?? 1e9)) : null;
    return el('div', {}, el('div', { class: 'lbl' }, title),
      el('table', { class: 'rec-table' }, el('tr', {}, el('th', {}, '#'), el('th', {}, 'ドライバー'), el('th', {}, '車'), el('th', {}, 'ベスト'), el('th', {}, '差')),
        ...order.map((id, i) => el('tr', { class: id === 'player' ? 'best' : '' }, el('td', {}, String(i + 1)), el('td', {}, this.nameOf(id)), el('td', {}, this.carOf(id)),
          el('td', { class: 'hl' }, times ? fmtTime(times[id]) : ''), el('td', {}, times && times[id] != null && i > 0 ? `+${(times[id] - best).toFixed(3)}` : '')))));
  }

  // ベストラップ順（タイムなしは後ろ。プレイヤーがタイムなしなら最後尾）
  order(times) {
    const ids = ['player', ...this.wk.entrants];
    return ids.sort((a, b) => (times[a] ?? 1e9 + (a === 'player' ? 1 : 0)) - (times[b] ?? 1e9 + (b === 'player' ? 1 : 0)));
  }

  // ライバルのセッション全体を見積もる（省略したとき）
  simulateWhole(kind) {
    const res = { player: null };
    for (const id of this.wk.entrants) {
      const ref = refLap(this.wk.layout.key, id) || this.path.length / 40;
      const laps = simSession(id, ref, SESSION_LEN[kind]);
      res[id] = laps.length ? Math.min(...laps) : null;
    }
    return res;
  }

  // ---------- 時間制セッション（プラクティス・予選） ----------
  enterTimed() {
    const g = this.game, path = this.path, L = path.length;
    g.audio.playBgm('battle');
    const sp = path.posAt(PIT_S, -2.5);
    this.P.car.place(sp.x, sp.z, sp.h, 0);
    // ライバルはコース上に間隔を空けて配置（それぞれコントロールラインを通過した周から計測）
    const s0 = (k) => PIT_S + (L * (k + 1)) / 8;
    this.addRivals((k) => path.posAt(s0(k), 0));
    this.trk = new Map();
    for (const e of this.cars) this.trk.set(e, { tr: new LapTracker(path, e === this.P ? PIT_S : s0(this.cars.indexOf(e) - 1) - L), laps: [] });
    this.remain = SESSION_LEN[this.phase];
    this.endT = null;
    this.state = 'run';
    this.sectorFlash = '';
    this.session.resetRule = null;
    this.hud.flash(PHASE_NAME[this.phase], 2.2, `${this.wk.layout.name}　${this.remain / 60}分`);
  }

  updateTimed(dt) {
    const g = this.game;
    if (this.state === 'run') this.remain -= dt;
    if (this.state === 'run' && this.remain <= 0) {
      this.remain = 0; this.endT = this.t; this.state = 'checker';
      if (!this.trk.get(this.P).tr.started) { this.endTimed(false); return; } // アウトラップ中ならそのまま終了
      this.hud.flash('CHECKER', 2.2, '走行中の周を終えるとセッション終了');
    }
    for (const [e, o] of this.trk) {
      const tr = o.tr;
      const ev = tr.update(e.car, this.t);
      if (!tr.started && tr.dist >= 0) { if (this.endT == null) { tr.start(this.t); tr.dist = 0; tr.prevS = null; } }
      if (ev && ev.type === 'lap') {
        // チェッカー後に始めた周は数えない
        const startT = this.t - ev.time;
        if (this.endT == null || startT <= this.endT) o.laps.push(ev.time);
        if (e === this.P) { this.hud.flash(fmtTime(ev.time), 1.8, ev.time === Math.min(...o.laps) ? 'BEST LAP' : `LAP ${o.laps.length}`); if (this.state === 'checker') this.endTimed(false); }
        else if (this.endT != null) tr.started = false; // ライバルもチェッカーで終了
      }
    }
    // HUD
    const tr = this.trk.get(this.P).tr;
    const cur = tr.started ? this.t - tr.lapStart : 0;
    const mm = Math.floor(this.remain / 60), ss = Math.floor(this.remain % 60);
    this.hud.tc.innerHTML = `<div class="lap">${PHASE_NAME[this.phase]}　${this.state === 'run' ? `残り <b>${mm}:${String(ss).padStart(2, '0')}</b>` : '<b>CHECKER</b>'}</div><div class="time">${tr.started ? fmtTime(cur) : 'OUT LAP'}</div>`;
    const times = this.bestTimes();
    const order = this.order(times).slice(0, 8);
    const best = times[order[0]];
    this.hud.tr.innerHTML = `<div class="lbl">${PHASE_NAME[this.phase]} 順位</div><div class="laps standings">${order.map((id, i) => `<div class="${id === 'player' ? 'best' : ''}">${i + 1}. ${this.nameOf(id)} ${times[id] != null ? (i ? `+${(times[id] - best).toFixed(3)}` : fmtTime(times[id])) : '--'}</div>`).join('')}</div>`;
    this.hud.tl.innerHTML = `<div class="who">${this.wk.layout.name}</div><div class="hint">${PHASE_NAME[this.phase]}　Esc：順位・セッション終了</div>`;
  }

  bestTimes() {
    const res = {};
    for (const [e, o] of this.trk) res[e.id] = o.laps.length ? Math.min(...o.laps) : null;
    return res;
  }

  // セッション終了。early=true：時間を残して終えた（残り時間はライバルの走行を見積もる）
  endTimed(early) {
    if (this.state === 'done') return;
    const g = this.game, wk = this.wk;
    this.state = 'done';
    const before = this.bestTimes();
    const times = { ...before };
    const improved = [];
    if (early && this.remain > 0) {
      for (const [e, o] of this.trk) {
        if (e === this.P) continue;
        const ref = refLap(wk.layout.key, e.id) || (o.laps.length ? Math.min(...o.laps) : this.path.length / 40);
        const laps = simSession(e.id, ref, this.remain);
        if (laps.length) { const b = Math.min(...laps); if (times[e.id] == null || b < times[e.id]) { times[e.id] = b; improved.push(e.id); } }
      }
    }
    const beforeOrder = this.order(before), afterOrder = this.order(times);
    wk[this.phase] = times;
    wk.done[this.phase] = true;
    if (this.phase === 'qualify') wk.done.practice = true;
    this.session.controlsEnabled = false;
    this.session.coastBrake = 0.6;
    const pPos = afterOrder.indexOf('player') + 1;
    const note = improved.length ? `セッション終了後、${improved.map((id) => this.nameOf(id)).join('・')} がタイムを更新${beforeOrder.indexOf('player') !== afterOrder.indexOf('player') ? `（あなたは ${beforeOrder.indexOf('player') + 1}位 → ${pPos}位）` : ''}` : '';
    const box = panel(`${PHASE_NAME[this.phase]} 結果`,
      el('div', { class: 'reward' }, times.player != null ? `${pPos}位　ベスト ${fmtTime(times.player)}` : 'タイムなし'),
      note ? el('div', { class: 'hint' }, note) : el('span'),
      this.standingsTable(times, this.phase === 'qualify' ? '決勝グリッド' : '順位'));
    const dlg = el('div', { class: 'screen dialog result' }, box);
    const menu = new Menu(g, [{ label: '次へ', action: () => { menu.destroy(); dlg.remove(); g.transition(() => g.setMode(new RaceWeekendMode(g, { wk, phase: 'hub' }))); } }]);
    box.appendChild(menu.root);
    setTimeout(() => { if (g.mode === this) g.ui.appendChild(dlg); }, 900);
  }

  // ---------- 決勝 ----------
  enterRace() {
    const g = this.game, wk = this.wk, path = this.path;
    g.audio.playBgm('battle');
    this.laps = RACE_FORMAT[wk.layout.course.circuit].laps;
    const grid = this.order(wk.qualify || {});
    this.grid = grid;
    const hw = path.hw[0];
    const lat = Math.min(2.8, hw - 1.6);
    const slot = (k) => ({ s: -10 - k * 8, lat: (k % 2 ? 1 : -1) * lat }); // 2列の千鳥グリッド（ポールはイン側）
    const pk = grid.indexOf('player');
    const ps = slot(pk), pp = path.posAt(ps.s, ps.lat);
    this.P.car.place(pp.x, pp.z, pp.h, 0);
    const rivalSlot = wk.entrants.map((id) => grid.indexOf(id));
    this.addRivals((k) => { const s = slot(rivalSlot[k]); return path.posAt(s.s, s.lat); });
    this.trk = new Map();
    for (const e of this.cars) { const k = grid.indexOf(e.id); this.trk.set(e, { tr: new LapTracker(path, slot(k).s), laps: [], finish: null }); }
    this.session.frozen = true; this.session.controlsEnabled = false;
    this.session.resetRule = 'battle';
    this.session.onResetDenied = () => this.hud.flash('', 1.2, 'リセットは10km/h以下で使用できます');
    this.state = 'grid';
    this.raceT = 0;
    this.lightT = 0;
    this.goAt = 5.6 + 0.3 + Math.random() * 0.9; // 5灯点灯後、0.3〜1.2秒で消灯
    this.hud.flash('決勝', 2, `${wk.layout.name}　${this.laps}LAP　グリッド ${pk + 1}番手`);
    g.world.setSignal?.(0);
  }

  updateRace(dt) {
    const g = this.game, s = this.session;
    if (this.state === 'grid') {
      this.lightT += dt;
      const n = Math.max(0, Math.min(5, Math.floor(this.lightT - 0.6)));
      if (n !== this.lights) { this.lights = n; g.world.setSignal?.(n); if (n > 0) { g.audio.beep(520, 0.15, 0.2); this.hud.flash('●'.repeat(n) + '○'.repeat(5 - n), 1.1); } }
      if (this.lightT >= this.goAt) {
        this.state = 'race'; g.world.setSignal?.(0);
        s.frozen = false; s.controlsEnabled = true;
        for (const [, o] of this.trk) o.tr.start(0);
        this.hud.flash('GO!', 1.0); g.audio.beep(1200, 0.4, 0.3);
      }
    }
    if (this.state === 'race' || this.state === 'finish') this.raceT += dt;
    for (const [e, o] of this.trk) {
      const ev = o.tr.update(e.car, this.raceT);
      if (ev && ev.type === 'lap' && this.state !== 'grid') {
        o.laps.push(ev.time);
        if (o.finish == null && o.tr.lap >= this.laps) {
          o.finish = this.raceT;
          if (e === this.P) this.playerFinished();
          else if (e.ai) e.ai.boost = 0.75; // クールダウン
        } else if (e === this.P && o.finish == null) this.hud.flash(fmtTime(ev.time), 1.6, o.tr.lap === this.laps - 1 ? 'FINAL LAP' : `LAP ${o.tr.lap + 1}/${this.laps}`);
      }
    }
    if (this.state === 'finish') {
      this.finishWait -= dt;
      const allDone = [...this.trk.values()].every((o) => o.finish != null);
      if (allDone || this.finishWait <= 0) this.showRaceResult();
    }
    // HUD
    const rank = this.raceOrder();
    const pi = rank.findIndex((x) => x.e === this.P);
    const po = this.trk.get(this.P);
    const lap = Math.min(this.laps, Math.max(1, po.tr.lap + 1));
    this.hud.tc.innerHTML = `<div class="lap">LAP <b>${this.state === 'grid' ? 1 : lap}</b>/${this.laps}</div><div class="time">${fmtTime(this.raceT)}</div>`;
    const myD = po.tr.dist;
    const gapOf = (x) => { if (x.o.finish != null && po.finish != null) return `${(x.o.finish - po.finish >= 0 ? '+' : '−')}${Math.abs(x.o.finish - po.finish).toFixed(1)}s`; const d = x.o.tr.dist - myD; const v = Math.max(15, this.P.car.speed); return `${d >= 0 ? '−' : '+'}${Math.abs(d / v).toFixed(1)}s`; };
    this.hud.tr.innerHTML = `<div class="pos ${pi === 0 ? 'p1' : 'p2'}">P${pi + 1}<small>/8</small></div><div class="laps standings">${rank.map((x, i) => `<div class="${x.e === this.P ? 'best' : ''}">${i + 1}. ${this.nameOf(x.e.id)}${x.e === this.P ? '' : ` <span>${gapOf(x)}</span>`}${x.o.finish != null ? ' 🏁' : ''}</div>`).join('')}</div>`;
    this.hud.tl.innerHTML = `<div class="who">${this.wk.layout.name}　決勝</div><div class="hint">Esc：ポーズ／リタイア</div>`;
  }

  // 順位：ゴールした車はゴール順、走行中は走行距離順
  raceOrder() {
    return [...this.trk.entries()].map(([e, o]) => ({ e, o })).sort((a, b) => {
      if (a.o.finish != null || b.o.finish != null) return (a.o.finish ?? 1e9) - (b.o.finish ?? 1e9) || b.o.tr.dist - a.o.tr.dist;
      return b.o.tr.dist - a.o.tr.dist;
    });
  }

  playerFinished() {
    const g = this.game;
    this.state = 'finish';
    this.finishWait = 30;
    const pos = this.raceOrder().findIndex((x) => x.e === this.P) + 1;
    this.hud.flash(pos === 1 ? 'WINNER!' : `P${pos}`, 2.5, 'FINISH');
    g.audio.beep(pos === 1 ? 1320 : 880, 0.5, 0.3);
    // ゴール後はAIでクールダウン走行
    this.session.controlsEnabled = false;
    this.P.ai = new RaceAI(this.P.car, this.path, 0.8);
    this.P.ai.boost = 0.75;
  }

  showRaceResult(retired = false) {
    if (this.state === 'result') return;
    const g = this.game, wk = this.wk, st = g.story;
    this.state = 'result';
    // まだ走っている車は、ここまでの平均ペースでゴールまでの時間を見積もる
    const total = this.laps * this.path.length;
    for (const [e, o] of this.trk) {
      if (o.finish != null || (retired && e === this.P)) continue;
      const pace = Math.max(5, o.tr.dist / Math.max(1, this.raceT));
      o.finish = this.raceT + Math.max(0, total - o.tr.dist) / pace;
      o.estimated = true;
    }
    if (retired) this.trk.get(this.P).finish = null;
    const rows = [...this.trk.entries()].map(([e, o]) => ({ e, o })).sort((a, b) => (a.o.finish ?? 1e9) - (b.o.finish ?? 1e9));
    const pos = retired ? null : rows.findIndex((x) => x.e === this.P) + 1;
    const prize = pos ? wk.money.prize[pos - 1] : 0;
    st.money += prize;
    const key = `${wk.layout.key}_${wk.cls}`;
    st.raceRecords ||= {};
    const rec = (st.raceRecords[key] ||= { best: 99, wins: 0, starts: 0 });
    rec.starts++;
    if (pos) { rec.best = Math.min(rec.best, pos); if (pos === 1) rec.wins++; }
    this.session.controlsEnabled = false;
    const win = rows[0].o.finish;
    const table = el('table', { class: 'rec-table' }, el('tr', {}, el('th', {}, '#'), el('th', {}, 'ドライバー'), el('th', {}, '車'), el('th', {}, 'タイム'), el('th', {}, 'ベストラップ'), el('th', {}, '賞金')),
      ...rows.map((x, i) => el('tr', { class: x.e === this.P ? 'best' : '' },
        el('td', {}, x.o.finish == null ? 'DNF' : String(i + 1)), el('td', {}, this.nameOf(x.e.id)), el('td', {}, this.carOf(x.e.id)),
        el('td', { class: 'hl' }, x.o.finish == null ? 'リタイア' : i === 0 ? fmtTime(x.o.finish) : `+${(x.o.finish - win).toFixed(3)}${x.o.estimated ? '*' : ''}`),
        el('td', {}, x.o.laps.length ? fmtTime(Math.min(...x.o.laps)) : '--'),
        el('td', {}, x.o.finish == null ? '' : fmtMoney(wk.money.prize[i])))));
    const box = panel('決勝 結果',
      el('div', { class: 'reward' }, pos ? `${pos}位${pos === 1 ? '　優勝！' : ''}　賞金 ${fmtMoney(prize)}` : 'リタイア'),
      table, el('div', { class: 'hint' }, '* はゴール前の車のペースから見積もったタイム'));
    const dlg = el('div', { class: 'screen dialog result' }, box);
    const menu = new Menu(g, [{ label: '街へ戻る', action: () => { menu.destroy(); dlg.remove(); this.leave(pos ? `決勝 ${pos}位　賞金 ${fmtMoney(prize)}` : 'リタイア…'); } }]);
    box.appendChild(menu.root);
    setTimeout(() => { if (g.mode === this) g.ui.appendChild(dlg); }, retired ? 0 : 1200);
  }

  // ---------- 共通 ----------
  update(dt) {
    const g = this.game;
    if (this.paused) return;
    if (g.input.hitCode('Escape') && (this.state === 'run' || this.state === 'checker' || this.state === 'race' || this.state === 'grid')) { this.pause(); return; }
    this.t += dt;
    if (this.phase !== 'hub') g.story.playtime = (g.story.playtime || 0) + dt;
    this.session.update(dt);
    if (this.phase === 'race') this.updateRace(dt);
    else if (this.phase !== 'hub') this.updateTimed(dt);
    if (g.input.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'cockpit', 'hood'])]);
    if (g.input.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, this.P.model, this.P.car);
    this.session.updateAudio(this.P);
    this.hud.update(dt);
    this.hud.drawTach(this.P.car);
    this.hud.drawMap(this.cars.map((e) => ({ x: e.car.x, z: e.car.z, h: e.car.h, color: e === this.P ? '#33e1ff' : '#ff4d6d' })).reverse());
  }

  pause() {
    const g = this.game;
    this.paused = true;
    const resume = () => { this.paused = false; };
    if (this.phase === 'race') {
      pauseMenu(g, '決勝', [
        { label: '再開', action: resume },
        { label: 'リタイア', sub: '賞金なし。街へ戻ります', action: () => { this.paused = false; this.showRaceResult(true); } },
      ], resume);
      return;
    }
    pauseMenu(g, PHASE_NAME[this.phase], [
      { label: '再開', action: resume },
      { label: '現在の順位', sub: 'ベストラップの順位とタイム差', action: () => this.showStandings() },
      { label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォース', action: () => this.openSetting(resume) },
      { label: 'ホームストレートに戻る', sub: '残り時間はそのまま', action: () => { resume(); this.toPit(); } },
      { label: `${PHASE_NAME[this.phase]}を終了して次へ進む`, sub: this.remain > 0 ? `残り${Math.ceil(this.remain / 60)}分。残り時間にライバルがタイムを上げ、順位が入れ替わることがあります` : '', action: () => { resume(); this.endTimed(true); } },
    ], resume);
  }

  showStandings() {
    const g = this.game;
    const box = panel(`${PHASE_NAME[this.phase]} — 現在の順位`, this.standingsTable(this.bestTimes(), `残り ${Math.floor(this.remain / 60)}:${String(Math.floor(this.remain % 60)).padStart(2, '0')}`));
    const dlg = el('div', { class: 'screen dialog' }, box);
    const close = () => { g.input.pressed.clear(); menu.destroy(); dlg.remove(); this.pause(); };
    const menu = new Menu(g, [{ label: '戻る', action: close }], { onBack: close });
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
  }

  toPit() {
    const sp = this.path.posAt(PIT_S, -2.5);
    this.P.car.place(sp.x, sp.z, sp.h, 0);
    const tr = this.trk.get(this.P).tr;
    tr.dist = PIT_S; tr.prevS = null; tr.hint = -1; tr.started = false; tr.sector = 0; tr.curSectors = []; tr.lap = 0;
    this.game.rig.reset();
  }

  openSetting(onClose) {
    const g = this.game, car = this.mine;
    this.paused = true;
    openSetup(g, {
      carId: car.carId, equipped: car.equipped, setup: car.setup,
      onChange: (S) => { car.setup = S; this.session.applySetup(this.P, S); },
      onClose: () => { g.input.pressed.clear(); this.paused = false; onClose && onClose(); },
    });
  }

  leave(msg) {
    const g = this.game, wk = this.wk, Town = wk.townMode, pos = wk.returnPos;
    if (this.hubDlg) { this.hubDlg.menu.destroy(); this.hubDlg.dlg.remove(); this.hubDlg = null; }
    g.transition(() => g.setMode(new Town(g, { area: pos.area, returnPos: pos, message: msg })));
  }

  exit() {
    if (this.hubDlg) { this.hubDlg.menu.destroy(); this.hubDlg.dlg.remove(); }
    this.session.dispose();
    this.hud.destroy();
    this.game.world.setCourse(null);
    this.game.mirrorModel = null;
  }
}
