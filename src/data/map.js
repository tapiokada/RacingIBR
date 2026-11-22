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
  RT_W: [35.73007, 139.70975], RT_A: [35.7304, 139.70975], RT_B: [35.7304, 139.71035], RT_C: [35.72965, 139.71035], RT_D: [35.72965, 139.70975],
  // 西一番街（路地。西口通りの途中に接続）
  NI_S: [35.73124, 139.71054], NI_N: [35.73267, 139.71054],
};

// 西口のランドマーク配置（緯度経度の矩形 [南, 西, 北, 東]）
export const LANDMARKS = {
  dept: [35.7283, 139.7106, 35.7307, 139.7121], // 東部デパート（池袋駅西口）
  park: [35.7295, 139.7085, 35.7304, 139.7092], // 西口公園
  theatre: [35.7288, 139.7076, 35.72975, 139.7084], // 池袋芸術劇場
  plaza: [35.7290, 139.70845, 35.73055, 139.7106], // 西口駅前の開けた空間（ビルを建てない）
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
export const ROADS = [
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
  { name: '西口ロータリー', lanes: 0, laneW: 7.0, median: 0, shoulder: 0.5, nodes: ['S_MID', 'RT_W', 'RT_A', 'RT_B', 'RT_C', 'RT_D', 'RT_W'] },
  { name: '西一番街', lanes: 0, laneW: 5.0, median: 0, shoulder: 0.5, ai: false, alley: true, nodes: ['NI_S', 'NI_N'] },
];
for (const r of ROADS) {
  r.width = r.lanes > 0 ? r.lanes * 2 * r.laneW + r.median + r.shoulder * 2 : r.laneW + r.shoulder * 2;
  if (r.ai === undefined) r.ai = true;
}


// 施設
export const POIS = [
  { id: 'shop', type: 'shop', name: 'ドン・キホーテ 北池袋店（チューニングショップ）', short: 'TUNE SHOP', node: 'K4', offset: [0, 0] },
  { id: 'gs', type: 'gs', name: 'ENEOS セルフ池袋（セーブポイント）', short: 'GS / SAVE', node: 'E_EN', offset: [0, 0] },
];

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
];

// 順走/逆走を含めた6レイアウト
export const LAYOUTS = COURSES.flatMap((c) => [
  { key: `${c.id}_f`, course: c, reverse: false, name: `${c.name}（順走）` },
  { key: `${c.id}_r`, course: c, reverse: true, name: `${c.name}（逆走）` },
]);

export function roadWidthBetween(a, b) {
  for (const r of RACE_ROADS) {
    for (let i = 0; i < r.nodes.length - 1; i++) {
      if ((r.nodes[i] === a && r.nodes[i + 1] === b) || (r.nodes[i] === b && r.nodes[i + 1] === a)) return r.width;
    }
  }
  return 10;
}

// 主人公の初期位置（GS前）
export const START_SPOT = { node: 'E_EN', heading: Math.PI };

// 街の道路で a-b を結ぶもの
export function townRoadBetween(a, b) {
  for (const r of ROADS) {
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
