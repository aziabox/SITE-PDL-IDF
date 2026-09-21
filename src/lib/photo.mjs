import fs from 'node:fs';
import path from 'node:path';
import { attr, esc } from './html.mjs';

const PHOTO_DIR = path.join(process.cwd(), 'src', 'assets', 'photos');

/** Liste des prises de vue attendues (sert aussi a generer PHOTOS.md). */
export const shotList = [];

/**
 * Rend une photo si le fichier existe dans src/assets/photos, sinon un cadre
 * de reservation documente (brief de prise de vue) : aucune image de banque
 * generique ni visuel genere n'est utilise a la place.
 */
export function photo({ name, alt, brief, width = 1200, height = 800, className = '', sizes = '(max-width: 860px) 100vw, 560px', priority = false }) {
  if (!shotList.some((s) => s.name === name)) shotList.push({ name, alt, brief, width, height });

  const base = path.join(PHOTO_DIR, name);
  const have = (ext) => fs.existsSync(`${base}.${ext}`);
  const ratio = `${width} / ${height}`;

  if (have('jpg') || have('webp') || have('avif')) {
    const sources = [
      have('avif') ? `<source type="image/avif" srcset="/assets/photos/${name}.avif" sizes="${attr(sizes)}">` : '',
      have('webp') ? `<source type="image/webp" srcset="/assets/photos/${name}.webp" sizes="${attr(sizes)}">` : '',
    ].join('');
    const fallback = have('jpg') ? `${name}.jpg` : have('webp') ? `${name}.webp` : `${name}.avif`;
    return `<figure class="figure ${className}"><div class="figure__frame" style="aspect-ratio:${ratio}">
      <picture>${sources}<img src="/assets/photos/${fallback}" alt="${attr(alt)}" width="${width}" height="${height}"
        ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>
    </div></figure>`;
  }

  return `<figure class="figure ${className}">
    <div class="figure__frame photoslot" style="aspect-ratio:${ratio}" role="img" aria-label="${attr(alt)}">
      <svg class="photoslot__mark" viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2">
        <rect x="4" y="11" width="40" height="30" rx="4"/><circle cx="24" cy="26" r="8"/>
        <path d="M17 11l3-4h8l3 4"/>
      </svg>
      <p class="photoslot__label">Emplacement photo</p>
      <p class="photoslot__brief">${esc(brief)}</p>
      <p class="photoslot__file">/assets/photos/${esc(name)}.jpg — ${width}×${height}</p>
    </div>
  </figure>`;
}
