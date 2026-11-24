// エントリーポイント
import { Game } from './game.js';
import { TitleMode } from './modes/title.js';
import { PracticeMode } from './modes/practice.js';
import { TownMode } from './modes/town.js';
import { TownFreeMode } from './modes/townfree.js';
import { newGameState } from './save.js';
import { BattleMode } from './modes/battle.js';
import { ReplayMode } from './modes/replay.js';
import { RIVAL_BY_ID } from './data/rivals.js';
import { RaceAI } from './ai.js';
import * as MAP from './data/map.js';
import { Box3, Matrix4, Vector3 } from 'three';
import { courseClearance } from './physics/track.js';
import { stockEquip } from './physics/spec.js';
import { loadGlbCars } from './render/glbCars.js';

const game = new Game(document.getElementById('app'));
// 実車の3Dモデル（86-GR・Z-32）を読み込んでから開始（失敗時は簡易モデル）
loadGlbCars().then(() => game.setMode(new TitleMode(game)));
if (location.search.includes('debug')) { window.__dbg = { game, RaceAI }; window.__dbgMap = MAP; window.__dbgModes = { PracticeMode, TownMode, TownFreeMode, BattleMode, ReplayMode, newGameState, RIVAL_BY_ID }; window.__dbgTHREE = { Box3, Matrix4, Vector3 }; window.__dbgClear = courseClearance; window.__dbgStock = stockEquip; }
