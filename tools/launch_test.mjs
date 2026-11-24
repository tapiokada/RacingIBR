// 0-100km/h 加速の内訳：駆動輪のスリップ率・クラッチ滑り・変速時間・各ギアの所要時間
import { CARS } from '../src/data/cars.js';
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
const dt = 1 / 500;
const REAL = { '86-GR': 6.3, 'BRZ-ZD': 6.3, 'RS-RS': 7.5, 'SWIFT-S': 8.1, '80-Supra': 5.1, 'S2K-AP': 6.0, 'WRX-IMP': 5.0, 'EVO-IX': 5.0, 'Z-32': 5.8, 'R34-GTR': 4.9 };
for (const id of (process.env.CARS ? process.env.CARS.split(',') : Object.keys(CARS))) {
  const s = buildSpec(id, stockEquip(id));
  const v = new Vehicle(s, { auto: true, tcs: +(process.env.TCS || 0) });
  v.place(0, 0, 0, 0); v.input = { throttle: 1, brake: 0, steer: 0 };
  let t = 0, slipSum = 0, n = 0, maxSlip = 0, shiftT = 0, clutchT = 0, gT = {}, slipOver = 0;
  const drv = s.drive === 'FF' ? [0, 1] : s.drive === 'FR' ? [2, 3] : [0, 1, 2, 3];
  while (v.kmh < 100 && t < 20) {
    v.step(dt); t += dt;
    const k = Math.max(...drv.map((i) => (v.om[i] * s.tireRadius - v.vl[i]) / Math.max(Math.abs(v.vl[i]), 4)));
    slipSum += k; n++; maxSlip = Math.max(maxSlip, k);
    if (k > s.peakRatio * 1.3) slipOver += dt;
    if (v.shiftTimer > 0) shiftT += dt;
    gT[v.gear] = (gT[v.gear] || 0) + dt;
  }
  console.log(id.padEnd(9), `0-100 ${t.toFixed(2)}s（実車目安 ${REAL[id]}s）`, `平均スリップ ${(slipSum / n * 100).toFixed(1)}% 最大 ${(maxSlip * 100).toFixed(0)}% ピーク超え ${slipOver.toFixed(2)}s`, `変速中 ${shiftT.toFixed(2)}s`, 'ギア別', Object.entries(gT).map(([g, x]) => `${g}:${x.toFixed(2)}`).join(' '));
}
