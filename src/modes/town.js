// Story：街を流す（エンカウントバトル）
import * as THREE from 'three';
import { DriveSession } from '../session.js';
import { Hud } from '../ui/hud.js';
import { el, Menu, panel } from '../ui/ui.js';
import { NODES, AREAS, LAYOUTS, COURSES, TOUGE_LAYOUTS, HARUNA_UNLOCK_WINS, CIRCUIT_LAYOUTS, CIRCUIT_ENTRY_FEE, townRoadBetween, laneOffset, areaStart, arriveSpot } from '../data/map.js';
import { TrackDayMode, SESSION_TIME } from './trackday.js';
import { ALL_RIVALS } from '../data/rivals.js';
import { CARS, PLAYER } from '../data/cars.js';
import { CruiseAI } from '../ai.js';
import { townGraph, getCoursePath } from '../physics/track.js';
import { buildSpec } from '../physics/spec.js';
import { saveGame, activeCar, fmtMoney, fmtTime } from '../save.js';
import { fuelState } from '../save.js';
import { FUEL_PRICE } from '../data/cars.js';
import { openShop } from '../ui/shop.js';
import { openSetup } from '../ui/setup.js';
import { GarageMode } from './garage.js';
import { openRanking } from '../ui/ranking.js';
import { VIEW_NAMES } from '../render/cameras.js';
import { BattleMode } from './battle.js';
import { TitleMode } from './title.js';

export function coursePath(layout) {
  return getCoursePath(layout);
}

const MAX_RIVALS = 4;
const v3 = new THREE.Vector3();

export class TownMode {
  constructor(game, opts = {}) { this.game = game; this.opts = opts; }

  enter() {
    const g = this.game;
    const st = g.story;
    g.audio.playBgm('town');
    // エリア：引数 → 戻り位置 → セーブデータの順に決める
    const area = (this.area = this.opts.area || this.opts.returnPos?.area || st.area || 'west');
    st.area = area;
    g.setArea(area);
    g.world.setCourse(null);
    this.graph = townGraph(area);
    this.session = new DriveSession(g, { corridor: g.world.corridor });
    const mine = activeCar(st);
    const p = this.session.addCar({ carId: mine.carId, equipped: mine.equipped, setup: mine.setup || null, color: mine.color, isPlayer: true, name: PLAYER.name, fuel: fuelState(mine) });
    const saved = st.pos && (st.pos.area || 'west') === area ? st.pos : null;
    const pos = this.opts.returnPos || saved || areaStart(area);
    p.car.place(pos.x, pos.z, pos.h, 0);
    p.color = '#33e1ff';
    g.mirrorModel = p.model;
    g.rig.mode = this.opts.view || 'chase';
    g.rig.reset();
    this.hud = new Hud(g.ui);
    this.hud.setMapCourse(null, area);
    this.labels = el('div', { class: 'labels' });
    g.ui.appendChild(this.labels);
    this.dialog = null;
    this.paused = false;
    this.spawnT = 0;
    this.encounter = null;
    this.poiCool = 0;
    for (let i = 0; i < MAX_RIVALS; i++) this.spawnRival(true);
    this.hud.flash(this.opts.message || AREAS[area].name, 2.2, this.opts.message ? '' : 'ライバルの後ろでパッシング（' + keyName(g, 'flash') + '）してバトルを挑め！');
  }

  availableRivals() {
    const w = this.game.story.wins;
    return ALL_RIVALS.filter((r) => r.area === this.area && r.minWins <= w);
  }

  spawnRival(initial = false) {
    const s = this.session;
    const present = new Set(s.entries.filter((e) => e.rival).map((e) => e.rival.id));
    const pool = this.availableRivals().filter((r) => !present.has(r.id));
    if (!pool.length) return;
    // 未撃破を優先
    const def = this.game.story.defeated;
    pool.sort((a, b) => (def[a.id] || 0) - (def[b.id] || 0) + (Math.random() - 0.5) * 0.8);
    const r = pool[0];
    const pc = s.player.car;
    // 出現位置：プレイヤーから離れた道路上
    const edges = [];
    for (const [a, list] of Object.entries(this.graph)) for (const e of list) if ((this.graph[e.to] || []).length > 1) edges.push([a, e.to]); // 行き止まりへ向かう辺には出さない
    for (let tries = 0; tries < 40; tries++) {
      const [a, b] = edges[Math.floor(Math.random() * edges.length)];
      const A = NODES[a], B = NODES[b];
      const t = 0.3 + Math.random() * 0.4;
      const x = A.x + (B.x - A.x) * t, z = A.z + (B.z - A.z) * t;
      const d = Math.hypot(x - pc.x, z - pc.z);
      if (d < (initial ? 110 : 170) || d > 650) continue;
      if (s.entries.some((e) => Math.hypot(e.car.x - x, e.car.z - z) < 30)) continue;
      const len = Math.hypot(B.x - A.x, B.z - A.z);
      const fx = (B.x - A.x) / len, fz = (B.z - A.z) / len;
      const e = s.addCar({ carId: r.car, equipped: r.parts, setup: r.setup || null, color: r.color, name: r.name });
      const lo = laneOffset(townRoadBetween(a, b));
      e.car.place(x + fz * lo, z - fx * lo, Math.atan2(fx, fz), 9);
      e.ai = new CruiseAI(e.car, this.graph, a, b, 11 + Math.random() * 5, this.game.world.corridor);
      e.rival = r;
      e.rating = buildSpec(r.car, r.parts, r.setup || null).rating;
      // 峠の端まで来たら（プレイヤーから見えない所で）入れ替える
      e.ai.onDeadEnd = () => { if (Math.hypot(e.car.x - pc.x, e.car.z - pc.z) > 90 && !this.encounter) { this.removeRival(e); return true; } return false; };
      e.mapColor = '#ff4d6d';
      e.label = el('div', { class: 'rival-tag' }, el('b', {}, r.name), el('span', {}, `${CARS[r.car].name}　戦闘力 ${e.rating}`));
      this.labels.appendChild(e.label);
      return;
    }
  }

  removeRival(e) {
    e.label?.remove();
    this.session.removeCar(e);
  }

  update(dt) {
    const g = this.game;
    const s = this.session;
    const st = g.story;
    const inp = g.input;
    if (this.paused) return;
    st.playtime += dt;
    { const c = activeCar(st); c.km = (c.km || 0) + (s.player ? s.player.car.speed * dt / 1000 : 0); } // 走行距離計
    if (inp.hitCode('Escape') && !this.dialog) { this.pause(); return; }
    s.update(dt);
    const P = s.player;
    if (inp.hit('view')) this.hud.setView(VIEW_NAMES[g.rig.cycle(['chase', 'cockpit', 'hood'])]);
    if (inp.hit('mirror')) g.mirrorOn = !g.mirrorOn;
    this.hud.mirrorFrame.style.display = g.mirrorOn ? 'block' : 'none';
    g.rig.update(dt, P.model, P.car);
    s.updateAudio(P);

    // ライバル管理（遠すぎたら入替）
    this.spawnT -= dt;
    for (const e of s.entries.filter((x) => x.rival)) {
      const d = Math.hypot(e.car.x - P.car.x, e.car.z - P.car.z);
      if (d > 750 && !this.encounter) this.removeRival(e);
    }
    if (this.spawnT <= 0 && s.entries.filter((x) => x.rival).length < MAX_RIVALS) { this.spawnRival(); this.spawnT = 4; }

    // パッシング
    if (inp.hit('flash') && !this.encounter && !this.dialog) {
      P.flash = 0.35;
      const tgt = this.findFlashTarget();
      if (tgt) {
        this.encounter = { e: tgt, t: 0.7 };
      }
    }
    if (this.encounter && !this.dialog) {
      this.encounter.t -= dt;
      if (this.encounter.t <= 0) this.openEncounter(this.encounter.e);
    }

    // エリア出口（境界の看板の先まで走ると暗転して移動）
    if (!this.dialog && !this.leaving) {
      for (const gm of g.world.gateMarkers) {
        if (Math.hypot(gm.x - P.car.x, gm.z - P.car.z) < 9) { this.changeArea(gm.gate.to, arriveSpot(gm.gate)); break; }
      }
    }

    // 施設
    this.poiCool -= dt;
    let near = null;
    for (const m of g.world.poiMarkers) {
      if (Math.hypot(m.x - P.car.x, m.z - P.car.z) < 8) near = m;
    }
    if (near && !this.dialog) {
      const slow = Math.abs(P.car.vu) < 4;
      this.hud.prompt.textContent = slow ? `${keyName(g, 'interact')}：${near.poi.type === 'shop' ? 'チューニングショップに入る' : 'GSに入る（給油・セーブ）'}` : `${near.poi.name}　— 停車してください`;
      this.hud.prompt.style.display = 'block';
      if (slow && inp.hit('interact') && this.poiCool <= 0) {
        if (near.poi.type === 'shop') this.openShop();
        else this.openSave(near);
      }
    } else if (!this.dialog) this.hud.prompt.style.display = 'none';

    // HUD
    this.hud.update(dt);
    this.hud.drawTach(P.car);
    this.hud.tl.innerHTML = `<div class="who">${PLAYER.name}　<span>${CARS[P.carId].name}</span></div><div>エリア <b>${AREAS[this.area].name}</b></div><div>所持金 <b>${fmtMoney(st.money)}</b></div><div>戦績 <b>${st.wins}</b>勝 ${st.losses}敗</div>`;
    // マップ：自車＝水色、倒したことのあるライバル＝緑、まだ倒していないライバル＝赤
    const cars = s.entries.map((e) => ({ x: e.car.x, z: e.car.z, h: e.car.h, color: e.isPlayer ? '#33e1ff' : e.rival && st.defeated[e.rival.id] ? '#3ddc6a' : '#ff4d6d' }));
    const pois = g.world.poiMarkers.map((m) => ({ x: m.x, z: m.z, color: m.poi.type === 'shop' ? '#ff3b6b' : '#2ee6a8', label: m.poi.type === 'shop' ? 'SHOP' : 'GS' }));
    this.hud.drawMap(cars, pois);
    this.updateLabels();
  }

  findFlashTarget() {
    const P = this.session.player.car;
    const [f0, f1] = P.fwd();
    let best = null, bd = 1e9;
    for (const e of this.session.entries) {
      if (!e.rival) continue;
      const dx = e.car.x - P.x, dz = e.car.z - P.z;
      const d = Math.hypot(dx, dz);
      if (d > 75) continue;
      const cos = (dx * f0 + dz * f1) / (d || 1);
      if (cos < 0.8) continue;
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  updateLabels() {
    const g = this.game;
    const cam = g.rig.camera;
    const P = this.session.player.car;
    for (const e of this.session.entries) {
      if (!e.label) continue;
      const d = Math.hypot(e.car.x - P.x, e.car.z - P.z);
      v3.set(e.car.x, 2.4, e.car.z).project(cam);
      const vis = d < 140 && v3.z < 1 && Math.abs(v3.x) < 1.1 && Math.abs(v3.y) < 1.1;
      e.label.style.display = vis ? 'block' : 'none';
      if (vis) {
        e.label.style.left = `${((v3.x + 1) / 2) * window.innerWidth}px`;
        e.label.style.top = `${((1 - v3.y) / 2) * window.innerHeight}px`;
        e.label.style.opacity = String(Math.max(0.3, 1 - d / 140));
        e.label.classList.toggle('near', d < 75);
      }
    }
  }

  // 峠：いる区間と向き（下り/上り）でセクターを決める
  pickTougeLayout(car, full = false) {
    const L0 = TOUGE_LAYOUTS[0];
    const path = coursePath(L0); // 下り向き
    const pr = path.project(car.x, car.z, -1);
    const [f0, f1] = car.fwd();
    const down = f0 * path.tx[pr.i] + f1 * path.tz[pr.i] >= 0;
    const dir = down ? 'd' : 'u';
    if (full) return TOUGE_LAYOUTS.find((l) => l.key === `haruna_full_${dir}`);
    // 進行方向の先にある区間（区間の終わり近くなら次の区間）
    const split = [coursePath(TOUGE_LAYOUTS.find((l) => l.key === 'haruna_s1_d')).finishS, coursePath(TOUGE_LAYOUTS.find((l) => l.key === 'haruna_s2_d')).finishS];
    const ahead = pr.s + (down ? 150 : -150);
    let sec = ahead < split[0] ? 1 : ahead < split[1] ? 2 : 3;
    return TOUGE_LAYOUTS.find((l) => l.key === `haruna_s${sec}_${dir}`);
  }

  // パッシング位置に最も近いコース（向きで順走/逆走）
  pickLayout(car) {
    if (AREAS[this.area].touge) return this.pickTougeLayout(car);
    let best = null;
    for (const c of COURSES) {
      if (c.area !== this.area) continue;
      const L = LAYOUTS.find((l) => l.key === `${c.id}_f`);
      const path = coursePath(L);
      const pr = path.project(car.x, car.z, -1);
      const d = pr.dist;
      if (!best || d < best.d) {
        const [f0, f1] = car.fwd();
        const dot = f0 * path.tx[pr.i] + f1 * path.tz[pr.i];
        best = { d, course: c, reverse: dot < 0 };
      }
    }
    return LAYOUTS.find((l) => l.key === `${best.course.id}_${best.reverse ? 'r' : 'f'}`);
  }

  openEncounter(e) {
    const g = this.game;
    const s = this.session;
    e.flash = 1.0;
    e.ai.paused = true;
    s.controlsEnabled = false;
    const r = e.rival;
    const layout = this.pickLayout(s.player.car);
    const mySpec = s.player.car.spec;
    const box = panel(null,
      el('div', { class: 'enc-head' }, el('span', { class: 'enc-team' }, r.team), el('span', { class: 'enc-name' }, r.name)),
      el('div', { class: 'enc-car' }, `${CARS[r.car].name}　（${CARS[r.car].ref}）`),
      el('div', { class: 'enc-line' }, `「${r.lines.meet}」`),
      el('div', { class: 'enc-vs' },
        el('div', {}, el('small', {}, 'YOU'), el('b', {}, String(mySpec.rating))),
        el('div', { class: 'vs' }, 'VS'),
        el('div', {}, el('small', {}, 'RIVAL'), el('b', {}, String(e.rating)))),
      el('div', { class: 'enc-course' }, layout.course.touge ? `COURSE：${layout.name}　${(coursePath(layout).raceLen / 1000).toFixed(2)}km` : `COURSE：${layout.name}　${layout.course.laps}周`, el('br'), el('small', {}, layout.course.desc)),
      el('div', { class: 'hint' }, '先にゴールするか、200m以上引き離せば勝利'));
    const full = layout.course.touge ? this.pickTougeLayout(s.player.car, true) : null;
    const dlg = el('div', { class: 'screen dialog encounter' }, box);
    const close = () => { g.input.pressed.clear(); menu.destroy(); dlg.remove(); this.dialog = null; this.encounter = null; s.controlsEnabled = true; e.ai.paused = false; this.poiCool = 0.5; };
    const menu = new Menu(g, [
      { label: 'バトル開始', sub: layout.course.touge ? `${layout.name}（スタート地点へ移動）` : '', action: () => { close(); this.startBattle(e, layout); } },
      ...(full ? [{ label: 'フルコースで勝負', sub: `${full.name}　約${(coursePath(full).raceLen / 1000).toFixed(1)}km`, action: () => { close(); this.startBattle(e, full); } }] : []),
      { label: 'やめておく', action: () => close() },
    ], { onBack: () => close() });
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
    this.dialog = dlg;
  }

  startBattle(e, layout) {
    const g = this.game;
    const P = this.session.player.car;
    const ret = { x: P.x, z: P.z, h: P.h, area: this.area };
    g.transition(() => g.setMode(new BattleMode(g, { rival: e.rival, layout, returnPos: ret })));
  }

  // エリア移動（暗転→向こうのエリアの対応する道路に速度0で出る）
  changeArea(to, pos) {
    const g = this.game;
    this.leaving = true;
    this.session.controlsEnabled = false;
    g.story.area = to;
    g.transition(() => g.setMode(new TownMode(g, { area: to, returnPos: pos, message: `${AREAS[to].name}エリア`, view: g.rig.mode })), 450);
  }

  openShop() {
    const g = this.game;
    this.session.controlsEnabled = false;
    this.session.frozen = true;
    this.dialog = true;
    this.hud.prompt.style.display = 'none';
    openShop(g, g.story, this.area, () => {
      // 装着変更を反映して再構築
      const P = this.session.player;
      const pos = { x: P.car.x, z: P.car.z, h: P.car.h, area: this.area };
      g.setMode(new TownMode(g, { area: this.area, returnPos: pos, message: 'セッティング完了', view: g.rig.mode }));
    });
  }

  openSave(m) {
    const g = this.game;
    const s = this.session;
    s.controlsEnabled = false; s.frozen = true;
    const box = panel('GS — 給油・セーブ', el('div', { class: 'hint' }, `${m.poi.name}`), el('div', {}, '現在の進行状況をセーブしますか？'));
    const dlg = el('div', { class: 'screen dialog' }, box);
    const close = (msg) => { g.input.pressed.clear(); menu.destroy(); dlg.remove(); this.dialog = null; s.controlsEnabled = true; s.frozen = false; this.poiCool = 1; if (msg) this.hud.flash(msg, 1.6); };
    const menu = new Menu(g, [
      {
        label: 'セーブする', action: () => {
          const P = s.player.car;
          g.story.pos = { x: P.x, z: P.z, h: P.h, area: this.area };
          g.story.area = this.area;
          close(saveGame(g.story) ? 'セーブしました' : 'セーブに失敗しました');
        },
      },
      ...this.refuelItems(close),
      {
        label: 'タイムランキング', sub: 'この街の各コースで、誰が速いか・あなたが何位か',
        action: () => { menu.destroy(); dlg.remove(); openRanking(g, this.area, () => { this.dialog = null; s.controlsEnabled = true; s.frozen = false; this.poiCool = 1; }); this.dialog = true; },
      },
      { label: 'やめる', action: () => close() },
    ], { onBack: () => close() });
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
    this.dialog = dlg;
  }

  // GSでの給油（ハイオク FUEL_PRICE 円/L）。所持金が足りない分は入れられるだけ入れる
  refuelItems(close) {
    const g = this.game, st = g.story, rec = activeCar(st), f = fuelState(rec);
    const need = Math.max(0, f.tank - f.liters);
    const fill = (liters) => {
      let L = Math.min(liters, f.tank - f.liters);
      const afford = Math.floor(st.money / FUEL_PRICE);
      let free = 0;
      // 救済：所持金が5L分もないときは5Lまで無料
      if (afford < 5) { free = Math.min(5, L); L = Math.max(free, Math.min(L, afford)); }
      else L = Math.min(L, afford);
      if (L <= 0) { close('給油できません'); return; }
      const cost = Math.round(Math.max(0, L - free) * FUEL_PRICE);
      st.money -= cost; f.liters = f.liters + L;
      g.audio.beep(900, 0.08, 0.1);
      close(`${L.toFixed(1)}L 給油しました（${cost ? fmtMoney(cost) : '救済給油・無料'}）`);
    };
    if (need < 0.05) return [{ label: '給油', disabled: true, sub: `満タンです（${f.tank}L）` }];
    return [
      { label: `給油：満タン（${need.toFixed(1)}L）`, sub: `ハイオク ${FUEL_PRICE}円/L　${fmtMoney(Math.round(need * FUEL_PRICE))}　残量 ${f.liters.toFixed(1)} / ${f.tank}L`, action: () => fill(need) },
      { label: '給油：10L', sub: fmtMoney(10 * FUEL_PRICE), action: () => fill(10) },
    ];
  }

  pause() {
    const g = this.game;
    this.paused = true;
    const st = g.story;
    const box = panel('PAUSE',
      el('div', { class: 'hint' }, `所持金 ${fmtMoney(st.money)}　/　${st.wins}勝${st.losses}敗　/　プレイ時間 ${Math.floor(st.playtime / 60)}分`),
      el('div', { class: 'hint' }, `現在地：${AREAS[this.area].name}エリア　／　セーブは各エリアのGSで行えます`));
    const dlg = el('div', { class: 'screen dialog' }, box);
    const resume = () => { g.input.pressed.clear(); menu.destroy(); dlg.remove(); this.paused = false; };
    const menu = new Menu(g, [
      { label: '再開', action: resume },
      {
        label: 'ガレージ', sub: `所有車${st.garage.length}台：全方位から確認・乗り換え・セッティング（車は各ショップの「中古車」タブで購入）`,
        action: () => {
          menu.destroy(); dlg.remove();
          const P = this.session.player.car;
          const pos = { x: P.x, z: P.z, h: P.h, area: this.area };
          g.transition(() => g.setMode(new GarageMode(g, { area: this.area, returnPos: pos, view: g.rig.mode, townMode: TownMode })));
        },
      },
      { label: 'セッティング', sub: '足回り・ブレーキ・ギア比・LSD・ダウンフォースの調整（★5フルカスタマイズパーツ）とパワー/トルク曲線', action: () => { menu.destroy(); dlg.remove(); this.openSetting(); } },
      ...Object.values(AREAS).filter((a) => a.id !== this.area && !a.hidden).map((a) => {
        const locked = (a.unlockWins || 0) > st.wins;
        return {
          label: `エリア切り替え：${a.name}へ`, disabled: locked,
          sub: locked ? `${a.unlockWins}勝で解放（あと${a.unlockWins - st.wins}勝）` : `${a.name}エリアの開始地点（GS前）へ移動します`,
          action: () => { menu.destroy(); dlg.remove(); this.paused = false; this.changeArea(a.id, areaStart(a.id)); },
        };
      }),
      ...CIRCUIT_LAYOUTS.map((L) => {
        const best = st.trackday?.[L.key]?.best;
        const poor = st.money < CIRCUIT_ENTRY_FEE;
        return {
          label: `サーキット走行会：${L.course.name.replace(/ .*$/, '')}`, disabled: poor,
          sub: `参加費 ${fmtMoney(CIRCUIT_ENTRY_FEE)}／1枠${SESSION_TIME / 60}分。今のマシン（チューニング・燃料そのまま）で周回タイムを計測${best ? `　自己ベスト ${fmtTime(best)}` : ''}${poor ? '　（所持金が足りません）' : ''}`,
          action: () => {
            menu.destroy(); dlg.remove(); this.paused = false;
            st.money -= CIRCUIT_ENTRY_FEE;
            const P = this.session.player.car;
            const pos = { x: P.x, z: P.z, h: P.h, area: this.area };
            this.leaving = true; this.session.controlsEnabled = false;
            g.transition(() => g.setMode(new TrackDayMode(g, { layout: L, returnPos: pos, townMode: TownMode })), 450);
          },
        };
      }),
      { label: 'タイトルへ戻る', sub: '未セーブの進行は失われます', action: () => { menu.destroy(); g.transition(() => g.setMode(new TitleMode(g))); } },
    ], { onBack: resume });
    box.appendChild(menu.root);
    g.ui.appendChild(dlg);
  }

  // セッティング画面（変更はその場で車両に反映し、ガレージの車に保存）
  openSetting() {
    const g = this.game;
    const car = activeCar(g.story);
    const P = this.session.player;
    this.paused = true;
    openSetup(g, {
      carId: car.carId, equipped: car.equipped, setup: car.setup,
      onChange: (S) => { car.setup = S; this.session.applySetup(P, S); },
      onClose: () => { g.input.pressed.clear(); this.paused = false; this.hud.flash('セッティング完了', 1.2); },
    });
  }

  exit() {
    this.session.dispose();
    this.hud.destroy();
    this.game.mirrorModel = null;
  }
}

export function keyName(game, action) {
  const code = game.settings.keys[action] || '';
  return code.replace(/^Key/, '').replace(/^Digit/, '');
}
