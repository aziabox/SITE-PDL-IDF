import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist, dataTable } from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';

const CRUMB = { label: 'Vous êtes', href: '/punaises-de-lit-particulier' };

export default function () {
  return [
    /* ------------------------------------------------- Particulier ------ */
    contentPage({
      url: '/punaises-de-lit-particulier',
      h1: 'Punaises de lit chez un particulier : par où commencer',
      title: 'Punaises de lit chez un particulier — diagnostic et traitement',
      description:
        'Vous suspectez des punaises de lit chez vous : comment vérifier, qui prévenir, ce qu’il ne faut surtout pas faire et comment se déroule une intervention.',
      eyebrow: 'Vous êtes particulier',
      tag: 'particulier',
      priority: 0.7,
      crumbs: [{ label: 'Particulier' }],
      serviceName: 'Traitement des punaises de lit pour les particuliers',
      lead: 'Découvrir des punaises de lit chez soi provoque d’abord un réflexe d’urgence. C’est précisément ce réflexe qu’il faut ralentir : la plupart des situations que nous rattrapons ont été aggravées dans les 48 heures qui ont suivi la découverte.',
      quick: {
        question: 'Que faire en découvrant des punaises de lit chez soi ?',
        answer:
          'Ne déplacez rien, ne jetez rien, n’achetez aucun produit. Photographiez ce que vous voyez, notez les pièces concernées, et faites établir un diagnostic. Déménager les affaires dans une autre pièce ou chez un proche est la principale cause d’extension d’une infestation.',
      },
      blocks: [
        {
          title: 'Les 48 premières heures',
          html: `<p>La panique conduit presque toujours aux mêmes gestes : sortir le matelas, vider la chambre, dormir au salon, acheter une bombe insecticide. Chacun de ces gestes aggrave la situation, pour une raison simple : il disperse une population concentrée.</p>
          <p>Ce qu’il faut faire à la place tient en quelques points :</p>
          ${checklist([
            'Photographier les traces et les insectes trouvés, avec un repère d’échelle',
            'Noter où vous avez été piqué et dans quelle pièce vous dormez',
            'Laver le linge du lit à haute température, puis le conserver dans des sacs fermés',
            'Laisser le reste en l’état jusqu’au diagnostic',
            'Prévenir le propriétaire ou le gestionnaire par écrit si vous êtes locataire',
          ])}`,
        },
        {
          title: 'Locataire ou propriétaire : ce que cela change',
          html: `<p>Si vous êtes <strong>locataire</strong>, signalez la situation par écrit au propriétaire ou à l’agence dès les premiers signes. Ce signalement daté est important : il établit la chronologie et déclenche la prise en charge. Conservez une copie.</p>
          <p>Si vous êtes <strong>propriétaire occupant</strong>, vous décidez directement de l’intervention. En copropriété, informez le syndic dès lors qu’un mur mitoyen ou une gaine technique peut être concerné — vos voisins sont exposés, et leur situation conditionne la durabilité de votre traitement.</p>
          ${callout({
            icon: 'doc',
            title: 'Sur le coût d’une intervention',
            text: 'Aucun tarif n’est affiché sur ce site tant qu’il n’a pas été validé par l’entreprise. Le prix dépend de la surface, du nombre de pièces, de la méthode retenue et du nombre de passages nécessaires. Méfiez-vous des forfaits annoncés au téléphone avant tout diagnostic : ils supposent que la situation est connue, ce qui n’est jamais le cas.',
          })}`,
        },
        {
          title: 'Comment se passe notre intervention chez vous',
          html: `<p>Le premier échange sert à comprendre : ce que vous observez, depuis quand, dans quelles pièces, ce que vous avez déjà tenté. Le diagnostic sur place confirme et localise, avec une <a href="/detection-canine-punaises-de-lit">détection canine</a> si la configuration le justifie.</p>
          <p>Vous recevez ensuite une explication claire : ce qui a été trouvé, où, les méthodes applicables et leurs limites. La <a href="/methodes-traitement-punaises-de-lit">méthode retenue</a> dépend de votre logement, pas d’un forfait décidé à l’avance. Une consigne de préparation vous est remise, puis l’intervention a lieu, et un contrôle est prévu ensuite.</p>
          ${photo({
            name: 'echange-client-explication',
            alt: 'Technicien expliquant le résultat du diagnostic à un occupant dans son logement',
            brief: 'Technicien montrant à un occupant les traces trouvées sur une structure de lit, échange calme.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Vivre avec l’attente',
          html: `<p>Entre le diagnostic et le traitement, il y a souvent quelques jours. Cette période est difficile à vivre, et les conseils habituels (« ne vous inquiétez pas ») n’aident pas beaucoup. Quelques éléments concrets, en revanche, aident réellement :</p>
          <ul>
            <li>Rester dans la même chambre évite d’ouvrir un second foyer ailleurs.</li>
            <li>Le linge lavé à haute température et conservé en sacs fermés reste sain.</li>
            <li>Les piqûres, même nombreuses, ne transmettent pas de maladie.</li>
            <li>La charge psychologique est réelle : en parler à votre médecin n’a rien d’excessif si le sommeil est durablement affecté.</li>
          </ul>`,
        },
      ],
      points: [
        'Votre couchage et le mobilier proche',
        'Les pièces voisines, pour évaluer l’extension',
        'Vos textiles et leur circuit de lavage',
        'Les points de passage vers les logements voisins',
        'Les traitements déjà tentés et leurs effets',
        'L’historique du logement et de l’immeuble',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'alert',
        title: 'Les produits du commerce',
        text: `Ils promettent un effet immédiat et produisent surtout une dispersion. Après une pulvérisation, les punaises quittent la zone traitée pour s’installer plus loin : autres pièces, plinthes, logement voisin.

Résultat fréquent : une infestation devenue plus étendue et plus difficile à traiter qu’au départ.`,
      }),
      faq: [
        {
          q: 'Dois-je prévenir mes voisins ?',
          a: 'En immeuble, oui, au moins le syndic ou le gestionnaire. Ce n’est pas une question de politesse mais d’efficacité : si un logement voisin est concerné, votre traitement sera recolonisé. Le signalement n’implique aucune faute de votre part.',
        },
        {
          q: 'Mes enfants ou mes animaux risquent-ils quelque chose ?',
          a: 'Les punaises de lit ne transmettent pas de maladie. Les réactions cutanées peuvent être marquées chez certains enfants. Pour les traitements, les méthodes physiques (chaleur, vapeur, aspiration) présentent l’avantage de ne pas laisser de dépôt dans le logement.',
        },
        {
          q: 'Combien de temps avant de retrouver une situation normale ?',
          a: 'Cela dépend de l’étendue et du contexte. Un logement isolé avec une infestation récente évolue plus vite qu’un lot dans un immeuble concerné. Nous vous donnons un calendrier réaliste après le diagnostic, avec les points de contrôle prévus.',
        },
      ],
      related: [
        { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Punaises de lit dans une maison', href: '/punaises-de-lit-maison' },
        { label: 'Combien coûte un traitement ?', href: '/blog/combien-coute-traitement-punaises-de-lit' },
        { label: 'Erreurs à éviter', href: '/blog/punaises-de-lit-erreurs-a-eviter' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Vous avez trouvé quelque chose cette nuit ?',
      ctaText: 'Appelez-nous avant de déplacer quoi que ce soit. Les premières heures déterminent souvent l’ampleur du traitement à venir.',
    }),

    /* ------------------------------------------------------- Hôtel ------ */
    contentPage({
      url: '/punaises-de-lit-hotel',
      h1: 'Punaises de lit en hôtel : agir vite, discrètement, et documenter',
      title: 'Punaises de lit en hôtel — protocole et intervention',
      description:
        'Punaises de lit en hôtel : signalement client, blocage de chambre, contrôle des chambres adjacentes, détection canine et plan de contrôle périodique.',
      eyebrow: 'Vous êtes hôtelier',
      tag: 'hotel',
      priority: 0.7,
      crumbs: [CRUMB, { label: 'Hôtel' }],
      serviceName: 'Traitement des punaises de lit en hôtel',
      lead: 'Pour un hôtel, une punaise de lit n’est pas seulement un problème technique : c’est un risque d’avis public, de nuits remboursées et de chambres immobilisées. La réponse doit être rapide, méthodique et traçable.',
      quick: {
        question: 'Que faire quand un client signale des punaises de lit ?',
        answer:
          'Bloquez la chambre immédiatement sans la remettre en vente, ne la faites pas nettoyer avant le passage du professionnel, relogez le client dans une chambre éloignée (pas adjacente), conservez le signalement par écrit et faites contrôler la chambre concernée ainsi que les chambres contiguës, au-dessus et en dessous.',
      },
      blocks: [
        {
          title: 'Les premières heures après un signalement',
          html: `<p>Deux erreurs coûtent cher. La première est de faire nettoyer la chambre en profondeur avant le contrôle : on efface les traces qui permettraient de confirmer et de mesurer l’infestation. La seconde est de reloger le client dans la chambre voisine, ce qui revient souvent à déplacer le problème d’une porte.</p>
          ${checklist([
            'Bloquer la chambre dans le PMS, sans remise en vente',
            'Ne pas procéder au ménage complet ni au changement de literie avant le contrôle',
            'Reloger le client dans une chambre non adjacente, si possible à un autre étage',
            'Traiter les effets du client selon une consigne écrite, pour éviter qu’il n’emporte le problème',
            'Enregistrer le signalement : date, chambre, description, photos éventuelles',
            'Faire contrôler la chambre concernée et les chambres contiguës, dessus et dessous',
          ])}`,
        },
        {
          title: 'Pourquoi la détection canine change la donne en hôtellerie',
          html: `<p>Contrôler visuellement trente chambres demande un temps considérable et immobilise l’exploitation. Une recherche olfactive permet de passer un nombre important de chambres dans une même session, en ciblant ensuite l’inspection visuelle sur les seules zones marquées.</p>
          <p>C’est ce qui rend la <a href="/detection-canine-punaises-de-lit">détection canine</a> particulièrement adaptée à l’hôtellerie : contrôle d’un étage entier, contrôle après traitement, ou vérification périodique dans le cadre d’un plan de prévention. Le compte rendu distingue les chambres confirmées, signalées non confirmées et contrôlées sans signalement — un document utile en cas de litige.</p>`,
        },
        {
          title: 'Traiter sans immobiliser l’établissement',
          html: `<p>Le choix de la méthode dépend du nombre de chambres concernées et des contraintes d’exploitation. Le <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> présente un avantage réel pour l’hôtellerie : il traite le volume d’une chambre, y compris le mobilier fixe et les têtes de lit capitonnées, et ne laisse pas de dépôt de produit dans une chambre destinée à être réoccupée.</p>
          <p>Les interventions peuvent être planifiées par zones et en horaires décalés pour limiter l’impact commercial. Le délai de remise en vente d’une chambre vous est indiqué avant l’intervention, pas après.</p>
          ${photo({
            name: 'hotel-chambre-controle',
            alt: 'Contrôle d’une chambre d’hôtel dans le cadre d’une recherche de punaises de lit',
            brief: 'Chambre d’hôtel en cours de contrôle : tête de lit capitonnée déposée, lampe, technicien.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Mettre en place un plan de contrôle',
          html: `<p>Les établissements qui s’en sortent le mieux ne sont pas ceux qui n’ont jamais eu de signalement : ce sont ceux qui en ont eu un, l’ont traité tôt, et ont mis en place une routine. Un plan de contrôle comprend généralement :</p>
          ${dataTable(
            ['Élément', 'Contenu'],
            [
              ['Formation du personnel', 'Reconnaître les traces lors du ménage : coutures, tête de lit, angles de sommier'],
              ['Procédure de signalement', 'Un circuit clair, sans crainte de sanction, pour remonter un doute immédiatement'],
              ['Contrôles périodiques', 'Vérification ciblée des chambres à forte rotation et des chambres sensibles'],
              ['Contrôle après traitement', 'Vérification à un délai adapté pour confirmer l’absence de foyer résiduel'],
              ['Traçabilité', 'Comptes rendus datés, utiles en cas de contestation client'],
            ],
            'Composantes d’un plan de contrôle hôtelier'
          )}`,
        },
      ],
      points: [
        'La chambre signalée : tête de lit, sommier, matelas, mobilier fixe',
        'Les chambres contiguës, au-dessus et en dessous',
        'Les couloirs et locaux de service attenants',
        'La lingerie et le circuit du linge',
        'Les bagageries et espaces de stockage clients',
        'Les zones d’attente avec assises en tissu',
      ],
      aside: callout({
        icon: 'shield',
        title: 'Discrétion d’intervention',
        text: `Nos interventions en établissement recevant du public sont organisées pour rester discrètes : véhicules et tenues neutres si vous le souhaitez, horaires adaptés, circulation par les accès de service.

Aucun élément relatif à votre établissement n’est publié ni utilisé en référence commerciale sans votre accord écrit.`,
      }),
      faq: [
        {
          q: 'Faut-il fermer l’hôtel ?',
          a: 'Dans l’immense majorité des cas, non. L’intervention porte sur les chambres concernées et exposées, et se planifie par zones. Une fermeture complète n’est envisagée que dans des situations très étendues.',
        },
        {
          q: 'Un client menace de publier un avis : que faire ?',
          a: 'Documentez tout : date du signalement, mesures prises, contrôle réalisé, compte rendu du professionnel. Un établissement qui prouve une réaction rapide et méthodique se défend bien mieux qu’un établissement qui a nié le problème.',
        },
        {
          q: 'À quelle fréquence contrôler ?',
          a: 'Cela dépend du type d’établissement, du taux de rotation et de l’historique. Nous définissons la fréquence avec vous, en ciblant en priorité les chambres à forte rotation plutôt qu’un balayage uniforme.',
        },
      ],
      related: [
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Location saisonnière', href: '/punaises-de-lit-location-saisonniere' },
        { label: 'Punaises de lit dans un hôtel (article)', href: '/blog/punaises-de-lit-hotel' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Un signalement client à traiter aujourd’hui ?',
      ctaText: 'Bloquez la chambre sans la nettoyer et appelez-nous : le contrôle des chambres adjacentes doit être fait rapidement.',
    }),

    /* ------------------------------------------ Location saisonnière ---- */
    contentPage({
      url: '/punaises-de-lit-location-saisonniere',
      h1: 'Punaises de lit en location saisonnière : le risque de la rotation',
      title: 'Punaises de lit en location saisonnière — prévention et traitement',
      description:
        'Location saisonnière et punaises de lit : rotation des voyageurs, contrôle entre séjours, réaction à un signalement, annulations et remise en location. Interventions en Île-de-France.',
      eyebrow: 'Vous louez en courte durée',
      tag: 'saisonniere',
      priority: 0.6,
      crumbs: [CRUMB, { label: 'Location saisonnière' }],
      serviceName: 'Traitement des punaises de lit en location saisonnière',
      lead: 'Un logement en courte durée cumule deux facteurs de risque : une rotation élevée de bagages et un temps de présence trop court pour que le problème soit détecté avant plusieurs séjours.',
      quick: {
        question: 'Comment éviter les punaises de lit en location courte durée ?',
        answer:
          'Le point clé est le contrôle entre deux séjours : inspection rapide des coutures de matelas, de la structure du sommier et de la tête de lit lors de chaque ménage. Un protocole de vérification de dix minutes, appliqué systématiquement, détecte la quasi-totalité des introductions avant qu’elles ne deviennent une infestation.',
      },
      blocks: [
        {
          title: 'Pourquoi la courte durée est exposée',
          html: `<p>Dans un logement occupé à l’année, une infestation finit par être remarquée : les piqûres se répètent, les traces s’accumulent, l’occupant finit par chercher. En courte durée, chaque voyageur ne reste que quelques nuits. S’il est piqué, il l’attribue parfois à autre chose — et s’il le signale, c’est souvent après son départ, dans un avis.</p>
          <p>Résultat : l’infestation progresse plusieurs semaines sans être identifiée, jusqu’au signalement explicite. À ce stade, elle est généralement installée dans la structure du couchage.</p>`,
        },
        {
          title: 'Le contrôle entre deux séjours',
          html: `<p>C’est la mesure la plus rentable, et la plus simple à mettre en place. Elle prend une dizaine de minutes lors du ménage :</p>
          ${checklist([
            'Retirer la protection de matelas et vérifier les coutures sur tout le pourtour',
            'Regarder sous l’étiquette cousue et autour des poignées',
            'Contrôler les angles du sommier et la jonction avec le cadre',
            'Vérifier la tête de lit, surtout si elle est capitonnée ou fixée au mur',
            'Passer sur les plinthes derrière le lit et la table de chevet',
            'Photographier et signaler immédiatement le moindre doute',
          ])}
          ${callout({
            title: 'Former la personne qui fait le ménage',
            text: 'C’est elle qui verra les traces en premier, si elle sait quoi regarder. Une fiche illustrée affichée dans le logement et dix minutes d’explication suffisent à transformer un ménage en contrôle réel.',
          })}`,
        },
        {
          title: 'Réagir à un signalement de voyageur',
          html: `<p>Retirez immédiatement le logement du calendrier de réservation : accueillir un nouveau voyageur dans un logement signalé aggrave tout, commercialement et techniquement. Ne faites pas de ménage en profondeur avant le contrôle, pour ne pas effacer les traces.</p>
          <p>Faites établir un diagnostic. Le compte rendu vous servira aussi dans la discussion avec la plateforme ou avec le voyageur : il établit ce qui a été trouvé, quand, et ce qui a été fait.</p>
          ${photo({
            name: 'location-controle-entre-sejours',
            alt: 'Contrôle du couchage d’un logement en location saisonnière entre deux séjours',
            brief: 'Personne en tenue de ménage inspectant la couture d’un matelas, lampe torche, logement meublé.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Remettre en location',
          html: `<p>La remise en location intervient après le traitement et, lorsque c’est pertinent, après un contrôle de vérification. Le <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> est souvent adapté à ce contexte : il traite le volume complet et ne laisse pas de dépôt dans un logement meublé destiné à être réoccupé rapidement.</p>
          <p>Nous vous indiquons le délai de remise en location avant l’intervention, afin que vous puissiez gérer vos réservations en conséquence.</p>`,
        },
      ],
      points: [
        'Le couchage complet de chaque chambre',
        'Les canapés convertibles utilisés comme couchage d’appoint',
        'Les meubles de rangement où les voyageurs posent leurs bagages',
        'Les têtes de lit fixées au mur',
        'Les plinthes derrière les couchages',
        'Le logement voisin, en immeuble, si les indices le justifient',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'clock',
        title: 'Le porte-bagages, détail qui compte',
        text: `Prévoir un porte-bagages métallique, éloigné du lit, réduit réellement le risque d’introduction : la valise ne repose ni sur le lit ni sur un textile.

C’est l’une des rares mesures préventives dont l’effet est visible dans la pratique.`,
      }),
      faq: [
        {
          q: 'Dois-je prévenir mes voyageurs ?',
          a: 'Un logement en cours de traitement ne doit pas être loué. Une fois le traitement effectué et contrôlé, il n’y a pas d’obligation d’information particulière, mais la transparence en cas de question directe reste la meilleure politique.',
        },
        {
          q: 'La plateforme peut-elle me sanctionner ?',
          a: 'Les politiques varient. Ce qui protège le mieux est la traçabilité : signalement enregistré, intervention professionnelle documentée, contrôle après traitement. Un hôte qui prouve une réaction immédiate est dans une position très différente d’un hôte silencieux.',
        },
        {
          q: 'Les housses anti-punaises sont-elles utiles en location ?',
          a: 'Oui, comme outil de lisibilité : elles enferment le matelas et rendent le contrôle rapide entre deux séjours. Elles ne remplacent ni l’inspection du sommier ni le traitement en cas d’infestation.',
        },
      ],
      related: [
        { label: 'Punaises de lit en hôtel', href: '/punaises-de-lit-hotel' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Comment éviter de transporter des punaises de lit', href: '/blog/eviter-transporter-punaises-de-lit' },
        { label: 'Peut-on voyager avec des punaises de lit ?', href: '/blog/voyager-avec-punaises-de-lit' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un voyageur vous a signalé des piqûres ?',
      ctaText: 'Retirez le logement du calendrier, ne nettoyez pas en profondeur et faites contrôler : c’est le moyen le plus rapide de revenir en location.',
    }),

    /* ---------------------------------------------- Résidence étudiante - */
    contentPage({
      url: '/punaises-de-lit-residence-etudiante',
      h1: 'Punaises de lit en résidence étudiante : rotation, promiscuité et silence',
      title: 'Punaises de lit en résidence étudiante — contrôle et traitement',
      description:
        'Résidences étudiantes et punaises de lit : rotation des logements, contrôle par bloc, signalement des résidents, traitement coordonné et prévention lors des rentrées. Île-de-France.',
      eyebrow: 'Vous gérez une résidence',
      tag: 'residence',
      priority: 0.6,
      crumbs: [CRUMB, { label: 'Résidence étudiante' }],
      serviceName: 'Traitement des punaises de lit en résidence étudiante',
      lead: 'Une résidence étudiante cumule les facteurs de diffusion : des logements nombreux et mitoyens, des emménagements groupés, des meubles récupérés, et des résidents qui hésitent à signaler.',
      quick: {
        question: 'Comment gérer les punaises de lit dans une résidence étudiante ?',
        answer:
          'Par un contrôle à l’échelle du bloc plutôt que du seul logement signalé, une procédure de signalement sans crainte de sanction, et un traitement coordonné des logements liés entre eux. Les périodes de rentrée et de rotation sont les moments clés pour les contrôles préventifs.',
      },
      blocks: [
        {
          title: 'Ce qui rend ces résidences particulières',
          html: `<p>Les logements sont petits, souvent meublés à l’identique, et séparés par de simples cloisons. Les emménagements se concentrent sur quelques semaines, avec des matelas et des meubles qui circulent, parfois récupérés d’occasion. Les résidents changent chaque année.</p>
          <p>À cela s’ajoute un facteur humain déterminant : beaucoup de résidents ne signalent pas, par crainte d’être tenus pour responsables, de devoir payer, ou simplement par gêne. Quand le signalement arrive, plusieurs logements sont souvent déjà concernés.</p>`,
        },
        {
          title: 'Contrôler par bloc, pas logement par logement',
          html: `<p>Sur un ensemble de logements identiques et mitoyens, le contrôle logement par logement sur signalement est toujours en retard d’un cran. L’approche efficace consiste à contrôler l’unité pertinente — un étage, une aile, un bloc — dès qu’un logement est confirmé.</p>
          <p>La <a href="/detection-canine-punaises-de-lit">détection canine</a> rend cette approche réaliste : elle permet de passer un grand nombre de logements dans une session, en ciblant ensuite les vérifications visuelles. Le compte rendu par logement permet de prioriser les interventions.</p>`,
        },
        {
          title: 'Lever le frein du signalement',
          html: `${checklist([
            'Annoncer clairement que le signalement n’entraîne aucune sanction ni facturation individuelle',
            'Expliquer que les punaises de lit ne sont pas liées à l’hygiène',
            'Mettre en place un canal de signalement simple et confidentiel',
            'Afficher une fiche illustrée de reconnaissance des traces dans les parties communes',
            'Contrôler systématiquement les logements lors des états des lieux de sortie',
            'Encadrer la récupération de mobilier d’occasion dans la résidence',
          ])}
          ${callout({
            title: 'Les périodes charnières',
            text: 'Les rentrées et les rotations de fin d’année sont les moments où le risque d’introduction est le plus élevé, et aussi ceux où les logements sont vides et accessibles. C’est la fenêtre idéale pour les contrôles préventifs et les traitements.',
          })}`,
        },
        {
          title: 'Traiter sans désorganiser la résidence',
          html: `<p>Le traitement est planifié par groupes de logements liés entre eux, avec des consignes de préparation identiques diffusées aux résidents concernés. Les mêmes principes qu’en <a href="/punaises-de-lit-immeuble">immeuble collectif</a> s’appliquent : traiter simultanément ce qui communique, et traiter les points de passage.</p>
          <p>Un relogement temporaire peut être nécessaire pendant l’intervention. Il doit être organisé loin des logements concernés, et les effets personnels doivent suivre une consigne précise, faute de quoi le relogement propage l’infestation.</p>
          ${photo({
            name: 'residence-etudiante-logement',
            alt: 'Contrôle d’un studio de résidence étudiante lors d’une recherche de punaises de lit',
            brief: 'Studio meublé type résidence étudiante en cours de contrôle : lit simple, bureau, placard ouvert.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Le logement signalé et les logements mitoyens du même palier',
        'Les logements situés au-dessus et en dessous',
        'Les locaux communs : laverie, salle commune, local vélos',
        'Le mobilier commun et les assises en tissu',
        'Les logements vacants du même bloc',
        'Les circuits de récupération de mobilier entre résidents',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'people',
        title: 'La laverie commune',
        text: `Elle joue un rôle ambivalent : bien utilisée, elle permet de traiter le linge à haute température ; mal utilisée, elle devient un point d’échange entre logements.

Une consigne simple — linge transporté en sac fermé, sac jeté après usage, aucun linge posé sur les surfaces — limite nettement ce risque.`,
      }),
      faq: [
        {
          q: 'Faut-il traiter tous les logements d’un étage ?',
          a: 'Pas systématiquement. Il faut les contrôler, et traiter ceux qui sont confirmés ainsi que ceux directement exposés. Le contrôle établit le périmètre, l’intervention le respecte.',
        },
        {
          q: 'Qui prend en charge le coût ?',
          a: 'Cela dépend de votre organisation et des contrats en vigueur. Ce qui est certain sur le plan technique : faire porter le coût au résident qui signale décourage les signalements suivants et coûte beaucoup plus cher à l’échelle de la résidence.',
        },
        {
          q: 'Peut-on intervenir pendant les vacances universitaires ?',
          a: 'C’est souvent la meilleure fenêtre : logements vides, accès facile, pas de contrainte de relogement. Les contrôles préventifs y sont aussi plus rapides à organiser.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Punaises de lit en résidence étudiante (article)', href: '/blog/punaises-de-lit-residence-etudiante' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un logement signalé dans votre résidence ?',
      ctaText: 'Le contrôle du bloc concerné est plus rapide et moins coûteux qu’une succession d’interventions logement par logement.',
    }),
  ];
}
