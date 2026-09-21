/* Generateur statique du site (zero dependance).
   node build.mjs  ->  dist/ pret a publier. */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { site } from './src/lib/site.mjs';

const ROOT = path.dirname(url.fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const rm = (p) => fs.rmSync(p, { recursive: true, force: true });

const copyDir = (from, to) => {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name);
    const d = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
};

const writePage = (route, html) => {
  const out =
    route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route.replace(/^\//, ''), 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
};

async function loadDir(dir) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  const files = fs.readdirSync(abs).filter((f) => f.endsWith('.mjs')).sort();
  const mods = [];
  for (const f of files) {
    const mod = await import(url.pathToFileURL(path.join(abs, f)).href);
    mods.push({ file: f, mod });
  }
  return mods;
}

async function main() {
  const t0 = Date.now();
  rm(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  const { renderPage } = await import('./src/lib/layout.mjs');

  /* 1. Articles de blog (charges avant les pages : l'index du blog les utilise) */
  const postMods = await loadDir('src/content/blog');
  const posts = postMods
    .map(({ mod }) => mod.default)
    .filter(Boolean)
    .sort((a, b) => (a.published < b.published ? 1 : -1));
  globalThis.__POSTS__ = posts;

  /* 2. Pages */
  const pageMods = await loadDir('src/content/pages');
  const pages = [];
  for (const { mod } of pageMods) {
    const out = typeof mod.default === 'function' ? await mod.default() : mod.default;
    if (Array.isArray(out)) pages.push(...out);
    else if (out) pages.push(out);
  }

  /* 3. Pages d'articles */
  const { buildPostPage } = await import('./src/lib/blog.mjs');
  for (const post of posts) pages.push(buildPostPage(post, posts));

  /* 4. Rendu */
  const seen = new Map();
  for (const p of pages) {
    if (seen.has(p.url)) throw new Error(`URL dupliquee : ${p.url} (${seen.get(p.url)} / ${p.title})`);
    seen.set(p.url, p.title);
    writePage(p.url, renderPage(p));
  }

  /* 5. Assets */
  copyDir(path.join(ROOT, 'src', 'assets'), path.join(DIST, 'assets'));

  /* 6. Favicon, manifest, robots, sitemap */
  fs.writeFileSync(
    path.join(DIST, 'favicon.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="11" fill="#173B4D"/><path d="M10 19.4 20 11.2l10 8.2" fill="none" stroke="#DCECF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 22.6h14M13 22.6v4.6M27 22.6v4.6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M16.2 22.6v-2.1a1 1 0 0 1 1-1h5.6a1 1 0 0 1 1 1v2.1" fill="none" stroke="#3E7185" stroke-width="2" stroke-linejoin="round"/><circle cx="20" cy="29.6" r="1.6" fill="#E9E1D4"/></svg>`
  );
  fs.writeFileSync(
    path.join(DIST, 'site.webmanifest'),
    JSON.stringify(
      {
        name: site.nameFull,
        short_name: 'Punaises de lit IDF',
        start_url: '/',
        display: 'standalone',
        background_color: '#F8FAF9',
        theme_color: '#173B4D',
        icons: [
          { src: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
          { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
      null,
      2
    )
  );
  fs.writeFileSync(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\n\n# Robots des moteurs generatifs : contenu accessible\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`
  );

  const today = new Date().toISOString().slice(0, 10);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">'.replace('sitemap.org', 'sitemaps.org'),
    ...pages
      .filter((p) => !p.noindex)
      .map((p) => {
        const loc = `${site.origin}${p.url === '/' ? '/' : p.url}`;
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${p.updated || today}</lastmod>\n    <changefreq>${p.changefreq || 'monthly'}</changefreq>\n    <priority>${(p.priority ?? 0.6).toFixed(1)}</priority>\n  </url>`;
      }),
    '</urlset>',
  ].join('\n');
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);

  /* 7. Page 404 (a la racine, pour les hebergeurs statiques) */
  const notFound = pages.find((p) => p.url === '/404');
  if (notFound) fs.writeFileSync(path.join(DIST, '404.html'), renderPage(notFound));

  /* 8. Fiche des prises de vue attendues */
  const { shotList } = await import('./src/lib/photo.mjs');
  const shots = [...new Map(shotList.map((s) => [s.name, s])).values()];
  fs.writeFileSync(
    path.join(ROOT, 'PHOTOS.md'),
    `# Prises de vue à réaliser\n\nChaque emplacement ci-dessous attend une photo réelle prise sur le terrain.\nDéposez le fichier dans \`src/assets/photos/\` sous le nom indiqué (\`.jpg\`, et si possible\n\`.webp\` / \`.avif\` du même nom pour les formats modernes), puis relancez \`npm run build\`.\nLe gabarit de réservation disparaît automatiquement dès que le fichier existe.\n\n| Fichier | Dimensions | Sujet | Texte alternatif |\n| --- | --- | --- | --- |\n${shots
      .map((s) => `| \`${s.name}.jpg\` | ${s.width}×${s.height} | ${s.brief} | ${s.alt} |`)
      .join('\n')}\n`
  );

  console.log(
    `✓ ${pages.length} pages · ${posts.length} articles · ${shots.length} emplacements photo · ${Date.now() - t0} ms`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
