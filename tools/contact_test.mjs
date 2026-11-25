// ライバルAIの接触回避とミスの確認：遅いプレイヤー役（AI）の後ろからライバルが追い上げて抜くまでの接触回数
import { LAYOUTS } from '../src/data/map.js';
import { getCoursePath, resolveWalls } from '../src/physics/track.js';
import { HarunaGround } from '../src/physics/touge.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle, collideCars } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
const dt = 1 / 500;
const ground = new HarunaGround();
let seed = 7; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
for (const key of (process.env.L || 'speedway_f,rikkyo_f,higashi_f,haruna_s2_d').split(',')) {
  const L = LAYOUTS.find((l) => l.key === key); const path = getCoursePath(L);
  const g = key.startsWith('haruna') ? ground : null;
  const row = [key.padEnd(12)];
  for (const [label, margin] of [['攻撃的', 0.35], ['標準', 0.8], ['慎重', 1.4]]) {
    const P = new Vehicle(buildSpec('86-GR', stockEquip('86-GR')), { auto: true, ground: g });
    const R = new Vehicle(buildSpec('WRX-IMP', stockEquip('WRX-IMP')), { auto: true, ground: g });
    const s0 = path.open ? path.startS : 0;
    const a = path.posAt(s0 + 25, 0), b = path.posAt(s0 - 5, 0);
    P.place(a.x, a.z, a.h, 0); R.place(b.x, b.z, b.h, 0);
    const pa = new RaceAI(P, path, 0.78, { mistakes: false }), ra = new RaceAI(R, path, 0.95, { margin, rand: rnd });
    let back = 0, side = 0;
    let t = 0, hits = 0, minGap = 1e9, passed = null, hint = -1, hint2 = -1;
    let contact = false;
    while (t < 120) {
      pa.update(dt, []); ra.update(dt, [P]); // プレイヤー役は相手を避けない
      P.step(dt); R.step(dt); resolveWalls(P, path.corridor); resolveWalls(R, path.corridor);
      const j = Math.abs(P.x - R.x) < 8 && Math.abs(P.z - R.z) < 8 ? collideCars(P, R) : 0;
      if (j > 0 && t - (globalThis.__lastC || -9) > 2) { globalThis.__lastC = t; const u = (P.x - R.x) * Math.sin(R.h) + (P.z - R.z) * Math.cos(R.h); if (u > 2) hits++; else if (u < -2) back++; else side++; if (process.env.DBG) console.log("contact t", t.toFixed(1), "mistake", JSON.stringify(ra.mistake), "R", R.kmh.toFixed(0), "P", P.kmh.toFixed(0)); } contact = j > 0;
      const pp = path.project(P.x, P.z, hint), rp = path.project(R.x, R.z, hint2); hint = pp.i; hint2 = rp.i;
      let ds = rp.s - pp.s; if (!path.open) { if (ds < -path.length / 2) ds += path.length; if (ds > path.length / 2) ds -= path.length; }
      if (Math.abs(ds) < 3) minGap = Math.min(minGap, Math.abs(rp.lat - pp.lat) - 1.75);
      if (passed == null && ds > 8) passed = t;
      if (process.env.DBG && Math.round(t / dt) % 500 === 0 && t < 3) console.log('  t', t.toFixed(0), 'R', R.kmh.toFixed(0), 'P', P.kmh.toFixed(0), 'ds', ds.toFixed(0), 'mist', ra.mistake?.type || '', 'stuck', ra.reverseT.toFixed(1), 'gear', R.gear, 'inp', JSON.stringify(R.input), 'rpm', R.rpm|0, 'lat', rp.lat.toFixed(1), 'hw', path.hw[rp.i].toFixed(1), 's', rp.s.toFixed(0));
      t += dt;
    }
    row.push(`${label}: 追突${hits} 横${side} 被追突${back} 抜いた${passed ? passed.toFixed(0) + 's' : '×'} 並走時の最小間隔${minGap < 1e8 ? minGap.toFixed(2) + 'm' : '-'}`);
  }
  console.log(row.join('  '));
}
// ミスの頻度
for (const skill of [0.8, 0.88, 0.93, 0.97]) {
  const path = getCoursePath(LAYOUTS.find((l) => l.key === 'rikkyo_f'));
  const C = new Vehicle(buildSpec('86-GR', stockEquip('86-GR')), { auto: true });
  const p = path.posAt(0, 0); C.place(p.x, p.z, p.h, 0);
  const ai = new RaceAI(C, path, skill, { rand: rnd });
  let t = 0, mis = 0, slides = 0, wall = 0, inSlide = false, had = null;
  while (t < 300) { ai.update(dt, []); C.step(dt); if (resolveWalls(C, path.corridor) > 0) wall++; t += dt;
    if (ai.mistake && ai.mistake !== had) { mis++; had = ai.mistake; }
    const b = Math.abs(Math.atan2(C.vv, Math.max(3, Math.abs(C.vu)))); if (b > 0.25 && !inSlide) slides++; inSlide = b > 0.25; }
  console.log(`skill ${skill}: 5分間でミス${mis}回 大きなスライド${slides}回 壁接触${(wall * dt).toFixed(1)}s`);
}
