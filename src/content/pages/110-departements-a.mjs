import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist } from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';
import { citiesOf } from '../../lib/cities.mjs';

const IDF = { label: 'Île-de-France', href: '/punaises-de-lit-ile-de-france' };
const cityLinks = (code) => citiesOf(code).map((c) => ({ label: `Punaises de lit à ${c.name}`, href: `/${c.slug}` }));

export default function () {
  return [
    /* ---------------------------------------------------- 75 Paris ------ */
    contentPage({
      url: '/punaises-de-lit-paris-75',
      h1: 'Punaises de lit à Paris (75) : l’habitat ancien et la densité',
      title: 'Punaises de lit Paris 75 — détection et traitement',
      description:
        'Traitement des punaises de lit à Paris (75) : immeubles anciens, petites surfaces, colocations et meublés. Diagnostic, détection canine, thermique.',
      eyebrow: 'Département 75',
      tag: 'dept75',
      priority: 0.8,
      crumbs: [IDF, { label: 'Paris (75)' }],
      serviceName: 'Traitement des punaises de lit à Paris',
      lead: 'Paris réunit presque tous les facteurs qui compliquent une infestation : un bâti ancien plein de fissures, des logements mitoyens sur tous les côtés, des surfaces réduites où le lit touche les murs, et une rotation locative permanente.',
      quick: {
        question: 'Pourquoi les punaises de lit sont-elles fréquentes à Paris ?',
        answer:
          'La densité de l’habitat collectif y joue un rôle majeur : un logement infesté expose ses mitoyens par les plinthes, les gaines et les paliers. S’y ajoutent une mobilité résidentielle élevée, un parc locatif meublé important et des surfaces réduites où le couchage est en contact direct avec les murs et les rangements.',
      },
      blocks: [
        {
          title: 'Le bâti parisien : ce qui change concrètement',
          html: `<p>Dans un immeuble ancien, les cachettes ne manquent pas. Les parquets massifs présentent des jeux entre lames, les plinthes moulurées offrent des interstices continus le long des murs, et les cloisons anciennes laissent passer les insectes d’un logement à l’autre plus facilement qu’une cloison récente.</p>
          <p>Ce n’est pas une fatalité, mais cela impose une méthode : sur un diagnostic parisien, nous accordons systématiquement une attention particulière aux jonctions mur-plancher, aux moulures, aux encadrements et aux passages de canalisations, en plus du couchage lui-même.</p>
          <p>L’autre spécificité est la surface. Dans un studio ou un deux-pièces, le lit est souvent collé à un mur, entouré de rangements, parfois surmonté d’une mezzanine. Tout est à moins d’un mètre : l’infestation atteint rapidement l’ensemble du logement.</p>`,
        },
        {
          title: 'Locations meublées et rotation',
          html: `<p>Paris concentre une part importante de locations meublées, de colocations et de locations de courte durée. Chaque changement d’occupant est une occasion d’introduction — et le couchage, lui, reste en place.</p>
          <p>Pour les bailleurs et les gestionnaires, le contrôle entre deux occupations est la mesure la plus rentable. Nous détaillons ce protocole sur les pages <a href="/punaises-de-lit-location-saisonniere">location saisonnière</a> et <a href="/punaises-de-lit-agence-immobiliere">agence immobilière</a>.</p>
          ${callout({
            title: 'Le cas des colocations',
            text: 'Une colocation cumule plusieurs chambres, plusieurs rythmes et plusieurs réseaux de déplacements. Quand une chambre est confirmée, les autres doivent être contrôlées : une colocation se traite comme un petit immeuble, pas comme un logement unique.',
          })}`,
        },
        {
          title: 'Les contraintes d’intervention en ville dense',
          html: `<p>Intervenir à Paris pose des questions pratiques que nous anticipons systématiquement : stationnement pour le déchargement du matériel, escaliers étroits, absence d’ascenseur, puissance électrique disponible dans les logements anciens, et horaires compatibles avec le règlement de l’immeuble.</p>
          <p>Ces éléments sont abordés dès le premier échange, car ils conditionnent la faisabilité d’un <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> sur un étage élevé sans ascenseur, ou la durée d’immobilisation du logement.</p>
          ${photo({
            name: 'paris-immeuble-ancien-chambre',
            alt: 'Chambre d’un appartement parisien ancien avec parquet et plinthes en cours d’inspection',
            brief: 'Chambre parisienne typique : parquet ancien, plinthe moulurée, lit contre le mur, technicien inspectant la jonction sol-mur.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Traiter un logement parisien sans ignorer l’immeuble',
          html: `<p>C’est le point le plus important, et le plus souvent négligé. Dans un immeuble parisien, les logements communiquent par plus de chemins qu’ailleurs : plinthes, gaines, conduits, planchers anciens. Traiter un appartement en ignorant ses mitoyens revient fréquemment à repartir de zéro quelques mois plus tard.</p>
          <p>Nous proposons donc, dès qu’un faisceau d’indices le justifie, un contrôle des logements exposés — par <a href="/detection-canine-punaises-de-lit">détection canine</a> lorsque le nombre de lots le rend pertinent. La démarche complète est décrite sur la page <a href="/punaises-de-lit-immeuble">immeuble</a>.</p>`,
        },
      ],
      points: [
        'Les jonctions mur-plancher et les plinthes moulurées',
        'Les jeux entre lames de parquet ancien',
        'Les rangements intégrés et les mezzanines',
        'Les logements mitoyens, au-dessus et en dessous',
        'Les parties communes et les locaux de stockage',
        'Les lots en location meublée ou courte durée de l’immeuble',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'clock',
        title: 'Signaler tôt, à Paris plus qu’ailleurs',
        text: `Dans un immeuble dense, chaque semaine d’attente augmente le nombre de lots potentiellement exposés.

Un signalement précoce au syndic ou au gestionnaire ne met personne en cause : il permet de contenir une infestation avant qu’elle ne devienne une opération sur l’ensemble du bâtiment.`,
      }),
      faq: [
        {
          q: 'Intervenez-vous dans tous les arrondissements ?',
          a: 'Oui, dans l’ensemble des arrondissements parisiens. Les contraintes pratiques (stationnement, accès, étage sans ascenseur) sont évaluées lors du premier échange afin de prévoir le matériel adapté.',
        },
        {
          q: 'Un studio se traite-t-il plus vite ?',
          a: 'Pas nécessairement. La surface est plus faible, mais la densité de mobilier et de textiles y est souvent élevée, et la préparation demande autant de rigueur. En revanche, le périmètre est plus simple à délimiter.',
        },
        {
          q: 'Mon immeuble est ancien : le traitement thermique est-il possible ?',
          a: 'Souvent oui, mais cela dépend de l’isolation, du volume et de la puissance électrique disponible. Ces points sont vérifiés lors du diagnostic, avant tout engagement, car ils conditionnent la faisabilité réelle de la méthode.',
        },
      ],
      related: [
        ...cityLinks('75'),
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Punaises de lit à Paris (article)', href: '/blog/punaises-de-lit-paris' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Un logement parisien concerné ?',
      ctaText: 'Nous évaluons l’étendue réelle, y compris le risque lié aux logements mitoyens, avant de proposer un traitement.',
    }),

    /* ------------------------------------------- 92 Hauts-de-Seine ------ */
    contentPage({
      url: '/punaises-de-lit-hauts-de-seine-92',
      h1: 'Punaises de lit dans les Hauts-de-Seine (92)',
      title: 'Punaises de lit Hauts-de-Seine 92 — détection et traitement',
      description:
        'Traitement des punaises de lit dans les Hauts-de-Seine (92) : copropriétés denses, parc tertiaire et logements étudiants. Diagnostic et détection canine.',
      eyebrow: 'Département 92',
      tag: 'dept92',
      priority: 0.75,
      crumbs: [IDF, { label: 'Hauts-de-Seine (92)' }],
      serviceName: 'Traitement des punaises de lit dans les Hauts-de-Seine',
      lead: 'Les Hauts-de-Seine combinent un habitat collectif dense, un parc tertiaire important et des secteurs pavillonnaires. Trois contextes qui appellent trois façons différentes d’aborder une infestation.',
      quick: {
        question: 'Comment se présentent les infestations dans les Hauts-de-Seine ?',
        answer:
          'Majoritairement en copropriété : immeubles des années 60 à 90, résidences avec parties communes étendues et logements familiaux. Le département compte aussi un parc tertiaire important, où les signalements concernent les salles de repos et les assises en tissu plutôt que des foyers installés.',
      },
      blocks: [
        {
          title: 'Copropriétés : le sujet principal',
          html: `<p>L’essentiel de notre activité dans le 92 concerne des copropriétés. Le schéma est souvent le même : un lot signale, le traitement est réalisé, et quelques mois plus tard un lot voisin signale à son tour. Ce n’est pas un échec technique, c’est un périmètre mal évalué au départ.</p>
          <p>Nous proposons donc systématiquement, lorsque le contexte le justifie, un contrôle des lots exposés avant l’intervention. Sur des résidences de plusieurs dizaines de logements, la <a href="/detection-canine-punaises-de-lit">détection canine</a> rend ce contrôle réalisable en une session au lieu de plusieurs journées.</p>`,
        },
        {
          title: 'Résidences familiales et logements étudiants',
          html: `<p>Le département accueille à la fois des logements familiaux de grande taille et des studios étudiants. Les problématiques diffèrent : dans un logement familial, l’enjeu est la multiplicité des chambres et des textiles ; dans un studio, c’est la proximité immédiate entre couchage, rangements et bureau.</p>
          <p>Pour les résidences étudiantes et les logements gérés, l’approche par bloc décrite sur la page <a href="/punaises-de-lit-residence-etudiante">résidence étudiante</a> s’applique directement.</p>`,
        },
        {
          title: 'Le parc tertiaire',
          html: `<p>Avec ses quartiers d’affaires, le 92 génère des demandes spécifiques : signalement dans une salle de repos, doute sur un siège en tissu, inquiétude après un retour de déplacement. Ces situations se traitent par un contrôle ciblé, sans mobiliser l’ensemble du site.</p>
          <p>Le point de vigilance réel n’est pas l’installation durable dans les bureaux — rare, faute d’occupant qui y dort — mais la diffusion vers le domicile des salariés. Les modalités sont décrites sur la page <a href="/punaises-de-lit-entreprise">entreprise</a>.</p>
          ${photo({
            name: 'hauts-de-seine-copropriete',
            alt: 'Résidence en copropriété des Hauts-de-Seine où une intervention punaises de lit est planifiée',
            brief: 'Hall ou palier de résidence collective des années 70-80, technicien avec matériel.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Les lots mitoyens et superposés dans les copropriétés',
        'Les colonnes techniques et locaux communs des résidences',
        'Les chambres multiples dans les logements familiaux',
        'Les studios et logements étudiants',
        'Les salles de repos et assises des locaux tertiaires',
        'Les logements meublés en rotation rapide',
      ],
      aside: checklist([
        'Diagnostic et cartographie des lots concernés',
        'Détection canine sur les résidences de plusieurs lots',
        'Traitement thermique lorsque la configuration s’y prête',
        'Interventions coordonnées sur plusieurs logements',
        'Contrôles après traitement',
        'Interventions en dehors des heures pour les locaux professionnels',
      ]),
      faq: [
        {
          q: 'Intervenez-vous pour les syndics du département ?',
          a: 'Oui. Nous établissons une cartographie des lots confirmés et exposés, un périmètre recommandé et un plan d’intervention, présentés de façon à pouvoir être soumis à un conseil syndical. Voir la page syndic de copropriété.',
        },
        {
          q: 'Un immeuble récent est-il moins exposé ?',
          a: 'Les cloisons récentes limitent certains passages, mais elles n’empêchent pas la circulation par les gaines techniques, les paliers et les objets transportés. Un immeuble récent bien entretenu est plus simple à traiter, pas immunisé.',
        },
        {
          q: 'Pouvez-vous intervenir sur des bureaux le week-end ?',
          a: 'Les interventions en locaux professionnels se planifient en dehors des heures d’activité, y compris en soirée ou en fin de semaine selon les contraintes du site.',
        },
      ],
      related: [
        ...cityLinks('92'),
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Punaises de lit en entreprise', href: '/punaises-de-lit-entreprise' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Une résidence ou un logement concerné dans le 92 ?',
      ctaText: 'Nous évaluons le périmètre réel avant d’intervenir, pour éviter les traitements qui ne tiennent pas.',
    }),

    /* ---------------------------------------- 93 Seine-Saint-Denis ------ */
    contentPage({
      url: '/punaises-de-lit-seine-saint-denis-93',
      h1: 'Punaises de lit en Seine-Saint-Denis (93)',
      title: 'Punaises de lit Seine-Saint-Denis 93 — détection et traitement',
      description:
        'Traitement des punaises de lit en Seine-Saint-Denis (93) : grands ensembles, immeubles collectifs, logements sociaux et copropriétés. Diagnostic, détection canine, traitement coordonné.',
      eyebrow: 'Département 93',
      tag: 'dept93',
      priority: 0.75,
      crumbs: [IDF, { label: 'Seine-Saint-Denis (93)' }],
      serviceName: 'Traitement des punaises de lit en Seine-Saint-Denis',
      lead: 'En Seine-Saint-Denis, la question se pose presque toujours à l’échelle du bâtiment. Les infestations que nous rencontrons y sont rarement isolées à un seul logement, et c’est ce qui doit guider la méthode.',
      quick: {
        question: 'Comment traiter une infestation dans un grand ensemble ?',
        answer:
          'En contrôlant le cercle de logements exposés autour du logement signalé — mitoyens, superposés, reliés par une colonne technique — puis en traitant simultanément ceux qui sont confirmés. Traiter un logement isolé dans un bâtiment concerné conduit presque toujours à une recolonisation en quelques mois.',
      },
      blocks: [
        {
          title: 'L’échelle du bâtiment plutôt que du logement',
          html: `<p>Dans les immeubles collectifs de grande taille, les chemins de circulation sont nombreux : gaines techniques verticales, vide-ordures, paliers, coursives, locaux communs. Une infestation localisée à un étage peut, en quelques mois, concerner plusieurs niveaux.</p>
          <p>Notre démarche consiste donc à établir une cartographie avant d’intervenir : quels logements sont confirmés, lesquels sont exposés, quelles parties communes servent de passage. Cette cartographie détermine ensuite le périmètre et l’ordre des interventions, comme décrit sur la page <a href="/punaises-de-lit-immeuble">immeuble</a>.</p>`,
        },
        {
          title: 'Bailleurs, gestionnaires et copropriétés',
          html: `<p>Nous intervenons aussi bien pour des particuliers que pour des gestionnaires de parc. Dans le second cas, le besoin est différent : il faut des comptes rendus comparables d’un logement à l’autre, un calendrier tenable et des consignes identiques pour tous les occupants concernés.</p>
          <p>Nous fournissons un constat par logement distinguant les zones confirmées, les zones signalées non confirmées et les zones contrôlées sans signalement. C’est ce qui permet de prioriser sans discuter à l’aveugle.</p>
          ${callout({
            title: 'Lever le silence',
            text: 'Le principal obstacle dans l’habitat collectif n’est pas technique : beaucoup d’occupants ne signalent pas, par crainte d’être tenus pour responsables. Rappeler que les punaises de lit ne sont pas liées à l’hygiène et que le signalement n’entraîne pas de mise en cause change le taux de remontée, donc la qualité du traitement.',
          })}`,
        },
        {
          title: 'Des interventions organisées',
          html: `<p>Sur des opérations à plusieurs logements, la logistique compte : accès, créneaux, information des occupants, gestion des relogements temporaires pendant la durée de l’intervention. Nous planifions ces éléments en amont plutôt que de les découvrir le jour même.</p>
          <p>Les méthodes retenues suivent le diagnostic : <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> lorsque la configuration le permet, approche combinée dans les autres cas, avec traitement systématique des points de passage entre logements.</p>
          ${photo({
            name: 'seine-saint-denis-collectif',
            alt: 'Immeuble collectif de Seine-Saint-Denis faisant l’objet d’une intervention coordonnée',
            brief: 'Coursive ou palier d’immeuble collectif, matériel d’intervention, plusieurs portes visibles.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Le logement signalé et son cercle de logements exposés',
        'Les gaines techniques et colonnes verticales',
        'Les paliers, coursives et locaux communs',
        'Les logements vacants du même bâtiment',
        'Les caves et locaux de stockage',
        'Les logements meublés et sous-locations du bâtiment',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'people',
        title: 'Travailler avec les occupants',
        text: `Une opération collective réussie repose sur trois conditions : une information claire en amont, des consignes de préparation identiques pour tous, et un calendrier tenu.

Les échecs que nous constatons viennent rarement de la technique et presque toujours de l’un de ces trois points.`,
      }),
      faq: [
        {
          q: 'Peut-on traiter un seul logement dans un immeuble concerné ?',
          a: 'C’est techniquement possible, mais nous le disons clairement au client : si des logements voisins sont concernés et non traités, le résultat ne tiendra pas. Nous préférons l’annoncer avant plutôt que de le constater après.',
        },
        {
          q: 'Travaillez-vous avec des bailleurs sociaux ?',
          a: 'Nous intervenons pour des gestionnaires de parc et des copropriétés. Les modalités contractuelles dépendent de chaque organisation ; la partie technique reste la même : cartographier, coordonner, contrôler.',
        },
        {
          q: 'Combien de temps dure une opération sur plusieurs logements ?',
          a: 'Elle se planifie en fonction du nombre de logements et des accès. La règle que nous appliquons est que les logements liés entre eux soient traités dans une même fenêtre de temps, jamais étalés sur plusieurs mois.',
        },
      ],
      related: [
        ...cityLinks('93'),
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Plusieurs logements concernés dans votre bâtiment ?',
      ctaText: 'Nous établissons la cartographie et un plan d’intervention coordonné, avec des comptes rendus comparables par logement.',
    }),

    /* ---------------------------------------------- 94 Val-de-Marne ----- */
    contentPage({
      url: '/punaises-de-lit-val-de-marne-94',
      h1: 'Punaises de lit dans le Val-de-Marne (94)',
      title: 'Punaises de lit Val-de-Marne 94 — détection et traitement',
      description:
        'Traitement des punaises de lit dans le Val-de-Marne (94) : copropriétés des années 60-70, pavillons et résidences étudiantes. Diagnostic et détection canine.',
      eyebrow: 'Département 94',
      tag: 'dept94',
      priority: 0.75,
      crumbs: [IDF, { label: 'Val-de-Marne (94)' }],
      serviceName: 'Traitement des punaises de lit dans le Val-de-Marne',
      lead: 'Le Val-de-Marne alterne grandes copropriétés des années 60-70, tissus pavillonnaires et résidences étudiantes. Chaque configuration a ses points faibles, et il vaut mieux les connaître avant d’intervenir.',
      quick: {
        question: 'Quelles particularités dans le Val-de-Marne ?',
        answer:
          'Beaucoup de copropriétés construites entre 1960 et 1980, avec des colonnes techniques communes et des cloisons qui facilitent la circulation entre logements. À côté, un tissu pavillonnaire où l’enjeu est différent : pas de mitoyenneté, mais des volumes plus grands et des textiles stockés.',
      },
      blocks: [
        {
          title: 'Les copropriétés des années 60-70',
          html: `<p>Ces ensembles partagent des caractéristiques qui comptent pour une infestation : gaines techniques verticales traversant plusieurs niveaux, cloisons légères, plinthes continues et, souvent, des travaux d’entretien qui ont créé des passages supplémentaires.</p>
          <p>Le diagnostic porte donc autant sur le logement que sur ses connexions : quelle colonne le traverse, quels logements partagent ce réseau, quels lots ont déjà signalé par le passé. Un historique de bâtiment vaut souvent plus qu’une heure d’inspection supplémentaire.</p>`,
        },
        {
          title: 'Le tissu pavillonnaire',
          html: `<p>Dans les secteurs pavillonnaires, l’absence de mitoyenneté est un avantage réel : une fois le traitement fait correctement, il n’y a pas de source extérieure pour réalimenter l’infestation. Le risque devient interne.</p>
          <p>Ce sont alors les textiles stockés, les chambres peu utilisées et les valises rangées après un voyage qui posent problème. La méthode décrite sur la page <a href="/punaises-de-lit-maison">maison</a> s’applique : délimiter les pièces réellement concernées, traiter, et surtout gérer le circuit des textiles.</p>`,
        },
        {
          title: 'Résidences étudiantes et logements en rotation',
          html: `<p>Le département accueille des résidences étudiantes et des logements en rotation rapide, où l’enjeu est le contrôle entre deux occupations plutôt que le traitement curatif. Quelques minutes de vérification du couchage lors de chaque remise en état détectent l’essentiel des introductions avant qu’elles ne s’installent.</p>
          <p>Le protocole complet figure sur la page <a href="/punaises-de-lit-residence-etudiante">résidence étudiante</a>.</p>
          ${photo({
            name: 'val-de-marne-residence',
            alt: 'Résidence du Val-de-Marne où un diagnostic punaises de lit est réalisé',
            brief: 'Immeuble de copropriété années 60-70, entrée ou palier, technicien avec sacoche de diagnostic.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Les colonnes techniques et les logements qu’elles relient',
        'Les plinthes continues et les cloisons légères',
        'L’historique de signalements du bâtiment',
        'Les chambres peu utilisées dans les pavillons',
        'Les textiles et valises stockés',
        'Les logements en rotation rapide',
      ],
      aside: checklist([
        'Diagnostic avec historique du bâtiment',
        'Détection canine sur plusieurs logements',
        'Traitement thermique ou approche combinée selon la configuration',
        'Traitement des points de passage entre logements',
        'Consignes de préparation écrites',
        'Contrôle après traitement',
      ]),
      faq: [
        {
          q: 'Faut-il contrôler les logements du dessus et du dessous ?',
          a: 'Dans une copropriété avec colonnes techniques, oui : la circulation verticale est au moins aussi fréquente que la circulation horizontale. C’est un réflexe que nous appliquons systématiquement sur ce type de bâti.',
        },
        {
          q: 'Un pavillon est-il plus simple à traiter ?',
          a: 'Le périmètre est plus simple à maîtriser, mais le volume est souvent plus important et les textiles plus nombreux. La difficulté se déplace : moins de coordination, plus de logistique interne.',
        },
        {
          q: 'Intervenez-vous pour des résidences gérées ?',
          a: 'Oui, avec des comptes rendus par logement et une planification par groupes de logements liés entre eux, comme pour toute opération collective.',
        },
      ],
      related: [
        ...cityLinks('94'),
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Un logement concerné dans le 94 ?',
      ctaText: 'Copropriété ou pavillon, le diagnostic détermine le périmètre réel avant toute proposition de traitement.',
    }),
  ];
}
