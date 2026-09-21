import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport: { width: Number(process.argv[3] || 1440), height: 900 } });
await p.goto('http://localhost:4321' + (process.argv[2] || '/'), { waitUntil: 'domcontentloaded' });
console.log(JSON.stringify(await p.evaluate(() => {
  const w = document.documentElement.clientWidth, out = [];
  document.querySelectorAll('*').forEach((el) => {
    const r = el.getBoundingClientRect();
    let scrollable = false;
    for (let a = el.parentElement; a; a = a.parentElement) {
      const ov = getComputedStyle(a).overflowX;
      if (ov === 'auto' || ov === 'scroll' || ov === 'hidden') { scrollable = true; break; }
    }
    if (!scrollable && r.width > 0 && (r.right > w + 1 || r.left < -1)) {
      out.push({ tag: el.tagName, cls: el.className?.toString?.().slice(0, 60), left: Math.round(r.left), right: Math.round(r.right) });
    }
  });
  return { clientWidth: w, scrollWidth: document.documentElement.scrollWidth, offenders: out.slice(0, 12) };
}), null, 1));
await b.close();
