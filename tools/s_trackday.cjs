// ストーリー：街のポーズメニューからサーキット走行会へ → 1周 → 結果 → 街へ戻る
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownMode, newGameState } = window.__dbgModes;
    game.story = newGameState(); game.story.money = 100000;
    game.setMode(new TownMode(game));
  });
  await pg.waitForTimeout(1500);
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(500);
  await pg.screenshot({ path: OUT + '/d_pause.png' });
  const labels = await pg.evaluate(() => [...document.querySelectorAll('.menu-item')].map((b) => b.textContent));
  const idx = labels.findIndex((l) => l.includes('サーキット走行会'));
  console.log('menu', idx, labels[idx]);
  await pg.evaluate((i) => document.querySelectorAll('.menu-item')[i].click(), idx); await pg.waitForTimeout(2500);
  console.log('mode', await pg.evaluate(() => [window.__dbg.game.mode.constructor.name, window.__dbg.game.story.money]));
  await pg.screenshot({ path: OUT + '/d_start.png' });
  await pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 1.0); m.P.car.auto = true;
    m.session.readPlayerInput = (dt) => ai.update(dt, []); m.remain = 100; });
  await pg.evaluate(() => window.__dbg.game.debugStep(200));
  await pg.waitForTimeout(2000);
  await pg.screenshot({ path: OUT + '/d_result.png' });
  console.log(JSON.stringify(await pg.evaluate(() => { const g = window.__dbg.game; const m = g.mode; return { state: m.state, laps: m.tracker.laps, rec: g.story.trackday, fuel: g.story.garage[0].fuel }; })));
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(2500);
  console.log('back', await pg.evaluate(() => window.__dbg.game.mode.constructor.name));
  await pg.screenshot({ path: OUT + '/d_back.png' });
};
