// 榛名山：ストーリー（街流し・ライバル・ポーズ→セッティング・ショップ）
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownMode, newGameState } = window.__dbgModes;
    const st = newGameState(); st.wins = 12; st.money = 3000000;
    for (const id of ['sus_full', 'brk_full', 'tm_full', 'tire_high', 'aero_wing']) st.owned[id] = 1;
    Object.assign(st.garage[0].equipped, { suspension: 'sus_full', brake: 'brk_full', transmission: 'tm_full', tire: 'tire_high', aero: 'aero_wing' });
    game.story = st;
    game.setMode(new TownMode(game, { area: 'haruna' }));
  });
  await pg.waitForTimeout(1500);
  await pg.screenshot({ path: OUT + '/s0_town.png' });
  const info = await pg.evaluate(() => { const { game } = window.__dbg; game.debugStep(8); const m = game.mode; return { rivals: m.session.entries.filter((e) => e.rival).map((e) => e.rival.name + ' ' + e.car.kmh.toFixed(0) + 'km/h y' + e.car.gy.toFixed(0)), py: m.session.player.car.gy.toFixed(1) }; });
  console.log(JSON.stringify(info));
  // ポーズ→セッティング
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(300);
  await pg.screenshot({ path: OUT + '/s1_pause.png' });
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(500);
  await pg.screenshot({ path: OUT + '/s2_setup.png' });
  // 車高(前)を下げる、固有振動数を上げる
  await pg.keyboard.press('ArrowLeft'); await pg.keyboard.press('ArrowLeft');
  for (let i = 0; i < 2; i++) await pg.keyboard.press('ArrowDown');
  await pg.keyboard.press('ArrowRight');
  await pg.waitForTimeout(200);
  const st2 = await pg.evaluate(() => { const g = window.__dbg.game; return { setup: g.story.garage[0].setup && { rideF: g.story.garage[0].setup.rideF, freqF: g.story.garage[0].setup.freqF }, kF: g.mode.session.player.car.spec.susp.kF | 0 }; });
  console.log('setup', JSON.stringify(st2));
  // ギア比までスクロール
  for (let i = 0; i < 26; i++) await pg.keyboard.press('ArrowDown');
  await pg.waitForTimeout(200);
  await pg.screenshot({ path: OUT + '/s3_setup_gears.png' });
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(300);
  // ショップ
  await pg.evaluate(() => { const g = window.__dbg.game; g.mode.openShop(); });
  await pg.waitForTimeout(400);
  await pg.keyboard.press('Tab'); await pg.waitForTimeout(200);
  await pg.screenshot({ path: OUT + '/s4_shop_buy.png' });
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(800);
  console.log('mode', await pg.evaluate(() => window.__dbg.game.mode.constructor.name));
};
