import { CARS } from '../src/data/cars.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
const dt = 1/500;
for (const id of Object.keys(CARS)) {
  const s = buildSpec(id, stockEquip(id));
  const v = new Vehicle(s, { auto: true, tcs: process.env.TCS==='1' });
  v.place(0,0,0,0);
  v.input = { throttle: 1, brake: 0, steer: 0 };
  let t=0, t100=null, t400=null, d=0;
  while (t < 60) { v.step(dt); t+=dt; if (!t100 && v.kmh>=100) t100=t; if(!t400 && Math.hypot(v.x,v.z)>=402) t400=t; }
  const vmax = v.kmh;
  // braking 100->0
  v.place(0,0,0,100/3.6); v.input={throttle:0,brake:1,steer:0}; let x0=v.z; t=0;
  while (v.speed>0.3 && t<10){v.step(dt);t+=dt;}
  const bd = v.z-x0;
  // skidpad: steady steer at 60 km/h -> measure lateral g
  v.place(0,0,0,60/3.6); let maxAy=0; t=0;
  while(t<8){ v.input={throttle: v.kmh<60?0.6:0.2, brake:0, steer: 1}; v.step(dt); t+=dt; if(t>3) maxAy=Math.max(maxAy, Math.abs(v.vu*v.w)/9.81);} 
  console.log(id.padEnd(9), '0-100', t100?.toFixed(2), 's  400m', t400?.toFixed(2),'s  Vmax', vmax.toFixed(0), 'km/h  brake100', bd.toFixed(1),'m  latG', maxAy.toFixed(2), 'beta', (Math.atan2(v.vv,v.vu)*57.3).toFixed(1));
}
