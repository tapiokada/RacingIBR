module.exports = async (pg, OUT) => {
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(200); // PRACTICE
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(200); // TIME ATTACK
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(200); // wgp_f
  await pg.screenshot({ path: OUT + '/20_setup.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  const info = await pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 1.0); m.P.car.auto = true;
     const orig = m.session.readPlayerInput.bind(m.session); m.session.readPlayerInput = (dt) => { if (m.state==='run') ai.update(dt, []); else orig(dt); };
     game.debugStep(60); return { mode: m.constructor.name, state: m.state, laps: m.tracker.laps, sectors: m.tracker.sectors, layout: m.opts.layout.key }; });
  console.log(JSON.stringify(info));
  await pg.screenshot({ path: OUT + '/21_ta_run.png' });
  await pg.evaluate(() => window.__dbg.game.debugStep(120));
  await pg.waitForTimeout(2500);
  await pg.screenshot({ path: OUT + '/22_ta_result.png' });
  console.log(await pg.evaluate(() => JSON.stringify(Object.fromEntries(Object.entries(JSON.parse(localStorage.getItem('ibr.records.v1')||'{}')).map(([k,v])=>[k,v.map(r=>r.best)])))));
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500); // replay
  await pg.evaluate(() => { window.__dbg.game.mode.t = 20; });
  for (const [i, v] of ['chase','cockpit','hood','gallery'].entries()) {
    await pg.keyboard.press('Digit' + (i+1)); await pg.waitForTimeout(700);
    await pg.screenshot({ path: OUT + `/2${3+i}_replay_${v}.png` });
  }
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(1200);
  console.log('after replay mode', await pg.evaluate(() => window.__dbg.game.mode.constructor.name));
};
