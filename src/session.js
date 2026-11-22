// 走行セッション：車両・物理・カメラ・音の管理
import { Vehicle, collideCars } from './physics/vehicle.js';
import { resolveWalls } from './physics/track.js';
import { buildSpec } from './physics/spec.js';
import { buildCarModel, syncCarModel, addHeadlights } from './render/carModel.js';
import { CARS } from './data/cars.js';

const PHYS_DT = 1 / 500;

export class DriveSession {
  constructor(game, { corridor, path = null }) {
    this.game = game;
    this.corridor = corridor;
    this.path = path;
    this.entries = [];
    this.player = null;
    this.acc = 0;
    this.time = 0;
    this.controlsEnabled = true;
    this.frozen = false;
    this.flash = 0;
  }

  addCar({ carId, equipped, color, isPlayer = false, name = '', ai = null }) {
    const spec = buildSpec(carId, equipped);
    const s = this.game.settings;
    const car = new Vehicle(spec, { auto: isPlayer ? s.transmission === 'AT' : true, abs: isPlayer ? s.abs : true, tcs: isPlayer ? s.tcs : false });
    const model = buildCarModel(CARS[carId], color, { aero: equipped.aero, wing: equipped.aero === 'aero_wing' || equipped.aero === 'aero_full' ? 'gt' : undefined });
    this.game.world.scene.add(model);
    if (isPlayer) addHeadlights(model);
    const engine = this.game.audio.createEngine(spec);
    const e = { car, model, engine, isPlayer, name, ai, color, carId, equipped, flash: 0 };
    this.entries.push(e);
    if (isPlayer) this.player = e;
    return e;
  }

  removeCar(e) {
    this.game.world.scene.remove(e.model);
    this.game.audio.destroyEngine(e.engine);
    this.entries = this.entries.filter((x) => x !== e);
  }

  readPlayerInput(dt) {
    const inp = this.game.input;
    const p = this.player;
    if (!p) return;
    const car = p.car;
    const prev = car.input;
    if (!this.controlsEnabled) { car.input = { throttle: 0, brake: this.frozen ? 1 : 0, steer: 0 }; return; }
    const tT = inp.held('throttle') ? 1 : 0;
    const tB = inp.held('brake') ? 1 : 0;
    const steer = (inp.held('right') ? 1 : 0) - (inp.held('left') ? 1 : 0);
    const ramp = (a, b, r) => a + Math.max(-r * dt, Math.min(r * dt, b - a));
    car.input = { throttle: ramp(prev.throttle, tT, tT > prev.throttle ? 7 : 12), brake: ramp(prev.brake, tB, 10), steer };
    if (inp.hit('reset')) {
      // resetRule: 'battle' = 10km/h以下のときだけ、10m後方へ
      if (this.resetRule === 'battle') {
        if (Math.abs(car.vu) * 3.6 > 10) { this.onResetDenied && this.onResetDenied(); }
        else { this.resetPlayer(-10); return; }
      } else { this.resetPlayer(); return; }
    }
    if (inp.hit('shiftUp')) car.shiftUp();
    if (inp.hit('shiftDown')) car.shiftDown();
  }

  // 車両リセット：進行方向前向き・道路中央・0km/h
  resetPlayer(back = 0) {
    const car = this.player.car;
    let x, z, h;
    if (this.path) {
      const pr = this.path.project(car.x, car.z, -1);
      const p = this.path.posAt(pr.s + back, 0);
      x = p.x; z = p.z; h = p.h;
    } else {
      let best = null, bd = 1e18;
      for (const sg of this.corridor.segs) {
        const dx = sg.bx - sg.ax, dz = sg.bz - sg.az, l2 = dx * dx + dz * dz;
        const t = Math.max(0, Math.min(1, ((car.x - sg.ax) * dx + (car.z - sg.az) * dz) / l2));
        const px = sg.ax + dx * t, pz = sg.az + dz * t;
        const d = (px - car.x) ** 2 + (pz - car.z) ** 2;
        if (d < bd) { bd = d; best = { px, pz, dx, dz }; }
      }
      const [f0, f1] = car.fwd();
      const sgn = best.dx * f0 + best.dz * f1 >= 0 ? 1 : -1;
      x = best.px; z = best.pz; h = Math.atan2(best.dx * sgn, best.dz * sgn);
    }
    car.place(x, z, h, 0);
    car.input = { throttle: 0, brake: 0, steer: 0 };
    car.steer = 0;
    car.gear = 1;
    this.game.rig.reset();
    this.onReset && this.onReset();
  }

  update(dt) {
    this.readPlayerInput(dt);
    if (this.frozen) {
      for (const e of this.entries) { e.car.vu = 0; e.car.vv = 0; e.car.w = 0; }
    }
    const others = (e) => this.entries.filter((x) => x !== e).map((x) => x.car);
    for (const e of this.entries) if (e.ai && !this.frozen) e.ai.update(dt, others(e));
    this.acc += Math.min(dt, 0.05);
    let n = 0;
    while (this.acc >= PHYS_DT && n < 40) {
      this.acc -= PHYS_DT; n++;
      for (const e of this.entries) {
        const before = e.car.speed;
        e.car.step(PHYS_DT);
        const hit = resolveWalls(e.car, this.corridor);
        if (hit > 0) e.impact = Math.max(e.impact || 0, before);
      }
      for (let i = 0; i < this.entries.length; i++)
        for (let j = i + 1; j < this.entries.length; j++) {
          const a = this.entries[i].car, b = this.entries[j].car;
          if (Math.abs(a.x - b.x) < 8 && Math.abs(a.z - b.z) < 8) collideCars(a, b);
        }
    }
    this.time += dt;
    for (const e of this.entries) {
      if (e.flash > 0) e.flash -= dt;
      const fl = e.flash > 0 ? (Math.sin(e.flash * 40) > 0 ? 1 : 0) : 0;
      syncCarModel(e.model, e.car, { flash: fl });
    }
  }

  updateAudio(listener) {
    const audio = this.game.audio;
    for (const e of this.entries) {
      if (e === this.player) audio.updateEngine(e.engine, e.car, 1, 0);
      else {
        const d = Math.hypot(e.car.x - listener.car.x, e.car.z - listener.car.z);
        const vol = Math.max(0, 1 - d / 120) * 0.6;
        const [rx, rz] = listener.car.right();
        const pan = Math.max(-1, Math.min(1, ((e.car.x - listener.car.x) * rx + (e.car.z - listener.car.z) * rz) / 30));
        audio.updateEngine(e.engine, e.car, vol, pan);
      }
    }
  }

  dispose() {
    for (const e of [...this.entries]) this.removeCar(e);
  }
}

// リプレイ記録
export const REPLAY_STRIDE = 15;
export class Recorder {
  constructor(rate = 30) { this.rate = rate; this.t = 0; this.buf = []; this.frames = 0; }
  sample(dt, car) {
    this.t += dt;
    while (this.t >= 1 / this.rate) {
      this.t -= 1 / this.rate;
      this.buf.push(car.x, car.z, car.h, car.pitch, car.roll, car.steer, car.spinF, car.spinR, car.rpm, car.vu,
        car.gear, car.input.brake, car.input.throttle, car.boost, car.slip);
      this.frames++;
    }
  }
  finish(meta) {
    return { ...meta, rate: this.rate, stride: REPLAY_STRIDE, frames: this.frames, data: new Float32Array(this.buf) };
  }
}
