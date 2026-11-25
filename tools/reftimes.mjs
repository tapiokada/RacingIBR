// GSのタイムランキング用：街を走っている各ライバルが各コースを単独で完走したときの参考タイムを計算して
// src/data/reftimes.js に書き出す（バトルと同じスタート位置・周回数。AIの攻め具合はライバルのskill）
// usage: node tools/reftimes.mjs   （数分かかります）
import fs from 'fs';
import { LAYOUTS, areaOfLayout } from '../src/data/map.js';
import { getCoursePath, resolveWalls } from '../src/physics/track.js';
import { HarunaGround } from '../src/physics/touge.js';
import { buildSpec } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
import { ALL_RIVALS } from '../src/data/rivals.js';
const dt = 1 / 500;
const ground = new HarunaGround();
const out = {};
const t0 = Date.now();
for (const L of LAYOUTS) {
  const area = areaOfLayout(L);
  const path = getCoursePath(L);
  const total = path.open ? path.raceLen : path.length * L.course.laps;
  const s0 = path.open ? path.startS : 0;
  out[L.key] = {};
  for (const r of ALL_RIVALS.filter((x) => x.area === area)) {
    const car = new Vehicle(buildSpec(r.car, r.parts, r.setup || null), { auto: true, ground: area === 'haruna' ? ground : null });
    const p = path.posAt(s0 - 9, 0); car.place(p.x, p.z, p.h, 0);
    const ai = new RaceAI(car, path, r.skill, { mistakes: false }); // 参考タイムはミスなし
    let t = 0, dist = -9, hint = -1, prevS = null, done = null;
    while (t < 900) {
      ai.update(dt); car.step(dt); resolveWalls(car, path.corridor); t += dt;
      const pr = path.project(car.x, car.z, hint); hint = pr.i;
      if (prevS != null) { let ds = pr.s - prevS; if (!path.open) { if (ds < -path.length / 2) ds += path.length; if (ds > path.length / 2) ds -= path.length; } if (Math.abs(ds) < 30) dist += ds; }
      prevS = pr.s;
      if (dist >= total) { done = t; break; }
    }
    if (done) out[L.key][r.id] = +done.toFixed(2);
  }
  console.log(L.key, JSON.stringify(out[L.key]), ((Date.now() - t0) / 1000).toFixed(0) + 's');
}
fs.writeFileSync('src/data/reftimes.js', `// 自動生成（tools/reftimes.mjs）：各ライバルが各コースを単独で完走したときの参考タイム[秒]\nexport const REF_TIMES = ${JSON.stringify(out)};\n`);
