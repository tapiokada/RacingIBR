// セーブデータ / タイムアタック記録 / リプレイ(IndexedDB)
import { CARS, PLAYER } from './data/cars.js';
import { CATEGORIES } from './data/parts.js';

const SAVE_KEY = 'ibr.save.v1';
const REC_KEY = 'ibr.records.v1';

export function newGameState() {
  const stock = { ...CARS[PLAYER.car].stock };
  const owned = {};
  for (const id of Object.values(stock)) if (id) owned[id] = (owned[id] || 0) + 1;
  return {
    version: 1,
    money: 300000,
    wins: 0, losses: 0,
    owned,
    garage: [{ carId: PLAYER.car, color: PLAYER.color, equipped: stock }],
    active: 0,
    defeated: {},
    area: 'west', // 現在のエリア
    pos: null, // null = GS前（{x,z,h,area}）
    playtime: 0,
    savedAt: null,
  };
}

export function hasSave() {
  try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}

export function saveGame(state) {
  state.savedAt = new Date().toISOString();
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); return true; } catch (e) { return false; }
}

// 未使用（どの車にも装着されていない）個数
export function freeCount(state, partId) {
  let used = 0;
  for (const g of state.garage) for (const c of CATEGORIES) if (g.equipped[c.id] === partId) used++;
  return (state.owned[partId] || 0) - used;
}

export function addPart(state, partId, n = 1) {
  state.owned[partId] = (state.owned[partId] || 0) + n;
}

export function activeCar(state) { return state.garage[state.active]; }

// ---------------- PRACTICE用のセッティング（車種＋パーツ構成ごと） ----------------
const PSET_KEY = 'ibr.practiceSetup.v1';
export function loadPracticeSetup(key) {
  try { return JSON.parse(localStorage.getItem(PSET_KEY) || '{}')[key] || null; } catch (e) { return null; }
}
export function savePracticeSetup(key, setup) {
  try { const all = JSON.parse(localStorage.getItem(PSET_KEY) || '{}'); all[key] = setup; localStorage.setItem(PSET_KEY, JSON.stringify(all)); } catch (e) { /* */ }
}

// ---------------- タイムアタック記録 ----------------
export function loadRecords() {
  try { return JSON.parse(localStorage.getItem(REC_KEY) || '{}'); } catch (e) { return {}; }
}

export function addRecord(layoutKey, rec) {
  const all = loadRecords();
  const list = all[layoutKey] || [];
  list.push(rec);
  list.sort((a, b) => a.best - b.best);
  const removed = list.splice(20);
  all[layoutKey] = list;
  try { localStorage.setItem(REC_KEY, JSON.stringify(all)); } catch (e) { /* */ }
  for (const r of removed) deleteReplay(r.id);
  return list.indexOf(rec);
}

// ---------------- リプレイ（IndexedDB） ----------------
let dbp = null;
function db() {
  if (!dbp) {
    dbp = new Promise((res, rej) => {
      if (!window.indexedDB) { rej(new Error('no idb')); return; }
      const r = indexedDB.open('ibr-replays', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('replays');
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }
  return dbp;
}

export async function putReplay(id, replay) {
  try {
    const d = await db();
    await new Promise((res, rej) => {
      const tx = d.transaction('replays', 'readwrite');
      tx.objectStore('replays').put(replay, id);
      tx.oncomplete = res; tx.onerror = () => rej(tx.error);
    });
    return true;
  } catch (e) { return false; }
}

export async function getReplay(id) {
  try {
    const d = await db();
    return await new Promise((res, rej) => {
      const r = d.transaction('replays').objectStore('replays').get(id);
      r.onsuccess = () => res(r.result || null); r.onerror = () => rej(r.error);
    });
  } catch (e) { return null; }
}

export async function deleteReplay(id) {
  try {
    const d = await db();
    d.transaction('replays', 'readwrite').objectStore('replays').delete(id);
  } catch (e) { /* */ }
}

export function fmtTime(t) {
  if (t == null || !isFinite(t)) return '--:--.---';
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s.toFixed(3).padStart(6, '0')}`;
}

export function fmtMoney(v) { return '¥' + Math.round(v).toLocaleString('ja-JP'); }
