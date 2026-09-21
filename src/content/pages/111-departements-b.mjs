import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist } from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';
import { citiesOf } from '../../lib/cities.mjs';

const IDF = { label: 'Île-de-France', href: '/punaises-de-lit-ile-de-france' };
const cityLinks = (code) => citiesOf(code).map((c) => ({ label: `Punaises de lit à ${c.name}`, href: `/${c.slug}` }));

export default function () {
  return [
    /* ------------------------------------------------- 95 Val-d'Oise --- */
    contentPage({
      url: '/punaises-de-lit-val-doise-95',
      h1: 'Punaises de lit dans le Val-d’Oise (95)',
      title: 'Punaises de lit Val-d’Oise 95 — détection et traitement',
      description:
        'Traitement des punaises de lit dans le Val-d’Oise (95) : pavillons, résidences récentes et hébergements à forte rotation. Diagnostic et détection canine.',
      eyebrow: 'Département 95',
      tag: 'dept95',
      priority: 0.7,
      crumbs: [IDF, { label: 'Val-d’Oise (95)' }],
      serviceName: 'Traitement des punaises de lit dans le Val-d’Oise',
      lead: 'Le Val-d’Oise mêle secteurs pavillonnaires, villes nouvelles et habitat collectif, avec une particularité : la proximité d’une grande zone aéroportuaire, et donc un parc d’hébergement à forte rotation.',
      quick: {
        question: 'Quelles situations rencontre-t-on dans le Val-d’Oise ?',
        answer:
          'Trois profils dominent : des pavillons où l’infestation reste interne au logement, des résidences de villes nouvelles avec une organisation collective, et des hébergements à forte rotation près des pôles de transport, où le risque d’introduction par les bagages est permanent.',
      },
      blocks: [
        {
          title: 'Pavillons et maisons de ville',
          html: `<p>Sans mitoyenneté, une maison traitée correctement n’a pas de source extérieure de réalimentation. La difficulté est ailleurs : plusieurs chambres à contrôler, des combles ou des sous-sols servant au stockage, et des textiles rangés d’une saison à l’autre.</p>
          <p>Le diagnostic commence donc par une délimitation : quelles pièces sont réellement concernées. La <a href="/detection-canine-punaises-de-lit">détection canine</a> fait gagner beaucoup de temps quand cinq ou six pièces doivent être contrôlées. Le détail figure sur la page <a href="/punaises-de-lit-maison">maison</a>.</p>`,
        },
        {
          title: 'Résidences et villes nouvelles',
          html: `<p>Les ensembles résidentiels des villes nouvelles présentent souvent une organisation par bâtiments et par blocs, avec des parties communes étendues. Cette organisation est un atout : elle permet de définir un périmètre clair et de coordonner une intervention sur un groupe de logements liés entre eux.</p>
          <p>L’approche est celle décrite sur la page <a href="/punaises-de-lit-immeuble">immeuble</a> : cartographier, traiter simultanément ce qui communique, contrôler ensuite.</p>`,
        },
        {
          title: 'Hébergements à forte rotation',
          html: `<p>La proximité d’un grand pôle aéroportuaire alimente un parc d’hôtels et de locations de courte durée dont la rotation est très élevée, avec des voyageurs venant de partout. Le risque n’est pas théorique : chaque valise est un vecteur potentiel.</p>
          <p>Pour ces établissements, le sujet n’est pas seulement curatif. Un protocole de contrôle entre deux séjours et une formation des équipes de ménage à la reconnaissance des traces réduisent considérablement le nombre de signalements clients. Voir les pages <a href="/punaises-de-lit-hotel">hôtel</a> et <a href="/punaises-de-lit-location-saisonniere">location saisonnière</a>.</p>
          ${photo({
            name: 'val-doise-hebergement',
            alt: 'Contrôle d’une chambre d’hébergement à forte rotation dans le Val-d’Oise',
            brief: 'Chambre d’hôtel ou d’hébergement standardisé, porte-bagages métallique, contrôle du couchage.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Toutes les chambres des maisons, y compris celles peu utilisées',
        'Les combles, garages et zones de stockage textile',
        'Les logements liés par bloc dans les résidences',
        'Les chambres à forte rotation des hébergements',
        'Les porte-bagages et zones de dépôt de valises',
        'Les locaux communs des résidences',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'clock',
        title: 'Distances et délais',
        text: `Le Val-d’Oise est étendu et les délais d’intervention peuvent varier selon la commune et la période.

Nous vous annonçons un délai réaliste dès le premier échange plutôt qu’une promesse d’intervention immédiate qui ne serait pas tenue.`,
      }),
      faq: [
        {
          q: 'Intervenez-vous dans les communes rurales du département ?',
          a: 'Oui, sous réserve des délais liés à la distance. Le premier échange téléphonique permet de préciser la faisabilité et le calendrier pour votre commune.',
        },
        {
          q: 'Une maison isolée peut-elle être infestée ?',
          a: 'Oui : les punaises de lit sont transportées, pas attirées par l’environnement. Un bagage, un meuble d’occasion ou un séjour à l’extérieur suffisent, quelle que soit l’implantation du logement.',
        },
        {
          q: 'Proposez-vous des contrôles réguliers pour les hébergements ?',
          a: 'Oui. Nous définissons avec l’établissement une fréquence et un périmètre ciblés sur les chambres à forte rotation, plutôt qu’un balayage général peu opérant.',
        },
      ],
      related: [
        ...cityLinks('95'),
        { label: 'Punaises de lit en hôtel', href: '/punaises-de-lit-hotel' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Location saisonnière', href: '/punaises-de-lit-location-saisonniere' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Un logement ou un établissement concerné dans le 95 ?',
      ctaText: 'Décrivez-nous la situation : nous vous indiquons la méthode adaptée et un délai réaliste pour votre commune.',
    }),

    /* -------------------------------------------------- 78 Yvelines ---- */
    contentPage({
      url: '/punaises-de-lit-yvelines-78',
      h1: 'Punaises de lit dans les Yvelines (78)',
      title: 'Punaises de lit Yvelines 78 — détection et traitement',
      description:
        'Traitement des punaises de lit dans les Yvelines (78) : maisons familiales, bâti ancien et logements étudiants. Diagnostic, détection canine, thermique.',
      eyebrow: 'Département 78',
      tag: 'dept78',
      priority: 0.7,
      crumbs: [IDF, { label: 'Yvelines (78)' }],
      serviceName: 'Traitement des punaises de lit dans les Yvelines',
      lead: 'Les Yvelines se caractérisent par une part importante de maisons individuelles et de bâti ancien, avec des centres-villes historiques et un parc locatif étudiant concentré autour des pôles universitaires.',
      quick: {
        question: 'Quelles particularités dans les Yvelines ?',
        answer:
          'Beaucoup de maisons familiales, où l’enjeu est de délimiter les pièces réellement concernées et de gérer le circuit des textiles. Et du bâti ancien en centre-ville, avec parquets, plinthes moulurées et mitoyennetés parfois complexes entre logements superposés.',
      },
      blocks: [
        {
          title: 'Maisons familiales : délimiter avant de traiter',
          html: `<p>Sur une maison de plusieurs chambres, l’erreur courante est de traiter tout le volume « par précaution » — coûteux et souvent inutile — ou au contraire de se limiter à la chambre où les piqûres ont été constatées, ce qui laisse les foyers secondaires en place.</p>
          <p>Le diagnostic commence donc par un contrôle pièce par pièce. Les chambres d’amis peu utilisées méritent une attention particulière : un foyer peut y rester discret plusieurs mois avant de se manifester lors d’une visite.</p>`,
        },
        {
          title: 'Bâti ancien des centres-villes',
          html: `<p>Dans les centres anciens, les problématiques rejoignent celles de <a href="/punaises-de-lit-paris-75">Paris</a> : parquets à jeux, plinthes moulurées, cloisons anciennes et logements superposés dans des immeubles de petite taille.</p>
          <p>La bonne nouvelle est que ces immeubles comptent souvent peu de lots, ce qui rend une opération coordonnée beaucoup plus simple à organiser qu’en grande copropriété. Quand trois ou quatre logements sont concernés, tout traiter dans la même semaine est réaliste.</p>`,
        },
        {
          title: 'Logements étudiants et hébergements',
          html: `<p>Les pôles universitaires génèrent un parc de studios et de colocations en rotation annuelle. Comme ailleurs, le moment clé est la remise en location : un contrôle du couchage à ce moment-là détecte l’essentiel des introductions.</p>
          <p>Le département accueille également des hébergements touristiques, pour lesquels le protocole de contrôle entre séjours décrit sur la page <a href="/punaises-de-lit-hotel">hôtel</a> s’applique directement.</p>
          ${photo({
            name: 'yvelines-maison-familiale',
            alt: 'Diagnostic punaises de lit dans une maison familiale des Yvelines',
            brief: 'Maison individuelle, chambre à l’étage, technicien contrôlant un lit et une armoire.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Toutes les chambres, y compris celles peu utilisées',
        'Les dressings, penderies et linge stocké',
        'Les parquets et plinthes du bâti ancien',
        'Les logements superposés dans les petits immeubles',
        'Les studios et colocations étudiantes',
        'Les hébergements touristiques à rotation rapide',
      ],
      aside: checklist([
        'Diagnostic pièce par pièce sur les maisons',
        'Détection canine pour contrôler plusieurs chambres rapidement',
        'Traitement thermique lorsque le volume et l’accès le permettent',
        'Approche combinée sur le bâti ancien',
        'Consignes détaillées pour les textiles',
        'Contrôle après traitement',
      ]),
      faq: [
        {
          q: 'Faut-il traiter toute la maison ?',
          a: 'Rarement en totalité. Le traitement porte sur les zones confirmées et les zones à risque identifiées lors du diagnostic. Un périmètre bien établi vaut mieux qu’un traitement généralisé coûteux.',
        },
        {
          q: 'Un immeuble ancien de quatre logements se traite-t-il comme une grande copropriété ?',
          a: 'Le principe est identique — traiter simultanément ce qui communique — mais l’organisation est bien plus simple. Sur un petit immeuble, une opération complète en quelques jours est tout à fait réaliste.',
        },
        {
          q: 'Intervenez-vous dans tout le département ?',
          a: 'Oui, avec des délais qui varient selon l’éloignement. Nous vous précisons le calendrier possible dès le premier échange.',
        },
      ],
      related: [
        ...cityLinks('78'),
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Punaises de lit en hôtel', href: '/punaises-de-lit-hotel' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Une maison ou un logement concerné dans le 78 ?',
      ctaText: 'Nous délimitons les pièces réellement touchées avant de proposer un traitement adapté au volume.',
    }),

    /* --------------------------------------------------- 91 Essonne ---- */
    contentPage({
      url: '/punaises-de-lit-essonne-91',
      h1: 'Punaises de lit en Essonne (91)',
      title: 'Punaises de lit Essonne 91 — détection et traitement',
      description:
        'Traitement des punaises de lit en Essonne (91) : pavillons, copropriétés, résidences universitaires et logements en rotation. Diagnostic, détection canine, traitement thermique.',
      eyebrow: 'Département 91',
      tag: 'dept91',
      priority: 0.7,
      crumbs: [IDF, { label: 'Essonne (91)' }],
      serviceName: 'Traitement des punaises de lit en Essonne',
      lead: 'L’Essonne combine un habitat pavillonnaire étendu, des copropriétés de taille moyenne et une concentration importante de logements étudiants autour des pôles d’enseignement et de recherche.',
      quick: {
        question: 'Quelles situations rencontre-t-on en Essonne ?',
        answer:
          'Beaucoup de pavillons, où le traitement est interne au logement et où le circuit des textiles est déterminant. Et un parc de logements étudiants à forte rotation, où le contrôle lors des changements d’occupant évite la plupart des infestations installées.',
      },
      blocks: [
        {
          title: 'Résidences universitaires et logements étudiants',
          html: `<p>La concentration de campus et de résidences crée une configuration particulière : des logements nombreux, identiques et mitoyens, occupés par des personnes qui hésitent souvent à signaler.</p>
          <p>L’approche efficace est celle du contrôle par bloc décrite sur la page <a href="/punaises-de-lit-residence-etudiante">résidence étudiante</a> : dès qu’un logement est confirmé, contrôler l’unité pertinente plutôt que d’attendre le signalement suivant. Les périodes de rentrée et de vacances sont les meilleures fenêtres d’intervention.</p>`,
        },
        {
          title: 'Pavillons et maisons',
          html: `<p>Dans le tissu pavillonnaire, l’absence de mitoyenneté simplifie le périmètre mais déplace la difficulté vers le volume et les textiles. Combles, garages, buanderies et chambres peu utilisées font partie du diagnostic au même titre que les chambres principales.</p>
          <p>Le circuit du linge devient ici l’élément central : un carton de textiles non traité, rangé au garage pendant l’intervention, peut relancer la situation plusieurs semaines plus tard.</p>`,
        },
        {
          title: 'Copropriétés de taille moyenne',
          html: `<p>Sur des résidences de quelques dizaines de logements, la coordination est plus simple qu’en grand ensemble : le nombre de lots à contrôler reste maîtrisable, et un plan d’intervention sur une ou deux semaines est réaliste.</p>
          <p>C’est aussi le contexte où la <a href="/detection-canine-punaises-de-lit">détection canine</a> apporte le plus : contrôler quinze logements en une session permet de trancher immédiatement sur le périmètre, sans immobiliser le gestionnaire pendant des jours.</p>
          ${photo({
            name: 'essonne-residence-etudiante',
            alt: 'Contrôle d’un logement étudiant en Essonne dans le cadre d’une recherche de punaises de lit',
            brief: 'Studio étudiant : lit simple, bureau, étagères, contrôle du sommier à la lampe.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Les logements mitoyens dans les résidences étudiantes',
        'Les locaux communs : laverie, salle commune, local vélos',
        'Les chambres et textiles stockés dans les pavillons',
        'Les combles, garages et buanderies',
        'Les lots exposés dans les copropriétés',
        'Les logements vacants lors des rotations',
      ],
      aside: callout({
        icon: 'clock',
        title: 'Les fenêtres d’intervention',
        text: `Sur les résidences, les périodes de vacances universitaires sont les plus favorables : logements vides, accès simple, pas de relogement à organiser.

Anticiper une opération sur ces fenêtres coûte moins cher et perturbe beaucoup moins que d’intervenir en pleine occupation.`,
      }),
      faq: [
        {
          q: 'Intervenez-vous pour des gestionnaires de résidences ?',
          a: 'Oui, avec des comptes rendus par logement et une planification par groupes de logements liés entre eux. Le contrôle par bloc est généralement plus efficace que l’intervention sur signalement isolé.',
        },
        {
          q: 'Un logement étudiant se traite-t-il rapidement ?',
          a: 'Le volume est réduit, mais la densité de textiles et d’objets y est souvent forte. La préparation demande autant de soin que dans un logement plus grand ; en revanche, la durée d’intervention est généralement plus courte.',
        },
        {
          q: 'Les distances allongent-elles les délais ?',
          a: 'Elles peuvent les influencer selon la commune et la période. Nous annonçons un délai réaliste dès le premier échange.',
        },
      ],
      related: [
        ...cityLinks('91'),
        { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Un logement ou une résidence concernée dans le 91 ?',
      ctaText: 'Nous contrôlons le périmètre pertinent — logement, bloc ou bâtiment — avant de proposer une intervention.',
    }),

    /* -------------------------------------------- 77 Seine-et-Marne ---- */
    contentPage({
      url: '/punaises-de-lit-seine-et-marne-77',
      h1: 'Punaises de lit en Seine-et-Marne (77)',
      title: 'Punaises de lit Seine-et-Marne 77 — détection et traitement',
      description:
        'Traitement des punaises de lit en Seine-et-Marne (77) : maisons individuelles, villes moyennes et hébergements touristiques. Diagnostic et détection canine.',
      eyebrow: 'Département 77',
      tag: 'dept77',
      priority: 0.7,
      crumbs: [IDF, { label: 'Seine-et-Marne (77)' }],
      serviceName: 'Traitement des punaises de lit en Seine-et-Marne',
      lead: 'Le département le plus étendu d’Île-de-France présente un habitat majoritairement individuel, des villes moyennes avec du collectif, et une activité touristique qui génère un parc d’hébergement important.',
      quick: {
        question: 'Comment se déroulent les interventions en Seine-et-Marne ?',
        answer:
          'Elles concernent surtout des maisons individuelles, où le traitement reste interne au logement et où l’enjeu est de délimiter les pièces touchées. Les villes moyennes présentent aussi du collectif, et les zones touristiques un parc d’hébergement à forte rotation.',
      },
      blocks: [
        {
          title: 'Maisons et pavillons : la majorité des interventions',
          html: `<p>Dans une maison, la première question n’est pas « comment traiter » mais « jusqu’où ». Une infestation partie d’une chambre peut rester circonscrite pendant des mois ou s’étendre au reste du logement, selon la façon dont les occupants ont réagi et selon la circulation des textiles.</p>
          <p>Nous contrôlons donc l’ensemble des chambres, les espaces de stockage et les pièces de vie où l’on s’assoit longuement, avant de définir un périmètre. La méthode est détaillée sur la page <a href="/punaises-de-lit-maison">maison</a>.</p>`,
        },
        {
          title: 'Hébergements touristiques',
          html: `<p>L’activité touristique du département alimente un parc d’hôtels, de gîtes et de locations de courte durée. Ces établissements partagent une exposition structurelle : des voyageurs nombreux, une rotation rapide, et des signalements qui arrivent souvent après le départ du client.</p>
          <p>La réponse est la même qu’ailleurs : un contrôle systématique entre deux séjours, une formation des équipes de ménage à la reconnaissance des traces, et une réaction immédiate à tout signalement. Voir les pages <a href="/punaises-de-lit-hotel">hôtel</a> et <a href="/punaises-de-lit-location-saisonniere">location saisonnière</a>.</p>`,
        },
        {
          title: 'Distances et organisation',
          html: `<p>La Seine-et-Marne est vaste, et cela a des conséquences pratiques. Les interventions y sont organisées en tenant compte des temps de trajet : groupage des visites lorsque c’est possible, préparation matérielle complète en amont pour éviter un second déplacement, et communication d’un délai réaliste dès le premier appel.</p>
          <p>Nous préférons annoncer un délai tenable plutôt qu’une intervention immédiate qui ne pourrait pas être respectée.</p>
          ${photo({
            name: 'seine-et-marne-pavillon',
            alt: 'Intervention contre les punaises de lit dans un pavillon de Seine-et-Marne',
            brief: 'Pavillon de banlieue, matériel déchargé devant la maison, technicien préparant l’intervention.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Toutes les chambres de la maison',
        'Les espaces de stockage : combles, garage, buanderie',
        'Les canapés et fauteuils des pièces de vie',
        'Les valises et sacs de voyage',
        'Les chambres à forte rotation des hébergements',
        'Les logements collectifs des centres-villes',
      ],
      aside: checklist([
        'Diagnostic complet pièce par pièce',
        'Détection canine pour les volumes importants',
        'Traitement thermique selon le volume et l’accès',
        'Consignes détaillées pour le circuit des textiles',
        'Protocole de contrôle pour les hébergements',
        'Contrôle de vérification après traitement',
      ]),
      faq: [
        {
          q: 'Intervenez-vous dans les communes rurales du département ?',
          a: 'Oui, avec des délais adaptés à la distance. Le premier échange permet de préciser la faisabilité et le calendrier pour votre commune.',
        },
        {
          q: 'Un gîte ou une chambre d’hôtes se traite-t-il comme un hôtel ?',
          a: 'Le principe est le même : contrôle des chambres concernées et contiguës, traitement, puis protocole de vérification entre séjours. L’échelle est simplement plus réduite, ce qui rend le protocole plus facile à tenir.',
        },
        {
          q: 'Puis-je faire contrôler une maison avant achat ou emménagement ?',
          a: 'Oui, un contrôle dans un logement vide est rapide et donne une image claire, en particulier sur les couchages laissés sur place. C’est une précaution utile avant un emménagement.',
        },
      ],
      related: [
        ...cityLinks('77'),
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Punaises de lit en hôtel', href: '/punaises-de-lit-hotel' },
        { label: 'Punaises de lit et déménagement', href: '/blog/punaises-de-lit-demenagement' },
        { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Un logement ou un hébergement concerné dans le 77 ?',
      ctaText: 'Décrivez-nous la situation et votre commune : nous vous indiquons la méthode adaptée et un délai réaliste.',
    }),
  ];
}
