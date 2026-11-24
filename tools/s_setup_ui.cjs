// セッティング画面：スクロール位置の保持と、全ボタン（◀▶）・キー操作で値が変わるか
module.exports = async (pg, OUT) => {
  await pg.evaluate(() => {
    const { game } = window.__dbg; const { TownFreeMode } = window.__dbgModes;
    const eq = { ...window.__dbgStock('EVO-IX'), suspension: 'sus_full', brake: 'brk_full', transmission: 'tm_full', aero: 'aero_full' };
    game.setMode(new TownFreeMode(game, { carId: 'EVO-IX', equipped: eq, color: 0xeeeeee, area: 'west', setup: null, setupKey: null }));
  });
  await pg.waitForTimeout(800);
  await pg.evaluate(() => window.__dbg.game.mode.openSetting());
  await pg.waitForTimeout(400);
  // 全ての◀▶ボタンを順にクリック：スクロール位置が保たれ、値が変わるか
  const res = await pg.evaluate(async () => {
    const out = [];
    const n = document.querySelectorAll('.setup-list .key-row').length;
    for (let i = 0; i < n; i++) {
      for (const dir of [1, 0]) {
        const rows = document.querySelectorAll('.setup-list .key-row');
        const row = rows[i]; if (!row.querySelector('.arrow')) continue;
        row.scrollIntoView({ block: 'center' });
        const list = document.querySelector('.setup-list');
        const before = list.scrollTop, v0 = row.querySelector('.lv-val').textContent;
        row.querySelectorAll('.arrow')[dir].click();
        const list2 = document.querySelector('.setup-list');
        const row2 = document.querySelectorAll('.setup-list .key-row')[i];
        const v1 = row2.querySelector('.lv-val').textContent;
        if (Math.abs(list2.scrollTop - before) > 1 || v0 === v1) out.push(`${row.querySelector('.key-name').firstChild.textContent} ${dir ? '▶' : '◀'}: ${v0}→${v1} scroll ${before}→${list2.scrollTop}`);
      }
    }
    return { rows: n, problems: out };
  });
  console.log(JSON.stringify(res, null, 1));
  // キー操作：下の項目まで移動して←→
  for (let i = 0; i < 24; i++) await pg.keyboard.press('ArrowDown');
  const k0 = await pg.evaluate(() => { const r = document.querySelector('.setup-list .key-row.sel'); return [r.querySelector('.key-name').firstChild.textContent, r.querySelector('.lv-val').textContent, document.querySelector('.setup-list').scrollTop]; });
  await pg.keyboard.press('ArrowRight'); await pg.keyboard.press('ArrowRight');
  await pg.keyboard.down('Shift'); await pg.keyboard.press('ArrowRight'); await pg.keyboard.up('Shift');
  const k1 = await pg.evaluate(() => { const r = document.querySelector('.setup-list .key-row.sel'); const rect = r.getBoundingClientRect(), L = document.querySelector('.setup-list').getBoundingClientRect(); return [r.querySelector('.key-name').firstChild.textContent, r.querySelector('.lv-val').textContent, document.querySelector('.setup-list').scrollTop, rect.top >= L.top - 1 && rect.bottom <= L.bottom + 1]; });
  console.log('keys', JSON.stringify(k0), '→', JSON.stringify(k1));
  await pg.screenshot({ path: OUT + '/su_after.png' });
};
module.exports.keys = true;
