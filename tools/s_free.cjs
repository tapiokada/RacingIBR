module.exports = async (pg, OUT) => {
  const setts = await pg.evaluate(() => { const s = window.__dbg.game.settings; return { t: s.transmission, tcs: s.tcs, r: s.keys.reset }; });
  console.log(JSON.stringify(setts));
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(200);
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(200); // FREE RUN
  await pg.waitForTimeout(300); for (let i = 0; i < 4; i++) { await pg.keyboard.press('ArrowDown'); await pg.waitForTimeout(80); }
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(200);
  await pg.waitForTimeout(200); await pg.keyboard.press('Enter'); await pg.waitForTimeout(1800);
  await pg.evaluate(() => window.__dbg.game.debugStep(4.5));
  await pg.screenshot({ path: OUT + '/40_free_start.png' });
  // ヘアピン手前へ
  const info = await pg.evaluate(() => { const m = window.__dbg.game.mode; const c = m.corners = m.path.corners.map(c=>[c.s0|0,c.s1|0,c.tight]); const hp = m.path.corners.find(c=>c.tight); const p = m.path.posAt(hp.s0 - 30, 0); m.P.car.place(p.x, p.z, p.h, 0); window.__dbg.game.rig.reset(); return c; });
  console.log(JSON.stringify(info));
  await pg.evaluate(() => window.__dbg.game.debugStep(0.5));
  await pg.waitForTimeout(400);
  await pg.screenshot({ path: OUT + '/41_hairpin_view.png' });
  // 斜めに置いてリセット
  const r = await pg.evaluate(() => { const m = window.__dbg.game.mode; const c = m.P.car; c.place(c.x + 3, c.z + 2, c.h + 2.5, 15); return [c.x|0, c.z|0, c.h.toFixed(2)]; });
  await pg.keyboard.press('KeyR'); await pg.evaluate(() => window.__dbg.game.debugStep(0.2));
  const r2 = await pg.evaluate(() => { const m = window.__dbg.game.mode; const c = m.P.car; const pr = m.path.project(c.x,c.z,-1); return { x: c.x|0, z: c.z|0, h: c.h.toFixed(2), tan: Math.atan2(m.path.tx[pr.i], m.path.tz[pr.i]).toFixed(2), lat: pr.lat.toFixed(2), kmh: c.kmh.toFixed(1) }; });
  console.log('before', r, 'after reset', JSON.stringify(r2));
  // 高い視点からヘアピン俯瞰
  await pg.evaluate(() => { const g = window.__dbg.game; const m = g.mode; const hp = m.path.corners.find(c=>c.tight); const p = m.path.posAt((hp.s0+hp.s1)/2, 0); m.update = () => {}; const cam = g.rig.camera; g.world.scene.children.filter(o=>o.isInstancedMesh && o.count>1000).forEach(o=>o.visible=false); cam.position.set(p.x, 90, p.z + 1); cam.lookAt(p.x, 0, p.z); cam.fov = 50; cam.updateProjectionMatrix(); });
  await pg.waitForTimeout(800);
  await pg.screenshot({ path: OUT + '/42_hairpin_top.png' });
};
