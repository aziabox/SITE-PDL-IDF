import { definePage } from './page.mjs';
import {
  section, pageHead, quick as quickBlock, faq, ctaBand, checklist, callout,
  btnRow, btnPrimary, btnPhone, relatedSection, h2, tocFromHeadings, figure,
} from './components.mjs';
import { service } from './schema.mjs';

/**
 * Gabarit des pages "situation" (par problème, par profil, par territoire).
 * Le gabarit fixe la mise en page ; tout le contenu est écrit page par page.
 */
export function contentPage({
  url, title, description, h1, eyebrow, lead, crumbs, media,
  quick, blocks = [], aside, points, pointsTitle, faq: faqItems = [],
  related = [], relatedTitle = 'Pages liées', ctaTitle, ctaText, tag = 'page',
  schema = [], priority = 0.6, serviceName, extra = '',
}) {
  const headings = blocks.map((b) => b.title);
  const body = `
${pageHead({ eyebrow, title: h1, lead, ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', `${tag}-head`), btnPhone('ghost')), media })}

${section({
  variant: 'section--white',
  html: `
<div class="layout-doc">
  <div class="prose">
    ${quick ? quickBlock({ question: quick.question, answer: quick.answer, level: 2 }) : ''}
    ${blocks.map((b) => `${h2(b.title)}\n${b.html}`).join('\n')}
  </div>
  ${headings.length > 2 ? tocFromHeadings(headings) : ''}
</div>`,
})}

${
  points
    ? section({
        variant: 'section--glacier',
        eyebrow: 'En pratique',
        title: pointsTitle || 'Ce que nous vérifions en priorité',
        html: `<div class="grid grid--2" style="align-items:start"><div>${checklist(points)}</div><div>${aside || ''}</div></div>`,
      })
    : ''
}

${extra}

${faqItems.length ? section({ variant: 'section--white', eyebrow: 'FAQ', title: 'Questions fréquentes', html: faq(faqItems), wrap: 'wrap--narrow' }) : ''}

${related.length ? relatedSection({ title: relatedTitle, variant: 'section--sand', links: related }) : ''}

${ctaBand({ title: ctaTitle, text: ctaText, tag })}`;

  return definePage({
    url,
    title,
    description,
    priority,
    changefreq: 'monthly',
    crumbs,
    faq: faqItems,
    schema: serviceName
      ? [service({ name: serviceName, description, url, serviceType: 'Traitement des punaises de lit' }), ...schema]
      : schema,
    body,
  });
}

export { callout, checklist, figure };
