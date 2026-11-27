// ガレージ → サーキットのタイムランキング（筑波・鈴鹿・富士、クラス切り替え）
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownMode, GarageMode, newGameState } = window.__dbgModes;
    game.story = newGameState(); game.story.wins = 8;
    game.story.circuitLaps = { tsukuba_2000: { time: 66.789, carId: '86-GR', pwr: 5.4, src: 'qualify', date: new Date().toISOString() } };
    game.story.trackday = { fuji_gp: { best: 118.4, carId: '86-GR' } }; // 古いセーブ（走行会のベストだけ）
    game.setMode(new GarageMode(game, { area: 'west', returnPos: null, view: 'chase', townMode: TownMode }));
  });
  await pg.waitForTimeout(1200);
  await pg.keyboard.press('KeyT'); await pg.waitForTimeout(400);
  await pg.screenshot({ path: OUT + '/cr_list.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(400);
  await pg.screenshot({ path: OUT + '/cr_tsukuba.png' });
  await pg.keyboard.press('ArrowRight'); await pg.waitForTimeout(150); await pg.keyboard.press('ArrowRight'); await pg.waitForTimeout(150); await pg.keyboard.press('ArrowRight'); await pg.waitForTimeout(400);
  await pg.screenshot({ path: OUT + '/cr_tsukuba_C.png' });
  console.log('rows', await pg.evaluate(() => document.querySelectorAll('.rank-table tr').length - 1));
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(300);
  console.log('after esc1', await pg.evaluate(() => [document.querySelectorAll('.ranking').length, document.querySelector('.ranking .panel-title')?.textContent]));
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(300);
  console.log('after esc2', await pg.evaluate(() => document.querySelectorAll('.ranking').length));
  console.log('busy', await pg.evaluate(() => window.__dbg.game.mode.busy), await pg.evaluate(() => window.__dbg.game.mode.constructor.name));
};
