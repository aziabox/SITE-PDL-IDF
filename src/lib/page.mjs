import { crumbs as crumbsHtml } from './components.mjs';
import { webPage, breadcrumbList, faqPage } from './schema.mjs';

/**
 * Assemble une page : fil d'ariane, donnees structurees de base, metadonnees.
 * @param {object} p { url, title, description, crumbs, body, schema, faq, updated, noindex, priority }
 */
export function definePage(p) {
  const trail = [{ label: 'Accueil', href: '/' }, ...(p.crumbs || [])];
  return {
    ...p,
    crumbsHtml: p.url === '/' ? '' : crumbsHtml(trail),
    schema: [
      webPage({ url: p.url, title: p.title, description: p.description, updated: p.updated }),
      p.url === '/' ? null : breadcrumbList(p.url, trail),
      ...(p.faq && p.faq.length ? [faqPage(p.faq)] : []),
      ...(p.schema || []),
    ].filter(Boolean),
  };
}
