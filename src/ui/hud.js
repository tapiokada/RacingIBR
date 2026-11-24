// 走行中HUD（速度・タコメーター・ギア・ラップ・ミニマップ）
import { el } from './ui.js';
import { NODES, AREAS } from '../data/map.js';

export class Hud {
  constructor(parent) {
    this.root = el('div', { class: 'hud' });
    this.tl = el('div', { class: 'hud-tl' });
    this.tc = el('div', { class: 'hud-tc' });
    this.tr = el('div', { class: 'hud-tr' });
    this.msg = el('div', { class: 'hud-msg' });
    this.sub = el('div', { class: 'hud-submsg' });
    this.prompt = el('div', { class: 'hud-prompt' });
    this.tach = el('canvas', { class: 'hud-tach', width: 320, height: 200 });
    this.map = el('canvas', { class: 'hud-map', width: 240, height: 240 });
    this.mirrorFrame = el('div', { class: 'hud-mirror' });
    this.viewLabel = el('div', { class: 'hud-view' });
    this.root.append(this.tl, this.tc, this.tr, this.msg, this.sub, this.prompt, this.tach, this.map, this.mirrorFrame, this.viewLabel);
    parent.appendChild(this.root);
    this.msgT = 0;
    this.mapBounds = null;
  }

  destroy() { this.root.remove(); }

  flash(text, sec = 1.5, sub = '') {
    this.msg.textContent = text; this.sub.textContent = sub;
    this.msg.classList.remove('pop'); void this.msg.offsetWidth; this.msg.classList.add('pop');
    this.msgT = sec;
  }

  setView(name) {
    this.viewLabel.textContent = name;
    this.viewLabel.classList.remove('fade'); void this.viewLabel.offsetWidth; this.viewLabel.classList.add('fade');
  }

  update(dt) {
    if (this.msgT > 0) { this.msgT -= dt; if (this.msgT <= 0) { this.msg.textContent = ''; this.sub.textContent = ''; } }
  }

  drawTach(car) {
    const c = this.tach.getContext('2d');
    const W = this.tach.width, H = this.tach.height;
    c.clearRect(0, 0, W, H);
    const s = car.spec;
    const max = Math.ceil((s.limiter + 500) / 1000) * 1000;
    const cx = W / 2 + 40, cy = H - 18, R = 150;
    const a0 = Math.PI * 1.0, a1 = Math.PI * 1.75;
    const ang = (r) => a0 + (a1 - a0) * Math.min(1, r / max);
    c.lineWidth = 14;
    c.strokeStyle = 'rgba(255,255,255,0.12)';
    c.beginPath(); c.arc(cx, cy, R, a0, a1); c.stroke();
    c.strokeStyle = 'rgba(255,40,70,0.55)';
    c.beginPath(); c.arc(cx, cy, R, ang(s.redline), a1); c.stroke();
    const shift = car.rpm > s.redline - 300;
    c.strokeStyle = shift ? '#ff2d55' : '#33e1ff';
    c.shadowColor = c.strokeStyle; c.shadowBlur = 12;
    c.beginPath(); c.arc(cx, cy, R, a0, ang(car.rpm)); c.stroke();
    c.shadowBlur = 0;
    c.fillStyle = 'rgba(255,255,255,0.7)';
    c.font = '12px sans-serif'; c.textAlign = 'center';
    for (let r = 0; r <= max; r += 1000) {
      const a = ang(r);
      c.fillText(String(r / 1000), cx + Math.cos(a) * (R - 22), cy + Math.sin(a) * (R - 22) + 4);
    }
    // 速度・ギア
    c.textAlign = 'right';
    c.font = 'bold 58px "Orbitron","Segoe UI",sans-serif';
    c.fillStyle = '#fff';
    c.fillText(String(Math.round(Math.abs(car.vu) * 3.6)), cx + 60, cy - 30);
    c.font = '14px sans-serif'; c.fillStyle = '#9ab';
    c.fillText('km/h', cx + 60, cy - 10);
    c.textAlign = 'center';
    c.font = 'bold 44px "Orbitron","Segoe UI",sans-serif';
    c.fillStyle = shift ? '#ff2d55' : '#ffd400';
    const g = car.gear === -1 ? 'R' : car.gear === 0 ? 'N' : String(car.gear);
    c.fillText(g, cx - 70, cy - 30);
    if (car.spec.boostMax > 0) {
      c.font = '12px sans-serif'; c.fillStyle = '#9ab'; c.textAlign = 'left';
      c.fillText(`BOOST ${car.boost.toFixed(2)}bar`, cx - 110, cy - 2);
    }
    // 作動中のアシスト
    const tags = [];
    if ((car.tcsCut || 0) > 0.05) tags.push(['TCS', '#ffb020']);
    if ((car.assistCut || 0) > 0.05) tags.push(['ASSIST', '#33e1ff']);
    c.font = 'bold 11px sans-serif'; c.textAlign = 'left';
    tags.forEach(([t, col], i) => { c.fillStyle = col; c.fillText(t, cx - 110 + i * 46, cy - 64); });
  }

  // ミニマップ
  setMapCourse(path, area = 'west') { this.course = path; this.roads = AREAS[area].roads; this.mapBounds = null; }

  drawMap(cars, pois = []) {
    const c = this.map.getContext('2d');
    const W = this.map.width, H = this.map.height;
    c.clearRect(0, 0, W, H);
    if (!this.mapBounds) {
      let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
      const pts = this.course ? Array.from({ length: this.course.n }, (_, i) => ({ x: this.course.x[i], z: this.course.z[i] })) : this.roads.flatMap((r) => r.nodes.map((id) => NODES[id]));
      for (const p of pts) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z); }
      const sc = Math.min((W - 30) / (maxX - minX), (H - 30) / (maxZ - minZ));
      this.mapBounds = { sc, ox: W / 2 - ((minX + maxX) / 2) * sc, oz: H / 2 - ((minZ + maxZ) / 2) * sc };
    }
    const { sc, ox, oz } = this.mapBounds;
    const P = (x, z) => [ox + x * sc, oz + z * sc];
    c.fillStyle = 'rgba(5,10,20,0.6)';
    c.beginPath(); c.roundRect(0, 0, W, H, 14); c.fill();
    c.lineCap = 'round'; c.lineJoin = 'round';
    if (this.course && this.course.open) {
      // 片道の峠コース：道全体を薄く、計測区間を明るく。■スタート ◆ゴール
      const C = this.course;
      const seg = (from, to, style, w) => {
        c.strokeStyle = style; c.lineWidth = w; c.beginPath();
        let first = true;
        for (let i = 0; i < C.n; i += 3) { if (C.s[i] < from || C.s[i] > to) continue; const [x, y] = P(C.x[i], C.z[i]); first ? c.moveTo(x, y) : c.lineTo(x, y); first = false; }
        c.stroke();
      };
      seg(0, C.length, 'rgba(140,160,200,0.45)', 3);
      seg(C.startS, C.finishS, 'rgba(200,220,255,0.95)', 4);
      const a = C.posAt(C.startS), b = C.posAt(C.finishS);
      const [sx, sy] = P(a.x, a.z), [fx, fy] = P(b.x, b.z);
      c.fillStyle = '#fff'; c.fillRect(sx - 4, sy - 4, 8, 8);
      c.fillStyle = '#ffd23f'; c.beginPath(); c.moveTo(fx, fy - 6); c.lineTo(fx + 6, fy); c.lineTo(fx, fy + 6); c.lineTo(fx - 6, fy); c.closePath(); c.fill();
    } else if (this.course) {
      c.strokeStyle = 'rgba(200,220,255,0.85)'; c.lineWidth = 4;
      c.beginPath();
      for (let i = 0; i <= this.course.n; i++) { const k = i % this.course.n; const [x, y] = P(this.course.x[k], this.course.z[k]); i ? c.lineTo(x, y) : c.moveTo(x, y); }
      c.stroke();
      const [sx, sy] = P(this.course.x[0], this.course.z[0]);
      c.fillStyle = '#fff'; c.fillRect(sx - 4, sy - 4, 8, 8);
    } else {
      for (const r of this.roads) {
        if (r.touge) { c.strokeStyle = 'rgba(170,190,230,0.75)'; c.lineWidth = 3; c.beginPath(); r.nodes.forEach((id, i) => { const [x, y] = P(NODES[id].x, NODES[id].z); i ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke(); continue; }
        c.strokeStyle = 'rgba(170,190,230,0.75)'; c.lineWidth = Math.max(2, r.width * sc * 0.9);
        c.beginPath();
        r.nodes.forEach((id, i) => { const [x, y] = P(NODES[id].x, NODES[id].z); i ? c.lineTo(x, y) : c.moveTo(x, y); });
        c.stroke();
      }
    }
    for (const p of pois) {
      const [x, y] = P(p.x, p.z);
      c.fillStyle = p.color; c.beginPath(); c.arc(x, y, 6, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#fff'; c.font = 'bold 10px sans-serif'; c.textAlign = 'center'; c.fillText(p.label, x, y - 9);
    }
    for (const car of cars) {
      const [x, y] = P(car.x, car.z);
      c.save(); c.translate(x, y); c.rotate(-car.h + Math.PI);
      c.fillStyle = car.color; c.beginPath(); c.moveTo(0, -7); c.lineTo(5, 5); c.lineTo(-5, 5); c.closePath(); c.fill();
      c.restore();
    }
  }
}
