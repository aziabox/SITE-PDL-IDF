import { definePage } from './page.mjs';
import { article as articleSchema } from './schema.mjs';
import { esc, attr } from './html.mjs';
import { quick, faq, ctaBand, linkGrid, btnRow, btnPrimary, btnPhone } from './components.mjs';

const frDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export const postCard = (p) => `
<a class="postcard" href="/blog/${attr(p.slug)}">
  <div class="postcard__top"><span class="postcard__cat">${esc(p.category)}</span></div>
  <div class="postcard__body">
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.excerpt)}</p>
    <div class="postcard__meta"><time datetime="${attr(p.published)}">${frDate(p.published)}</time><span>${esc(p.readTime || '4 min')}</span></div>
  </div>
</a>`;

export function buildPostPage(post, all) {
  const related = (post.related || []).slice(0, 6);
  const others = all
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const body = `
<article class="section">
  <div class="wrap wrap--narrow">
    <p class="eyebrow">${esc(post.category)}</p>
    <h1>${esc(post.h1 || post.title)}</h1>
    <div class="article__meta">
      <span>Publié le <time datetime="${attr(post.published)}">${frDate(post.published)}</time></span>
      ${post.updated && post.updated !== post.published ? `<span>Mis à jour le <time datetime="${attr(post.updated)}">${frDate(post.updated)}</time></span>` : ''}
      <span>${esc(post.readTime || '4 min de lecture')}</span>
      <span>Par l’équipe ${esc('Expertise Punaises de Lit')}</span>
    </div>
    ${post.quick ? quick({ question: post.quick.question, answer: post.quick.answer, level: 2 }) : ''}
    <div class="prose">${post.body}</div>
    ${post.faq && post.faq.length ? `<h2 class="mt-44">Questions fréquentes</h2>${faq(post.faq)}` : ''}
    <div class="mt-44">${btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'article'), btnPhone('ghost'))}</div>
    ${
      related.length
        ? `<h2 class="mt-44">À lire aussi</h2>${linkGrid(related)}`
        : ''
    }
    ${
      others.length
        ? `<h2 class="mt-44">Dans la même rubrique</h2><div class="grid grid--3">${others.map(postCard).join('')}</div>`
        : ''
    }
  </div>
</article>
${ctaBand({
  title: 'Besoin d’un avis sur votre situation ?',
  text: 'Décrivez-nous ce que vous observez : nous vous dirons quelle méthode de diagnostic est la plus adaptée à votre logement en Île-de-France.',
  tag: 'article',
})}`;

  return definePage({
    url: `/blog/${post.slug}`,
    title:
      post.metaTitle ||
      (post.title.length <= 44 ? `${post.title} — Punaises de lit IDF` : post.title),
    description: post.description,
    ogType: 'article',
    updated: post.updated || post.published,
    priority: 0.5,
    changefreq: 'yearly',
    crumbs: [{ label: 'Blog', href: '/blog' }, { label: post.title }],
    faq: post.faq,
    schema: [
      articleSchema({
        url: `/blog/${post.slug}`,
        title: post.title,
        description: post.description,
        published: post.published,
        updated: post.updated || post.published,
        section: post.category,
      }),
    ],
    body,
  });
}
