// エントリーポイント
import { Game } from './game.js';
import { TitleMode } from './modes/title.js';
import { RaceAI } from './ai.js';

const game = new Game(document.getElementById('app'));
game.setMode(new TitleMode(game));
if (location.search.includes('debug')) window.__dbg = { game, RaceAI };
