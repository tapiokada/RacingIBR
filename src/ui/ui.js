// DOM UIヘルパー
export function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === 'class') e.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
    else if (k === 'html') e.innerHTML = v;
    else if (v !== false && v != null) e.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    e.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
  }
  return e;
}

// キーボード操作可能なメニュー
// items: [{label, sub?, disabled?, action}]
export class Menu {
  constructor(game, items, opts = {}) {
    this.game = game;
    this.items = items;
    this.index = Math.max(0, items.findIndex((i) => !i.disabled));
    this.onBack = opts.onBack;
    this.root = el('div', { class: 'menu ' + (opts.className || '') });
    this.render();
    this.off = game.input.onKey((e) => this.key(e));
  }

  render() {
    this.root.innerHTML = '';
    this.items.forEach((it, i) => {
      const b = el('button', {
        class: 'menu-item' + (i === this.index ? ' sel' : '') + (it.disabled ? ' disabled' : ''),
        onclick: () => { if (!it.disabled) { this.index = i; this.activate(); } },
        onmouseenter: () => { if (!it.disabled) { this.index = i; this.highlight(); } },
      }, el('span', { class: 'label' }, it.label), it.sub ? el('span', { class: 'sub' }, it.sub) : null);
      this.root.appendChild(b);
    });
  }

  highlight() {
    [...this.root.children].forEach((c, i) => c.classList.toggle('sel', i === this.index));
  }

  move(d) {
    const n = this.items.length;
    for (let k = 1; k <= n; k++) {
      const j = (this.index + d * k + n * 10) % n;
      if (!this.items[j].disabled) { this.index = j; break; }
    }
    this.highlight();
    this.game.audio.beep(660, 0.04, 0.08);
  }

  activate() {
    const it = this.items[this.index];
    if (!it || it.disabled) return;
    this.game.audio.beep(990, 0.06, 0.1);
    it.action && it.action();
  }

  key(e) {
    if (!this.root.isConnected) return;
    if (e.code === 'ArrowUp' || e.code === 'ArrowLeft') this.move(-1);
    else if (e.code === 'ArrowDown' || e.code === 'ArrowRight') this.move(1);
    else if (e.code === 'Enter' || e.code === 'Space') this.activate();
    else if ((e.code === 'Escape' || e.code === 'Backspace') && this.onBack) { this.game.audio.beep(440, 0.05, 0.08); this.onBack(); }
  }

  destroy() { this.off(); this.root.remove(); }
}

export function panel(title, ...children) {
  return el('div', { class: 'panel' }, title ? el('div', { class: 'panel-title' }, title) : null, ...children);
}
