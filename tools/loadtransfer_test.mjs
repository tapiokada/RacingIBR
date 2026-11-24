// 加速・制動時の前後荷重移動の検証：シミュレーションの前後輪荷重と理論値（ΔF = m·a·h / L）の比較
import { buildSpec, stockEquip } from '../src/physics/spec.js';
import { Vehicle } from '../src/physics/vehicle.js';
const dt = 1 / 500;
for (const id of (process.env.CARS || 'SWIFT-S,86-GR,EVO-IX').split(',')) {
  const s = buildSpec(id, stockEquip(id));
  const v = new Vehicle(s, { auto: true, tcs: 10 });
  const W = s.mass * 9.81, L = s.wheelbase, h = s.cgHeight;
  const staticF = W * s.frontWeight;
  for (const [label, inp, v0] of [['加速(1速全開)', { throttle: 1, brake: 0, steer: 0 }, 1], ['制動(全制動)', { throttle: 0, brake: 1, steer: 0 }, 80 / 3.6]]) {
    v.place(0, 0, 0, v0); v.input = inp;
    let t = 0, prevV = v.vu; const rows = [];
    while (t < 1.6) {
      v.step(dt); t += dt;
      if (Math.round(t / dt) % 100 === 0) {
        const a = (v.vu - prevV) / (100 * dt); prevV = v.vu;
        const N = v.wheelLoads, F = N[0] + N[1];
        // 理論：重心に働く慣性力 m·a が高さhにあるので、前輪荷重は m·a·h/L だけ減る（加速時）
        const Fth = staticF - (s.mass * a * h) / L;
        rows.push(`t${t.toFixed(1)} a=${(a / 9.81).toFixed(2)}g 前輪荷重 ${(F / W * 100).toFixed(1)}%（理論 ${(Fth / W * 100).toFixed(1)}%）ピッチ${((v.th - v.gp) * 57.3).toFixed(2)}°`);
      }
    }
    console.log(`${id} ${label}  静止時の前輪荷重 ${(s.frontWeight * 100).toFixed(1)}%`); console.log('   ' + rows.join('\n   '));
  }
}
