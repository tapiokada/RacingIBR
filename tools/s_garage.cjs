// ガレージ：中古車購入→ガレージで全方位確認→乗り換え→街
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownMode, newGameState } = window.__dbgModes;
    const st = newGameState(); st.money = 5000000; game.story = st;
    game.setMode(new TownMode(game, { area: 'west' }));
  });
  await pg.waitForTimeout(1200);
  // ショップの中古車タブで R34 と RS を購入
  await pg.evaluate(() => window.__dbg.game.mode.openShop());
  await pg.waitForTimeout(300);
  for (let i = 0; i < 3; i++) await pg.keyboard.press('Tab');
  await pg.waitForTimeout(200);
  await pg.screenshot({ path: OUT + '/g0_dealer.png' });
  await pg.evaluate(() => { const rows = [...document.querySelectorAll('.part-row')]; rows.find((r) => r.textContent.includes('R34-GTR')).querySelector('.buy').click(); rows.find((r) => r.textContent.includes('RS-RS')).querySelector('.buy').click(); });
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(1200);
  console.log('garage', await pg.evaluate(() => window.__dbg.game.story.garage.map((c) => c.carId).join(',') + ' money ' + window.__dbg.game.story.money));
  // ポーズ→ガレージ
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(300);
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  await pg.screenshot({ path: OUT + '/g1_garage.png' });
  await pg.keyboard.press('ArrowDown'); await pg.waitForTimeout(200);
  for (const [k, n] of [['Digit3', 'left'], ['Digit5', 'top'], ['Digit6', 'under']]) { await pg.keyboard.press(k); await pg.waitForTimeout(1200); await pg.screenshot({ path: OUT + `/g2_${n}.png` }); }
  // 乗り換え
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300); await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  console.log('active', await pg.evaluate(() => window.__dbg.game.story.active));
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(1500);
  console.log('town car', await pg.evaluate(() => { const m = window.__dbg.game.mode; return m.session.player.carId + ' ' + m.session.player.car.spec.drive; }));
  await pg.screenshot({ path: OUT + '/g3_town.png' });
};
