// 86-GR（GLBモデル）の見た目確認：ガレージ各方向・街の後方/運転席視点
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownMode, newGameState } = window.__dbgModes;
    const st = newGameState(); game.story = st;
    game.setMode(new TownMode(game, { area: 'west' }));
  });
  await pg.waitForTimeout(1200);
  await pg.screenshot({ path: OUT + '/m0_chase.png' });
  await pg.evaluate(() => { const g = window.__dbg.game; g.rig.mode = 'cockpit'; });
  await pg.waitForTimeout(500); await pg.screenshot({ path: OUT + '/m1_cockpit.png' });
  await pg.evaluate(() => { const g = window.__dbg.game; g.rig.mode = 'hood'; });
  await pg.waitForTimeout(500); await pg.screenshot({ path: OUT + '/m2_hood.png' });
  await pg.evaluate(() => { const g = window.__dbg.game; g.rig.mode = 'chase'; g.mode.session.player.car.input = { throttle: 0, brake: 0, steer: 1 }; });
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(300);
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  for (const [k, n] of [['Digit1', 'front'], ['Digit2', 'rear'], ['Digit3', 'left'], ['Digit5', 'top']]) { await pg.keyboard.press(k); await pg.waitForTimeout(1200); await pg.screenshot({ path: OUT + `/m3_${n}.png` }); }
  await pg.keyboard.press('KeyG'); await pg.keyboard.press('KeyV'); await pg.evaluate(() => { const m = window.__dbg.game.mode; m.tYaw = 0.8; m.tPitch = 0.25; m.tDist = 5.5; });
  await pg.waitForTimeout(1500); await pg.screenshot({ path: OUT + '/m4_garage_close.png' });
};
