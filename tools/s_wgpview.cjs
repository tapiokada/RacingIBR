module.exports = async (pg, OUT) => {
  const step = (ms = 150) => pg.waitForTimeout(ms);
  await pg.keyboard.press('ArrowDown'); await step(); await pg.keyboard.press('Enter'); await step(300);
  await pg.keyboard.press('ArrowDown'); await step(); await pg.keyboard.press('Enter'); await step(300); // FREE RUN
  for (let i = 0; i < 3; i++) { await pg.keyboard.press('ArrowDown'); await step(80); } // 池袋WGP 順走
  await pg.keyboard.press('Enter'); await step(300); await pg.keyboard.press('Enter'); await pg.waitForTimeout(2000);
  const shot = async (name, s, lat = 0) => {
    await pg.evaluate(([s, lat]) => { const m = window.__dbg.game.mode; const p = m.path.posAt(s, lat); m.P.car.place(p.x, p.z, p.h, 0); window.__dbg.game.rig.reset(); window.__dbg.game.debugStep(0.3); }, [s, lat]);
    await pg.waitForTimeout(700); await pg.screenshot({ path: OUT + '/' + name + '.png' });
  };
  const info = await pg.evaluate(() => window.__dbg.game.mode.path.ids.join(','));
  console.log(info);
  await shot('60_wgp_a', 120); await shot('61_wgp_b', 240); await shot('62_wgp_c', 330);
};
