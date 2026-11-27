// 首都高バトルの続き：C1外回りでバトル中、竹橋JCTで2台とも5号へ → SPと間隔を保って5号エリアで続行（80km/h）→ 北池袋出口で降りたら引き分け
// 2つ目：プレイヤーだけ5号へ（ライバルは C1 のまま）→ 引き分け
module.exports = async (pg, OUT) => {
  const st = () => pg.evaluate(() => { const g = window.__dbg.game, m = g.mode, c = m.P?.car || m.session?.player?.car; const bt = m.bt; return { area: m.area || m.constructor.name, lane: m.cur?.lane, v: c ? +(c.speed * 3.6).toFixed(0) : null, bt: bt && { phase: bt.phase, gap: +bt.gap.toFixed(1), spP: +bt.spP.toFixed(1), spR: +bt.spR.toFixed(1), rv: +(bt.e.car.speed * 3.6).toFixed(0), plan: bt.e.plan, branch: !!bt.e.branch, rlane: bt.e.laneKey }, wins: g.story.wins, losses: g.story.losses }; });
  const setup = async (follow) => {
    await pg.evaluate(() => { const { game } = window.__dbg; const { ShutoFreeMode, newGameState } = window.__dbgModes; game.story = newGameState(); game.story.wins = 12; const C = window.__dbgCircuit.CIRCUITS.c1_outer; game.setMode(new ShutoFreeMode(game, { story: true, area: 'c1', lane: 'c1_outer', pose: window.__dbgLanePose(C, 600), speed: 22 })); });
    await pg.waitForTimeout(1500);
    // 分岐点の約450m手前にプレイヤー、その30m後ろにライバルを置いてバトル開始
    await pg.evaluate((follow) => {
      const m = window.__dbg.game.mode, P = window.__dbgCircuit, C = P.CIRCUITS.c1_outer, DO = P.SHUTO5.DO;
      for (const e of m.session.entries.filter((x) => x.rival).slice(1)) m.removeRival(e);
      const e = m.session.entries.find((x) => x.rival);
      const s0 = DO.fromS - 450;
      const pp = window.__dbgLanePose(C, s0), rp = window.__dbgLanePose(C, s0 - 30);
      m.P.car.place(pp.x, pp.z, pp.h, 22, pp.y); e.car.place(rp.x, rp.z, rp.h, 22, rp.y);
      m.challenge(e); m.bt.t = 0; m.startBattle(); m.bt.countdown.t = 0.01;
      window.__follow = follow;
      // プレイヤー：C1を走り、分岐点の手前で 5号への連絡路（DO）へ（follow=false のときも同じ。ライバルの判断で分かれる）
      const ai1 = new window.__dbg.RaceAI(m.P.car, m.path, 0.9, { mistakes: false, vmax: 120 / 3.6 });
      let ai2 = null;
      m.session.readPlayerInput = (dt) => {
        const mm = window.__dbg.game.mode; if (mm.P.ai || !mm.session.controlsEnabled) return;
        if (mm.area === 'c1') {
          const d = Math.hypot(mm.P.car.x - DO.x[0], mm.P.car.z - DO.z[0]);
          if (!ai2 && d < 60) ai2 = new window.__dbg.RaceAI(mm.P.car, new P.LanePath(DO, mm.session.corridor), 0.9, { mistakes: false, vmax: 120 / 3.6 });
          (ai2 || ai1).update(dt, []);
        }
      };
    }, follow);
    await pg.evaluate(() => window.__dbg.game.debugStep(0.5));
    // ライバルの判断を固定（テスト用）
    await pg.evaluate((follow) => { const m = window.__dbg.game.mode; m.bt.e.plan = follow ? 'branch' : 'stay'; m.bt.e.ai.vmax = 120 / 3.6; }, follow);
  };
  // ---- 1) 2台とも 5号へ ----
  await setup(true);
  for (let k = 0; k < 40; k++) { await pg.evaluate(() => window.__dbg.game.debugStep(1)); const s = await st(); if (k % 4 === 0 || !s.bt) console.log(' c1', JSON.stringify(s), await pg.evaluate(() => window.__dbg.game.mode.hud.sub.textContent)); if (s.area === 'shuto5') break; }
  await pg.waitForTimeout(1500);
  const s1 = await st(); console.log('into 5', JSON.stringify(s1));
  await pg.screenshot({ path: OUT + '/jct_continue.png' });
  // 出口まで決着がつかないようにSPを保つ（テスト用）
  await pg.evaluate(() => { const m = window.__dbg.game.mode; window.__keepSP = setInterval(() => { if (m.bt) { m.bt.spP = Math.max(m.bt.spP, 50); m.bt.spR = Math.max(m.bt.spR, 50); } }, 10); });
  // 5号ではプレイヤーも AI（下りの車線）で走らせる
  await pg.evaluate(() => { const m = window.__dbg.game.mode, P = window.__dbgCircuit; const w = m.where(); let ai = new window.__dbg.RaceAI(m.P.car, new P.LanePath(P.SHUTO5[w.lane], m.session.corridor), 0.9, { mistakes: false }); let lane = w.lane;
    m.session.readPlayerInput = (dt) => { const mm = window.__dbg.game.mode; if (mm !== m || m.P.ai || !m.session.controlsEnabled) return; if (lane !== 'D' && ai.path.project(m.P.car.x, m.P.car.z, -1).s > P.SHUTO5[lane].length - 15) { lane = 'D'; ai = new window.__dbg.RaceAI(m.P.car, new P.LanePath(P.SHUTO5.D, m.session.corridor), 0.9, { mistakes: false }); } ai.update(dt, []); }; });
  let msg = '';
  // 下りを数秒走ったら、出口の約400m手前へ（プレイヤー）・その60m後ろ（ライバル）に置き直す
  for (let k = 0; k < 6; k++) await pg.evaluate(() => window.__dbg.game.debugStep(1));
  console.log('before tp', JSON.stringify(await st()));
  await pg.evaluate(() => { const m = window.__dbg.game.mode, P = window.__dbgCircuit, D = P.SHUTO5.D; const a = window.__dbgLanePose(D, D.length - 400), b = window.__dbgLanePose(D, D.length - 460);
    m.P.car.place(a.x, a.z, a.h, 22, a.y); m.bt.e.car.place(b.x, b.z, b.h, 22, b.y); m.laneAI(m.bt.e, 'D', 0.9, { mistakes: false });
    const ai = new window.__dbg.RaceAI(m.P.car, new P.LanePath(D, m.session.corridor), 0.9, { mistakes: false, vmax: 25 });
    m.session.readPlayerInput = (dt) => { if (window.__dbg.game.mode === m && !m.P.ai && m.session.controlsEnabled) ai.update(dt, []); }; });
  for (let k = 0; k < 800; k++) {
    await pg.evaluate(() => { const m = window.__dbg.game.mode; if (m.bt) { m.bt.spP = Math.max(m.bt.spP, 50); m.bt.spR = Math.max(m.bt.spR, 50); m.bt.e.ai.vmax = 20; } window.__dbg.game.debugStep(0.5); });
    const s = await st(); if (k % 100 === 0) console.log(' s5', JSON.stringify(s));
    if (s.area !== 'shuto5') { await pg.waitForTimeout(700); console.log('left', JSON.stringify(s), await pg.evaluate(() => { const h = window.__dbg.game.mode.hud; return h.msg.textContent + ' / ' + h.sub.textContent; })); await pg.screenshot({ path: OUT + '/jct_exit.png' }); break; }
    await pg.waitForTimeout(30);
  }
  await pg.waitForTimeout(1500);
  console.log('exit', JSON.stringify(await st()), await pg.evaluate(() => window.__dbg.game.mode.hud?.msg?.textContent + ' / ' + window.__dbg.game.mode.hud?.sub?.textContent));
  await pg.screenshot({ path: OUT + '/jct_exit.png' });
  // ---- 2) プレイヤーだけ 5号へ ----
  await setup(false);
  await pg.evaluate(() => { const h = window.__dbg.game.mode.hud; const f = h.flash.bind(h); window.__fl = []; h.flash = (a, b, c) => { window.__fl.push([a, c]); f(a, b, c); }; });
  for (let k = 0; k < 40; k++) { await pg.evaluate(() => window.__dbg.game.debugStep(1)); const s = await st(); if (!s.bt || s.area === 'shuto5') { console.log('split', JSON.stringify(s), await pg.evaluate(() => JSON.stringify(window.__fl))); break; } }
};
