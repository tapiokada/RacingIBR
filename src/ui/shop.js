// チューニングショップ（パーツ交換・購入・売却）
import { el, panel } from './ui.js';
import { CATEGORIES, PARTS, PART_BY_ID, CATEGORY_NAME, RANK_STARS } from '../data/parts.js';
import { buildSpec } from '../physics/spec.js';
import { freeCount, addPart, activeCar, fmtMoney } from '../save.js';
import { CARS } from '../data/cars.js';
import { dealerStock, dealerBuy } from '../data/dealer.js';
import { powerGraph } from './graph.js';

export function sellPrice(p) {
  return p.price ? Math.round(p.price * 0.5) : p.rank * 90000;
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

export function openShop(game, state, area, onClose) {
  if (typeof area === 'function') { onClose = area; area = null; }
  const shopId = area || 'west';
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
    const spec = buildSpec(car.carId, car.equipped, car.setup || null);
    const tabs = el('div', { class: 'tabs' },
      ...[['equip', 'パーツ交換'], ['buy', 'パーツ購入'], ['sell', 'パーツ売却'], ['car', '中古車']].map(([id, name]) =>
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
      // ★5フルカスタマイズパーツは榛名山のショップだけで扱う
      for (const p of PARTS.filter((x) => x.price && (!x.custom || area === 'haruna'))) {
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
    } else if (tab === 'car') {
      // 中古車店：入店時期（バトル2回ごと）で在庫・色・走行距離が入れ替わる。スペシャルカーは別枠
      const stock = dealerStock(shopId, state);
      const swatch = (c) => { const i = el('i', { class: 'swatch' }); i.style.background = `#${c.toString(16).padStart(6, '0')}`; return i; };
      const row = (L) => {
        const c = CARS[L.carId];
        const can = state.money >= L.price && L.left > 0;
        const buy = () => {
          if (L.left <= 0 || state.money < L.price) { game.audio.beep(220, 0.12, 0.1); return; }
          state.money -= L.price;
          for (const pid of Object.values(L.equipped)) if (pid) addPart(state, pid);
          state.garage.push({ carId: L.carId, color: L.color, colorName: L.colorName, year: L.year, km: L.km, equipped: { ...L.equipped }, setup: null });
          dealerBuy(state, L);
          game.audio.beep(1200, 0.08, 0.12);
          build();
        };
        const sp = buildSpec(L.carId, L.equipped);
        const extra = L.special ? `　★${L.special}：${L.extras.map((pid) => PART_BY_ID[pid].name).join('・')}（パーツ定価 ${fmtMoney(L.partsValue)}相当）` : '';
        const r = el('div', { class: 'part-row car-row' + (can ? '' : ' dim') + (L.special ? ' special' : '') },
          el('span', { class: 'cat' }, swatch(L.color), ` ${L.colorName}`),
          el('span', { class: 'pname' }, `${c.name}　${L.year}年式　${L.km.toLocaleString('ja-JP')}km`, el('small', {}, `　${c.ref}　${sp.maxPowerPS.toFixed(0)}PS・${c.drive}・${sp.mass.toFixed(0)}kg${extra}`)),
          el('span', { class: 'cnt' }, L.left > 0 ? `在庫 ${L.left}台` : 'SOLD OUT'),
          el('button', { class: 'buy', onclick: buy }, fmtMoney(L.price)));
        rows.push({ row: r, act: buy });
        return r;
      };
      list.appendChild(el('div', { class: 'key-sep' }, `入荷 第${stock.period + 1}期（バトル2回ごとに入れ替え）`));
      if (stock.special) {
        list.appendChild(el('div', { class: 'key-sep special-sep' }, 'SPECIAL CAR — チューニングパーツ付きの特選車'));
        list.appendChild(row(stock.special));
      }
      list.appendChild(el('div', { class: 'key-sep' }, '在庫車（純正）'));
      for (const L of stock.cars) list.appendChild(row(L));
      list.appendChild(el('div', { class: 'hint' }, '価格は実際の中古車相場（年式・走行距離で変動）を参考にしています。購入した車はパーツ付きでガレージに入り、乗り換えはポーズメニューの「ガレージ」から。'));
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
      el('div', { class: 'shop-body' }, list, el('div', { class: 'shop-side' }, statsBox(spec, buildSpec(car.carId, CARS[car.carId].stock)), el('div', { class: 'key-sep' }, 'パワー・トルク曲線（点線：純正）'), powerGraph(spec, buildSpec(car.carId, CARS[car.carId].stock), { w: 330, h: 180 }))),
      close));
    hl();
  };

  const hl = () => rows.forEach((r, i) => r.row.classList.toggle('sel', i === index));

  const off = game.input.onKey((e) => {
    if (!wrap.isConnected) return;
    if (e.code === 'Tab') { const order = ['equip', 'buy', 'sell', 'car']; tab = order[(order.indexOf(tab) + 1) % 4]; index = 0; build(); }
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
