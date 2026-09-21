/* Serveur HTTP du site statique.
   Local     : node server.mjs [port]
   Hebergeur : npm start  (PORT et HOST sont lus depuis l'environnement) */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.join(process.cwd(), 'dist');
const PORT = Number(process.argv[2] || process.env.PORT || 4321);
const HOST = process.env.HOST || '0.0.0.0';
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

http
  .createServer((req, res) => {
    const clean = decodeURIComponent(req.url.split('?')[0]);
    let file = path.join(DIST, clean);
    if (!file.startsWith(DIST)) { res.writeHead(403).end('forbidden'); return; }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) {
      const nf = path.join(DIST, '404.html');
      res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
      res.end(fs.existsSync(nf) ? fs.readFileSync(nf) : 'not found');
      return;
    }
    const ext = path.extname(file);
    const isAsset = /^\/assets\//.test(clean) && ext !== '.html';
    // Les pages HTML sont revalidées à chaque visite : une mise à jour du site
    // est visible immédiatement après un redéploiement. Les fichiers statiques
    // (CSS, JS, images) restent en cache.
    res.writeHead(200, {
      'content-type': TYPES[ext] || 'application/octet-stream',
      'cache-control': isAsset ? 'public, max-age=86400' : 'no-cache, must-revalidate',
      'x-content-type-options': 'nosniff',
      'referrer-policy': 'strict-origin-when-cross-origin',
    });
    res.end(fs.readFileSync(file));
  })
  .listen(PORT, HOST, () => console.log(`Site servi sur http://${HOST}:${PORT}`));
