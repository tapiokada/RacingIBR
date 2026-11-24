// エンジン回転数に対するパワー・トルク曲線
import { el } from './ui.js';

const PS = (t, rpm) => (t * rpm * 2 * Math.PI) / 60 / 1000 * 1.3596;

function curve(spec) {
  const pts = [];
  const top = spec.limiter;
  for (let rpm = 1000; rpm <= top; rpm += 100) {
    const t = spec.fullTorque(rpm, spec.boostTarget(rpm));
    pts.push({ rpm, t, p: PS(t, rpm) });
  }
  return pts;
}

// spec: 現在の仕様 / base: 比較用（純正など、点線で描く）
export function powerGraph(spec, base = null, { w = 420, h = 220 } = {}) {
  const cv = el('canvas', { class: 'pgraph', width: w * 2, height: h * 2 });
  cv.style.width = `${w}px`; cv.style.height = `${h}px`;
  const c = cv.getContext('2d');
  c.scale(2, 2);
  const A = curve(spec), B = base ? curve(base) : [];
  const maxRpm = Math.max(spec.limiter, base ? base.limiter : 0);
  const maxP = Math.max(...A.map((q) => q.p), ...B.map((q) => q.p)) * 1.12;
  const maxT = Math.max(...A.map((q) => q.t), ...B.map((q) => q.t)) * 1.12;
  const L = 40, R = w - 44, T = 18, Bm = h - 26;
  const X = (rpm) => L + (rpm / maxRpm) * (R - L);
  const YP = (p) => Bm - (p / maxP) * (Bm - T);
  const YT = (t) => Bm - (t / maxT) * (Bm - T);
  c.fillStyle = 'rgba(8,12,24,0.85)'; c.fillRect(0, 0, w, h);
  // 目盛
  c.strokeStyle = 'rgba(255,255,255,0.08)'; c.lineWidth = 1;
  c.font = '10px sans-serif'; c.fillStyle = 'rgba(220,230,255,0.7)';
  c.textAlign = 'center';
  for (let r = 0; r <= maxRpm; r += 1000) {
    c.beginPath(); c.moveTo(X(r), T); c.lineTo(X(r), Bm); c.stroke();
    c.fillText(String(r / 1000), X(r), Bm + 12);
  }
  c.fillText('×1000 rpm', (L + R) / 2, h - 2);
  for (let k = 0; k <= 4; k++) {
    const y = T + ((Bm - T) * k) / 4;
    c.beginPath(); c.moveTo(L, y); c.lineTo(R, y); c.stroke();
    c.textAlign = 'right'; c.fillStyle = '#ff6b8a'; c.fillText(String(Math.round(maxP * (1 - k / 4))), L - 4, y + 3);
    c.textAlign = 'left'; c.fillStyle = '#4fd8ff'; c.fillText(String(Math.round(maxT * (1 - k / 4))), R + 4, y + 3);
  }
  c.textAlign = 'left'; c.fillStyle = '#ff6b8a'; c.fillText('PS', 6, 12);
  c.textAlign = 'right'; c.fillStyle = '#4fd8ff'; c.fillText('N·m', w - 6, 12);
  // レッドゾーン
  c.fillStyle = 'rgba(255,40,60,0.12)'; c.fillRect(X(spec.redline), T, R - X(spec.redline), Bm - T);
  const line = (pts, key, Y, color, dash) => {
    c.strokeStyle = color; c.lineWidth = dash ? 1.4 : 2.4; c.setLineDash(dash ? [4, 4] : []);
    c.beginPath(); pts.forEach((q, i) => (i ? c.lineTo(X(q.rpm), Y(q[key])) : c.moveTo(X(q.rpm), Y(q[key])))); c.stroke();
    c.setLineDash([]);
  };
  if (B.length) { line(B, 'p', YP, 'rgba(255,107,138,0.6)', true); line(B, 't', YT, 'rgba(79,216,255,0.6)', true); }
  line(A, 'p', YP, '#ff6b8a', false); line(A, 't', YT, '#4fd8ff', false);
  // ピーク
  const pk = A.reduce((a, b) => (b.p > a.p ? b : a)), tk = A.reduce((a, b) => (b.t > a.t ? b : a));
  c.fillStyle = '#fff'; c.font = 'bold 11px sans-serif'; c.textAlign = 'left';
  c.fillText(`${pk.p.toFixed(0)}PS/${pk.rpm}rpm`, Math.min(R - 110, X(pk.rpm) - 30), Math.max(T + 10, YP(pk.p) - 6));
  c.fillText(`${tk.t.toFixed(0)}N·m/${tk.rpm}rpm`, Math.min(R - 110, X(tk.rpm) - 30), Math.min(Bm - 4, YT(tk.t) + 14));
  if (base) { c.font = '10px sans-serif'; c.fillStyle = 'rgba(220,230,255,0.6)'; c.fillText('点線：比較（純正）', L + 4, T + 10); }
  return cv;
}

// ギアごとの最高速度（レブリミット時）
export function gearChart(spec, { w = 420, h = 120 } = {}) {
  const cv = el('canvas', { class: 'pgraph', width: w * 2, height: h * 2 });
  cv.style.width = `${w}px`; cv.style.height = `${h}px`;
  const c = cv.getContext('2d');
  c.scale(2, 2);
  c.fillStyle = 'rgba(8,12,24,0.85)'; c.fillRect(0, 0, w, h);
  const sp = spec.gears.map((g) => ((spec.redline * 2 * Math.PI / 60) * spec.tireRadius / (g * spec.final)) * 3.6);
  const max = Math.max(320, ...sp);
  const L = 34, R = w - 12, rowH = (h - 16) / sp.length;
  c.font = '10px sans-serif';
  sp.forEach((v, i) => {
    const y = 8 + i * rowH;
    c.fillStyle = 'rgba(220,230,255,0.75)'; c.textAlign = 'right'; c.fillText(`${i + 1}速`, L - 4, y + rowH * 0.7);
    c.fillStyle = 'rgba(51,225,255,0.55)'; c.fillRect(L, y + 2, ((R - L) * v) / max, rowH - 4);
    c.fillStyle = '#fff'; c.textAlign = 'left'; c.fillText(`${v.toFixed(0)} km/h　(${spec.gears[i].toFixed(3)})`, L + 4, y + rowH * 0.7);
  });
  return cv;
}
