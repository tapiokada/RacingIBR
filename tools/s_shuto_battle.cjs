// ストーリーの首都高バトル：西池袋の北池袋入口（12勝で解放）→ 5号 → C1外回り。ライバルにパッシング → 80km/h の自動走行 → ウィンドウ → その場でバトル → SPゲージで決着
module.exports = async (pg, OUT) => {
  const st = () => pg.evaluate(() => { const g = window.__dbg.game, m = g.mode, c = m.P?.car || m.session?.player?.car; const bt = m.bt; return { mode: m.constructor.name, area: m.area, lane: m.cur?.lane, v: c ? +(c.speed * 3.6).toFixed(0) : null, rivals: m.session?.entries.filter((e) => e.rival).map((e) => e.rival.id + ':' + (e.car.speed * 3.6).toFixed(0)), bt: bt && { phase: bt.phase, gap: bt.gap && +bt.gap.toFixed(1), spP: bt.spP && +bt.spP.toFixed(1), spR: bt.spR && +bt.spR.toFixed(1), rv: +(bt.e.car.speed * 3.6).toFixed(0) }, dialog: !!m.dialog, wins: g.story.wins, money: g.story.money }; });
  await pg.evaluate(() => { const { game } = window.__dbg; const { TownMode, newGameState } = window.__dbgModes; game.story = newGameState(); game.story.wins = 12; game.story.money = 100000; game.setMode(new TownMode(game, { area: 'west' })); });
  await pg.waitForTimeout(1500);
  // 入口へ
  await pg.evaluate(() => { const g = window.__dbg.game, m = g.mode, N = window.__dbgMap.NODES, A = N.HI_A, B = N.HI_B; const h = Math.atan2(B.x - A.x, B.z - A.z); m.session.player.car.place(A.x, A.z, h, 11); m.session.readPlayerInput = () => { m.session.player.car.input = { throttle: 0.3, brake: 0, steer: 0 }; }; });
  for (let k = 0; k < 20; k++) { const s = await st(); if (s.area === 'shuto5') break; await pg.evaluate(() => window.__dbg.game.debugStep(0.5)); await pg.waitForTimeout(250); }
  await pg.waitForTimeout(1200);
  console.log('shuto5', JSON.stringify(await st()));
  // C1 外回りへ直接（5号の走行は s_shuto.cjs で確認済み）
  await pg.evaluate(() => { const { game } = window.__dbg; const { ShutoFreeMode } = window.__dbgModes; const C = window.__dbgCircuit.CIRCUITS.c1_outer; game.setMode(new ShutoFreeMode(game, { story: true, area: 'c1', lane: 'c1_outer', pose: window.__dbgLanePose(C, 600), speed: 22 })); });
  await pg.waitForTimeout(1500);
  console.log('c1', JSON.stringify(await st()));
  // ライバルの後ろへ置いてパッシング
  await pg.evaluate(() => { const m = window.__dbg.game.mode; const e = m.session.entries.find((x) => x.rival); const pr = m.path.project(e.car.x, e.car.z, -1); const p = m.path.posAt(pr.s - 30, pr.lat); m.P.car.place(p.x, p.z, p.h, e.car.speed); });
  await pg.evaluate(() => window.__dbg.game.debugStep(0.1));
  await pg.evaluate(() => { const m = window.__dbg.game.mode; window.__flashT = m.findFlashTarget(); if (window.__flashT) m.challenge(window.__flashT); });
  await pg.evaluate(() => window.__dbg.game.debugStep(2));
  console.log('encounter', JSON.stringify(await st()));
  await pg.screenshot({ path: OUT + '/sb_encounter.png' });
  // バトルする
  await pg.keyboard.press('Enter');
  await pg.waitForTimeout(200);
  await pg.evaluate(() => window.__dbg.game.debugStep(4));
  console.log('start', JSON.stringify(await st()));
  // プレイヤーはアクセルを踏まない（負ける）
  await pg.evaluate(() => { const m = window.__dbg.game.mode; m.session.readPlayerInput = () => { if (!m.P.ai) m.P.car.input = { throttle: 0.25, brake: 0, steer: 0 }; }; });
  for (let k = 0; k < 12; k++) { await pg.evaluate(() => window.__dbg.game.debugStep(3)); const s = await st(); console.log(' t', JSON.stringify(s.bt), s.v); if (!s.bt || s.bt.phase !== 'race') break; if (k === 2) await pg.screenshot({ path: OUT + '/sb_battle.png' }); }
  console.log('end', JSON.stringify(await st()));
  await pg.screenshot({ path: OUT + '/sb_result.png' });
  await pg.keyboard.press('Enter');
  await pg.waitForTimeout(300);
  console.log('after', JSON.stringify(await st()));
  // リセットの向き：後ろ向きにしてリセット
  const r = await pg.evaluate(() => { const m = window.__dbg.game.mode, c = m.P.car; c.place(c.x, c.z, c.h + Math.PI, 0); m.session.resetPlayer(); const w = m.where(); const C = w.C, i = m.game.world.ground.nearest(c.x, c.z, c.y).i; return { h: c.h, laneH: Math.atan2(C.tx[0] !== undefined ? 0 : 0, 1), dot: Math.sin(c.h) * m.path.tx[m.path.project(c.x, c.z, -1).i] + Math.cos(c.h) * m.path.tz[m.path.project(c.x, c.z, -1).i] }; });
  // 勝ちのパターン：次のライバルに挑み、ライバルを遅くする
  await pg.evaluate(() => { const m = window.__dbg.game.mode; const e = m.session.entries.find((x) => x.rival && !(x.cool > 0)) || m.session.entries.find((x) => x.rival); e.cool = 0; const pr = m.path.project(e.car.x, e.car.z, -1); const p = m.path.posAt(pr.s - 25, pr.lat); m.P.car.place(p.x, p.z, p.h, e.car.speed); m.challenge(e); });
  await pg.evaluate(() => window.__dbg.game.debugStep(2));
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(200);
  await pg.evaluate(() => window.__dbg.game.debugStep(4.5));
  console.log('start2', JSON.stringify(await st()));
  await pg.evaluate(() => { const m = window.__dbg.game.mode; m.bt.e.ai.vmax = 15; window.__ai2 = new window.__dbg.RaceAI(m.P.car, m.path, 0.9, { mistakes: false }); m.session.readPlayerInput = (dt) => { if (!m.P.ai && m.session.controlsEnabled) window.__ai2.update(dt, []); }; });
  for (let k = 0; k < 12; k++) { await pg.evaluate(() => window.__dbg.game.debugStep(3)); const s = await st(); console.log(' t', JSON.stringify(s.bt), s.v); if (!s.bt || s.bt.phase !== 'race') break; }
  await pg.screenshot({ path: OUT + '/sb_win.png' });
  await pg.keyboard.press('Enter'); await pg.waitForTimeout(300);
  console.log('after win', JSON.stringify(await st()), await pg.evaluate(() => JSON.stringify(window.__dbg.game.story.owned)));
  console.log('reset dot (should be ~1)', r.dot.toFixed(3));
};
