// GR86(ZN8) GLB（Sketchfab: Mona x Supercars, CC-BY-4.0）をゲーム用に変換する
// - 座標変換：Y-up・前方+Z・メートル・原点＝ホイールベース中心の地面
// - 4輪を車体から分離（回転・操舵用に車輪中心を原点としたノード wheel_FL/FR/RL/RR）
// - テクスチャを1024px WebPに縮小、メッシュをmeshopt圧縮
// usage: node tools/gr86_model.mjs <in.glb> assets/models/gr86.glb
import { NodeIO, Document } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { dedup, prune, weld, textureCompress, meshopt, reorder } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import sharp from 'sharp';

const [inp, out] = process.argv.slice(2);
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const doc = await io.read(inp);
const root = doc.getRoot();

// 元データ：x=前後（前が−x）、y=左右、z=上。車輪中心（ホイール外面メッシュの外接箱から）
const WHEELS_RAW = [
  { name: 'wheel_FL', x: -5.16, y: -3.42, z: 1.435 },
  { name: 'wheel_FR', x: -5.135, y: 3.42, z: 1.435 },
  { name: 'wheel_RL', x: 5.25, y: -3.42, z: 1.32 },
  { name: 'wheel_RR', x: 5.315, y: 3.42, z: 1.315 },
];
const wbRaw = (WHEELS_RAW[2].x + WHEELS_RAW[3].x) / 2 - (WHEELS_RAW[0].x + WHEELS_RAW[1].x) / 2;
const S = 2.575 / wbRaw; // 実車ホイールベース2575mm
const X0 = ((WHEELS_RAW[2].x + WHEELS_RAW[3].x) / 2 + (WHEELS_RAW[0].x + WHEELS_RAW[1].x) / 2) / 2;
const Z0 = 0.04; // タイヤ接地面
// 生座標 → ゲーム座標（x=−y_raw, y=z_raw, z=−x_raw。回転なので鏡像にならない）
const tp = (x, y, z) => [-S * y, S * (z - Z0), -S * (x - X0)];
const tn = (x, y, z) => [-y, z, -x];
// 判定：生座標で車輪中心から半径1.42以内（前後・上下）かつ車体外側（|y|>2.35、同じ側）
const wheelOf = (x, y, z) => {
  for (let k = 0; k < 4; k++) {
    const w = WHEELS_RAW[k];
    if (Math.sign(y) !== Math.sign(w.y) || Math.abs(y) < 2.35) continue;
    if ((x - w.x) ** 2 + (z - w.z) ** 2 < 1.42 * 1.42) return k;
  }
  return -1;
};

const out2 = new Document();
// 新しいドキュメントへ素材をコピーする代わりに、元ドキュメント内で新しいノード構成を作る
const buffer = root.listBuffers()[0];
const scene = doc.createScene('gr86');
const top = doc.createNode('gr86');
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
for (const mesh of root.listMeshes()) {
  const bodyMesh = doc.createMesh('b_' + mesh.getName());
  for (const prim of mesh.listPrimitives()) {
    const pos = prim.getAttribute('POSITION'), nor = prim.getAttribute('NORMAL'), uv = prim.getAttribute('TEXCOORD_0');
    const idx = prim.getIndices();
    const n = idx ? idx.getCount() : pos.getCount();
    const groups = [[], [], [], [], []]; // 0..3 車輪, 4 車体
    const a = [], b = [], cc = [];
    for (let t = 0; t < n; t += 3) {
      const ids = [0, 1, 2].map((k) => (idx ? idx.getScalar(t + k) : t + k));
      const ws = ids.map((i) => { pos.getElement(i, a); return wheelOf(a[0], a[1], a[2]); });
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
          pos.getElement(i, a); const p = tp(a[0], a[1], a[2]); P.push(p[0] - off[0], p[1] - off[1], p[2] - off[2]);
          if (nor) { nor.getElement(i, b); N.push(...tn(b[0], b[1], b[2])); }
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
}
for (const w of wheelNodes) w.node.setMesh(w.mesh);
// 元のシーン・ノード・メッシュを削除
for (const s of root.listScenes()) if (s !== scene) s.dispose();
root.setDefaultScene(scene);
for (const nd of root.listNodes()) if (!nd.getMesh() && nd !== top && nd !== bodyNode && !wheelNodes.some((w) => w.node === nd)) nd.dispose();
for (const m of root.listMeshes()) if (!m.listParents().some((p) => p.propertyType === 'Node')) m.dispose();
console.log('triangles', tris, 'wheel triangles', wtris, 'scale', S.toFixed(4));
await doc.transform(
  prune(), dedup(), weld(), reorder({ encoder: MeshoptEncoder }),
  textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [1024, 1024], quality: 82 }),
  meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
);
await io.write(out, doc);
console.log('wrote', out);
