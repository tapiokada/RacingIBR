// 榛名山：タイムアタック（AI運転）でスクリーンショット
module.exports = async (pg, OUT) => {
  const key = process.env.LAYOUT || 'haruna_s2_d';
  const t0 = Date.now();
  await pg.evaluate((key) => {
    const { game } = window.__dbg; const { PracticeMode } = window.__dbgModes; const MAP = window.__dbgMap;
    const layout = MAP.LAYOUTS.find((l) => l.key === key);
    game.setMode(new PracticeMode(game, { layout, carId: '86-GR', equipped: { ...MAP_CARS() }, color: '#d8d8e0', kind: 'ta' }));
    function MAP_CARS() { return window.__dbgStock('86-GR'); }
  }, key);
  console.log('enter ms', Date.now() - t0);
  await pg.waitForTimeout(800);
  await pg.screenshot({ path: OUT + '/h0_grid.png' });
  const setAI = () => pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 1.0); m.P.car.auto = true;
     const orig = m.session.readPlayerInput.bind(m.session); m.session.readPlayerInput = (dt) => { if (m.state==='run') ai.update(dt, []); else orig(dt); }; });
  await setAI();
  for (const [i, sec, view] of [[1, 12, 'chase'], [2, 20, 'chase'], [3, 15, 'cockpit'], [4, 15, 'hood'], [5, 20, 'chase']]) {
    const info = await pg.evaluate(([sec, view]) => { const { game } = window.__dbg; game.rig.mode = view; game.rig.reset(); game.debugStep(sec); const c = game.mode.P.car; return { kmh: c.kmh | 0, y: c.y.toFixed(1), gy: c.gy.toFixed(1), gp: (c.gp * 57.3).toFixed(1), state: game.mode.state, dist: game.mode.tracker.dist | 0 }; }, [sec, view]);
    await pg.waitForTimeout(400);
    await pg.screenshot({ path: OUT + `/h${i}_${view}.png` });
    console.log(i, JSON.stringify(info));
  }
};
