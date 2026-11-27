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
    parts: tune('86-GR', { wheel: 'wh_plus1_forged', tirewidth: 'tw_20', engine: 'eng_v6_30', turbo: 'tb_sc', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', tire: 'tire_s', suspension: 'sus_circuit', brake: 'brk_big', transmission: 'tm_close', aero: 'aero_full' }),
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
    parts: tune('R34-GTR', { wheel: 'wh_plus1_forged', tirewidth: 'tw_20', turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', tire: 'tire_s', suspension: 'sus_circuit', brake: 'brk_big', transmission: 'tm_close', aero: 'aero_full' }),
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
    parts: tune('EVO-IX', { wheel: 'wh_plus1_forged', tirewidth: 'tw_20', tire: 'tire_s', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full', turbo: 'tb_twin', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', aero: 'aero_full' }),
    setup: setupOf('EVO-IX', { freqF: 2.9, freqR: 3.0, arbF: 6, arbR: 4, toeR: 0.3, camberF: 3.0, camberR: 2.2, lsdInitF: 12, lsdAccF: 25, lsdDecF: 8, lsdInitR: 15, lsdAccR: 45, lsdDecR: 25, brakeBal: 0 }),
    lines: { meet: 'この山で、俺の前を走った者はいない。', win: '……いい山を、いい走りで降りたな。', lose: '榛名は、まだお前を認めていない。' },
  },
];
// ===== 首都高 都心環状線（ストーリーで首都高が解放されたあと、C1 を流している）：外回りと内回りで別の顔ぶれ =====
const R = (id, name, team, car, color, minWins, skill, reward, parts, setup, lines) => ({ id, name, team, car, color, minWins, skill, reward, parts: tune(car, parts), setup: setup ? setupOf(car, setup) : null, lines });
const FULL = { tire: 'tire_s', suspension: 'sus_full', transmission: 'tm_full', brake: 'brk_full' };
export const C1_OUTER_RIVALS = [
  R('c1o_sora', '朝比奈ソラ', '環状ナイトウイング', 'RX7-FC', 0xeaeaea, 12, 0.88, 300000, { tire: 'tire_high', suspension: 'sus_street', muffler: 'muf_sport', turbo: 'tb_large', intercooler: 'ic_large' }, null,
    { meet: '外回りの銀座線、FCで抜けられる？', win: 'ロータリーの音、届かなかったか…', lose: '環状は流れを読んだ方が勝つのよ。' }),
  R('c1o_hayate', '神代ハヤテ', '環状ナイトウイング', 'R32-GTR', 0x2b2d33, 12, 0.89, 340000, { tire: 'tire_high', suspension: 'sus_street', muffler: 'muf_sport', intercooler: 'ic_large', brake: 'brk_pad' }, null,
    { meet: '江戸橋を抜けたら、もう俺のペースだ。', win: 'R32が…置いていかれた。', lose: '四駆は壁際でも踏める。' }),
  R('c1o_ren', '御堂レン', '銀座ミッドナイト', 'NSX-NA1', 0xc8102e, 13, 0.9, 420000, { ...FULL, muffler: 'muf_straight', aero: 'aero_lip' }, { freqF: 2.6, freqR: 2.9, arbF: 5, arbR: 4, lsdAccR: 30 },
    { meet: '銀座の掘割、ミッドシップの真価を見せてやる。', win: '…NSXでこの差か。', lose: 'ノーズの入りが違うんだよ。' }),
  R('c1o_kirika', '久遠キリカ', '銀座ミッドナイト', 'RX7-FD', 0xd8c000, 13, 0.9, 440000, { tire: 'tire_high', suspension: 'sus_full', muffler: 'muf_straight', turbo: 'tb_large', intercooler: 'ic_front', brake: 'brk_big' }, { freqF: 2.5, freqR: 2.7, arbF: 5, arbR: 4, lsdAccR: 35 },
    { meet: '黄色いFD、見覚えあるでしょ？', win: 'ブーストが立ち上がる前に…やられた。', lose: '環状の夜は、黄色が一番速いの。' }),
  R('c1o_gen', '鬼塚ゲン', '浜崎橋ストライカーズ', '80-Supra', 0x111214, 14, 0.9, 460000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_2', muffler: 'muf_straight' }, { freqF: 2.4, freqR: 2.6, lsdAccR: 40 },
    { meet: '浜崎橋の直線で、全部ひっくり返す。', win: 'コーナーで…負けた、だと。', lose: '首都高は直線の長さで決まるんだ。' }),
  R('c1o_yuki', '氷堂ユキ', '環状ナイトウイング', 'R33-GTR', 0x4a3f7a, 15, 0.91, 500000, { ...FULL, turbo: 'tb_twin', intercooler: 'ic_front', muffler: 'muf_sport', aero: 'aero_lip' }, { freqF: 2.5, freqR: 2.6, toeR: 0.2 },
    { meet: 'ミッドナイトパープル、追ってきなさい。', win: '…初めて抜かれたわ、外回りで。', lose: '重さは安定。首都高ではそれが武器。' }),
  R('c1o_taiga', '黒鉄タイガ', '浜崎橋ストライカーズ', 'Z-32', 0x9a1b1f, 15, 0.91, 480000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', aero: 'aero_wing' }, { freqF: 2.5, freqR: 2.7, lsdAccR: 40 },
    { meet: '赤いZに睨まれたら、もう逃げられない。', win: 'Zのツインターボが…泣いてるぜ。', lose: '首都高は、度胸で走るもんだ。' }),
  R('c1o_shion', '紫藤シオン', '銀座ミッドナイト', 'NSX-NA2', 0xe8e4d8, 17, 0.93, 600000, { ...FULL, boreup: 'bore_2', muffler: 'muf_straight', aero: 'aero_full', wheel: 'wh_plus1_forged', tirewidth: 'tw_20' }, { freqF: 2.8, freqR: 3.1, arbF: 5, arbR: 4, camberF: 2.8, camberR: 2.2, lsdAccR: 32 },
    { meet: 'このクルマに、追いつけた者はいない。', win: '…あなたは、本物ね。', lose: '速さは、静けさの中にあるの。' }),
  R('c1o_raiden', '雷堂ライデン', '外回りの王', 'R34-GTR', 0x3a4f9e, 19, 0.96, 800000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', aero: 'aero_full', wheel: 'wh_plus1_forged', tirewidth: 'tw_30' }, { freqF: 2.7, freqR: 2.8, toeR: 0.3, brakeBal: 1 },
    { meet: '外回りを一周、俺の後ろについてこれるか。', win: '…外回りの王座、預けてやる。', lose: '王の背中は、遠いぞ。' }),
  R('c1o_akatsuki', '暁アカツキ', '外回りの王', 'RX7-FD', 0xb3121b, 20, 0.97, 900000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', aero: 'aero_wing', wheel: 'wh_plus1_forged', tirewidth: 'tw_20' }, { freqF: 2.9, freqR: 3.1, arbF: 6, arbR: 4, camberF: 3.0, camberR: 2.2, lsdAccR: 40, lsdDecR: 25 },
    { meet: '赤い閃光――そう呼ばれてる。', win: 'ロータリーの限界を、超えてきたか。', lose: '環状に、俺より速い奴はいない。' }),
];
export const C1_INNER_RIVALS = [
  R('c1i_mako', '真壁マコ', '霞が関ランナーズ', 'R32-GTR', 0xeaeaea, 12, 0.88, 320000, { tire: 'tire_high', suspension: 'sus_street', muffler: 'muf_sport', brake: 'brk_pad' }, null,
    { meet: '内回りの霞が関トンネル、知ってる？', win: 'トンネルの出口で…並ばれた。', lose: '暗いところでブレーキを残すのがコツ。' }),
  R('c1i_jun', '若林ジュン', '霞が関ランナーズ', 'RX7-FC', 0xb3121b, 12, 0.88, 300000, { tire: 'tire_high', suspension: 'sus_street', muffler: 'muf_straight', turbo: 'tb_large', intercooler: 'ic_large', aero: 'aero_lip' }, null,
    { meet: 'FCだって、まだまだ現役だ。', win: '…時代、か。', lose: '古いクルマほど、乗り手が出るんだよ。' }),
  R('c1i_kaname', '要カナメ', '三宅坂レイダース', 'EVO-IX', 0x6b7178, 13, 0.9, 400000, { ...FULL, turbo: 'tb_twin', intercooler: 'ic_front', muffler: 'muf_sport' }, { lsdAccF: 20, lsdAccR: 40 },
    { meet: '三宅坂の下り、エボで突っ込む。', win: '…立ち上がりで、離された。', lose: 'ランエボは、首都高のために生まれたんだ。' }),
  R('c1i_mitsuki', '水無月ミツキ', '三宅坂レイダース', 'NSX-NA1', 0x1a1a1a, 13, 0.9, 420000, { ...FULL, muffler: 'muf_sport', aero: 'aero_lip' }, { freqF: 2.6, freqR: 2.9, lsdAccR: 30 },
    { meet: '黒いNSX、夜に溶けるのよ。', win: '見えなくなったのは、私の方だった。', lose: '影は、捕まえられない。' }),
  R('c1i_bunta', '轟ブンタ', '一ノ橋ハンマーズ', 'R33-GTR', 0x2c3a5a, 14, 0.9, 460000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', muffler: 'muf_straight' }, { freqF: 2.4, freqR: 2.5 },
    { meet: '一ノ橋の連続コーナー、33の重さで押し切る。', win: '重いクルマは…言い訳にならねぇな。', lose: '首都高は、安定が全てだ。' }),
  R('c1i_rin', '鳳リン', '霞が関ランナーズ', 'S2K-AP', 0xd8b000, 15, 0.91, 480000, { ...FULL, boreup: 'bore_2', muffler: 'muf_straight', aero: 'aero_full' }, { freqF: 2.9, freqR: 3.1, camberF: 3.0, camberR: 2.2, lsdAccR: 30 },
    { meet: '9000回転で、内回りを駆け抜ける。', win: '…レブまで回しても、届かなかった。', lose: '高回転は、正義なの。' }),
  R('c1i_ginji', '銀城ギンジ', '一ノ橋ハンマーズ', 'R34-GTR', 0x6b7178, 16, 0.92, 540000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_2', muffler: 'muf_straight', aero: 'aero_wing' }, { toeR: 0.25 },
    { meet: '銀色のR34。内回りの番人だ。', win: '…番人失格だな。', lose: 'ここから先は、通さない。' }),
  R('c1i_kyouka', '月城キョウカ', '内回りの女王', 'RX7-FD', 0xeaeaea, 17, 0.93, 600000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', muffler: 'muf_straight', aero: 'aero_full', wheel: 'wh_plus1_forged', tirewidth: 'tw_20' }, { freqF: 2.8, freqR: 3.0, arbF: 6, arbR: 4, lsdAccR: 38 },
    { meet: '内回りで、私の前を走る資格がある？', win: '…いいわ、認めてあげる。', lose: '女王の背中を見られただけ、幸運よ。' }),
  R('c1i_jin', '刃金ジン', '内回りの女王', 'NSX-NA2', 0xc8102e, 19, 0.96, 800000, { ...FULL, boreup: 'bore_3', muffler: 'muf_straight', aero: 'aero_wing', wheel: 'wh_plus1_forged', tirewidth: 'tw_20' }, { freqF: 3.0, freqR: 3.3, arbF: 6, arbR: 4, camberF: 3.0, camberR: 2.4, lsdAccR: 35, lsdDecR: 22 },
    { meet: '刃は、静かに抜く。', win: '…研ぎ直しだな。', lose: '斬られたことにも、気づかなかったろう。' }),
  R('c1i_kokuyo', '黒曜コクヨウ', '内回りの王', 'R33-GTR', 0x1a1a1a, 20, 0.97, 900000, { ...FULL, turbo: 'tb_large', intercooler: 'ic_front', boreup: 'bore_3', muffler: 'muf_straight', aero: 'aero_full', wheel: 'wh_plus1_forged', tirewidth: 'tw_30' }, { freqF: 2.7, freqR: 2.8, toeR: 0.3, lsdAccF: 15, lsdAccR: 45 },
    { meet: '黒い33を見たら、道を譲れ――そう言われてる。', win: '……内回りは、お前のものだ。', lose: '首都高の闇は、深いぞ。' }),
];
for (const r of C1_OUTER_RIVALS) { r.area = 'c1'; r.lane = 'c1_outer'; }
for (const r of C1_INNER_RIVALS) { r.area = 'c1'; r.lane = 'c1_inner'; }
for (const r of HARUNA_RIVALS) r.area = 'haruna';
for (const r of RIVALS) r.area = 'west';
for (const r of EAST_RIVALS) r.area = 'east';
export const ALL_RIVALS = [...RIVALS, ...EAST_RIVALS, ...HARUNA_RIVALS, ...C1_OUTER_RIVALS, ...C1_INNER_RIVALS];
// 走りの性格（他車との間隔）：aggressive＝ギリギリまで寄せる、cautious＝大きめに避ける、それ以外はフェア
const STYLE = { c1o_gen: 'aggressive', c1o_taiga: 'aggressive', c1i_bunta: 'aggressive', c1i_mitsuki: 'cautious', c1o_shion: 'cautious', gou: 'aggressive', kenji: 'aggressive', ryuu: 'aggressive', zero: 'aggressive', yuuri: 'cautious', kanade: 'cautious', sakura: 'cautious', mio: 'cautious', kaede: 'cautious' };
for (const r of ALL_RIVALS) { r.style = STYLE[r.id] || 'fair'; r.margin = { aggressive: 0.35, cautious: 1.4, fair: 0.8 }[r.style]; }
// 賞金は実勢の中古車価格に合わせて2倍に
for (const r of ALL_RIVALS) r.reward *= 2;

export const RIVAL_BY_ID = Object.fromEntries(ALL_RIVALS.map((r) => [r.id, r]));
// IDの重複チェック（撃破記録などをIDで管理しているため）
if (Object.keys(RIVAL_BY_ID).length !== ALL_RIVALS.length) console.error('ライバルIDが重複しています');
