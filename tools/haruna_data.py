# 榛名山（県道33号 渋川松井田線：ゆうすげ入口〜伊香保温泉石段街）のコースデータを生成
# 出典：国土地理院 ベクトルタイル「道路中心線」(experimental_rdcl) / 標高タイル DEM5A
# usage: python3 -I tools/haruna_data.py <dataDir> src/data/haruna.js
#   dataDir/path.json  : 道路中心線から抽出した経路 [[lon,lat],...]（スタート→ゴール）
#   dataDir/dem5a/{x}_{y}.txt : DEM5A z15 タイル
import json, math, sys, base64, struct, os

data, outp = sys.argv[1], sys.argv[2]
Z = 15
LAT0, LON0 = 36.4890, 138.9065
KX = math.cos(math.radians(LAT0)) * 111320.0
KZ = 110574.0

def to_xy(lon, lat):
    return ((lon - LON0) * KX, -(lat - LAT0) * KZ)

def to_ll(x, z):
    return (LON0 + x / KX, LAT0 - z / KZ)

tiles = {}
def tile(tx, ty):
    k = (tx, ty)
    if k not in tiles:
        fn = os.path.join(data, 'dem5a', f'{tx}_{ty}.txt')
        rows = []
        for line in open(fn):
            rows.append([None if v.strip() == 'e' else float(v) for v in line.strip().split(',')])
        tiles[k] = rows
    return tiles[k]

def px(gx, gy):
    tx, ty = int(gx // 256), int(gy // 256)
    v = tile(tx, ty)[int(gy - ty * 256)][int(gx - tx * 256)]
    return v

def dem(lon, lat):
    n = 2 ** Z
    gx = (lon + 180) / 360 * n * 256 - 0.5
    lr = math.radians(lat)
    gy = (1 - math.log(math.tan(lr) + 1 / math.cos(lr)) / math.pi) / 2 * n * 256 - 0.5
    x0, y0 = math.floor(gx), math.floor(gy)
    fx, fy = gx - x0, gy - y0
    vals = []; ws = []
    for dx, dy, w in ((0, 0, (1 - fx) * (1 - fy)), (1, 0, fx * (1 - fy)), (0, 1, (1 - fx) * fy), (1, 1, fx * fy)):
        v = px(x0 + dx, y0 + dy)
        if v is not None: vals.append(v * w); ws.append(w)
    if not ws: return None
    return sum(vals) / sum(ws)

# --- 中心線 ---
ll = json.load(open(os.path.join(data, 'path.json')))
pts = [to_xy(lo, la) for lo, la in ll]
# 重複点除去
P = [pts[0]]
for p in pts[1:]:
    if math.hypot(p[0] - P[-1][0], p[1] - P[-1][1]) > 0.5: P.append(p)

# centripetal Catmull-Rom で2m間隔に
def catmull(p0, p1, p2, p3, n):
    def tj(ti, a, b): return ti + max(1e-6, math.hypot(b[0] - a[0], b[1] - a[1])) ** 0.5
    t0 = 0; t1 = tj(t0, p0, p1); t2 = tj(t1, p1, p2); t3 = tj(t2, p2, p3)
    out = []
    for i in range(n):
        t = t1 + (t2 - t1) * i / n
        def L(a, b, ta, tb): return tuple(((tb - t) * a[k] + (t - ta) * b[k]) / (tb - ta) for k in range(2))
        A1 = L(p0, p1, t0, t1); A2 = L(p1, p2, t1, t2); A3 = L(p2, p3, t2, t3)
        B1 = L(A1, A2, t0, t2); B2 = L(A2, A3, t1, t3)
        out.append(L(B1, B2, t1, t2))
    return out
E = [(2 * P[0][0] - P[1][0], 2 * P[0][1] - P[1][1])] + P + [(2 * P[-1][0] - P[-2][0], 2 * P[-1][1] - P[-2][1])]
dense = []
for i in range(1, len(E) - 2):
    seg = math.hypot(E[i + 1][0] - E[i][0], E[i + 1][1] - E[i][1])
    dense += catmull(E[i - 1], E[i], E[i + 1], E[i + 2], max(1, int(seg / 0.5)))
dense.append(P[-1])
# 弧長で等間隔再サンプル
STEP = 2.0
res = [dense[0]]; acc = 0.0
for a, b in zip(dense, dense[1:]):
    d = math.hypot(b[0] - a[0], b[1] - a[1])
    while acc + d >= STEP:
        t = (STEP - acc) / d
        a = (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)
        res.append(a); d = math.hypot(b[0] - a[0], b[1] - a[1]); acc = 0.0
    acc += d
res.append(dense[-1])
# 平面の軽い平滑化（地図の折れ点を均す。端点固定）
for _ in range(3):
    res = [res[0]] + [((res[i - 1][0] + 2 * res[i][0] + res[i + 1][0]) / 4, (res[i - 1][1] + 2 * res[i][1] + res[i + 1][1]) / 4) for i in range(1, len(res) - 1)] + [res[-1]]

# 標高：DEMを中心線上で取得 → 切土/盛土ノイズを平滑化
raw = [dem(*to_ll(x, z)) for x, z in res]
for i in range(len(raw)):
    if raw[i] is None: raw[i] = raw[i - 1]
def gauss(arr, sig):
    r = int(sig * 3); w = [math.exp(-0.5 * (k / sig) ** 2) for k in range(-r, r + 1)]
    out = []
    for i in range(len(arr)):
        s = sw = 0
        for k in range(-r, r + 1):
            j = min(len(arr) - 1, max(0, i + k)); s += arr[j] * w[k + r]; sw += w[k + r]
        out.append(s / sw)
    return out
# 道路は谷側を盛土・山側を切土するので、中心線の左右±3.5mの平均を使う
side = []
for i, (x, z) in enumerate(res):
    a = res[max(0, i - 1)]; b = res[min(len(res) - 1, i + 1)]
    dx, dz = b[0] - a[0], b[1] - a[1]; L = math.hypot(dx, dz) or 1
    nx, nz = -dz / L, dx / L
    hs = [dem(*to_ll(x + nx * o, z + nz * o)) for o in (-3.5, 0, 3.5)]
    hs = [h for h in hs if h is not None]
    side.append(sum(hs) / len(hs))
Y = gauss(side, 8.0)   # σ=16m
# 橋梁・沢の横断ではDEMが谷底を拾うので、急な凹み（局所的な勾配12%超の下り→上り）を橋で渡す
def close(arr, r):
    mx = [max(arr[max(0, i - r):i + r + 1]) for i in range(len(arr))]
    return [min(mx[max(0, i - r):i + r + 1]) for i in range(len(arr))]
C = close(Y, 15)
for i in range(len(Y)):
    if C[i] - Y[i] > 0.8: Y[i] = C[i]
Y = gauss(Y, 6.0)

# --- 地形グリッド ---
xs = [p[0] for p in res]; zs = [p[1] for p in res]
M = 450.0; G = 8.0
gx0 = math.floor((min(xs) - M) / G) * G; gz0 = math.floor((min(zs) - M) / G) * G
nx = int((max(xs) + M - gx0) / G) + 1; nz = int((max(zs) + M - gz0) / G) + 1
H = []
for j in range(nz):
    for i in range(nx):
        h = dem(*to_ll(gx0 + i * G, gz0 + j * G))
        H.append(h if h is not None else (H[-1] if H else Y[0]))
hmin = math.floor(min(H)); 
enc = base64.b64encode(b''.join(struct.pack('<H', max(0, min(65535, round((h - hmin) * 10)))) for h in H)).decode()

# 統計
L = (len(res) - 1) * STEP
grades = [(Y[i + 5] - Y[i]) / (5 * STEP) for i in range(len(Y) - 5)]
print('points', len(res), 'length %.0fm' % L, 'start %.1fm end %.1fm' % (Y[0], Y[-1]),
      'max grade %.1f%% min %.1f%%' % (max(grades) * 100, min(grades) * 100), 'grid', nx, nz)

out = {
    'source': '国土地理院 ベクトルタイル（道路中心線）・基盤地図情報数値標高モデル（DEM5A）を加工して作成',
    'origin': [LAT0, LON0], 'step': STEP,
    'road': [[round(x, 2), round(z, 2), round(y, 2)] for (x, z), y in zip(res, Y)],
    'terrain': {'x0': gx0, 'z0': gz0, 'nx': nx, 'nz': nz, 'cell': G, 'hmin': hmin, 'scale': 0.1, 'data': enc},
}
txt = json.dumps(out, ensure_ascii=False, separators=(',', ':'))
if outp.endswith('.js'):
    txt = '// 自動生成（tools/haruna_data.py）。' + out['source'] + '\nexport default ' + txt + ';\n'
open(outp, 'w').write(txt)
print('wrote', outp, os.path.getsize(outp))
