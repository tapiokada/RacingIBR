// 車両GLB（Sketchfab）をゲーム用に変換する
// - 座標変換：Y-up・前方+Z・メートル・原点＝ホイールベース中心の地面
// - 4輪を車体から分離（回転・操舵用に車輪中心を原点としたノード wheel_FL/FR/RL/RR）
// - 透過（transmission）ガラスは半透明に置き換え（描画負荷対策）
// - テクスチャを1024px WebPに縮小、メッシュをmeshopt圧縮
// usage: node tools/car_model.mjs <gr86|z32|wrx|nd|supra|swift|s2k|brz|evo|r34|na1|na2|fc|fd|r33> <in.glb> <out.glb>
import { NodeIO, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { dedup, prune, weld, textureCompress, meshopt, reorder, simplify } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder, MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';

const [model, inp, out] = process.argv.slice(2);
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io0 = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const doc = await io0.read(inp);
const root = doc.getRoot();
// 元データの軸：fwd=前方の軸と符号、up=上の軸。wheels=車輪中心（元座標）、wb=実車ホイールベース[m]
// cut=車輪として切り出す半径（前後・上下）、inner=車体外側とみなす左右位置の下限（元座標）
const CONFIGS = {
  // "Toyota GR86 (ZN8)" by Mona x Supercars (CC BY 4.0)：x=前後（前が−x）、y=左右、z=上
  gr86: {
    map: (x, y, z) => [-y, z, -x], wb: 2.575, ground: 0.04, cut: 1.42, inner: 2.35,
    wheels: [{ name: 'wheel_FL', p: [-5.16, -3.42, 1.435] }, { name: 'wheel_FR', p: [-5.135, 3.42, 1.435] }, { name: 'wheel_RL', p: [5.25, -3.42, 1.32] }, { name: 'wheel_RR', p: [5.315, 3.42, 1.315] }],
    side: (x, y, z) => y, along: (x, y, z) => [x, z],
  },
  // "Nissan Fairlady 300ZX (Z32) 1989" by Lexyc16 (CC BY-NC 4.0)：x=左右（+が左）、y=前後（前が−y）、z=上
  z32: {
    map: (x, y, z) => [x, z, -y], wb: 2.45, ground: 0.0, cut: 0.9, inner: 1.42,
    wheels: [{ name: 'wheel_FL', p: [1.88, -2.785, 0.815] }, { name: 'wheel_FR', p: [-1.953, -2.785, 0.815] }, { name: 'wheel_RL', p: [1.902, 3.373, 0.815] }, { name: 'wheel_RR', p: [-1.995, 3.373, 0.815] }],
    side: (x, y, z) => x, along: (x, y, z) => [y, z],
  },
  // "2012 Varis Subaru Impreza WRX STI GRB Ver." by Ddiaz Design (CC BY-NC-SA 4.0)
  // ノード階層に変換行列があるのでワールド座標で処理（Y-up・前が+z・左が+x）。車輪は名前の付いたノードごと分離
  wrx: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.625,
    wheelNodes: ['3DWheel Front L', '3DWheel Front R', '3DWheel Rear L', '3DWheel Rear R'],
  },
  // "2016 Mazda MX-5 Miata" by Galaxy Car Showroom (CC BY 4.0)：ワールド座標がY-up・メートル・前が−z。車輪ノード名が重複しているので位置で分離
  nd: {
    world: true, map: (x, y, z) => [-x, y, -z], wb: 2.31, cut: 0.345, inner: 0.58,
    wheels: [{ name: 'wheel_FL', p: [-0.733, 0.1805, -1.1535] }, { name: 'wheel_FR', p: [0.733, 0.1805, -1.1535] }, { name: 'wheel_RL', p: [-0.733, 0.1805, 1.1535] }, { name: 'wheel_RR', p: [0.733, 0.1805, 1.1535] }],
    side: (x, y, z) => x, along: (x, y, z) => [z, y], ground: -0.14,
  },
  // "Toyota Supra MK4 | supra 1997" by Pooya_dh (CC BY-NC 4.0)：Y-up・前が+z・左が+x。前後の車輪が1つの部品なので位置で分離、キャリパーは車体側
  supra: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.55, cut: 0.4, inner: 0.72, noWheel: /Caliper/i,
    wheels: [{ name: 'wheel_FL', p: [0.88, 0.349, 1.5625] }, { name: 'wheel_FR', p: [-0.88, 0.349, 1.5625] }, { name: 'wheel_RL', p: [0.88, 0.349, -1.3605] }, { name: 'wheel_RR', p: [-0.88, 0.349, -1.3605] }],
    side: (x, y, z) => x, along: (x, y, z) => [z, y], ground: -0.007,
  },
  // "2020 Suzuki Swift Sport (ZC33S)" by DisneyCars (CC BY 4.0)：Y-up・前が+z・左が+x、原点がずれているので左右も中央に寄せる
  swift: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.45, cut: 1.2, inner: 2.45, centerX: true,
    wheels: [{ name: 'wheel_FL', p: [479.43, 110.50, -60.82] }, { name: 'wheel_FR', p: [473.64, 110.50, -60.82] }, { name: 'wheel_RL', p: [479.445, 110.50, -70.253] }, { name: 'wheel_RR', p: [473.618, 110.50, -70.253] }],
    side: (x, y, z) => x - 476.531, along: (x, y, z) => [z, y], ground: 109.34,
  },
  // "Honda S2000 Ultimate Edition (AP2)" by Mona x Supercars (CC BY 4.0)：Y-up・前が−z。車輪ノード名が重複しているので位置で分離
  s2k: {
    world: true, map: (x, y, z) => [-x, y, -z], wb: 2.4, cut: 0.33, inner: 0.56,
    wheels: [{ name: 'wheel_FL', p: [-0.7305, 0.297, -1.258] }, { name: 'wheel_FR', p: [0.7295, 0.297, -1.258] }, { name: 'wheel_RL', p: [-0.7305, 0.297, 1.148] }, { name: 'wheel_RR', p: [0.7295, 0.297, 1.148] }],
    side: (x, y, z) => x, along: (x, y, z) => [z, y], ground: -0.004,
  },
  // "2023 Subaru BRZ" by Nazh Design (CC BY 4.0)：頂点カラーのみ・約42万ポリゴン・縮尺1/25程度。Y-up・前が+z
  // 塗装（青系の頂点カラー）を別マテリアルに分けて塗り替え可能にし、ポリゴンを間引く
  brz: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.575, cut: 0.0142, inner: 0.0255, centerX: true,
    wheels: [{ name: 'wheel_FL', p: [0.0780, 0.0128, -0.04201] }, { name: 'wheel_FR', p: [0.0100, 0.0128, -0.04201] }, { name: 'wheel_RL', p: [0.0780, 0.0128, -0.14504] }, { name: 'wheel_RR', p: [0.0100, 0.0128, -0.14504] }],
    side: (x, y, z) => x - 0.044, along: (x, y, z) => [z, y], ground: 0,
    paint: (c) => c[2] > 0.45 && c[2] > c[0] * 2 && c[2] > c[1] * 1.6, simplify: 0.3,
    // 窓：ベルトラインより上の黒い面（不透明の黒で、運転席から外が見えないため半透明ガラスに）
    glass: (c, p) => c[0] < 0.03 && c[1] < 0.03 && c[2] < 0.03 && p[1] > 0.0315,
  },
  // "2006 Mitsubishi Lancer Evolution IX MR" by OUTPISTON (CC BY-NC-SA 4.0)：Y-up・前が+z・左が+x、縮尺1/100程度。車輪は名前付きノード
  evo: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.625,
    wheelNodes: ['3DWheel Front L_6', '3DWheel Front R_93', '3DWheel Rear L_180', '3DWheel Rear R_267'],
  },
  // "2002_nissan_skyline_r34_gt-r" by 007 (CC BY 4.0)：同上
  r34: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.665,
    wheelNodes: ['Wheel_104', 'wheel_290', 'wheel_525', 'wheel_764'],
  },
  // "1990 Honda NSX" by lilModels (CC BY 4.0)：Y-up・前が+z・左が+x・縮尺約2/3。車輪は複数の部品なので位置で分離
  na1: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.53, cut: 0.215, inner: 0.44, ground: 0.019,
    wheels: [{ name: 'wheel_FL', p: [0.527, 0.2235, -0.635] }, { name: 'wheel_FR', p: [-0.527, 0.2235, -0.635] }, { name: 'wheel_RL', p: [0.527, 0.2235, -2.3435] }, { name: 'wheel_RR', p: [-0.527, 0.2235, -2.3435] }],
    side: (x, y, z) => x, along: (x, y, z) => [z, y],
  },
  // "2002 Honda NSX-R NA2" by SIU Car Garage (CC BY-NC 4.0)：Y-up・前が+z・左が+x。車輪の部品はノード名が FL_/FR_/RL_/RR_ で始まる
  na2: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.53, ground: -0.002, wheelRe: [/^FL_/, /^FR_/, /^RL_/, /^RR_/], wheelCenter: /tyre/,
  },
  // "1990 Mazda RX-7 Savanna Infini III FC3S" by Galaxy Car Showroom (CC BY 4.0)：Y-up・前が−z・原点がずれていて縮尺約4倍
  fc: {
    world: true, map: (x, y, z) => [-x, y, -z], wb: 2.43, cut: 1.22, inner: 2.45, centerX: true, ground: 0.068,
    wheels: [{ name: 'wheel_FL', p: [14.55, 1.284, -38.11] }, { name: 'wheel_FR', p: [20.572, 1.284, -38.11] }, { name: 'wheel_RL', p: [14.55, 1.32, -28.38] }, { name: 'wheel_RR', p: [20.572, 1.32, -28.38] }],
    side: (x, y, z) => x - 17.561, along: (x, y, z) => [z, y],
  },
  // "1999 Mazda RX-7 FD" by OUTPISTON (CC BY-NC-SA 4.0)：Y-up・前が+z・左が+x・縮尺約3.5倍・約65万ポリゴン（間引く）
  fd: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.425, cut: 1.18, inner: 2.1, ground: 0, simplify: 0.12, simplifyError: 0.002, smoothRe: /^Material\.005$/,
    wheels: [{ name: 'wheel_FL', p: [2.547, 1.15, 4.5995] }, { name: 'wheel_FR', p: [-2.547, 1.15, 4.5995] }, { name: 'wheel_RL', p: [2.547, 1.15, -3.9355] }, { name: 'wheel_RR', p: [-2.547, 1.15, -3.9355] }],
    side: (x, y, z) => x, along: (x, y, z) => [z, y],
  },
  // "Nissan Skyline GTR r33" by Black Snow (CC BY 4.0)：Y-up・前が+z・左が+x。約29万ポリゴン（間引く）
  r33: {
    world: true, map: (x, y, z) => [x, y, z], wb: 2.72, cut: 0.262, inner: 0.62, ground: 0.107, simplify: 0.25, simplifyError: 0.003,
    wheels: [{ name: 'wheel_FL', p: [0.7695, 0.359, 1.2925] }, { name: 'wheel_FR', p: [-0.7635, 0.359, 1.2925] }, { name: 'wheel_RL', p: [0.7695, 0.359, -1.2985] }, { name: 'wheel_RR', p: [-0.7635, 0.359, -1.2985] }],
    side: (x, y, z) => x, along: (x, y, z) => [z, y],
  },
};
const C = CONFIGS[model];
if (C.wheelRe) {
  // 車輪の部品をノード名で振り分け、タイヤの外接箱の中心を車輪中心にする
  C.wheels = C.wheelRe.map((re, k) => {
    const nodes = root.listNodes().filter((n) => re.test(n.getName()) && n.getMesh());
    const tyre = nodes.find((n) => C.wheelCenter.test(n.getName())) || nodes[0];
    const b = getBounds(tyre);
    return { name: ['wheel_FL', 'wheel_FR', 'wheel_RL', 'wheel_RR'][k], p: b.min.map((v, i) => (v + b.max[i]) / 2), re };
  });
}
if (C.world && C.wheelNodes) {
  // 車輪ノードの外接箱の中心を車輪中心に、シーン最下点を接地面にする
  C.wheels = C.wheelNodes.map((nm, k) => {
    const nd = root.listNodes().find((n) => n.getName() === nm);
    const b = getBounds(nd);
    return { name: ['wheel_FL', 'wheel_FR', 'wheel_RL', 'wheel_RR'][k], p: b.min.map((v, i) => (v + b.max[i]) / 2), node: nd };
  });
  C.ground = getBounds(root.listScenes()[0]).min[1];
}
const io = io0;
// 生座標 → ゲーム座標（回転のみ。鏡像にならない）。原点＝ホイールベース中心の接地点、実寸に拡大縮小
const mp = C.map;
const W = C.wheels.map((w) => ({ ...w, g: mp(...w.p) }));
const zF = (W[0].g[2] + W[1].g[2]) / 2, zR = (W[2].g[2] + W[3].g[2]) / 2;
const S = C.wb / Math.abs(zF - zR);
const Z0 = (zF + zR) / 2, Y0 = C.ground;
const X0 = C.centerX ? W.reduce((a, w) => a + w.g[0], 0) / 4 : 0; // 左右の中心（原点がずれたモデル用）
const tp = (x, y, z) => { const g = mp(x, y, z); return [S * (g[0] - X0), S * (g[1] - Y0), S * (g[2] - Z0)]; };
const tn = (x, y, z) => mp(x, y, z);
const WHEELS_RAW = C.wheels.map((w) => ({ name: w.name, x: w.p[0], y: w.p[1], z: w.p[2] }));
// 判定：車輪中心から半径cut以内（前後・上下）かつ車体外側（同じ側で |左右| > inner）
const wheelOf = (x, y, z) => {
  for (let k = 0; k < 4; k++) {
    const w = C.wheels[k];
    const sd = C.side(x, y, z), sw = C.side(...w.p);
    if (Math.sign(sd) !== Math.sign(sw) || Math.abs(sd) < C.inner) continue;
    const [a1, b1] = C.along(x, y, z), [a2, b2] = C.along(...w.p);
    if ((a1 - a2) ** 2 + (b1 - b2) ** 2 < C.cut * C.cut) return k;
  }
  return -1;
};

// 新しいドキュメントへ素材をコピーする代わりに、元ドキュメント内で新しいノード構成を作る
const buffer = root.listBuffers()[0];
const scene = doc.createScene(model);
const top = doc.createNode(model);
scene.addChild(top);
const wheelNodes = WHEELS_RAW.map((w) => {
  const c = tp(w.x, w.y, w.z);
  const n = doc.createNode(w.name).setTranslation(c);
  top.addChild(n);
  return { node: n, c, mesh: doc.createMesh(w.name) };
});
const bodyNode = doc.createNode('body');
top.addChild(bodyNode);
let tris = 0, wtris = 0;
// 処理単位：world=true ならメッシュを持つノードごと（ワールド行列と車輪の所属を付ける）、そうでなければメッシュごと
const isAnc = (anc, n) => { for (let p = n; p; p = p.getParentNode()) if (p === anc) return true; return false; };
const items = C.world
  ? root.listNodes().filter((n) => n.getMesh()).map((n) => ({ mesh: n.getMesh(), M: n.getWorldMatrix(), wheel: C.wheelRe ? C.wheelRe.findIndex((re) => re.test(n.getName())) : C.wheelNodes ? C.wheels.findIndex((w) => isAnc(w.node, n)) : C.noWheel && C.noWheel.test(n.getName()) ? -1 : null }))
  : root.listMeshes().map((mesh) => ({ mesh, M: null, wheel: null }));
const xf = (M, v, dir) => {
  if (!M) return v;
  const [x, y, z] = v;
  const r = [M[0] * x + M[4] * y + M[8] * z + (dir ? 0 : M[12]), M[1] * x + M[5] * y + M[9] * z + (dir ? 0 : M[13]), M[2] * x + M[6] * y + M[10] * z + (dir ? 0 : M[14])];
  if (dir) { const l = Math.hypot(...r) || 1; return r.map((c) => c / l); }
  return r;
};
let paintM = null, glassM = null;
const glassMat = () => (glassM ||= doc.createMaterial('Glass').setBaseColorFactor([0.02, 0.03, 0.04, 0.35]).setAlphaMode('BLEND').setMetallicFactor(0.2).setRoughnessFactor(0.05).setDoubleSided(true));
const paintMat = () => (paintM ||= doc.createMaterial('Paint').setBaseColorFactor([0.2, 0.25, 0.75, 1]).setMetallicFactor(0.3).setRoughnessFactor(0.35));
for (const item of items) {
  const mesh = item.mesh;
  const bodyMesh = doc.createMesh('b_' + mesh.getName());
  for (const prim of mesh.listPrimitives()) {
    const pos = prim.getAttribute('POSITION'), nor = prim.getAttribute('NORMAL'), uv = prim.getAttribute('TEXCOORD_0'), col = prim.getAttribute('COLOR_0');
    const idx = prim.getIndices();
    const n = idx ? idx.getCount() : pos.getCount();
    const groups = [[], [], [], [], [], [], []]; // 0..3 車輪, 4 車体, 5 車体の塗装, 6 窓ガラス（頂点カラーから判定）
    const a = [], b = [], cc = [];
    for (let t = 0; t < n; t += 3) {
      const ids = [0, 1, 2].map((k) => (idx ? idx.getScalar(t + k) : t + k));
      const ws = item.wheel != null ? [item.wheel, item.wheel, item.wheel] : ids.map((i) => { pos.getElement(i, a); return wheelOf(...xf(item.M, a, false)); });
      let g = ws[0] >= 0 && ws[0] === ws[1] && ws[1] === ws[2] ? ws[0] : 4;
      if (g === 4 && C.paint && col && ids.every((i) => { col.getElement(i, cc); return C.paint(cc); })) g = 5;
      if (g === 4 && C.glass && col && ids.every((i) => { col.getElement(i, cc); pos.getElement(i, a); return C.glass(cc, xf(item.M, a, false)); })) g = 6;
      groups[g].push(...ids);
    }
    tris += n / 3;
    groups.forEach((list, g) => {
      if (!list.length) return;
      // 使う頂点だけ取り出して座標変換
      const remap = new Map(), P = [], N = [], U = [], I = [], K = [];
      const off = g < 4 ? wheelNodes[g].c : [0, 0, 0];
      for (const i of list) {
        if (!remap.has(i)) {
          remap.set(i, remap.size);
          pos.getElement(i, a); const p = tp(...xf(item.M, a, false)); P.push(p[0] - off[0], p[1] - off[1], p[2] - off[2]);
          if (nor) { nor.getElement(i, b); N.push(...tn(...xf(item.M, b, true))); }
          if (uv) { uv.getElement(i, cc); U.push(cc[0], cc[1]); }
          if (col && g < 5) { col.getElement(i, cc); K.push(cc[0], cc[1], cc[2], cc.length > 3 ? cc[3] : 1); }
        }
        I.push(remap.get(i));
      }
      // smoothRe に合うマテリアル（頂点を共有しない三角形の集まりで間引きが効かない部品。タイヤなど）：
      // 頂点を位置でまとめ、法線を面積で重み付けした平均で作り直す（UV・頂点カラーは捨てる）
      if (C.smoothRe && C.smoothRe.test(prim.getMaterial()?.getName() || '')) {
        const key = new Map(), P2 = [], I2 = [];
        const q = (v) => Math.round(v * 2e4);
        for (let t = 0; t < P.length / 3; t++) { const k = `${q(P[t * 3])},${q(P[t * 3 + 1])},${q(P[t * 3 + 2])}`; if (!key.has(k)) { key.set(k, P2.length / 3); P2.push(P[t * 3], P[t * 3 + 1], P[t * 3 + 2]); } I2[t] = key.get(k); }
        const idx2 = I.map((v) => I2[v]);
        const N2 = new Float32Array(P2.length);
        for (let t = 0; t < idx2.length; t += 3) {
          const [i0, i1, i2] = [idx2[t], idx2[t + 1], idx2[t + 2]];
          const ax = P2[i1 * 3] - P2[i0 * 3], ay = P2[i1 * 3 + 1] - P2[i0 * 3 + 1], az = P2[i1 * 3 + 2] - P2[i0 * 3 + 2];
          const bx = P2[i2 * 3] - P2[i0 * 3], by = P2[i2 * 3 + 1] - P2[i0 * 3 + 1], bz = P2[i2 * 3 + 2] - P2[i0 * 3 + 2];
          const nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
          for (const v of [i0, i1, i2]) { N2[v * 3] += nx; N2[v * 3 + 1] += ny; N2[v * 3 + 2] += nz; }
        }
        for (let v = 0; v < N2.length; v += 3) { const l = Math.hypot(N2[v], N2[v + 1], N2[v + 2]) || 1; N2[v] /= l; N2[v + 1] /= l; N2[v + 2] /= l; }
        const put = (A, B) => { A.length = 0; for (let k = 0; k < B.length; k++) A.push(B[k]); };
        put(P, P2); put(N, N2); put(I, idx2); U.length = 0; K.length = 0;
      }
      if (g < 4) wtris += I.length / 3;
      const np = doc.createPrimitive().setMaterial(g === 5 ? paintMat() : g === 6 ? glassMat() : prim.getMaterial()).setMode(prim.getMode());
      if (K.length) np.setAttribute('COLOR_0', doc.createAccessor().setType('VEC4').setArray(new Float32Array(K)).setBuffer(buffer));
      np.setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(P)).setBuffer(buffer));
      if (N.length) np.setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(new Float32Array(N)).setBuffer(buffer));
      if (U.length) np.setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(U)).setBuffer(buffer));
      np.setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(I)).setBuffer(buffer));
      (g < 4 ? wheelNodes[g].mesh : bodyMesh).addPrimitive(np);
    });
  }
  if (bodyMesh.listPrimitives().length) bodyNode.addChild(doc.createNode('b_' + mesh.getName()).setMesh(bodyMesh));
  else bodyMesh.dispose();
}
for (const w of wheelNodes) w.node.setMesh(w.mesh);
// 元のシーン・ノード・メッシュを削除
for (const s of root.listScenes()) if (s !== scene) s.dispose();
root.setDefaultScene(scene);
for (const nd of root.listNodes()) if (!nd.getMesh() && nd !== top && nd !== bodyNode && !wheelNodes.some((w) => w.node === nd)) nd.dispose();
for (const m of root.listMeshes()) if (!m.listParents().some((p) => p.propertyType === 'Node')) m.dispose();
console.log('triangles', tris, 'wheel triangles', wtris, 'scale', S.toFixed(4));
// 透過（transmission）は描画コストが高いので半透明（BLEND）に置き換える
for (const m of root.listMaterials()) {
  const tr = m.getExtension('KHR_materials_transmission');
  if (tr) { const f = tr.getTransmissionFactor(); m.setExtension('KHR_materials_transmission', null); m.setAlphaMode('BLEND'); const c = m.getBaseColorFactor(); m.setBaseColorFactor([c[0], c[1], c[2], Math.min(c[3], 1 - 0.7 * f)]); }
}
await doc.transform(
  prune(), dedup(), weld(),
  ...(C.simplify ? [simplify({ simplifier: MeshoptSimplifier, ratio: C.simplify, error: C.simplifyError || 0.0008 })] : []),
  reorder({ encoder: MeshoptEncoder }),
  textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [1024, 1024], quality: 82 }),
  meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
);
await io.write(out, doc);
console.log('wrote', out);
