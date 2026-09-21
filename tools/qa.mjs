/* Controle navigateur : debordements, erreurs JS, cibles tactiles, poids. */
import { chromium } from 'playwright';

const ROUTES = [
  '/', '/punaises-de-lit', '/detection-canine-punaises-de-lit', '/traitement-thermique-punaises-de-lit',
  '/hugetri400', '/methodes-traitement-punaises-de-lit', '/diagnostic', '/notre-histoire',
  '/punaises-de-lit-ile-de-france', '/punaises-de-lit-paris-75', '/punaises-de-lit-matelas',
  '/punaises-de-lit-hotel', '/punaises-de-lit-versailles', '/blog', '/blog/reconnaitre-punaise-de-lit',
  '/mentions-legales', '/404',
];
const WIDTHS = [320, 375, 390, 414, 768, 1024, 1440];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const problems = [];
let totalBytes = 0;

for (const width of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height: width < 700 ? 780 : 900 } });
  const page = await ctx.newPage();
  for (const route of ROUTES) {
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (m) => {
      if (m.type() === 'error' && !/ERR_CERT_AUTHORITY_INVALID|fonts.googleapis/.test(m.text())) errors.push(m.text());
    });
    await page.goto('http://localhost:4321' + route, { waitUntil: 'domcontentloaded' });
    const res = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      const out = { offenders: [], small: [], cut: [] };
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width <= 0) return;
        let scrollable = false;
        for (let a = el.parentElement; a; a = a.parentElement) {
          const ov = getComputedStyle(a).overflowX;
          if (ov === 'auto' || ov === 'scroll' || ov === 'hidden') { scrollable = true; break; }
        }
        if (!scrollable && (r.right > w + 1 || r.left < -1)) {
          out.offenders.push(el.tagName + '.' + (el.className?.toString?.().slice(0, 40) || ''));
        }
      });
      // cibles tactiles
      document.querySelectorAll('a.btn, button, .callbar a, .nav__link, .pagination a, .linkgrid a').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.height > 0 && r.height < 40) out.small.push(el.tagName + '.' + (el.className?.toString?.().slice(0, 30) || '') + ' h=' + Math.round(r.height));
      });
      // texte tronque horizontalement
      document.querySelectorAll('h1, h2, h3, p, li, .btn, .pill').forEach((el) => {
        if (el.classList.contains('sr-only') || el.closest('.nav') || el.closest('.drawer')) return;
        if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX !== 'auto') {
          out.cut.push(el.tagName + ' : ' + (el.textContent || '').trim().slice(0, 40));
        }
      });
      return out;
    });
    if (res.offenders.length) problems.push(`${width}px ${route} — débordement : ${[...new Set(res.offenders)].slice(0, 3).join(', ')}`);
    if (res.small.length) problems.push(`${width}px ${route} — cible tactile < 40px : ${[...new Set(res.small)].slice(0, 3).join(', ')}`);
    if (res.cut.length) problems.push(`${width}px ${route} — texte tronqué : ${[...new Set(res.cut)].slice(0, 2).join(' | ')}`);
    if (errors.length) problems.push(`${width}px ${route} — erreur JS : ${errors.slice(0, 2).join(' | ')}`);
    page.removeAllListeners('pageerror');
    page.removeAllListeners('console');
  }
  await ctx.close();
}

/* Poids des pages principales */
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 } });
const page = await ctx.newPage();
for (const route of ['/', '/punaises-de-lit', '/blog']) {
  let bytes = 0;
  page.on('response', async (r) => {
    try { const b = await r.body(); bytes += b.length; } catch {}
  });
  await page.goto('http://localhost:4321' + route, { waitUntil: 'networkidle' });
  console.log(`poids ${route} : ${(bytes / 1024).toFixed(0)} Ko (hors polices distantes bloquées)`);
  totalBytes += bytes;
  page.removeAllListeners('response');
}
await ctx.close();

/* Interactions */
const ictx = await browser.newContext({ viewport: { width: 390, height: 780 } });
const ip = await ictx.newPage();
await ip.goto('http://localhost:4321/', { waitUntil: 'load' });
await ip.click('.burger');
await ip.waitForTimeout(350);
const drawerOpen = await ip.evaluate(() => document.querySelector('.drawer').classList.contains('is-open'));
if (!drawerOpen) problems.push('menu mobile : ne s’ouvre pas');
await ip.keyboard.press('Escape');
await ip.waitForTimeout(350);
const drawerClosed = await ip.evaluate(() => !document.querySelector('.drawer').classList.contains('is-open'));
if (!drawerClosed) problems.push('menu mobile : ne se ferme pas avec Échap');

await ip.setViewportSize({ width: 1280, height: 900 });
await ip.goto('http://localhost:4321/punaises-de-lit-ile-de-france', { waitUntil: 'load' });
await ip.hover('.idf__deptlink[data-code="93"]');
await ip.waitForTimeout(250);
const panel = await ip.textContent('[data-idf-panel]');
if (!/Seine-Saint-Denis/.test(panel || '')) problems.push('carte interactive : le panneau ne se met pas à jour au survol');
const href = await ip.getAttribute('.idf__deptlink[data-code="93"]', 'href');
if (href !== '/punaises-de-lit-seine-saint-denis-93') problems.push('carte interactive : lien départemental incorrect (' + href + ')');
await ip.keyboard.press('Tab');
const focusOk = await ip.evaluate(() => !!document.activeElement && document.activeElement !== document.body);
if (!focusOk) problems.push('carte interactive : navigation clavier impossible');

await ip.goto('http://localhost:4321/diagnostic', { waitUntil: 'load' });
await ip.click('button[type="submit"]');
await ip.waitForTimeout(200);
const invalid = await ip.evaluate(() => document.querySelectorAll('.field.has-error').length);
if (invalid < 4) problems.push(`formulaire : validation incomplète (${invalid} champs signalés)`);
const statusVisible = await ip.evaluate(() => document.querySelector('[data-form-status]')?.classList.contains('is-visible'));
if (!statusVisible) problems.push('formulaire : message d’état non affiché');
await ictx.close();

await browser.close();

if (problems.length) {
  console.log(`\n✗ ${problems.length} problème(s) :`);
  for (const p of [...new Set(problems)]) console.log('  · ' + p);
  process.exit(1);
}
console.log('\n✓ Aucun problème détecté (débordements, cibles tactiles, JS, interactions).');
