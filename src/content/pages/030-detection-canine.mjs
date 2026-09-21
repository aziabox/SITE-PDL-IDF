import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, quick, callout, faq, ctaBand, figure, steps, cardGrid,
  checklist, btnRow, btnPrimary, btnPhone, relatedSection, h2, tocFromHeadings,
} from '../../lib/components.mjs';
import { dogScene, processStrip } from '../../lib/illustrations.mjs';
import { photo } from '../../lib/photo.mjs';
import { service } from '../../lib/schema.mjs';
import { diagnosticForm } from '../../lib/form.mjs';

const HEADINGS = [
  'Pourquoi utiliser un chien ?',
  'Comment se déroule la détection ?',
  'Que peut détecter le chien ?',
  'Dans quels logements ?',
  'Après le marquage',
  'Les limites de la méthode',
];

const FAQ = [
  {
    q: 'La détection canine remplace-t-elle une inspection visuelle ?',
    a: 'Non, elle la guide. Le chien indique des zones à examiner ; c’est ensuite le travail humain qui confirme ou infirme, en démontant, en éclairant et en cherchant des traces matérielles. Les deux approches sont complémentaires, et c’est leur combinaison qui donne un diagnostic fiable.',
  },
  {
    q: 'Le chien peut-il se tromper ?',
    a: 'Oui, comme tout outil de détection. Un marquage peut correspondre à une odeur résiduelle après un traitement, à une trace ancienne, ou être influencé par les conditions sur place : encombrement, odeurs concurrentes, chaleur, durée de la recherche. C’est précisément pour cela que chaque marquage est vérifié.',
  },
  {
    q: 'Combien de temps dure une détection canine ?',
    a: 'Un chien ne travaille pas en continu : la recherche olfactive demande une concentration intense, entrecoupée de pauses. La durée dépend du nombre de pièces, de l’encombrement et du nombre de chambres à contrôler. Le rythme est adapté pour préserver la qualité de la détection.',
  },
  {
    q: 'Faut-il préparer le logement avant la détection ?',
    a: 'Quelques règles simples améliorent nettement le résultat : ne pas nettoyer avec des produits odorants juste avant, ne pas déplacer les affaires de la chambre, éviter la présence d’animaux domestiques pendant la recherche et aérer modérément. Nous vous indiquons les consignes précises lors de la prise de rendez-vous.',
  },
  {
    q: 'Peut-on faire une détection après un traitement ?',
    a: 'Oui, c’est un usage fréquent : contrôler qu’aucun foyer résiduel n’est resté actif. Le délai entre le traitement et le contrôle doit être choisi avec soin, car des odeurs résiduelles peuvent persister et fausser la lecture. Nous en discutons au cas par cas.',
  },
];

export default function () {
  const body = `
${pageHead({
  eyebrow: '01 — Détection canine',
  title: 'Détection canine punaises de lit : localiser les foyers difficiles à voir',
  lead: 'Un chien spécialement entraîné repère l’odeur des punaises de lit là où l’inspection visuelle seule atteint ses limites : sous un sommier tapissier, derrière une tête de lit fixée, dans une fente de plinthe ou un meuble voisin du couchage.',
  ctas: btnRow(btnPrimary('Organiser une détection canine', '#diagnostic', 'canine-head'), btnPhone('ghost')),
  media: figure({
    svg: dogScene(),
    className: 'figure--diagram',
    caption: 'Le chien signale une zone odorante ; le maître-chien vérifie visuellement chaque marquage avant toute conclusion.',
  }),
})}

${section({
  variant: 'section--white',
  html: `
<div class="layout-doc">
  <div class="prose">
    ${quick({
      question: 'Comment fonctionne la détection canine des punaises de lit ?',
      answer:
        'Un chien entraîné parcourt les zones proches du couchage et signale par un comportement codifié les endroits où il perçoit l’odeur des punaises de lit. Chaque marquage est ensuite vérifié visuellement par le maître-chien. La méthode sert à cibler l’inspection, notamment dans les zones inaccessibles à l’œil, pas à la remplacer.',
      level: 2,
    })}

    ${h2(HEADINGS[0])}
    <p>Une punaise de lit mesure quelques millimètres et se loge dans des interstices invisibles depuis l’extérieur. Dans un logement encombré, une chambre d’hôtel meublée ou un appartement où l’infestation débute, l’inspection visuelle peut passer à côté d’un foyer parfaitement actif — simplement parce qu’il se trouve dans un endroit que l’on ne peut pas ouvrir sans tout démonter.</p>
    <p>Le chien travaille autrement : il ne cherche pas un insecte, il cherche une odeur. Cela lui permet de signaler une zone même lorsque le foyer est enfermé dans une structure fermée. Sur le terrain, c’est surtout un gain de précision : au lieu de démonter dix meubles, on démonte les deux que le chien a signalés.</p>
    <p>C’est particulièrement utile dans trois situations : une infestation débutante avec peu de traces visibles, un grand volume à contrôler (hôtel, résidence, immeuble), et un contrôle après traitement où l’enjeu est de vérifier une absence plutôt qu’une présence.</p>

    ${h2(HEADINGS[1])}
    ${figure({ svg: processStrip(['CHIEN', 'MARQUAGE', 'VÉRIFICATION', 'CARTOGRAPHIE', 'TRAITEMENT']), className: 'figure--diagram' })}
    ${steps([
      { title: 'Préparation de la zone', text: 'Nous demandons de ne pas nettoyer avec des produits odorants juste avant et de laisser la pièce en l’état. Les animaux domestiques sont écartés le temps de la recherche.' },
      { title: 'Recherche guidée', text: 'Le chien est conduit méthodiquement le long des zones de couchage et du mobilier proche. Le maître-chien contrôle le rythme, la couverture des zones et l’état de concentration du chien.' },
      { title: 'Marquage', text: 'Lorsque le chien perçoit l’odeur recherchée, il adopte un comportement codifié (immobilisation, orientation vers la source). Ce signal indique une zone à examiner, pas une conclusion.' },
      { title: 'Vérification visuelle', text: 'Chaque marquage est repris à la lampe : démontage ciblé, examen des coutures, des angles, des fixations. On cherche des preuves matérielles : insectes, œufs, mues, déjections.' },
      { title: 'Cartographie des foyers', text: 'Les zones confirmées sont reportées pièce par pièce. Cette carte détermine le périmètre du traitement, et souvent l’ordre dans lequel les pièces seront traitées.' },
      { title: 'Choix du traitement', text: 'Le protocole est défini à partir de cette cartographie, du type de logement et des contraintes sur place — et non à partir d’un forfait décidé à l’avance.' },
    ])}

    ${h2(HEADINGS[2])}
    <p>Le chien est entraîné à signaler l’odeur associée aux punaises de lit vivantes et à leurs œufs. Une infestation ancienne, entièrement traitée, peut laisser des traces odorantes persistantes : c’est l’une des raisons pour lesquelles un marquage isolé, sans confirmation visuelle, ne doit jamais être présenté comme une preuve d’infestation active.</p>
    <p>À l’inverse, l’absence de marquage dans une pièce n’est pas une garantie absolue d’absence. C’est une information forte, à considérer avec les autres éléments du diagnostic : signes rapportés par les occupants, traces trouvées ailleurs, historique du logement et de l’immeuble.</p>

    ${h2(HEADINGS[3])}
    ${cardGrid(
      [
        { icon: 'building', title: 'Appartements et immeubles', text: 'Contrôle d’un logement et, lorsque c’est pertinent, des logements mitoyens pour évaluer le risque de propagation.' },
        { icon: 'home', title: 'Maisons', text: 'Inspection des chambres, des pièces où l’on dort occasionnellement et des espaces de stockage de textiles.' },
        { icon: 'hotel', title: 'Hôtels et hébergements', text: 'Contrôle chambre par chambre, y compris les chambres adjacentes à une chambre signalée.' },
        { icon: 'people', title: 'Résidences et collectifs', text: 'Résidences étudiantes, foyers, structures d’hébergement : contrôle ciblé sur un bâtiment ou une aile.' },
        { icon: 'clipboard', title: 'Bureaux et locaux professionnels', text: 'Salles de repos, vestiaires, sièges en tissu : les zones où les textiles et l’immobilité se combinent.' },
        { icon: 'search', title: 'Contrôle après traitement', text: 'Vérification de l’absence de foyer résiduel, à un délai choisi pour éviter les odeurs résiduelles trompeuses.' },
      ],
      3
    )}

    ${h2(HEADINGS[4])}
    <p>Le marquage n’est pas une fin en soi : c’est un point de départ. Il indique où concentrer l’effort d’inspection. Sur place, cela signifie concrètement démonter un sommier, retirer un cache de tête de lit, décoller une plinthe ou ouvrir un tiroir de meuble — des gestes que l’on ne fait pas partout, faute de temps, mais que l’on fait systématiquement là où le chien a signalé quelque chose.</p>
    <p>Le résultat de cette vérification est ce qui figure dans le compte rendu : zones confirmées, zones signalées non confirmées, zones contrôlées sans signalement. Cette distinction est importante, notamment en copropriété ou en hôtellerie, où le compte rendu peut servir de base à des décisions d’intervention sur plusieurs lots.</p>

    ${h2(HEADINGS[5])}
    ${callout({
      title: 'Ce qui conditionne réellement la performance',
      text: `La détection canine n’est pas fiable à 100 %, et aucune entreprise sérieuse ne devrait l’affirmer. Les données disponibles sur le sujet convergent : la performance dépend du chien lui-même, de la qualité et de la régularité du dressage, du travail du maître-chien, du protocole appliqué et des conditions rencontrées sur place — encombrement, températures, courants d’air, odeurs concurrentes, durée de la recherche.

C’est pour cette raison que nous présentons la détection canine comme un outil professionnel de localisation, systématiquement complété par une inspection visuelle. Cette approche est cohérente avec les recommandations et les données disponibles sur le sujet.`,
    })}
    ${photo({
      name: 'chien-detecteur-chambre',
      alt: 'Chien détecteur de punaises de lit au travail le long d’un lit, accompagné de son maître-chien',
      brief: 'Chien détecteur en action le long d’un sommier, maître-chien accroupi à proximité, chambre réelle.',
      width: 1200,
      height: 800,
    })}
  </div>
  ${tocFromHeadings(HEADINGS)}
</div>`,
})}

${section({
  id: 'diagnostic',
  variant: 'section--glacier',
  eyebrow: 'Organiser une détection',
  title: 'Demander une détection canine',
  lead: 'Indiquez-nous le type de logement, la commune et ce que vous avez observé : nous vous rappelons pour définir le protocole adapté.',
  html: `<div class="grid grid--2" style="align-items:start">
    <div>
      ${checklist([
        'Recherche ciblée sur les zones de couchage et le mobilier proche',
        'Vérification visuelle systématique de chaque marquage',
        'Compte rendu distinguant zones confirmées et zones contrôlées',
        'Contrôle possible après traitement, à un délai adapté',
        'Intervention dans les huit départements d’Île-de-France',
      ])}
      ${callout({
        variant: 'sand',
        icon: 'doc',
        title: 'Avant la détection',
        text: 'Ne nettoyez pas la chambre avec des produits odorants, ne déplacez pas les affaires et ne jetez rien. Un logement laissé en l’état donne une lecture beaucoup plus fiable.',
      })}
    </div>
    <div>${diagnosticForm({ id: 'formulaire-canine', compact: true })}</div>
  </div>`,
})}

${section({
  variant: 'section--white',
  eyebrow: 'FAQ',
  title: 'Questions fréquentes sur la détection canine',
  html: faq(FAQ),
  wrap: 'wrap--narrow',
})}

${relatedSection({
  title: 'Pages liées',
  variant: 'section--sand',
  links: [
    { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'La technologie HUGETRI400', href: '/hugetri400' },
    { label: 'Toutes les méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Détection en hôtel', href: '/punaises-de-lit-hotel' },
    { label: 'Détection en immeuble', href: '/punaises-de-lit-immeuble' },
    { label: 'Comment fonctionne une détection canine ?', href: '/blog/comment-fonctionne-detection-canine' },
    { label: 'Nos interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
  ],
})}

${ctaBand({
  title: 'Un doute sur une chambre, un logement, un bâtiment ?',
  text: 'La détection canine permet de cibler rapidement les zones à examiner, y compris sur de grands volumes. Parlons de votre situation.',
  tag: 'canine',
})}`;

  return definePage({
    url: '/detection-canine-punaises-de-lit',
    title: 'Détection canine punaises de lit — Île-de-France',
    description:
      'Détection canine des punaises de lit en Île-de-France : chien entraîné, marquage puis vérification visuelle et cartographie des foyers. Limites expliquées.',
    priority: 0.9,
    changefreq: 'monthly',
    crumbs: [{ label: 'Expertise', href: '/methodes-traitement-punaises-de-lit' }, { label: 'Détection canine' }],
    faq: FAQ,
    schema: [
      service({
        name: 'Détection canine des punaises de lit',
        description:
          'Recherche olfactive des foyers de punaises de lit par chien entraîné, complétée par une vérification visuelle et une cartographie des zones confirmées.',
        url: '/detection-canine-punaises-de-lit',
        serviceType: 'Détection canine punaises de lit',
      }),
    ],
    body,
  });
}
