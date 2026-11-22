import { LAYOUTS } from '../src/data/map.js';
import { CoursePath, resolveWalls } from '../src/physics/track.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
const L = LAYOUTS.find(l=>l.key===process.argv[2]); const id = process.argv[3]||'86-GR';
const path = new CoursePath(L); const dt=1/500;
const car = new Vehicle(buildSpec(id, stockEquip(id)), {auto:true});
const p = path.posAt(0,0); car.place(p.x,p.z,p.h,0);
const ai = new RaceAI(car, path, 0.9); const bins={};
for(let t=0;t<80;t+=dt){ ai.update(dt); car.step(dt); if(resolveWalls(car,path.corridor)>0){const b=Math.round(path.s[ai.hint]/10)*10; bins[b]=(bins[b]||0)+1;} }
console.log(bins);
console.log('corners', path.corners.map(c=>`${c.s0|0}-${c.s1|0}:+${c.extra.toFixed(1)}`).join(' '));
let out=[]; for(let i=0;i<path.n;i+=3){ if(Math.abs(path.curv[i])>0.07) out.push(`${path.s[i]|0}:R${(1/path.curv[i]).toFixed(1)} hw${path.hw[i].toFixed(1)}`);} console.log(out.join(' '));
