// 榛名山：バトル（プレイヤーもAIで走らせる）→結果、タイムアタック→リプレイ
module.exports = async (pg, OUT) => {
  const key = process.env.LAYOUT || 'haruna_s3_u';
  await pg.evaluate((key) => {
    const { game } = window.__dbg; const { BattleMode, newGameState, RIVAL_BY_ID } = window.__dbgModes; const MAP = window.__dbgMap;
    const st = newGameState(); st.wins = 12; game.story = st;
    const layout = MAP.LAYOUTS.find((l) => l.key === key);
    game.setMode(new BattleMode(game, { rival: RIVAL_BY_ID.kaede, layout, returnPos: { x: 0, z: 0, h: 0, area: 'haruna' } }));
  }, key);
  await pg.waitForTimeout(800);
  await pg.evaluate(() => { const { game, RaceAI } = window.__dbg; const m = game.mode; const ai = new RaceAI(m.P.car, m.path, 0.95); m.P.car.auto = true;
    const orig = m.session.readPlayerInput.bind(m.session); m.session.readPlayerInput = (dt) => { if (m.state === 'race') ai.update(dt, [m.R.car]); else orig(dt); }; });
  for (let i = 0; i < 4; i++) {
    const info = await pg.evaluate(() => { const { game } = window.__dbg; game.debugStep(15); const m = game.mode; return { state: m.state, t: m.raceT.toFixed(1), p: m.tp.dist | 0, r: m.tr.dist | 0, total: m.total | 0, res: m.result }; });
    console.log(JSON.stringify(info));
    await pg.waitForTimeout(300);
    await pg.screenshot({ path: OUT + `/b${i}.png` });
    if (info.res) break;
  }
  const end = await pg.evaluate(() => { const { game } = window.__dbg; game.debugStep(200); const m = game.mode; return { state: m.state, res: m.result, t: m.raceT.toFixed(1), p: m.tp.dist | 0, r: m.tr.dist | 0 }; });
  console.log('end', JSON.stringify(end));
  await pg.waitForTimeout(400);
  await pg.screenshot({ path: OUT + '/b_result.png' });
};
