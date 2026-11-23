// 東池袋エリア：Storyでゲート移動・ポーズからのエリア切替・FREE RUNタウン・スクリーンショット
module.exports = async (pg, OUT) => {
  const G = () => window.__dbg.game;
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  // 川越街道の東端（K5）へテレポート→ゲートで東池袋へ
  await pg.evaluate(() => { const g = window.__dbg.game, m = g.mode; const { NODES } = window.__dbgMap; const k4 = NODES.K4, k5 = NODES.K5; m.session.player.car.place(k4.x + (k5.x - k4.x) * 0.6, k4.z + (k5.z - k4.z) * 0.6, Math.atan2(k5.x - k4.x, k5.z - k4.z), 5); });
  await pg.evaluate(() => window.__dbg.game.debugStep(1.2));
  await pg.waitForTimeout(2500);
  const r1 = await pg.evaluate(() => { const g = window.__dbg.game; return { area: g.area, storyArea: g.story.area, pos: [g.mode.session.player.car.x | 0, g.mode.session.player.car.z | 0], rivals: g.mode.session.entries.filter((e) => e.rival).map((e) => e.rival.name + '/' + e.carId) }; });
  console.log('after gate', JSON.stringify(r1));
  await pg.screenshot({ path: OUT + '/80_east_arrive.png' });
  const shot = async (name, fn) => { await pg.evaluate(fn); await pg.evaluate(() => { const g = window.__dbg.game; g.rig.reset(); g.debugStep(0.3); }); await pg.waitForTimeout(900); await pg.screenshot({ path: OUT + '/' + name + '.png' }); };
  // 東口（明治通りを北上）
  await shot('81_east_exit', () => { const m = window.__dbg.game.mode; const { laneSpot } = window.__dbgMap; const p = laneSpot('MJ_1', 'GR0', 25); m.session.player.car.place(p.x, p.z, p.h, 0); });
  // サンシャイン60通り
  await shot('82_s60', () => { const m = window.__dbg.game.mode; const { laneSpot } = window.__dbgMap; const p = laneSpot('MJ_2', 'S60M', -10); m.session.player.car.place(p.x, p.z, p.h, 0); });
  // 首都高下（北）からサンシャインを見上げる
  await shot('83_sunshine', () => { const m = window.__dbg.game.mode; const { laneSpot } = window.__dbgMap; const p = laneSpot('J6', 'S60E', -5); m.session.player.car.place(p.x, p.z, p.h, 0); });
  // 春日通り
  await shot('84_kasuga', () => { const m = window.__dbg.game.mode; const { laneSpot } = window.__dbgMap; const p = laneSpot('KG1', 'EG_E', -20); m.session.player.car.place(p.x, p.z, p.h, 0); });
  // 上空から東口〜サンシャイン
  await pg.evaluate(() => { const g = window.__dbg.game; const { geo } = window.__dbgMap; const p = geo(35.7295, 139.7155); g.mode.update = () => {}; const cam = g.rig.camera; cam.position.set(p.x - 160, 170, p.z + 170); cam.lookAt(p.x + 30, 0, p.z - 20); cam.fov = 55; cam.updateProjectionMatrix(); });
  await pg.waitForTimeout(900);
  await pg.screenshot({ path: OUT + '/85_east_aerial.png' });
};
