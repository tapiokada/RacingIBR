import { LAYOUTS } from '../src/data/map.js';
import { CoursePath, resolveWalls } from '../src/physics/track.js';
import { buildSpec } from '../src/physics/spec.js';
import { Vehicle, collideCars } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
import { LapTracker } from '../src/modes/common.js';
import { RIVALS } from '../src/data/rivals.js';
import { CARS } from '../src/data/cars.js';
const key = process.argv[2] || 'speedway_f';
const L = LAYOUTS.find(l=>l.key===key); const path = new CoursePath(L);
const r = RIVALS[0];
const P = new Vehicle(buildSpec('86-GR', CARS['86-GR'].stock), {auto:true});
const R = new Vehicle(buildSpec(r.car, r.parts), {auto:true});
const lat = Math.min(2.4, path.hw[0]-1.4);
let p = path.posAt(-9, lat); P.place(p.x,p.z,p.h,0); p = path.posAt(-9,-lat); R.place(p.x,p.z,p.h,0);
const aP = new RaceAI(P, path, 1.0), aR = new RaceAI(R, path, r.skill);
const tp = new LapTracker(path,-9), tr = new LapTracker(path,-9); tp.start(0); tr.start(0);
const dt = 1/500; let t=0;
for (let f=0; f<60*120; f++) {
  aP.update(1/60,[R]); aR.update(1/60,[P]);
  for (let k=0;k<8;k++){ P.step(dt); R.step(dt); resolveWalls(P,path.corridor); resolveWalls(R,path.corridor); collideCars(P,R);} 
  t+=1/60; const a=tp.dist, b=tr.dist; tp.update(P,t); tr.update(R,t);
  if (Math.abs(tr.dist-b)>5 || Math.abs(tp.dist-a)>5) console.log('jump', t.toFixed(2), a|0, tp.dist|0, b|0, tr.dist|0);
  if (f%600==0) console.log(t.toFixed(1), 'P', tp.dist|0, P.kmh|0, 'R', tr.dist|0, R.kmh|0);
  if (tp.dist>path.length*L.course.laps || tr.dist>path.length*L.course.laps) { console.log('finish', t.toFixed(1), tp.dist|0, tr.dist|0); break; }
}
