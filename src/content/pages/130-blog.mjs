import { definePage } from '../../lib/page.mjs';
import { section, pageHead, ctaBand, linkGrid, esc, attr } from '../../lib/components.mjs';
import { postCard } from '../../lib/blog.mjs';

const PER_PAGE = 9;

export default function () {
  const posts = globalThis.__POSTS__ || [];
  const pages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  const categories = [...new Set(posts.map((p) => p.category))];

  const pagination = (current) => {
    if (pages < 2) return '';
    const href = (n) => (n === 1 ? '/blog' : `/blog/page/${n}`);
    const items = [];
    if (current > 1) items.push(`<a href="${href(current - 1)}" rel="prev" aria-label="Page précédente">←</a>`);
    for (let n = 1; n <= pages; n++) {
      items.push(
        n === current
          ? `<span aria-current="page">${n}</span>`
          : `<a href="${href(n)}" aria-label="Page ${n}">${n}</a>`
      );
    }
    if (current < pages) items.push(`<a href="${href(current + 1)}" rel="next" aria-label="Page suivante">→</a>`);
    return `<nav class="pagination" aria-label="Pagination des articles">${items.join('')}</nav>`;
  };

  return Array.from({ length: pages }, (_, i) => {
    const n = i + 1;
    const slice = posts.slice(i * PER_PAGE, (i + 1) * PER_PAGE);
    const url = n === 1 ? '/blog' : `/blog/page/${n}`;

    return definePage({
      url,
      title:
        n === 1
          ? 'Blog punaises de lit — conseils d’une entreprise spécialisée'
          : `Blog punaises de lit — page ${n}`,
      description:
        n === 1
          ? 'Reconnaître, comprendre et traiter les punaises de lit : nos réponses détaillées aux questions les plus fréquentes, écrites à partir de notre expérience de terrain en Île-de-France.'
          : `Articles sur les punaises de lit — page ${n} sur ${pages}. Détection, traitements, prévention et situations concrètes.`,
      priority: n === 1 ? 0.8 : 0.4,
      changefreq: 'weekly',
      noindex: false,
      crumbs: n === 1 ? [{ label: 'Blog' }] : [{ label: 'Blog', href: '/blog' }, { label: `Page ${n}` }],
      body: `
${pageHead({
  eyebrow: n === 1 ? 'Blog' : `Blog — page ${n}`,
  title: n === 1 ? 'Comprendre avant d’agir' : `Articles — page ${n}`,
  lead:
    n === 1
      ? 'Des réponses détaillées, écrites à partir de ce que nous observons sur le terrain. Pas de contenu recopié, pas de promesses invérifiables : ce que nous savons, et ce que nous ne savons pas.'
      : `Suite de nos articles sur les punaises de lit (page ${n} sur ${pages}).`,
})}

${section({
  variant: 'section--white',
  html: `<h2 class="sr-only">Articles${n > 1 ? ` — page ${n}` : ''}</h2><div class="grid grid--3">${slice.map(postCard).join('')}</div>${pagination(n)}`,
})}

${
  n === 1
    ? section({
        variant: 'section--sand',
        eyebrow: 'Rubriques',
        title: 'Par thème',
        html: `<p class="lead" style="margin-bottom:24px">${categories
          .map((c) => `${esc(c)} (${posts.filter((p) => p.category === c).length})`)
          .join(' · ')}</p>
        ${linkGrid([
          { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
          { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
          { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
          { label: 'Méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
          { label: 'Nos interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
          { label: 'Demander un diagnostic', href: '/diagnostic' },
        ])}`,
      })
    : ''
}

${ctaBand({
  title: 'Une question qui n’a pas sa réponse ici ?',
  text: 'Décrivez-nous votre situation : nous répondons précisément plutôt que de renvoyer vers un formulaire.',
  tag: 'blog',
})}`,
    });
  });
}
