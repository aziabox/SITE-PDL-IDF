import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist } from '../../lib/components.mjs';

const IDF = { label: 'Île-de-France', href: '/punaises-de-lit-ile-de-france' };
const base = (dept, name) => [IDF, { label: name, href: `/${dept.slug}` }];

const D92 = { slug: 'punaises-de-lit-hauts-de-seine-92', name: 'Hauts-de-Seine (92)' };
const D93 = { slug: 'punaises-de-lit-seine-saint-denis-93', name: 'Seine-Saint-Denis (93)' };

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
      url: '/punaises-de-lit-boulogne-billancourt',
      h1: 'Punaises de lit à Boulogne-Billancourt',
      title: 'Punaises de lit Boulogne-Billancourt (92) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Boulogne-Billancourt : copropriétés denses, bâti ancien et programmes récents. Diagnostic, détection canine, thermique.',
      eyebrow: 'Hauts-de-Seine · 92',
      tag: 'ville-bb',
      priority: 0.55,
      crumbs: base(D92, D92.name).concat([{ label: 'Boulogne-Billancourt' }]),
      serviceName: 'Traitement des punaises de lit à Boulogne-Billancourt',
      lead: 'Commune la plus peuplée des Hauts-de-Seine, Boulogne-Billancourt présente un habitat presque exclusivement collectif, avec un parc allant des immeubles des années 1930 aux programmes les plus récents. Cette densité conditionne directement la manière d’aborder une infestation.',
      quick: {
        question: 'Comment intervient-on à Boulogne-Billancourt ?',
        answer:
          'Presque toujours en copropriété. Le diagnostic évalue le logement et son exposition : lots mitoyens, lots superposés, colonnes techniques partagées. Le traitement est ensuite adapté au type de bâti — les immeubles anciens et les programmes récents ne posent pas les mêmes contraintes.',
      },
      blocks: [
        {
          title: 'Un parc collectif à deux visages',
          html: `<p>Les immeubles d’avant-guerre présentent les caractéristiques classiques du bâti ancien : parquets à jeux, plinthes moulurées, cloisons anciennes. Les passages entre logements y sont plus nombreux, et l’inspection doit couvrir les jonctions mur-plancher avec autant de soin que le couchage.</p>
          <p>Les programmes récents offrent moins de cachettes structurelles, mais rien n’empêche la circulation par les gaines techniques, les paliers et les objets transportés. Un immeuble neuf est plus simple à traiter, pas préservé.</p>`,
        },
        {
          title: 'La proximité de Paris',
          html: `<p>La commune est un lieu de passage : mobilité professionnelle forte, locations meublées, déménagements fréquents entre Paris et la première couronne. Chaque déménagement est une occasion d’introduction, et les cartons circulent souvent entre plusieurs adresses avant d’être défaits.</p>
          <p>C’est une des raisons pour lesquelles nous demandons systématiquement, lors du premier échange, s’il y a eu un déménagement, un achat de mobilier d’occasion ou un séjour extérieur dans les semaines précédentes.</p>`,
        },
        {
          title: 'Intervenir dans une copropriété boulonnaise',
          html: `<p>La densité impose une organisation : accès, stationnement pour le déchargement, créneaux compatibles avec le règlement de l’immeuble. Ces points sont réglés avant l’intervention, pas le jour même.</p>
          <p>Lorsque plusieurs lots sont concernés, nous proposons une cartographie et un plan d’intervention coordonné, présentés de façon exploitable par un conseil syndical — la démarche est détaillée sur la page <a href="/punaises-de-lit-syndic">syndic de copropriété</a>.</p>`,
        },
      ],
      points: [
        'Le couchage et le mobilier à moins d’un mètre du lit',
        'Les plinthes et jonctions mur-plancher du bâti ancien',
        'Les gaines techniques et paliers',
        'Les lots mitoyens et superposés',
        'Les logements meublés en rotation',
        'Les caves et locaux communs de la résidence',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Boulogne-Billancourt',
      faq: [
        {
          q: 'Mon immeuble est récent, suis-je vraiment concerné ?',
          a: 'Oui, cela reste possible. L’âge du bâtiment influence la facilité du traitement, pas le risque d’introduction, qui dépend des allées et venues, des bagages et du mobilier.',
        },
        {
          q: 'Pouvez-vous intervenir sur plusieurs lots du même immeuble ?',
          a: 'Oui, et c’est préférable lorsque des lots voisins sont concernés. Traiter simultanément ce qui communique évite les recolonisations et réduit le coût total.',
        },
        {
          q: 'Quels délais à Boulogne-Billancourt ?',
          a: 'Les délais dépendent de la période et de la nature du chantier. Nous vous indiquons un délai réaliste lors du premier échange, avant tout engagement.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans les Hauts-de-Seine (92)', href: '/punaises-de-lit-hauts-de-seine-92' },
        { label: 'Punaises de lit à Nanterre', href: '/punaises-de-lit-nanterre' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un logement concerné à Boulogne-Billancourt ?',
      ctaText: 'Nous évaluons l’exposition de votre lot avant d’intervenir, pour un traitement qui tienne dans la durée.',
    }),

    contentPage({
      url: '/punaises-de-lit-nanterre',
      h1: 'Punaises de lit à Nanterre',
      title: 'Punaises de lit Nanterre (92) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Nanterre : habitat mixte, grands ensembles, quartiers pavillonnaires et logements étudiants. Diagnostic, détection canine, traitement thermique.',
      eyebrow: 'Hauts-de-Seine · 92',
      tag: 'ville-nanterre',
      priority: 0.55,
      crumbs: base(D92, D92.name).concat([{ label: 'Nanterre' }]),
      serviceName: 'Traitement des punaises de lit à Nanterre',
      lead: 'Nanterre présente une diversité d’habitat peu commune dans les Hauts-de-Seine : grands ensembles, quartiers pavillonnaires, opérations récentes et logements étudiants liés au pôle universitaire. Chacun appelle une réponse différente.',
      quick: {
        question: 'Quelles situations rencontre-t-on à Nanterre ?',
        answer:
          'Trois principales : des infestations en habitat collectif, où le périmètre dépasse souvent un seul logement ; des situations pavillonnaires, internes au logement ; et des logements étudiants à forte rotation, où le contrôle entre deux occupations est la mesure la plus efficace.',
      },
      blocks: [
        {
          title: 'Habitat collectif : évaluer le périmètre',
          html: `<p>Dans les ensembles collectifs, la question du périmètre prime sur celle de la méthode. Un traitement bien conduit dans un logement isolé ne résistera pas si un logement voisin reste concerné.</p>
          <p>Nous contrôlons donc le cercle des logements exposés — mitoyens, superposés, reliés par une colonne technique — avant de proposer une intervention. Sur plusieurs logements, la <a href="/detection-canine-punaises-de-lit">détection canine</a> rend ce contrôle réalisable en une session.</p>`,
        },
        {
          title: 'Quartiers pavillonnaires',
          html: `<p>Dans les secteurs de maisons, l’absence de mitoyenneté change tout : le périmètre est le logement lui-même. La difficulté se déplace vers le volume, les chambres multiples et surtout le circuit des textiles stockés.</p>
          <p>La méthode est détaillée sur la page <a href="/punaises-de-lit-maison">maison</a>.</p>`,
        },
        {
          title: 'Logements étudiants',
          html: `<p>Le pôle universitaire alimente un parc de studios et de colocations en rotation annuelle. Deux moments comptent : la remise en location, où un contrôle du couchage détecte l’essentiel des introductions, et le signalement en cours d’occupation, qui doit être traité sans attendre la fin de l’année universitaire.</p>
          <p>Pour les colocations, chaque chambre doit être contrôlée : une colocation se traite comme un petit immeuble.</p>`,
        },
      ],
      points: [
        'Le couchage complet et le mobilier proche',
        'Les logements mitoyens et superposés en collectif',
        'Les chambres multiples des pavillons',
        'Les studios et colocations étudiantes',
        'Les locaux communs et laveries',
        'Le stockage de textiles',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Nanterre',
      faq: [
        {
          q: 'Une colocation se traite-t-elle chambre par chambre ?',
          a: 'Toutes les chambres doivent être contrôlées, et celles qui sont confirmées traitées ensemble. Traiter une seule chambre d’une colocation revient presque toujours à recommencer quelques semaines plus tard.',
        },
        {
          q: 'Intervenez-vous dans les résidences gérées ?',
          a: 'Oui, avec des comptes rendus par logement et une planification par groupes de logements liés entre eux.',
        },
        {
          q: 'Faut-il prévenir le bailleur ?',
          a: 'Si vous êtes locataire, oui, par écrit et dès les premiers signes. Ce signalement daté déclenche la prise en charge et établit la chronologie.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans les Hauts-de-Seine (92)', href: '/punaises-de-lit-hauts-de-seine-92' },
        { label: 'Punaises de lit à Boulogne-Billancourt', href: '/punaises-de-lit-boulogne-billancourt' },
        { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un doute sur un logement à Nanterre ?',
      ctaText: 'Collectif, pavillon ou logement étudiant : le diagnostic détermine le périmètre avant toute intervention.',
    }),

    contentPage({
      url: '/punaises-de-lit-saint-denis',
      h1: 'Punaises de lit à Saint-Denis',
      title: 'Punaises de lit Saint-Denis (93) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Saint-Denis : habitat collectif dense, centre ancien, logements étudiants et copropriétés. Diagnostic, détection canine, interventions coordonnées.',
      eyebrow: 'Seine-Saint-Denis · 93',
      tag: 'ville-saint-denis',
      priority: 0.55,
      crumbs: base(D93, D93.name).concat([{ label: 'Saint-Denis' }]),
      serviceName: 'Traitement des punaises de lit à Saint-Denis',
      lead: 'À Saint-Denis, l’habitat collectif domine, avec un centre ancien dense et des ensembles de plus grande taille. Dans les deux cas, les infestations que nous rencontrons concernent rarement un seul logement.',
      quick: {
        question: 'Pourquoi traiter à l’échelle du bâtiment à Saint-Denis ?',
        answer:
          'Parce que la densité de l’habitat collectif multiplie les chemins de circulation entre logements : plinthes, gaines techniques, paliers et locaux communs. Un traitement isolé dans un bâtiment concerné est presque toujours suivi d’une recolonisation en quelques mois.',
      },
      blocks: [
        {
          title: 'Centre ancien et grands ensembles',
          html: `<p>Le centre ancien présente un bâti serré, avec des immeubles de petite taille où les logements communiquent par des cloisons et des planchers anciens. L’avantage, paradoxalement, est le faible nombre de lots : une opération complète y est souvent réalisable en quelques jours.</p>
          <p>Les ensembles de plus grande taille posent la question inverse : les chemins de circulation verticaux — gaines, colonnes techniques — peuvent relier des logements distants de plusieurs étages. Le contrôle doit alors suivre ces réseaux, pas seulement la proximité immédiate.</p>`,
        },
        {
          title: 'Logements étudiants et locations meublées',
          html: `<p>La présence universitaire et le parc locatif meublé génèrent une rotation importante. Les couchages, eux, restent en place d’un occupant à l’autre : c’est ce qui explique la persistance de certaines infestations malgré des changements de locataires.</p>
          <p>Pour les gestionnaires, le contrôle du couchage lors de chaque remise en location est la mesure la plus efficace et la moins coûteuse.</p>`,
        },
        {
          title: 'Organiser une opération collective',
          html: `<p>La cartographie précède l’intervention : quels logements sont confirmés, lesquels sont exposés, quelles parties communes servent de passage. Le plan qui en découle fixe l’ordre et le calendrier, avec des consignes de préparation identiques pour tous les occupants concernés.</p>
          ${callout({
            title: 'Le signalement, nerf de la guerre',
            text: 'Beaucoup d’occupants ne signalent pas, par crainte d’être mis en cause. Rappeler clairement que les punaises de lit ne sont pas liées à l’hygiène et que le signalement n’entraîne aucune sanction change radicalement la qualité de la cartographie — et donc le résultat.',
          })}`,
        },
      ],
      points: [
        'Le logement signalé et son cercle de logements exposés',
        'Les colonnes techniques et gaines verticales',
        'Les paliers, escaliers et locaux communs',
        'Les logements meublés en rotation',
        'Les logements vacants du bâtiment',
        'Les caves et locaux de stockage',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Saint-Denis',
      faq: [
        {
          q: 'Combien de logements faut-il contrôler ?',
          a: 'Au minimum les mitoyens, superposés et ceux reliés par une même colonne technique. Le périmètre s’élargit ensuite en fonction de ce que révèle le contrôle.',
        },
        {
          q: 'Les parties communes sont-elles traitées ?',
          a: 'Elles sont systématiquement contrôlées. Elles servent surtout de couloir de circulation : le traitement y est ciblé sur les points de passage plutôt que généralisé.',
        },
        {
          q: 'Peut-on intervenir rapidement ?',
          a: 'Le diagnostic peut être organisé rapidement ; l’intervention coordonnée, elle, dépend du nombre de logements et des accès. Nous vous donnons un calendrier réaliste dès le départ.',
        },
      ],
      related: [
        { label: 'Punaises de lit en Seine-Saint-Denis (93)', href: '/punaises-de-lit-seine-saint-denis-93' },
        { label: 'Punaises de lit à Montreuil', href: '/punaises-de-lit-montreuil' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un immeuble concerné à Saint-Denis ?',
      ctaText: 'Nous établissons la cartographie des logements confirmés et exposés avant de proposer un plan d’intervention.',
    }),

    contentPage({
      url: '/punaises-de-lit-montreuil',
      h1: 'Punaises de lit à Montreuil',
      title: 'Punaises de lit Montreuil (93) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Montreuil : habitat mixte, anciens ateliers réhabilités, petites copropriétés et maisons de ville. Diagnostic, détection canine, traitement thermique.',
      eyebrow: 'Seine-Saint-Denis · 93',
      tag: 'ville-montreuil',
      priority: 0.55,
      crumbs: base(D93, D93.name).concat([{ label: 'Montreuil' }]),
      serviceName: 'Traitement des punaises de lit à Montreuil',
      lead: 'Montreuil a la particularité d’un tissu urbain très hétérogène : anciens ateliers réhabilités en logements, petites copropriétés, maisons de ville, immeubles récents. Cette variété se traduit par des configurations d’intervention très différentes d’une rue à l’autre.',
      quick: {
        question: 'Qu’est-ce qui complique un traitement à Montreuil ?',
        answer:
          'La diversité du bâti. Un ancien atelier réhabilité, avec ses volumes atypiques, ses mezzanines et ses structures apparentes, ne se traite pas comme un appartement standard : les cachettes sont différentes et la circulation de l’air chaud doit être pensée autrement.',
      },
      blocks: [
        {
          title: 'Volumes atypiques et réhabilitations',
          html: `<p>Les logements issus de réhabilitations présentent souvent de grandes hauteurs sous plafond, des mezzanines de couchage, des structures bois ou métal apparentes et des cloisons partielles. Pour une infestation, cela signifie des cachettes moins prévisibles : jonctions de structure, rives de mezzanine, coffrages.</p>
          <p>Pour un <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a>, cela signifie surtout un volume plus important et une stratification de l’air à maîtriser : sans brassage adapté, la température sous une mezzanine et celle au sol peuvent différer sensiblement.</p>`,
        },
        {
          title: 'Petites copropriétés et maisons de ville',
          html: `<p>Une grande partie du parc est constituée de petits immeubles de quelques lots et de maisons de ville mitoyennes. Ces configurations ont un avantage pratique : quand plusieurs logements sont concernés, une opération complète reste organisable en quelques jours.</p>
          <p>La mitoyenneté des maisons de ville ne doit pas être négligée : un mur partagé peut servir de passage au même titre qu’une cloison d’immeuble.</p>`,
        },
        {
          title: 'Un parc locatif dynamique',
          html: `<p>La rotation locative y est importante, avec une part significative de meublés et de colocations. Le couchage reste en place d’un occupant à l’autre : c’est le point de contrôle prioritaire lors des remises en location.</p>`,
        },
      ],
      points: [
        'Les mezzanines de couchage et leurs rives',
        'Les structures apparentes et coffrages',
        'Les murs mitoyens des maisons de ville',
        'Les lots voisins des petites copropriétés',
        'Les couchages des logements meublés',
        'Les rangements intégrés des volumes atypiques',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Montreuil',
      faq: [
        {
          q: 'Un loft ou un atelier réhabilité peut-il être traité thermiquement ?',
          a: 'Souvent oui, mais le volume, la hauteur sous plafond et l’isolation doivent être évalués au diagnostic. Ces paramètres déterminent la faisabilité réelle et la durée d’intervention.',
        },
        {
          q: 'Ma maison de ville est mitoyenne : dois-je m’inquiéter du voisin ?',
          a: 'Un mur mitoyen peut servir de passage. Si l’infestation est installée près de ce mur, il est pertinent d’en parler au voisin — sans accusation, avec un argument technique.',
        },
        {
          q: 'Intervenez-vous dans les petites copropriétés ?',
          a: 'Oui, et c’est un contexte favorable : peu de lots, une décision plus simple à prendre, et une opération complète réalisable rapidement.',
        },
      ],
      related: [
        { label: 'Punaises de lit en Seine-Saint-Denis (93)', href: '/punaises-de-lit-seine-saint-denis-93' },
        { label: 'Punaises de lit à Saint-Denis', href: '/punaises-de-lit-saint-denis' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un logement atypique à Montreuil ?',
      ctaText: 'Volumes réhabilités, mezzanines, maisons de ville : nous adaptons la méthode à la configuration réelle.',
    }),
  ];
}
