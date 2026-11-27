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
    id: 'WRX-IMP', name: 'WRX-IMP', ref: 'スバル インプレッサ WRX STI (GRB型 6MT)',
    drive: 'AWD', awdFront: 0.41, mass: 1480, frontWeight: 0.6, cgHeight: 0.52,
    length: 4.415, width: 1.795, height: 1.475, wheelbase: 2.625, trackF: 1.53, trackR: 1.54,
    tireRadius: 0.327, cd: 0.35, area: 2.15, steerLock: 0.55,
    gears: [3.636, 2.375, 1.761, 1.346, 0.971, 0.756], reverse: 3.545, final: 3.9,
    brakeTorque: 5300, brakeBias: 0.65, rollFront: 0.56, inertiaK: 1.1,
    published: '308PS/6400rpm, 422N·m/4400rpm, 1480kg',
    body: { style: 'hatch', hood: 0.34, cabin: 0.5, roof: 0.36, tail: 0.12, wing: 'roof', scoop: true },
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
  // ===== 東池袋で登場する車種 =====
  'BRZ-ZD': {
    id: 'BRZ-ZD', name: 'BRZ-ZD', ref: 'スバル BRZ S (ZD8型 6MT)',
    drive: 'FR', mass: 1270, frontWeight: 0.535, cgHeight: 0.46,
    length: 4.265, width: 1.775, height: 1.31, wheelbase: 2.575, trackF: 1.52, trackR: 1.55,
    tireRadius: 0.315, cd: 0.33, area: 1.95, steerLock: 0.56,
    gears: [3.626, 2.188, 1.541, 1.213, 1.0, 0.767], reverse: 3.437, final: 4.1,
    brakeTorque: 4200, brakeBias: 0.64, rollFront: 0.57, inertiaK: 1.0,
    published: '235PS/7000rpm, 250N·m/3700rpm, 1270kg',
    body: { style: 'coupe', hood: 0.37, cabin: 0.42, roof: 0.28, tail: 0.22, wing: 'duck' },
    stock: { engine: 'eng_f4_24', boreup: null, muffler: 'muf_stock', intercooler: null, turbo: null, tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'S2K-AP': {
    id: 'S2K-AP', name: 'S2K-AP', ref: 'ホンダ S2000 (AP2型)',
    drive: 'FR', mass: 1250, frontWeight: 0.5, cgHeight: 0.44,
    length: 4.135, width: 1.75, height: 1.285, wheelbase: 2.4, trackF: 1.47, trackR: 1.51,
    tireRadius: 0.314, cd: 0.34, area: 1.85, steerLock: 0.56,
    gears: [3.133, 2.045, 1.481, 1.161, 0.97, 0.81], reverse: 2.8, final: 4.1,
    brakeTorque: 3900, brakeBias: 0.62, rollFront: 0.55, inertiaK: 0.95,
    published: '242PS/7800rpm, 221N·m/6500-7500rpm, 1250kg',
    body: { style: 'roadster', hood: 0.44, cabin: 0.3, roof: 0.0, tail: 0.24, wing: 'none' },
    stock: { engine: 'eng_s4_22', boreup: null, muffler: 'muf_stock', intercooler: null, turbo: null, tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'EVO-IX': {
    id: 'EVO-IX', name: 'EVO-IX', ref: 'ミツビシ ランサーエボリューションIX GSR (CT9A型 6MT)',
    drive: 'AWD', awdFront: 0.5, mass: 1400, frontWeight: 0.6, cgHeight: 0.52,
    length: 4.49, width: 1.77, height: 1.45, wheelbase: 2.625, trackF: 1.515, trackR: 1.515,
    tireRadius: 0.322, cd: 0.34, area: 2.1, steerLock: 0.55,
    gears: [2.909, 1.944, 1.434, 1.1, 0.868, 0.693], reverse: 3.25, final: 4.583,
    brakeTorque: 5000, brakeBias: 0.66, rollFront: 0.56, inertiaK: 1.05,
    published: '280PS/6500rpm, 400N·m/3000rpm, 1400kg',
    body: { style: 'sedan', hood: 0.34, cabin: 0.47, roof: 0.3, tail: 0.2, wing: 'high', scoop: true },
    stock: { engine: 'eng_s4_20t_evo', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_small', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'Z-32': {
    id: 'Z-32', name: 'Z-32', ref: 'ニッサン フェアレディZ 300ZX ツインターボ (Z32型 5MT)',
    drive: 'FR', mass: 1510, frontWeight: 0.55, cgHeight: 0.48,
    length: 4.31, width: 1.79, height: 1.25, wheelbase: 2.45, trackF: 1.495, trackR: 1.535,
    tireRadius: 0.316, cd: 0.31, area: 1.95, steerLock: 0.55,
    gears: [3.321, 1.902, 1.308, 1.0, 0.759], reverse: 3.382, final: 3.692,
    brakeTorque: 5100, brakeBias: 0.63, rollFront: 0.55, inertiaK: 1.1,
    published: '280PS/6400rpm, 388N·m/3600rpm, 1510kg',
    body: { style: 'gt', hood: 0.4, cabin: 0.36, roof: 0.24, tail: 0.24, wing: 'duck' },
    stock: { engine: 'eng_v6_30t', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_twin', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'R34-GTR': {
    id: 'R34-GTR', name: 'R34-GTR', ref: 'ニッサン スカイラインGT-R Vスペック (BNR34型 6MT)',
    drive: 'AWD', awdFront: 0.35, mass: 1560, frontWeight: 0.57, cgHeight: 0.5,
    length: 4.6, width: 1.785, height: 1.36, wheelbase: 2.665, trackF: 1.48, trackR: 1.49,
    tireRadius: 0.327, cd: 0.33, area: 2.15, steerLock: 0.55,
    gears: [3.827, 2.36, 1.685, 1.312, 1.0, 0.793], reverse: 3.28, final: 3.545,
    brakeTorque: 5600, brakeBias: 0.62, rollFront: 0.55, inertiaK: 1.12,
    published: '280PS/6800rpm, 392N·m/4400rpm, 1560kg',
    body: { style: 'sedan', hood: 0.38, cabin: 0.4, roof: 0.28, tail: 0.22, wing: 'high' },
    stock: { engine: 'eng_s6_26t', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_twin', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'RX7-FD': {
    id: 'RX7-FD', name: 'RX7-FD', ref: 'マツダ RX-7 タイプRS (FD3S型 6型 5MT)',
    drive: 'FR', mass: 1280, frontWeight: 0.5, cgHeight: 0.46,
    length: 4.285, width: 1.76, height: 1.23, wheelbase: 2.425, trackF: 1.46, trackR: 1.46,
    tireRadius: 0.312, cd: 0.31, area: 1.85, steerLock: 0.57,
    gears: [3.483, 2.015, 1.391, 1.0, 0.762], reverse: 3.288, final: 4.3,
    brakeTorque: 4900, brakeBias: 0.63, rollFront: 0.54, inertiaK: 0.95,
    published: '280PS/6500rpm, 314N·m/5000rpm, 1280kg',
    body: { style: 'gt', hood: 0.44, cabin: 0.34, roof: 0.24, tail: 0.24, wing: 'loop' },
    stock: { engine: 'eng_r2_13t', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_seq', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'RX7-FC': {
    id: 'RX7-FC', name: 'RX7-FC', ref: 'マツダ サバンナRX-7 GT-X (FC3S型 後期 5MT)',
    drive: 'FR', mass: 1280, frontWeight: 0.51, cgHeight: 0.48,
    length: 4.335, width: 1.69, height: 1.27, wheelbase: 2.43, trackF: 1.45, trackR: 1.44,
    tireRadius: 0.309, cd: 0.31, area: 1.8, steerLock: 0.57,
    gears: [3.475, 2.002, 1.366, 1.0, 0.758], reverse: 3.493, final: 4.1,
    brakeTorque: 4100, brakeBias: 0.64, rollFront: 0.55, inertiaK: 0.95,
    published: '205PS/6500rpm, 270N·m/3500rpm, 1280kg',
    body: { style: 'coupe', hood: 0.44, cabin: 0.38, roof: 0.27, tail: 0.2, wing: 'duck' },
    stock: { engine: 'eng_r2_13t_fc', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_mid', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'NSX-NA1': {
    id: 'NSX-NA1', name: 'NSX-NA1', ref: 'ホンダ NSX (NA1型 前期 5MT・ミッドシップ)', driveName: 'MR',
    drive: 'FR', mass: 1350, frontWeight: 0.42, cgHeight: 0.44,
    length: 4.43, width: 1.81, height: 1.17, wheelbase: 2.53, trackF: 1.51, trackR: 1.53,
    tireRadius: 0.31, cd: 0.32, area: 1.85, steerLock: 0.55,
    gears: [3.071, 1.952, 1.4, 1.033, 0.771], reverse: 3.0, final: 4.062,
    brakeTorque: 4800, brakeBias: 0.58, rollFront: 0.53, inertiaK: 0.9,
    published: '280PS/7300rpm, 294N·m/5400rpm, 1350kg',
    body: { style: 'gt', hood: 0.3, cabin: 0.34, roof: 0.22, tail: 0.34, wing: 'duck' },
    stock: { engine: 'eng_v6_30_nsx', boreup: null, muffler: 'muf_stock', intercooler: null, turbo: null, tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'NSX-NA2': {
    id: 'NSX-NA2', name: 'NSX-NA2', ref: 'ホンダ NSX (NA2型 後期 6MT・ミッドシップ)', driveName: 'MR',
    drive: 'FR', mass: 1370, frontWeight: 0.42, cgHeight: 0.44,
    length: 4.43, width: 1.81, height: 1.16, wheelbase: 2.53, trackF: 1.505, trackR: 1.535,
    tireRadius: 0.312, cd: 0.32, area: 1.85, steerLock: 0.55,
    gears: [3.066, 2.05, 1.525, 1.173, 0.939, 0.733], reverse: 3.0, final: 4.235,
    brakeTorque: 5100, brakeBias: 0.58, rollFront: 0.53, inertiaK: 0.9,
    published: '280PS/7300rpm, 304N·m/5300rpm, 1370kg',
    body: { style: 'gt', hood: 0.3, cabin: 0.34, roof: 0.22, tail: 0.34, wing: 'duck' },
    stock: { engine: 'eng_v6_32_nsx', boreup: null, muffler: 'muf_stock', intercooler: null, turbo: null, tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'R32-GTR': {
    id: 'R32-GTR', name: 'R32-GTR', ref: 'ニッサン スカイラインGT-R (BNR32型 5MT)',
    drive: 'AWD', awdFront: 0.35, mass: 1430, frontWeight: 0.59, cgHeight: 0.5,
    length: 4.545, width: 1.755, height: 1.34, wheelbase: 2.615, trackF: 1.48, trackR: 1.48,
    tireRadius: 0.312, cd: 0.4, area: 2.05, steerLock: 0.55,
    gears: [3.214, 1.925, 1.302, 1.0, 0.752], reverse: 3.369, final: 4.111,
    brakeTorque: 5100, brakeBias: 0.63, rollFront: 0.56, inertiaK: 1.08,
    published: '280PS/6800rpm, 353N·m/4400rpm, 1430kg',
    body: { style: 'sedan', hood: 0.38, cabin: 0.42, roof: 0.3, tail: 0.2, wing: 'duck' },
    stock: { engine: 'eng_s6_26t_32', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_twin', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
  'R33-GTR': {
    id: 'R33-GTR', name: 'R33-GTR', ref: 'ニッサン スカイラインGT-R Vスペック (BCNR33型 5MT)',
    drive: 'AWD', awdFront: 0.35, mass: 1540, frontWeight: 0.58, cgHeight: 0.5,
    length: 4.675, width: 1.78, height: 1.36, wheelbase: 2.72, trackF: 1.48, trackR: 1.49,
    tireRadius: 0.322, cd: 0.35, area: 2.12, steerLock: 0.55,
    gears: [3.214, 1.925, 1.302, 1.0, 0.752], reverse: 3.369, final: 4.111,
    brakeTorque: 5500, brakeBias: 0.62, rollFront: 0.55, inertiaK: 1.12,
    published: '280PS/6800rpm, 368N·m/4400rpm, 1540kg',
    body: { style: 'sedan', hood: 0.4, cabin: 0.4, roof: 0.29, tail: 0.22, wing: 'high' },
    stock: { engine: 'eng_s6_26t_33', boreup: null, muffler: 'muf_stock', intercooler: 'ic_stock', turbo: 'tb_twin', tire: 'tire_street', suspension: 'sus_stock', brake: 'brk_stock', transmission: 'tm_stock', aero: null },
  },
};

// ---- シャシー・ボディの物理データ（推定値） ----
// liftF/liftR: ボディの揚力係数（前面投影面積基準・＋が揚力）。ウイングやエアロパーツのダウンフォースはこれに加算される
// yawK: ヨー慣性の動的指数（Iz = m·a·b·yawK。エンジンが前に寄るほど大きい）
// rideH: 純正車高[mm]（最低地上高ではなくサスペンション基準）
// center: AWDのセンターデフ（split: 前輪への基本配分、pre/acc: 差動制限、visc: 回転差に比例する伝達[N·m/(rad/s)]、capK: 伝達上限＝入力トルク×capK）
const CHASSIS = {
  '86-GR': { liftF: 0.04, liftR: 0.08, yawK: 0.95, rideH: 130 },
  'BRZ-ZD': { liftF: 0.04, liftR: 0.07, yawK: 0.95, rideH: 130 },
  'RS-RS': { liftF: 0.07, liftR: 0.12, yawK: 0.88, rideH: 125 },
  'S2K-AP': { liftF: 0.06, liftR: 0.1, yawK: 0.88, rideH: 125 },
  'SWIFT-S': { liftF: 0.06, liftR: 0.11, yawK: 0.92, rideH: 150 },
  '80-Supra': { liftF: 0.05, liftR: 0.01, yawK: 1.0, rideH: 130 },
  'Z-32': { liftF: 0.05, liftR: 0.07, yawK: 0.98, rideH: 130 },
  'WRX-IMP': { liftF: 0.08, liftR: 0.06, yawK: 0.98, rideH: 150, center: { split: 0.41, pre: 120, acc: 0.45, visc: 0, capK: 0 } },
  'EVO-IX': { liftF: 0.06, liftR: 0.02, yawK: 0.98, rideH: 145, center: { split: 0.5, pre: 80, acc: 0.6, visc: 0, capK: 0 } },
  // ATTESA E-TS：基本はFR、後輪が空転すると多板クラッチで前輪へ最大約50%まで伝える
  'R34-GTR': { liftF: 0.02, liftR: 0.0, yawK: 1.02, rideH: 135, center: { split: 0.0, pre: 0, acc: 0, visc: 1200, capK: 0.5 } },
  'RX7-FD': { liftF: 0.05, liftR: 0.05, yawK: 0.9, rideH: 125 }, // フロントミッドシップのロータリーで慣性が小さい
  'RX7-FC': { liftF: 0.06, liftR: 0.08, yawK: 0.92, rideH: 130 },
  'NSX-NA1': { liftF: 0.04, liftR: 0.06, yawK: 0.86, rideH: 125 }, // ミッドシップ：重量が中央に集まりヨー慣性が小さい
  'NSX-NA2': { liftF: 0.03, liftR: 0.05, yawK: 0.86, rideH: 125 },
  'R32-GTR': { liftF: 0.05, liftR: 0.04, yawK: 1.02, rideH: 140, center: { split: 0.0, pre: 0, acc: 0, visc: 1100, capK: 0.5 } },
  'R33-GTR': { liftF: 0.03, liftR: 0.02, yawK: 1.04, rideH: 135, center: { split: 0.0, pre: 0, acc: 0, visc: 1200, capK: 0.5 } },
};
for (const [id, c] of Object.entries(CHASSIS)) Object.assign(CARS[id], c);

// 純正タイヤサイズ（公表値。前後異径は平均）：幅[mm]・リム径[inch]
const TIRES = { '86-GR': [215, 18], 'BRZ-ZD': [215, 18], 'RS-RS': [205, 17], 'SWIFT-S': [195, 17], '80-Supra': [245, 17], 'S2K-AP': [230, 17], 'WRX-IMP': [245, 18], 'EVO-IX': [235, 17], 'Z-32': [235, 16], 'R34-GTR': [245, 18], 'RX7-FD': [245, 17], 'RX7-FC': [205, 15], 'NSX-NA1': [215, 16], 'NSX-NA2': [235, 17], 'R32-GTR': [225, 16], 'R33-GTR': [245, 17] };
for (const [id, [w, r]] of Object.entries(TIRES)) { CARS[id].tireW = w; CARS[id].rimIn = r; CARS[id].stock.wheel = 'wh_stock'; CARS[id].stock.tirewidth = 'tw_stock'; }

// 燃料タンク容量[L]（公表値）。いずれもハイオク指定
const TANKS = { '86-GR': 50, 'BRZ-ZD': 50, 'RS-RS': 40, 'S2K-AP': 50, 'SWIFT-S': 37, '80-Supra': 70, 'Z-32': 72, 'WRX-IMP': 60, 'EVO-IX': 55, 'R34-GTR': 65, 'RX7-FD': 76, 'RX7-FC': 70, 'NSX-NA1': 70, 'NSX-NA2': 70, 'R32-GTR': 72, 'R33-GTR': 65 };
for (const [id, t] of Object.entries(TANKS)) CARS[id].tank = t;
export const FUEL_PRICE = 185; // ハイオク 円/L

export const CAR_IDS = Object.keys(CARS);

export const CAR_COLORS = {
  '86-GR': 0xd9dde3, 'BRZ-ZD': 0x1e4fa8, 'RS-RS': 0xb3121b, 'S2K-AP': 0xe8e4d8, 'SWIFT-S': 0xf2c40f,
  '80-Supra': 0xd8d8d8, 'Z-32': 0x9a1b1f, 'WRX-IMP': 0x1d3f9a, 'EVO-IX': 0xeaeaea, 'R34-GTR': 0x3a4f9e,
  'RX7-FD': 0xd8c000, 'RX7-FC': 0xeaeaea, 'NSX-NA1': 0xc8102e, 'NSX-NA2': 0xe8e4d8, 'R32-GTR': 0x2b2d33, 'R33-GTR': 0x4a3f7a,
};

export const PLAYER = { name: '黒碕カケル', car: '86-GR', color: 0xd9dde3 };
