module.exports = async (pg, OUT) => {
  const G = 'window.__dbg.game';
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  // ライバルの後ろへ
  await pg.evaluate(() => { const m = window.__dbg.game.mode; const e = m.session.entries.find(x=>x.rival); const c = m.session.player.car; const [f0,f1]=e.car.fwd(); c.place(e.car.x - f0*18, e.car.z - f1*18, e.car.h, e.car.speed); });
  await pg.keyboard.press('KeyH');
  await pg.evaluate(() => window.__dbg.game.debugStep(1));
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1200);
  // プレイヤー車をAI運転に
  const info = await pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 1.0); m.P.car.auto = true; m.session.controlsEnabled = true; 
     const orig = m.session.readPlayerInput.bind(m.session); m.session.readPlayerInput = (dt) => { if (m.state==='race') ai.update(dt, [m.R.car]); else orig(dt); }; 
     game.debugStep(200); return { state: m.state, res: m.result, t: m.raceT, tp: m.tp.dist|0, tr: m.tr.dist|0, layout: m.opts.layout.key }; });
  console.log(JSON.stringify(info));
  await pg.waitForTimeout(800);
  await pg.screenshot({ path: OUT + '/11_result.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1800);
  const st = await pg.evaluate(() => { const g = window.__dbg.game; return { mode: g.mode.constructor.name, wins: g.story.wins, money: g.story.money, owned: g.story.owned }; });
  console.log(JSON.stringify(st));
  // ショップへテレポート
  await pg.evaluate(() => { const g = window.__dbg.game; const m = g.mode; const sh = g.world.poiMarkers.find(p=>p.poi.type==='shop'); m.session.player.car.place(sh.x, sh.z, 0, 0); });
  await pg.evaluate(() => window.__dbg.game.debugStep(0.3));
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(500);
  await pg.screenshot({ path: OUT + '/12_shop.png' });
  await pg.keyboard.press('ArrowRight'); await pg.waitForTimeout(200);
  await pg.keyboard.press('Tab'); await pg.waitForTimeout(300);
  await pg.screenshot({ path: OUT + '/13_shop_buy.png' });
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(800);
  const st2 = await pg.evaluate(() => { const g = window.__dbg.game; return { mode: g.mode.constructor.name, eq: g.story.garage[0].equipped }; });
  console.log(JSON.stringify(st2));
  // GSでセーブ
  await pg.evaluate(() => { const g = window.__dbg.game; const m = g.mode; const gs = g.world.poiMarkers.find(p=>p.poi.type==='gs'); m.session.player.car.place(gs.x, gs.z, Math.PI, 0); });
  await pg.evaluate(() => window.__dbg.game.debugStep(0.3));
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  await pg.screenshot({ path: OUT + '/14_save.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  console.log('saved', await pg.evaluate(() => !!localStorage.getItem('ibr.save.v1')));
};
