/* Generation des images bitmap de marque (OG + icone) sans dependance :
   encodeur PNG minimal + primitives de dessin. */
import zlib from 'node:zlib';
import fs from 'node:fs';

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
const crc32 = (buf) => {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
};

class Canvas {
  constructor(w, h, bg) {
    this.w = w; this.h = h;
    this.px = Buffer.alloc(w * h * 3);
    this.fillRect(0, 0, w, h, bg);
  }
  set(x, y, [r, g, b], a = 1) {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    const i = (y * this.w + x) * 3;
    if (a >= 1) { this.px[i] = r; this.px[i + 1] = g; this.px[i + 2] = b; return; }
    this.px[i] = this.px[i] * (1 - a) + r * a;
    this.px[i + 1] = this.px[i + 1] * (1 - a) + g * a;
    this.px[i + 2] = this.px[i + 2] * (1 - a) + b * a;
  }
  fillRect(x, y, w, h, c, a = 1) {
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) this.set(i, j, c, a);
  }
  line(x0, y0, x1, y1, c, width = 2, a = 1) {
    const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0) * 2) || 1;
    for (let s = 0; s <= steps; s++) {
      const x = x0 + ((x1 - x0) * s) / steps;
      const y = y0 + ((y1 - y0) * s) / steps;
      this.dot(x, y, width / 2, c, a);
    }
  }
  dot(cx, cy, r, c, a = 1) {
    for (let j = Math.floor(cy - r); j <= cy + r; j++)
      for (let i = Math.floor(cx - r); i <= cx + r; i++) {
        const d = Math.hypot(i - cx, j - cy);
        if (d <= r) this.set(i, j, c, a * Math.min(1, (r - d) * 2 + 0.35));
      }
  }
  ring(cx, cy, r, c, width = 2, a = 1) {
    const steps = Math.ceil(2 * Math.PI * r * 2);
    for (let s = 0; s < steps; s++) {
      const t = (s / steps) * Math.PI * 2;
      this.dot(cx + Math.cos(t) * r, cy + Math.sin(t) * r, width / 2, c, a);
    }
  }
  roundRect(x, y, w, h, r, c) {
    for (let j = y; j < y + h; j++)
      for (let i = x; i < x + w; i++) {
        const dx = Math.max(x + r - i, i - (x + w - r - 1), 0);
        const dy = Math.max(y + r - j, j - (y + h - r - 1), 0);
        if (Math.hypot(dx, dy) <= r) this.set(i, j, c);
      }
  }
  png() {
    const raw = Buffer.alloc((this.w * 3 + 1) * this.h);
    for (let y = 0; y < this.h; y++) {
      raw[y * (this.w * 3 + 1)] = 0;
      this.px.copy(raw, y * (this.w * 3 + 1) + 1, y * this.w * 3, (y + 1) * this.w * 3);
    }
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(this.w, 0);
    ihdr.writeUInt32BE(this.h, 4);
    ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
    return Buffer.concat([
      Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
      chunk('IHDR', ihdr),
      chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
      chunk('IEND', Buffer.alloc(0)),
    ]);
  }
}

const DEEP = [0x17, 0x3b, 0x4d];
const MID = [0x3e, 0x71, 0x85];
const GLACIER = [0xdc, 0xec, 0xf2];
const SAND = [0xe9, 0xe1, 0xd4];
const WHITE = [0xff, 0xff, 0xff];

/** Marque : toit + lit, dessinee a l'echelle demandee. */
function mark(c, ox, oy, k) {
  c.line(ox + 10 * k, oy + 19.4 * k, ox + 20 * k, oy + 11.2 * k, GLACIER, 1.7 * k);
  c.line(ox + 20 * k, oy + 11.2 * k, ox + 30 * k, oy + 19.4 * k, GLACIER, 1.7 * k);
  c.line(ox + 13 * k, oy + 22.6 * k, ox + 27 * k, oy + 22.6 * k, WHITE, 1.7 * k);
  c.line(ox + 13 * k, oy + 22.6 * k, ox + 13 * k, oy + 27.2 * k, WHITE, 1.7 * k);
  c.line(ox + 27 * k, oy + 22.6 * k, ox + 27 * k, oy + 27.2 * k, WHITE, 1.7 * k);
  c.line(ox + 16.2 * k, oy + 22.6 * k, ox + 16.2 * k, oy + 19.8 * k, MID, 1.7 * k);
  c.line(ox + 16.2 * k, oy + 19.5 * k, ox + 23.8 * k, oy + 19.5 * k, MID, 1.7 * k);
  c.line(ox + 23.8 * k, oy + 19.8 * k, ox + 23.8 * k, oy + 22.6 * k, MID, 1.7 * k);
  c.dot(ox + 20 * k, oy + 29.6 * k, 1.5 * k, SAND);
}

/* --- Open Graph 1200x630 ------------------------------------------------- */
const og = new Canvas(1200, 630, DEEP);
for (let i = 0; i < 4; i++) og.ring(1000, 120, 180 + i * 90, WHITE, 1.4, 0.07);
og.fillRect(0, 596, 1200, 34, MID, 0.5);
og.fillRect(0, 596, 300, 34, SAND, 0.9);
mark(og, 92, 92, 3.1);
// bandes typographiques suggerees (le texte definitif sera pose par le graphiste)
og.fillRect(92, 300, 620, 12, WHITE, 0.92);
og.fillRect(92, 336, 470, 12, WHITE, 0.92);
og.fillRect(92, 392, 300, 8, GLACIER, 0.75);
og.fillRect(92, 420, 380, 8, GLACIER, 0.5);
fs.mkdirSync('src/assets/img', { recursive: true });
fs.writeFileSync('src/assets/img/og-default.png', og.png());

/* --- Icone 180x180 -------------------------------------------------------- */
const icon = new Canvas(180, 180, WHITE);
icon.roundRect(0, 0, 180, 180, 40, DEEP);
mark(icon, 22, 22, 3.4);
fs.writeFileSync('src/assets/img/apple-touch-icon.png', icon.png());

console.log('images generees : og-default.png, apple-touch-icon.png');
