import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist } from '../../lib/components.mjs';

const IDF = { label: 'Île-de-France', href: '/punaises-de-lit-ile-de-france' };
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
      url: '/punaises-de-lit-cergy',
      h1: 'Punaises de lit à Cergy',
      title: 'Punaises de lit Cergy (95) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Cergy : résidences par bloc, logements étudiants et copropriétés récentes. Diagnostic, détection canine, thermique.',
      eyebrow: 'Val-d’Oise · 95',
      tag: 'ville-cergy',
      priority: 0.5,
      crumbs: [IDF, { label: 'Val-d’Oise (95)', href: '/punaises-de-lit-val-doise-95' }, { label: 'Cergy' }],
      serviceName: 'Traitement des punaises de lit à Cergy',
      lead: 'Ville nouvelle organisée par quartiers et par résidences, Cergy accueille un parc important de logements étudiants. Cette structure, plutôt lisible, facilite la définition d’un périmètre d’intervention.',
      quick: {
        question: 'Qu’est-ce qui facilite le traitement à Cergy ?',
        answer:
          'L’organisation du bâti : des résidences identifiées, des bâtiments aux plans cohérents et des gestionnaires souvent uniques sur un ensemble. Cela permet de contrôler un bloc entier puis de traiter simultanément les logements confirmés, au lieu d’intervenir au fil des signalements.',
      },
      blocks: [
        {
          title: 'Résidences et logements étudiants',
          html: `<p>Le parc étudiant présente les caractéristiques classiques : logements nombreux, identiques, mitoyens, et des occupants qui signalent peu. L’approche par bloc décrite sur la page <a href="/punaises-de-lit-residence-etudiante">résidence étudiante</a> s’applique directement.</p>
          <p>Les périodes de vacances universitaires sont les meilleures fenêtres d’intervention : logements libres, accès simple, aucun relogement à prévoir.</p>`,
        },
        {
          title: 'Copropriétés et logements familiaux',
          html: `<p>Les copropriétés de la ville nouvelle sont généralement plus récentes que dans la petite couronne, avec des cloisons et des réseaux mieux identifiés. Cela ne supprime pas la circulation entre logements — gaines techniques, paliers, objets transportés — mais rend le périmètre plus facile à établir.</p>
          <p>Nous contrôlons systématiquement les logements liés avant de proposer une intervention.</p>`,
        },
        {
          title: 'Une logistique plus simple',
          html: `<p>Les accès, le stationnement et les alimentations électriques posent en général moins de contraintes qu’en centre-ville dense. C’est un point pratique qui compte pour un <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a>, dont la faisabilité dépend directement de ces paramètres.</p>
          ${callout({
            title: 'Anticiper plutôt que subir',
            text: 'Sur un parc géré, un contrôle planifié pendant une période creuse coûte nettement moins cher qu’une succession d’interventions d’urgence en pleine occupation — et il évite la dégradation de la situation.',
          })}`,
        },
      ],
      points: [
        'Les logements mitoyens et superposés de la résidence',
        'Les locaux communs : laverie, local vélos, salle commune',
        'Les logements étudiants du même bloc',
        'Les logements vacants lors des rotations',
        'Le couchage complet de chaque logement',
        'Les rangements et textiles stockés',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Cergy',
      faq: [
        {
          q: 'Quand intervenir sur une résidence étudiante ?',
          a: 'De préférence pendant les vacances universitaires : les logements sont vides, les accès simples et aucun relogement n’est à organiser. C’est aussi le moment idéal pour un contrôle préventif.',
        },
        {
          q: 'Faut-il contrôler tout un bâtiment ?',
          a: 'Il faut contrôler l’unité pertinente — souvent un bloc ou une aile — et traiter les logements confirmés. Le contrôle établit le périmètre, l’intervention le respecte.',
        },
        {
          q: 'Les délais sont-ils plus longs en grande couronne ?',
          a: 'Ils peuvent varier selon la période et la nature du chantier. Nous annonçons un délai réaliste lors du premier échange.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans le Val-d’Oise (95)', href: '/punaises-de-lit-val-doise-95' },
        { label: 'Punaises de lit à Argenteuil', href: '/punaises-de-lit-argenteuil' },
        { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Une résidence à contrôler à Cergy ?',
      ctaText: 'Le contrôle d’un bloc entier est plus rapide et moins coûteux qu’une série d’interventions isolées.',
    }),

    contentPage({
      url: '/punaises-de-lit-massy',
      h1: 'Punaises de lit à Massy',
      title: 'Punaises de lit Massy (91) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Massy : pôle de transport, résidences récentes, logements en rotation et copropriétés. Diagnostic, détection canine, traitement thermique.',
      eyebrow: 'Essonne · 91',
      tag: 'ville-massy',
      priority: 0.5,
      crumbs: [IDF, { label: 'Essonne (91)', href: '/punaises-de-lit-essonne-91' }, { label: 'Massy' }],
      serviceName: 'Traitement des punaises de lit à Massy',
      lead: 'Massy est un nœud de transport et un pôle résidentiel en développement, avec des programmes récents et un parc locatif dynamique. Une population très mobile, donc un risque d’introduction permanent.',
      quick: {
        question: 'Pourquoi la mobilité augmente-t-elle le risque ?',
        answer:
          'Parce que les punaises de lit sont transportées, pas attirées. Déplacements professionnels, séjours à l’hôtel, déménagements fréquents et locations de courte durée multiplient les occasions d’introduction par les bagages et le mobilier.',
      },
      blocks: [
        {
          title: 'Un parc récent, un risque inchangé',
          html: `<p>Les programmes récents offrent moins de cachettes structurelles que le bâti ancien : cloisons pleines, plinthes simples, sols continus. Cela facilite le traitement — mais n’empêche en rien l’introduction, qui dépend des allées et venues.</p>
          <p>Le couchage reste la zone prioritaire, et les rangements proches du lit arrivent juste après. Dans les logements récents, nous portons aussi attention aux têtes de lit fixées et aux rangements intégrés.</p>`,
        },
        {
          title: 'Locations et rotation',
          html: `<p>Le parc locatif en rotation — meublés, logements d’entreprise, séjours temporaires — appelle la même mesure que partout : un contrôle du couchage lors de chaque remise en location. Quelques minutes suffisent quand on sait où regarder.</p>
          <p>Les modalités figurent sur les pages <a href="/punaises-de-lit-location-saisonniere">location saisonnière</a> et <a href="/punaises-de-lit-agence-immobiliere">agence immobilière</a>.</p>`,
        },
        {
          title: 'Retours de déplacement',
          html: `<p>Une part des demandes que nous recevons ici fait suite à un déplacement professionnel ou à un séjour extérieur. Le réflexe utile au retour : ne pas poser la valise sur le lit, la traiter avant rangement, et ne pas la stocker sous le couchage.</p>
          <p>Les consignes détaillées figurent dans notre article <a href="/blog/eviter-transporter-punaises-de-lit">comment éviter de transporter des punaises de lit</a>.</p>`,
        },
      ],
      points: [
        'Le couchage et les rangements intégrés',
        'Les têtes de lit fixées au mur',
        'Les valises et sacs de voyage',
        'Les logements meublés en rotation',
        'Les logements liés en copropriété',
        'Les locaux communs des résidences',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Massy',
      faq: [
        {
          q: 'Un logement neuf peut-il être infesté ?',
          a: 'Oui. L’âge du bâtiment influence la facilité du traitement, pas le risque d’introduction, qui dépend uniquement de ce qui entre dans le logement.',
        },
        {
          q: 'Que faire au retour d’un déplacement ?',
          a: 'Ne posez pas la valise sur le lit, traitez le linge à haute température, inspectez la valise avant de la ranger, et évitez de la stocker sous le couchage ou dans la chambre.',
        },
        {
          q: 'Intervenez-vous pour des logements d’entreprise ?',
          a: 'Oui, avec des interventions planifiées selon vos contraintes d’occupation et un compte rendu utilisable en interne.',
        },
      ],
      related: [
        { label: 'Punaises de lit en Essonne (91)', href: '/punaises-de-lit-essonne-91' },
        { label: 'Punaises de lit à Évry-Courcouronnes', href: '/punaises-de-lit-evry-courcouronnes' },
        { label: 'Location saisonnière', href: '/punaises-de-lit-location-saisonniere' },
        { label: 'Comment éviter de transporter des punaises de lit', href: '/blog/eviter-transporter-punaises-de-lit' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un doute après un déplacement ?',
      ctaText: 'Un contrôle ciblé du couchage permet de trancher rapidement, avant que la situation ne s’installe.',
    }),

    contentPage({
      url: '/punaises-de-lit-evry-courcouronnes',
      h1: 'Punaises de lit à Évry-Courcouronnes',
      title: 'Punaises de lit Évry-Courcouronnes (91) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Évry-Courcouronnes : grands ensembles, résidences universitaires et copropriétés. Diagnostic et interventions coordonnées.',
      eyebrow: 'Essonne · 91',
      tag: 'ville-evry',
      priority: 0.5,
      crumbs: [IDF, { label: 'Essonne (91)', href: '/punaises-de-lit-essonne-91' }, { label: 'Évry-Courcouronnes' }],
      serviceName: 'Traitement des punaises de lit à Évry-Courcouronnes',
      lead: 'Ville nouvelle marquée par un habitat collectif important et une forte présence universitaire, Évry-Courcouronnes concentre des situations où la question du périmètre prime sur celle de la méthode.',
      quick: {
        question: 'Par où commencer dans un grand ensemble ?',
        answer:
          'Par le contrôle du cercle de logements exposés autour du logement signalé : mitoyens, superposés et reliés par une même colonne technique. Cette cartographie détermine le périmètre du traitement — sans elle, l’intervention repose sur une hypothèse.',
      },
      blocks: [
        {
          title: 'Habitat collectif : cartographier d’abord',
          html: `<p>Dans les ensembles de grande taille, la circulation verticale par les gaines techniques est au moins aussi importante que la circulation entre voisins de palier. Un contrôle limité aux logements contigus laisse régulièrement passer des foyers situés deux étages plus haut.</p>
          <p>La <a href="/detection-canine-punaises-de-lit">détection canine</a> permet de couvrir ce périmètre élargi dans un temps raisonnable, avec vérification visuelle de chaque marquage.</p>`,
        },
        {
          title: 'Résidences universitaires',
          html: `<p>Le pôle universitaire génère un parc de logements à rotation annuelle, avec des occupants qui hésitent souvent à signaler. Le contrôle par bloc, conduit pendant les périodes creuses, est nettement plus efficace que l’intervention sur signalement isolé.</p>
          <p>Le protocole figure sur la page <a href="/punaises-de-lit-residence-etudiante">résidence étudiante</a>.</p>`,
        },
        {
          title: 'Coordination avec les gestionnaires',
          html: `<p>Pour les gestionnaires de parc, nous fournissons des comptes rendus comparables par logement, un périmètre recommandé et un calendrier. Ces éléments permettent d’arbitrer sur des faits plutôt que sur l’ordre d’arrivée des réclamations.</p>`,
        },
      ],
      points: [
        'Le logement signalé et sa colonne technique',
        'Les logements mitoyens et superposés',
        'Les parties communes et locaux de stockage',
        'Les logements étudiants du même bloc',
        'Les logements vacants lors des rotations',
        'Les laveries et locaux communs',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Évry-Courcouronnes',
      faq: [
        {
          q: 'Pourquoi contrôler des logements non contigus ?',
          a: 'Parce que les colonnes techniques relient verticalement des logements séparés par plusieurs étages. Ignorer ce réseau conduit à traiter une partie du bâtiment pendant qu’une autre réalimente l’infestation.',
        },
        {
          q: 'Les résidents doivent-ils préparer leur logement ?',
          a: 'Oui, selon une consigne écrite remise avant l’intervention. Une préparation mal suivie est la première cause d’échec d’un traitement, quelle que soit la méthode retenue.',
        },
        {
          q: 'Peut-on planifier une opération pendant les vacances ?',
          a: 'C’est souvent la meilleure option pour les résidences : logements vides, accès simple et pas de relogement à organiser.',
        },
      ],
      related: [
        { label: 'Punaises de lit en Essonne (91)', href: '/punaises-de-lit-essonne-91' },
        { label: 'Punaises de lit à Massy', href: '/punaises-de-lit-massy' },
        { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un bâtiment concerné à Évry-Courcouronnes ?',
      ctaText: 'Nous cartographions le périmètre réel, colonnes techniques comprises, avant toute intervention.',
    }),

    contentPage({
      url: '/punaises-de-lit-meaux',
      h1: 'Punaises de lit à Meaux',
      title: 'Punaises de lit Meaux (77) — diagnostic et traitement',
      description:
        'Traitement des punaises de lit à Meaux : centre historique, habitat mixte, maisons de ville et logements collectifs. Diagnostic, détection canine, traitement thermique.',
      eyebrow: 'Seine-et-Marne · 77',
      tag: 'ville-meaux',
      priority: 0.5,
      crumbs: [IDF, { label: 'Seine-et-Marne (77)', href: '/punaises-de-lit-seine-et-marne-77' }, { label: 'Meaux' }],
      serviceName: 'Traitement des punaises de lit à Meaux',
      lead: 'Ville moyenne au bâti hétérogène, Meaux associe un centre ancien, des quartiers collectifs et un tissu pavillonnaire. Les interventions y demandent d’identifier d’abord dans quelle configuration on se trouve.',
      quick: {
        question: 'Comment se déroulent les interventions à Meaux ?',
        answer:
          'Elles commencent toujours par la délimitation : maison individuelle, maison de ville mitoyenne ou logement collectif. Le périmètre du traitement en découle directement — interne au logement dans le premier cas, élargi aux logements liés dans les deux autres.',
      },
      blocks: [
        {
          title: 'Centre ancien et maisons de ville',
          html: `<p>Dans le centre, les logements sont souvent mitoyens et superposés, dans des immeubles de petite taille. Ce format est favorable : quand plusieurs logements sont concernés, une opération complète reste organisable en quelques jours.</p>
          <p>Le bâti ancien apporte ses spécificités — jeux de parquet, plinthes, cloisons anciennes — qui orientent l’inspection au-delà du seul couchage.</p>`,
        },
        {
          title: 'Quartiers collectifs',
          html: `<p>Dans les ensembles collectifs, la règle habituelle s’applique : contrôler les logements liés avant de traiter, puis traiter simultanément ceux qui sont confirmés. La démarche est détaillée sur la page <a href="/punaises-de-lit-immeuble">immeuble</a>.</p>`,
        },
        {
          title: 'Pavillons et maisons individuelles',
          html: `<p>Hors mitoyenneté, le périmètre se limite au logement, mais le volume augmente et les textiles se multiplient. Combles, garages et chambres peu utilisées font partie intégrante du diagnostic.</p>
          ${callout({
            variant: 'sand',
            icon: 'clock',
            title: 'Délais et distances',
            text: 'La Seine-et-Marne est étendue. Nous groupons les déplacements lorsque c’est possible et préparons le matériel complet en amont, pour éviter un second passage. Le délai annoncé au premier appel tient compte de ces contraintes.',
          })}`,
        },
      ],
      points: [
        'Les logements mitoyens et superposés du centre ancien',
        'Les jeux de parquet et plinthes du bâti ancien',
        'Les logements liés en habitat collectif',
        'Toutes les chambres des pavillons',
        'Les combles, garages et zones de stockage',
        'Les textiles et valises rangés',
      ],
      aside: services,
      pointsTitle: 'Ce que nous contrôlons à Meaux',
      faq: [
        {
          q: 'Intervenez-vous dans les communes autour de Meaux ?',
          a: 'Oui, dans le secteur et plus largement en Seine-et-Marne, avec des délais adaptés à la distance. Le premier échange permet de préciser le calendrier.',
        },
        {
          q: 'Une maison de ville mitoyenne est-elle exposée au voisin ?',
          a: 'Un mur mitoyen peut servir de passage, en particulier si l’infestation est installée à proximité. Cela mérite d’en parler au voisin, avec un argument technique plutôt qu’un reproche.',
        },
        {
          q: 'Un contrôle avant emménagement est-il possible ?',
          a: 'Oui, et c’est rapide dans un logement vide. C’est une précaution utile, notamment lorsque des couchages sont laissés sur place par le précédent occupant.',
        },
      ],
      related: [
        { label: 'Punaises de lit en Seine-et-Marne (77)', href: '/punaises-de-lit-seine-et-marne-77' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Punaises de lit et déménagement', href: '/blog/punaises-de-lit-demenagement' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un logement concerné à Meaux ?',
      ctaText: 'Centre ancien, collectif ou pavillon : nous adaptons le périmètre et la méthode à votre configuration.',
    }),
  ];
}
