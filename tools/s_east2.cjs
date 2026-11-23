// 東池袋：バトル（AIでプレイヤーを走らせる）→結果→街に戻る、GSでセーブ→Continueで東池袋から再開、ポーズからエリア切替
module.exports = async (pg, OUT) => {
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  // ポーズ→エリア切り替え
  await pg.keyboard.press('Escape'); await pg.waitForTimeout(300);
  await pg.keyboard.press('ArrowDown'); await pg.keyboard.press('Enter'); await pg.waitForTimeout(2500);
  console.log('after pause switch', await pg.evaluate(() => window.__dbg.game.area + ' ' + window.__dbg.game.mode.area));
  // ライバルの後ろでパッシング→バトル
  await pg.evaluate(() => { const m = window.__dbg.game.mode; const e = m.session.entries.find((x) => x.rival); const c = m.session.player.car; const [f0, f1] = e.car.fwd(); c.place(e.car.x - f0 * 18, e.car.z - f1 * 18, e.car.h, e.car.speed); });
  await pg.keyboard.press('KeyH'); await pg.evaluate(() => window.__dbg.game.debugStep(1));
  await pg.screenshot({ path: OUT + '/86_east_encounter.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(1500);
  const info = await pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 1.0); m.P.car.auto = true;
    const orig = m.session.readPlayerInput.bind(m.session); m.session.readPlayerInput = (dt) => { if (m.state === 'race') ai.update(dt, [m.R.car]); else orig(dt); };
    game.debugStep(260); return { area: game.area, layout: m.opts.layout.key, rival: m.opts.rival.name, state: m.state, res: m.result }; });
  console.log('battle', JSON.stringify(info));
  await pg.waitForTimeout(500);
  await pg.screenshot({ path: OUT + '/87_east_result.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(2000);
  console.log('back', await pg.evaluate(() => window.__dbg.game.area + ' ' + window.__dbg.game.mode.area + ' wins=' + window.__dbg.game.story.wins));
  // 東のGSでセーブ
  await pg.evaluate(() => { const g = window.__dbg.game; const gs = g.world.poiMarkers.find((p) => p.poi.type === 'gs'); g.mode.session.player.car.place(gs.x, gs.z, 0, 0); g.debugStep(0.3); });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300); await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  console.log('saved', await pg.evaluate(() => JSON.stringify(JSON.parse(localStorage.getItem('ibr.save.v1')).pos)));
  // ゲート（明治通りの南端）で西池袋へ
  await pg.evaluate(() => { const g = window.__dbg.game; const { NODES } = window.__dbgMap; const a = NODES.MJ_S, b = NODES.MJ_OUT; g.mode.session.player.car.place(a.x + (b.x - a.x) * 0.85, a.z + (b.z - a.z) * 0.85, Math.atan2(b.x - a.x, b.z - a.z), 5); g.debugStep(1.0); });
  await pg.waitForTimeout(2500);
  console.log('gate south', await pg.evaluate(() => window.__dbg.game.area + ' ' + JSON.stringify([window.__dbg.game.mode.session.player.car.x | 0, window.__dbg.game.mode.session.player.car.z | 0])));
};
