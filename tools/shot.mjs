/* Captures d'ecran de controle : node tools/shot.mjs <route> <largeur> [nom] */
import { chromium } from 'playwright';
const route = process.argv[2] || '/';
const width = Number(process.argv[3] || 1440);
const name = process.argv[4] || 'shot';
const full = process.argv[5] !== 'viewport';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width, height: width < 700 ? 800 : 1000 }, deviceScaleFactor: 2 });
const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://localhost:4321' + route, { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1
  ? { scroll: document.documentElement.scrollWidth, win: window.innerWidth } : null);
await page.screenshot({ path: `/tmp/claude-0/-home-user-SITE-PDL-IDF/fd8b0197-94a2-542d-a66c-f2dffaca38ee/scratchpad/${name}.png`, fullPage: full });
console.log(JSON.stringify({ route, width, overflow, errors }, null, 1));
await browser.close();
