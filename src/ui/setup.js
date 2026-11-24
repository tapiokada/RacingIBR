// マシンセッティング（ポーズメニューから。バトル中・タイムアタック中は不可）
// ★5 フルカスタマイズ車高調 / ブレーキキット / ミッション（LSD込み）／調整式エアロ の項目を調整する
import { el, panel } from './ui.js';
import { CARS } from '../data/cars.js';
import { PART_BY_ID } from '../data/parts.js';
import { buildSpec } from '../physics/spec.js';
import { defaultSetup, rideRange, aeroRange, autoGears, gearSpeeds } from '../physics/setup.js';
import { powerGraph, gearChart } from './graph.js';

const AX = { F: '前', R: '後' };

// opts: { carId, equipped, setup, onChange(setup), onClose() }
export function openSetup(game, opts) {
  const { carId, equipped } = opts;
  const car = CARS[carId];
  const def = defaultSetup(carId);
  let S = { ...def, ...(opts.setup || {}) };
  if (!Array.isArray(S.gears) || S.gears.length !== car.gears.length) S.gears = [...car.gears];
  S.gears = [...S.gears];
  const wrap = el('div', { class: 'screen settings setup' });
  let index = 0;
  let rows = [];
  let fine = false; // Shiftで細かく

  const sus = equipped.suspension === 'sus_full';
  const brk = equipped.brake === 'brk_full';
  const tm = equipped.transmission === 'tm_full';
  const aero = equipped.aero ? PART_BY_ID[equipped.aero] : null;
  const aR = aeroRange(aero, car);

  const changed = () => { opts.onChange && opts.onChange(structuredClone(S)); };

  const build = () => {
    const keep = index;
    wrap.innerHTML = '';
    rows = [];
    const spec = buildSpec(carId, equipped, S);
    const list = el('div', { class: 'key-list setup-list' });
    const sep = (t) => list.appendChild(el('div', { class: 'key-sep' }, t));
    // 数値行：key, 表示名, min, max, step, 小数桁, 単位
    const num = (key, name, min, max, step, fmt, unit = '', note = '', onSet = null, get = null, set = null) => {
      const gv = get || (() => S[key]);
      const sv = set || ((v) => { S[key] = v; });
      const val = el('span', { class: 'lv-val' });
      const show = () => { val.textContent = `${Number(gv()).toFixed(fmt)}${unit}`; };
      const put = (v) => {
        const st = fine ? step / (step >= 1 ? 1 : 10) : step;
        v = Math.round(v / st) * st;
        sv(Math.max(min, Math.min(max, +v.toFixed(4))));
        if (onSet) onSet();
        changed();
        build();
      };
      const st = () => (fine ? step / (step >= 1 ? 1 : 10) : step);
      const minus = el('button', { class: 'arrow', onclick: () => put(gv() - st()) }, '◀');
      const plus = el('button', { class: 'arrow', onclick: () => put(gv() + st()) }, '▶');
      const row = el('div', { class: 'key-row' }, el('span', { class: 'key-name' }, name, note ? el('small', { class: 'lv-note' }, note) : ''), el('span', { class: 'lv' }, minus, val, plus));
      rows.push({ row, left: () => put(gv() - st()), right: () => put(gv() + st()), act: () => {} });
      list.appendChild(row);
      show();
    };
    if (!sus && !brk && !tm && !aR) {
      list.appendChild(el('div', { class: 'hint' }, '調整できるパーツが装着されていません。★5のフルカスタマイズ車高調・ブレーキキット・ミッション、または調整式エアロ（GTウイング／フルエアロ）を装着すると、ここで足回り・駆動系を調整できます。'));
    }
    if (sus) {
      sep('サスペンション（フルカスタマイズ車高調）');
      const [rmin, rmax] = rideRange(carId);
      for (const a of ['F', 'R']) num(`ride${a}`, `車高（${AX[a]}）`, rmin, rmax, 1, 0, ' mm', a === 'F' ? '低いほど重心が下がる。下げ過ぎると底打ち' : '');
      for (const a of ['F', 'R']) num(`freq${a}`, `固有振動数（${AX[a]}）`, 1.5, 5, 0.05, 2, ' Hz', a === 'F' ? 'ばねの硬さ。高いほどロール・ピッチが減るが接地は不安定' : '');
      for (const a of ['F', 'R']) num(`arb${a}`, `アンチロールバー（${AX[a]}）`, 1, 10, 1, 0, '', a === 'F' ? '前を強く＝アンダー寄り／後ろを強く＝オーバー寄り' : '');
      for (const a of ['F', 'R']) num(`dampC${a}`, `減衰比・縮み側（${AX[a]}）`, 20, 60, 1, 0, ' %');
      for (const a of ['F', 'R']) num(`dampE${a}`, `減衰比・伸び側（${AX[a]}）`, 20, 60, 1, 0, ' %');
      for (const a of ['F', 'R']) num(`camber${a}`, `キャンバー角（${AX[a]}）`, 0, 6, 0.1, 1, '°', a === 'F' ? 'ネガティブ量。2〜3°で旋回グリップ最大、付け過ぎると制動・加速が落ちる' : '');
      for (const a of ['F', 'R']) num(`toe${a}`, `トー角（${AX[a]}）`, -1, 1, 0.05, 2, '°', a === 'F' ? '＋イン／−アウト。前アウトで回頭性↑、後インで安定↑' : '');
    }
    if (brk) {
      sep('ブレーキ（フルカスタマイズブレーキキット）');
      num('brakeBal', 'ブレーキバランス', -5, 5, 1, 0, '', `−で前寄り／＋で後寄り（現在 前${Math.round(spec.brakeBias * 100)}%）`);
      num('brakeStr', 'ブレーキ力', 70, 130, 1, 0, ' %', `最大制動トルク ${Math.round(spec.brakeTorque)} N·m`);
    }
    if (tm) {
      const drive = car.drive;
      for (const a of drive === 'AWD' ? ['F', 'R'] : drive === 'FF' ? ['F'] : ['R']) {
        sep(`LSD（${a === 'F' ? 'フロント' : 'リア'}）`);
        num(`lsdInit${a}`, 'イニシャルトルク', 5, 60, 1, 0, '', '常にかかる差動制限。高いほど直進性↑・曲がりにくい');
        num(`lsdAcc${a}`, '加速感度', 5, 60, 1, 0, '', 'アクセルON時の効き。高いほど立ち上がりで内輪が空転しにくい');
        num(`lsdDec${a}`, '減速感度', 5, 60, 1, 0, '', 'アクセルOFF時の効き。高いほど進入で安定・曲がりにくい');
      }
      if (drive === 'AWD' && car.center) {
        sep('センターデフ');
        num('awdSplit', '前後トルク配分（前）', 0, 60, 1, 0, ' %', `前を増やすと安定・アンダー寄り、減らすとFR的に曲がる（純正 前${Math.round(car.center.split * 100)}%）`);
      }
      sep('トランスミッション（フルカスタマイズミッション）');
      const top = gearSpeeds(spec)[spec.gears.length - 1];
      num('_top', 'トップスピード（自動調整）', 150, 400, 5, 0, ' km/h', '設定した最高速に合わせて全ギア比を配分', null,
        () => Math.round(top / 5) * 5,
        (v) => { S.gears = autoGears(buildSpec(carId, equipped, S), S, v); });
      for (let i = 0; i < S.gears.length; i++) {
        num(`g${i}`, `${i + 1}速`, 0.5, 6, 0.01, 3, '', i === 0 ? 'Shiftを押しながら←→で0.001刻み' : '', null, () => S.gears[i], (v) => { S.gears[i] = v; });
      }
      num('final', 'ファイナルギア', 2.5, 6.5, 0.01, 3);
    }
    if (aR) {
      sep(`エアロ（${aero.name}）`);
      if (aR.F) num('dfF', 'ダウンフォース（前）', aR.F[0], aR.F[1], 5, 0, ' kgf', '200km/h時。増やすほど曲がるが最高速が落ちる', null, () => (S.dfF != null ? S.dfF : aR.F[2]), (v) => { S.dfF = v; });
      num('dfR', 'ダウンフォース（後）', aR.R[0], aR.R[1], 5, 0, ' kgf', aR.F ? '' : '200km/h時。増やすほど高速で安定、最高速は落ちる', null, () => (S.dfR != null ? S.dfR : aR.R[2]), (v) => { S.dfR = v; });
    }
    const reset = el('button', { class: 'menu-item small' }, '初期値に戻す');
    reset.onclick = () => { S = { ...def }; S.gears = [...car.gears]; changed(); build(); };
    const back = el('button', { class: 'menu-item small' }, '閉じる');
    back.onclick = () => close();
    rows.push({ row: reset, act: () => reset.onclick() }, { row: back, act: () => close() });
    // 右側：性能の確認
    const info = el('div', { class: 'stats setup-info' },
      ...[
        ['最高出力', `${spec.maxPowerPS.toFixed(0)} PS / ${spec.maxPowerRpm} rpm`],
        ['最大トルク', `${spec.maxTorque.toFixed(0)} N·m / ${spec.maxTorqueRpm} rpm`],
        ['重心高', `${(spec.cgHeight * 1000).toFixed(0)} mm`],
        ['ロール剛性配分（前）', `${(spec.rollFront * 100).toFixed(0)} %`],
        ['ロール勾配', `${spec.rollGrad.toFixed(2)} °/g`],
        ['ばね定数 前/後', `${(spec.susp.kF / 1000).toFixed(1)} / ${(spec.susp.kR / 1000).toFixed(1)} N/mm`],
        ['ストローク余裕 前/後', `${(spec.susp.travelF * 1000).toFixed(0)} / ${(spec.susp.travelR * 1000).toFixed(0)} mm`],
        ['ダウンフォース(200km/h)', `${((spec.clF + spec.clR) * spec.area * 0.5 * 1.2 * (200 / 3.6) ** 2 / 9.81).toFixed(0)} kgf`],
        ['戦闘力', String(spec.rating)],
      ].map(([k, v]) => el('div', { class: 'stat' }, el('span', {}, k), el('b', {}, v))));
    const right = el('div', { class: 'setup-right' },
      el('div', { class: 'key-sep' }, 'パワー・トルク曲線'), powerGraph(spec, buildSpec(carId, car.stock), { w: 400, h: 200 }),
      el('div', { class: 'key-sep' }, 'ギア別最高速度'), gearChart(spec, { w: 400, h: 24 + spec.gears.length * 16 }),
      info);
    wrap.appendChild(panel(`SETTING — ${car.name}`,
      el('div', { class: 'hint' }, '↑↓:項目　←→:変更（Shift+←→で細かく）　Esc:閉じる　※変更はすぐに車両へ反映されます'),
      el('div', { class: 'setup-body' }, list, right),
      el('div', { class: 'row-btns' }, reset, back)));
    index = Math.min(keep, rows.length - 1);
    hl();
  };

  const hl = () => rows.forEach((r, i) => r.row.classList.toggle('sel', i === index));

  const off = game.input.onKey((e) => {
    if (!wrap.isConnected) return;
    fine = e.shiftKey;
    if (e.code === 'ArrowDown') { index = (index + 1) % rows.length; hl(); rows[index].row.scrollIntoView({ block: 'nearest' }); }
    else if (e.code === 'ArrowUp') { index = (index - 1 + rows.length) % rows.length; hl(); rows[index].row.scrollIntoView({ block: 'nearest' }); }
    else if (e.code === 'ArrowLeft') rows[index]?.left?.();
    else if (e.code === 'ArrowRight') rows[index]?.right?.();
    else if (e.code === 'Enter') rows[index]?.act?.();
    else if (e.code === 'Escape') close();
  });
  const close = () => { off(); wrap.remove(); opts.onClose && opts.onClose(structuredClone(S)); };
  build();
  game.ui.appendChild(wrap);
  return close;
}
