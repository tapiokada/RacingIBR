import HARUNA_DATA from './haruna.js';
// 西池袋ミニチュアマップ
// 添付のGoogleマップ画像（経由地座標・画面上の経路）から主要道路の折れ点を緯度経度で起こしたもの。
// MAP_SCALE倍に縮小した「ミニチュア版」の街として扱う（道幅・車両は実寸）。

export const MAP_SCALE = 0.7;
const LAT0 = 35.734, LON0 = 139.704;
const M_LAT = 110950, M_LON = 90360; // 緯度35.73°付近の1度あたりメートル

// x: 東(+) / z: 南(+)
export function geo(lat, lon) {
  return { x: (lon - LON0) * M_LON * MAP_SCALE, z: (LAT0 - lat) * M_LAT * MAP_SCALE };
}

const N = {
  // 山手通り
  Y0: [35.72805, 139.69688], Y_RK: [35.73065, 139.6983], Y_KN: [35.733132, 139.699497],
  Y2: [35.73521, 139.7006], Y3: [35.73938, 139.70538], KUMANO: [35.74139, 139.70675],
  // 川越街道
  K1: [35.74012, 139.70841], AXIA: [35.7386, 139.71061], K3: [35.73843, 139.71165], K4: [35.7381, 139.7126],
  // 劇場通り
  G1: [35.73714, 139.70997], G2: [35.73446, 139.70942], G3: [35.73215, 139.7088],
  BUKURO: [35.73162, 139.70846], GOSA: [35.73125, 139.70826], W_SW: [35.73082, 139.70804], G5: [35.72835, 139.70666],
  // 都道441号
  R441_1: [35.72924, 139.70354], R441_2: [35.72865, 139.70042], S441: [35.72776, 139.70826], EDIT: [35.72744, 139.70931],
  // 立教通り
  R1: [35.73037, 139.69903], R2: [35.73043, 139.70004], R3: [35.73074, 139.70236], R4: [35.73112, 139.70507],
  TIPTOP: [35.73116, 139.70546], RK_E: [35.73175, 139.70713],
  // 要町通り
  QB: [35.73186, 139.70663], Q1: [35.73212, 139.70584], Q2: [35.73253, 139.70499], NIKKEN: [35.73284, 139.7039],
  Q3: [35.73291, 139.70329], Q4: [35.73288, 139.70081], YUBIN: [35.73305, 139.69987],
  // 西口（池袋WGP）
  EPOS: [35.73066, 139.70882], W_S2: [35.73065, 139.70935], W_A: [35.73092, 139.70969], W_B: [35.73151, 139.71002],
  W_C: [35.73126, 139.71028], HOSEI: [35.73121, 139.71084], W_E1: [35.73155, 139.71112], W_E2: [35.73163, 139.71096],
  KUREYON: [35.73268, 139.71085], W_N: [35.73262, 139.70952], MIYAKE: [35.73161, 139.70947], W_S1: [35.73068, 139.7084],
  // 東側（北池袋方面）
  E_EN: [35.7362, 139.7116], E1: [35.73407, 139.71155], S_MID: [35.73007, 139.70935],
  // --- 街のみ（コースには使わない） ---
  // 都道441号の曲がりを細かく（添付画像のトレース）
  T441_A: [35.72912, 139.70501], T441_B: [35.72902, 139.70198], T441_C: [35.72827, 139.69858],
  // 池袋駅西口ロータリー
  // 八角形（角を落としたロータリー。車が回れる半径を確保）
  RT_W: [35.73007, 139.70975], RT_A0: [35.73024, 139.70975], RT_A1: [35.7304, 139.70994], RT_B0: [35.7304, 139.71016], RT_B1: [35.73024, 139.71035],
  RT_C0: [35.72981, 139.71035], RT_C1: [35.72965, 139.71016], RT_D0: [35.72965, 139.70994], RT_D1: [35.72981, 139.70975],
  // 西一番街（路地。西口通りの途中に接続）
  NI_S: [35.73124, 139.71054], NI_N: [35.73267, 139.71054],
  // 施設（実際の位置に合わせて道路から引き込み）
  DQ_E: [35.74036, 139.7081], DQ_P: [35.74074, 139.7081], // ドン・キホーテ北池袋店（川越街道の北側）
  GS_E: [35.73775, 139.71163], GS_P: [35.73775, 139.71207], // ENEOSセルフ池袋SS（川越街道と文化通りの角）
  // 東池袋エリアへの出口
  K5: [35.73797, 139.71305], EDIT_OUT: [35.72731, 139.70975],

  // ===== 東池袋エリア =====（添付の「東池袋エリア」「東池袋ロングコース」画像からトレース）
  // 春日通り（国道254号）。GATE_K は池袋大橋の東側
  GATE_K: [35.73395, 139.7142], GK_OUT: [35.73395, 139.7136], V0: [35.73397, 139.716], J1: [35.73346, 139.71686],
  KG1: [35.73244, 139.71893], EG_E: [35.73079, 139.72176], KG2: [35.72913, 139.72459], J2: [35.72568, 139.73025],
  // 大塚の南北の道
  SN1: [35.72392, 139.73101], ES_E: [35.72277, 139.73137], J3: [35.72162, 139.73173],
  // 不忍通り（護国寺方面）
  SB1: [35.721, 139.72938], SB2: [35.72056, 139.7272], J4: [35.71959, 139.72503],
  // 首都高5号の下の道（都道435号）
  T435_1: [35.72021, 139.72394], HELLO: [35.72201, 139.72313], T435_2: [35.72392, 139.72252],
  J5: [35.72602, 139.71908], J6: [35.72736, 139.71686], S60E: [35.73037, 139.71682], N1: [35.73129, 139.7168],
  // 明治通り（池袋駅東口）
  MJ_OUT: [35.726, 139.7124], MJ_S: [35.72653, 139.7123], MJ_1: [35.7286, 139.71186], GR0: [35.7296, 139.71222],
  MJ_2: [35.73036, 139.71258], MJ_3: [35.73153, 139.71252], MJ_4: [35.7329, 139.71339],
  // サンシャイン60通り
  // サンシャイン60通り（東口→ENEへ折れて首都高下の道を越え、サンシャインシティ西側へ）
  S60P2: [35.73009, 139.7141], S60P3: [35.72999, 139.71472], S60M: [35.72987, 139.71538], S60B: [35.73013, 139.71624],
  // 東口ストリートコース（添付画像：東池袋1丁目の路地）
  MJX: [35.73163, 139.71325], CK0: [35.73203, 139.7141], CK1: [35.73175, 139.71421],
  CK4: [35.73167, 139.71474], CK5: [35.73236, 139.7161], CK6: [35.7307, 139.71612], CK7: [35.73069, 139.71535],
  // サンシャインシティ外周（添付画像：東池袋駅〜コミティア〜東池袋4丁目）
  GB1: [35.7265, 139.7183], SC_O: [35.72769, 139.71842], SC_P: [35.72794, 139.71865], SC_A: [35.72837, 139.71899],
  SC_B: [35.7293, 139.71722], SC_C: [35.72982, 139.71766], SC_W: [35.7304, 139.71762], SC_D: [35.73051, 139.71761],
  SC_E: [35.7307, 139.7183], SC_F: [35.73007, 139.7195], SC_G: [35.72963, 139.72032], SC_H: [35.73048, 139.72104],
  SC_I: [35.73095, 139.72148], SC_K: [35.73022, 139.72274], SC_L: [35.72801, 139.72075], // SC_I・SC_K は春日通り上
  SC_M: [35.72726, 139.72013],
  // 都電沿いの道（南池袋）
  MS1: [35.7255, 139.71382], HOSHINO: [35.72461, 139.71535], MS2: [35.7243, 139.71812], MS3: [35.72361, 139.72139],
  // 東池袋の施設
  EG_P: [35.73109, 139.72202], ES_P: [35.72277, 139.73184],
};

// 西口のランドマーク配置（緯度経度の矩形 [南, 西, 北, 東]）
export const LANDMARKS = {
  dept: [35.7283, 139.7106, 35.7307, 139.7121], // 東部デパート（池袋駅西口）
  park: [35.7295, 139.7085, 35.7304, 139.7092], // 西口公園
  theatre: [35.7288, 139.7076, 35.72975, 139.7084], // 池袋芸術劇場
  plaza: [35.7290, 139.70845, 35.73055, 139.7106], // 西口駅前の開けた空間（ビルを建てない）
  // --- 東池袋 ---
  seibu: [35.7283, 139.7106, 35.7306, 139.7115], // 西部デパート（池袋駅東口の駅ビル・架空名）
  parco: [35.7307, 139.7106, 35.7316, 139.7115], // パルクス（東口北側の商業ビル・架空名）
  // サンライズシティ（サンシャインシティ風・架空名）は外周道路の内側に配置（eastSide.js）
  eplaza: [35.72975, 139.7115, 35.73045, 139.7121], // 東口駅前（ビルを建てない）
};

export const NODES = Object.fromEntries(Object.entries(N).map(([k, [la, lo]]) => [k, geo(la, lo)]));

// レースコース用の道路幅（v0.1から変更しない。コース形状はこの値とノード列で決まる）
const RACE_ROADS = [
  { name: '山手通り', width: 16, nodes: ['Y0', 'Y_RK', 'Y_KN', 'Y2', 'Y3', 'KUMANO'] },
  { name: '川越街道', width: 14, nodes: ['KUMANO', 'K1', 'AXIA', 'K3', 'K4'] },
  { name: '劇場通り', width: 12, nodes: ['AXIA', 'G1', 'G2', 'G3', 'BUKURO', 'GOSA', 'W_SW', 'G5'] },
  { name: '都道441号', width: 12, nodes: ['Y0', 'R441_2', 'R441_1', 'G5', 'S441', 'EDIT'] },
  { name: '立教通り', width: 9, nodes: ['Y_RK', 'R1', 'R2', 'R3', 'R4', 'TIPTOP', 'RK_E', 'GOSA'] },
  { name: '要町通り', width: 11, nodes: ['Y_KN', 'YUBIN', 'Q4', 'Q3', 'NIKKEN', 'Q2', 'Q1', 'QB', 'RK_E'] },
  { name: '西口通り', width: 9, nodes: ['EPOS', 'W_S2', 'W_A', 'W_B', 'W_C', 'HOSEI', 'W_E1', 'W_E2', 'KUREYON', 'W_N', 'MIYAKE', 'BUKURO'] },
  { name: '西口公園通り', width: 9, nodes: ['W_SW', 'W_S1', 'EPOS'] },
  { name: '文化通り', width: 10, nodes: ['K3', 'E_EN', 'E1', 'KUREYON'] },
  { name: '南口通り', width: 10, nodes: ['W_S2', 'S_MID', 'EDIT'] },
];

// 街（Story／FREE RUN タウン）の道路。車線構成は実際の道路を参考にした推定値。
// lanes: 片側車線数（0=中央線なしの一方通行・路地）/ laneW: 車線幅 / median: 中央分離帯幅
// shoulder: 路肩幅 / smooth: 折れ点をなめらかな曲線にする / ai: 街流しAIが走るか
export const WEST_ROADS = [
  { name: '山手通り', lanes: 2, laneW: 3.25, median: 2.0, shoulder: 0.5, nodes: ['Y0', 'Y_RK', 'Y_KN', 'Y2', 'Y3', 'KUMANO'] },
  { name: '川越街道', lanes: 2, laneW: 3.25, median: 3.0, shoulder: 0.5, highway: true, nodes: ['KUMANO', 'K1', 'AXIA', 'K3', 'K4'] },
  { name: '劇場通り', lanes: 2, laneW: 3.0, median: 0, shoulder: 0.5, smooth: true, nodes: ['AXIA', 'G1', 'G2', 'G3', 'BUKURO', 'GOSA', 'W_SW', 'G5'] },
  { name: '都道441号', lanes: 1, laneW: 3.25, median: 0, shoulder: 2.75, smooth: true, nodes: ['Y0', 'T441_C', 'R441_2', 'T441_B', 'R441_1', 'T441_A', 'G5', 'S441', 'EDIT'] },
  { name: '立教通り', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.5, smooth: true, nodes: ['Y_RK', 'R1', 'R2', 'R3', 'R4', 'TIPTOP', 'RK_E', 'GOSA'] },
  { name: '要町通り', lanes: 1, laneW: 3.25, median: 0, shoulder: 2.25, smooth: true, nodes: ['Y_KN', 'YUBIN', 'Q4', 'Q3', 'NIKKEN', 'Q2', 'Q1', 'QB', 'RK_E'] },
  { name: '西口通り', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.5, nodes: ['EPOS', 'W_S2', 'W_A', 'W_B', 'W_C', 'HOSEI', 'W_E1', 'W_E2', 'KUREYON', 'W_N', 'MIYAKE', 'BUKURO'] },
  { name: '西口公園通り', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.5, nodes: ['W_SW', 'W_S1', 'EPOS'] },
  { name: '文化通り', lanes: 1, laneW: 3.0, median: 0, shoulder: 2.0, nodes: ['K3', 'E_EN', 'E1', 'KUREYON'] },
  { name: '南口通り', lanes: 1, laneW: 3.0, median: 0, shoulder: 2.0, nodes: ['W_S2', 'S_MID', 'EDIT'] },
  { name: 'ロータリー入口', lanes: 1, laneW: 3.5, median: 0, shoulder: 1.0, nodes: ['S_MID', 'RT_W'] },
  // ロータリーは時計回りの一方通行（ノード順）
  { name: '西口ロータリー', lanes: 0, laneW: 9.0, median: 0, shoulder: 0.5, oneway: true, nodes: ['RT_W', 'RT_A0', 'RT_A1', 'RT_B0', 'RT_B1', 'RT_C0', 'RT_C1', 'RT_D0', 'RT_D1', 'RT_W'] },
  { name: '西一番街', lanes: 0, laneW: 5.0, median: 0, shoulder: 0.5, ai: false, alley: true, nodes: ['NI_S', 'NI_N'] },
  // 施設への引き込み・エリア出口（街流しAIは入らない）
  { name: 'ドン・キホーテ駐車場', lanes: 0, laneW: 8.0, median: 0, shoulder: 0.5, ai: false, nodes: ['DQ_E', 'DQ_P'] },
  { name: 'ENEOS入口', lanes: 0, laneW: 8.0, median: 0, shoulder: 0.5, ai: false, nodes: ['GS_E', 'GS_P'] },
  { name: '川越街道（東池袋方面）', lanes: 2, laneW: 3.25, median: 0, shoulder: 0.5, ai: false, gate: true, nodes: ['K4', 'K5'] },
  { name: 'メトロポリタン通り（東池袋方面）', lanes: 1, laneW: 3.25, median: 0, shoulder: 1.5, ai: false, gate: true, nodes: ['EDIT', 'EDIT_OUT'] },
];

export const EAST_ROADS = [
  { name: '春日通り', lanes: 2, laneW: 3.25, median: 1.5, shoulder: 0.5, nodes: ['GATE_K', 'V0', 'J1', 'KG1', 'SC_I', 'EG_E', 'SC_K', 'KG2', 'J2'] },
  { name: '明治通り', lanes: 2, laneW: 3.0, median: 0, shoulder: 1.0, smooth: true, nodes: ['MJ_S', 'MJ_1', 'GR0', 'MJ_2', 'MJ_3', 'MJ_4', 'V0'] },
  { name: '首都高下の道（都道435号）', lanes: 2, laneW: 3.25, median: 3.0, shoulder: 0.5, highway: true, nodes: ['J4', 'T435_1', 'HELLO', 'T435_2', 'J5'] },
  { name: '首都高下の道（北）', lanes: 2, laneW: 3.25, median: 3.0, shoulder: 0.5, nodes: ['J6', 'S60E', 'N1', 'J1'] },
  { name: '不忍通り', lanes: 2, laneW: 3.0, median: 0, shoulder: 0.5, smooth: true, nodes: ['J3', 'SB1', 'SB2', 'J4'] },
  { name: '大塚の通り', lanes: 1, laneW: 3.25, median: 0, shoulder: 1.5, nodes: ['J2', 'SN1', 'ES_E', 'J3'] },
  { name: 'グリーン大通り', lanes: 2, laneW: 3.25, median: 4.0, shoulder: 0.5, green: true, nodes: ['GR0', 'J6', 'GB1', 'J5'] },
  { name: 'サンシャイン60通り', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.5, neon: true, nodes: ['MJ_2', 'S60P2', 'S60P3', 'S60M', 'S60B', 'S60E', 'SC_W'] },
  { name: '特別区道41-50', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.0, nodes: ['MJ_3', 'MJX', 'CK0', 'CK1', 'S60P2'] },
  { name: '東池袋一丁目の路地', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.0, nodes: ['S60P3', 'CK4', 'CK5', 'CK6', 'CK7', 'S60M'] },
  { name: 'サンシャインシティ外周', lanes: 1, laneW: 3.25, median: 0, shoulder: 1.5, nodes: ['GB1', 'SC_O', 'SC_P', 'SC_A', 'SC_B', 'SC_C', 'SC_W', 'SC_D', 'SC_E', 'SC_F', 'SC_G', 'SC_H', 'SC_I'] },
  { name: 'サンシャインシティ外周（東）', lanes: 1, laneW: 3.25, median: 0, shoulder: 1.5, nodes: ['SC_K', 'SC_L', 'SC_M', 'J5'] },
  { name: '都電沿いの道（南池袋）', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.6, smooth: true, nodes: ['MJ_S', 'MS1', 'HOSHINO', 'MS2', 'MS3', 'T435_2'] },
  { name: 'サービスステーション入口', lanes: 0, laneW: 8.0, median: 0, shoulder: 0.5, ai: false, nodes: ['EG_E', 'EG_P'] },
  { name: 'ショップ駐車場', lanes: 0, laneW: 8.0, median: 0, shoulder: 0.5, ai: false, nodes: ['ES_E', 'ES_P'] },
  { name: '春日通り（西池袋方面）', lanes: 2, laneW: 3.25, median: 0, shoulder: 0.5, ai: false, gate: true, nodes: ['GATE_K', 'GK_OUT'] },
  { name: '明治通り（西池袋方面）', lanes: 2, laneW: 3.0, median: 0, shoulder: 1.0, ai: false, gate: true, nodes: ['MJ_S', 'MJ_OUT'] },
];
for (const r of [...WEST_ROADS, ...EAST_ROADS]) {
  r.width = r.lanes > 0 ? r.lanes * 2 * r.laneW + r.median + r.shoulder * 2 : r.laneW + r.shoulder * 2;
  if (r.ai === undefined) r.ai = true;
}
WEST_ROADS.forEach((r) => (r.area = 'west'));
EAST_ROADS.forEach((r) => (r.area = 'east'));
// 互換用（西池袋）
export const ROADS = WEST_ROADS;
// 東池袋のコース幅は作成時の街の道路幅で固定
for (const r of EAST_ROADS) if (!r.gate && r.ai) RACE_ROADS.push({ name: r.name, width: r.width, nodes: [...r.nodes] });


// 施設（node = 引き込み道路の奥。from = 道路側のノード）
export const WEST_POIS = [
  { id: 'shop', type: 'shop', name: 'ドン・キホーテ 北池袋店（チューニングショップ）', short: 'TUNE SHOP', node: 'DQ_P', from: 'DQ_E', offset: [0, 0] },
  { id: 'gs', type: 'gs', name: 'ENEOS セルフ池袋SS（セーブポイント）', short: 'GS / SAVE', node: 'GS_P', from: 'GS_E', offset: [0, 0] },
];
export const EAST_POIS = [
  { id: 'shop_e', type: 'shop', name: '大塚モータース（チューニングショップ・架空）', short: 'TUNE SHOP', node: 'ES_P', from: 'ES_E', offset: [0, 0] },
  { id: 'gs_e', type: 'gs', name: '東池袋サービスステーション（セーブポイント・架空）', short: 'GS / SAVE', node: 'EG_P', from: 'EG_E', offset: [0, 0] },
];
export const POIS = WEST_POIS;

// コース（ノード列のループ。先頭ノードがスタート/フィニッシュ）
export const COURSES = [
  {
    id: 'speedway', name: '西池袋スピードウェイ', laps: 1, radius: 22,
    nodes: ['Y_RK', 'Y_KN', 'Y2', 'Y3', 'KUMANO', 'K1', 'AXIA', 'G1', 'G2', 'G3', 'BUKURO', 'GOSA', 'W_SW', 'G5', 'R441_1', 'R441_2', 'Y0'],
    desc: '山手通り・川越街道・劇場通り・441号を周回する高速コース',
  },
  {
    id: 'wgp', name: '池袋WGP', laps: 3, radius: 7,
    nodes: ['EPOS', 'W_S2', 'W_A', 'W_B', 'W_C', 'HOSEI', 'W_E1', 'W_E2', 'KUREYON', 'W_N', 'MIYAKE', 'BUKURO', 'GOSA', 'W_SW', 'W_S1'],
    desc: '池袋駅西口の狭い路地を駆け抜けるテクニカルコース',
  },
  {
    id: 'rikkyo', name: '立教通りサーキット', laps: 2, radius: 12,
    nodes: ['R3', 'R4', 'TIPTOP', 'RK_E', 'QB', 'Q1', 'Q2', 'NIKKEN', 'Q3', 'Q4', 'YUBIN', 'Y_KN', 'Y_RK', 'R1', 'R2'],
    desc: '立教通りと要町通りを結ぶ、ヘアピンが名物の中速コース',
  },
  // ===== 東池袋 =====
  {
    id: 'higashi', area: 'east', name: '東池袋ロングコース', laps: 1, radius: 18,
    nodes: ['KG2', 'J2', 'SN1', 'ES_E', 'J3', 'SB1', 'SB2', 'J4', 'T435_1', 'HELLO', 'T435_2', 'J5', 'GB1', 'J6', 'S60E', 'N1', 'J1', 'KG1', 'SC_I', 'EG_E', 'SC_K'],
    desc: '春日通り・大塚・不忍通り・首都高下を巡る東池袋の高速ロングコース',
  },
  {
    id: 'sunshine', area: 'east', name: 'サンシャインサーキット', laps: 2, radius: 9,
    nodes: ['S60B', 'S60E', 'J6', 'GR0', 'MJ_2', 'S60P2', 'S60P3', 'S60M'],
    desc: 'サンシャイン60通り・首都高下・グリーン大通り・東口の明治通りを回るショートコース',
  },
  {
    id: 'minami', area: 'east', name: '南池袋ループ', laps: 2, radius: 12,
    nodes: ['MS2', 'MS3', 'T435_2', 'J5', 'GB1', 'J6', 'GR0', 'MJ_1', 'MJ_S', 'MS1', 'HOSHINO'],
    desc: '都電沿いの道から首都高下、グリーン大通り、明治通りを巡る中速コース',
  },
  {
    id: 'higashiguchi', area: 'east', name: '東口ストリートコース', laps: 1, radius: 7,
    nodes: ['CK1', 'S60P2', 'S60P3', 'CK4', 'CK5', 'CK6', 'CK7', 'S60M', 'S60B', 'S60E', 'J6', 'GR0', 'MJ_2', 'MJ_3', 'MJX', 'CK0'],
    desc: '東池袋一丁目の路地とサンシャイン60通り・首都高下・グリーン大通りを巡るテクニカルコース',
  },
  {
    id: 'scround', area: 'east', name: 'サンシャインシティ外周', laps: 2, radius: 10,
    nodes: ['SC_L', 'SC_M', 'J5', 'GB1', 'SC_O', 'SC_P', 'SC_A', 'SC_B', 'SC_C', 'SC_W', 'SC_D', 'SC_E', 'SC_F', 'SC_G', 'SC_H', 'SC_I', 'EG_E', 'SC_K'],
    desc: '東池袋駅からサンシャインシティをぐるりと一周する中速コース',
  },
];
for (const c of COURSES) c.area ||= 'west';

// 順走/逆走を含めたレイアウト（西6・東6）
export const LAYOUTS = COURSES.flatMap((c) => [
  { key: `${c.id}_f`, course: c, area: c.area, reverse: false, name: `${c.name}（順走）` },
  { key: `${c.id}_r`, course: c, area: c.area, reverse: true, name: `${c.name}（逆走）` },
]);

// 榛名山の峠コース（3セクター＋フルコース × 下り/上り ＝ 8レイアウト）
// touge: 道路データ上の距離 from〜to（下り方向）。split は touge.js で確定させる
export const TOUGE_COURSES = [
  { id: 'haruna_full', area: 'haruna', name: '榛名山 フルコース', laps: 1, touge: { part: 'full' }, desc: 'ゆうすげ入口〜伊香保温泉石段街。約9km・標高差約440mの峠を一気に駆け抜ける' },
  { id: 'haruna_s1', area: 'haruna', name: '榛名山 セクター1（高原区間）', laps: 1, touge: { part: 1 }, desc: 'ゆうすげ入口から峠の頂上を越え、高原を下る中高速区間' },
  { id: 'haruna_s2', area: 'haruna', name: '榛名山 セクター2（中腹ヘアピン区間）', laps: 1, touge: { part: 2 }, desc: 'ヘアピンと複合コーナーが連続する中腹の区間' },
  { id: 'haruna_s3', area: 'haruna', name: '榛名山 セクター3（伊香保区間）', laps: 1, touge: { part: 3 }, desc: '伊香保温泉街へ向かう下りの区間。終盤は勾配がきつい' },
];
export const TOUGE_LAYOUTS = TOUGE_COURSES.flatMap((c) => [
  { key: `${c.id}_d`, course: c, area: 'haruna', reverse: false, dir: 'down', name: `${c.name}（下り）` },
  { key: `${c.id}_u`, course: c, area: 'haruna', reverse: true, dir: 'up', name: `${c.name}（上り）` },
]);
COURSES.push(...TOUGE_COURSES);
LAYOUTS.push(...TOUGE_LAYOUTS);

export function roadWidthBetween(a, b) {
  for (const r of RACE_ROADS) {
    for (let i = 0; i < r.nodes.length - 1; i++) {
      if ((r.nodes[i] === a && r.nodes[i + 1] === b) || (r.nodes[i] === b && r.nodes[i + 1] === a)) return r.width;
    }
  }
  return 10;
}

// 主人公の初期位置（GS前の文化通り、北向き）
export const START_SPOT = { node: 'GS_E', heading: Math.PI };

// エリア定義
export const AREAS = {
  west: {
    id: 'west', name: '西池袋', roads: WEST_ROADS, pois: WEST_POIS,
    start: { node: 'GS_E', heading: Math.PI, back: 16 },
    gates: [
      { node: 'K5', from: 'K4', to: 'east', label: '東池袋エリア', arrive: { node: 'GATE_K', toward: 'V0' } },
      { node: 'EDIT_OUT', from: 'EDIT', to: 'east', label: '東池袋エリア', arrive: { node: 'MJ_S', toward: 'MJ_1' } },
    ],
  },
  east: {
    id: 'east', name: '東池袋', roads: EAST_ROADS, pois: EAST_POIS,
    start: { node: 'EG_E', heading: 0, back: 0, toward: 'KG1' },
    gates: [
      { node: 'GK_OUT', from: 'GATE_K', to: 'west', label: '西池袋エリア', arrive: { node: 'K4', toward: 'K3' } },
      { node: 'MJ_OUT', from: 'MJ_S', to: 'west', label: '西池袋エリア', arrive: { node: 'EDIT', toward: 'S441' } },
    ],
  },
};

// ===== 榛名山（県道33号 渋川松井田線：ゆうすげ入口〜伊香保温泉石段街）=====
// 座標は実寸（メートル）。標高は src/physics/touge.js の路面データを使う。
export const HARUNA_UNLOCK_WINS = 10; // 榛名山エリアが解放される勝利数
const HR_STEP = 5; // データ2m間隔 → ノード10m間隔
const HR_RAW = HARUNA_DATA.road;
const HR_IDS = [];
for (let i = 0; i < HR_RAW.length; i += HR_STEP) {
  const id = `HR${HR_IDS.length}`;
  NODES[id] = { x: HR_RAW[i][0], z: HR_RAW[i][1] };
  HR_IDS.push(id);
}
if ((HR_RAW.length - 1) % HR_STEP) { const id = `HR${HR_IDS.length}`; const p = HR_RAW[HR_RAW.length - 1]; NODES[id] = { x: p[0], z: p[1] }; HR_IDS.push(id); }
// 道路脇の施設（駐車場への引き込み）。side: 下り方向に対して +1=右 / -1=左
function hrSpur(nodeIdx, side, len, idE, idP) {
  const a = NODES[HR_IDS[nodeIdx - 1]], b = NODES[HR_IDS[nodeIdx + 1]], c = NODES[HR_IDS[nodeIdx]];
  const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz);
  const rx = -dz / l, rz = dx / l;
  NODES[idE] = { x: c.x + rx * side * 2, z: c.z + rz * side * 2 };
  NODES[idP] = { x: c.x + rx * side * (4 + len), z: c.z + rz * side * (4 + len) };
  return HR_IDS[nodeIdx];
}
const HR_GS_ON = hrSpur(6, -1, 16, 'HR_GS_E', 'HR_GS_P');
const HR_SHOP_ON = hrSpur(HR_IDS.length - 12, 1, 16, 'HR_SH_E', 'HR_SH_P');
export const HARUNA_ROADS = [
  { name: '県道33号 渋川松井田線（榛名山）', lanes: 1, laneW: 3.0, median: 0, shoulder: 1.0, smooth: true, touge: true, nodes: HR_IDS },
  { name: '湖畔サービスステーション入口', lanes: 0, laneW: 8.0, median: 0, shoulder: 0.5, ai: false, nodes: [HR_GS_ON, 'HR_GS_E', 'HR_GS_P'] },
  { name: '伊香保モータース駐車場', lanes: 0, laneW: 8.0, median: 0, shoulder: 0.5, ai: false, nodes: [HR_SHOP_ON, 'HR_SH_E', 'HR_SH_P'] },
];
for (const r of HARUNA_ROADS) {
  r.width = r.lanes > 0 ? r.lanes * 2 * r.laneW + r.median + r.shoulder * 2 : r.laneW + r.shoulder * 2;
  if (r.ai === undefined) r.ai = true;
  r.area = 'haruna';
}
export const HARUNA_POIS = [
  { id: 'gs_h', type: 'gs', name: '榛名湖畔サービスステーション（セーブポイント・架空）', short: 'GS / SAVE', node: 'HR_GS_P', from: 'HR_GS_E', offset: [0, 0] },
  { id: 'shop_h', type: 'shop', name: '伊香保モータース（チューニングショップ・架空）', short: 'TUNE SHOP', node: 'HR_SH_P', from: 'HR_SH_E', offset: [0, 0] },
];
AREAS.haruna = {
  id: 'haruna', name: '榛名山', roads: HARUNA_ROADS, pois: HARUNA_POIS, touge: true,
  start: { node: HR_IDS[9], toward: HR_IDS[10], back: 0 },
  gates: [],
  unlockWins: HARUNA_UNLOCK_WINS,
};
// 道路データ上の距離（下り方向）でのコース区間。区間境界は touge.js で直線的な地点に決める
const HR_LEN = (() => { let a = 0; for (let i = 1; i < HR_RAW.length; i++) a += Math.hypot(HR_RAW[i][0] - HR_RAW[i - 1][0], HR_RAW[i][1] - HR_RAW[i - 1][1]); return a; })();
export const HARUNA_LENGTH = HR_LEN;

export const ALL_ROADS = [...WEST_ROADS, ...EAST_ROADS, ...HARUNA_ROADS];
export function areaOfLayout(L) { return L.area || L.course?.area || 'west'; }

// 街の道路で a-b を結ぶもの
export function townRoadBetween(a, b) {
  for (const r of ALL_ROADS) {
    for (let i = 0; i < r.nodes.length - 1; i++) {
      if ((r.nodes[i] === a && r.nodes[i + 1] === b) || (r.nodes[i] === b && r.nodes[i + 1] === a)) return r;
    }
  }
  return null;
}

// 左側車線の中心までのオフセット（道路中心から）
export function laneOffset(r) {
  if (!r || r.lanes === 0) return 0;
  return r.median / 2 + r.laneW * (r.lanes - 0.5);
}

// 道路の折れ線（smoothならセントリペタル Catmull-Rom で約6m間隔に補間。ノードは必ず通る）
export function roadPolyline(r) {
  const P = r.nodes.map((id) => NODES[id]);
  if (!r.smooth || P.length < 3) return P.map((p) => ({ x: p.x, z: p.z }));
  const out = [];
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
    const d = (a, b) => Math.max(1e-3, Math.sqrt(Math.hypot(b.x - a.x, b.z - a.z)));
    const t0 = 0, t1 = t0 + d(p0, p1), t2 = t1 + d(p1, p2), t3 = t2 + d(p2, p3);
    const len = Math.hypot(p2.x - p1.x, p2.z - p1.z);
    const m = Math.max(1, Math.ceil(len / 6));
    for (let k = 0; k < m; k++) {
      const t = t1 + ((t2 - t1) * k) / m;
      const L = (a, b, ta, tb) => ({ x: (a.x * (tb - t) + b.x * (t - ta)) / (tb - ta), z: (a.z * (tb - t) + b.z * (t - ta)) / (tb - ta) });
      const A1 = L(p0, p1, t0, t1), A2 = L(p1, p2, t1, t2), A3 = L(p2, p3, t2, t3);
      const B1 = L(A1, A2, t0, t2), B2 = L(A2, A3, t1, t3);
      out.push(L(B1, B2, t1, t2));
    }
  }
  const last = P[P.length - 1];
  out.push({ x: last.x, z: last.z });
  return out;
}

// ノードaからノードbへ向く方位（heading）
export function headingTo(a, b) {
  const A = NODES[a], B = NODES[b];
  return Math.atan2(B.x - A.x, B.z - A.z);
}

// 道路上の左側車線に置く位置 { x, z, h }
export function laneSpot(node, toward, back = 0, heading = null) {
  const n = NODES[node];
  const h = heading != null ? heading : headingTo(node, toward);
  const f0 = Math.sin(h), f1 = Math.cos(h);
  const r = toward ? townRoadBetween(node, toward) : null;
  const o = r ? laneOffset(r) : 0;
  // 左 = (cos h, -sin h)
  return { x: n.x - f0 * back + Math.cos(h) * o, z: n.z - f1 * back - Math.sin(h) * o, h };
}

// エリアの開始位置
export function areaStart(area) {
  const st = AREAS[area].start;
  if (st.toward) return { ...laneSpot(st.node, st.toward, st.back || 0), area };
  const n = NODES[st.node];
  const f0 = Math.sin(st.heading), f1 = Math.cos(st.heading);
  return { x: n.x - f0 * (st.back || 0) - 2.5 * Math.cos(st.heading), z: n.z - f1 * (st.back || 0) + 2.5 * Math.sin(st.heading), h: st.heading, area };
}

// ゲートを抜けた先の到着位置
export function arriveSpot(gate) {
  return { ...laneSpot(gate.arrive.node, gate.arrive.toward, -6), area: gate.to };
}
