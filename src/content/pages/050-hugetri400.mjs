import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, quick, callout, faq, ctaBand, figure, flow, checklist,
  btnRow, btnPrimary, btnPhone, relatedSection,
} from '../../lib/components.mjs';
import { hugetriPanel, thermalCurve } from '../../lib/illustrations.mjs';
import { service } from '../../lib/schema.mjs';

const FAQ = [
  {
    q: 'Quelles sont les caractéristiques techniques exactes du HUGETRI400 ?',
    a: 'Les paramètres précis (puissance, température cible, débit d’air, durée de maintien, nombre de sondes) relèvent de la documentation de l’équipement et du protocole d’intervention. Nous ne publions ici que ce qui peut être confirmé : dès que ces éléments sont validés par l’entreprise, ils sont intégrés à cette page. Nous préférons une page incomplète à une fiche technique inventée.',
  },
  {
    q: 'Le HUGETRI400 est-il utilisé sur toutes les interventions ?',
    a: 'Non. Il est mis en œuvre lorsque le protocole et le logement s’y prêtent. Certaines situations appellent une approche combinée ou d’autres méthodes : c’est le diagnostic qui le détermine, pas un choix commercial décidé à l’avance.',
  },
  {
    q: 'La chaleur suffit-elle à elle seule ?',
    a: 'Elle traite le volume exposé, mais elle n’a pas d’effet après l’intervention. Si une source extérieure persiste — un logement voisin infesté, un objet rapporté — la situation peut se reproduire. C’est pourquoi le traitement s’accompagne toujours de consignes et, lorsque c’est pertinent, d’un contrôle ultérieur.',
  },
  {
    q: 'Puis-je rester chez moi pendant le traitement ?',
    a: 'Non : le volume traité n’est accessible ni aux personnes ni aux animaux pendant l’intervention. La durée d’indisponibilité vous est communiquée à l’avance.',
  },
];

export default function () {
  const body = `
${pageHead({
  eyebrow: 'Technologie',
  title: 'HUGETRI400 — la technologie thermique nouvelle génération',
  lead: 'HUGETRI400 est la technologie de traitement thermique professionnelle que nous mettons en œuvre lorsque le protocole et le logement s’y prêtent. Son principe tient en quatre fonctions indissociables : produire la chaleur, la faire circuler, contrôler les températures et conduire l’exposition selon le protocole retenu.',
  ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'hugetri-head'), btnPhone('ghost')),
  media: figure({ svg: hugetriPanel() }),
})}

${section({
  variant: 'section--white',
  wrap: 'wrap--narrow',
  html: quick({
    question: 'Qu’est-ce que le HUGETRI400 ?',
    answer:
      'Une technologie de traitement thermique professionnelle utilisée contre les punaises de lit. Elle combine la production d’air chaud, une circulation permettant une diffusion homogène dans le volume traité, la surveillance des températures pendant l’opération et une exposition thermique conduite selon le protocole d’intervention défini après diagnostic.',
    level: 2,
  }),
})}

${section({
  variant: 'section--glacier',
  eyebrow: 'Principe',
  title: 'Quatre fonctions, une seule logique',
  lead: 'Chacune de ces fonctions est inutile sans les trois autres : de la chaleur sans circulation crée des zones froides, une circulation sans contrôle ne prouve rien, et un contrôle sans protocole ne conduit à aucune décision.',
  html: `${flow([
    { icon: 'heat', label: 'Chaleur', text: 'Montée en température contrôlée du volume traité.' },
    { icon: 'leaf', label: 'Circulation d’air', text: 'Diffusion homogène de la chaleur dans l’ensemble du volume.' },
    { icon: 'thermo', label: 'Contrôle', text: 'Surveillance des températures pendant toute l’intervention.' },
    { icon: 'shield', label: 'Traitement', text: 'Exposition thermique adaptée au protocole retenu.' },
  ])}
  <div class="mt-44">${figure({
    svg: thermalCurve(),
    className: 'figure--diagram',
    caption: 'La conduite de l’intervention suit les relevés de sondes, et non une durée décidée à l’avance.',
  })}</div>`,
})}

${section({
  variant: 'section--white',
  html: `
<div class="grid grid--2" style="align-items:start">
  <div>
    <p class="eyebrow">Ce que nous pouvons affirmer</p>
    <h2 style="font-size:clamp(1.3rem,1.1rem+.8vw,1.7rem)">Une technologie au service d’un protocole</h2>
    <p>Le traitement thermique est une méthode reconnue de lutte physique contre les punaises de lit. Le matériel ne fait pas le résultat à lui seul : ce qui compte, c’est la manière dont l’intervention est préparée, conduite et contrôlée.</p>
    ${checklist([
      'Technologie thermique professionnelle, mise en œuvre par nos équipes',
      'Diffusion de la chaleur assurée par une circulation d’air dans le volume',
      'Températures suivies par sondes pendant toute l’opération',
      'Paramètres d’exposition définis par le protocole retenu après diagnostic',
      'Compléments ciblés (vapeur, aspiration, travail mécanique) lorsque nécessaire',
    ])}
  </div>
  <div>
    ${callout({
      icon: 'doc',
      title: 'Ce que nous n’écrivons pas',
      text: `Aucune donnée technique n’est publiée ici tant qu’elle n’est pas confirmée par la documentation de l’entreprise : ni puissance, ni température exacte, ni durée type, ni rendement.

Nous n’écrivons pas non plus « 100 % garanti », « 100 % d’éradication », « aucun risque de retour » ou « toutes les punaises détruites en une seule fois ». Ces formules sont invérifiables et n’engagent personne.

Cette page est conçue pour accueillir les caractéristiques exactes du HUGETRI400 dès qu’elles sont validées, sans avoir à en réécrire la structure.`,
    })}
    ${callout({
      variant: 'sand',
      icon: 'alert',
      title: 'Pas d’effet après l’intervention',
      text: 'La chaleur agit pendant le traitement et seulement pendant. Elle ne protège pas contre une réintroduction depuis un logement voisin, un bagage ou un meuble rapporté : c’est le rôle des consignes et du suivi.',
    })}
  </div>
</div>`,
})}

${section({
  variant: 'section--sand',
  eyebrow: 'FAQ',
  title: 'Questions fréquentes sur le HUGETRI400',
  html: faq(FAQ),
  wrap: 'wrap--narrow',
})}

${relatedSection({
  title: 'Pages liées',
  links: [
    { label: 'Le traitement thermique en détail', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'Toutes les méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
    { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Chaleur contre punaises de lit', href: '/blog/chaleur-contre-punaises-de-lit' },
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
  ],
})}

${ctaBand({ title: 'Une question sur le traitement thermique ?', text: 'Nous vous expliquons ce qui est réellement applicable à votre logement, sans vendre une méthode avant de l’avoir vu.', tag: 'hugetri' })}`;

  return definePage({
    url: '/hugetri400',
    title: 'HUGETRI400 — technologie de traitement thermique punaises de lit',
    description:
      'HUGETRI400 : technologie thermique professionnelle contre les punaises de lit. Chaleur, circulation d’air, contrôle des températures et exposition maîtrisée.',
    priority: 0.7,
    changefreq: 'monthly',
    crumbs: [{ label: 'Expertise', href: '/methodes-traitement-punaises-de-lit' }, { label: 'HUGETRI400' }],
    faq: FAQ,
    schema: [
      service({
        name: 'Traitement thermique HUGETRI400',
        description:
          'Mise en œuvre de la technologie thermique HUGETRI400 contre les punaises de lit, lorsque le protocole et la configuration du logement s’y prêtent.',
        url: '/hugetri400',
        serviceType: 'Traitement thermique punaises de lit',
      }),
    ],
    body,
  });
}
