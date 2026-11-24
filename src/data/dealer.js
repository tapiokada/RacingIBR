// 中古車店の在庫（入店時期＝バトル数・ストーリーの進み具合で入れ替わる）
// 価格は実際の中古車相場（2020年代中頃の国内相場・6MT/該当グレード）を参考にした目安。
import { CARS } from './cars.js';
import { PARTS, PART_BY_ID, CATEGORIES } from './parts.js';

// low/high: 相場の下限・上限[円]（走行距離・状態で変動） years: 年式の範囲 minWins: 店頭に並び始める勝利数
export const MARKET = {
  'SWIFT-S': { low: 1300000, high: 2200000, years: [2017, 2024], kmPerYear: 9000, minWins: 0 },
  'RS-RS': { low: 2000000, high: 3100000, years: [2018, 2024], kmPerYear: 7000, minWins: 0 },
  '86-GR': { low: 2900000, high: 3900000, years: [2021, 2024], kmPerYear: 8000, minWins: 0 },
  'BRZ-ZD': { low: 2800000, high: 3800000, years: [2021, 2024], kmPerYear: 8000, minWins: 1 },
  'Z-32': { low: 1800000, high: 4800000, years: [1989, 2000], kmPerYear: 4500, minWins: 2 },
  'WRX-IMP': { low: 2800000, high: 5800000, years: [2005, 2007], kmPerYear: 5500, minWins: 3 },
  'S2K-AP': { low: 4200000, high: 7800000, years: [2005, 2009], kmPerYear: 4500, minWins: 4 },
  'EVO-IX': { low: 4000000, high: 8500000, years: [2005, 2006], kmPerYear: 5000, minWins: 5 },
  '80-Supra': { low: 8500000, high: 16000000, years: [1997, 2002], kmPerYear: 4000, minWins: 7 },
  'R34-GTR': { low: 18000000, high: 32000000, years: [1999, 2002], kmPerYear: 3500, minWins: 9 },
};
const NOW_YEAR = 2025;

// 車種ごとの実在カラー（名称は一般名）
export const COLOR_POOL = {
  'SWIFT-S': [[0xf2c40f, 'チャンピオンイエロー'], [0xf1f1f1, 'ホワイト'], [0xb3121b, 'レッド'], [0x1a1a1a, 'ブラック'], [0x6b7178, 'シルバー']],
  'RS-RS': [[0xb3121b, 'ソウルレッド'], [0xeaeaea, 'ホワイト'], [0x1a1a1a, 'ブラック'], [0x3a4a5c, 'グレー']],
  '86-GR': [[0xd9dde3, 'クリスタルホワイト'], [0xb3121b, 'スパークレッド'], [0x1e3a8a, 'ブライトブルー'], [0x3a3d42, 'マグネタイトグレー'], [0x111111, 'ブラック']],
  'BRZ-ZD': [[0x1e4fa8, 'WRブルー'], [0xeaeaea, 'ホワイト'], [0x6b7178, 'アイスシルバー'], [0x1a1a1a, 'ブラック']],
  'Z-32': [[0x9a1b1f, 'レッド'], [0xeaeaea, 'ホワイト'], [0x1a1a1a, 'ブラック'], [0x6b7178, 'シルバー'], [0x2c3a5a, 'ダークブルー']],
  'WRX-IMP': [[0x1d3f9a, 'WRブルー'], [0xeaeaea, 'ホワイト'], [0x6b7178, 'シルバー'], [0x1a1a1a, 'ブラック']],
  'S2K-AP': [[0xe8e4d8, 'グランプリホワイト'], [0xb3121b, 'ニューフォーミュラレッド'], [0x1a1a1a, 'ブラック'], [0x6b7178, 'シルバー'], [0xd8b000, 'イエロー']],
  'EVO-IX': [[0xeaeaea, 'ホワイト'], [0x6b7178, 'シルバー'], [0x1a1a1a, 'ブラック'], [0xb3121b, 'レッド'], [0x1d3f9a, 'ブルー']],
  '80-Supra': [[0xd8d8d8, 'シルバー'], [0xeaeaea, 'ホワイト'], [0x1a1a1a, 'ブラック'], [0xb3121b, 'レッド']],
  'R34-GTR': [[0x3a4f9e, 'ベイサイドブルー'], [0x6b7178, 'シルバー'], [0xeaeaea, 'ホワイト'], [0x1a1a1a, 'ブラック'], [0x5a4a8a, 'ミッドナイトパープル']],
};

// 店ごとの入店時期（バトル2回ごとに入荷が入れ替わる）
export const dealerPeriod = (st) => Math.floor(((st.wins || 0) + (st.losses || 0)) / 2);

function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  let s = h >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// パーツの価値（非売品は★から推定）
export function partValue(p) {
  if (!p) return 0;
  if (p.price) return p.price;
  return { 1: 60000, 2: 300000, 3: 600000, 4: 1200000, 5: 2000000 }[p.rank] || 0;
}

function carListing(r, carId, extra = {}) {
  const m = MARKET[carId];
  const [y0, y1] = m.years;
  const year = y0 + Math.floor(r() * (y1 - y0 + 1));
  const age = Math.max(0.5, NOW_YEAR - year + r() * 0.8);
  const km = Math.round((age * m.kmPerYear * (0.4 + r() * 1.3)) / 100) * 100;
  // 走行距離の少なさ・新しさで相場内の位置が決まる（＋個体差）
  const kmNorm = Math.min(1, km / (m.kmPerYear * 14));
  const ageNorm = (year - y0) / Math.max(1, y1 - y0);
  const cond = Math.max(0, Math.min(1, 0.55 * (1 - kmNorm) + 0.3 * ageNorm + 0.15 * r()));
  const price = Math.round((m.low + (m.high - m.low) * cond) / 10000) * 10000;
  const pool = COLOR_POOL[carId];
  const [color, colorName] = pool[Math.floor(r() * pool.length)];
  return { carId, year, km, price, color, colorName, stock: 1 + (r() < 0.25 ? 1 : 0), ...extra };
}

// スペシャルカー：純正以外のパーツ付き。パーツ価値の約40%で買える
const SPECIAL_SETS = [
  { name: 'ストリート仕様', cats: { muffler: 'muf_sport', suspension: 'sus_street', tire: 'tire_high', brake: 'brk_pad' } },
  { name: '峠仕様', cats: { suspension: 'sus_circuit', tire: 'tire_high', brake: 'brk_big', aero: 'aero_lip', muffler: 'muf_sport' } },
  { name: 'パワー仕様', cats: { boreup: 'bore_2', muffler: 'muf_straight', intercooler: 'ic_large', tire: 'tire_high' }, turbo: 'tb_mid' },
  { name: 'サーキット仕様', cats: { suspension: 'sus_circuit', tire: 'tire_s', brake: 'brk_big', transmission: 'tm_close', aero: 'aero_full' } },
  { name: 'フルチューン', cats: { boreup: 'bore_3', muffler: 'muf_straight', intercooler: 'ic_front', suspension: 'sus_full', tire: 'tire_s', brake: 'brk_full', transmission: 'tm_full', aero: 'aero_wing' }, turbo: 'tb_twin', minWins: 8 },
];

// 店の在庫一覧 { cars: [...], special: listing|null }
export function dealerStock(shopId, st) {
  const period = dealerPeriod(st);
  const r = seeded(`${shopId}|${period}`);
  const wins = st.wins || 0;
  const avail = Object.keys(MARKET).filter((id) => MARKET[id].minWins <= wins);
  // 4〜6車種を並べる（同じ車種は1枠）
  const n = Math.min(avail.length, 4 + Math.floor(r() * 3));
  const pick = [...avail].sort(() => r() - 0.5).slice(0, n).sort((a, b) => MARKET[a].low - MARKET[b].low);
  const cars = pick.map((id, k) => carListing(r, id, { id: `${shopId}-${period}-${k}`, equipped: { ...CARS[id].stock } }));
  let special = null;
  if (r() < 0.3) {
    const sets = SPECIAL_SETS.filter((s) => (s.minWins || 0) <= wins);
    const set = sets[Math.floor(r() * sets.length)];
    const id = avail[Math.floor(r() * avail.length)];
    const equipped = { ...CARS[id].stock, ...set.cats };
    if (set.turbo) { equipped.turbo = set.turbo; equipped.intercooler ||= 'ic_large'; }
    const extras = CATEGORIES.map((c) => equipped[c.id]).filter((pid, i) => pid && pid !== CARS[id].stock[CATEGORIES[i].id]);
    const value = extras.reduce((a, pid) => a + partValue(PART_BY_ID[pid]), 0);
    const base = carListing(r, id);
    special = { ...base, id: `${shopId}-${period}-sp`, special: set.name, equipped, extras, partsValue: value, price: Math.round((base.price + value * 0.4) / 10000) * 10000, stock: 1 };
  }
  // 売れた分を在庫から引く
  const sold = (st.dealerSold || {});
  for (const L of [...cars, ...(special ? [special] : [])]) L.left = L.stock - (sold[L.id] || 0);
  return { period, cars, special };
}

export function dealerBuy(st, L) {
  st.dealerSold ||= {};
  st.dealerSold[L.id] = (st.dealerSold[L.id] || 0) + 1;
  // 古い入荷分の記録は消す
  const cur = dealerPeriod(st);
  for (const k of Object.keys(st.dealerSold)) { const per = +k.split('-')[1]; if (per < cur - 1) delete st.dealerSold[k]; }
}

export { PARTS };
