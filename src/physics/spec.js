// 車両 + 装着パーツ → 物理パラメータ
import { CARS } from '../data/cars.js';
import { PART_BY_ID } from '../data/parts.js';
import { applyChassis } from './setup.js';

const lerpTable = (tbl, x) => {
  if (x <= tbl[0][0]) return tbl[0][1];
  for (let i = 1; i < tbl.length; i++) {
    if (x <= tbl[i][0]) {
      const [x0, y0] = tbl[i - 1];
      const [x1, y1] = tbl[i];
      return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
    }
  }
  return tbl[tbl.length - 1][1];
};

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// equipped: { cat: partId | null }
export function buildSpec(carId, equipped, setup = null) {
  const car = CARS[carId];
  const get = (cat) => (equipped[cat] ? PART_BY_ID[equipped[cat]] : null);
  const eng = get('engine') || PART_BY_ID[car.stock.engine];
  const bore = get('boreup');
  const muf = get('muffler') || PART_BY_ID.muf_stock;
  const ic = get('intercooler');
  const tb = get('turbo');
  const tire = get('tire') || PART_BY_ID.tire_street;
  const wheel = get('wheel') || PART_BY_ID.wh_stock;
  const tw = get('tirewidth') || PART_BY_ID.tw_stock;
  const sus = get('suspension') || PART_BY_ID.sus_stock;
  const brk = get('brake') || PART_BY_ID.brk_stock;
  const tm = get('transmission') || PART_BY_ID.tm_stock;
  const aero = get('aero');

  // 重量は純正装着パーツとの差分
  let partsWeight = 0;
  for (const p of [eng, bore, muf, ic, tb, tire, sus, brk, tm, aero]) if (p) partsWeight += p.weight || 0; // ホイール・タイヤ幅は下で計算
  for (const id of Object.values(car.stock)) if (id) partsWeight -= PART_BY_ID[id].weight || 0;

  const redline = eng.redline + (bore?.redlineDelta || 0);
  const limiter = eng.limiter + (bore?.redlineDelta || 0);
  const icEff = tb ? (ic ? ic.eff : 0.7) : 0;

  const top = car.gears[car.gears.length - 1];
  const gears = car.gears.map((g) => top * Math.pow(g / top, tm.close));
  const final = car.final * tm.final;

  // ホイール・タイヤ幅：4輪分の重量差
  const W0 = car.tireW || 215, Wn = W0 + tw.dw;
  const wheelMass = 4 * (wheel.wmass + tw.dw * 0.062);
  partsWeight += wheelMass;
  const mass = car.mass + partsWeight;
  // グリップ：接地面積（幅）に対して頭打ちで増える（荷重感度のため約0.25乗）。扁平化で横剛性↑
  const widthGrip = Math.pow(Wn / W0, 0.25);
  const inchGrip = 1 + 0.015 * wheel.inch - 0.0025 * wheel.inch * (wheel.inch - 1);
  const stiff = 1 / (1 + 0.07 * wheel.inch + 0.25 * (Wn / W0 - 1)); // ピークに達するスリップ角・スリップ率が小さく＝応答が鋭く
  const frontWeight = car.frontWeight + (eng.weight - (PART_BY_ID[car.stock.engine].weight || 0)) * 0.0006;

  const spec = {
    car, carId, equipped: { ...equipped },
    engine: eng, turbo: tb, tire, sus, brakePart: brk, trans: tm, aero, muffler: muf,
    mass,
    frontWeight: Math.min(0.66, Math.max(0.42, frontWeight)),
    cgHeight: car.cgHeight - sus.cgDrop,
    wheelbase: car.wheelbase, trackF: car.trackF, trackR: car.trackR,
    tireRadius: car.tireRadius,
    drive: car.drive, awdFront: car.awdFront || 0,
    gears, reverse: car.reverse, final, shiftTime: tm.shift,
    // エンジン回転系の慣性（クランク＋フライホイール＋クラッチ）。実機相当に補正
    idle: eng.idle, redline, limiter, engineInertia: eng.inertia * 0.75,
    cylinders: eng.cylinders,
    loud: muf.loud,
    mu: tire.mu * sus.grip * widthGrip * inchGrip, muX: tire.muX || 1.12, peakAngle: tire.peakAngle * stiff, peakRatio: tire.peakRatio, steerRef: tire.peakAngle, // steerRef: 速度感応ステアの基準（タイヤ銘柄で決まり、扁平化では変えない）
    wheelPart: wheel, widthPart: tw, tireW: Wn, rimIn: (car.rimIn || 17) + wheel.inch, wheelMass,
    wheelInertiaK: wheel.inertia * (1 + 0.004 * tw.dw), // 回転慣性の倍率
    rrK: 0.011 * (1 + 0.004 * tw.dw + 0.03 * wheel.inch), // 転がり抵抗係数（幅広・扁平で増） // muX: 縦（駆動・制動）の摩擦係数は横の約1.12倍（摩擦楕円）
    loadTau: sus.tau, rollFront: car.rollFront + sus.rollFront,
    length: car.length, width: car.width, height: car.height,
    brakeTorque: car.brakeTorque * brk.torque, brakeBias: car.brakeBias,
    cd: car.cd + (aero?.cd || 0), area: car.area + 0.0012 * tw.dw, // 幅広タイヤで前面投影面積わずかに増
    // ボディの揚力（＋）とエアロパーツのダウンフォースの合計（ダウンフォース＝＋）
    clF: (aero?.clF || 0) - (car.liftF || 0), clR: (aero?.clR || 0) - (car.liftR || 0),
    center: car.center ? { ...car.center } : null,
    steerLock: car.steerLock,
    boostMax: tb ? tb.boost : 0, turboLag: tb ? tb.lag : 0,
    icEff,
    _bore: bore ? bore.torqueMul : 1,
    _mufLow: muf.low, _mufHigh: muf.high,
  };
  applyChassis(spec, setup);
  spec.setup = setup ? { ...setup } : null;
  spec.boostTarget = (rpm) => {
    if (!tb) return 0;
    let b = tb.boost * smooth(tb.spool[0], tb.spool[1], rpm);
    if (rpm > tb.fade[0]) b *= Math.max(0.3, 1 - (tb.fade[1] * (rpm - tb.fade[0])) / 2000);
    return b;
  };
  // NA相当トルク（マフラー・ボアアップ込み）
  spec.naTorque = (rpm) => {
    const base = lerpTable(eng.torque, rpm) * spec._bore;
    const hi = smooth(redline * 0.45, redline * 0.75, rpm);
    return base * (spec._mufLow * (1 - hi) + spec._mufHigh * hi);
  };
  spec.fullTorque = (rpm, boost) => spec.naTorque(rpm) * (1 + boost * icEff);
  // 定常状態の最大トルク/出力（表示用）
  let maxT = 0, maxTrpm = 0, maxP = 0, maxPrpm = 0;
  for (let rpm = 1000; rpm <= redline; rpm += 50) {
    const t = spec.fullTorque(rpm, spec.boostTarget(rpm));
    const p = (t * rpm * 2 * Math.PI) / 60 / 1000; // kW
    if (t > maxT) { maxT = t; maxTrpm = rpm; }
    if (p > maxP) { maxP = p; maxPrpm = rpm; }
  }
  spec.maxTorque = maxT; spec.maxTorqueRpm = maxTrpm;
  spec.maxPowerKW = maxP; spec.maxPowerPS = maxP * 1.3596; spec.maxPowerRpm = maxPrpm;
  spec.pwr = mass / spec.maxPowerPS;
  spec.rating = ratingOf(spec);
  return spec;
}

// 戦闘力（簡易指標）
export function ratingOf(s) {
  const power = s.maxPowerPS / (s.mass / 1000); // PS/t
  const grip = s.mu * (1 + (s.clF + s.clR) * 0.15);
  const brake = Math.min(1.3, s.brakeTorque / (s.mass * 3.4));
  return Math.round(power * 2.2 + grip * 220 + brake * 60 + (s.trans.close < 1 || s.trans.id === 'tm_full' ? 15 : 0) + (s.sus.id === 'sus_full' ? 6 : 0));
}

export function stockEquip(carId) {
  return { ...CARS[carId].stock };
}

// 例 225/40R18（外径は純正のまま、扁平率をリム径から逆算して5刻み）
export function tireSize(spec) {
  const d = spec.tireRadius * 2000, rim = spec.rimIn * 25.4;
  const aspect = Math.round((((d - rim) / 2) / spec.tireW) * 20) * 5;
  return `${spec.tireW}/${aspect}R${spec.rimIn}`;
}

