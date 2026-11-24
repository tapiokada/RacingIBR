// GLBの中身を調べる（ライセンス・ノード・ワールド座標での外接箱・マテリアル）
// usage: node tools/glb_inspect.mjs <in.glb> [正規表現（ノード名の絞り込み）]
import { NodeIO, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';
await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(process.argv[2]);
const r = doc.getRoot();
console.log(JSON.stringify(r.getAsset()));
const f = (v) => v.map((x) => x.toFixed(3)).join(',');
const sb = getBounds(r.listScenes()[0]);
console.log('scene', f(sb.min), f(sb.max), 'skins', r.listSkins().length);
let tris = 0;
const re = process.argv[3] ? new RegExp(process.argv[3], 'i') : null;
for (const n of r.listNodes()) {
  const m = n.getMesh();
  if (m) for (const p of m.listPrimitives()) tris += (p.getIndices()?.getCount() || p.getAttribute('POSITION').getCount()) / 3;
  if (re && !re.test(n.getName())) continue;
  if (!m && !re) continue;
  const b = getBounds(n);
  console.log(n.getName().slice(0, 50).padEnd(50), (m ? m.listPrimitives().map((p) => p.getMaterial()?.getName()).join('/') : '').slice(0, 40).padEnd(40), f(b.min), f(b.max));
}
console.log('tris', tris);
for (const m of r.listMaterials()) console.log('MAT', m.getName(), m.getBaseColorFactor().map((v) => v.toFixed(2)).join(','), m.getBaseColorTexture() ? 'tex' : '', m.getAlphaMode());
