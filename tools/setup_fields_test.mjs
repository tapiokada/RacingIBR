// セッティング全項目：値を変えると物理パラメータが実際に変わるか
import { buildSpec } from '../src/physics/spec.js';
import { defaultSetup } from '../src/physics/setup.js';
import { CARS } from '../src/data/cars.js';
const sig = (s) => JSON.stringify([s.susp, s.brakeBias, s.brakeTorque, s.diffF, s.diffR, s.gears, s.final, s.clF, s.clR, s.cd, s.center, s.cgHeight]);
let bad = 0;
for (const id of ['86-GR', 'SWIFT-S', 'EVO-IX']) {
  const eq = { ...CARS[id].stock, suspension: 'sus_full', brake: 'brk_full', transmission: 'tm_full', aero: 'aero_full' };
  const D = defaultSetup(id);
  const base = sig(buildSpec(id, eq, D));
  const keys = ['rideF', 'rideR', 'freqF', 'freqR', 'arbF', 'arbR', 'dampCF', 'dampCR', 'dampEF', 'dampER', 'camberF', 'camberR', 'toeF', 'toeR', 'brakeBal', 'brakeStr', 'final', 'dfF', 'dfR', 'lsdInitF', 'lsdAccF', 'lsdDecF', 'lsdInitR', 'lsdAccR', 'lsdDecR', 'awdSplit'];
  const out = [];
  for (const k of keys) {
    const S = { ...D, gears: [...D.gears] };
    const cur = S[k] ?? (k === 'dfF' || k === 'dfR' ? 100 : 10);
    S[k] = k === 'awdSplit' && cur == null ? null : cur + (k.startsWith('ride') ? -5 : k.startsWith('lsd') || k.startsWith('arb') || k.startsWith('damp') || k === 'brakeStr' || k.startsWith('df') ? 3 : k === 'brakeBal' ? 1 : 0.1);
    const changed = sig(buildSpec(id, eq, S)) !== base;
    const relevant = !((k.endsWith('F') && k.startsWith('lsd') && CARS[id].drive === 'FR') || (k.endsWith('R') && k.startsWith('lsd') && CARS[id].drive === 'FF') || (k === 'awdSplit' && !CARS[id].center));
    if (relevant && !changed) { out.push(k); bad++; }
  }
  const S = { ...D, gears: D.gears.map((g, i) => (i === 2 ? g + 0.01 : g)) };
  if (sig(buildSpec(id, eq, S)) === base) { out.push('gears'); bad++; }
  console.log(id, out.length ? '反映されない: ' + out.join(',') : '全項目反映OK');
}
process.exit(bad ? 1 : 0);
