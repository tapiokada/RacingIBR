// 榛名山：タイムアタック完走 → 記録 → リプレイ
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { PracticeMode } = window.__dbgModes; const MAP = window.__dbgMap;
    const layout = MAP.LAYOUTS.find((l) => l.key === 'haruna_s3_d');
    game.setMode(new PracticeMode(game, { layout, carId: '86-GR', equipped: window.__dbgStock('86-GR'), color: '#d8d8e0', kind: 'ta' }));
  });
  await pg.waitForTimeout(500);
  const info = await pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 1.0); m.P.car.auto = true;
    const orig = m.session.readPlayerInput.bind(m.session); m.session.readPlayerInput = (dt) => { if (m.state === 'run') ai.update(dt, []); else orig(dt); };
    game.debugStep(140); return { state: m.state, laps: m.tracker.laps, sectors: m.tracker.sectors }; });
  console.log(JSON.stringify(info));
  await pg.waitForTimeout(2500);
  await pg.screenshot({ path: OUT + '/t_result.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  await pg.evaluate(() => { window.__dbg.game.mode.t = 40; });
  await pg.keyboard.press('Digit4'); await pg.waitForTimeout(700);
  await pg.screenshot({ path: OUT + '/t_replay_gallery.png' });
  await pg.keyboard.press('Digit1'); await pg.waitForTimeout(700);
  await pg.screenshot({ path: OUT + '/t_replay_chase.png' });
  console.log('mode', await pg.evaluate(() => { const m = window.__dbg.game.mode; return [m.constructor.name, m.opts.replay.stride, m.ghost.gy.toFixed(1)]; }));
};
