// つくば山麓サーキット：タイムアタック（AI運転）の各所スクリーンショット
module.exports = async (pg, OUT) => {
  const KEY = process.env.KEY || 'tsukuba_2000', P = KEY.split('_')[0];
  await pg.evaluate((k) => { window.__KEY = k; }, KEY);
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { PracticeMode } = window.__dbgModes; const MAP = window.__dbgMap;
    const layout = MAP.LAYOUTS.find((l) => l.key === (window.__KEY || 'tsukuba_2000'));
    game.setMode(new PracticeMode(game, { layout, carId: '86-GR', equipped: window.__dbgStock('86-GR'), color: '#d8d8e0', kind: 'ta' }));
  });
  await pg.waitForTimeout(800);
  await pg.screenshot({ path: OUT + `/${P}_grid.png` });
  await pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 1.0); m.P.car.auto = true;
    const orig = m.session.readPlayerInput.bind(m.session); m.session.readPlayerInput = (dt) => { if (m.state === 'run') ai.update(dt, []); else orig(dt); }; });
  const shots = (process.env.SHOTS || '9,8,7,8,10,6,10,9').split(',').map((v, i) => [+v, `${P}_${i}`]);
  for (const [sec, name] of shots) {
    await pg.evaluate((s) => window.__dbg.game.debugStep(s), sec);
    await pg.waitForTimeout(400);
    await pg.screenshot({ path: OUT + '/' + name + '.png' });
  }
  const info = await pg.evaluate(() => { const m = window.__dbg.game.mode; return { s: m.tracker.dist, laps: m.tracker.laps }; });
  console.log(JSON.stringify(info));
};
