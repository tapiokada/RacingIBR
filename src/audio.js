// BGM（mp3）とエンジン音（WebAudio合成）
const BGM = {
  town: 'assets/audio/town_midnight_bliss.mp3',
  battle: 'assets/audio/battle.mp3',
};

export class AudioSys {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.tracks = {};
    this.current = null;
    this.engines = [];
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.connect(this.ctx.destination);
      this.applyVolume();
      // ノイズバッファ
      const len = this.ctx.sampleRate * 2;
      const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.noise = buf;
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    if (this.pending) { const p = this.pending; this.pending = null; this.playBgm(p); }
  }

  applyVolume() {
    if (this.master) this.master.gain.value = this.settings.se;
    for (const t of Object.values(this.tracks)) t.volume = this.current && this.tracks[this.current] === t ? this.settings.bgm : t.volume;
  }

  playBgm(name) {
    if (this.current === name) return;
    const prev = this.current ? this.tracks[this.current] : null;
    this.current = name;
    if (prev) this.fade(prev, 0, 900, true);
    if (!name) return;
    let a = this.tracks[name];
    if (!a) {
      a = new Audio(BGM[name]);
      a.loop = true; a.volume = 0;
      this.tracks[name] = a;
    }
    a.currentTime = 0;
    const p = a.play();
    if (p && p.catch) p.catch(() => { this.pending = name; this.current = null; });
    this.fade(a, this.settings.bgm, 900, false);
  }

  fade(a, to, ms, stop) {
    const from = a.volume, t0 = performance.now();
    const tick = () => {
      const k = Math.min(1, (performance.now() - t0) / ms);
      a.volume = Math.max(0, Math.min(1, from + (to - from) * k));
      if (k < 1) requestAnimationFrame(tick);
      else if (stop) a.pause();
    };
    tick();
  }

  setBgmVolume(v) {
    this.settings.bgm = v;
    if (this.current && this.tracks[this.current]) this.tracks[this.current].volume = v;
  }

  // エンジン音
  createEngine(spec) {
    if (!this.ctx) return null;
    const c = this.ctx;
    const out = c.createGain(); out.gain.value = 0;
    const pan = c.createStereoPanner ? c.createStereoPanner() : null;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 800; lp.Q.value = 2;
    const o1 = c.createOscillator(); o1.type = 'sawtooth';
    const o2 = c.createOscillator(); o2.type = 'square';
    const o3 = c.createOscillator(); o3.type = 'triangle';
    const g1 = c.createGain(); g1.gain.value = 0.5;
    const g2 = c.createGain(); g2.gain.value = 0.22;
    const g3 = c.createGain(); g3.gain.value = 0.35;
    o1.connect(g1).connect(lp); o2.connect(g2).connect(lp); o3.connect(g3).connect(lp);
    lp.connect(out);
    if (pan) { out.connect(pan); pan.connect(this.master); } else out.connect(this.master);
    // タイヤスキール
    const sq = c.createBufferSource(); sq.buffer = this.noise; sq.loop = true;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1100; bp.Q.value = 6;
    const sqg = c.createGain(); sqg.gain.value = 0;
    sq.connect(bp).connect(sqg).connect(this.master);
    // ターボ
    const tb = c.createOscillator(); tb.type = 'sine'; tb.frequency.value = 3000;
    const tbg = c.createGain(); tbg.gain.value = 0;
    tb.connect(tbg).connect(this.master);
    // 風切り
    const wind = c.createBufferSource(); wind.buffer = this.noise; wind.loop = true;
    const wlp = c.createBiquadFilter(); wlp.type = 'lowpass'; wlp.frequency.value = 500;
    const wg = c.createGain(); wg.gain.value = 0;
    wind.connect(wlp).connect(wg).connect(this.master);
    for (const n of [o1, o2, o3, sq, tb, wind]) n.start();
    const e = { spec, out, lp, o1, o2, o3, sqg, bp, tbg, tb, wg, pan, nodes: [o1, o2, o3, sq, tb, wind] };
    this.engines.push(e);
    return e;
  }

  updateEngine(e, car, vol = 1, panV = 0) {
    if (!e || !this.ctx) return;
    const t = this.ctx.currentTime;
    const s = e.spec;
    const fire = (car.rpm / 60) * (s.cylinders / 2);
    const thr = car.input.throttle;
    e.o1.frequency.setTargetAtTime(fire, t, 0.02);
    e.o2.frequency.setTargetAtTime(fire * 0.5, t, 0.02);
    e.o3.frequency.setTargetAtTime(fire * 2, t, 0.02);
    e.lp.frequency.setTargetAtTime(500 + thr * 2200 + s.loud * 1500 + car.rpm * 0.15, t, 0.05);
    e.out.gain.setTargetAtTime(vol * (0.1 + thr * 0.16 + s.loud * 0.08), t, 0.05);
    const sl = Math.max(0, Math.min(1, (car.slip - 1.05) * 1.5)) * Math.min(1, car.speed / 5);
    e.sqg.gain.setTargetAtTime(vol * sl * 0.18, t, 0.05);
    e.bp.frequency.setTargetAtTime(900 + Math.min(car.speed, 40) * 8, t, 0.1);
    e.tb.frequency.setTargetAtTime(2500 + car.boost * 4000, t, 0.05);
    e.tbg.gain.setTargetAtTime(vol * Math.min(0.025, car.boost * 0.02), t, 0.05);
    e.wg.gain.setTargetAtTime(vol * Math.min(0.12, car.speed * car.speed * 0.00006), t, 0.1);
    if (e.pan) e.pan.pan.setTargetAtTime(panV, t, 0.05);
  }

  destroyEngine(e) {
    if (!e) return;
    for (const n of e.nodes) { try { n.stop(); } catch (er) { /* */ } }
    try { e.out.disconnect(); e.sqg.disconnect(); e.tbg.disconnect(); e.wg.disconnect(); } catch (er) { /* */ }
    this.engines = this.engines.filter((x) => x !== e);
  }

  destroyAllEngines() { for (const e of [...this.engines]) this.destroyEngine(e); }

  beep(freq = 880, dur = 0.15, vol = 0.3) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.frequency.value = freq; o.type = 'square';
    g.gain.value = vol;
    g.gain.setTargetAtTime(0, this.ctx.currentTime + dur * 0.7, 0.03);
    o.connect(g).connect(this.master);
    o.start(); o.stop(this.ctx.currentTime + dur + 0.1);
  }
}
