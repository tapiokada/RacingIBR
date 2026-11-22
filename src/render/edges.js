// 走行可能領域の境界に沿った障害物（縁石＝低い段差／ガードレール／植え込み）
// 衝突判定の境界（Corridor）そのものから生成するので、見た目と当たり判定が一致する。
import * as THREE from 'three';

const STEP = 1.6; // 部材1つの長さ[m]

// 境界上の点を列挙：{x,z,nx,nz}（n=外向き法線）
export function boundaryPoints(corridor) {
  const out = [];
  const seen = new Set();
  const push = (x, z, nx, nz) => {
    const q = corridor.query(x + nx * 0.06, z + nz * 0.06);
    if (q.far || q.d < 0.02) return; // 他の道路の内側＝境界ではない（交差点の切れ目）
    const key = `${Math.round(x / 0.9)},${Math.round(z / 0.9)}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ x, z, nx, nz });
  };
  for (const s of corridor.segs) {
    const dx = s.bx - s.ax, dz = s.bz - s.az;
    const len = Math.hypot(dx, dz);
    if (len < 1e-3) continue;
    const ux = dx / len, uz = dz / len;
    const rx = -uz, rz = ux;
    const m = Math.max(1, Math.round(len / STEP));
    for (let k = 0; k <= m; k++) {
      const t = (k / m) * len;
      for (const sg of [-1, 1]) push(s.ax + ux * t + rx * s.hw * sg, s.az + uz * t + rz * s.hw * sg, rx * sg, rz * sg);
    }
    // 端部（行き止まり・コーナー外周）
    const na = Math.max(3, Math.ceil((Math.PI * s.hw) / STEP));
    for (const [cx, cz, dir] of [[s.ax, s.az, -1], [s.bx, s.bz, 1]]) {
      for (let k = 1; k < na; k++) {
        const ph = -Math.PI / 2 + (k / na) * Math.PI;
        const nx = ux * dir * Math.cos(ph) + rx * Math.sin(ph);
        const nz = uz * dir * Math.cos(ph) + rz * Math.sin(ph);
        push(cx + nx * s.hw, cz + nz * s.hw, nx, nz);
      }
    }
  }
  return out;
}

function inst(geo, mat, list) {
  const mesh = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1);
  list.forEach((it, i) => {
    e.set(0, it.rot, 0); q.setFromEuler(e);
    m.compose(p.set(it.x, it.y || 0, it.z), q, sc);
    mesh.setMatrixAt(i, m);
    if (it.color != null) mesh.setColorAt(i, new THREE.Color(it.color));
  });
  mesh.count = list.length;
  return mesh;
}

const hash = (x, z) => {
  const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return s - Math.floor(s);
};

// opts.course: コース用（紅白縁石とガードレール） / opts.isCorner(x,z): コーナー付近か
export function buildEdges(corridor, opts = {}) {
  const g = new THREE.Group();
  const pts = boundaryPoints(corridor);
  const curbs = [], rails = [], posts = [], planters = [], hedges = [], refl = [];
  let i = 0;
  for (const p of pts) {
    const rot = Math.atan2(-p.nz, p.nx); // 長手方向(z)を接線へ
    const corner = opts.isCorner ? opts.isCorner(p.x, p.z) : false;
    const striped = opts.course && corner;
    curbs.push({ x: p.x + p.nx * 0.15, z: p.z + p.nz * 0.15, rot, color: striped ? ((Math.floor(i / 1) % 2) ? 0xd8262f : 0xf2f2f2) : 0xc9ccd2 });
    const bx = p.x + p.nx * 0.95, bz = p.z + p.nz * 0.95;
    // 町は約24mごとにガードレール／植え込みを切替。コースは全てガードレール
    const zone = opts.course ? 0 : hash(Math.round(p.x / 24), Math.round(p.z / 24));
    if (opts.course || zone < 0.55) {
      rails.push({ x: bx, z: bz, y: 0.62, rot, color: opts.course ? ((i % 4 < 2) ? 0xe6e6e6 : 0xd02a32) : 0xe8eaee });
      if (i % 2 === 0) posts.push({ x: bx + p.nx * 0.12, z: bz + p.nz * 0.12, y: 0.4, rot });
      if (i % 3 === 0) refl.push({ x: bx - p.nx * 0.06, z: bz - p.nz * 0.06, y: 0.62, rot, color: corner ? 0xff8a00 : 0xffd24a });
    } else {
      planters.push({ x: bx + p.nx * 0.2, z: bz + p.nz * 0.2, y: 0.22, rot });
      hedges.push({ x: bx + p.nx * 0.2, z: bz + p.nz * 0.2, y: 0.7, rot, color: hash(p.x, p.z) < 0.5 ? 0x2f6a35 : 0x3b7d3a });
    }
    i++;
  }
  const curbMat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x3a3a3a });
  g.add(inst(new THREE.BoxGeometry(0.3, 0.16, STEP + 0.05).translate(0, 0.08, 0), curbMat, curbs));
  const railMat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x2c2c2c });
  g.add(inst(new THREE.BoxGeometry(0.06, 0.34, STEP + 0.05), railMat, rails));
  g.add(inst(new THREE.BoxGeometry(0.1, 0.8, 0.1), new THREE.MeshLambertMaterial({ color: 0x8c9098 }), posts));
  g.add(inst(new THREE.BoxGeometry(0.06, 0.1, 0.16), new THREE.MeshBasicMaterial({ color: 0xffffff }), refl));
  g.add(inst(new THREE.BoxGeometry(0.75, 0.44, STEP), new THREE.MeshLambertMaterial({ color: 0x7d7f84, emissive: 0x1a1a1a }), planters));
  g.add(inst(new THREE.BoxGeometry(0.62, 0.55, STEP - 0.1), new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x0c1a0c }), hedges));
  g.userData.count = pts.length;
  return g;
}
