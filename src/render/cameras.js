// 視点：後方(chase) / 運転席(cockpit) / ボンネット(hood) / ギャラリー(gallery) / バックミラー
import * as THREE from 'three';

export const VIEW_NAMES = { chase: '後方視点', cockpit: '運転席視点', hood: 'ボンネット視点', gallery: 'ギャラリー視点' };

const tmp = new THREE.Vector3();

export class CameraRig {
  constructor(aspect) {
    this.camera = new THREE.PerspectiveCamera(62, aspect, 0.08, 2600);
    this.mirrorCam = new THREE.PerspectiveCamera(50, 3.2, 0.3, 600);
    this.mode = 'chase';
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.init = false;
    this.galleryIdx = -1;
    this.gallerySpots = [];
  }

  setGallerySpots(path) {
    this.gallerySpots = [];
    if (!path) return;
    let side = 1;
    for (let s = 20; s < path.length; s += 110) {
      const p = path.posAt(s, 0);
      const hw = path.hw[p.i];
      const q = path.posAt(s, side * (hw + 4));
      this.gallerySpots.push({ x: q.x, z: q.z, y: (p.y || 0) + 3.5 + Math.random() * 3, s });
      side = -side;
    }
  }

  reset() { this.init = false; }

  anchor(model, kind) {
    const u = model.userData;
    if (!u.anchors) {
      u.anchors = {};
      const mk = (x, y, z, ry) => { const o = new THREE.Object3D(); o.position.set(x, y, z); o.rotation.y = ry; u.body.add(o); return o; };
      u.anchors.cockpit = mk(u.driverX ?? -0.37, u.belt + 0.34, u.wsBase - 1.05, Math.PI);
      u.anchors.hood = mk(0, u.belt + 0.32, u.wsBase + 0.25, Math.PI);
      u.anchors.mirror = mk(0, u.H + 0.25, u.wsBase - 0.9, 0);
    }
    return u.anchors[kind];
  }

  update(dt, model, car) {
    const cam = this.camera;
    const u = model.userData;
    u.cockpit.visible = this.mode === 'cockpit';
    for (const o of u.exterior) o.visible = this.mode !== 'cockpit';
    const f0 = Math.sin(car.h), f1 = Math.cos(car.h);
    if (this.mode === 'cockpit' || this.mode === 'hood') {
      model.updateMatrixWorld(true);
      const a = this.anchor(model, this.mode);
      a.getWorldPosition(cam.position);
      a.getWorldQuaternion(cam.quaternion);
      cam.fov = this.mode === 'cockpit' ? 70 : 64;
      cam.updateProjectionMatrix();
      this.init = false;
      return;
    }
    if (this.mode === 'gallery' && this.gallerySpots.length) {
      // 最寄りの定点カメラ
      let best = this.galleryIdx, bd = 1e9;
      for (let i = 0; i < this.gallerySpots.length; i++) {
        const sp = this.gallerySpots[i];
        const d = Math.hypot(sp.x - car.x, sp.z - car.z);
        if (d < bd) { bd = d; best = i; }
      }
      if (this.galleryIdx < 0) this.galleryIdx = best;
      const cur = this.gallerySpots[this.galleryIdx];
      const cd = Math.hypot(cur.x - car.x, cur.z - car.z);
      if (best !== this.galleryIdx && bd < cd * 0.75) this.galleryIdx = best;
      const sp = this.gallerySpots[this.galleryIdx];
      cam.position.set(sp.x, sp.y, sp.z);
      tmp.set(car.x, (car.gy || 0) + 0.8, car.z);
      cam.lookAt(tmp);
      const dist = Math.hypot(sp.x - car.x, sp.z - car.z);
      cam.fov = Math.max(8, Math.min(60, (2 * Math.atan(7 / Math.max(dist, 1)) * 180) / Math.PI));
      cam.updateProjectionMatrix();
      return;
    }
    // chase
    const speed = car.speed;
    const back = 5.8 + Math.min(1.5, speed * 0.02);
    const gy = car.gy || 0;
    const tx = car.x - f0 * back, tz = car.z - f1 * back;
    let ty = gy + 2.1;
    if (car.groundAt) ty = Math.max(ty, car.groundAt(tx, tz) + 1.7); // 坂道で後方の路面に潜らない
    const lx = car.x + f0 * 3, lz = car.z + f1 * 3, ly = gy + 1.0 + Math.sin(car.gp || 0) * 3;
    if (!this.init) {
      this.pos.set(tx, ty, tz); this.look.set(lx, ly, lz); this.init = true;
    } else {
      const k = 1 - Math.exp(-dt * 9);
      this.pos.x += (tx - this.pos.x) * k; this.pos.y += (ty - this.pos.y) * k; this.pos.z += (tz - this.pos.z) * k;
      const k2 = 1 - Math.exp(-dt * 14);
      this.look.x += (lx - this.look.x) * k2; this.look.y += (ly - this.look.y) * k2; this.look.z += (lz - this.look.z) * k2;
    }
    cam.position.copy(this.pos);
    cam.lookAt(this.look);
    cam.fov = 60 + Math.min(10, speed * 0.12);
    cam.updateProjectionMatrix();
  }

  updateMirror(model) {
    model.updateMatrixWorld(true);
    const a = this.anchor(model, 'mirror');
    a.getWorldPosition(this.mirrorCam.position);
    a.getWorldQuaternion(this.mirrorCam.quaternion);
  }

  cycle(modes) {
    const i = modes.indexOf(this.mode);
    this.mode = modes[(i + 1) % modes.length];
    this.galleryIdx = -1;
    this.init = false;
    return this.mode;
  }
}
