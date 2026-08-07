"""Upscale logo + generate crisp pink-dot favicon mark."""
from pathlib import Path
from PIL import Image, ImageDraw
import math

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src" / "assets"
PUBLIC = ROOT / "public"
ASSETS = Path(
    r"C:\Users\Arslan\.cursor\projects\h-involiq-projects-Strat-Flow-Elevate\assets"
)

src = next(ASSETS.glob("*1729504637816*"))
img = Image.open(src).convert("RGBA")
px = img.load()
w, h = img.size
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r > 235 and g > 235 and b > 235:
            px[x, y] = (r, g, b, 0)

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Light version for dark UI
light = img.copy()
lp = light.load()
lw, lh = light.size
for y in range(lh):
    for x in range(lw):
        r, g, b, a = lp[x, y]
        if a < 15:
            continue
        if r >= 140 and b >= 90 and g <= 190 and (r - g) >= 20:
            continue
        if abs(r - g) < 20 and abs(g - b) < 20:
            if r < 60:
                lp[x, y] = (255, 255, 255, a)
            elif r < 160:
                lp[x, y] = (215, 215, 215, a)
            else:
                lp[x, y] = (195, 195, 195, a)

# Upscale 4x for sharper CSS sizing
up = light.resize((lw * 4, lh * 4), Image.Resampling.LANCZOS)
up.save(SRC / "logo-strat-flow.png")
up.save(SRC / "logo-strat-flow-light.png")
up.save(PUBLIC / "logo-strat-flow.png")
print("logo", up.size)

# Programmatic favicon: pink dotted ring (brand mark)
PINK = (201, 59, 138, 255)
PINK_SOFT = (232, 120, 180, 255)


def make_mark(size: int, bg=None) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), bg if bg else (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    cx = cy = size / 2
    radius = size * 0.32
    # main ring dots
    n = 14
    for i in range(n):
        ang = -math.pi / 2 + (2 * math.pi * i / n)
        # slight irregularity like brand
        rr = radius * (0.92 + 0.08 * math.sin(i * 1.7))
        x = cx + rr * math.cos(ang)
        y = cy + rr * math.sin(ang)
        rad = size * (0.045 + 0.02 * ((i % 3) / 2))
        color = PINK if i % 2 == 0 else PINK_SOFT
        draw.ellipse([x - rad, y - rad, x + rad, y + rad], fill=color)
    # crown cluster at top
    for j, (dx, dy, s) in enumerate(
        [(0, -0.42, 0.055), (-0.08, -0.34, 0.04), (0.08, -0.34, 0.04), (0, -0.5, 0.035)]
    ):
        x = cx + dx * size
        y = cy + dy * size
        rad = size * s
        draw.ellipse([x - rad, y - rad, x + rad, y + rad], fill=PINK if j == 0 else PINK_SOFT)
    return canvas


for size, name in [(32, "favicon-32.png"), (48, "favicon-48.png")]:
    make_mark(size).save(PUBLIC / name)

apple = make_mark(180, bg=(34, 31, 34, 255))
apple.save(PUBLIC / "apple-touch-icon.png")
make_mark(512, bg=(34, 31, 34, 255)).save(PUBLIC / "og-icon.png")

frames = [make_mark(s) for s in (16, 32, 48)]
frames[0].save(
    PUBLIC / "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=frames[1:],
)

# Also write SVG favicon
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <g fill="#C93B8A">
    <circle cx="32" cy="14" r="3.2"/>
    <circle cx="40" cy="16.5" r="2.2" fill="#E878B4"/>
    <circle cx="24" cy="16.5" r="2.2" fill="#E878B4"/>
    <circle cx="32" cy="8.5" r="2"/>
    <circle cx="45.5" cy="22" r="2.8"/>
    <circle cx="18.5" cy="22" r="2.8"/>
    <circle cx="50" cy="32" r="3"/>
    <circle cx="14" cy="32" r="3"/>
    <circle cx="45.5" cy="42" r="2.8" fill="#E878B4"/>
    <circle cx="18.5" cy="42" r="2.8" fill="#E878B4"/>
    <circle cx="38" cy="48.5" r="2.6"/>
    <circle cx="26" cy="48.5" r="2.6"/>
    <circle cx="32" cy="51.5" r="2.4" fill="#E878B4"/>
  </g>
</svg>
'''
(PUBLIC / "favicon.svg").write_text(svg, encoding="utf-8")
print("favicon assets ok")
