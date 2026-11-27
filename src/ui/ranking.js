// GS：その街のコースの参考タイムランキング（ライバルの参考タイム＋自分の完走タイム）
import { el, Menu, panel } from './ui.js';
import { LAYOUTS, areaOfLayout, AREAS, STORY_CIRCUIT_LAYOUTS } from '../data/map.js';
import { CLASSES, classOfPwr } from '../data/races.js';
import { buildSpec } from '../physics/spec.js';
import { ALL_RIVALS } from '../data/rivals.js';
import { CARS, PLAYER } from '../data/cars.js';
import { REF_TIMES } from '../data/reftimes.js';
import { fmtTime } from '../save.js';

export function rankingFor(layoutKey, story) {
  const L = LAYOUTS.find((l) => l.key === layoutKey);
  const area = areaOfLayout(L);
  const rows = [];
  for (const r of ALL_RIVALS.filter((x) => x.area === area)) {
    const t = REF_TIMES[layoutKey]?.[r.id];
    if (t) rows.push({ name: r.name, team: r.team, car: CARS[r.car].name, time: t, rival: r, defeated: !!story.defeated[r.id], appeared: r.minWins <= story.wins });
  }
  const me = story.bestTimes?.[layoutKey];
  if (me) rows.push({ name: PLAYER.name, team: 'YOU', car: CARS[me.carId].name, time: me.time, player: true });
  rows.sort((a, b) => a.time - b.time);
  return rows;
}

export function openRanking(game, area, onClose) {
  const st = game.story;
  const layouts = LAYOUTS.filter((l) => areaOfLayout(l) === area);
  const box = panel(`タイムランキング — ${AREAS[area].name}`);
  const dlg = el('div', { class: 'screen dialog ranking' }, box);
  let menu = null;
  const close = () => { game.input.pressed.clear(); menu?.destroy(); off?.(); dlg.remove(); onClose && onClose(); };
  let off = null;
  const list = () => {
    off?.(); off = null;
    box.innerHTML = '';
    box.appendChild(el('div', { class: 'panel-title' }, `タイムランキング — ${AREAS[area].name}`));
    box.appendChild(el('div', { class: 'hint' }, 'この街を走っている走り屋の、各コース完走時の参考タイム（バトルと同じ周回数・単独走行）。あなたのタイムはバトルで完走したときに記録されます'));
    menu = new Menu(game, [
      ...layouts.map((L) => {
        const rows = rankingFor(L.key, st);
        const pi = rows.findIndex((r) => r.player);
        return { label: L.name, sub: `1位 ${rows[0] ? `${rows[0].name} ${fmtTime(rows[0].time)}` : '-'}　／　あなた ${pi >= 0 ? `${pi + 1}位 ${fmtTime(rows[pi].time)}（${rows.length}人中）` : '未計測'}`, action: () => detail(L) };
      }),
      { label: '閉じる', action: () => close() },
    ], { onBack: () => close(), className: 'scroll' });
    box.appendChild(menu.root);
  };
  const detail = (L) => {
    menu?.destroy(); menu = null;
    box.innerHTML = '';
    const rows = rankingFor(L.key, st);
    const pi = rows.findIndex((r) => r.player);
    const top = rows[0]?.time;
    const table = el('table', { class: 'rec-table rank-table' },
      el('tr', {}, el('th', {}, '順位'), el('th', {}, '名前'), el('th', {}, 'チーム'), el('th', {}, '車'), el('th', {}, 'タイム'), el('th', {}, '差'), el('th', {}, '')));
    rows.forEach((r, i) => {
      const tag = r.player ? 'YOU' : r.defeated ? '撃破済' : r.appeared ? '' : '未遭遇';
      table.appendChild(el('tr', { class: r.player ? 'me' : r.defeated ? 'beaten' : '' },
        el('td', {}, String(i + 1)), el('td', {}, r.name), el('td', {}, r.team), el('td', {}, r.car), el('td', { class: 'hl' }, fmtTime(r.time)),
        el('td', {}, i ? `+${(r.time - top).toFixed(2)}` : '-'), el('td', {}, tag)));
    });
    box.appendChild(el('div', { class: 'panel-title' }, L.name));
    box.appendChild(el('div', { class: 'reward' }, pi >= 0 ? `あなたは ${rows.length}人中 ${pi + 1}位（${fmtTime(rows[pi].time)}・${rows[pi].car}）` : 'あなたのタイムは未計測です（このコースのバトルで完走すると記録されます）'));
    box.appendChild(table);
    const back = el('button', { class: 'menu-item small' }, '戻る');
    back.onclick = () => list();
    box.appendChild(back);
    off = game.input.onKey((e) => { if (e.code === 'Escape' || e.code === 'Enter') { setTimeout(list, 0); } });
  };
  list();
  game.ui.appendChild(dlg);
  return close;
}

// ===== サーキット（筑波・鈴鹿・富士）のラップタイムランキング（ガレージから）=====
// ライバル：単独・ミスなしのフライングラップの参考タイム（サーキットレースの予選の目安）。
// あなた：走行会・サーキットレース（プラクティス／予選／決勝）での自己ベストラップ。クラスはパワーウェイトレシオで A/B/C
const SRC_NAME = { trackday: '走行会', practice: 'レース プラクティス', qualify: 'レース 予選', race: 'レース 決勝' };
let _rivalPwr = null;
const rivalPwr = (r) => ((_rivalPwr ||= {})[r.id] ??= buildSpec(r.car, r.parts, r.setup || null).pwr);

export function circuitRanking(layoutKey, story) {
  const rows = [];
  for (const r of ALL_RIVALS) {
    const t = REF_TIMES[layoutKey]?.[r.id];
    if (t) rows.push({ name: r.name, team: r.team, car: CARS[r.car].name, time: t, cls: classOfPwr(rivalPwr(r)).id, defeated: !!story.defeated[r.id], appeared: r.minWins <= story.wins });
  }
  // 自己ベスト（古いセーブは走行会のベストだけ）
  let me = story.circuitLaps?.[layoutKey];
  const td = story.trackday?.[layoutKey];
  if (!me && td) me = { time: td.best, carId: td.carId, src: 'trackday', pwr: null };
  if (me) {
    const pwr = me.pwr ?? buildSpec(me.carId, CARS[me.carId].stock).pwr;
    rows.push({ name: PLAYER.name, team: 'YOU', car: CARS[me.carId].name, time: me.time, cls: classOfPwr(pwr).id, player: true, src: SRC_NAME[me.src] || '', date: me.date });
  }
  rows.sort((a, b) => a.time - b.time);
  return rows;
}

export function openCircuitRanking(game, onClose) {
  const st = game.story;
  const layouts = STORY_CIRCUIT_LAYOUTS;
  const box = panel('サーキット タイムランキング');
  const dlg = el('div', { class: 'screen dialog ranking' }, box);
  let menu = null, off = null;
  const close = () => { game.input.pressed.clear(); menu?.destroy(); off?.(); dlg.remove(); onClose && onClose(); };
  const FILTERS = [{ id: null, name: '全クラス' }, ...CLASSES.map((c) => ({ id: c.id, name: c.name, desc: c.desc }))];
  const list = () => {
    off?.(); off = null;
    box.innerHTML = '';
    box.appendChild(el('div', { class: 'panel-title' }, 'サーキット タイムランキング'));
    box.appendChild(el('div', { class: 'hint' }, 'ライバルは単独・ミスなしで走ったときのベストラップの参考タイム。あなたのタイムは走行会・サーキットレース（プラクティス・予選・決勝）の自己ベストラップです'));
    menu = new Menu(game, [
      ...layouts.map((L) => {
        const rows = circuitRanking(L.key, st);
        const pi = rows.findIndex((r) => r.player);
        return { label: L.course.name, sub: `1位 ${rows[0] ? `${rows[0].name} ${fmtTime(rows[0].time)}` : '-'}　／　あなた ${pi >= 0 ? `${pi + 1}位 ${fmtTime(rows[pi].time)}（${rows.length}人中）` : '未計測'}`, action: () => detail(L, 0) };
      }),
      { label: '閉じる', action: () => close() },
    ], { onBack: () => close(), className: 'scroll' });
    box.appendChild(menu.root);
  };
  const detail = (L, fi) => {
    menu?.destroy(); menu = null; off?.(); off = null;
    box.innerHTML = '';
    const F = FILTERS[fi];
    const all = circuitRanking(L.key, st);
    const rows = F.id ? all.filter((r) => r.cls === F.id) : all;
    const pi = rows.findIndex((r) => r.player);
    const top = rows[0]?.time;
    const table = el('table', { class: 'rec-table rank-table' },
      el('tr', {}, el('th', {}, '順位'), el('th', {}, '名前'), el('th', {}, 'チーム'), el('th', {}, '車'), el('th', {}, 'クラス'), el('th', {}, 'ラップ'), el('th', {}, '差'), el('th', {}, '')));
    rows.forEach((r, i) => {
      const tag = r.player ? 'YOU' : r.defeated ? '撃破済' : r.appeared ? '' : '未遭遇';
      table.appendChild(el('tr', { class: r.player ? 'me' : r.defeated ? 'beaten' : '' },
        el('td', {}, String(i + 1)), el('td', {}, r.name), el('td', {}, r.team), el('td', {}, r.car), el('td', {}, r.cls), el('td', { class: 'hl' }, fmtTime(r.time)),
        el('td', {}, i ? `+${(r.time - top).toFixed(2)}` : '-'), el('td', {}, tag)));
    });
    box.appendChild(el('div', { class: 'panel-title' }, L.course.name));
    box.appendChild(el('div', { class: 'rank-tabs' }, ...FILTERS.map((f, k) => el('button', { class: `rank-tab${k === fi ? ' on' : ''}`, onclick: () => detail(L, k) }, f.name))));
    const me = all.find((r) => r.player);
    box.appendChild(el('div', { class: 'reward' }, me ? (pi >= 0 ? `あなたは ${rows.length}人中 ${pi + 1}位（${fmtTime(me.time)}・${me.car}・クラス${me.cls}・${me.src}）` : `あなたのタイム（クラス${me.cls}）はこのクラスの表にはありません`) : 'あなたのタイムは未計測です（ポーズメニューの「サーキット走行会」「サーキットレース」で計測）'));
    const wrap = el('div', { class: 'rank-scroll' }, table);
    box.appendChild(wrap);
    box.appendChild(el('div', { class: 'hint' }, '←→：クラス切り替え　Enter／Esc：戻る'));
    const back = el('button', { class: 'menu-item small' }, '戻る');
    back.onclick = () => list();
    box.appendChild(back);
    off = game.input.onKey((e) => {
      if (e.code === 'Escape' || e.code === 'Enter') setTimeout(list, 0);
      else if (e.code === 'ArrowRight') setTimeout(() => detail(L, (fi + 1) % FILTERS.length), 0);
      else if (e.code === 'ArrowLeft') setTimeout(() => detail(L, (fi + FILTERS.length - 1) % FILTERS.length), 0);
    });
  };
  list();
  game.ui.appendChild(dlg);
  return close;
}
