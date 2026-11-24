// 車両GLB（Sketchfab）をゲーム用に変換する
// - 座標変換：Y-up・前方+Z・メートル・原点＝ホイールベース中心の地面
// - 4輪を車体から分離（回転・操舵用に車輪中心を原点としたノード wheel_FL/FR/RL/RR）
// - 透過（transmission）ガラスは半透明に置き換え（描画負荷対策）
// - テクスチャを1024px WebPに縮小、メッシュをmeshopt圧縮
// usage: node tools/car_model.mjs <gr86|z32|wrx> <in.glb> <out.glb>
import { NodeIO, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { dedup, prune, weld, textureCompress, meshopt, reorder } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
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
};
const C = CONFIGS[model];
if (C.world) {
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
const tp = (x, y, z) => { const g = mp(x, y, z); return [S * g[0], S * (g[1] - Y0), S * (g[2] - Z0)]; };
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
  ? root.listNodes().filter((n) => n.getMesh()).map((n) => ({ mesh: n.getMesh(), M: n.getWorldMatrix(), wheel: C.wheels.findIndex((w) => isAnc(w.node, n)) }))
  : root.listMeshes().map((mesh) => ({ mesh, M: null, wheel: null }));
const xf = (M, v, dir) => {
  if (!M) return v;
  const [x, y, z] = v;
  const r = [M[0] * x + M[4] * y + M[8] * z + (dir ? 0 : M[12]), M[1] * x + M[5] * y + M[9] * z + (dir ? 0 : M[13]), M[2] * x + M[6] * y + M[10] * z + (dir ? 0 : M[14])];
  if (dir) { const l = Math.hypot(...r) || 1; return r.map((c) => c / l); }
  return r;
};
for (const item of items) {
  const mesh = item.mesh;
  const bodyMesh = doc.createMesh('b_' + mesh.getName());
  for (const prim of mesh.listPrimitives()) {
    const pos = prim.getAttribute('POSITION'), nor = prim.getAttribute('NORMAL'), uv = prim.getAttribute('TEXCOORD_0');
    const idx = prim.getIndices();
    const n = idx ? idx.getCount() : pos.getCount();
    const groups = [[], [], [], [], []]; // 0..3 車輪, 4 車体
    const a = [], b = [], cc = [];
    for (let t = 0; t < n; t += 3) {
      const ids = [0, 1, 2].map((k) => (idx ? idx.getScalar(t + k) : t + k));
      const ws = item.wheel != null ? [item.wheel, item.wheel, item.wheel] : ids.map((i) => { pos.getElement(i, a); return wheelOf(a[0], a[1], a[2]); });
      const g = ws[0] >= 0 && ws[0] === ws[1] && ws[1] === ws[2] ? ws[0] : 4;
      groups[g].push(...ids);
    }
    tris += n / 3;
    groups.forEach((list, g) => {
      if (!list.length) return;
      // 使う頂点だけ取り出して座標変換
      const remap = new Map(), P = [], N = [], U = [], I = [];
      const off = g < 4 ? wheelNodes[g].c : [0, 0, 0];
      for (const i of list) {
        if (!remap.has(i)) {
          remap.set(i, remap.size);
          pos.getElement(i, a); const p = tp(...xf(item.M, a, false)); P.push(p[0] - off[0], p[1] - off[1], p[2] - off[2]);
          if (nor) { nor.getElement(i, b); N.push(...tn(...xf(item.M, b, true))); }
          if (uv) { uv.getElement(i, cc); U.push(cc[0], cc[1]); }
        }
        I.push(remap.get(i));
      }
      if (g < 4) wtris += I.length / 3;
      const np = doc.createPrimitive().setMaterial(prim.getMaterial()).setMode(prim.getMode());
      np.setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(P)).setBuffer(buffer));
      if (nor) np.setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(new Float32Array(N)).setBuffer(buffer));
      if (uv) np.setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(U)).setBuffer(buffer));
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
  prune(), dedup(), weld(), reorder({ encoder: MeshoptEncoder }),
  textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [1024, 1024], quality: 82 }),
  meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
);
await io.write(out, doc);
console.log('wrote', out);
