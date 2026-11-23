// エントリーポイント
import { Game } from './game.js';
import { TitleMode } from './modes/title.js';
import { PracticeMode } from './modes/practice.js';
import { RaceAI } from './ai.js';
import * as MAP from './data/map.js';
import { Box3, Matrix4, Vector3 } from 'three';
import { courseClearance } from './physics/track.js';

const game = new Game(document.getElementById('app'));
game.setMode(new TitleMode(game));
if (location.search.includes('debug')) { window.__dbg = { game, RaceAI }; window.__dbgMap = MAP; window.__dbgModes = { PracticeMode }; window.__dbgTHREE = { Box3, Matrix4, Vector3 }; window.__dbgClear = courseClearance; }
