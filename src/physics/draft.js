// ---- スリップストリーム（トー）----
// 前の車の真後ろ（後流）に入ると空気抵抗が減る。近いほど・真後ろほど強く、離れると後流が広がって弱まる。
// 高速ほど空気抵抗の割合が大きいので効果も大きい（60km/h 以下では効かない）。前の車も真後ろに付かれるとわずかに抵抗が減る
export const DRAFT = { maxDist: 45, peak: 0.42, lead: 0.05, minV: 60 / 3.6, rise: 4, fall: 2.5 };
export function draftTarget(car, cars) {
  if (car.speed < DRAFT.minV) return 0;
  const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
  const L = car.spec.car.length, W = car.spec.car.width;
  let best = 0;
  for (const o of cars) {
    if (o === car || o.speed < DRAFT.minV * 0.8) continue;
    if (Math.abs((o.y ?? 0) - (car.y ?? 0)) > 3) continue; // 立体交差の上下
    const dx = o.x - car.x, dz = o.z - car.z;
    const u = dx * f0 + dz * f1, w = Math.abs(dx * -f1 + dz * f0);
    const dh = Math.abs(((o.h - car.h + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
    if (dh > 0.45) continue; // 向きが違う（コーナーの途中・対向）
    // 前の車の後流の中（真後ろ）
    const gap = u - L; // バンパー間のおおよその距離
    if (gap > 0 && gap < DRAFT.maxDist) {
      const half = W * 0.75 + gap * 0.03; // 後流（車幅ほど）は離れるほど広がる
      const lat = Math.max(0, 1 - w / half);
      const lon = gap < 2 ? 0.75 + gap * 0.125 : Math.max(0, 1 - (gap - 2) / (DRAFT.maxDist - 2)) ** 1.3;
      best = Math.max(best, DRAFT.peak * lat * lon);
    }
    // 真後ろに付かれている（前の車の側）：後ろの渦が埋まってわずかに抵抗が減る
    if (u < 0 && -u - L < 3 && w < W * 0.6) best = Math.max(best, DRAFT.lead);
  }
  return best;
}
export function updateDraft(cars, dt) {
  for (const c of cars) {
    const t = cars.length > 1 ? draftTarget(c, cars) : 0;
    const k = Math.min(1, dt * (t > (c.draft || 0) ? DRAFT.rise : DRAFT.fall));
    c.draft = (c.draft || 0) + (t - (c.draft || 0)) * k;
  }
}
