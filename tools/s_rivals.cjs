// Storyの街でライバルが走り続けるか（60秒×2回）
module.exports = async (pg, OUT) => {
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  for (let k = 0; k < 3; k++) {
    const r = await pg.evaluate(() => {
      const g = window.__dbg.game, m = g.mode;
      const stats = new Map();
      for (let i = 0; i < 60 * 60; i++) {
        g.debugStep(1 / 60);
        for (const e of m.session.entries) if (e.rival) { const s = stats.get(e) || { slow: 0, max: 0, name: e.rival.name }; s.slow = e.car.speed < 0.5 ? s.slow + 1 : 0; s.max = Math.max(s.max, s.slow); stats.set(e, s); }
      }
      return [...stats.values()].map((s) => `${s.name}:最長停止${(s.max / 60).toFixed(1)}s`);
    });
    console.log(r.join(' '));
  }
  await pg.screenshot({ path: OUT + '/70_town_rivals.png' });
};
