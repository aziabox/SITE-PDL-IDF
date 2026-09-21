import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, quick, faq, ctaBand, checklist, callout, linkGrid,
  btnRow, btnPrimary, btnPhone, esc, departments,
} from '../../lib/components.mjs';
import { idfMap, idfPanel } from '../../lib/illustrations.mjs';
import { service } from '../../lib/schema.mjs';
import { CITIES } from '../../lib/cities.mjs';

const FAQ = [
  {
    q: 'Intervenez-vous dans toute l’Île-de-France ?',
    a: 'Oui, dans les huit départements : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d’Oise (95). Les délais et les modalités d’intervention peuvent varier selon l’éloignement et la nature du chantier.',
  },
  {
    q: 'Le type d’habitat change-t-il la méthode de traitement ?',
    a: 'Nettement. Un immeuble haussmannien parisien, un grand ensemble de banlieue et un pavillon de grande couronne ne posent pas les mêmes questions : mitoyenneté, volume à traiter, accès, matériaux, présence de logements voisins concernés. C’est le diagnostic qui tranche, pas la catégorie du logement.',
  },
  {
    q: 'Pouvez-vous intervenir dans plusieurs logements d’un même immeuble ?',
    a: 'Oui, et c’est souvent préférable. Traiter simultanément les lots liés entre eux évite les recolonisations d’un logement à l’autre. Nous établissons une cartographie des lots confirmés et exposés avant de proposer un plan d’intervention.',
  },
  {
    q: 'Ma ville n’a pas de page dédiée : intervenez-vous quand même ?',
    a: 'Oui. Nous n’avons créé de pages que pour les communes où nous intervenons le plus régulièrement, plutôt que de générer automatiquement des centaines de pages sans contenu utile. Appelez-nous : nous vous dirons immédiatement si votre commune est desservie et dans quels délais.',
  },
];

export default function () {
  const body = `
${pageHead({
  eyebrow: 'Île-de-France',
  title: 'Punaises de lit en Île-de-France : détection et traitement',
  lead: 'Paris et sa couronne concentrent une densité d’habitat collectif, une mobilité et un parc locatif qui favorisent la circulation des punaises de lit. Nous intervenons dans les huit départements, avec une méthode adaptée au type d’habitat rencontré.',
  ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'idf-head'), btnPhone('ghost')),
})}

${section({
  variant: 'section--white',
  wrap: 'wrap--narrow',
  html: quick({
    question: 'Pourquoi les punaises de lit sont-elles si présentes en Île-de-France ?',
    answer:
      'Parce que trois facteurs s’y cumulent : une forte densité d’habitat collectif, où un logement infesté expose ses voisins ; une mobilité importante, avec des déménagements, des voyages et des locations de courte durée fréquents ; et un parc locatif meublé étendu, où les couchages changent souvent d’occupant.',
    level: 2,
  }),
})}

${section({
  id: 'carte',
  variant: 'section--glacier',
  eyebrow: 'Carte interactive',
  title: 'Choisissez votre département',
  lead: 'Survolez ou sélectionnez un département pour afficher les services disponibles et accéder à sa page dédiée.',
  html: `
<div class="idf">
  <div class="idf__mapwrap">${idfMap()}<p class="idf__hint">Carte schématique des huit départements — survolez ou sélectionnez un département pour afficher les services disponibles.</p></div>
  ${idfPanel()}
</div>`,
})}

${section({
  variant: 'section--white',
  eyebrow: 'Les huit départements',
  title: 'Un contexte d’habitat différent dans chaque département',
  html: `<div class="grid grid--2">${departments
    .map(
      (d) => `<a class="card card--link" href="/${d.slug}">
      <p class="expertise__num">${d.code} — ${esc(d.name)}</p>
      <h3>Punaises de lit ${d.article} ${esc(d.name)}</h3>
      <p>Interventions adaptées aux ${d.habitat}.</p>
      <p class="mt-0"><span class="link-arrow">Voir la page ${d.code}</span></p>
    </a>`
    )
    .join('')}</div>`,
})}

${section({
  id: 'villes',
  variant: 'section--sand',
  eyebrow: 'Villes',
  title: 'Nos pages par commune',
  lead: 'Nous avons rédigé une page pour les communes où nous intervenons le plus régulièrement, avec le contexte local réellement utile. Nous ne générons pas de pages automatiques pour des centaines de villes : elles n’aideraient personne.',
  html: linkGrid(CITIES.map((c) => ({ label: `Punaises de lit à ${c.name}`, href: `/${c.slug}` }))),
})}

${section({
  variant: 'section--white',
  eyebrow: 'Ce que nous proposons partout',
  title: 'Les mêmes services dans les huit départements',
  html: `
<div class="grid grid--2" style="align-items:start">
  <div>${checklist([
    'Diagnostic et inspection méthodique du logement ou de l’établissement',
    'Détection canine pour localiser les foyers difficiles à voir',
    'Traitement thermique conduit sous contrôle de températures',
    'Approche combinée : aspiration, vapeur, travail mécanique',
    'Traitement professionnel adapté lorsque la situation l’exige',
    'Interventions coordonnées sur plusieurs lots d’un même immeuble',
    'Consignes écrites avant et après intervention',
    'Contrôle de vérification après traitement',
  ])}</div>
  <div>
    ${callout({
      icon: 'map',
      title: 'Délais et déplacements',
      text: `Les délais d’intervention dépendent de la commune, de la nature du chantier et de la période. Nous vous indiquons un délai réaliste lors du premier échange, plutôt qu’une promesse d’intervention immédiate systématique.

Aucun point d’intervention fictif, aucune adresse locale de façade : nous intervenons depuis nos moyens réels sur l’ensemble de la région.`,
    })}
    ${callout({
      variant: 'sand',
      icon: 'building',
      title: 'Habitat collectif',
      text: 'Dans un immeuble, un traitement isolé tient rarement si un logement voisin est concerné. Nous proposons systématiquement d’évaluer le périmètre réel avant d’intervenir.',
    })}
  </div>
</div>`,
})}

${section({
  variant: 'section--glacier',
  eyebrow: 'FAQ',
  title: 'Questions fréquentes sur nos interventions en Île-de-France',
  html: faq(FAQ),
  wrap: 'wrap--narrow',
})}

${ctaBand({
  title: 'Un diagnostic dans votre commune',
  text: 'Indiquez-nous votre ville et ce que vous observez : nous vous dirons quelle méthode de diagnostic est adaptée et sous quel délai nous pouvons intervenir.',
  tag: 'idf',
})}`;

  return definePage({
    url: '/punaises-de-lit-ile-de-france',
    title: 'Punaises de lit Île-de-France — les 8 départements',
    description:
      'Traitement des punaises de lit dans les huit départements d’Île-de-France : 75, 77, 78, 91, 92, 93, 94 et 95. Diagnostic, détection canine, thermique.',
    priority: 0.9,
    changefreq: 'monthly',
    crumbs: [{ label: 'Île-de-France' }],
    faq: FAQ,
    schema: [
      service({
        name: 'Traitement des punaises de lit en Île-de-France',
        description:
          'Diagnostic, détection canine et traitement des punaises de lit dans les huit départements d’Île-de-France.',
        url: '/punaises-de-lit-ile-de-france',
        serviceType: 'Traitement des punaises de lit',
      }),
    ],
    body,
  });
}
