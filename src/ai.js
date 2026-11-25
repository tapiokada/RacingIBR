// AIドライバー（レース用 / 街流し用）
import { NODES, townRoadBetween, laneOffset, roadPolyline } from './data/map.js';

const polyCache = new Map();
function cachedPoly(r) { if (!polyCache.has(r)) polyCache.set(r, roadPolyline(r)); return polyCache.get(r); }

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

function steerToward(car, tx, tz) {
  const dx = tx - car.x, dz = tz - car.z;
  const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
  const u = dx * f0 + dz * f1;
  const v = dx * -f1 + dz * f0;
  const ld2 = Math.max(4, dx * dx + dz * dz);
  const kappa = (2 * v) / ld2;
  let delta = Math.atan(car.L * kappa);
  if (u < 0) delta = Math.sign(v || 1) * car.spec.steerLock;
  const speed = car.speed;
  const lim = Math.max(0.06, Math.min(car.spec.steerLock, (car.L * car.spec.mu * 9.81) / Math.max(speed * speed, 1) + (car.spec.steerRef || car.spec.peakAngle) * 1.25));
  return clamp(delta / lim, -1, 1);
}

// レースAI
// opts.margin：他車との横の間隔の余裕[m]（性格：攻撃的0.35〜慎重1.4、標準0.8）
// opts.mistakes：ミスをするか（タイムランキングの計算では false）
export class RaceAI {
  constructor(car, path, skill = 0.85, opts = {}) {
    this.car = car; this.path = path; this.skill = skill;
    this.profile = path.speedProfile(car.spec, skill);
    this.hint = -1; this.offset = 0; this.offTarget = 0;
    this.stuck = 0; this.reverseT = 0;
    this.boost = 1;
    this.margin = opts.margin ?? 0.8;
    // ミスの起こりやすさ（コーナー1つあたり）：腕が上がるほど減り、トップクラス（0.955以上）はほぼゼロ
    this.mistakeRate = opts.mistakes === false ? 0 : clamp((0.955 - skill) * 1.6, 0, 0.22);
    this.mistake = null; // { type: 'late'|'throttle', until, apex }
    this.cornerSeen = -1;
    this.rand = opts.rand || Math.random;
  }

  update(dt, others = []) {
    const car = this.car, path = this.path;
    const pr = path.project(car.x, car.z, this.hint);
    this.hint = pr.i;
    const n = path.n;
    const v = car.speed;
    // ---- 他車の回避（ぶつけない・追い抜きは横に間隔を空ける）----
    const W = car.spec.car.width, CL = car.spec.car.length;
    const G = W + this.margin; // 中心間で確保したい横の間隔
    const hwNow = path.hw[pr.i];
    let want = 0, conflict = false, vCap = 1e9;
    for (const o of others) {
      const po = path.project(o.x, o.z, -1);
      let ds = po.s - pr.s;
      if (!path.open) { if (ds < -path.length / 2) ds += path.length; if (ds > path.length / 2) ds -= path.length; }
      // 自車基準の相対位置（前後u・左右w）。ヘアピンなどでコース上の距離がずれても実際の位置で判断する
      const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
      const rx0 = o.x - car.x, rz0 = o.z - car.z;
      const u = rx0 * f0 + rz0 * f1, w = rx0 * -f1 + rz0 * f0;
      if (Math.abs(u) < 12 && Math.abs(ds) > 15) ds = u; // コースの射影が別の区間を拾ったとき
      const dlat = Math.abs(ds - u) < 6 ? po.lat - pr.lat : w;
      const closing = v - Math.max(0, o.vu);
      // 近づいて追い越しにかかる距離（並走中を含む）だけ回避する。離れていればレーシングラインを走る
      const ahead = ds > -(CL + 1) && ds < CL + 3 + Math.max(0, closing) * 1.2 + v * 0.15;
      if (!ahead || Math.abs(dlat) >= G + 0.6) continue;
      conflict = true;
      // 追い抜く側：相手の横に G だけ離れた位置（コース内に収まる側。広い方を優先）
      const lim = hwNow - W / 2 - 0.3;
      // 相手はこの先レーシングラインへ寄っていく（プレイヤーも大抵ライン取りをする）ので、その位置とも間隔を取れる側を選ぶ
      let pred = po.lat;
      for (let k = 2; k <= 12; k += 2) { const j = path.open ? Math.min(n - 1, po.i + k) : (po.i + k) % n; const L2 = path.lineOff[j]; if (Math.abs(L2 - po.lat) > Math.abs(pred - po.lat)) pred = L2; }
      const okSide = (x) => Math.abs(x) <= lim && Math.abs(x - pred) >= G - 0.2;
      const sides = [Math.min(po.lat, pred) - G, Math.max(po.lat, pred) + G].filter(okSide);
      const pref = dlat > 0 ? Math.min(po.lat, pred) - G : Math.max(po.lat, pred) + G; // 今いる側
      let tgt = sides.includes(pref) ? pref : sides.length ? sides[0] : null;
      if (Math.abs(ds) < CL + 1) {
        // 並走中：反対側へ横切らない。今の側で端いっぱいまで離れ、それでも間隔が足りなければアクセルを戻して後ろへ下がる
        const away = dlat > 0 ? -1 : 1;
        tgt = clamp(po.lat + away * G, -lim, lim);
        if (Math.abs(tgt - po.lat) < G - 0.3) vCap = Math.min(vCap, Math.max(0, o.vu) - 2.5);
      }
      if (tgt != null) {
        want = tgt - path.lineOff[pr.i];
      }
      // 横に並べない／まだ横にずれきっていないときは後ろで待つ（追突しない）
      if (ds > 0 && (tgt == null || Math.abs(dlat) < G - 0.2)) {
        const vo = Math.max(0, o.vu);
        const gap = Math.min(ds, u > 0 ? u : ds) - (CL + 1.0 + this.margin + v * 0.12);
        vCap = Math.min(vCap, vo + Math.max(-3, gap) * 0.9);
      }
    }
    // 最終安全策：実際の位置で前方近くに相手がいて横の間隔が足りなければ減速（追突防止）
    for (const o of others) {
      const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
      const rx0 = o.x - car.x, rz0 = o.z - car.z;
      const u = rx0 * f0 + rz0 * f1, w = rx0 * -f1 + rz0 * f0;
      if (u > 0 && u < CL + 4 + v * 0.3 && Math.abs(w) < W + 0.35) vCap = Math.min(vCap, Math.max(0, o.vu * Math.cos(o.h - car.h)) + Math.max(-3, u - CL - 1.2) * 0.8);
    }
    this.offTarget += (want - this.offTarget) * Math.min(1, dt * (conflict ? 3 : 1.2));

    const Ld = 4 + v * 0.4;
    let ti = pr.i, acc = 0;
    const nxt = path.open ? (i) => Math.min(n - 1, i + 1) : (i) => (i + 1) % n;
    while (acc < Ld && (!path.open || ti < n - 1)) { acc += path.lseg[ti]; ti = nxt(ti); }
    const [rx, rz] = path.normal(ti);
    const lim = Math.max(0, path.hw[ti] - 1.4);
    const extra = clamp(this.offTarget, -lim - path.lineOff[ti], lim - path.lineOff[ti]);
    const tx = path.lx[ti] + rx * extra, tz = path.lz[ti] + rz * extra;
    let steer = steerToward(car, tx, tz);
    // 小さなコーナーでイン側の縁に寄りすぎたら切り増しを抑える（先読み点への直線がインを削るため）
    {
      const k = path.curv[pr.i];
      const inside = Math.abs(k) > 0.02 ? Math.sign(k) : 0; // +1 = 右コーナー（イン側=右）
      if (inside !== 0 && Math.sign(steer) === inside) {
        const room = path.hw[pr.i] - inside * pr.lat - car.spec.car.width / 2;
        if (room < 1.2) steer *= clamp((room - 0.2) / 1.0, 0, 1);
      }
    }

    // 速度
    let vt = 1e9;
    for (let k = 1, d = 0; d < 8; k++) { const j = path.open ? Math.min(n - 1, pr.i + k) : (pr.i + k) % n; vt = Math.min(vt, this.profile[j]); d += path.lseg[j]; if (path.open && j === n - 1) break; }
    vt *= this.boost;
    // ---- ミス（オーバーラン・立ち上がりでアクセルを開けすぎる）----
    {
      let jMin = -1, vMin = 1e9;
      for (let k = 1, d = 0; d < 70; k++) { const j = path.open ? Math.min(n - 1, pr.i + k) : (pr.i + k) % n; if (this.profile[j] < vMin) { vMin = this.profile[j]; jMin = j; } d += path.lseg[j]; if (path.open && j === n - 1) break; }
      const corner = vMin < v * 0.82 ? jMin : -1; // この先で大きく減速するコーナー
      if (corner >= 0 && Math.abs(corner - this.cornerSeen) > 20 && !this.mistake) {
        this.cornerSeen = corner;
        if (!conflict && this.rand() < this.mistakeRate) this.mistake = { type: this.rand() < 0.55 ? 'late' : 'throttle', apex: corner, t: 0 };
      }
      const m = this.mistake;
      if (m) {
        m.t += dt;
        const past = ((pr.i - m.apex + n) % n) < n / 2 && ((pr.i - m.apex + n) % n) < 60;
        if (conflict) this.mistake = null; // 他車と競り合っている間はミスを引きずらない（ぶつけない）
        else if (m.type === 'late') { const toApex = (m.apex - pr.i + n) % n; if (!past && toApex > 12) vt *= 1.08; else this.mistake = null; } // ブレーキが遅れて突っ込み、アウトへはらむ // ブレーキが遅れて突っ込む
        else if (past) { m.exit = (m.exit || 0) + dt; if (m.exit > 0.8) this.mistake = null; } // 立ち上がりで開けすぎ
        if (m.t > 8) this.mistake = null;
      }
    }
    vt = Math.min(vt, vCap);
    const err = vt - v;
    let throttle = clamp(0.35 + err * 0.35, 0, 1);
    let brake = clamp(-err * 0.22 - 0.05, 0, 1);
    if (vCap < 1e8 && v > vCap) { throttle = 0; brake = Math.max(brake, clamp((v - vCap) * 0.45, 0, 1)); } // 前の車に追突しない
    if (brake > 0) throttle = 0;
    // スライド時のカウンターステア（車体スリップ角の方向へ当て舵）とアクセルオフ
    {
      const beta = Math.atan2(car.vv, Math.max(Math.abs(car.vu), 3));
      const k = clamp((Math.abs(beta) - 0.09) / 0.22, 0, 1) * clamp((v - 7) / 5, 0, 1); // 低速の小回りでは効かせない
      if (k > 0) { steer = steer * (1 - k) + Math.sign(beta) * k; throttle *= 1 - 0.85 * k; }
    }
    // トラクション（開けすぎのミス中は抑えない）
    const overThrottle = this.mistake && this.mistake.type === 'throttle' && this.mistake.exit > 0 && vCap > 1e8;
    if (overThrottle) throttle = 1;
    else {
      if (car.slipLong > car.spec.peakRatio * 1.4) throttle *= 0.4;
      if (car.slip > 1.6) throttle *= 0.6;
    }
    // コース外れの補正
    if (Math.abs(pr.lat) > path.hw[pr.i] - 0.5) throttle *= 0.7;

    // スタック回復
    if (this.reverseT > 0) {
      this.reverseT -= dt;
      car.input = { throttle: 0, brake: 0.8, steer: -steer };
      if (car.gear !== -1 && car.speed < 1) car.gear = -1;
      if (this.reverseT <= 0) car.gear = 1;
      return;
    }
    if (v < 1.5 && this.started && !(path.open && pr.i > n - 40)) { this.stuck += dt; if (this.stuck > 2.2) { this.stuck = 0; this.reverseT = 1.4; } }
    else this.stuck = 0;
    if (car.gear < 1) car.gear = 1;
    car.input = { throttle, brake, steer };
    this.started = true;
  }
}

// 街を流すAI（道路グラフをランダムに巡回、左側通行）
// 曲がりのパスが縁石・分離帯から最低限とるべき距離（車線そのものがこれより狭いときは車線の余裕まで）
const TURN_MARGIN = -2.2;

export class CruiseAI {
  constructor(car, graph, from, to, cruise = 13, corridor = null) {
    this.car = car; this.graph = graph;
    this.corridor = corridor; // 曲がりのパスが道路からはみ出さないかの確認用
    this.a = from; this.b = to; this.c = this.pick(to, from);
    this.cruise = cruise;
    this.paused = false;
    this.stuck = 0; this.reverseT = 0;
    this.build();
  }

  pick(at, prev) {
    let opts = (this.graph[at] || []).map((e) => e.to).filter((x) => x !== prev);
    if (!opts.length) return prev;
    // 行き止まり（ショップ前など）には入らない
    const through = opts.filter((o) => (this.graph[o] || []).length > 1);
    if (through.length) opts = through;
    // 鋭角（Uターンに近い）曲がりは避ける
    const P = NODES[prev], A = NODES[at];
    if (P && A) {
      const ux = A.x - P.x, uz = A.z - P.z, ul = Math.hypot(ux, uz) || 1;
      const ok = opts.filter((o) => { const B = NODES[o]; const vx = B.x - A.x, vz = B.z - A.z; return (ux * vx + uz * vz) / (ul * (Math.hypot(vx, vz) || 1)) > -0.35; });
      if (ok.length) opts = ok;
    }
    return opts[Math.floor(Math.random() * opts.length)];
  }

  // 左側車線の中心線 a→b（道路の折れ線に沿う）
  laneLine(a, b) {
    const r = townRoadBetween(a, b);
    const A = NODES[a], B = NODES[b];
    let P = [A, B];
    if (r && r.smooth) { // 曲線補間した道路だけ折れ線を辿る（ループ道路で同じノードが2回出るため）
      const poly = cachedPoly(r);
      const near = (n) => { let bi = 0, bd = 1e18; poly.forEach((p, i) => { const d = (p.x - n.x) ** 2 + (p.z - n.z) ** 2; if (d < bd) { bd = d; bi = i; } }); return bi; };
      const ia = near(A), ib = near(B);
      P = ia <= ib ? poly.slice(ia, ib + 1) : poly.slice(ib, ia + 1).reverse();
      if (P.length < 2) P = [A, B];
    }
    // 分離帯のある道路は左側（走行）車線、分離帯のない複数車線道路は内側車線を走る
    const o = r ? (r.lanes >= 2 && !r.median ? r.laneW * 0.5 : laneOffset(r)) : 0;
    const out = [];
    for (let i = 0; i < P.length; i++) {
      const p0 = P[Math.max(0, i - 1)], p1 = P[Math.min(P.length - 1, i + 1)];
      const dx = p1.x - p0.x, dz = p1.z - p0.z, l = Math.hypot(dx, dz) || 1;
      out.push({ x: P[i].x + (dz / l) * o, z: P[i].z - (dx / l) * o }); // 左 = (fz, -fx)
    }
    const cum = [0];
    for (let i = 1; i < out.length; i++) cum.push(cum[i - 1] + Math.hypot(out[i].x - out[i - 1].x, out[i].z - out[i - 1].z));
    const L = cum[cum.length - 1];
    const at = (d) => {
      d = Math.max(0, Math.min(L, d));
      let i = 0;
      while (i < cum.length - 2 && cum[i + 1] < d) i++;
      const t = (d - cum[i]) / ((cum[i + 1] - cum[i]) || 1);
      const a0 = out[i], a1 = out[i + 1];
      return { x: a0.x + (a1.x - a0.x) * t, z: a0.z + (a1.z - a0.z) * t, fx: (a1.x - a0.x) / ((cum[i + 1] - cum[i]) || 1), fz: (a1.z - a0.z) / ((cum[i + 1] - cum[i]) || 1) };
    };
    return { pts: out, cum, len: L, at };
  }

  // a→b の車線 → 交差点bの曲がり（2次ベジェ）→ b→c の車線 の折れ線を作る
  build() {
    const L1 = this.laneLine(this.a, this.b), L2 = this.laneLine(this.b, this.c);
    const e1 = L1.at(L1.len), s2 = L2.at(0);
    const cos = e1.fx * s2.fx + e1.fz * s2.fz;
    const Rmax = Math.min(14 + (1 - cos) * 6, L1.len * 0.45, L2.len * 0.45);
    // 道路（縁石の内側）に収まる最大の R を探す
    const search = () => {
      let b = null;
      for (let R = Rmax; R >= 1.5; R *= 0.82) {
        const cand = this.turnCurve(L1, L2, R, cos);
        let need = TURN_MARGIN;
        if (this.corridor) need = Math.max(TURN_MARGIN, Math.max(this.corridor.query(cand.E.x, cand.E.z).d, this.corridor.query(cand.X.x, cand.X.z).d) - 0.05);
        if (!this.corridor || cand.curve.every((p) => this.corridor.query(p.x, p.z).d < need)) return { ...cand, ok: true };
        if (!b || cand.worst < b.worst) b = cand;
      }
      return b;
    };
    this.swing = 0;
    // 同じ道路のゆるい折れ（交差点ではない）は、車線をそのまま折り曲げる（分離帯の角を切らない）
    const rA = townRoadBetween(this.a, this.b), rB = townRoadBetween(this.b, this.c);
    const midBend = rA && rA === rB && cos > 0.3 && rA.nodes.indexOf(this.b) > 0 && rA.nodes.indexOf(this.b) < rA.nodes.length - 1;
    let best = midBend ? this.turnCurve(L1, L2, 0.01, cos) : search();
    // 収まらない鋭い曲がり（分離帯のない狭い道）は、外側へ膨らんでから曲がる
    const r1 = townRoadBetween(this.a, this.b), r2 = townRoadBetween(this.b, this.c);
    if (!best.ok && cos < -0.3 && r1 && r2 && !r1.median && !r2.median) {
      const cross = e1.fx * s2.fz - e1.fz * s2.fx; // 正＝右折
      const hw = Math.min(r1.width, r2.width) / 2;
      const o = laneOffset(r1);
      this.swing = (cross > 0 ? 1 : -1) * Math.max(0, hw - 2.1) - o; // 左の法線方向
      const alt = search();
      if (alt.ok || alt.worst < best.worst) best = alt; else this.swing = 0;
    }
    const { R, E, X, curve } = best;
    const pts = [];
    for (let i = 0; i < L1.pts.length && L1.cum[i] < L1.len - R - (this.swing ? 10 : 0); i++) pts.push(L1.pts[i]);
    pts.push(E);
    const turnStart = pts.length - 1;
    pts.push(...curve);
    pts.push(X);
    const exitIdx = pts.length - 1;
    for (let i = 0; i < L2.pts.length; i++) if (L2.cum[i] > R) pts.push(L2.pts[i]);
    if (pts.length === exitIdx + 1) pts.push(L2.at(L2.len));
    this.pts = pts;
    this.cum = [0];
    for (let i = 1; i < pts.length; i++) this.cum.push(this.cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
    this.exitS = this.cum[exitIdx];
    this.turnS0 = this.cum[turnStart];
    this.turnCos = cos;
    this.turnLen = this.exitS - this.turnS0;
    this.turnR = R;
  }

  turnCurve(L1, L2, R, cos) {
    const E = L1.at(L1.len - R), X = L2.at(R);
    if (this.swing) {
      // 左の法線 = (fz, -fx)
      E.x += E.fz * this.swing; E.z -= E.fx * this.swing;
      X.x += X.fz * this.swing; X.z -= X.fx * this.swing;
    }
    let C;
    if (cos < -0.9) {
      C = { x: (E.x + X.x) / 2 + E.fx * R * 1.2, z: (E.z + X.z) / 2 + E.fz * R * 1.2 };
    } else {
      const den = E.fx * X.fz - E.fz * X.fx;
      if (Math.abs(den) < 0.05) C = { x: (E.x + X.x) / 2, z: (E.z + X.z) / 2 };
      else {
        const t = ((X.x - E.x) * X.fz - (X.z - E.z) * X.fx) / den;
        C = { x: E.x + E.fx * t, z: E.z + E.fz * t };
        // 交点が離れすぎる場合は中点寄りに
        const mx = (E.x + X.x) / 2, mz = (E.z + X.z) / 2;
        if (Math.hypot(C.x - mx, C.z - mz) > R * 2) C = { x: mx, z: mz };
      }
    }
    const curve = [];
    for (let k = 1; k < 12; k++) {
      const u = k / 12;
      curve.push({ x: (1 - u) * (1 - u) * E.x + 2 * (1 - u) * u * C.x + u * u * X.x, z: (1 - u) * (1 - u) * E.z + 2 * (1 - u) * u * C.z + u * u * X.z });
    }
    let worst = -1e9;
    if (this.corridor) for (const p of [E, ...curve, X]) worst = Math.max(worst, this.corridor.query(p.x, p.z).d);
    return { R, E, X, curve, worst };
  }

  project(x, z) {
    let best = 0, bd = 1e18;
    for (let i = 0; i < this.pts.length - 1; i++) {
      const a = this.pts[i], b = this.pts[i + 1];
      const dx = b.x - a.x, dz = b.z - a.z, l2 = dx * dx + dz * dz || 1;
      const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / l2));
      const px = a.x + dx * t, pz = a.z + dz * t;
      const d = (px - x) ** 2 + (pz - z) ** 2;
      if (d < bd) { bd = d; best = this.cum[i] + Math.sqrt(l2) * t; }
    }
    return best;
  }

  pointAt(s) {
    const c = this.cum;
    if (s >= c[c.length - 1]) { const p = this.pts[this.pts.length - 1]; return { x: p.x, z: p.z }; }
    let i = 0;
    while (i < c.length - 2 && c[i + 1] < s) i++;
    const a = this.pts[i], b = this.pts[i + 1];
    const t = (s - c[i]) / ((c[i + 1] - c[i]) || 1);
    return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t };
  }

  update(dt, others = []) {
    const car = this.car;
    if (this.paused) { car.input = { throttle: 0, brake: 1, steer: 0 }; return; }
    // 峠道の行き止まり（道の端）：手前で向きを変える（町のモードでは見えない所で入れ替える）
    const rd = townRoadBetween(this.a, this.b);
    if (rd && rd.touge && (this.graph[this.b] || []).length <= 1 && Math.hypot(NODES[this.b].x - car.x, NODES[this.b].z - car.z) < 14) {
      if (this.onDeadEnd && this.onDeadEnd()) return;
      const lo = laneOffset(rd) * 2;
      const h = car.h + Math.PI;
      car.place(car.x - Math.cos(car.h) * lo, car.z + Math.sin(car.h) * lo, h, 0); // 旧進行方向の右へ（左 = (cos h, -sin h)）
      const nb = this.a; this.a = this.b; this.b = nb; this.c = this.pick(this.b, this.a);
      this.build();
      return;
    }
    let s = this.project(car.x, car.z);
    if (s >= this.exitS) {
      this.a = this.b; this.b = this.c; this.c = this.pick(this.b, this.a);
      this.build();
      s = this.project(car.x, car.z);
    }
    const look = 5 + car.speed * 0.45;
    const tgt = this.pointAt(s + look);
    const steer = steerToward(car, tgt.x, tgt.z);
    // 曲がりの手前で減速（曲がりの鋭さと半径から）
    const cos = this.turnCos;
    const rad = this.turnR / Math.max(0.3, Math.tan(Math.max(0.05, Math.acos(Math.max(-1, Math.min(1, cos)))) / 2));
    const vTurn = cos > 0.95 ? this.cruise : Math.max(2.5, Math.min(this.cruise, Math.sqrt(4.0 * Math.max(2, rad))));
    const toTurn = this.turnS0 - s;
    let vt = this.cruise;
    if (s < this.exitS) vt = Math.min(vt, toTurn > 0 ? Math.sqrt(vTurn * vTurn + 2 * 2.2 * toTurn) : vTurn);
    // 峠道：先のノード列の曲がり具合から減速（ノード間隔10mの1本道）
    const road = townRoadBetween(this.a, this.b);
    if (road && road.touge) {
      vt = this.cruise;
      const ia = road.nodes.indexOf(this.a), ib = road.nodes.indexOf(this.b);
      const dir = ib > ia ? 1 : -1;
      const here = s - this.project(NODES[this.b].x, NODES[this.b].z); // b からの距離（負＝手前）
      for (let k = 0; k < 6; k++) {
        const i0 = ib + dir * (k - 1), i1 = ib + dir * k, i2 = ib + dir * (k + 1);
        if (i0 < 0 || i2 < 0 || i0 >= road.nodes.length || i2 >= road.nodes.length) break;
        const A = NODES[road.nodes[i0]], B = NODES[road.nodes[i1]], C = NODES[road.nodes[i2]];
        const ux = B.x - A.x, uz = B.z - A.z, vx = C.x - B.x, vz = C.z - B.z;
        const ang = Math.abs(Math.atan2(ux * vz - uz * vx, ux * vx + uz * vz));
        const R = Math.hypot(vx, vz) / Math.max(1e-3, ang);
        const vlim = Math.sqrt(2.6 * R);
        const dist = Math.max(0, k * 10 - here);
        vt = Math.min(vt, Math.sqrt(vlim * vlim + 2 * 2.0 * dist));
      }
    }
    // 進行方向とパスの向きがずれている間（曲がった直後など）は加速しない
    const p0 = this.pointAt(s), p1 = this.pointAt(s + 3);
    const ang = Math.atan2(p1.x - p0.x, p1.z - p0.z);
    let herr = Math.abs(((car.h - ang + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
    if (herr > 0.25) vt = Math.min(vt, Math.max(2.5, 9 * (1 - (herr - 0.25) / 0.8)));
    // 前方の同じ向きの車には追従。待ちが長いときは横をすり抜ける（デッドロック防止）
    const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
    let blocked = false;
    if (this.squeeze > 0) this.squeeze -= dt;
    else {
      for (const o of others) {
        const ox = o.x - car.x, oz = o.z - car.z;
        const u = ox * f0 + oz * f1, w = ox * -f1 + oz * f0;
        const same = Math.cos(o.h - car.h) > 0.3;
        if (u > 0 && u < 22 && Math.abs(w) < 2.6 && (same || u < 9)) { vt = Math.min(vt, Math.max(0, (u - 7) * 0.6)); blocked = true; }
      }
    }
    this.wait = blocked && car.speed < 1 ? (this.wait || 0) + dt : 0;
    if (this.wait > 2.5) { this.wait = 0; this.squeeze = 3; }
    const err = vt - car.speed;
    let throttle = clamp(0.2 + err * 0.3, 0, 0.75);
    let brake = clamp(-err * 0.25, 0, 1);
    if (brake > 0.02) throttle = 0;
    if (this.reverseT > 0) {
      this.reverseT -= dt;
      if (car.gear !== -1) car.gear = -1;
      car.input = { throttle: 0, brake: 0.5, steer: -steer };
      if (this.reverseT <= 0) car.gear = 1;
      return;
    }
    if (vt > 1.5 && car.speed < 0.8) { this.stuck += dt; if (this.stuck > 2.5) { this.stuck = 0; this.reverseT = 1.5; } } else this.stuck = 0;
    if (car.gear < 1) car.gear = 1;
    car.input = { throttle, brake, steer };
  }
}
