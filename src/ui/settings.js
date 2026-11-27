// CommonSetting（キー配置変更ほか）
import { el, panel } from './ui.js';
import { ACTIONS, DEFAULT_SETTINGS, keyLabel, saveSettings } from '../input.js';

export function openSettings(game, onClose) {
  const s = game.settings;
  const wrap = el('div', { class: 'screen settings' });
  let index = 0;
  const rows = [];

  const conflict = (code, except) => ACTIONS.find((a) => a.id !== except && s.keys[a.id] === code);

  const build = () => {
    wrap.innerHTML = '';
    rows.length = 0;
    const list = el('div', { class: 'key-list' });
    ACTIONS.forEach((a) => {
      const btn = el('button', { class: 'key-btn' }, keyLabel(s.keys[a.id]));
      const row = el('div', { class: 'key-row' }, el('span', { class: 'key-name' }, a.name), btn);
      btn.onclick = () => capture(a, btn);
      rows.push({ row, act: () => capture(a, btn) });
      list.appendChild(row);
    });
    const opt = (label, getter, setter, values) => {
      const btn = el('button', { class: 'key-btn' }, getter());
      const row = el('div', { class: 'key-row' }, el('span', { class: 'key-name' }, label), btn);
      const act = () => { setter(values); btn.textContent = getter(); saveSettings(s); };
      btn.onclick = act;
      rows.push({ row, act });
      list.appendChild(row);
    };
    const vol = (label, key) => {
      const range = el('input', { type: 'range', min: 0, max: 1, step: 0.05, value: s[key] });
      range.oninput = () => { s[key] = parseFloat(range.value); if (key === 'bgm') game.audio.setBgmVolume(s.bgm); else game.audio.applyVolume(); saveSettings(s); };
      const row = el('div', { class: 'key-row' }, el('span', { class: 'key-name' }, label), range);
      rows.push({ row, act: () => {}, left: () => { range.value = Math.max(0, s[key] - 0.05); range.oninput(); }, right: () => { range.value = Math.min(1, s[key] + 0.05); range.oninput(); } });
      list.appendChild(row);
    };
    list.appendChild(el('div', { class: 'key-sep' }, 'ドライビング'));
    opt('トランスミッション', () => (s.transmission === 'MT' ? 'MT（マニュアル）' : 'AT（オートマ）'), () => { s.transmission = s.transmission === 'MT' ? 'AT' : 'MT'; });
    // 0（OFF）〜10 の段階設定。←→（または◀▶）で変更
    const level = (label, key, note) => {
      const val = el('span', { class: 'lv-val' });
      const bar = el('span', { class: 'lv-bar' });
      const show = () => {
        val.textContent = s[key] === 0 ? 'OFF' : `${s[key]} / 10`;
        bar.innerHTML = '';
        for (let i = 1; i <= 10; i++) bar.appendChild(el('i', { class: i <= s[key] ? 'on' : '' }));
      };
      const set = (v) => { s[key] = Math.max(0, Math.min(10, v)); show(); saveSettings(s); };
      const minus = el('button', { class: 'arrow', onclick: () => set(s[key] - 1) }, '◀');
      const plus = el('button', { class: 'arrow', onclick: () => set(s[key] + 1) }, '▶');
      const row = el('div', { class: 'key-row' }, el('span', { class: 'key-name' }, label, el('small', { class: 'lv-note' }, note)), el('span', { class: 'lv' }, minus, bar, val, plus));
      rows.push({ row, act: () => set(s[key] >= 10 ? 0 : s[key] + 1), left: () => set(s[key] - 1), right: () => set(s[key] + 1) });
      list.appendChild(row);
      show();
    };
    opt('スピン防止アシスト（初心者用）', () => (s.spinAssist ? 'ON' : 'OFF'), () => { s.spinAssist = !s.spinAssist; });
    list.appendChild(el('div', { class: 'hint' }, 'ON：アクセル＋ハンドル操作中、タイヤの限界を超えない最適なアクセル開度に自動で調整し、スピンせずに曲がりながら加速します。※ABS・トラクションコントロール・パーシャルアクセル/ブレーキの開度は、ポーズメニューの「セッティング」で車ごとに設定します。'));
    list.appendChild(el('div', { class: 'key-sep' }, '画面'));
    {
      const lbl = el('span', { class: 'key-val' }, `${Math.round(s.brightness * 100)}%`);
      const range = el('input', { type: 'range', min: 0.5, max: 2, step: 0.05, value: s.brightness });
      range.oninput = () => { s.brightness = parseFloat(range.value); lbl.textContent = `${Math.round(s.brightness * 100)}%`; game.applyBrightness(); saveSettings(s); };
      const row = el('div', { class: 'key-row' }, el('span', { class: 'key-name' }, '明るさ'), el('span', {}, lbl, ' ', range));
      rows.push({ row, act: () => {}, left: () => { range.value = Math.max(0.5, s.brightness - 0.05); range.oninput(); }, right: () => { range.value = Math.min(2, s.brightness + 0.05); range.oninput(); } });
      list.appendChild(row);
    }
    {
      const STEPS = [1.0, 1.15, 1.3, 1.5, 1.7];
      const idx = () => { const v = s.hudScale || 1.3; let b = 0; STEPS.forEach((x, i) => { if (Math.abs(x - v) < Math.abs(STEPS[b] - v)) b = i; }); return b; };
      const val = el('span', { class: 'lv-val' });
      const show = () => { val.textContent = `${['小', 'やや小', '標準', '大', '特大'][idx()]}（×${STEPS[idx()].toFixed(2).replace(/0$/, '')}）`; };
      const set = (i) => { s.hudScale = STEPS[Math.max(0, Math.min(STEPS.length - 1, i))]; show(); game.applyHudScale(); saveSettings(s); };
      const minus = el('button', { class: 'arrow', onclick: () => set(idx() - 1) }, '◀');
      const plus = el('button', { class: 'arrow', onclick: () => set(idx() + 1) }, '▶');
      const row = el('div', { class: 'key-row' }, el('span', { class: 'key-name' }, 'HUDの大きさ', el('small', { class: 'lv-note' }, 'マップ・速度・順位表示')), el('span', { class: 'lv' }, minus, val, plus));
      rows.push({ row, act: () => set((idx() + 1) % STEPS.length), left: () => set(idx() - 1), right: () => set(idx() + 1) });
      list.appendChild(row);
      show();
    }
    list.appendChild(el('div', { class: 'key-sep' }, 'サウンド'));
    vol('BGM音量', 'bgm');
    vol('効果音・エンジン音量', 'se');
    const reset = el('button', { class: 'menu-item small' }, 'キー配置を初期化');
    reset.onclick = () => { s.keys = { ...DEFAULT_SETTINGS.keys }; saveSettings(s); build(); };
    rows.push({ row: reset, act: () => reset.onclick() });
    const back = el('button', { class: 'menu-item small' }, '戻る');
    back.onclick = () => close();
    rows.push({ row: back, act: () => close() });
    wrap.appendChild(panel('COMMON SETTING', el('div', { class: 'hint' }, '項目を選んで Enter（またはクリック）→ 割り当てたいキーを押してください。Escで戻る'), list, el('div', { class: 'row-btns' }, reset, back)));
    hl();
  };

  const hl = () => rows.forEach((r, i) => r.row.classList.toggle('sel', i === index));

  const capture = (a, btn) => {
    btn.textContent = 'キーを押してください…';
    btn.classList.add('wait');
    game.input.capture = (code) => {
      if (code === 'Escape') { build(); return; }
      const c = conflict(code, a.id);
      if (c) s.keys[c.id] = s.keys[a.id]; // 入れ替え
      s.keys[a.id] = code;
      saveSettings(s);
      build();
    };
  };

  const off = game.input.onKey((e) => {
    if (!wrap.isConnected || game.input.capture) return;
    if (e.code === 'ArrowDown') { index = (index + 1) % rows.length; hl(); }
    else if (e.code === 'ArrowUp') { index = (index - 1 + rows.length) % rows.length; hl(); }
    else if (e.code === 'ArrowLeft') rows[index].left?.();
    else if (e.code === 'ArrowRight') rows[index].right?.();
    else if (e.code === 'Enter') { setTimeout(() => rows[index].act(), 0); }
    else if (e.code === 'Escape') close();
  });

  const close = () => { off(); game.input.capture = null; wrap.remove(); onClose && onClose(); };
  build();
  game.ui.appendChild(wrap);
  return close;
}
