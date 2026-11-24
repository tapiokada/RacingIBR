// 足回り・駆動系のセッティング（GT7の項目を参考）
// ★5 フルカスタマイズ車高調 / フルカスタマイズブレーキキット / フルカスタマイズミッション（LSD込み）
// および調整式エアロ（GTウイング・フルエアロ）のダウンフォース調整。
import { CARS } from '../data/cars.js';
import { PART_BY_ID } from '../data/parts.js';

const STYLE_RIDE = { coupe: 130, sedan: 145, roadster: 125, hatch: 150, gt: 130 };
export const rideOf = (car) => car.rideH || STYLE_RIDE[car.body?.style] || 135;

// 各純正の差動装置（init: プリロード相当、acc/dec: 加速・減速時のロック率。0は無し＝オープン）
const STOCK_LSD = {
  '86-GR': { rear: { init: 5, acc: 30, dec: 14 } },
  'BRZ-ZD': { rear: { init: 5, acc: 30, dec: 14 } },
  'WRX-IMP': { front: { init: 5, acc: 18, dec: 5 }, rear: { init: 10, acc: 28, dec: 15 } },
  'RS-RS': { rear: { init: 12, acc: 22, dec: 16 } },
  'SWIFT-S': { front: { init: 0, acc: 0, dec: 0 } },
  '80-Supra': { rear: { init: 5, acc: 30, dec: 14 } },
  'S2K-AP': { rear: { init: 5, acc: 30, dec: 14 } },
  'EVO-IX': { front: { init: 5, acc: 20, dec: 5 }, rear: { init: 10, acc: 35, dec: 15 } },
  'Z-32': { rear: { init: 10, acc: 15, dec: 10 } },
  'R34-GTR': { front: { init: 5, acc: 10, dec: 5 }, rear: { init: 10, acc: 35, dec: 20 } },
};
export function stockLsd(carId) {
  const car = CARS[carId];
  const d = STOCK_LSD[carId] || {};
  const open = { init: 0, acc: 0, dec: 0 };
  return {
    front: car.drive === 'FR' ? null : (d.front || open),
    rear: car.drive === 'FF' ? null : (d.rear || open),
  };
}

// 設定項目の定義（UI と範囲チェックで使う）
// part: その項目を有効にするパーツ
export const SETUP_FIELDS = [
  { group: 'サスペンション', part: 'sus_full', items: [
    { key: 'ride', name: '車高', unit: 'mm', step: 1, axle: true, fmt: 0 },
    { key: 'freq', name: '固有振動数', unit: 'Hz', min: 1.5, max: 5.0, step: 0.05, axle: true, fmt: 2 },
    { key: 'arb', name: 'アンチロールバー', unit: '', min: 1, max: 10, step: 1, axle: true, fmt: 0 },
    { key: 'dampC', name: '減衰比（縮み側）', unit: '%', min: 20, max: 60, step: 1, axle: true, fmt: 0 },
    { key: 'dampE', name: '減衰比（伸び側）', unit: '%', min: 20, max: 60, step: 1, axle: true, fmt: 0 },
    { key: 'camber', name: 'キャンバー角（ネガティブ）', unit: '°', min: 0, max: 6, step: 0.1, axle: true, fmt: 1 },
    { key: 'toe', name: 'トー角（＋イン／−アウト）', unit: '°', min: -1, max: 1, step: 0.05, axle: true, fmt: 2 },
  ] },
  { group: 'ブレーキ', part: 'brk_full', items: [
    { key: 'brakeBal', name: 'ブレーキバランス（−前／＋後）', unit: '', min: -5, max: 5, step: 1, fmt: 0 },
    { key: 'brakeStr', name: 'ブレーキ力', unit: '%', min: 70, max: 130, step: 1, fmt: 0 },
  ] },
  { group: 'LSD', part: 'tm_full', items: [
    { key: 'lsdInit', name: 'イニシャルトルク', unit: '', min: 5, max: 60, step: 1, lsd: true, fmt: 0 },
    { key: 'lsdAcc', name: '加速感度', unit: '', min: 5, max: 60, step: 1, lsd: true, fmt: 0 },
    { key: 'lsdDec', name: '減速感度', unit: '', min: 5, max: 60, step: 1, lsd: true, fmt: 0 },
  ] },
  { group: 'トランスミッション', part: 'tm_full', items: [
    { key: 'gears', name: 'ギア比', min: 0.5, max: 6.0, step: 0.001, fmt: 3, list: true },
    { key: 'final', name: 'ファイナルギア', min: 2.5, max: 6.5, step: 0.001, fmt: 3 },
  ] },
  { group: 'エアロ', part: 'aero_adj', items: [
    { key: 'df', name: 'ダウンフォース（200km/h時）', unit: 'kgf', step: 5, axle: true, fmt: 0 },
  ] },
];

// フルカスタマイズ車高調の初期値（サーキット車高調相当）
export function defaultSetup(carId) {
  const car = CARS[carId];
  const ride = rideOf(car) - 35;
  const lsd = stockLsd(carId);
  const lv = (x, d) => (x && x.acc > 0 ? Math.max(5, x.init) : d);
  const tm = car.gears;
  return {
    rideF: ride, rideR: ride + 3,
    freqF: 2.6, freqR: 2.8,
    arbF: 5, arbR: 5,
    dampCF: 35, dampCR: 35, dampEF: 50, dampER: 50,
    camberF: 2.5, camberR: 2.0,
    toeF: 0, toeR: 0.2,
    brakeBal: 0, brakeStr: 100,
    lsdInitF: lv(lsd.front, 10), lsdAccF: Math.max(5, lsd.front?.acc || 15), lsdDecF: Math.max(5, lsd.front?.dec || 5),
    lsdInitR: lv(lsd.rear, 10), lsdAccR: Math.max(5, lsd.rear?.acc || 25), lsdDecR: Math.max(5, lsd.rear?.dec || 15),
    gears: [...tm], final: car.final,
    awdSplit: car.center ? Math.round(car.center.split * 100) : null,
    dfF: null, dfR: null,
  };
}

export function rideRange(carId) {
  const r = rideOf(CARS[carId]);
  return [r - 55, r + 25];
}

// 空力：kgf(200km/h) ⇔ Cl·A
const Q200 = 0.5 * 1.2 * (200 / 3.6) ** 2;
export const kgfToClA = (kgf) => (kgf * 9.81) / Q200;
export const clAToKgf = (clA) => (clA * Q200) / 9.81;

export function aeroRange(aero, car) {
  if (!aero?.adjustable) return null;
  const A = car.area;
  const f = clAToKgf(aero.clF * A), r = clAToKgf(aero.clR * A);
  return {
    F: aero.clF > 0 ? [Math.round(f * 0.4 / 5) * 5, Math.round(f * 1.6 / 5) * 5, Math.round(f / 5) * 5] : null,
    R: [Math.round(r * 0.4 / 5) * 5, Math.round(r * 1.6 / 5) * 5, Math.round(r / 5) * 5],
  };
}

// 最高速度からギア比を自動配分（1速はそのまま、最終ギアを合わせ中間は等比よりややクロス寄り）
export function autoGears(spec0, setup, topKmh) {
  const g = setup.gears;
  const n = g.length;
  const R = spec0.tireRadius;
  const rpm = spec0.redline * 0.98;
  const top = (rpm * 2 * Math.PI / 60) * R / (topKmh / 3.6) / setup.final; // 最終ギア比
  const g1 = g[0];
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = n === 1 ? 0 : i / (n - 1);
    const tt = Math.pow(t, 0.9); // 高いギアほど詰める
    out.push(+(g1 * Math.pow(top / g1, tt)).toFixed(3));
  }
  return out.map((x) => Math.max(0.5, Math.min(6, x)));
}

// ギア比から各ギアの最高速度[km/h]
export function gearSpeeds(spec) {
  return spec.gears.map((g) => ((spec.redline * 2 * Math.PI / 60) * spec.tireRadius / (g * spec.final)) * 3.6);
}

// 固定パーツのサスペンション特性
const SUS_PRESET = {
  sus_stock: { drop: 0, freq: [1.55, 1.7], dampC: 30, dampE: 45, rollGrad: 3.0, camber: [0.5, 1.0], toe: [0, 0.1] },
  sus_street: { drop: 20, freq: [2.1, 2.3], dampC: 32, dampE: 48, rollGrad: 2.0, camber: [1.5, 1.5], toe: [0, 0.15] },
  sus_circuit: { drop: 35, freq: [2.7, 2.9], dampC: 35, dampE: 50, rollGrad: 1.3, camber: [2.5, 2.0], toe: [-0.05, 0.2] },
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const num = (v, d) => (typeof v === 'number' && isFinite(v) ? v : d);

// spec（buildSpecの途中結果）にサスペンション・ブレーキ・駆動系・空力を設定
export function applyChassis(spec, setup) {
  const car = spec.car;
  const S = { ...defaultSetup(spec.carId), ...(setup || {}) };
  const m = spec.mass;
  const mF = m * spec.frontWeight / 2, mR = m * (1 - spec.frontWeight) / 2; // 1輪あたりのばね上質量
  const stockRide = rideOf(car);
  const full = spec.sus.id === 'sus_full';
  const susp = {};
  if (full) {
    const [rmin, rmax] = rideRange(spec.carId);
    susp.rideF = clamp(num(S.rideF, stockRide - 35), rmin, rmax);
    susp.rideR = clamp(num(S.rideR, stockRide - 32), rmin, rmax);
    susp.freqF = clamp(num(S.freqF, 2.6), 1.5, 5); susp.freqR = clamp(num(S.freqR, 2.8), 1.5, 5);
    susp.dampCF = clamp(num(S.dampCF, 30), 20, 60); susp.dampCR = clamp(num(S.dampCR, 30), 20, 60);
    susp.dampEF = clamp(num(S.dampEF, 40), 20, 60); susp.dampER = clamp(num(S.dampER, 40), 20, 60);
    susp.camberF = clamp(num(S.camberF, 2.5), 0, 6); susp.camberR = clamp(num(S.camberR, 2), 0, 6);
    susp.toeF = clamp(num(S.toeF, 0), -1, 1); susp.toeR = clamp(num(S.toeR, 0.2), -1, 1);
  } else {
    const p = SUS_PRESET[spec.sus.id] || SUS_PRESET.sus_stock;
    susp.rideF = stockRide - p.drop; susp.rideR = stockRide - p.drop + 3;
    susp.freqF = p.freq[0]; susp.freqR = p.freq[1];
    susp.dampCF = susp.dampCR = p.dampC; susp.dampEF = susp.dampER = p.dampE;
    susp.camberF = p.camber[0]; susp.camberR = p.camber[1];
    susp.toeF = p.toe[0]; susp.toeR = p.toe[1];
  }
  const w = (f) => (2 * Math.PI * f) ** 2;
  susp.kF = mF * w(susp.freqF); susp.kR = mR * w(susp.freqR);
  const crit = (k, mm) => 2 * Math.sqrt(k * mm);
  susp.cCF = crit(susp.kF, mF) * susp.dampCF / 100; susp.cEF = crit(susp.kF, mF) * susp.dampEF / 100;
  susp.cCR = crit(susp.kR, mR) * susp.dampCR / 100; susp.cER = crit(susp.kR, mR) * susp.dampER / 100;
  // スタビライザー（ロール剛性 N·m/rad を車輪位置の線形ばねへ換算: k_lin = K / t²）
  const tF = spec.trackF, tR = spec.trackR;
  const KsF = susp.kF * tF * tF / 2, KsR = susp.kR * tR * tR / 2;
  const unitF = mF * w(2.0) * tF * tF / 2 * 0.16, unitR = mR * w(2.0) * tR * tR / 2 * 0.16;
  let KaF, KaR;
  if (full) {
    susp.arbF = clamp(Math.round(num(S.arbF, 5)), 1, 10); susp.arbR = clamp(Math.round(num(S.arbR, 5)), 1, 10);
    KaF = susp.arbF * unitF; KaR = susp.arbR * unitR;
  } else {
    // 純正などは目標ロール勾配[deg/g]と前後配分(rollFront)から逆算
    const p = SUS_PRESET[spec.sus.id] || SUS_PRESET.sus_stock;
    const h = spec.cgHeight;
    const Ktot = m * 9.81 * h / (p.rollGrad * Math.PI / 180) + m * 9.81 * h;
    const rf = spec.rollFront;
    KaF = Math.max(0.2 * unitF, Ktot * rf - KsF);
    KaR = Math.max(0.2 * unitR, Ktot * (1 - rf) - KsR);
    susp.arbF = KaF / unitF; susp.arbR = KaR / unitR;
  }
  susp.arbLinF = KaF / (tF * tF); susp.arbLinR = KaR / (tR * tR);
  // ストローク（バンプ側）：車高から最低地上高を引いた分
  susp.travelF = Math.max(0.025, (susp.rideF - 45) / 1000);
  susp.travelR = Math.max(0.025, (susp.rideR - 45) / 1000);
  susp.droopF = 0.09; susp.droopR = 0.09;
  // 重心高：車高の変化分（ばね上のみ）を反映。前後車高差で静的ピッチ
  const dRide = ((susp.rideF + susp.rideR) / 2 - stockRide) / 1000;
  spec.cgHeight = car.cgHeight + dRide * 0.9;
  susp.rake = ((susp.rideR - susp.rideF) / 1000) / spec.wheelbase;
  spec.susp = susp;
  spec.rollFront = (KsF + KaF) / (KsF + KaF + KsR + KaR);
  spec.rollGrad = (m * 9.81 * spec.cgHeight / (KsF + KaF + KsR + KaR - m * 9.81 * spec.cgHeight)) * 180 / Math.PI;

  // ---- ブレーキ ----
  if (spec.brakePart.id === 'brk_full') {
    const bal = clamp(Math.round(num(S.brakeBal, 0)), -5, 5);
    const str = clamp(num(S.brakeStr, 100), 70, 130);
    spec.brakeBias = clamp(car.brakeBias - bal * 0.025, 0.4, 0.85);
    spec.brakeTorque = car.brakeTorque * spec.brakePart.torque * str / 100;
    spec.setupBrake = { bal, str };
  }

  // ---- 駆動系・LSD ----
  const lsd = stockLsd(spec.carId);
  const toDiff = (x) => (x && (x.acc > 0 || x.init > 0) ? { pre: x.init * 8, acc: x.acc / 75, dec: x.dec / 75 } : { pre: 0, acc: 0, dec: 0 });
  if (spec.trans.id === 'tm_full') {
    const n = car.gears.length;
    const gears = Array.isArray(S.gears) && S.gears.length === n ? S.gears : car.gears;
    spec.gears = gears.map((g) => clamp(num(g, 1), 0.5, 6));
    spec.final = clamp(num(S.final, car.final), 2.5, 6.5);
    const L = (k, d) => clamp(Math.round(num(S[k], d)), 5, 60);
    if (lsd.front) lsd.front = { init: L('lsdInitF', 10), acc: L('lsdAccF', 15), dec: L('lsdDecF', 5) };
    if (lsd.rear) lsd.rear = { init: L('lsdInitR', 10), acc: L('lsdAccR', 25), dec: L('lsdDecR', 15) };
    if (spec.center && S.awdSplit != null) spec.center.split = clamp(num(S.awdSplit, 40), 0, 60) / 100;
  }
  spec.lsd = lsd;
  spec.diffF = lsd.front ? toDiff(lsd.front) : { pre: 0, acc: 0, dec: 0 };
  spec.diffR = lsd.rear ? toDiff(lsd.rear) : { pre: 0, acc: 0, dec: 0 };

  // ---- 空力 ----
  const aero = spec.aero;
  if (aero?.adjustable) {
    const rg = aeroRange(aero, car);
    const A = car.area;
    const fK = rg.F ? clamp(num(S.dfF, rg.F[2]), rg.F[0], rg.F[1]) : clAToKgf(aero.clF * A);
    const rK = clamp(num(S.dfR, rg.R[2]), rg.R[0], rg.R[1]);
    const clF = kgfToClA(fK) / A, clR = kgfToClA(rK) / A;
    const base = aero.clF + aero.clR;
    spec.clF = clF - (car.liftF || 0); spec.clR = clR - (car.liftR || 0);
    spec.cd = car.cd + aero.cd * ((clF + clR) / base);
    spec.setupAero = { dfF: fK, dfR: rK };
  }
  // 車高による空力（低いほど床下で少し増える）
  const rideK = 1 + clamp((stockRide - (susp.rideF + susp.rideR) / 2) / 1000, -0.03, 0.06) * 2;
  // 車高：低いほど床下の流速が上がり揚力が減る（全体に +）。前下がり（レーキ）はフロントの揚力を減らす
  const lowK = (rideK - 1) * 0.5;
  spec.clF += lowK * 0.5 + Math.max(0, susp.rake) * 0.8;
  spec.clR += lowK * 0.5 - Math.max(0, susp.rake) * 0.3;
  return spec;
}

// 装着パーツから「調整可能な項目グループ」を返す
export function adjustableGroups(equipped) {
  const out = [];
  if (equipped.suspension === 'sus_full') out.push('サスペンション');
  if (equipped.brake === 'brk_full') out.push('ブレーキ');
  if (equipped.transmission === 'tm_full') out.push('LSD', 'トランスミッション');
  if (equipped.aero && PART_BY_ID[equipped.aero]?.adjustable) out.push('エアロ');
  return out;
}
