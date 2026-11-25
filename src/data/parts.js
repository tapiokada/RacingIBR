// チューニングパーツ カタログ（v0.1）
// 10カテゴリ。同機能のパーツは車種を問わず流用可能（エンジン載せ替え含む）。
// エンジンの torque はターボ等の過給なし状態(NA相当)のトルクカーブ [rpm, N·m]。
// 純正ターボ車は「純正装着ターボ × 純正インタークーラー」で公表値になるよう逆算している。

export const CATEGORIES = [
  { id: 'engine', name: 'エンジン', required: true },
  { id: 'boreup', name: 'ボアアップ', required: false },
  { id: 'muffler', name: 'マフラー', required: true },
  { id: 'intercooler', name: 'インタークーラー', required: false },
  { id: 'turbo', name: 'ターボ', required: false },
  { id: 'tire', name: 'タイヤ', required: true },
  { id: 'suspension', name: 'サスペンション', required: true },
  { id: 'brake', name: 'ブレーキ', required: true },
  { id: 'transmission', name: 'トランスミッション', required: true },
  { id: 'aero', name: 'エアロ', required: false },
  { id: 'wheel', name: 'ホイール', required: true },
  { id: 'tirewidth', name: 'タイヤ幅', required: true },
];

export const CATEGORY_NAME = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.name]));

const P = (o) => o;

export const PARTS = [
  // ---------------- エンジン ----------------
  P({
    id: 'eng_f4_24', cat: 'engine', name: 'F4型2400cc（水平対向）', rank: 2, price: null, weight: 0,
    desc: '86-GR純正。低重心の水平対向4気筒NA。235PS/7000rpm 250N·m/3700rpm',
    layout: '水平対向4気筒', displacement: 2387, cylinders: 4, idle: 800, redline: 7500, limiter: 7600, inertia: 0.16,
    torque: [[800, 150], [1500, 175], [2500, 212], [3000, 232], [3700, 250], [4500, 238], [5500, 240], [6500, 244], [7000, 236], [7500, 214], [7800, 190]],
  }),
  P({
    id: 'eng_f4_20t', cat: 'engine', name: 'F4T型2000cc（水平対向・過給前提）', rank: 3, price: null, weight: 8,
    desc: 'WRX-IMP（GRB型）純正。ツインスクロールターボ前提の水平対向4気筒。純正タービンで308PS/6400rpm・422N·m/4400rpm',
    layout: '水平対向4気筒', displacement: 1994, cylinders: 4, idle: 850, redline: 8000, limiter: 8100, inertia: 0.17,
    torque: [[800, 110], [1500, 140], [2000, 160], [3000, 195], [4000, 222], [4400, 228], [5000, 214], [5500, 200], [6000, 193], [6400, 193], [7000, 172], [8000, 138], [8300, 120]],
  }),
  P({
    id: 'eng_s4_15', cat: 'engine', name: 'S4型1500cc（直列）', rank: 1, price: null, weight: -15,
    desc: 'RS-RS純正。軽量な直列4気筒NA。132PS/7000rpm 152N·m/4500rpm',
    layout: '直列4気筒', displacement: 1496, cylinders: 4, idle: 750, redline: 7500, limiter: 7600, inertia: 0.11,
    torque: [[750, 100], [1500, 118], [2000, 128], [3000, 140], [4500, 152], [5500, 148], [6500, 140], [7000, 132], [7500, 118], [7800, 100]],
  }),
  P({
    id: 'eng_s4_14t', cat: 'engine', name: 'S4T型1400cc（直列・過給前提）', rank: 1, price: null, weight: -18,
    desc: 'SWIFT-S純正。小排気量直噴ターボ前提。純正タービンで140PS/230N·m',
    layout: '直列4気筒', displacement: 1371, cylinders: 4, idle: 750, redline: 6200, limiter: 6300, inertia: 0.10,
    torque: [[750, 85], [1500, 112], [2000, 128], [2500, 137], [3500, 137], [4500, 129], [5500, 118], [6200, 106], [6500, 95]],
  }),
  P({
    id: 'eng_s6_30', cat: 'engine', name: 'S6T型3000cc（直列6気筒）', rank: 4, price: null, weight: 45,
    desc: '80-Supra純正。頑丈な直列6気筒。純正シーケンシャルで280PS/451N·m',
    layout: '直列6気筒', displacement: 2997, cylinders: 6, idle: 700, redline: 6800, limiter: 6900, inertia: 0.24,
    torque: [[700, 150], [1500, 200], [2000, 220], [3000, 245], [3600, 250], [4500, 232], [5600, 194], [6500, 166], [7000, 148]],
  }),
  P({
    id: 'eng_v6_30', cat: 'engine', name: 'V6型3000cc（V型）', rank: 4, price: null, weight: 30,
    desc: '高回転型V6自然吸気。太いトルクと伸び。280PS/6800rpm 300N·m/4800rpm',
    layout: 'V型6気筒', displacement: 2987, cylinders: 6, idle: 750, redline: 7400, limiter: 7500, inertia: 0.21,
    torque: [[750, 180], [1500, 215], [2500, 260], [4000, 290], [4800, 300], [6000, 295], [6800, 289], [7400, 258], [7700, 225]],
  }),
  P({
    id: 'eng_r2_13', cat: 'engine', name: 'R2型1300cc（ロータリー）', rank: 5, price: null, weight: -25,
    desc: '超軽量・超高回転ロータリー。250PS/8500rpm 216N·m/5500rpm',
    layout: '2ローター', displacement: 1308, cylinders: 3, idle: 900, redline: 9000, limiter: 9200, inertia: 0.09,
    torque: [[900, 110], [2000, 140], [3000, 168], [4500, 205], [5500, 216], [7000, 212], [8500, 207], [9000, 192], [9400, 170]],
  }),

  P({
    id: 'eng_s4_22', cat: 'engine', name: 'S4V型2200cc（直列・高回転）', rank: 4, price: null, weight: -10,
    desc: 'S2K-AP純正。9000rpm近くまで回る高回転型NA。242PS/7800rpm 221N·m/6500-7500rpm',
    layout: '直列4気筒', displacement: 2156, cylinders: 4, idle: 800, redline: 8000, limiter: 8200, inertia: 0.11,
    torque: [[800, 140], [1500, 165], [3000, 190], [4500, 202], [5500, 205], [5900, 200], [6500, 221], [7500, 221], [7800, 218], [8200, 200], [8500, 170]],
  }),
  P({
    id: 'eng_s4_20t_evo', cat: 'engine', name: 'S4T型2000cc（直列・ツインスクロール過給前提）', rank: 4, price: null, weight: 5,
    desc: 'EVO-IX純正。低回転から太いトルクの直列4気筒ターボ前提。純正タービンで280PS/400N·m',
    layout: '直列4気筒', displacement: 1997, cylinders: 4, idle: 850, redline: 7000, limiter: 7200, inertia: 0.15,
    torque: [[800, 150], [1050, 179], [1300, 207], [1550, 236], [1800, 237], [2050, 220], [2300, 209], [2550, 217], [2800, 229], [3050, 238], [3550, 236], [4050, 235], [4550, 236], [5050, 236], [5550, 231], [6050, 225], [6550, 218], [7050, 206], [7300, 197]],
  }),
  P({
    id: 'eng_v6_30t', cat: 'engine', name: 'V6T型3000cc（V型・ツインターボ前提）', rank: 4, price: null, weight: 40,
    desc: 'Z-32純正。V型6気筒ツインターボ前提。純正タービンで280PS/388N·m',
    layout: 'V型6気筒', displacement: 2960, cylinders: 6, idle: 700, redline: 7000, limiter: 7100, inertia: 0.22,
    torque: [[700, 150], [950, 169], [1200, 188], [1450, 206], [1700, 230], [1950, 255], [2200, 278], [2450, 301], [2700, 323], [2950, 336], [3200, 310], [3450, 272], [3700, 237], [3950, 209], [4200, 195], [4700, 189], [5200, 182], [5700, 172], [6200, 160], [6700, 147], [7200, 133]],
  }),
  P({
    id: 'eng_s6_26t', cat: 'engine', name: 'S6T型2600cc（直列6気筒・ツインターボ前提）', rank: 5, price: null, weight: 50,
    desc: 'R34-GTR純正。チューニング耐性の高い直列6気筒ツインターボ前提。純正タービンで280PS/392N·m',
    layout: '直列6気筒', displacement: 2568, cylinders: 6, idle: 800, redline: 8000, limiter: 8100, inertia: 0.2,
    torque: [[800, 140], [1050, 154], [1300, 169], [1550, 184], [1800, 204], [2050, 225], [2300, 247], [2550, 270], [2800, 292], [3050, 293], [3300, 265], [3550, 236], [3800, 215], [4050, 203], [4300, 197], [4800, 192], [5300, 185], [5800, 171], [6300, 158], [6800, 148], [7300, 138], [7800, 126], [8100, 118]],
  }),

  // ---------------- ボアアップ ----------------
  P({ id: 'bore_1', cat: 'boreup', name: 'ボアアップキット Stage1', rank: 1, price: 120000, weight: 0, desc: '排気量+3%相当。全域トルク+4%', torqueMul: 1.04 }),
  P({ id: 'bore_2', cat: 'boreup', name: 'ボアアップキット Stage2', rank: 3, price: null, weight: 0, desc: '排気量+6%相当。全域トルク+8%', torqueMul: 1.08 }),
  P({ id: 'bore_3', cat: 'boreup', name: 'ボアアップキット Stage3', rank: 4, price: null, weight: 1, desc: '排気量+10%相当。全域トルク+12%、レブ-200rpm', torqueMul: 1.12, redlineDelta: -200 }),

  // ---------------- マフラー ----------------
  P({ id: 'muf_stock', cat: 'muffler', name: '純正マフラー', rank: 1, price: 10000, weight: 0, desc: '静かで低速トルク重視', low: 1.0, high: 1.0, loud: 0.0 }),
  P({ id: 'muf_sport', cat: 'muffler', name: 'スポーツマフラー', rank: 2, price: 80000, weight: -4, desc: '高回転トルク+4%', low: 1.01, high: 1.04, loud: 0.3 }),
  P({ id: 'muf_straight', cat: 'muffler', name: 'ストレートマフラー', rank: 3, price: null, weight: -7, desc: '低速-2% 高回転+7%。音量大', low: 0.98, high: 1.07, loud: 0.7 }),

  // ---------------- インタークーラー（過給機装着時のみ有効） ----------------
  P({ id: 'ic_stock', cat: 'intercooler', name: '純正インタークーラー', rank: 1, price: 30000, weight: 0, desc: '過給効率85%（未装着時70%）', eff: 0.85 }),
  P({ id: 'ic_large', cat: 'intercooler', name: '大容量インタークーラー', rank: 2, price: 140000, weight: 3, desc: '過給効率93%', eff: 0.93 }),
  P({ id: 'ic_front', cat: 'intercooler', name: '前置き大容量インタークーラー', rank: 4, price: null, weight: 6, desc: '過給効率100%', eff: 1.0 }),

  // ---------------- ターボ ----------------
  // boost: 最大過給圧[bar]、spool: 過給開始/最大rpm、fade: 高回転での低下(開始rpm,低下率/2000rpm)、lag: 応答時定数[s]
  P({ id: 'tb_small', cat: 'turbo', name: 'シングルタービン（小）', rank: 2, price: 220000, weight: 10, desc: 'レスポンス重視。低回転から過給', boost: 0.8, spool: [1500, 2500], fade: [4000, 0.35], lag: 0.25 }),
  P({ id: 'tb_mid', cat: 'turbo', name: 'シングルタービン（中）', rank: 3, price: null, weight: 12, desc: 'バランス型。中回転から力強く過給', boost: 1.0, spool: [2500, 4000], fade: [5500, 0.25], lag: 0.5 }),
  P({ id: 'tb_large', cat: 'turbo', name: 'シングルタービン（大）', rank: 4, price: null, weight: 15, desc: 'ドッカンターボ。高回転で爆発的パワー', boost: 1.4, spool: [3600, 5300], fade: [7000, 0.15], lag: 0.9 }),
  P({ id: 'tb_seq', cat: 'turbo', name: 'シーケンシャルツインターボ', rank: 4, price: null, weight: 20, desc: '2基を切替え。低回転から高回転まで途切れない', boost: 0.95, spool: [1800, 3200], fade: [5600, 0.15], lag: 0.3 }),
  P({ id: 'tb_twin', cat: 'turbo', name: 'パラレルツインターボ', rank: 4, price: null, weight: 18, desc: '高過給圧のツイン。中高回転型', boost: 1.15, spool: [2800, 4300], fade: [6500, 0.15], lag: 0.55 }),
  P({ id: 'tb_sc', cat: 'turbo', name: 'スーパーチャージャー', rank: 3, price: null, weight: 12, desc: '機械式過給。ラグ無しでリニア', boost: 0.6, spool: [1000, 3000], fade: [9000, 0], lag: 0.04 }),

  // ---------------- タイヤ ----------------
  P({ id: 'tire_comfort', cat: 'tire', name: 'コンフォートタイヤ', rank: 1, price: 40000, weight: 0, desc: 'グリップ0.95', mu: 0.95, peakAngle: 0.15, peakRatio: 0.12 }),
  P({ id: 'tire_street', cat: 'tire', name: 'ストリートスポーツタイヤ', rank: 1, price: 80000, weight: 0, desc: 'グリップ1.02（多くの車の純正）', mu: 1.02, peakAngle: 0.13, peakRatio: 0.11 }),
  P({ id: 'tire_high', cat: 'tire', name: 'ハイグリップタイヤ', rank: 2, price: 160000, weight: 0, desc: 'グリップ1.12', mu: 1.12, peakAngle: 0.115, peakRatio: 0.10 }),
  P({ id: 'tire_s', cat: 'tire', name: 'Sタイヤ（セミスリック）', rank: 4, price: null, weight: -2, desc: 'グリップ1.22。限界がシビア', mu: 1.22, peakAngle: 0.10, peakRatio: 0.09 }),

  // ---------------- サスペンション ----------------
  P({ id: 'sus_stock', cat: 'suspension', name: '純正サスペンション', rank: 1, price: 30000, weight: 0, desc: '乗り心地重視', grip: 1.0, cgDrop: 0, tau: 0.12, rollFront: 0 }),
  P({ id: 'sus_street', cat: 'suspension', name: 'ストリート車高調', rank: 2, price: 150000, weight: -2, desc: '車高-20mm。グリップ+3%、応答向上', grip: 1.015, cgDrop: 0.02, tau: 0.085, rollFront: -0.02 }),
  P({ id: 'sus_circuit', cat: 'suspension', name: 'サーキット車高調', rank: 4, price: null, weight: -3, desc: '車高-35mm。グリップ+6%、鋭い応答', grip: 1.03, cgDrop: 0.035, tau: 0.06, rollFront: -0.04 }),
  P({ id: 'sus_full', cat: 'suspension', name: 'フルカスタマイズ車高調', rank: 5, price: 680000, weight: -3, desc: '車高・固有振動数・スタビ・減衰・キャンバー・トーを自由に調整（ポーズメニューのセッティング）', grip: 1.03, cgDrop: 0.035, tau: 0.06, rollFront: -0.04, custom: true }),

  // ---------------- ブレーキ ----------------
  P({ id: 'brk_stock', cat: 'brake', name: '純正ブレーキ', rank: 1, price: 20000, weight: 0, desc: '制動力100%', torque: 1.0 }),
  P({ id: 'brk_pad', cat: 'brake', name: 'スポーツパッド', rank: 1, price: 50000, weight: 0, desc: '制動力112%', torque: 1.12 }),
  P({ id: 'brk_big', cat: 'brake', name: 'ビッグキャリパーキット', rank: 4, price: null, weight: 3, desc: '制動力128%', torque: 1.28 }),
  P({ id: 'brk_full', cat: 'brake', name: 'フルカスタマイズブレーキキット', rank: 5, price: 520000, weight: 3, desc: '制動力132%基準。ブレーキバランスとブレーキ力を調整可能', torque: 1.32, custom: true }),

  // ---------------- トランスミッション ----------------
  // 各車の純正ギア比を基準に補正する方式（流用可能にするため）
  P({ id: 'tm_stock', cat: 'transmission', name: '純正トランスミッション', rank: 1, price: 30000, weight: 0, desc: '車種純正ギア比', close: 1.0, final: 1.0, shift: 0.18 }),
  P({ id: 'tm_lowfinal', cat: 'transmission', name: 'ローファイナルギア', rank: 2, price: 90000, weight: 0, desc: 'ファイナル×1.12。加速重視', close: 1.0, final: 1.12, shift: 0.18 }),
  P({ id: 'tm_highgear', cat: 'transmission', name: 'ハイギアードファイナル', rank: 2, price: 90000, weight: 0, desc: 'ファイナル×0.90。最高速重視', close: 1.0, final: 0.9, shift: 0.18 }),
  P({ id: 'tm_close', cat: 'transmission', name: 'クロスミッション', rank: 4, price: null, weight: 2, desc: 'ギア間を詰め、シフトも速い', close: 0.78, final: 1.05, shift: 0.11 }),
  P({ id: 'tm_full', cat: 'transmission', name: 'フルカスタマイズミッション', rank: 5, price: 750000, weight: 2, desc: '全ギア比・ファイナル・LSD（イニシャル/加速/減速）を調整可能。シフトも最速', close: 1.0, final: 1.0, shift: 0.09, custom: true }),

  // ---------------- エアロ ----------------
  P({ id: 'aero_lip', cat: 'aero', name: 'フロントリップスポイラー', rank: 1, price: 60000, weight: 2, desc: 'フロントダウンフォース小', clF: 0.10, clR: 0.0, cd: 0.005 }),
  P({ id: 'aero_wing', cat: 'aero', name: 'GTウイング', rank: 3, price: null, weight: 5, desc: 'リアダウンフォース大。空気抵抗増。ダウンフォース調整可', clF: 0.0, clR: 0.38, cd: 0.03, adjustable: true }),
  P({ id: 'aero_full', cat: 'aero', name: 'フルエアロキット', rank: 4, price: null, weight: 8, desc: '前後バランスの取れたダウンフォース。前後とも調整可', clF: 0.2, clR: 0.34, cd: 0.02, adjustable: true }),

  // ---------------- ホイール（純正サイズ基準。外径は変えずに扁平率で合わせる） ----------------
  // inch: 純正からのリム径差、wmass: 1輪あたりの重量差[kg]（ホイール＋タイヤ）、inertia: 回転慣性の倍率
  P({ id: 'wh_stock', cat: 'wheel', name: '純正ホイール', rank: 1, price: null, weight: 0, free: true, desc: '純正サイズ', inch: 0, wmass: 0, inertia: 1.0 }),
  P({ id: 'wh_forged', cat: 'wheel', name: '軽量鍛造ホイール（純正サイズ）', rank: 2, price: 160000, weight: 0, desc: '1輪−2.0kg、回転慣性−18%。加速・減速・ハンドリングが軽くなる', inch: 0, wmass: -2.0, inertia: 0.82 }),
  P({ id: 'wh_plus1', cat: 'wheel', name: 'インチアップ +1インチ', rank: 2, price: 120000, weight: 0, desc: '扁平タイヤで横剛性↑・グリップ+1.5%、応答が鋭くなる。1輪+1.6kg、回転慣性+12%', inch: 1, wmass: 1.6, inertia: 1.12 }),
  P({ id: 'wh_plus2', cat: 'wheel', name: 'インチアップ +2インチ', rank: 3, price: 200000, weight: 0, desc: 'さらに扁平。グリップ+2.5%、応答最速。1輪+3.4kg、回転慣性+26%', inch: 2, wmass: 3.4, inertia: 1.26 }),
  P({ id: 'wh_plus1_forged', cat: 'wheel', name: '鍛造ホイール +1インチ', rank: 4, price: null, weight: 0, desc: '+1インチの性能で重量増なし（1輪−0.3kg、回転慣性−2%）', inch: 1, wmass: -0.3, inertia: 0.98 }),

  // ---------------- タイヤ幅（純正幅からの増分。ホイールのリム幅も合わせる） ----------------
  P({ id: 'tw_stock', cat: 'tirewidth', name: '純正幅', rank: 1, price: null, weight: 0, free: true, desc: '純正サイズ', dw: 0 }),
  P({ id: 'tw_10', cat: 'tirewidth', name: 'タイヤ幅 +10mm', rank: 1, price: 60000, weight: 0, desc: '接地面積↑でグリップ微増。1輪+0.6kg、転がり抵抗・空気抵抗わずかに増', dw: 10 }),
  P({ id: 'tw_20', cat: 'tirewidth', name: 'タイヤ幅 +20mm', rank: 2, price: 90000, weight: 0, desc: 'グリップ↑。1輪+1.2kg、転がり抵抗・空気抵抗増', dw: 20 }),
  P({ id: 'tw_30', cat: 'tirewidth', name: 'タイヤ幅 +30mm', rank: 3, price: 130000, weight: 0, desc: 'グリップ大きく↑（フェンダーぎりぎり）。1輪+1.9kg、抵抗増', dw: 30 }),
];

// 価格は実勢の中古車価格に合わせて2倍に
for (const p of PARTS) if (p.price) p.price *= 2;

export const PART_BY_ID = Object.fromEntries(PARTS.map((p) => [p.id, p]));

export function partsInCategory(cat) {
  return PARTS.filter((p) => p.cat === cat);
}

export const RANK_STARS = (r) => '★'.repeat(r) + '☆'.repeat(5 - r);
