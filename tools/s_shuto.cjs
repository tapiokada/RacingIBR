// 首都高 FREE RUN：西池袋タウンの北池袋入口 → 5号上り → 竹橋JCT → C1外回り → 5号下り → 北池袋出口 → 西池袋タウン
// プレイヤーの車は AI（片道の車線をたどる）で走らせ、エリアの自動切り替えを確認する
module.exports = async (pg, OUT) => {
  const st = () => pg.evaluate(() => { const g = window.__dbg.game, m = g.mode, c = m.P?.car; return { mode: m.constructor.name, area: m.area, lane: m.cur?.lane, s: m.cur ? +m.cur.s.toFixed(0) : null, v: c ? +(c.speed * 3.6).toFixed(0) : null, x: c && +c.x.toFixed(0), z: c && +c.z.toFixed(0), y: c && +c.y.toFixed(1) }; });
  // 西池袋 FREE RUN、入口の手前（川越街道 K1 付近・南東向き）
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownFreeMode } = window.__dbgModes; const MAP = window.__dbgMap;
    const N = MAP.NODES, A = N.K1, B = N.HI_A, h = Math.atan2(B.x - A.x, B.z - A.z);
    game.setMode(new TownFreeMode(game, { carId: '86-GR', equipped: window.__dbgStock('86-GR'), color: '#d8d8e0', area: 'west', pos: { x: A.x, z: A.z, h } }));
  });
  await pg.waitForTimeout(1200);
  await pg.screenshot({ path: OUT + '/h_town.png' });
  // 入口へ向けて走る（ゲートの位置へまっすぐ置き直して少し進める）
  await pg.evaluate(() => { const g = window.__dbg.game, m = g.mode, N = window.__dbgMap.NODES, A = N.HI_A, B = N.HI_B; const h = Math.atan2(B.x - A.x, B.z - A.z); m.P.car.place(A.x, A.z, h, 11); m.session.readPlayerInput = () => { m.P.car.input = { throttle: 0.3, brake: 0, steer: 0 }; }; });
  for (let k = 0; k < 20; k++) { const s = await st(); if (s.area === 'shuto5') break; await pg.evaluate(() => window.__dbg.game.debugStep(0.5)); await pg.waitForTimeout(250); }
  await pg.waitForTimeout(1200);
  console.log('after gate', JSON.stringify(await st()));
  await pg.evaluate(() => window.__dbg.game.debugStep(0.3));
  await pg.screenshot({ path: OUT + '/h_s5start.png' });
  // 5号上り：AI で竹橋JCT まで（分岐は外回り＝UO）
  const drive = (laneKey) => pg.evaluate((k) => {
    const { game, RaceAI } = window.__dbg; const m = game.mode;
    const P = window.__dbgCircuit; const C = k.startsWith('c1') ? P.CIRCUITS[k] : P.SHUTO5[k];
    const path = new P.LanePath(C, m.session.corridor);
    const ai = new RaceAI(m.P.car, path, 0.85, { mistakes: false }); m.P.car.auto = true;
    m.session.readPlayerInput = (dt) => ai.update(dt, []);
  }, laneKey);
  await drive('U');
  for (let k = 0; k < 30; k++) { const s = await st(); if (s.lane !== 'U') break; await pg.evaluate(() => window.__dbg.game.debugStep(10)); }
  console.log('fork', JSON.stringify(await st()));
  await pg.screenshot({ path: OUT + '/h_fork.png' });
  await drive('UO');
  for (let k = 0; k < 30; k++) { const s = await st(); if (s.area === 'c1') break; await pg.evaluate(() => window.__dbg.game.debugStep(1)); await pg.waitForTimeout(300); }
  await pg.waitForTimeout(1200);
  console.log('c1', JSON.stringify(await st()));
  await pg.screenshot({ path: OUT + '/h_c1merge.png' });
  // C1 外回りを1周近く走って、5号への分岐（DO）へ
  await pg.evaluate(() => { const { game } = window.__dbg; const m = game.mode; const P = window.__dbgCircuit; const C = P.CIRCUITS.c1_outer; const s = (P.SHUTO5.DO.fromS - 250 + C.length) % C.length; const p = window.__dbgLanePose(C, s); m.P.car.place(p.x, p.z, p.h, 15); });
  await drive('DO');
  for (let k = 0; k < 40; k++) { const s = await st(); if (s.area === 'shuto5') break; await pg.evaluate(() => window.__dbg.game.debugStep(1)); await pg.waitForTimeout(300); }
  await pg.waitForTimeout(1200);
  console.log('to 5', JSON.stringify(await st()));
  await pg.screenshot({ path: OUT + '/h_s5down.png' });
  await drive('D');
  for (let k = 0; k < 60; k++) { const s = await st(); if (s.area === 'west') break; await pg.evaluate(() => window.__dbg.game.debugStep(8)); await pg.waitForTimeout(200); }
  await pg.waitForTimeout(1500);
  console.log('exit', JSON.stringify(await st()));
  await pg.screenshot({ path: OUT + '/h_back.png' });
};
