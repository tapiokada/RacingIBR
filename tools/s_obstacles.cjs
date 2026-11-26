// サーキットのシーンで、コースの舗装路（＋縁石）の上に立っている物体（高さ0.3m以上）を探す
module.exports = async (pg, OUT) => {
  const KEY = process.env.KEY || 'tsukuba_2000';
  const res = await pg.evaluate((key) => {
    const { game } = window.__dbg; const { PracticeMode } = window.__dbgModes; const MAP = window.__dbgMap; const { Box3, Vector3 } = window.__dbgTHREE;
    const layout = MAP.LAYOUTS.find((l) => l.key === key);
    game.setMode(new PracticeMode(game, { layout, carId: '86-GR', equipped: window.__dbgStock('86-GR'), color: '#d8d8e0', kind: 'free' }));
    const path = game.mode.path, ground = game.world.ground;
    const out = [];
    const box = new Box3(), v = new Vector3();
    game.world.scene.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh) return;
      if (game.mode.session.entries.some((e) => { let p = o; while (p) { if (p === e.model) return true; p = p.parent; } return false; })) return;
      box.setFromObject(o);
      const h = box.max.y - box.min.y;
      if (h < 0.3 || box.max.x - box.min.x > 1500 || box.max.z - box.min.z > 1500) return; // 地面は除く
      // 大きなメッシュ（コースに沿った帯・壁）は頂点ごとに調べる
      if (box.max.x - box.min.x > 30 || box.max.z - box.min.z > 30) {
        const pos = o.geometry.attributes.position; o.updateMatrixWorld();
        for (let k = 0; k < pos.count; k++) {
          v.fromBufferAttribute(pos, k).applyMatrix4(o.matrixWorld);
          const q = ground.nearest(v.x, v.z, v.y); if (!q || q.d > 20) continue;
          const C = ground.C, yr = C.y[q.i];
          if (Math.abs(q.lat) < C.hw[q.i] + 1.0 && v.y > yr + 0.25 && v.y < yr + 2.5) { out.push({ name: 'strip', mt: o.material?.type, tr: o.material?.transparent, map: !!o.material?.map, nv: pos.count, py: +o.position.y.toFixed(1), par: o.parent?.type, col: o.material?.color?.getHexString?.(), x: +v.x.toFixed(1), z: +v.z.toFixed(1), y: +v.y.toFixed(1), yr: +yr.toFixed(1), s: +q.s.toFixed(0), lat: +q.lat.toFixed(1) }); return; }
        }
        return;
      }
      // 箱の底面を格子で調べる
      let hit = null;
      const n = 8;
      for (let i = 0; i <= n && !hit; i++) for (let j = 0; j <= n && !hit; j++) {
        const x = box.min.x + (box.max.x - box.min.x) * i / n, z = box.min.z + (box.max.z - box.min.z) * j / n;
        const q = ground.nearest(x, z, null); if (!q || q.d > 20) continue;
        const C = ground.C; const yr = C.y[q.i];
        if (Math.abs(q.lat) < C.hw[q.i] + 1.3 && box.min.y < yr + 2.0 && box.max.y > yr + 0.2) hit = { x: +x.toFixed(1), z: +z.toFixed(1), s: +q.s.toFixed(0), lat: +q.lat.toFixed(1) };
      }
      if (hit) out.push({ name: o.name || o.geometry.type, size: [+(box.max.x - box.min.x).toFixed(1), +h.toFixed(1), +(box.max.z - box.min.z).toFixed(1)], y: +box.min.y.toFixed(1), col: o.material?.color?.getHexString?.(), ...hit });
    });
    return out;
  }, KEY);
  console.log(KEY, res.length, JSON.stringify(res, null, 0));
};
