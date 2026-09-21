import { site, nav, cta, legal } from './site.mjs';
import { esc, attr, icon, join } from './html.mjs';

export const brandMark = (size = 40) => `
<svg class="brand__mark" width="${size}" height="${size}" viewBox="0 0 40 40" role="img" aria-label="${attr(site.name)}">
  <rect width="40" height="40" rx="11" fill="#173B4D"/>
  <path d="M10 19.4 20 11.2l10 8.2" fill="none" stroke="#DCECF2" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 22.6h14" fill="none" stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round"/>
  <path d="M13 22.6v4.6M27 22.6v4.6" fill="none" stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round"/>
  <path d="M16.2 22.6v-2.1a1 1 0 0 1 1-1h5.6a1 1 0 0 1 1 1v2.1" fill="none" stroke="#3E7185" stroke-width="1.7" stroke-linejoin="round"/>
  <circle cx="20" cy="29.6" r="1.5" fill="#E9E1D4"/>
</svg>`;

const topbar = () => `
<div class="topbar">
  <div class="wrap topbar__in">
    <ul class="topbar__list">
      <li>${icon('map')} ${esc(site.areaServed)}<span class="topbar__more"> — 75 · 77 · 78 · 91 · 92 · 93 · 94 · 95</span></li>
      <li>${icon('people')} Entreprise familiale, savoir-faire transmis de père en fils</li>
      <li>${icon('dog')} Détection canine &amp; traitement thermique</li>
    </ul>
    <a href="tel:${attr(site.phoneHref)}" data-cta="topbar-tel">${icon('phone')} ${esc(site.phoneDisplay)}</a>
  </div>
</div>`;

const navItem = (item, current) => {
  const active = current === item.href ? ' aria-current="page"' : '';
  if (!item.children) {
    return `<li class="nav__item"><a class="nav__link" href="${attr(item.href)}"${active}>${esc(item.label)}</a></li>`;
  }
  const caret =
    '<svg class="nav__caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m1.6 3.4 3.4 3.4 3.4-3.4"/></svg>';
  return `<li class="nav__item">
    <a class="nav__link" href="${attr(item.href)}"${active}>${esc(item.label)}${caret}</a>
    <ul class="nav__panel">${item.children
      .map((c) => `<li><a href="${attr(c.href)}">${esc(c.label)}</a></li>`)
      .join('')}</ul>
  </li>`;
};

const header = (current) => `
<header class="header">
  <div class="wrap header__in">
    <a class="brand" href="/" aria-label="${attr(site.nameFull)} — accueil">
      ${brandMark()}
      <span class="brand__txt">
        <span class="brand__name">Expertise Punaises de Lit</span>
        <span class="brand__sub">Île-de-France</span>
      </span>
    </a>
    <nav class="nav" aria-label="Navigation principale">
      <ul class="nav__list">${nav.map((i) => navItem(i, current)).join('')}</ul>
    </nav>
    <div class="header__cta">
      <a class="header__tel" href="tel:${attr(site.phoneHref)}" aria-label="Appeler le ${attr(site.phoneDisplay)}" data-cta="header-tel">
        ${icon('phone')}<span>${esc(site.phoneDisplay)}</span>
      </a>
      <a class="btn btn--primary btn--sm hide-sm" href="${attr(cta.primary.href)}" data-cta="header-primary">${esc(cta.primary.label)}</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Ouvrir le menu">
        <span></span>
      </button>
    </div>
  </div>
</header>
<div class="drawer" id="menu-mobile" hidden>
  <div class="drawer__head">
    <a class="brand" href="/">${brandMark(34)}<span class="brand__txt"><span class="brand__name">Expertise Punaises de Lit</span><span class="brand__sub">Île-de-France</span></span></a>
    <button class="drawer__close" type="button" aria-label="Fermer le menu">&times;</button>
  </div>
  <div class="drawer__body">
    ${nav
      .map((item) =>
        item.children
          ? `<details><summary>${esc(item.label)}</summary><ul class="drawer__sub">${item.children
              .map((c) => `<li><a href="${attr(c.href)}">${esc(c.label)}</a></li>`)
              .join('')}</ul></details>`
          : `<a class="drawer__solo" href="${attr(item.href)}">${esc(item.label)}</a>`
      )
      .join('')}
    <div class="drawer__cta">
      <a class="btn btn--primary" href="${attr(cta.primary.href)}">${esc(cta.primary.label)}</a>
      <a class="btn btn--tel" href="tel:${attr(site.phoneHref)}">${icon('phone')} ${esc(site.phoneDisplay)}</a>
    </div>
  </div>
</div>`;

const footer = () => `
<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div class="footer__brand">
        <a class="brand" href="/">${brandMark(38)}<span class="brand__txt"><span class="brand__name">Expertise Punaises de Lit</span><span class="brand__sub">Île-de-France</span></span></a>
        <p class="footer__about">Entreprise familiale spécialisée depuis plus de 10 ans dans la détection et le traitement des punaises de lit. Une expertise transmise de père en fils, au service des logements et des établissements d’Île-de-France.</p>
        <a class="footer__tel" href="tel:${attr(site.phoneHref)}" data-cta="footer-tel">${icon('phone')} ${esc(site.phoneDisplay)}</a>
      </div>
      <div>
        <h2 class="footer__h">Notre expertise</h2>
        <ul>
          <li><a href="/detection-canine-punaises-de-lit">Détection canine</a></li>
          <li><a href="/traitement-thermique-punaises-de-lit">Traitement thermique</a></li>
          <li><a href="/hugetri400">HUGETRI400</a></li>
          <li><a href="/methodes-traitement-punaises-de-lit">Méthodes professionnelles</a></li>
          <li><a href="/punaises-de-lit">Tout savoir sur la punaise de lit</a></li>
          <li><a href="/notre-histoire">Notre histoire</a></li>
        </ul>
      </div>
      <div>
        <h2 class="footer__h">Île-de-France</h2>
        <ul>
          <li><a href="/punaises-de-lit-ile-de-france">Toute l’Île-de-France</a></li>
          <li><a href="/punaises-de-lit-paris-75">Paris (75)</a></li>
          <li><a href="/punaises-de-lit-hauts-de-seine-92">Hauts-de-Seine (92)</a></li>
          <li><a href="/punaises-de-lit-seine-saint-denis-93">Seine-Saint-Denis (93)</a></li>
          <li><a href="/punaises-de-lit-val-de-marne-94">Val-de-Marne (94)</a></li>
          <li><a href="/punaises-de-lit-ile-de-france#villes">Nos villes d’intervention</a></li>
        </ul>
      </div>
      <div>
        <h2 class="footer__h">Vous êtes</h2>
        <ul>
          <li><a href="/punaises-de-lit-particulier">Particulier</a></li>
          <li><a href="/punaises-de-lit-hotel">Hôtel</a></li>
          <li><a href="/punaises-de-lit-syndic">Syndic de copropriété</a></li>
          <li><a href="/punaises-de-lit-entreprise">Entreprise</a></li>
          <li><a href="/punaises-de-lit-ehpad">EHPAD</a></li>
          <li><a href="/blog">Blog &amp; conseils</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© ${new Date().getFullYear()} ${esc(site.name)} — ${esc(site.areaServed)}<br>
        <span class="footer__legal">${esc(legal.denomination)} · ${esc(legal.forme)} · SIREN ${esc(legal.siren)} · ${esc(legal.adresse.ville)} (92)</span></p>
      <ul>
        <li><a href="/diagnostic">Demander un diagnostic</a></li>
        <li><a href="/mentions-legales">Mentions légales</a></li>
        <li><a href="/politique-de-confidentialite">Confidentialité</a></li>
        <li><a href="/plan-du-site">Plan du site</a></li>
      </ul>
    </div>
  </div>
</footer>
<div class="callbar">
  <a class="btn btn--primary" href="tel:${attr(site.phoneHref)}" data-cta="callbar-tel">${icon('phone')} ${esc(site.phoneDisplay)}</a>
  <a class="btn btn--ghost" href="${attr(cta.primary.href)}" data-cta="callbar-diag">Diagnostic</a>
</div>`;

/**
 * Rend une page complete.
 * @param {object} p page : { url, title, description, body, schema, crumbs, ogType, noindex, updated }
 */
export function renderPage(p) {
  const url = site.origin + (p.url === '/' ? '/' : p.url);
  const schemas = (p.schema || []).filter(Boolean);
  return `<!doctype html>
<html lang="${site.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(p.title)}</title>
<meta name="description" content="${attr(p.description)}">
<link rel="canonical" href="${attr(url)}">
${p.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'}
<meta name="theme-color" content="#173B4D">
<meta name="format-detection" content="telephone=yes">
<meta property="og:type" content="${attr(p.ogType || 'website')}">
<meta property="og:site_name" content="${attr(site.nameFull)}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:title" content="${attr(p.title)}">
<meta property="og:description" content="${attr(p.description)}">
<meta property="og:url" content="${attr(url)}">
<meta property="og:image" content="${attr(site.origin)}/assets/img/og-default.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${attr(site.nameFull)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(p.title)}">
<meta name="twitter:description" content="${attr(p.description)}">
<meta name="twitter:image" content="${attr(site.origin)}/assets/img/og-default.png">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap"></noscript>
<link rel="stylesheet" href="/assets/styles.css">
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
<a class="skip-link" href="#contenu">Aller au contenu</a>
${topbar()}
${header(p.url)}
${p.crumbsHtml || ''}
<main id="contenu">
${p.body}
</main>
${footer()}
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

export { join };
