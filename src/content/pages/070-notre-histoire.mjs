import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, checklist, callout, ctaBand, btnRow, btnPrimary, btnPhone,
  relatedSection, steps, statLine,
} from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';

export default function () {
  const body = `
${pageHead({
  eyebrow: 'Qui nous sommes',
  title: 'Une expertise familiale construite sur plus de 10 ans de terrain',
  lead: 'Nous ne sommes pas une entreprise généraliste qui traite aussi les punaises de lit. Nous sommes une entreprise familiale qui s’est spécialisée sur une seule espèce, et qui a appris son métier logement après logement.',
  ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'histoire-head'), btnPhone('ghost')),
  media: photo({
    name: 'portrait-equipe-terrain',
    alt: 'Équipe de techniciens spécialisés punaises de lit devant leur véhicule d’intervention',
    brief: 'Portrait de l’équipe (2-3 personnes) en tenue de travail, matériel visible, lumière naturelle, sans pose commerciale.',
    width: 1200,
    height: 900,
  }),
})}

${section({
  variant: 'section--white',
  wrap: 'wrap--narrow',
  html: `
<div class="prose">
  <h2>Un métier qui s’apprend sur le terrain</h2>
  <p>Les punaises de lit ne s’apprennent pas dans un manuel. Elles s’apprennent dans les chambres, les sommiers démontés, les plinthes décollées, et dans les retours d’intervention que l’on analyse le lendemain en se demandant ce que l’on aurait pu voir plus tôt.</p>
  <p>C’est de cette façon que notre savoir-faire s’est construit : par la répétition, par l’observation, et par la confrontation régulière à des situations que l’on n’avait encore jamais rencontrées. Un appartement haussmannien ne se traite pas comme un studio récent. Un immeuble collectif ne pose pas les mêmes questions qu’une maison individuelle.</p>

  <h2>Une transmission de père en fils</h2>
  <p>Ce savoir-faire s’est transmis dans la famille. Pas sous forme de procédures, mais comme on transmet un métier manuel : en travaillant ensemble, en expliquant pourquoi on commence par tel côté du lit, pourquoi on ouvre telle structure avant telle autre, et pourquoi il faut parfois reconnaître qu’une situation demande plus qu’une intervention.</p>
  <p>Cette continuité a un effet concret : la personne qui vient chez vous n’applique pas un protocole appris en trois jours. Elle applique une pratique construite sur des années, avec les réflexes qui vont avec.</p>

  <blockquote>Chaque infestation est différente. Notre métier ne consiste pas simplement à appliquer un produit, mais à comprendre où se trouvent les punaises, comment elles se sont installées et quelle méthode est réellement adaptée à la situation.</blockquote>

  <h2>Pourquoi une seule spécialité</h2>
  <p>Traiter les punaises de lit demande des compétences qui n’ont pas grand-chose à voir avec celles nécessaires pour d’autres nuisibles. La biologie de l’insecte, sa façon de se cacher, sa résistance au jeûne, sa propagation entre logements : tout cela impose une méthode propre.</p>
  <p>Nous avons donc fait un choix simple : ne faire que ça. Cela signifie parfois orienter une demande vers un autre professionnel quand elle sort de notre domaine. Nous préférons cette honnêteté à une polyvalence de façade.</p>

  <h2>Notre façon de travailler</h2>
</div>
${steps([
  { title: 'On regarde avant de proposer', text: 'Aucune proposition de traitement n’est faite sans avoir compris l’étendue réelle de l’infestation. Un devis établi au téléphone sur la seule mention de « piqûres » n’a pas de valeur technique.' },
  { title: 'On explique ce qu’on voit', text: 'Les traces trouvées vous sont montrées, les zones confirmées sont nommées. Vous devez pouvoir comprendre le raisonnement, pas seulement recevoir une conclusion.' },
  { title: 'On dit les limites', text: 'Chaque méthode a des limites, et les annoncer à l’avance fait partie du travail. Une méthode présentée comme infaillible est une méthode mal expliquée.' },
  { title: 'On reste joignable après', text: 'L’intervention ne s’arrête pas à la fin de la journée : les questions arrivent souvent dans les semaines qui suivent, et elles méritent une réponse.' },
])}`,
})}

${section({
  variant: 'section--glacier',
  eyebrow: 'Ce qui nous engage',
  title: 'Nos repères de travail',
  html: `
<div class="grid grid--2" style="align-items:start">
  <div>${checklist([
    'Plus de 10 ans d’expérience sur le terrain',
    'Entreprise familiale, savoir-faire transmis de père en fils',
    'Une seule spécialité : les punaises de lit',
    'Diagnostic préalable systématique avant toute proposition',
    'Détection canine utilisée comme outil de localisation, pas comme argument',
    'Traitement thermique conduit sous contrôle de températures',
    'Explications claires sur les limites de chaque méthode',
    'Accompagnement avant, pendant et après l’intervention',
    'Interventions dans les huit départements d’Île-de-France',
  ])}</div>
  <div>
    ${callout({
      variant: 'sand',
      icon: 'doc',
      title: 'Informations à compléter',
      text: `Cette page est volontairement dépourvue de dates de création, de noms, de chiffres d’interventions et de mentions de certification ou d’assurance : nous n’affichons que ce qui peut être justifié.

Les informations légales et administratives de l’entreprise (raison sociale, numéro d’immatriculation, assurances, certifications professionnelles) seront publiées dès qu’elles auront été fournies, sur les pages concernées et dans les mentions légales.`,
    })}
    ${photo({
      name: 'atelier-materiel-entretien',
      alt: 'Matériel d’intervention entretenu et rangé dans l’atelier de l’entreprise',
      brief: 'Matériel rangé et entretenu dans l’atelier ou le véhicule : sondes, gaines, aspirateur professionnel, appareil vapeur.',
      width: 1200,
      height: 800,
    })}
  </div>
</div>`,
})}

${section({
  variant: 'section--white section--tight',
  html: statLine([
    { title: 'Diagnostic', text: 'Inspection visuelle méthodique et détection canine lorsque la configuration le justifie.' },
    { title: 'Traitement', text: 'Thermique, vapeur, aspiration, travail mécanique ou approche combinée selon la situation.' },
    { title: 'Suivi', text: 'Consignes écrites, points de vigilance et contrôle après intervention.' },
    { title: 'Territoire', text: 'Paris et les sept départements de la couronne francilienne.' },
  ]),
})}

${relatedSection({
  title: 'Aller plus loin',
  variant: 'section--sand',
  links: [
    { label: 'Notre expertise en détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Notre traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'Toutes les méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Nos interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
  ],
})}

${ctaBand({ title: 'Parler à quelqu’un qui fait ce métier tous les jours', text: 'Décrivez-nous la situation : vous aurez une réponse technique, pas un argumentaire commercial.', tag: 'histoire' })}`;

  return definePage({
    url: '/notre-histoire',
    title: 'Notre histoire — entreprise familiale spécialisée punaises de lit',
    description:
      'Entreprise familiale spécialisée depuis plus de 10 ans dans les punaises de lit en Île-de-France : un savoir-faire de terrain transmis de père en fils.',
    priority: 0.7,
    changefreq: 'yearly',
    crumbs: [{ label: 'Notre histoire' }],
    body,
  });
}
