// ライバル（街を流している走り屋）
// tier: 出現に必要な勝利数の目安 / skill: AIの攻め具合(0-1)
import { CARS } from './cars.js';
import { defaultSetup } from '../physics/setup.js';

const tune = (carId, over) => ({ ...CARS[carId].stock, ...over });

export const RIVALS = [
  {
    id: 'minato', name: '白石ミナト', team: 'ルーキー', car: 'SWIFT-S', color: 0xf2c40f, minWins: 0, skill: 0.8, reward: 60000,
    parts: tune('SWIFT-S', { muffler: 'muf_sport' }),
    lines: { meet: 'スイスポ舐めんなよ！', win: 'くっ…86ってこんな速いのかよ。', lose: '軽さは正義ってね！' },
  },
  {
    id: 'yuuri', name: '柚木ユウリ', team: 'ルーキー', car: 'RS-RS', color: 0xb3121b, minWins: 0, skill: 0.82, reward: 65000,
    parts: tune('RS-RS', { suspension: 'sus_street', tire: 'tire_high' }),
    lines: { meet: '人馬一体、見せてあげる。', win: '…コーナーで詰めきれなかった。', lose: 'パワーだけじゃ曲がれないよ？' },
  },
  {
    id: 'souma', name: '真壁ソウマ', team: '西口ナイツ', car: '86-GR', color: 0xf4f4f4, minWins: 1, skill: 0.84, reward: 80000,
    parts: tune('86-GR', { brake: 'brk_pad', aero: 'aero_lip', muffler: 'muf_sport' }),
    lines: { meet: '同じ86か。腕の差、ハッキリさせようぜ。', win: '同じ車でこの差…認めるよ。', lose: '出直してきな。' },
  },
  {
    id: 'jin', name: '鷹野ジン', team: '西口ナイツ', car: 'WRX-IMP', color: 0x1d3f9a, minWins: 2, skill: 0.85, reward: 100000,
    parts: tune('WRX-IMP', { tire: 'tire_high' }),
    lines: { meet: '四駆の立ち上がり、ついてこれるか？', win: 'やるな…FRで俺を抜くとは。', lose: 'トラクションが違うんだよ。' },
  },
  {
    id: 'reina', name: '九条レイナ', team: 'Velvet', car: 'SWIFT-S', color: 0xf1f1f1, minWins: 3, skill: 0.87, reward: 110000,
    parts: tune('SWIFT-S', { turbo: 'tb_mid', intercooler: 'ic_large', tire: 'tire_high', suspension: 'sus_street', muffler: 'muf_sport' }),
    lines: { meet: 'ただのスイフトだと思った？', win: 'ふーん、悪くないじゃない。', lose: '見た目で判断しないことね。' },
  },
  {
    id: 'gou', name: '黒田ゴウ', team: '要町連合', car: '80-Supra', color: 0x111214, minWins: 3, skill: 0.85, reward: 120000,
    parts: tune('80-Supra', { muffler: 'muf_sport', tire: 'tire_high' }),
    lines: { meet: '直線で全部ひっくり返してやる。', win: '曲がりで負けた…か。', lose: 'これが2JZ…じゃねぇ、S6のトルクだ！' },
  },
  {
    id: 'kyou', name: '氷室キョウ', team: 'Velvet', car: 'RS-RS', color: 0x6b7178, minWins: 5, skill: 0.9, reward: 160000,
    parts: tune('RS-RS', { boreup: 'bore_2', turbo: 'tb_sc', intercooler: 'ic_large', tire: 'tire_high', suspension: 'sus_circuit', aero: 'aero_wing', brake: 'brk_pad' }),
    lines: { meet: 'スーパーチャージャーの立ち上がり、味わえよ。', win: 'まさか…立ち上がりで並ばれるとは。', lose: '軽さと過給、最強の組み合わせだろ？' },
  },
  {
    id: 'akira', name: '東雲アキラ', team: '要町連合', car: '86-GR', color: 0xe8661e, minWins: 5, skill: 0.9, reward: 170000,
    parts: tune('86-GR', { turbo: 'tb_twin', intercooler: 'ic_front', muffler: 'muf_straight', tire: 'tire_high', suspension: 'sus_street', brake: 'brk_big' }),
    lines: { meet: 'ツインターボの86、見たことあるか？', win: 'パワーだけじゃ勝てねえか…', lose: '馬力は正義だ！' },
  },
  {
    id: 'misaki', name: '椎名ミサキ', team: 'BLUE STORM', car: 'WRX-IMP', color: 0x2a62d6, minWins: 6, skill: 0.91, reward: 190000,
    parts: tune('WRX-IMP', { turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_2', transmission: 'tm_close', tire: 'tire_high', aero: 'aero_full', muffler: 'muf_sport' }),
    lines: { meet: '本物のビッグタービン、体感させてあげる。', win: '…ブーストが立ち上がる前に逃げられた。', lose: 'ブースト全開、気持ちいいでしょ？' },
  },
  {
    id: 'masamune', name: '藤堂マサムネ', team: 'BLUE STORM', car: '80-Supra', color: 0xb9bec6, minWins: 8, skill: 0.93, reward: 240000,
    parts: tune('80-Supra', { turbo: 'tb_large', boreup: 'bore_3', muffler: 'muf_straight', intercooler: 'ic_front', tire: 'tire_s', suspension: 'sus_circuit', brake: 'brk_big', aero: 'aero_wing' }),
    lines: { meet: '池袋最速の座、まだ譲る気はない。', win: '時代が変わったか…', lose: '10年早い。' },
  },
  {
    id: 'hibiki', name: '神楽ヒビキ', team: '無所属', car: 'RS-RS', color: 0x6a2bbf, minWins: 9, skill: 0.94, reward: 260000,
    parts: tune('RS-RS', { engine: 'eng_r2_13', muffler: 'muf_straight', tire: 'tire_s', suspension: 'sus_circuit', aero: 'aero_full', transmission: 'tm_close', brake: 'brk_big' }),
    lines: { meet: '9000回転の歌、聴かせてあげる。', win: 'いい音だった…あなたの車も。', lose: 'ロータリーは回してナンボ。' },
  },
  {
    id: 'zero', name: '不知火ゼロ', team: '池袋の亡霊', car: '86-GR', color: 0x1a1a1f, minWins: 10, skill: 0.96, reward: 400000,
    parts: tune('86-GR', { engine: 'eng_v6_30', turbo: 'tb_sc', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', tire: 'tire_s', suspension: 'sus_circuit', brake: 'brk_big', transmission: 'tm_close', aero: 'aero_full' }),
    lines: { meet: '……その86、どこまで行ける。', win: '……カケル、か。覚えておく。', lose: '……まだ遠い。' },
  },
];

// ===== 東池袋のライバル（area: 'east'）。勝利数は西・東の合計 =====
export const EAST_RIVALS = [
  {
    id: 'riku', name: '早乙女リク', team: '六ツ又ボーイズ', car: 'BRZ-ZD', color: 0x1f4fbf, minWins: 0, skill: 0.82, reward: 70000,
    parts: tune('BRZ-ZD', { muffler: 'muf_sport', tire: 'tire_high' }),
    lines: { meet: '86乗りか。兄弟対決といこうぜ。', win: '同じFAでも、こうも違うのか…', lose: '水平対向は俺の方が分かってる。' },
  },
  {
    id: 'kanade', name: '三上カナデ', team: '六ツ又ボーイズ', car: 'S2K-AP', color: 0xd7d9dc, minWins: 0, skill: 0.84, reward: 90000,
    parts: tune('S2K-AP', { suspension: 'sus_street' }),
    lines: { meet: '8000回転の向こう側、見に行く？', win: 'VTECが入る前に置いていかれた…', lose: 'オープンの風は気持ちいいでしょ？' },
  },
  {
    id: 'daichi', name: '霧島ダイチ', team: '護国寺ランサーズ', car: 'EVO-IX', color: 0xc8102e, minWins: 2, skill: 0.85, reward: 110000,
    parts: tune('EVO-IX', { muffler: 'muf_sport' }),
    lines: { meet: '首都高下の立ち上がり、四駆に勝てるかな。', win: 'AYCが効く前に抜かれた…', lose: 'これがランエボの立ち上がりだ。' },
  },
  {
    id: 'sakura', name: '宮城サクラ', team: 'SUNRISE GIRLS', car: 'BRZ-ZD', color: 0xf3a6c3, minWins: 3, skill: 0.87, reward: 120000,
    parts: tune('BRZ-ZD', { turbo: 'tb_small', intercooler: 'ic_large', tire: 'tire_high', suspension: 'sus_street', aero: 'aero_lip' }),
    lines: { meet: 'かわいい色だからって油断した？', win: 'ターボでも届かないなんて…', lose: 'サンシャインの夜景、後ろから見てなさい。' },
  },
  {
    id: 'tetsu', name: '大門テツ', team: '春日通りGT', car: 'Z-32', color: 0x8a0f16, minWins: 4, skill: 0.86, reward: 140000,
    parts: tune('Z-32', { muffler: 'muf_sport', tire: 'tire_high' }),
    lines: { meet: '春日通りの直線はZの庭だ。', win: '古いZじゃ、もう敵わねえか…', lose: 'ツインターボの伸び、覚えとけ。' },
  },
  {
    id: 'rui', name: '天城ルイ', team: 'SUNRISE GIRLS', car: 'S2K-AP', color: 0xf2c40f, minWins: 5, skill: 0.89, reward: 160000,
    parts: tune('S2K-AP', { turbo: 'tb_sc', intercooler: 'ic_large', boreup: 'bore_1', tire: 'tire_high', suspension: 'sus_circuit', aero: 'aero_wing' }),
    lines: { meet: 'NAの鋭さに過給を足したら、どうなると思う？', win: '…あなた、本物ね。', lose: 'スーパーチャージャーは裏切らないの。' },
  },
  {
    id: 'kenji', name: '獅堂ケンジ', team: '春日通りGT', car: 'R34-GTR', color: 0x2b3f9c, minWins: 6, skill: 0.89, reward: 200000,
    parts: tune('R34-GTR', { muffler: 'muf_sport', tire: 'tire_high', brake: 'brk_pad' }),
    lines: { meet: 'GT-Rの名前、伊達じゃないぜ。', win: 'アテーサでも追いつけなかった…', lose: '直6ツインターボの咆哮、聴こえたか？' },
  },
  {
    id: 'noa', name: '白鷺ノア', team: '護国寺ランサーズ', car: 'EVO-IX', color: 0xeaeaea, minWins: 7, skill: 0.91, reward: 220000,
    parts: tune('EVO-IX', { turbo: 'tb_mid', intercooler: 'ic_front', boreup: 'bore_2', muffler: 'muf_straight', tire: 'tire_s', suspension: 'sus_circuit', aero: 'aero_wing', brake: 'brk_big' }),
    lines: { meet: '不忍通りの下りで、全部決める。', win: 'ブレーキ勝負で負けるなんて…', lose: '四駆の本気、見たでしょう？' },
  },
  {
    id: 'sena', name: '久遠セナ', team: '無所属', car: 'Z-32', color: 0x4b4f58, minWins: 9, skill: 0.93, reward: 260000,
    parts: tune('Z-32', { turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_2', muffler: 'muf_straight', tire: 'tire_s', suspension: 'sus_circuit', transmission: 'tm_close', aero: 'aero_full', brake: 'brk_big' }),
    lines: { meet: 'Zは速いだけじゃない。美しく速いんだ。', win: '……美しい走りだった。', lose: '美しさが足りないね。' },
  },
  {
    id: 'gai', name: '鳳ガイ', team: '東池袋の王', car: 'R34-GTR', color: 0x7a8088, minWins: 11, skill: 0.96, reward: 450000,
    parts: tune('R34-GTR', { turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', tire: 'tire_s', suspension: 'sus_circuit', brake: 'brk_big', transmission: 'tm_close', aero: 'aero_full' }),
    lines: { meet: 'サンシャインの下で、俺に挑むか。', win: '……西の86が、ここまで来たか。', lose: '東池袋は、まだお前の街じゃない。' },
  },
];
// ===== 榛名山（解放後に出現）：★5フルカスタマイズパーツを組み、峠用にセッティングした走り屋たち =====
const setupOf = (carId, over) => ({ ...defaultSetup(carId), ...over });
export const HARUNA_RIVALS = [
  {
    id: 'kaede', name: '篠原カエデ', team: '榛名ダウンヒラーズ', car: 'RS-RS', color: 0x2f7d4a, minWins: 10, skill: 0.9, reward: 240000,
    parts: tune('RS-RS', { tire: 'tire_high', suspension: 'sus_full', brake: 'brk_pad', muffler: 'muf_sport', boreup: 'bore_1' }),
    setup: setupOf('RS-RS', { freqF: 2.2, freqR: 2.4, arbF: 4, arbR: 6, camberF: 2.8, camberR: 2.0, toeR: 0.15 }),
    lines: { meet: '峠は軽さと足だよ。ついてこれる？', win: '…下りでこの差。あんた何者？', lose: '榛名の路面は、足が柔らかい方が速いの。' },
  },
  {
    id: 'tetsu_h', name: '岩城テツ', team: '榛名ダウンヒラーズ', car: '86-GR', color: 0x1a1a1a, minWins: 10, skill: 0.9, reward: 260000,
    parts: tune('86-GR', { tire: 'tire_high', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full', muffler: 'muf_sport' }),
    setup: setupOf('86-GR', { freqF: 2.5, freqR: 2.7, arbF: 6, arbR: 4, lsdInitR: 12, lsdAccR: 35, lsdDecR: 20, brakeBal: -1, final: 4.3 }),
    lines: { meet: '同じ86でも、峠の86は別物だぜ。', win: '平地の走り屋に負けるとはな…', lose: '下りのブレーキング、まだまだだな。' },
  },
  {
    id: 'akane', name: '日向アカネ', team: '湯けむりレーシング', car: 'S2K-AP', color: 0xd7d2c4, minWins: 11, skill: 0.91, reward: 300000,
    parts: tune('S2K-AP', { tire: 'tire_high', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_pad', muffler: 'muf_straight', aero: 'aero_lip' }),
    setup: setupOf('S2K-AP', { freqF: 2.8, freqR: 3.0, arbF: 5, arbR: 5, camberF: 3.0, camberR: 2.2, lsdAccR: 30, lsdDecR: 18 }),
    lines: { meet: '9000回転の歌、伊香保まで聴かせてあげる。', win: '回しきれなかった…悔しい。', lose: 'VTECじゃなくてもいいの。高回転は正義。' },
  },
  {
    id: 'ryuu', name: '榊リュウ', team: '上州ストリート連合', car: 'WRX-IMP', color: 0x1b3b8f, minWins: 12, skill: 0.92, reward: 340000,
    parts: tune('WRX-IMP', { tire: 'tire_high', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full', turbo: 'tb_twin', intercooler: 'ic_front', muffler: 'muf_sport' }),
    setup: setupOf('WRX-IMP', { freqF: 2.6, freqR: 2.6, arbF: 5, arbR: 5, toeR: 0.3, lsdInitF: 10, lsdAccF: 20, lsdAccR: 40, brakeBal: 1 }),
    lines: { meet: '上りなら四駆が上。下りでも負ける気はしない。', win: '…ヘアピンの立ち上がりで並ばれるとはな。', lose: '四輪で路面を掴む。それが峠だ。' },
  },
  {
    id: 'mio', name: '雪村ミオ', team: '湖畔の亡霊', car: 'SWIFT-S', color: 0xf4f6f8, minWins: 13, skill: 0.92, reward: 320000,
    parts: tune('SWIFT-S', { tire: 'tire_s', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full', turbo: 'tb_mid', intercooler: 'ic_large', muffler: 'muf_sport' }),
    setup: setupOf('SWIFT-S', { freqF: 2.9, freqR: 3.1, arbF: 4, arbR: 6, toeR: 0.15, lsdInitF: 15, lsdAccF: 30, lsdDecF: 10 }),
    lines: { meet: '……霧の夜は、私の時間。', win: '……見えなくなるほど離されたのは、初めて。', lose: '……追いつけなかったでしょう。' },
  },
  {
    id: 'daichi_h', name: '大門ダイチ', team: '上州ストリート連合', car: '80-Supra', color: 0xc8102e, minWins: 14, skill: 0.92, reward: 380000,
    parts: tune('80-Supra', { tire: 'tire_s', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full', turbo: 'tb_twin', intercooler: 'ic_front', muffler: 'muf_straight', aero: 'aero_wing' }),
    setup: setupOf('80-Supra', { freqF: 2.7, freqR: 2.9, arbF: 6, arbR: 4, toeR: 0.3, lsdAccR: 40, lsdDecR: 25, brakeBal: -1, dfR: 150 }),
    lines: { meet: '上りの直線で、全部ねじ伏せる。', win: 'パワーだけじゃ峠は勝てねぇか…', lose: 'これが上州の直6ツインターボだ！' },
  },
  {
    id: 'shin', name: '霧島シン', team: '湖畔の亡霊', car: 'BRZ-ZD', color: 0x2266cc, minWins: 15, skill: 0.94, reward: 420000,
    parts: tune('BRZ-ZD', { tire: 'tire_s', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full', boreup: 'bore_2', muffler: 'muf_straight', aero: 'aero_full' }),
    setup: setupOf('BRZ-ZD', { freqF: 3.0, freqR: 3.2, arbF: 6, arbR: 4, camberF: 3.2, camberR: 2.4, toeF: 0, toeR: 0.3, lsdInitR: 15, lsdAccR: 38, lsdDecR: 28, brakeBal: -1 }),
    lines: { meet: '湖畔から伊香保まで。一度も前を譲ったことはない。', win: '初めて、テールランプを見せられた…', lose: '峠は、記憶した者が勝つ。' },
  },
  {
    id: 'kanata', name: '天城カナタ', team: '榛名山の主', car: 'EVO-IX', color: 0xe6e6e6, minWins: 17, skill: 0.97, reward: 700000,
    parts: tune('EVO-IX', { tire: 'tire_s', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full', turbo: 'tb_twin', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', aero: 'aero_full' }),
    setup: setupOf('EVO-IX', { freqF: 2.9, freqR: 3.0, arbF: 6, arbR: 4, toeR: 0.3, camberF: 3.0, camberR: 2.2, lsdInitF: 12, lsdAccF: 25, lsdDecF: 8, lsdInitR: 15, lsdAccR: 45, lsdDecR: 25, brakeBal: 0 }),
    lines: { meet: 'この山で、俺の前を走った者はいない。', win: '……いい山を、いい走りで降りたな。', lose: '榛名は、まだお前を認めていない。' },
  },
];
for (const r of HARUNA_RIVALS) r.area = 'haruna';
for (const r of RIVALS) r.area = 'west';
for (const r of EAST_RIVALS) r.area = 'east';
export const ALL_RIVALS = [...RIVALS, ...EAST_RIVALS, ...HARUNA_RIVALS];
// 走りの性格（他車との間隔）：aggressive＝ギリギリまで寄せる、cautious＝大きめに避ける、それ以外はフェア
const STYLE = { gou: 'aggressive', kenji: 'aggressive', ryuu: 'aggressive', zero: 'aggressive', yuuri: 'cautious', kanade: 'cautious', sakura: 'cautious', mio: 'cautious', kaede: 'cautious' };
for (const r of [...RIVALS, ...EAST_RIVALS, ...HARUNA_RIVALS]) { r.style = STYLE[r.id] || 'fair'; r.margin = { aggressive: 0.35, cautious: 1.4, fair: 0.8 }[r.style]; }
// 賞金は実勢の中古車価格に合わせて2倍に
for (const r of ALL_RIVALS) r.reward *= 2;

export const RIVAL_BY_ID = Object.fromEntries(ALL_RIVALS.map((r) => [r.id, r]));
// IDの重複チェック（撃破記録などをIDで管理しているため）
if (Object.keys(RIVAL_BY_ID).length !== ALL_RIVALS.length) console.error('ライバルIDが重複しています');
