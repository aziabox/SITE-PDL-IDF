import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist } from '../../lib/components.mjs';

const IDF = { label: 'Île-de-France', href: '/punaises-de-lit-ile-de-france' };
const D94 = { slug: 'punaises-de-lit-val-de-marne-94', name: 'Val-de-Marne (94)' };
const D78 = { slug: 'punaises-de-lit-yvelines-78', name: 'Yvelines (78)' };
const base = (d, label) => [IDF, { label: d.name, href: `/${d.slug}` }, { label }];

const services = checklist([
  'Diagnostic et inspection méthodique du logement',
  'Détection canine pour localiser les foyers',
  'Traitement thermique lorsque la configuration s’y prête',
  'Approche combinée : aspiration, vapeur, travail mécanique',
  'Interventions coordonnées sur plusieurs lots',
  'Contrôle de vérification après traitement',
]);

export default function () {
  return [
    contentPage({
      url: '/punaises-de-lit-creteil',
      h1: 'Punaises de lit à Créteil',
      title: 'Punaises de lit Créteil (94) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Créteil : grandes copropriétés, quartiers planifiés, logements étudiants et résidences. Diagnostic, détection canine, traitement coordonné.',
      eyebrow: 'Val-de-Marne · 94',
      tag: 'ville-creteil',
      priority: 0.55,
      crumbs: base(D94, 'Créteil'),
      serviceName: 'Traitement des punaises de lit à Créteil',
      lead: 'Créteil s’est largement construite par opérations planifiées : de grandes copropriétés, des résidences organisées en bâtiments et des équipements universitaires. Cette structure se retrouve dans la façon dont une infestation s’y propage — et dont elle doit être traitée.',
      quick: {
        question: 'Comment aborder une infestation dans une grande copropriété de Créteil ?',
        answer:
          'Par la cartographie avant tout : identifier les logements confirmés, les logements exposés et les colonnes techniques partagées. Ces ensembles ont des réseaux verticaux qui relient des logements de plusieurs étages, ce qui rend le contrôle des seuls voisins de palier insuffisant.',
      },
      blocks: [
        {
          title: 'Des ensembles conçus par bâtiments',
          html: `<p>L’organisation par bâtiments et par cages d’escalier est un atout : elle permet de définir un périmètre clair et de planifier une opération sur un groupe de logements cohérent, plutôt que d’intervenir au fil des signalements isolés.</p>
          <p>Ces ensembles partagent en revanche des colonnes techniques verticales. Un logement du 3<sup>e</sup> étage peut être relié à un logement du 6<sup>e</sup> par un même réseau. Le contrôle suit donc la logique du bâtiment, pas seulement celle du palier.</p>`,
        },
        {
          title: 'Résidences étudiantes et logements en rotation',
          html: `<p>La présence universitaire génère un parc de logements à rotation annuelle. Les périodes de vacances constituent les meilleures fenêtres d’intervention : logements vides, accès simple, aucun relogement à organiser.</p>
          <p>L’approche par bloc est détaillée sur la page <a href="/punaises-de-lit-residence-etudiante">résidence étudiante</a>.</p>`,
        },
        {
          title: 'Coordonner avec le gestionnaire',
          html: `<p>Sur ces ensembles, la réussite tient autant à l’organisation qu’à la technique : information des occupants, consignes de préparation identiques, calendrier tenu et contrôle après traitement.</p>
          ${callout({
            title: 'Ce qui fait échouer une opération',
            text: 'Presque jamais la méthode de traitement. Presque toujours l’un de ces trois points : des logements liés traités à plusieurs semaines d’écart, des consignes de préparation mal suivies, ou des occupants non informés qui déplacent leurs affaires.',
          })}`,
        },
      ],
      points: [
        'Le logement signalé et les logements de la même colonne technique',
        'Les logements mitoyens et superposés',
        'Les parties communes de la cage d’escalier',
        'Les logements étudiants et meublés du bâtiment',
        'Les locaux communs et caves',
        'Les logements vacants lors des rotations',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Créteil',
      faq: [
        {
          q: 'Pourquoi contrôler des logements éloignés dans le bâtiment ?',
          a: 'Parce que les colonnes techniques relient verticalement des logements qui ne sont pas voisins de palier. Ignorer ce réseau conduit à traiter un étage pendant qu’un autre réalimente l’infestation.',
        },
        {
          q: 'Les vacances universitaires sont-elles un bon moment ?',
          a: 'Oui, c’est généralement la meilleure fenêtre pour les résidences : accès facilité, logements vides et aucune organisation de relogement nécessaire.',
        },
        {
          q: 'Travaillez-vous avec les gestionnaires de résidences ?',
          a: 'Oui, avec des comptes rendus comparables par logement et une planification par groupes de logements liés entre eux.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans le Val-de-Marne (94)', href: '/punaises-de-lit-val-de-marne-94' },
        { label: 'Punaises de lit à Vitry-sur-Seine', href: '/punaises-de-lit-vitry-sur-seine' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Une résidence concernée à Créteil ?',
      ctaText: 'Nous cartographions le bâtiment avant d’intervenir, colonnes techniques comprises.',
    }),

    contentPage({
      url: '/punaises-de-lit-vitry-sur-seine',
      h1: 'Punaises de lit à Vitry-sur-Seine',
      title: 'Punaises de lit Vitry-sur-Seine (94) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Vitry-sur-Seine : habitat collectif, copropriétés et secteurs pavillonnaires. Diagnostic et interventions coordonnées.',
      eyebrow: 'Val-de-Marne · 94',
      tag: 'ville-vitry',
      priority: 0.5,
      crumbs: base(D94, 'Vitry-sur-Seine'),
      serviceName: 'Traitement des punaises de lit à Vitry-sur-Seine',
      lead: 'À Vitry-sur-Seine, l’habitat collectif est largement majoritaire, avec des ensembles de tailles variées et quelques secteurs pavillonnaires. Les interventions y sont le plus souvent des opérations à plusieurs logements.',
      quick: {
        question: 'Faut-il traiter plusieurs logements à Vitry-sur-Seine ?',
        answer:
          'Dans l’habitat collectif, presque toujours : les logements liés entre eux par une mitoyenneté ou une colonne technique doivent être contrôlés, et ceux qui sont confirmés traités dans la même fenêtre de temps. Sinon, le logement traité est recolonisé.',
      },
      blocks: [
        {
          title: 'Le réflexe du périmètre',
          html: `<p>La première question que nous posons n’est pas « quelle méthode », mais « qui d’autre est concerné ». Dans un bâtiment collectif, cette question détermine à elle seule la durabilité du résultat.</p>
          <p>Le contrôle porte sur les logements mitoyens, superposés et reliés par un même réseau technique. La <a href="/detection-canine-punaises-de-lit">détection canine</a> permet de couvrir ce périmètre rapidement, ce qui évite de mobiliser un gestionnaire plusieurs journées.</p>`,
        },
        {
          title: 'Logements gérés et parc locatif',
          html: `<p>Pour les gestionnaires de parc, la valeur d’un prestataire tient à la comparabilité des comptes rendus d’un logement à l’autre et à la capacité de tenir un calendrier. Nous fournissons un constat par logement distinguant zones confirmées, zones signalées non confirmées et zones contrôlées sans signalement.</p>
          <p>C’est ce document qui permet de prioriser objectivement plutôt que de traiter dans l’ordre des réclamations.</p>`,
        },
        {
          title: 'Secteurs pavillonnaires',
          html: `<p>Dans les rues pavillonnaires, la logique s’inverse : le périmètre est le logement, et le travail porte sur le volume, les chambres multiples et le circuit des textiles. La méthode est décrite sur la page <a href="/punaises-de-lit-maison">maison</a>.</p>`,
        },
      ],
      points: [
        'Les logements mitoyens et superposés',
        'Les colonnes techniques partagées',
        'Les parties communes et locaux de stockage',
        'Les logements du parc locatif géré',
        'Les chambres multiples des pavillons',
        'Les textiles stockés et valises',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Vitry-sur-Seine',
      faq: [
        {
          q: 'Mon bailleur doit-il organiser le traitement ?',
          a: 'Signalez par écrit dès les premiers signes : c’est ce qui déclenche la prise en charge et établit la chronologie. La répartition des responsabilités dépend ensuite de votre situation contractuelle.',
        },
        {
          q: 'Peut-on traiter un seul logement ?',
          a: 'C’est possible, mais nous le disons franchement : si des logements voisins sont concernés et non traités, le résultat ne tiendra pas. Nous préférons l’annoncer avant l’intervention.',
        },
        {
          q: 'Quels délais sur une opération à plusieurs logements ?',
          a: 'Ils dépendent du nombre de logements et des accès. La règle que nous appliquons est que les logements liés soient traités dans une même fenêtre, jamais étalés sur plusieurs mois.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans le Val-de-Marne (94)', href: '/punaises-de-lit-val-de-marne-94' },
        { label: 'Punaises de lit à Créteil', href: '/punaises-de-lit-creteil' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Agence immobilière', href: '/punaises-de-lit-agence-immobiliere' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un logement concerné à Vitry-sur-Seine ?',
      ctaText: 'Nous évaluons le périmètre réel — logement, palier ou colonne — avant toute proposition.',
    }),

    contentPage({
      url: '/punaises-de-lit-versailles',
      h1: 'Punaises de lit à Versailles',
      title: 'Punaises de lit Versailles (78) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Versailles : bâti ancien, logements familiaux et hébergements touristiques. Diagnostic, détection canine, thermique.',
      eyebrow: 'Yvelines · 78',
      tag: 'ville-versailles',
      priority: 0.55,
      crumbs: base(D78, 'Versailles'),
      serviceName: 'Traitement des punaises de lit à Versailles',
      lead: 'Versailles présente un bâti ancien dense en centre-ville, des immeubles de caractère, des logements familiaux de grande taille et un parc d’hébergement lié à la fréquentation touristique. Autant de configurations qui demandent des approches distinctes.',
      quick: {
        question: 'Qu’est-ce qui caractérise une intervention à Versailles ?',
        answer:
          'Le bâti ancien : parquets à jeux, plinthes moulurées, cloisons et planchers qui facilitent la circulation entre logements. L’inspection doit couvrir les jonctions et les moulures avec autant de rigueur que le couchage, et le traitement tenir compte des matériaux en présence.',
      },
      blocks: [
        {
          title: 'Bâti ancien et matériaux',
          html: `<p>Dans un immeuble ancien, les cachettes sont nombreuses et continues : jeux entre lames de parquet, plinthes moulurées, encadrements, coffrages. L’inspection suit ces lignes plutôt que de se limiter au périmètre du lit.</p>
          <p>Les matériaux comptent aussi pour le choix du traitement. Boiseries anciennes, parquets massifs et éléments de décor demandent une évaluation avant tout <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> : ce point est vérifié lors du diagnostic, pas le jour de l’intervention.</p>`,
        },
        {
          title: 'Logements familiaux',
          html: `<p>Les appartements et maisons de grande taille posent la question du périmètre interne : plusieurs chambres, des dressings, du linge stocké. Toutes les chambres doivent être contrôlées, y compris celles peu utilisées, avant de décider des pièces à traiter.</p>
          <p>La méthode est détaillée sur la page <a href="/punaises-de-lit-maison">maison</a>.</p>`,
        },
        {
          title: 'Hébergements et établissements',
          html: `<p>La fréquentation touristique alimente un parc d’hôtels et de locations de courte durée, où la rotation est permanente. Le protocole de contrôle entre deux séjours, décrit sur la page <a href="/punaises-de-lit-hotel">hôtel</a>, y est particulièrement pertinent.</p>
          <p>Les établissements accueillant des internats ou des hébergements collectifs relèvent d’une logique proche : contrôle par unité, traitement coordonné, vérification après intervention.</p>`,
        },
      ],
      points: [
        'Les jeux de parquet et plinthes moulurées',
        'Les encadrements, coffrages et éléments de décor',
        'Toutes les chambres des logements familiaux',
        'Les dressings et le linge stocké',
        'Les chambres à forte rotation des hébergements',
        'Les logements superposés des petits immeubles',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Versailles',
      faq: [
        {
          q: 'Le traitement thermique convient-il à un appartement ancien ?',
          a: 'Souvent, mais cela dépend des matériaux, du volume, de l’isolation et de la puissance électrique disponible. Ces éléments sont évalués au diagnostic, avant tout engagement.',
        },
        {
          q: 'Faut-il protéger le mobilier ancien ?',
          a: 'Certains meubles, éléments de décor et objets ne supportent pas une exposition prolongée à la chaleur. La liste des éléments à retirer ou à protéger est établie avec vous avant l’intervention.',
        },
        {
          q: 'Intervenez-vous pour des hébergements touristiques ?',
          a: 'Oui, avec des interventions planifiées pour limiter l’immobilisation des chambres et un protocole de contrôle adapté à la rotation.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans les Yvelines (78)', href: '/punaises-de-lit-yvelines-78' },
        { label: 'Punaises de lit en hôtel', href: '/punaises-de-lit-hotel' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un logement ancien concerné à Versailles ?',
      ctaText: 'Nous évaluons la compatibilité des méthodes avec vos matériaux avant toute intervention.',
    }),

    contentPage({
      url: '/punaises-de-lit-argenteuil',
      h1: 'Punaises de lit à Argenteuil',
      title: 'Punaises de lit Argenteuil (95) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Argenteuil : habitat mixte entre collectif et pavillonnaire, copropriétés, logements gérés. Diagnostic, détection canine, interventions coordonnées.',
      eyebrow: 'Val-d’Oise · 95',
      tag: 'ville-argenteuil',
      priority: 0.5,
      crumbs: [IDF, { label: 'Val-d’Oise (95)', href: '/punaises-de-lit-val-doise-95' }, { label: 'Argenteuil' }],
      serviceName: 'Traitement des punaises de lit à Argenteuil',
      lead: 'Argenteuil combine un habitat collectif important et de larges secteurs pavillonnaires. Selon le quartier, la même infestation appelle une organisation d’intervention radicalement différente.',
      quick: {
        question: 'Collectif ou pavillon : qu’est-ce que cela change ?',
        answer:
          'En collectif, le périmètre dépasse souvent le logement : il faut contrôler les logements liés avant de traiter. En pavillon, le périmètre est le logement lui-même, et la difficulté se déplace vers le volume à traiter et le circuit des textiles stockés.',
      },
      blocks: [
        {
          title: 'Dans l’habitat collectif',
          html: `<p>La démarche est celle décrite sur la page <a href="/punaises-de-lit-immeuble">immeuble</a> : cartographier les logements confirmés et exposés, traiter simultanément ce qui communique, traiter les points de passage, contrôler ensuite.</p>
          <p>Le facteur limitant n’est presque jamais technique. C’est le taux de signalement : tant que des logements concernés restent silencieux, la cartographie est incomplète et le traitement fragile.</p>`,
        },
        {
          title: 'Dans les secteurs pavillonnaires',
          html: `<p>Sans mitoyenneté, une maison traitée correctement n’a pas de source extérieure de réalimentation. Le diagnostic se concentre alors sur la délimitation interne : quelles chambres sont concernées, quels espaces de stockage, quels textiles.</p>
          <p>Les valises rangées après un voyage et le linge stocké d’une saison à l’autre sont les vecteurs internes les plus fréquents.</p>`,
        },
        {
          title: 'Logements gérés et remises en location',
          html: `<p>Pour les gestionnaires, le moment le plus efficace pour contrôler reste la remise en location : logement vide, accès simple, et un problème identifié à ce stade coûte beaucoup moins cher qu’un signalement trois semaines après l’entrée d’un nouvel occupant.</p>`,
        },
      ],
      points: [
        'Les logements liés en collectif : mitoyens, superposés, colonnes',
        'Les parties communes et locaux de stockage',
        'Toutes les chambres des pavillons',
        'Les combles, garages et buanderies',
        'Les valises et textiles stockés',
        'Les logements vacants lors des remises en location',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Argenteuil',
      faq: [
        {
          q: 'Comment savoir si mes voisins sont concernés ?',
          a: 'Par un contrôle, pas par déduction. La détection canine permet de vérifier plusieurs logements rapidement ; chaque marquage est ensuite confirmé visuellement avant d’en tirer une conclusion.',
        },
        {
          q: 'Un pavillon demande-t-il plusieurs interventions ?',
          a: 'Cela dépend de l’étendue et du volume. Certaines situations se traitent en une opération, d’autres par zones successives. Le calendrier est défini après le diagnostic.',
        },
        {
          q: 'Intervenez-vous pour des gestionnaires de parc ?',
          a: 'Oui, avec des comptes rendus comparables par logement et une planification adaptée aux groupes de logements liés entre eux.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans le Val-d’Oise (95)', href: '/punaises-de-lit-val-doise-95' },
        { label: 'Punaises de lit à Cergy', href: '/punaises-de-lit-cergy' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Agence immobilière', href: '/punaises-de-lit-agence-immobiliere' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un logement concerné à Argenteuil ?',
      ctaText: 'Collectif ou pavillon, nous déterminons le périmètre avant d’engager le moindre traitement.',
    }),
  ];
}
