// GS：その街のコースの参考タイムランキング（ライバルの参考タイム＋自分の完走タイム）
import { el, Menu, panel } from './ui.js';
import { LAYOUTS, areaOfLayout, AREAS } from '../data/map.js';
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
