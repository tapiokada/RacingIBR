// パーシャルアクセル/ブレーキ（G/B）、セッティングのTCS/ABS、スピン防止アシスト
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownFreeMode } = window.__dbgModes;
    game.settings.spinAssist = true;
    game.setMode(new TownFreeMode(game, { carId: '86-GR', equipped: window.__dbgStock('86-GR'), color: 0xeeeeee, area: 'west', setup: { tcsLevel: 4, partialThrottle: 35, partialBrake: 60 }, setupKey: null }));
  });
  await pg.waitForTimeout(800);
  const c0 = await pg.evaluate(() => { const c = window.__dbg.game.mode.P.car; return { tcs: c.tcsLevel, abs: c.absLevel, assist: c.spinAssist }; });
  await pg.keyboard.down('g'); await pg.waitForTimeout(600);
  const thr = await pg.evaluate(() => window.__dbg.game.mode.P.car.input.throttle.toFixed(2));
  await pg.keyboard.up('g'); await pg.keyboard.down('b'); await pg.waitForTimeout(600);
  const brk = await pg.evaluate(() => window.__dbg.game.mode.P.car.input.brake.toFixed(2));
  await pg.keyboard.up('b');
  // セッティングでTCSを変更 → 即反映
  await pg.evaluate(() => window.__dbg.game.mode.openSetting());
  await pg.waitForTimeout(300);
  await pg.keyboard.press('ArrowRight'); await pg.keyboard.press('ArrowRight');
  await pg.screenshot({ path: OUT + '/as_setup.png' });
  const c1 = await pg.evaluate(() => window.__dbg.game.mode.P.car.tcsLevel);
  console.log(JSON.stringify({ c0, partialThrottle: thr, partialBrake: brk, tcsAfter: c1 }));
};
