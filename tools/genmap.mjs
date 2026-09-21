/* Génère src/lib/idf-geo.mjs à partir des contours administratifs réels.
   Source : tools/geodata/*.geojson (IGN / INSEE, Licence Ouverte).
   Projection Mercator, simplification Douglas-Peucker, ancrage des étiquettes
   au pôle d'inaccessibilité (point intérieur le plus éloigné du bord).

   node tools/genmap.mjs */
import fs from 'node:fs';
import path from 'node:path';

const CODES = ['75', '77', '78', '91', '92', '93', '94', '95'];
const GEO = path.join(process.cwd(), 'tools', 'geodata');
const OUT = path.join(process.cwd(), 'src', 'lib', 'idf-geo.mjs');

/* Cadre de sortie (unités SVG) */
const W = 900;
const H = 720;
const PAD = 26;
/* Tolérance de simplification, en unités du cadre de sortie */
const TOL = 1.6;

/* --- Projection Mercator ------------------------------------------------- */
const merc = ([lon, lat]) => [
  (lon * Math.PI) / 180,
  Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)),
];

/* --- Douglas-Peucker ----------------------------------------------------- */
function segDist(p, a, b) {
  let [x, y] = a;
  let dx = b[0] - x;
  let dy = b[1] - y;
  if (dx !== 0 || dy !== 0) {
    const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
    if (t > 1) [x, y] = b;
    else if (t > 0) { x += dx * t; y += dy * t; }
  }
  return Math.hypot(p[0] - x, p[1] - y);
}
function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    let maxD = 0;
    let idx = -1;
    for (let k = i + 1; k < j; k++) {
      const d = segDist(pts[k], pts[i], pts[j]);
      if (d > maxD) { maxD = d; idx = k; }
    }
    if (maxD > tol && idx > 0) {
      keep[idx] = 1;
      stack.push([i, idx], [idx, j]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}

/* --- Pôle d'inaccessibilité (recherche par grille successive) ------------- */
const inside = (p, ring) => {
  let ok = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) ok = !ok;
  }
  return ok;
};
const distToRing = (p, ring) => {
  let min = Infinity;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    min = Math.min(min, segDist(p, ring[i], ring[j]));
  }
  return (inside(p, ring) ? 1 : -1) * min;
};
function labelPoint(ring) {
  const xs = ring.map((p) => p[0]);
  const ys = ring.map((p) => p[1]);
  let box = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
  let best = [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2];
  let bestD = distToRing(best, ring);
  let step = Math.max(box[2] - box[0], box[3] - box[1]) / 8;
  for (let pass = 0; pass < 6; pass++) {
    for (let x = box[0]; x <= box[2]; x += step) {
      for (let y = box[1]; y <= box[3]; y += step) {
        const d = distToRing([x, y], ring);
        if (d > bestD) { bestD = d; best = [x, y]; }
      }
    }
    box = [best[0] - step, best[1] - step, best[0] + step, best[1] + step];
    step /= 3;
  }
  return best;
}

/* --- Lecture + projection ------------------------------------------------ */
const feats = CODES.map((code) => {
  const raw = JSON.parse(fs.readFileSync(path.join(GEO, `departement-${code}.geojson`), 'utf8'));
  const f = raw.features ? raw.features[0] : raw;
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  // On ne garde que l'anneau extérieur du polygone principal (les îles et
  // enclaves minuscules n'apportent rien à cette échelle).
  const rings = polys.map((p) => p[0].map(merc));
  const main = rings.reduce((a, b) => (Math.abs(area(b)) > Math.abs(area(a)) ? b : a));
  return { code, nom: f.properties.nom, ring: main };
});

function area(ring) {
  let s = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    s += (ring[j][0] - ring[i][0]) * (ring[j][1] + ring[i][1]);
  }
  return s / 2;
}

/* --- Mise à l'échelle commune -------------------------------------------- */
const all = feats.flatMap((f) => f.ring);
const minX = Math.min(...all.map((p) => p[0]));
const maxX = Math.max(...all.map((p) => p[0]));
const minY = Math.min(...all.map((p) => p[1]));
const maxY = Math.max(...all.map((p) => p[1]));
const scale = Math.min((W - PAD * 2) / (maxX - minX), (H - PAD * 2) / (maxY - minY));
const offX = (W - (maxX - minX) * scale) / 2;
const offY = (H - (maxY - minY) * scale) / 2;
const toSvg = ([x, y]) => [(x - minX) * scale + offX, (maxY - y) * scale + offY];

/* --- Génération ---------------------------------------------------------- */
const paths = {};
const labels = {};
let totalPts = 0;

for (const f of feats) {
  const pts = simplify(f.ring.map(toSvg), TOL);
  totalPts += pts.length;
  // Arrondi à l'unité : à l'échelle d'affichage (≈0,7 px par unité) l'écart
  // est invisible et le poids du tracé baisse d'environ 15 %.
  const r = (n) => Math.round(n);
  paths[f.code] =
    pts.map((p, i) => `${i ? 'L' : 'M'}${r(p[0])} ${r(p[1])}`).join(' ') + ' Z';
  const lp = labelPoint(pts);
  labels[f.code] = [Math.round(lp[0]), Math.round(lp[1])];
  console.log(`${f.code} ${f.nom.padEnd(18)} ${String(f.ring.length).padStart(5)} → ${String(pts.length).padStart(4)} points`);
}

/* Cadre de l'encart « petite couronne » (75, 92, 93, 94) */
const INSET_CODES = ['75', '92', '93', '94'];
const insetPts = feats.filter((f) => INSET_CODES.includes(f.code)).flatMap((f) => f.ring.map(toSvg));
const ix1 = Math.min(...insetPts.map((p) => p[0]));
const ix2 = Math.max(...insetPts.map((p) => p[0]));
const iy1 = Math.min(...insetPts.map((p) => p[1]));
const iy2 = Math.max(...insetPts.map((p) => p[1]));
const im = 16;
const insetBox = [
  Math.round((ix1 - im) * 10) / 10,
  Math.round((iy1 - im) * 10) / 10,
  Math.round((ix2 - ix1 + im * 2) * 10) / 10,
  Math.round((iy2 - iy1 + im * 2) * 10) / 10,
];

const body = `/* Contours des départements d'Île-de-France.
   FICHIER GÉNÉRÉ — ne pas modifier à la main : \`node tools/genmap.mjs\`.
   Source : contours administratifs IGN / INSEE (Licence Ouverte), projection
   Mercator puis simplification. Voir tools/geodata/SOURCE.md. */

export const MAP_VIEWBOX = '0 0 ${W} ${H}';

/* Cadre resserré sur Paris et la petite couronne (encart de la carte) */
export const INSET_VIEWBOX = '${insetBox.join(' ')}';
export const INSET_CODES = ${JSON.stringify(INSET_CODES)};

export const DEPT_PATHS = {
${CODES.map((c) => `  '${c}': '${paths[c]}',`).join('\n')}
};

export const DEPT_LABELS = {
${CODES.map((c) => `  '${c}': [${labels[c][0]}, ${labels[c][1]}],`).join('\n')}
};
`;
fs.writeFileSync(OUT, body);
console.log(`\n→ ${OUT} (${totalPts} points, ${(body.length / 1024).toFixed(1)} Ko)`);
