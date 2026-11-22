// チューニングショップ（パーツ交換・購入・売却）
import { el, panel } from './ui.js';
import { CATEGORIES, PARTS, PART_BY_ID, CATEGORY_NAME, RANK_STARS } from '../data/parts.js';
import { buildSpec } from '../physics/spec.js';
import { freeCount, addPart, activeCar, fmtMoney } from '../save.js';
import { CARS } from '../data/cars.js';

export function sellPrice(p) {
  return p.price ? Math.round(p.price * 0.5) : p.rank * 45000;
}

export function specSummary(spec) {
  return [
    ['最高出力', `${spec.maxPowerPS.toFixed(0)} PS / ${spec.maxPowerRpm} rpm`],
    ['最大トルク', `${spec.maxTorque.toFixed(0)} N·m / ${spec.maxTorqueRpm} rpm`],
    ['車両重量', `${spec.mass.toFixed(0)} kg`],
    ['パワーウェイトレシオ', `${spec.pwr.toFixed(2)} kg/PS`],
    ['グリップ', spec.mu.toFixed(2)],
    ['ダウンフォース係数', (spec.clF + spec.clR).toFixed(2)],
    ['レブリミット', `${spec.redline} rpm`],
    ['戦闘力', String(spec.rating)],
  ];
}

export function openShop(game, state, onClose) {
  const wrap = el('div', { class: 'screen shop' });
  let tab = 'equip';
  let index = 0;
  let rows = [];
  const car = activeCar(state);

  const options = (cat) => {
    const c = CATEGORIES.find((x) => x.id === cat);
    const ids = PARTS.filter((p) => p.cat === cat && (freeCount(state, p.id) > 0 || car.equipped[cat] === p.id)).map((p) => p.id);
    if (!c.required) ids.unshift(null);
    return ids;
  };

  const statsBox = (spec, base) => {
    const box = el('div', { class: 'stats' });
    const a = specSummary(spec), b = base ? specSummary(base) : null;
    a.forEach(([k, v], i) => {
      const diff = b && b[i][1] !== v;
      box.appendChild(el('div', { class: 'stat' + (diff ? ' diff' : '') }, el('span', {}, k), el('b', {}, v)));
    });
    return box;
  };

  const build = () => {
    wrap.innerHTML = '';
    rows = [];
    const spec = buildSpec(car.carId, car.equipped);
    const tabs = el('div', { class: 'tabs' },
      ...[['equip', 'パーツ交換'], ['buy', 'パーツ購入'], ['sell', 'パーツ売却']].map(([id, name]) =>
        el('button', { class: 'tab' + (tab === id ? ' on' : ''), onclick: () => { tab = id; index = 0; build(); } }, name)));
    const list = el('div', { class: 'part-list' });
    if (tab === 'equip') {
      for (const c of CATEGORIES) {
        const opts = options(c.id);
        const cur = car.equipped[c.id];
        const p = cur ? PART_BY_ID[cur] : null;
        const shift = (d) => {
          const i = opts.indexOf(cur);
          const next = opts[(i + d + opts.length) % opts.length];
          car.equipped[c.id] = next;
          game.audio.beep(720, 0.04, 0.08);
          build();
        };
        const row = el('div', { class: 'part-row' },
          el('span', { class: 'cat' }, c.name),
          el('button', { class: 'arrow', onclick: () => shift(-1) }, '◀'),
          el('span', { class: 'pname' }, p ? p.name : '（なし）', el('small', {}, p ? `　${RANK_STARS(p.rank)}　${p.desc}` : '')),
          el('button', { class: 'arrow', onclick: () => shift(1) }, '▶'),
          el('span', { class: 'cnt' }, `${opts.length - (c.required ? 0 : 1)}種所持`));
        rows.push({ row, left: () => shift(-1), right: () => shift(1), act: () => shift(1) });
        list.appendChild(row);
      }
    } else if (tab === 'buy') {
      for (const p of PARTS.filter((x) => x.price)) {
        const can = state.money >= p.price;
        const buy = () => {
          if (state.money < p.price) { game.audio.beep(220, 0.12, 0.1); return; }
          state.money -= p.price; addPart(state, p.id); game.audio.beep(1200, 0.08, 0.12); build();
        };
        const row = el('div', { class: 'part-row' + (can ? '' : ' dim') },
          el('span', { class: 'cat' }, CATEGORY_NAME[p.cat]),
          el('span', { class: 'pname' }, p.name, el('small', {}, `　${p.desc}`)),
          el('span', { class: 'cnt' }, `所持 ${state.owned[p.id] || 0}`),
          el('button', { class: 'buy', onclick: buy }, fmtMoney(p.price)));
        rows.push({ row, act: buy });
        list.appendChild(row);
      }
    } else {
      const sellable = PARTS.filter((p) => freeCount(state, p.id) > 0);
      if (!sellable.length) list.appendChild(el('div', { class: 'hint' }, '売却できる（未装着の）パーツはありません'));
      for (const p of sellable) {
        const sell = () => {
          if (freeCount(state, p.id) <= 0) return;
          state.owned[p.id] -= 1; state.money += sellPrice(p); game.audio.beep(900, 0.08, 0.12); build();
        };
        const row = el('div', { class: 'part-row' },
          el('span', { class: 'cat' }, CATEGORY_NAME[p.cat]),
          el('span', { class: 'pname' }, p.name, el('small', {}, `　${RANK_STARS(p.rank)}`)),
          el('span', { class: 'cnt' }, `未装着 ${freeCount(state, p.id)}`),
          el('button', { class: 'buy', onclick: sell }, '売却 ' + fmtMoney(sellPrice(p))));
        rows.push({ row, act: sell });
        list.appendChild(row);
      }
    }
    const close = el('button', { class: 'menu-item small' }, 'ショップを出る');
    close.onclick = () => done();
    index = Math.min(index, rows.length - 1);
    wrap.appendChild(panel(`TUNE SHOP — ${CARS[car.carId].name}`,
      el('div', { class: 'shop-head' }, el('span', {}, `所持金 ${fmtMoney(state.money)}`), el('span', { class: 'hint' }, 'Tab:タブ切替　↑↓:選択　←→:パーツ変更　Enter:購入/売却　Esc:出る')),
      tabs,
      el('div', { class: 'shop-body' }, list, statsBox(spec, buildSpec(car.carId, CARS[car.carId].stock))),
      close));
    hl();
  };

  const hl = () => rows.forEach((r, i) => r.row.classList.toggle('sel', i === index));

  const off = game.input.onKey((e) => {
    if (!wrap.isConnected) return;
    if (e.code === 'Tab') { const order = ['equip', 'buy', 'sell']; tab = order[(order.indexOf(tab) + 1) % 3]; index = 0; build(); }
    else if (e.code === 'ArrowDown' && rows.length) { index = (index + 1) % rows.length; hl(); rows[index].row.scrollIntoView({ block: 'nearest' }); }
    else if (e.code === 'ArrowUp' && rows.length) { index = (index - 1 + rows.length) % rows.length; hl(); rows[index].row.scrollIntoView({ block: 'nearest' }); }
    else if (e.code === 'ArrowLeft') rows[index]?.left?.();
    else if (e.code === 'ArrowRight') rows[index]?.right?.();
    else if (e.code === 'Enter') rows[index]?.act?.();
    else if (e.code === 'Escape') done();
  });

  const done = () => { off(); wrap.remove(); onClose && onClose(); };
  build();
  game.ui.appendChild(wrap);
}
