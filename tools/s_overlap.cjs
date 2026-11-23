// コース走行時に、地上付近の可視オブジェクトがコースの走行範囲に入っていないか検査
module.exports = async (pg) => {
 for (const AREA of ['west', 'east']) {
  const res = await pg.evaluate((AREA) => {
    const THREE = window.__dbgTHREE, g = window.__dbg.game;
    const clear = (x, z) => window.__dbgClear(x, z, AREA);
    g.setArea(AREA);
    const { LAYOUTS } = window.__dbgMap;
    g.world.setCourse({ ...{}, n: 0 } && null);
    // コース表示時の可視状態を再現（町の縁石・路面表示を非表示）
    g.world.townEdges.visible = false; g.world.detail.setCourseMode(true);
    for (const gm of g.world.gateMarkers) gm.group.visible = false;
    const bad = [];
    const box = new THREE.Box3(), m = new THREE.Matrix4(), v = new THREE.Vector3();
    const check = (obj, b, label) => {
      if (b.min.y > 4.2 || b.max.y < 0.12) return; // 頭上・路面
      const n = 3;
      for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
        const x = b.min.x + (b.max.x - b.min.x) * i / n, z = b.min.z + (b.max.z - b.min.z) * j / n;
        // AABBは回転物で大きめになるので中心寄りも見る
        const d = clear(x, z);
        if (d < -0.3 && clear((x + (b.min.x + b.max.x) / 2) / 2, (z + (b.min.z + b.max.z) / 2) / 2) < -0.3) { bad.push([label, x | 0, z | 0, d.toFixed(1)]); return; }
      }
    };
    g.world.scene.updateMatrixWorld(true);
    g.world.scene.traverseVisible((o) => {
      if (!o.isMesh || o === g.world.courseGroup) return;
      let p = o; while (p) { if (p === g.world.courseGroup || p.visible === false) return; p = p.parent; }
      if (o.geometry.type === 'PlaneGeometry' && Math.abs(o.rotation.x + Math.PI / 2) < 0.01) return;
      if (o.isInstancedMesh) {
        o.geometry.computeBoundingBox();
        for (let k = 0; k < o.count; k++) { o.getMatrixAt(k, m); box.copy(o.geometry.boundingBox).applyMatrix4(m).applyMatrix4(o.matrixWorld); check(o, box, 'inst:' + (o.material.color ? o.material.color.getHexString() : '') + '#' + k); }
      } else {
        box.setFromObject(o); check(o, box, o.geometry.type + ':' + (o.material.color ? o.material.color.getHexString() : ''));
      }
    });
    return bad;
  }, AREA);
  const byType = {};
  for (const b of res) { const k = b[0].split('#')[0]; byType[k] = (byType[k] || 0) + 1; }
  console.log(AREA, 'overlaps', res.length, JSON.stringify(byType));
  if (res.length) console.log(JSON.stringify(res.slice(0, 15)));
 }
};
