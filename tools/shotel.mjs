import { chromium } from 'playwright';
const [route, sel, name, w] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport: { width: Number(w || 1440), height: 1000 }, deviceScaleFactor: 2 });
await p.goto('http://localhost:4321' + route, { waitUntil: 'load' });
await p.waitForTimeout(300);
await p.locator(sel).first().screenshot({ path: `/tmp/claude-0/-home-user-SITE-PDL-IDF/fd8b0197-94a2-542d-a66c-f2dffaca38ee/scratchpad/${name}.png` });
await b.close();
console.log('ok');
