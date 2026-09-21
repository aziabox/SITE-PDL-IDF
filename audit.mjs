/* Audit statique du site genere : liens, SEO, accessibilite, coherence.
   node audit.mjs  ->  rapport + code de sortie 1 si erreurs bloquantes. */
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.join(process.cwd(), 'dist');
const errors = [];
const warns = [];
const err = (page, msg) => errors.push(`${page} — ${msg}`);
const warn = (page, msg) => warns.push(`${page} — ${msg}`);

/* --- Collecte des pages -------------------------------------------------- */
const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html') {
      const route = '/' + path.relative(DIST, path.dirname(p)).split(path.sep).join('/');
      pages.push({ route: route === '/.' ? '/' : route, file: p, html: fs.readFileSync(p, 'utf8') });
    }
  }
})(DIST);

const routes = new Set(pages.map((p) => p.route));
const between = (h, re) => [...h.matchAll(re)].map((m) => m[1]);

/* --- Verifications page par page ---------------------------------------- */
const titles = new Map();
const descs = new Map();
const h1s = new Map();
const CLAIMS = [
  /100\s*%\s*(garanti|d[’']éradication|fiable|efficace)/i,
  /aucun risque de retour/i,
  /éradication totale/i,
  /toutes les punaises sont détruites/i,
  /satisfait ou remboursé/i,
];

for (const p of pages) {
  const { route, html } = p;

  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  const h1 = between(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g);
  const noindex = /content="noindex/.test(html);

  if (!title) err(route, 'title manquant');
  if (title.length > 68) warn(route, `title long (${title.length}) : ${title.slice(0, 70)}…`);
  if (!desc) err(route, 'meta description manquante');
  else if (desc.length < 80 || desc.length > 185) warn(route, `meta description ${desc.length} caractères`);
  if (!canonical) err(route, 'canonical manquant');
  if (h1.length !== 1) err(route, `${h1.length} balise(s) H1`);

  if (!noindex) {
    if (titles.has(title)) err(route, `title dupliqué avec ${titles.get(title)}`);
    else titles.set(title, route);
    if (descs.has(desc)) err(route, `meta description dupliquée avec ${descs.get(desc)}`);
    else descs.set(desc, route);
    const h1t = h1[0]?.replace(/<[^>]+>/g, '').trim();
    if (h1t) {
      if (h1s.has(h1t)) err(route, `H1 dupliqué avec ${h1s.get(h1t)}`);
      else h1s.set(h1t, route);
    }
  }

  /* Hierarchie des titres */
  const hs = [...html.matchAll(/<h([2-4])[^>]*>/g)].map((m) => Number(m[1]));
  let prev = 1;
  for (const lvl of hs) {
    if (lvl > prev + 1) { warn(route, `saut de niveau de titre (h${prev} → h${lvl})`); break; }
    prev = lvl;
  }

  /* Images */
  for (const img of [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0])) {
    if (!/\balt=/.test(img)) err(route, `<img> sans alt : ${img.slice(0, 80)}`);
    if (!/\bwidth=/.test(img) || !/\bheight=/.test(img)) warn(route, `<img> sans dimensions : ${img.slice(0, 80)}`);
    if (!/loading=|fetchpriority=/.test(img)) warn(route, `<img> sans stratégie de chargement`);
  }

  /* SVG accessibles */
  for (const svg of [...html.matchAll(/<svg\b[^>]*>/g)].map((m) => m[0])) {
    if (!/aria-hidden|role=|aria-label|aria-labelledby/.test(svg)) warn(route, 'svg sans rôle ni aria-hidden');
  }

  /* Donnees structurees */
  for (const raw of between(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(raw);
      const s = JSON.stringify(data);
      for (const forbidden of ['aggregateRating', 'reviewCount', 'ratingValue', 'priceRange', 'openingHours', 'streetAddress']) {
        if (s.includes(forbidden)) err(route, `donnée structurée non vérifiable : ${forbidden}`);
      }
    } catch (e) {
      err(route, `JSON-LD invalide : ${e.message}`);
    }
  }

  /* Promesses interdites */
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '');
  for (const re of CLAIMS) {
    const m = text.match(re);
    // tolere les formulations de mise en garde ("nous n'ecrivons pas 100 %...")
    if (m) {
      const ctx = text.slice(Math.max(0, m.index - 220), m.index).toLowerCase();
      const negated = /(pas|jamais|ni|sans|éviter|aucune entreprise|ne devrait|formules|promesse)/.test(ctx);
      if (!negated) err(route, `promesse invérifiable : « ${m[0]} »`);
    }
  }

  /* Artefacts de rendu */
  for (const bad of ['undefined', 'NaN', '[object Object]', '${']) {
    if (html.includes(bad)) err(route, `artefact de rendu « ${bad} » présent`);
  }

  /* Liens internes */
  const links = between(html, /<a\b[^>]*href="([^"]+)"/g);
  for (const href of links) {
    if (/^(https?:|tel:|mailto:|#)/.test(href)) continue;
    const [pathname, hash] = href.split('#');
    if (!pathname) continue;
    const clean = pathname.replace(/\/$/, '') || '/';
    if (!routes.has(clean) && !fs.existsSync(path.join(DIST, clean.replace(/^\//, '')))) {
      err(route, `lien interne cassé : ${href}`);
    }
    if (hash) {
      const target = pages.find((x) => x.route === clean);
      if (target && !new RegExp(`id="${hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(target.html)) {
        warn(route, `ancre introuvable : ${href}`);
      }
    }
  }

  /* Accessibilite de base */
  if (!/<html lang="fr"/.test(html)) err(route, 'attribut lang manquant');
  if (!/class="skip-link"/.test(html)) warn(route, 'lien d’évitement manquant');
  if (!/<main/.test(html)) err(route, 'balise <main> manquante');
}

/* --- Pages orphelines ---------------------------------------------------- */
const linked = new Set();
for (const p of pages) {
  for (const href of between(p.html, /<a\b[^>]*href="([^"]+)"/g)) {
    if (/^(https?:|tel:|mailto:|#)/.test(href)) continue;
    linked.add((href.split('#')[0] || '/').replace(/\/$/, '') || '/');
  }
}
for (const r of routes) {
  if (r !== '/' && r !== '/404' && !linked.has(r)) warn(r, 'page orpheline (aucun lien entrant)');
}

/* --- Sitemap / robots ---------------------------------------------------- */
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const inSitemap = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const u = new URL(m[1]);
    return u.pathname.replace(/\/$/, '') || '/';
  })
);
for (const p of pages) {
  const noindex = /content="noindex/.test(p.html);
  if (!noindex && !inSitemap.has(p.route)) err(p.route, 'absente du sitemap');
  if (noindex && inSitemap.has(p.route)) err(p.route, 'page noindex présente dans le sitemap');
}
if (!fs.existsSync(path.join(DIST, 'robots.txt'))) errors.push('robots.txt manquant');
if (!fs.existsSync(path.join(DIST, 'favicon.svg'))) errors.push('favicon manquant');
if (!fs.existsSync(path.join(DIST, '404.html'))) errors.push('404.html manquant');

/* --- Duplication de contenu --------------------------------------------- */
const sentences = new Map();
for (const p of pages) {
  if (/content="noindex/.test(p.html)) continue;
  const proseBlocks = [...p.html.matchAll(/<div class="prose"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/div>|<aside)/g)].map((m) => m[1]).join(' ');
  const body = (proseBlocks || (p.html.match(/<main[\s\S]*?<\/main>/) || [''])[0])
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
  for (const s of body.split(/(?<=[.!?])\s+/)) {
    const t = s.trim();
    if (t.length < 90) continue;
    if (!sentences.has(t)) sentences.set(t, []);
    sentences.get(t).push(p.route);
  }
}
let dupCount = 0;
for (const [s, rs] of sentences) {
  const uniq = [...new Set(rs)];
  if (uniq.length > 3) {
    dupCount++;
    if (dupCount <= 8) warn(uniq[0], `phrase répétée sur ${uniq.length} pages : « ${s.slice(0, 70)}… »`);
  }
}

/* --- Rapport ------------------------------------------------------------- */
console.log(`\nPages analysées : ${pages.length}`);
console.log(`Titres uniques  : ${titles.size} · Descriptions uniques : ${descs.size}`);
console.log(`Phrases longues répétées sur > 3 pages : ${dupCount}\n`);
if (warns.length) {
  console.log(`⚠ Avertissements (${warns.length}) :`);
  const limit = Number(process.env.AUDIT_WARN_LIMIT || 60);
  for (const w of warns.slice(0, limit)) console.log('  · ' + w);
  if (warns.length > limit) console.log(`  … et ${warns.length - limit} autres`);
  console.log('');
}
if (errors.length) {
  console.log(`✗ Erreurs (${errors.length}) :`);
  for (const e of errors.slice(0, 80)) console.log('  · ' + e);
  if (errors.length > 80) console.log(`  … et ${errors.length - 80} autres`);
  process.exit(1);
}
console.log('✓ Aucune erreur bloquante.');
