// キー入力とキー配置設定
export const ACTIONS = [
  { id: 'throttle', name: 'アクセル', def: 'KeyF' },
  { id: 'brake', name: 'ブレーキ', def: 'KeyS' },
  { id: 'shiftUp', name: 'シフトアップ', def: 'KeyE' },
  { id: 'shiftDown', name: 'シフトダウン', def: 'KeyD' },
  { id: 'left', name: '左ハンドル', def: 'KeyJ' },
  { id: 'right', name: '右ハンドル', def: 'KeyL' },
  { id: 'mirror', name: 'バックミラー', def: 'KeyK' },
  { id: 'view', name: '視点切り替え', def: 'KeyI' },
  { id: 'flash', name: 'パッシング', def: 'KeyH' },
  { id: 'interact', name: '決定／入店', def: 'Enter' },
  { id: 'reset', name: '車両リセット', def: 'KeyR' },
];

const SETTINGS_KEY = 'ibr.settings.v1';

export const DEFAULT_SETTINGS = {
  keys: Object.fromEntries(ACTIONS.map((a) => [a.id, a.def])),
  bgm: 0.6, se: 0.7, transmission: 'AT', abs: true, tcs: true, mirror: true,
  defaultsRev: 2,
};

export function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      // v0.1.1でデフォルトをAT・トラコンONに変更（旧設定にも反映）
      if (!s.defaultsRev || s.defaultsRev < 2) { s.transmission = 'AT'; s.tcs = true; s.defaultsRev = 2; }
      const keys = { ...DEFAULT_SETTINGS.keys, ...(s.keys || {}) };
      // 追加アクションのデフォルトキーが既存の割当と重複したら未割当にする
      for (const a of ACTIONS) if (!(s.keys || {})[a.id] && Object.entries(keys).some(([id, c]) => id !== a.id && c === keys[a.id])) keys[a.id] = '';
      return { ...DEFAULT_SETTINGS, ...s, keys };
    }
  } catch (e) { /* ignore */ }
  return structuredClone(DEFAULT_SETTINGS);
}

export function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
}

export function keyLabel(code) {
  if (!code) return '-';
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  const map = { ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Space: 'Space', ShiftLeft: 'L-Shift', ShiftRight: 'R-Shift', ControlLeft: 'L-Ctrl', ControlRight: 'R-Ctrl', Enter: 'Enter', Semicolon: ';', Comma: ',', Period: '.', Slash: '/' };
  return map[code] || code;
}

export class Input {
  constructor(settings) {
    this.settings = settings;
    this.down = new Set();
    this.pressed = new Set(); // このフレームで押された
    this.listeners = [];
    this.capture = null; // キー割当待ち
    window.addEventListener('keydown', (e) => {
      if (this.capture) { e.preventDefault(); const cb = this.capture; this.capture = null; cb(e.code); return; }
      if (!this.down.has(e.code)) this.pressed.add(e.code);
      this.down.add(e.code);
      for (const l of this.listeners) l(e);
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => { this.down.delete(e.code); });
    window.addEventListener('blur', () => this.down.clear());
  }
  onKey(fn) { this.listeners.push(fn); return () => { this.listeners = this.listeners.filter((x) => x !== fn); }; }
  key(action) { return this.settings.keys[action]; }
  held(action) { return this.down.has(this.key(action)); }
  hit(action) { return this.pressed.has(this.key(action)); }
  hitCode(code) { return this.pressed.has(code); }
  endFrame() { this.pressed.clear(); }
}
