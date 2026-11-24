// 榛名山の峠コース：AIの走行テスト（勾配・路面高さ込み）
import { TOUGE_LAYOUTS } from '../src/data/map.js';
import { getCoursePath, resolveWalls } from '../src/physics/track.js';
import { HarunaGround } from '../src/physics/touge.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
const dt = 1 / 500;
const ground = new HarunaGround();
for (const L of TOUGE_LAYOUTS.filter((l) => !process.env.ONLY || l.key.startsWith(process.env.ONLY))) {
  const path = getCoursePath(L);
  const row = [L.key.padEnd(14), (path.raceLen / 1000).toFixed(2) + 'km'];
  for (const id of (process.env.CARS ? process.env.CARS.split(',') : ['86-GR', 'WRX-IMP', 'RS-RS'])) {
    const car = new Vehicle(buildSpec(id, stockEquip(id)), { auto: true, ground });
    const p = path.posAt(path.startS - 9, 0); car.place(p.x, p.z, p.h, 0);
    const ai = new RaceAI(car, path, 0.9);
    let t = 0, hits = 0, done = null, vmax = 0, air = 0, bottom = 0, hint = -1;
    while (t < 600) {
      ai.update(dt); car.step(dt); if (resolveWalls(car, path.corridor) > 0) hits++; t += dt;
      vmax = Math.max(vmax, car.kmh); if (car.air > 0.05) air++; if (car.bottom > 0) bottom++;
      const pr = path.project(car.x, car.z, hint); hint = pr.i;
      if (pr.s >= path.finishS) { done = t; break; }
    }
    row.push(`${id}:${done ? fmtT(done) : 'DNF'} wall${hits} vmax${vmax | 0}${air ? ' air' + (air * dt).toFixed(1) + 's' : ''}`);
  }
  console.log(row.join('  '));
}
function fmtT(t) { const m = Math.floor(t / 60); return `${m}'${(t - m * 60).toFixed(1).padStart(4, '0')}`; }
