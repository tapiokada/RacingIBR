// タイトル画面（メインメニュー）
import { el, Menu, panel } from '../ui/ui.js';
import { openSettings } from '../ui/settings.js';
import { hasSave, loadGame, newGameState, fmtMoney, loadRecords, fmtTime, loadPracticeSetup } from '../save.js';
import { LAYOUTS, AREAS, areaOfLayout } from '../data/map.js';
import { TownMode } from './town.js';
import { PracticeMode } from './practice.js';
import { TownFreeMode } from './townfree.js';
import { ReplayMode } from './replay.js';
import { getReplay } from '../save.js';
import { CARS, PLAYER, CAR_IDS, CAR_COLORS } from '../data/cars.js';
import { ShutoFreeMode } from './shutofree.js';
import { getCoursePath } from '../physics/track.js';

// PRACTICE のモード：首都高 C1 の FREE RUN は 5号・竹橋JCTへ行き来できる首都高専用のモード
function practiceMode(g, o, L, kind) {
  if (kind === 'free' && L.area === 'c1') {
    const p = getCoursePath(L).posAt(-8, 0);
    return new ShutoFreeMode(g, { ...o, area: 'c1', lane: L.key, pose: { x: p.x, z: p.z, h: p.h }, speed: 0 });
  }
  return new PracticeMode(g, { ...o, layout: L, kind });
}
import { GLB_CREDITS } from '../render/glbCars.js';

export class TitleMode {
  constructor(game, sub = null) { this.game = game; this.sub = sub; }

  enter() {
    const g = this.game;
    g.audio.playBgm('town');
    g.setArea('west');
    g.world.setCourse(null);
    this.ang = 0;
    this.root = el('div', { class: 'screen title' });
    this.logo = el('div', { class: 'logo' },
      el('div', { class: 'logo-main' }, 'RACING IBR'),
      el('div', { class: 'logo-sub' }, '西池袋ナイトレーサーズ'),
      el('div', { class: 'logo-ver' }, 'v0.1 — Encounter Battle Build'));
    this.menuWrap = el('div', { class: 'title-menu' });
    this.root.append(this.logo, this.menuWrap, el('div', { class: 'title-foot' }, '↑↓ 選択　Enter 決定　Esc 戻る　｜　クリック操作も可', el('br'), el('small', {}, GLB_CREDITS.join('　／　') + '（いずれもゲーム用に縮尺・向き・車輪分離・圧縮を変更）')));
    g.ui.appendChild(this.root);
    if (this.sub === 'practice') this.showPractice();
    else this.showMain();
  }

  setMenu(items, onBack, title) {
    if (this.menu) this.menu.destroy();
    this.menuWrap.innerHTML = '';
    if (title) this.menuWrap.appendChild(el('div', { class: 'menu-title' }, title));
    this.menu = new Menu(this.game, items, { onBack });
    this.menuWrap.appendChild(this.menu.root);
  }

  showMain() {
    this.setMenu([
      { label: 'STORY', sub: 'レーシングRPGモード', action: () => this.showStory() },
      { label: 'PRACTICE', sub: 'タイムアタック／フリーラン', action: () => this.showPractice() },
      { label: 'COMMON SETTING', sub: 'キー配置・操作設定', action: () => this.showSettings() },
    ]);
  }

  showStory() {
    const save = hasSave() ? loadGame() : null;
    this.setMenu([
      { label: 'NEW GAME', sub: '黒碕カケルと86-GRの物語を始める', action: () => this.newGame(!!save) },
      {
        label: 'CONTINUE', disabled: !save,
        sub: save ? `${fmtMoney(save.money)}　${save.wins}勝　${new Date(save.savedAt).toLocaleString('ja-JP')}` : 'セーブデータなし',
        action: () => this.startStory(save),
      },
      { label: '戻る', action: () => this.showMain() },
    ], () => this.showMain(), 'STORY');
  }

  newGame(overwrite) {
    if (overwrite) {
      this.setMenu([
        { label: 'はい（最初から始める）', sub: 'セーブデータは次にGSでセーブするまで残ります', action: () => this.startStory(newGameState()) },
        { label: 'いいえ', action: () => this.showStory() },
      ], () => this.showStory(), 'NEW GAMEを始めますか？');
    } else this.startStory(newGameState());
  }

  startStory(state) {
    const g = this.game;
    g.story = structuredClone(state);
    g.transition(() => g.setMode(new TownMode(g)));
  }

  showPractice() {
    this.setMenu([
      { label: 'TIME ATTACK', sub: 'セクタータイム・リプレイを記録', action: () => this.pickLayout('ta') },
      { label: 'FREE RUN', sub: 'タイムを気にせず自由に走行', action: () => this.pickLayout('free') },
      { label: 'RECORDS / REPLAY', sub: '記録の確認とリプレイ再生', action: () => this.pickLayout('rec') },
      { label: '戻る', action: () => this.showMain() },
    ], () => this.showMain(), 'PRACTICE');
  }

  pickLayout(kind) {
    const recs = loadRecords();
    const town = kind === 'free' ? [
      { label: '西池袋タウン（全道路）', sub: '池袋駅西口・西口公園・西一番街を含む街全体を自由に走行', action: () => this.pickSetup('town', null, 'west') },
      { label: '東池袋タウン（全道路）', sub: '池袋駅東口・サンシャイン60通り・春日通り・首都高下を含む街全体を自由に走行', action: () => this.pickSetup('town', null, 'east') },
      { label: '榛名山（峠道全線）', sub: 'ゆうすげ入口〜伊香保温泉石段街の約9kmを自由に走行（国土地理院データに基づく実寸・実標高）', action: () => this.pickSetup('town', null, 'haruna') },
    ] : [];
    this.setMenu([
      ...town,
      ...LAYOUTS.map((L) => ({
        label: L.name,
        sub: `【${AREAS[areaOfLayout(L)].name}】${L.course.desc}　BEST ${fmtTime(recs[L.key]?.[0]?.best)}`,
        action: () => (kind === 'rec' ? this.showRecords(L) : this.pickSetup(kind, L)),
      })),
      { label: '戻る', action: () => this.showPractice() },
    ], () => this.showPractice(), kind === 'ta' ? 'TIME ATTACK — コース選択' : kind === 'free' ? 'FREE RUN — コース選択' : 'RECORDS — コース選択');
  }

  pickSetup(kind, L, area = 'west') {
    const save = hasSave() ? loadGame() : null;
    const car = save ? save.garage[save.active] : null;
    const start = (equipped, color, setupKey, baseSetup = null) => {
      const g = this.game;
      const setup = loadPracticeSetup(setupKey) || baseSetup;
      const o = { carId: car && setupKey === 'story' ? car.carId : PLAYER.car, equipped, color, setup, setupKey };
      g.transition(() => g.setMode(kind === 'town'
        ? new TownFreeMode(g, { ...o, area })
        : practiceMode(g, o, L, kind)));
    };
    // ★5フルカスタマイズパーツを組んだ練習用の86-GR（フリーランのポーズメニューからセッティング可能）
    const fullEquip = { ...CARS[PLAYER.car].stock, tire: 'tire_high', suspension: 'sus_full', brake: 'brk_full', transmission: 'tm_full', aero: 'aero_wing', muffler: 'muf_sport' };
    this.setMenu([
      { label: 'ストーリーのマシン', disabled: !car, sub: car ? 'セーブデータのチューニング状態で走行' : 'セーブデータなし', action: () => start(car.equipped, car.color, 'story', car.setup || null) },
      { label: 'ノーマル 86-GR', sub: CARS[PLAYER.car].ref + ' 相当', action: () => start({ ...CARS[PLAYER.car].stock }, PLAYER.color, 'stock') },
      { label: 'ノーマル車（車種を選ぶ）', sub: '全10車種の純正状態から選んで走行', action: () => this.pickStockCar(kind, L, area) },
      { label: 'フルカスタム 86-GR', sub: '★5フルカスタマイズ車高調・ブレーキ・ミッション＋GTウイング。FREE RUNのポーズメニューでセッティング可能', action: () => start(fullEquip, PLAYER.color, 'full86') },
      { label: '戻る', action: () => this.pickLayout(kind === 'town' ? 'free' : kind) },
    ], () => this.pickLayout(kind === 'town' ? 'free' : kind), `${L ? L.name : AREAS[area].name + 'タウン'} — マシン選択`);
  }

  pickStockCar(kind, L, area) {
    const go = (id) => {
      const g = this.game;
      const o = { carId: id, equipped: { ...CARS[id].stock }, color: CAR_COLORS[id], setup: null, setupKey: null };
      g.transition(() => g.setMode(kind === 'town' ? new TownFreeMode(g, { ...o, area }) : practiceMode(g, o, L, kind)));
    };
    this.setMenu([
      ...CAR_IDS.map((id) => ({ label: CARS[id].name, sub: `${CARS[id].ref}　${CARS[id].drive}・${CARS[id].mass}kg`, action: () => go(id) })),
      { label: '戻る', action: () => this.pickSetup(kind, L, area) },
    ], () => this.pickSetup(kind, L, area), '車種選択');
  }

  showRecords(L) {
    const list = loadRecords()[L.key] || [];
    if (this.menu) this.menu.destroy();
    this.menuWrap.innerHTML = '';
    const table = el('table', { class: 'rec-table' },
      el('tr', {}, el('th', {}, '#'), el('th', {}, 'BEST LAP'), el('th', {}, 'S1'), el('th', {}, 'S2'), el('th', {}, 'S3'), el('th', {}, 'TOTAL'), el('th', {}, '日時'), el('th', {}, '')));
    list.forEach((r, i) => {
      const bi = r.laps.indexOf(r.best);
      const sec = r.sectors[bi] || [];
      const btn = el('button', { class: 'mini-btn' }, '▶ リプレイ');
      btn.onclick = async () => {
        const rep = await getReplay(r.id);
        if (!rep) { btn.textContent = 'データなし'; return; }
        const g = this.game;
        g.transition(() => g.setMode(new ReplayMode(g, { layout: L, replay: rep, record: r, back: () => new TitleMode(g, 'practice') })));
      };
      table.appendChild(el('tr', {}, el('td', {}, String(i + 1)), el('td', { class: 'hl' }, fmtTime(r.best)), el('td', {}, fmtTime(sec[0])), el('td', {}, fmtTime(sec[1])), el('td', {}, fmtTime(sec[2])), el('td', {}, fmtTime(r.total)), el('td', {}, new Date(r.date).toLocaleString('ja-JP')), el('td', {}, btn)));
    });
    const back = el('button', { class: 'menu-item small' }, '戻る');
    back.onclick = () => { off(); this.pickLayout('rec'); };
    const off = this.game.input.onKey((e) => { if (e.code === 'Escape') { off(); this.pickLayout('rec'); } });
    this.menu = { destroy: () => off() };
    this.menuWrap.appendChild(panel(`${L.name} — 記録`, list.length ? table : el('div', { class: 'hint' }, 'まだ記録がありません'), back));
  }

  showSettings() {
    if (this.menu) this.menu.destroy();
    this.menuWrap.innerHTML = '';
    this.root.style.display = 'none';
    openSettings(this.game, () => { this.root.style.display = ''; this.showMain(); });
  }

  update(dt) {
    this.ang += dt * 0.05;
    const cam = this.game.rig.camera;
    const cx = 60, cz = -40;
    cam.position.set(cx + Math.cos(this.ang) * 420, 150, cz + Math.sin(this.ang) * 420);
    cam.lookAt(cx, 0, cz);
    cam.fov = 55; cam.updateProjectionMatrix();
  }

  exit() { if (this.menu) this.menu.destroy(); }
}
