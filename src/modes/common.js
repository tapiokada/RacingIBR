// レース共通：周回・セクター計測、カウントダウン、ポーズ
import { el, Menu, panel } from '../ui/ui.js';

export class LapTracker {
  constructor(path, startDist = 0) {
    this.path = path;
    this.hint = -1;
    this.dist = startDist;
    this.prevS = null;
    this.lapStart = 0; // 時刻
    this.lap = 0;
    this.sector = 0;
    this.sectorStart = 0;
    this.laps = []; // ラップタイム
    this.sectors = []; // [[s1,s2,s3],...]
    this.curSectors = [];
    this.started = false;
  }

  // car位置から進行距離を更新。時刻tを渡すとラップ/セクター計測
  update(car, t) {
    const p = this.path;
    const pr = p.project(car.x, car.z, this.hint);
    this.hint = pr.i;
    this.lat = pr.lat;
    if (this.prevS == null) { this.prevS = pr.s; return null; }
    let ds = pr.s - this.prevS;
    if (!p.open) {
      if (ds < -p.length / 2) ds += p.length;
      if (ds > p.length / 2) ds -= p.length;
    }
    this.prevS = pr.s;
    if (Math.abs(ds) > 30) ds = 0; // 異常ジャンプ無視
    this.dist += ds;
    if (!this.started) return null;
    let ev = null;
    const L = p.open ? p.raceLen : p.length;
    const lapDist = this.dist - this.lap * L;
    const bounds = p.sectorBounds || [L / 3, (L * 2) / 3];
    if (this.sector < 2 && lapDist >= bounds[this.sector]) {
      this.curSectors.push(t - this.sectorStart);
      this.sectorStart = t;
      this.sector++;
      ev = { type: 'sector', idx: this.sector, time: this.curSectors[this.curSectors.length - 1] };
    }
    if (lapDist >= L) {
      const lt = t - this.lapStart;
      this.curSectors.push(t - this.sectorStart);
      this.laps.push(lt);
      this.sectors.push(this.curSectors);
      this.curSectors = [];
      this.lap++;
      this.sector = 0;
      this.lapStart = t; this.sectorStart = t;
      ev = { type: 'lap', lap: this.lap, time: lt };
    }
    return ev;
  }

  start(t) { this.started = true; this.lapStart = t; this.sectorStart = t; }
  get best() { return this.laps.length ? Math.min(...this.laps) : null; }
}

// グリッド配置（sは負でスタートライン手前）
export function gridPos(path, s, lat) {
  return path.posAt(s, lat);
}

export class Countdown {
  constructor(game, hud, onGo) {
    this.game = game; this.hud = hud; this.onGo = onGo; this.t = 3.6; this.last = 4; this.done = false;
  }
  update(dt) {
    if (this.done) return;
    this.t -= dt;
    const n = Math.ceil(this.t);
    if (n !== this.last && n <= 3 && n >= 1) { this.hud.flash(String(n), 0.9); this.game.audio.beep(600, 0.18, 0.25); }
    if (this.t <= 0) { this.done = true; this.hud.flash('GO!', 1.0); this.game.audio.beep(1200, 0.4, 0.3); this.onGo(); }
    this.last = n;
  }
}

export function pauseMenu(game, title, items, onResume) {
  const box = panel(title);
  const dlg = el('div', { class: 'screen dialog' }, box);
  const close = () => { game.input.pressed.clear(); menu.destroy(); dlg.remove(); };
  const menu = new Menu(game, items.map((it) => ({ ...it, action: () => { close(); it.action(); } })), { onBack: () => { close(); onResume(); } });
  box.appendChild(menu.root);
  game.ui.appendChild(dlg);
  return close;
}
