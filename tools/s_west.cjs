module.exports = async (pg, OUT) => {
  const step = async (ms=120) => pg.waitForTimeout(ms);
  await pg.keyboard.press('ArrowDown'); await step(); await pg.keyboard.press('Enter'); await step(300);
  await pg.keyboard.press('ArrowDown'); await step(); await pg.keyboard.press('Enter'); await step(300); // FREE RUN
  await pg.keyboard.press('Enter'); await step(300); // 西池袋タウン
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(2000); // ノーマル
  const mode = await pg.evaluate(() => window.__dbg.game.mode.constructor.name + ' ' + !!window.__dbg.game.mode.P);
  console.log('mode', mode);
  const shot = async (name, fn) => {
    await pg.evaluate(fn);
    await pg.evaluate(() => { const g = window.__dbg.game; g.rig.reset(); g.debugStep(0.3); });
    await pg.waitForTimeout(700);
    await pg.screenshot({ path: OUT + '/' + name + '.png' });
  };
  // 西口：南口通りを北上しながら公園・ロータリーを見る
  await shot('50_west_exit', () => { const m = window.__dbg.game.mode; const { geo } = window.__dbgMap; const p = geo(35.7290, 139.70935); m.P.car.place(p.x - 2, p.z, Math.PI, 0); });
  // ロータリーから東部デパート
  await shot('51_rotary', () => { const m = window.__dbg.game.mode; const { geo } = window.__dbgMap; const p = geo(35.73007, 139.7096); m.P.car.place(p.x, p.z, Math.PI / 2, 0); });
  // 西一番街入口
  await shot('52_alley', () => { const m = window.__dbg.game.mode; const { geo } = window.__dbgMap; const p = geo(35.73100, 139.71054); m.P.car.place(p.x, p.z + 4, Math.PI, 0); });
  // 川越街道と首都高
  await shot('53_highway', () => { const m = window.__dbg.game.mode; const { NODES } = window.__dbgMap; const a = NODES.K1, b = NODES.AXIA; const x = a.x + (b.x-a.x)*0.3, z = a.z + (b.z-a.z)*0.3; const h = Math.atan2(b.x-a.x, b.z-a.z); const l = Math.hypot(b.x-a.x,b.z-a.z); m.P.car.place(x + (b.z-a.z)/l*4.8, z - (b.x-a.x)/l*4.8, h, 0); });
  // 山手通り（分離帯・歩道橋・交差点）
  await shot('54_yamate', () => { const m = window.__dbg.game.mode; const { NODES } = window.__dbgMap; const a = NODES.Y0, b = NODES.Y_RK; const x = a.x + (b.x-a.x)*0.2, z = a.z + (b.z-a.z)*0.2; const h = Math.atan2(b.x-a.x, b.z-a.z); const l = Math.hypot(b.x-a.x,b.z-a.z); m.P.car.place(x + (b.z-a.z)/l*4.6, z - (b.x-a.x)/l*4.6, h, 0); });
  // 上空から西口
  await pg.evaluate(() => { const g = window.__dbg.game; const { geo } = window.__dbgMap; const p = geo(35.7300, 139.7095); g.mode.update = () => {}; const cam = g.rig.camera; cam.position.set(p.x - 120, 110, p.z + 90); cam.lookAt(p.x + 10, 0, p.z - 10); cam.fov = 50; cam.updateProjectionMatrix(); });
  await pg.waitForTimeout(800);
  await pg.screenshot({ path: OUT + '/55_aerial.png' });
};
