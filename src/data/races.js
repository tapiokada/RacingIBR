// サーキットレース（8台出走）：クラス分けのレギュレーション、参加者の選び方、賞金、ライバルのタイムの見積もり
import { ALL_RIVALS, RIVAL_BY_ID } from './rivals.js';
import { STORY_CIRCUIT_LAYOUTS } from './map.js';
import { REF_TIMES } from './reftimes.js';
import { buildSpec } from '../physics/spec.js';

// クラス：パワーウェイトレシオ（車両重量kg ÷ 最高出力PS）で分ける
export const CLASSES = [
  { id: 'A', name: 'クラスA（ハイパワー）', max: 3.9, desc: '3.9kg/PS以下', k: 2.5 },
  { id: 'B', name: 'クラスB（ミドル）', max: 5.0, desc: '3.9〜5.0kg/PS', k: 1.6 },
  { id: 'C', name: 'クラスC（ライト）', max: 1e9, desc: '5.0kg/PS超', k: 1.0 },
];
export const classOfPwr = (pwr) => CLASSES.find((c) => pwr <= c.max);
export const pwrOf = (carId, equipped, setup = null) => buildSpec(carId, equipped, setup).pwr;

// 本選の周回数・時間制セッション（プラクティス・予選）の長さ
export const RACE_FORMAT = {
  tsukuba: { laps: 5, k: 1.0 },
  suzuka: { laps: 3, k: 1.5 },
  fuji: { laps: 3, k: 1.35 },
};
export const SESSION_LEN = { practice: 15 * 60, qualify: 15 * 60 };
export const RACE_LAYOUTS = STORY_CIRCUIT_LAYOUTS;

// 参加費・賞金（クラス・サーキットの格で増える）
const BASE_PRIZE = [400000, 250000, 180000, 130000, 100000, 80000, 60000, 50000];
export function raceMoney(cls, circuitId) {
  const k = CLASSES.find((c) => c.id === cls).k * RACE_FORMAT[circuitId].k;
  const r = (v) => Math.round(v / 10000) * 10000;
  return { fee: r(50000 * k), prize: BASE_PRIZE.map((v) => r(v * k)) };
}

let _pwr = null;
const rivalPwr = () => (_pwr ||= Object.fromEntries(ALL_RIVALS.map((r) => [r.id, buildSpec(r.car, r.parts, r.setup || null).pwr])));

function seeded(n) { let s = (n >>> 0) || 1; return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// 参加者（ライバル7人）：プレイヤーと同じクラスのライバルから選ぶ。
// 今の勝利数に近い（街で出会う頃合いの）ライバルほど選ばれやすく、毎回少しずつ顔ぶれが変わる（seed：レース出走回数）。
// 同じクラスに7人いなければ、パワーウェイトレシオが近いライバルで埋める
export function pickEntrants(cls, wins, seed) {
  const pw = rivalPwr();
  const r = seeded(seed * 7919 + cls.charCodeAt(0));
  const score = (x) => Math.abs((x.minWins || 0) - wins) * 0.25 + r() * 2.2;
  const inCls = ALL_RIVALS.filter((x) => classOfPwr(pw[x.id]).id === cls).sort((a, b) => score(a) - score(b));
  let list = inCls.slice(0, 7);
  if (list.length < 7) {
    const c = CLASSES.find((x) => x.id === cls);
    const lo = CLASSES[CLASSES.indexOf(c) - 1]?.max ?? 0;
    const mid = Math.min(c.max, 7) - (Math.min(c.max, 7) - lo) / 2;
    const rest = ALL_RIVALS.filter((x) => !list.includes(x)).sort((a, b) => Math.abs(pw[a.id] - mid) - Math.abs(pw[b.id] - mid));
    list = [...list, ...rest.slice(0, 7 - list.length)];
  }
  return list.map((x) => x.id);
}

// ライバルの基準ラップ（単独・ミスなしのフライングラップ。tools/reftimes.mjs で計算）
export function refLap(layoutKey, rivalId) {
  return REF_TIMES[layoutKey]?.[rivalId] ?? null;
}

// ライバルの1周のタイムを見積もる（コース上を走っていない時間の分＝セッションを途中で終えたとき・省略したとき）
// 基準ラップに、腕前に応じたばらつき（上手いほど小さい）とミス（ときどき大きく遅れる）を加える
export function simLap(rivalId, ref, rand = Math.random) {
  const sk = RIVAL_BY_ID[rivalId].skill;
  const sigma = 0.004 + (1 - sk) * 0.05;
  const g = Math.abs((rand() + rand() + rand() - 1.5) * 1.15); // 半正規分布ぐらい
  let t = ref * (1 + 0.003 + g * sigma);
  const mistake = Math.max(0, (0.955 - sk) * 1.6) * 1.5 + 0.03;
  if (rand() < mistake) t *= 1.02 + rand() * 0.06;
  return t;
}

// 残り時間 remain[s] の間にライバルが走る周の見積もり（タイムの配列）。アウトラップ・クールダウンの分を引く
export function simSession(rivalId, ref, remain, rand = Math.random) {
  const laps = [];
  let t = ref * 1.15; // 次のアタックまでの準備（アウトラップ相当）
  while (t + ref < remain) {
    const lt = simLap(rivalId, ref, rand);
    laps.push(lt);
    t += lt;
    if (laps.length % 3 === 0) t += ref * 1.1; // 3周アタックしたらクールダウン
  }
  return laps;
}
