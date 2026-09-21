import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, quick, callout, faq, ctaBand, checklist, btnRow, btnPrimary,
  btnPhone, relatedSection, h2, tocFromHeadings, dataTable,
} from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';
import { service } from '../../lib/schema.mjs';

const HEADINGS = [
  'Traitement thermique',
  'Vapeur haute température',
  'Aspiration professionnelle',
  'Traitement mécanique',
  'Traitement insecticide professionnel',
  'Approche combinée',
  'Prévention et suivi',
];

const FAQ = [
  {
    q: 'Quelle est la meilleure méthode contre les punaises de lit ?',
    a: 'Il n’y en a pas une seule. Le choix dépend du niveau d’infestation, du type de logement, des matériaux, des contraintes d’accès et de la présence éventuelle d’autres logements concernés. Une entreprise qui propose la même méthode à tout le monde vend un forfait, pas un diagnostic.',
  },
  {
    q: 'Peut-on traiter soi-même avec de la vapeur ?',
    a: 'Un appareil domestique n’atteint pas toujours la température utile à la sortie de la buse, et une vapeur mal utilisée disperse les insectes au lieu de les détruire. La vapeur est efficace entre des mains formées, sur des surfaces accessibles, avec un débit et une vitesse de passage maîtrisés.',
  },
  {
    q: 'Les insecticides du commerce sont-ils utiles ?',
    a: 'Les produits grand public donnent rarement un résultat durable sur une infestation installée. Ils peuvent aggraver la situation en dispersant les punaises vers d’autres pièces ou logements, et compliquent le travail ultérieur. Nous déconseillons formellement leur usage en auto-traitement.',
  },
  {
    q: 'Combien de passages faut-il prévoir ?',
    a: 'Cela dépend de l’étendue, de la méthode retenue et du contexte (logement individuel ou immeuble collectif). Le nombre d’interventions et les points de contrôle sont définis après le diagnostic, et expliqués avant l’engagement.',
  },
];

export default function () {
  const body = `
${pageHead({
  eyebrow: 'Méthodes professionnelles',
  title: 'Les méthodes de traitement contre les punaises de lit',
  lead: 'Le traitement thermique n’est pas la seule réponse possible, et ce serait malhonnête de le présenter ainsi. Voici les approches que nous utilisons réellement, ce que chacune apporte, et dans quelles situations elle a du sens.',
  ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'methodes-head'), btnPhone('ghost')),
})}

${section({
  variant: 'section--white',
  html: `
<div class="layout-doc">
  <div class="prose">
    ${quick({
      question: 'Quel traitement choisir contre les punaises de lit ?',
      answer:
        'Le choix se fait après diagnostic, en croisant quatre éléments : l’étendue réelle de l’infestation, le type de logement et ses matériaux, les contraintes sur place (accès, objets sensibles, délais) et le contexte collectif éventuel. Dans la pratique, plusieurs méthodes sont souvent combinées plutôt qu’une seule appliquée partout.',
      level: 2,
    })}

    ${h2(HEADINGS[0])}
    <p>La chaleur agit sur le volume traité et atteint des zones que l’on n’ouvre pas. C’est une méthode de lutte physique, sans dépôt de produit, conduite sous contrôle de températures. Elle convient particulièrement aux logements entiers, aux mobiliers difficiles à démonter et aux situations où un délai court est nécessaire.</p>
    <p>Elle demande en revanche une préparation sérieuse, le retrait des objets sensibles, et elle n’a aucun effet après l’intervention. <a href="/traitement-thermique-punaises-de-lit">Voir le déroulé complet d’un traitement thermique</a> et <a href="/hugetri400">la technologie HUGETRI400</a>.</p>

    ${h2(HEADINGS[1])}
    <p id="vapeur">La vapeur haute température traite les surfaces accessibles : coutures de matelas, passepoils, angles de sommier, plinthes, tissus d’ameublement, rainures. Appliquée correctement, la chaleur à haute température peut détruire les différents stades présents sur les surfaces atteintes — encore faut-il que la vapeur arrive réellement au contact, avec une vitesse de passage lente et un matériel adapté.</p>
    <p>C’est une méthode recommandée dans le cadre d’une lutte physique : le ministère de la Santé met en avant la lutte physique, l’aspiration et l’utilisation minutieuse de la vapeur haute température. Le mot important est « minutieuse » : une vapeur trop rapide ou mal orientée chasse les insectes plus qu’elle ne les traite.</p>
    ${callout({
      title: 'Ce que la vapeur ne fait pas',
      text: 'Elle n’atteint que ce qu’elle touche. Un foyer situé à l’intérieur d’une structure fermée, dans une fente profonde ou derrière un panneau ne sera pas traité par la vapeur seule. C’est pourquoi elle est presque toujours associée à d’autres opérations.',
    })}

    ${h2(HEADINGS[2])}
    <p id="aspiration">L’aspiration professionnelle retire immédiatement ce qui est visible : insectes, mues, déjections et une partie des œufs présents sur les surfaces. C’est une opération de réduction : elle diminue la population avant les autres traitements, et elle rend les contrôles ultérieurs plus lisibles.</p>
    <p>Elle exige une méthode : embouts adaptés, passage lent le long des coutures et des angles, et surtout gestion rigoureuse du contenu de l’aspirateur après l’opération — un sac mal traité est un foyer transporté.</p>

    ${h2(HEADINGS[3])}
    <p id="mecanique">Le travail mécanique regroupe tout ce qui se fait avec les mains et les outils : démontage du sommier, dépose d’une tête de lit, retrait d’un cache, décollement ponctuel d’une plinthe, mise en housse du matelas et du sommier, isolement du couchage. Ce n’est pas spectaculaire, mais c’est souvent ce qui fait la différence entre un traitement qui tient et un traitement qui échoue.</p>
    ${checklist([
      'Démontage ciblé des structures qui abritent des foyers confirmés',
      'Mise en housse du matelas et du sommier lorsque c’est pertinent',
      'Isolement du couchage pour limiter les recolonisations',
      'Traitement des points de passage entre pièces ou logements',
      'Conditionnement du linge et des textiles selon une consigne écrite',
    ])}

    ${h2(HEADINGS[4])}
    <p id="biocide">Dans certaines situations, un traitement insecticide professionnel reste pertinent, notamment sur des infestations étendues ou des configurations où les méthodes physiques seules ne suffisent pas à atteindre tous les foyers.</p>
    ${callout({
      variant: 'sand',
      icon: 'alert',
      title: 'Cadre réglementaire et usage professionnel',
      text: `Lorsqu’un traitement insecticide est proposé, les produits utilisés et leurs conditions d’emploi doivent respecter la réglementation applicable ainsi que les qualifications et certifications requises pour leur mise en œuvre.

Nous ne promouvons en aucun cas une utilisation amateur de produits biocides. Les produits achetés en grande surface et appliqués sans méthode dispersent fréquemment les punaises vers d’autres pièces, exposent inutilement les occupants et compliquent le travail professionnel ultérieur.

Les justificatifs correspondants (certifications, produits utilisés, fiches de données de sécurité) sont communiqués sur demande dans le cadre d’une intervention.`,
    })}

    ${h2(HEADINGS[5])}
    <p id="combinee">Dans la réalité du terrain, une intervention efficace combine presque toujours plusieurs actions : aspiration pour réduire, travail mécanique pour ouvrir et isoler, chaleur ou vapeur pour traiter, puis consignes et contrôle pour vérifier.</p>
    <p>L’ordre a son importance. Aspirer après avoir chauffé, par exemple, n’a pas le même sens qu’aspirer avant. C’est le protocole défini après diagnostic qui fixe cette séquence, en fonction de ce qui a été trouvé et où.</p>
    ${photo({
      name: 'traitement-vapeur-couture-matelas',
      alt: 'Traitement à la vapeur haute température le long des coutures d’un matelas',
      brief: 'Buse vapeur passée lentement le long d’une couture de matelas, vapeur visible, main gantée.',
      width: 1200,
      height: 800,
    })}

    ${h2(HEADINGS[6])}
    <p id="suivi">Aucune méthode ne dispense du suivi. Après l’intervention, trois éléments comptent : les consignes de réintégration des affaires, la vigilance sur les points d’entrée possibles, et un contrôle à distance raisonnable pour vérifier qu’aucun foyer résiduel n’est resté actif.</p>
    <p>Pour les hôtels, les résidences et les copropriétés, ce suivi peut prendre la forme d’un plan de contrôle : chambres ou lots vérifiés périodiquement, procédure de signalement, et intervention rapide dès le premier signalement plutôt qu’au moment où plusieurs lots sont concernés.</p>
  </div>
  ${tocFromHeadings(HEADINGS)}
</div>`,
})}

${section({
  variant: 'section--glacier',
  eyebrow: 'Comparer',
  title: 'Ce que chaque méthode apporte réellement',
  html: `<div class="prose" style="max-width:none">${dataTable(
    ['Méthode', 'Ce qu’elle traite', 'Ses limites'],
    [
      ['Traitement thermique', 'Le volume traité, y compris des zones fermées et difficiles d’accès', 'Aucun effet après l’intervention ; objets sensibles à retirer ; préparation exigeante'],
      ['Vapeur haute température', 'Les surfaces accessibles : coutures, angles, textiles, plinthes', 'N’atteint que ce qu’elle touche ; exige un passage lent et maîtrisé'],
      ['Aspiration professionnelle', 'Ce qui est visible : insectes, mues, déjections, une partie des œufs', 'Ne traite pas les foyers logés dans les structures ; gestion du contenu indispensable'],
      ['Travail mécanique', 'L’accès aux foyers et l’isolement du couchage', 'Demande du temps ; ne détruit pas à lui seul'],
      ['Insecticide professionnel', 'Des situations où les méthodes physiques seules sont insuffisantes', 'Cadre réglementaire strict ; jamais en auto-traitement'],
    ],
    'Comparaison des méthodes de traitement'
  )}</div>`,
})}

${section({
  variant: 'section--white',
  eyebrow: 'FAQ',
  title: 'Questions fréquentes sur les traitements',
  html: faq(FAQ),
  wrap: 'wrap--narrow',
})}

${relatedSection({
  title: 'Pages liées',
  variant: 'section--sand',
  links: [
    { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'HUGETRI400', href: '/hugetri400' },
    { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Vapeur contre punaises de lit', href: '/blog/vapeur-contre-punaises-de-lit' },
    { label: 'Traitement chimique ou thermique ?', href: '/blog/traitement-chimique-ou-thermique' },
    { label: 'Erreurs à éviter', href: '/blog/punaises-de-lit-erreurs-a-eviter' },
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
  ],
})}

${ctaBand({ title: 'Quelle méthode pour votre situation ?', text: 'Le diagnostic détermine ce qui est réellement applicable chez vous. Nous vous expliquons les options, leurs limites et ce qu’elles impliquent.', tag: 'methodes' })}`;

  return definePage({
    url: '/methodes-traitement-punaises-de-lit',
    title: 'Méthodes de traitement des punaises de lit — Île-de-France',
    description:
      'Traitement thermique, vapeur haute température, aspiration, travail mécanique ou traitement professionnel : ce que chaque méthode apporte, et ses limites.',
    priority: 0.8,
    changefreq: 'monthly',
    crumbs: [{ label: 'Méthodes de traitement' }],
    faq: FAQ,
    schema: [
      service({
        name: 'Traitement professionnel des punaises de lit',
        description:
          'Méthodes professionnelles de lutte contre les punaises de lit : traitement thermique, vapeur haute température, aspiration, travail mécanique et approche combinée.',
        url: '/methodes-traitement-punaises-de-lit',
        serviceType: 'Désinsectisation punaises de lit',
      }),
    ],
    body,
  });
}
