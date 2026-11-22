// 車両データ（実車の公表値を参考にした架空車）
// 公表値が見つからない項目（重心高、Cd、前面投影面積、慣性等）は同クラス車から推定。
// stock: 各カテゴリの純正パーツ（null = 未装着）

export const CARS = {
  '86-GR': {
    id: '86-GR', name: '86-GR', ref: 'トヨタ GR86 RZ (ZN8型 6MT)',
    drive: 'FR', mass: 1270, frontWeight: 0.535, cgHeight: 0.46,
    length: 4.265, width: 1.775, height: 1.31, wheelbase: 2.575, trackF: 1.52, trackR: 1.55,
    tireRadius: 0.315, cd: 0.33, area: 1.95, steerLock: 0.56,
    gears: [3.626, 2.188, 1.541, 1.213, 1.0, 0.767], reverse: 3.437, final: 4.1,
    brakeTorque: 4200, brakeBias: 0.64, rollFront: 0.55, inertiaK: 1.0,
    published: '235PS/7000rpm, 250N·m/3700rpm, 1270kg',
    body: { style: 'coupe', hood: 0.36, cabin: 0.42, roof: 0.28, tail: 0.22, wing: 'duck' },
    stock: { engine: 'eng_f4_24', boreup: null, muffler: 'muf_stock', intercooler: null, turbo: null, tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'WRX-IMP': {
    id: 'WRX-IMP', name: 'WRX-IMP', ref: 'スバル インプレッサ WRX STI (GDB型 F型)',
    drive: 'AWD', awdFront: 0.41, mass: 1430, frontWeight: 0.6, cgHeight: 0.5,
    length: 4.465, width: 1.74, height: 1.425, wheelbase: 2.54, trackF: 1.485, trackR: 1.48,
    tireRadius: 0.317, cd: 0.33, area: 2.05, steerLock: 0.55,
    gears: [3.636, 2.375, 1.761, 1.346, 0.971, 0.756], reverse: 3.545, final: 3.9,
    brakeTorque: 4900, brakeBias: 0.66, rollFront: 0.56, inertiaK: 1.05,
    published: '280PS/6400rpm, 422N·m/4400rpm, 1430kg',
    body: { style: 'sedan', hood: 0.36, cabin: 0.46, roof: 0.3, tail: 0.2, wing: 'high', scoop: true },
    stock: { engine: 'eng_f4_20t', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_mid', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'RS-RS': {
    id: 'RS-RS', name: 'RS-RS', ref: 'マツダ ロードスター RS (ND5RC型 2018年〜)',
    drive: 'FR', mass: 1020, frontWeight: 0.5, cgHeight: 0.44,
    length: 3.915, width: 1.735, height: 1.235, wheelbase: 2.31, trackF: 1.495, trackR: 1.505,
    tireRadius: 0.308, cd: 0.35, area: 1.85, steerLock: 0.58,
    gears: [5.087, 2.991, 2.035, 1.594, 1.286, 1.0], reverse: 4.533, final: 2.866,
    brakeTorque: 3500, brakeBias: 0.62, rollFront: 0.54, inertiaK: 0.9,
    published: '132PS/7000rpm, 152N·m/4500rpm, 1020kg',
    body: { style: 'roadster', hood: 0.42, cabin: 0.3, roof: 0.0, tail: 0.26, wing: 'none' },
    stock: { engine: 'eng_s4_15', boreup: null, muffler: 'muf_stock', intercooler: null, turbo: null, tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'SWIFT-S': {
    id: 'SWIFT-S', name: 'SWIFT-S', ref: 'スズキ スイフトスポーツ (ZC33S型 6MT)',
    drive: 'FF', mass: 970, frontWeight: 0.62, cgHeight: 0.52,
    length: 3.89, width: 1.735, height: 1.5, wheelbase: 2.45, trackF: 1.51, trackR: 1.515,
    tireRadius: 0.304, cd: 0.33, area: 2.1, steerLock: 0.58,
    gears: [3.615, 2.047, 1.518, 1.156, 0.918, 0.794], reverse: 3.481, final: 3.944,
    brakeTorque: 3300, brakeBias: 0.7, rollFront: 0.6, inertiaK: 0.9,
    published: '140PS/5500rpm, 230N·m/2500-3500rpm, 970kg',
    body: { style: 'hatch', hood: 0.3, cabin: 0.55, roof: 0.42, tail: 0.1, wing: 'roof' },
    stock: { engine: 'eng_s4_14t', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_small', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  '80-Supra': {
    id: '80-Supra', name: '80-Supra', ref: 'トヨタ スープラ RZ (JZA80型 6MT)',
    drive: 'FR', mass: 1510, frontWeight: 0.53, cgHeight: 0.5,
    length: 4.52, width: 1.81, height: 1.275, wheelbase: 2.55, trackF: 1.52, trackR: 1.525,
    tireRadius: 0.318, cd: 0.31, area: 2.0, steerLock: 0.55,
    gears: [3.827, 2.36, 1.685, 1.312, 1.0, 0.793], reverse: 3.28, final: 3.266,
    brakeTorque: 5200, brakeBias: 0.64, rollFront: 0.55, inertiaK: 1.1,
    published: '280PS/5600rpm, 451N·m/3600rpm, 1510kg',
    body: { style: 'gt', hood: 0.42, cabin: 0.36, roof: 0.27, tail: 0.22, wing: 'loop' },
    stock: { engine: 'eng_s6_30', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_seq', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
};

export const CAR_IDS = Object.keys(CARS);

export const PLAYER = { name: '黒碕カケル', car: '86-GR', color: 0xd9dde3 };
