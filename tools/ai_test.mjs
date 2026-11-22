import { LAYOUTS } from '../src/data/map.js';
import { CoursePath, resolveWalls } from '../src/physics/track.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
import { RaceAI } from '../src/ai.js';
const dt=1/500;
for (const L of LAYOUTS) {
  const path = new CoursePath(L);
  const row=[L.key.padEnd(11), 'len', path.length.toFixed(0)+'m'];
  for (const id of ['86-GR','WRX-IMP','RS-RS']) {
    const car = new Vehicle(buildSpec(id, stockEquip(id)), {auto:true});
    const p = path.posAt(0,0); car.place(p.x,p.z,p.h,0);
    const ai = new RaceAI(car, path, 0.9);
    let t=0, dist=0, hits=0, last=0, lap=null, prevS=0;
    while(t<400){
      ai.update(dt); car.step(dt); hits += resolveWalls(car, path.corridor)>0?1:0; t+=dt;
      const pr = path.project(car.x,car.z,ai.hint); 
      let ds = pr.s-prevS; if (ds<-path.length/2) ds+=path.length; if(ds>path.length/2) ds-=path.length; dist+=ds; prevS=pr.s;
      if (dist>=path.length){lap=t;break;}
    }
    row.push(`${id}:${lap?lap.toFixed(1)+'s':'DNF('+(dist|0)+')'} wall${hits}`);
  }
  console.log(row.join(' '));
}
