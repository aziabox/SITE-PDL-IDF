import { esc, attr, icon, paras, slugify, join } from './html.mjs';
import { site, cta, departments } from './site.mjs';

/* --- Sections ------------------------------------------------------------ */
export const section = ({ id, variant = '', className = '', eyebrow, title, lead, center, html, wrap = '' }) => `
<section class="section ${variant} ${className}"${id ? ` id="${attr(id)}"` : ''}>
  <div class="wrap ${wrap}">
    ${
      eyebrow || title || lead
        ? `<div class="section__head${center ? ' section__head--center' : ''}">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      ${title ? `<h2>${title}</h2>` : ''}
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>`
        : ''
    }
    ${html || ''}
  </div>
</section>`;

/* --- Fil d'ariane -------------------------------------------------------- */
export const crumbs = (items) => `
<nav class="crumbs" aria-label="Fil d’ariane">
  <div class="wrap">
    <ol>
      ${items
        .map((it, i) =>
          i === items.length - 1
            ? `<li><span aria-current="page">${esc(it.label)}</span></li>`
            : `<li><a href="${attr(it.href)}">${esc(it.label)}</a></li>`
        )
        .join('')}
    </ol>
  </div>
</nav>`;

/* --- Boutons ------------------------------------------------------------- */
export const btnPrimary = (label = cta.primary.label, href = cta.primary.href, tag = 'cta') =>
  `<a class="btn btn--primary" href="${attr(href)}" data-cta="${attr(tag)}">${esc(label)}</a>`;

export const btnPhone = (variant = 'ghost') =>
  `<a class="btn btn--${variant}" href="tel:${attr(site.phoneHref)}" data-cta="tel">${icon('phone')} ${esc(site.phoneDisplay)}</a>`;

export const btnRow = (...buttons) => `<div class="btn-row">${buttons.filter(Boolean).join('')}</div>`;

/* --- Cartes -------------------------------------------------------------- */
export const card = ({ icon: ic, title, text, href, linkLabel }) => {
  const inner = `
    ${ic ? `<div class="card__icon">${icon(ic)}</div>` : ''}
    <h3>${title}</h3>
    <p>${text}</p>
    ${href && linkLabel ? `<p class="mt-0"><span class="link-arrow">${esc(linkLabel)}</span></p>` : ''}`;
  return href
    ? `<a class="card card--link" href="${attr(href)}">${inner}</a>`
    : `<div class="card">${inner}</div>`;
};

export const cardGrid = (cards, cols = 3) =>
  `<div class="grid grid--${cols}">${cards.map(card).join('')}</div>`;

export const lineCards = (items) =>
  `<div class="grid grid--2">${items
    .map((i) => `<div class="card card--line"><h3>${i.title}</h3><p>${i.text}</p></div>`)
    .join('')}</div>`;

/* --- Listes de confiance ------------------------------------------------- */
export const checklist = (items, cols = 1) =>
  `<ul class="checklist${cols === 2 ? ' checklist--2' : ''}">${items
    .map((t) => `<li>${icon('check')}<span>${t}</span></li>`)
    .join('')}</ul>`;

/* --- Etapes -------------------------------------------------------------- */
export const steps = (items) =>
  `<div class="steps">${items
    .map(
      (s) => `<div class="steps__item">
      <div class="steps__no" aria-hidden="true"></div>
      <div><h3>${esc(s.title)}</h3><p>${s.text}</p></div>
    </div>`
    )
    .join('')}</div>`;

/* --- Frise horizontale --------------------------------------------------- */
export const flow = (items) =>
  `<div class="flow">${items
    .map(
      (s) => `<div class="flow__step">${icon(s.icon || 'check')}<b>${esc(s.label)}</b><span>${s.text}</span></div>`
    )
    .join('')}</div>`;

/* --- Bloc "reponse rapide" (GEO) ----------------------------------------- */
export const quick = ({ question, answer, level = 2 }) => `
<div class="quick">
  <span class="quick__label">Réponse rapide</span>
  <h${level}>${esc(question)}</h${level}>
  <p>${answer}</p>
</div>`;

/* --- Encadres ------------------------------------------------------------ */
export const callout = ({ title, text, variant = '', icon: ic = 'alert' }) => `
<aside class="callout ${variant ? `callout--${variant}` : ''}">
  ${title ? `<p class="callout__title">${icon(ic)}${esc(title)}</p>` : ''}
  ${paras(text)}
</aside>`;

/* --- FAQ ----------------------------------------------------------------- */
export const faq = (items, { open = 0 } = {}) => `
<div class="faq">
  ${items
    .map(
      (f, i) => `<details class="faq__item"${i === open ? ' open' : ''}>
    <summary>${esc(f.q)}</summary>
    <div class="faq__answer">${paras(f.a)}</div>
  </details>`
    )
    .join('')}
</div>`;

/* --- Bandeau CTA --------------------------------------------------------- */
export const ctaBand = ({
  title = 'Un doute sur la présence de punaises de lit ?',
  text = 'Décrivez-nous la situation : nous vous indiquons la méthode de diagnostic adaptée à votre logement, en Île-de-France.',
  primary = cta.primary,
  tag = 'band',
} = {}) => `
<section class="section section--tight">
  <div class="wrap">
    <div class="cta-band">
      <div class="cta-band__in">
        <div>
          <h2>${esc(title)}</h2>
          <p>${text}</p>
        </div>
        <div class="btn-row">
          <a class="btn btn--primary" href="${attr(primary.href)}" data-cta="${attr(tag)}-primary">${esc(primary.label)}</a>
          <a class="btn btn--ghost" href="tel:${attr(site.phoneHref)}" data-cta="${attr(tag)}-tel">${icon('phone')} ${esc(site.phoneDisplay)}</a>
        </div>
      </div>
    </div>
  </div>
</section>`;

/* --- Figures ------------------------------------------------------------- */
export const figure = ({ svg, caption, className = '' }) => `
<figure class="figure ${className}">
  <div class="figure__frame">${svg}</div>
  ${caption ? `<figcaption>${caption}</figcaption>` : ''}
</figure>`;

/* --- Maillage interne ---------------------------------------------------- */
export const linkGrid = (links) =>
  `<div class="linkgrid">${links
    .map((l) => `<a href="${attr(l.href)}">${esc(l.label)}</a>`)
    .join('')}</div>`;

/* --- Sommaire ------------------------------------------------------------ */
export const tocFromHeadings = (headings) => `
<aside class="toc" data-toc aria-label="Sommaire">
  <b>Sur cette page</b>
  <ol>${headings.map((h) => `<li><a href="#${attr(slugify(h))}">${esc(h)}</a></li>`).join('')}</ol>
</aside>`;

export const h2 = (title) => `<h2 id="${attr(slugify(title))}">${esc(title)}</h2>`;

/* --- Bandeau de points cles ---------------------------------------------- */
export const statLine = (items) =>
  `<div class="stat-line">${items
    .map((i) => `<div><b>${esc(i.title)}</b><span>${i.text}</span></div>`)
    .join('')}</div>`;

export const pills = (items) =>
  `<div class="hero__pills">${items
    .map((p) => `<span class="pill">${icon(p.icon)}${esc(p.label)}</span>`)
    .join('')}</div>`;

export { esc, attr, icon, paras, slugify, join, departments, site, cta };

/* --- En-tete de page interne --------------------------------------------- */
export const pageHead = ({ eyebrow, title, lead, ctas, media, plain = false }) => `
<section class="pagehead${plain || !media ? ' pagehead--plain' : ''}">
  <div class="wrap">
    <div class="pagehead__grid">
      <div>
        ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
        <h1>${title}</h1>
        ${lead ? `<p class="lead">${lead}</p>` : ''}
        ${ctas || ''}
      </div>
      ${media ? `<div>${media}</div>` : ''}
    </div>
  </div>
</section>`;

/* --- Bloc de maillage en bas de page ------------------------------------- */
export const relatedSection = ({ title = 'Pages liées', links, variant = 'section--white' }) =>
  section({ variant: `${variant} section--tight`, title: esc(title), html: linkGrid(links) });

/* --- Tableau responsive --------------------------------------------------- */
export const dataTable = (head, rows, caption) => `
<div class="table-wrap" tabindex="0" role="group" aria-label="${attr(caption || 'Tableau comparatif')}">
  <table>
    <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')}</tbody>
  </table>
</div>`;
