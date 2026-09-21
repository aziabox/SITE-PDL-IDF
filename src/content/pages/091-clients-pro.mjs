import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist, dataTable } from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';

const CRUMB = { label: 'Vous êtes', href: '/punaises-de-lit-particulier' };

export default function () {
  return [
    /* --------------------------------------- Agence immobilière --------- */
    contentPage({
      url: '/punaises-de-lit-agence-immobiliere',
      h1: 'Punaises de lit et agence immobilière : sécuriser les mises en location',
      title: 'Punaises de lit — agence immobilière et gestion locative',
      description:
        'Agences immobilières et gestion locative : contrôle avant mise en location, état des lieux, signalement locataire, coordination des interventions et traçabilité. Île-de-France.',
      eyebrow: 'Vous êtes agence',
      tag: 'agence',
      priority: 0.6,
      crumbs: [CRUMB, { label: 'Agence immobilière' }],
      serviceName: 'Contrôle et traitement des punaises de lit pour la gestion locative',
      lead: 'Pour une agence, le sujet punaises de lit se joue sur trois moments : la remise en location, le signalement d’un locataire en cours de bail, et la sortie des lieux. Chacun demande une réponse différente.',
      quick: {
        question: 'Que doit faire une agence face à un signalement de punaises de lit ?',
        answer:
          'Enregistrer le signalement par écrit avec sa date, informer le propriétaire, faire établir un diagnostic professionnel plutôt que de statuer sur photo, et conserver le compte rendu. En copropriété, informer le syndic quand des lots voisins peuvent être concernés.',
      },
      blocks: [
        {
          title: 'Avant la mise en location',
          html: `<p>Un logement remis en location après un départ est le moment le plus favorable pour un contrôle : il est vide, accessible, et un problème identifié à cet instant coûte infiniment moins cher qu’un problème découvert par un nouveau locataire trois semaines après son entrée.</p>
          <p>Le contrôle porte sur le couchage s’il est meublé, les structures fixes, les plinthes et les rangements. En meublé, il inclut systématiquement matelas et sommier. Un compte rendu daté peut être joint au dossier du lot.</p>`,
        },
        {
          title: 'Pendant le bail : traiter le signalement, pas la rumeur',
          html: `<p>Un signalement de locataire doit être traité comme une information technique à vérifier, pas comme une réclamation à arbitrer. Une photo floue ne permet ni de confirmer ni d’écarter : seul un diagnostic sur place le permet.</p>
          ${checklist([
            'Enregistrer le signalement par écrit, avec date et description',
            'Informer le propriétaire sans délai',
            'Faire établir un diagnostic professionnel plutôt qu’un avis à distance',
            'Informer le syndic si des lots voisins peuvent être concernés',
            'Conserver le compte rendu au dossier du lot',
            'Suivre l’exécution jusqu’au contrôle après traitement',
          ])}
          ${callout({
            icon: 'doc',
            title: 'La traçabilité protège tout le monde',
            text: 'Un dossier qui contient le signalement daté, le compte rendu de diagnostic, le descriptif de l’intervention et le contrôle après traitement met fin à la plupart des discussions sur la chronologie et sur l’étendue de l’infestation.',
          })}`,
        },
        {
          title: 'À la sortie des lieux',
          html: `<p>L’état des lieux de sortie est le second moment clé. Un contrôle à cette occasion évite deux situations désagréables : relouer un logement infesté, et se voir opposer plus tard qu’un problème existait déjà à l’entrée.</p>
          <p>Dans les lots meublés, l’examen du matelas et du sommier devrait faire partie de la routine au même titre que le relevé des compteurs. Cela prend quelques minutes quand on sait où regarder.</p>
          ${photo({
            name: 'etat-des-lieux-controle',
            alt: 'Contrôle du couchage lors d’un état des lieux de sortie dans un logement meublé',
            brief: 'Contrôle d’un matelas dans un logement vide lors d’un état des lieux, dossier et lampe à la main.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Travailler avec un prestataire unique',
          html: `<p>Pour un portefeuille de lots, la valeur d’un prestataire ne tient pas seulement à l’intervention : elle tient à la cohérence des comptes rendus, à la connaissance des immeubles déjà traités et à la capacité d’intervenir sur plusieurs lots du même bâtiment de façon coordonnée.</p>
          <p>Nous pouvons établir des constats par lot et proposer un périmètre d’intervention lorsque plusieurs logements d’un même immeuble sont concernés, dans la logique décrite sur la page <a href="/punaises-de-lit-immeuble">immeuble</a>.</p>`,
        },
      ],
      points: [
        'Les lots meublés, matelas et sommiers compris',
        'Les logements remis en location après un départ',
        'Les lots signalés en cours de bail',
        'Les lots mitoyens dans les immeubles déjà concernés',
        'Les caves et annexes associées aux lots',
        'L’historique des interventions sur l’immeuble',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'clipboard',
        title: 'Ce que nous ne faisons pas',
        text: `Nous n’établissons pas d’attestation garantissant l’absence définitive de punaises de lit dans un logement : aucun professionnel honnête ne peut certifier un résultat futur.

Ce que nous fournissons est factuel : ce qui a été contrôlé, comment, ce qui a été trouvé, et à quelle date.`,
      }),
      faq: [
        {
          q: 'Un diagnostic punaises de lit est-il obligatoire avant location ?',
          a: 'Les obligations dépendent de la réglementation en vigueur et de la nature du bail ; elles évoluent. Sur le plan pratique, un contrôle avant mise en location reste une précaution utile indépendamment de toute obligation, et il se documente facilement.',
        },
        {
          q: 'Qui paie le traitement ?',
          a: 'La répartition dépend de la situation contractuelle et des circonstances. Notre rôle est d’établir les faits techniques : étendue, ancienneté probable, périmètre concerné. Ces éléments objectivent la discussion entre les parties.',
        },
        {
          q: 'Pouvez-vous intervenir sur plusieurs lots d’un même immeuble ?',
          a: 'Oui, et c’est généralement préférable. Traiter simultanément les lots liés entre eux évite les recolonisations d’un lot à l’autre et réduit le coût total par rapport à des interventions étalées dans le temps.',
        },
      ],
      related: [
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Location saisonnière', href: '/punaises-de-lit-location-saisonniere' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un lot signalé dans votre portefeuille ?',
      ctaText: 'Un diagnostic daté et un compte rendu clair valent mieux qu’un arbitrage sur photo. Nous intervenons dans toute l’Île-de-France.',
    }),

    /* ------------------------------------------------------ Syndic ------ */
    contentPage({
      url: '/punaises-de-lit-syndic',
      h1: 'Punaises de lit et syndic de copropriété : coordonner plutôt que subir',
      title: 'Punaises de lit — syndic de copropriété',
      description:
        'Syndics de copropriété : cartographie des lots concernés, contrôle des parties communes, plan d’intervention coordonné, communication aux copropriétaires et suivi. Île-de-France.',
      eyebrow: 'Vous êtes syndic',
      tag: 'syndic',
      priority: 0.65,
      crumbs: [CRUMB, { label: 'Syndic de copropriété' }],
      serviceName: 'Traitement coordonné des punaises de lit en copropriété',
      lead: 'Un syndic ne traite pas des punaises de lit : il rend possible un traitement qui fonctionne. Cela suppose une cartographie, un calendrier, et une communication qui lève le silence des occupants.',
      quick: {
        question: 'Que peut faire un syndic face aux punaises de lit dans un immeuble ?',
        answer:
          'Faire établir une cartographie des lots concernés et exposés, faire contrôler les parties communes, organiser un traitement coordonné des lots liés entre eux, et communiquer clairement auprès des occupants pour favoriser les signalements. Des interventions isolées lot par lot conduisent presque toujours à des recolonisations.',
      },
      blocks: [
        {
          title: 'Le coût réel de l’attente',
          html: `<p>Une copropriété qui traite lot par lot, au fil des signalements, paie plusieurs fois le même problème. Chaque lot traité est recolonisé depuis un lot voisin non traité ; chaque nouvelle intervention arrive après que la population a eu le temps de s’étendre.</p>
          <p>À l’inverse, une opération coordonnée demande une décision et un budget en une fois, mais met fin à la boucle. Sur les immeubles que nous voyons revenir année après année, c’est toujours la même différence qui explique les résultats.</p>`,
        },
        {
          title: 'Ce que nous fournissons pour décider',
          html: `${dataTable(
            ['Document', 'Ce qu’il contient'],
            [
              ['Cartographie', 'Lots confirmés, lots signalés non confirmés, lots contrôlés sans signalement'],
              ['Périmètre recommandé', 'Lots à traiter simultanément et points de passage à traiter'],
              ['Plan d’intervention', 'Ordre, calendrier et durée d’indisponibilité par lot'],
              ['Consignes occupants', 'Document unique de préparation, identique pour tous les lots concernés'],
              ['Contrôle après traitement', 'Vérification à un délai adapté sur les lots traités et exposés'],
            ],
            'Documents fournis au syndic'
          )}
          <p>Ces éléments sont pensés pour être présentés en conseil syndical ou en assemblée : ils distinguent ce qui est constaté de ce qui est recommandé, sans mélanger les deux.</p>`,
        },
        {
          title: 'Les parties communes',
          html: `<p>Les parties communes sont rarement des foyers durables : sans occupant qui y dort, les punaises n’y ont pas de source de nourriture stable. Elles servent en revanche de couloir de circulation, et certains points méritent un contrôle systématique :</p>
          ${checklist([
            'Les paliers et les plinthes le long des portes palières',
            'Les gaines techniques accessibles et les trémies',
            'Le local vélos et poussettes, souvent encombré de textiles',
            'Le local poubelles, point de dépôt de mobilier infesté',
            'Les caves, lorsqu’elles servent au stockage de matelas ou de textiles',
            'Les loges et locaux du personnel d’immeuble',
          ])}
          ${callout({
            title: 'Le dépôt de mobilier dans les communs',
            text: 'C’est le point noir des copropriétés concernées. Un matelas laissé une nuit devant le local poubelles suffit à exposer tout l’immeuble. Un rappel écrit, affiché et répété, a plus d’effet qu’une intervention supplémentaire.',
          })}`,
        },
        {
          title: 'Communiquer sans stigmatiser',
          html: `<p>La communication détermine le taux de signalement, donc la qualité de la cartographie, donc l’efficacité du traitement. Trois messages font la différence :</p>
          <ul>
            <li>Les punaises de lit ne sont <strong>pas liées à l’hygiène</strong> : n’importe quel logement peut être concerné.</li>
            <li>Le signalement n’entraîne <strong>aucune mise en cause</strong> du copropriétaire ou du locataire.</li>
            <li>Un signalement précoce <strong>réduit le coût pour tous</strong>, y compris pour ceux qui ne sont pas concernés.</li>
          </ul>
          <p>Nous pouvons fournir un texte d’affichage et une fiche de reconnaissance des traces, à diffuser dans les parties communes et par voie numérique.</p>
          ${photo({
            name: 'syndic-reunion-plan',
            alt: 'Présentation du plan d’intervention punaises de lit à un conseil syndical',
            brief: 'Plan d’immeuble annoté posé sur une table avec compte rendu, échange professionnel.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Les lots signalés et leur cercle de lots exposés',
        'Les colonnes techniques et les gaines communes',
        'Les parties communes et locaux annexes',
        'Les lots en location meublée ou courte durée',
        'Les lots vacants du bâtiment',
        'L’historique des interventions précédentes',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'people',
        title: 'Un interlocuteur unique',
        text: `Sur une opération collective, la coordination compte autant que la technique : un calendrier tenu, des consignes identiques pour tous, et une personne à qui poser une question.

Nous fonctionnons avec un interlocuteur unique sur toute la durée de l’opération, du premier contrôle au contrôle final.`,
      }),
      faq: [
        {
          q: 'Faut-il une décision d’assemblée générale ?',
          a: 'Cela dépend de la nature des travaux, du budget et des pouvoirs du syndic. Les contrôles des parties communes relèvent souvent de la gestion courante ; une opération coordonnée sur les lots privatifs demande généralement une décision. Nous fournissons les éléments techniques nécessaires à cette décision.',
        },
        {
          q: 'Peut-on obliger un copropriétaire à faire traiter ?',
          a: 'Ce n’est pas une question technique et elle dépend du règlement de copropriété et du cadre juridique applicable. Dans la pratique, une cartographie objective et une explication claire obtiennent bien plus d’adhésion qu’une mise en demeure.',
        },
        {
          q: 'Combien de temps dure une opération collective ?',
          a: 'Elle se planifie en fonction du nombre de lots et des contraintes d’accès. Le principe à respecter est que les lots liés entre eux soient traités dans une même fenêtre de temps, et non étalés sur plusieurs mois.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Agence immobilière', href: '/punaises-de-lit-agence-immobiliere' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaPrimary: { label: 'Obtenir un devis pour la copropriété', href: '/diagnostic' },
      ctaTitle: 'Une copropriété concernée sur plusieurs lots ?',
      ctaText: 'Nous établissons la cartographie et le plan d’intervention qui permettent au conseil syndical de décider sur des éléments objectifs.',
    }),

    /* --------------------------------------------------- Entreprise ----- */
    contentPage({
      url: '/punaises-de-lit-entreprise',
      h1: 'Punaises de lit en entreprise : bureaux, vestiaires et salles de repos',
      title: 'Punaises de lit en entreprise — bureaux et locaux professionnels',
      description:
        'Punaises de lit en entreprise : où elles s’installent réellement dans des bureaux, comment contrôler sans inquiéter et traiter sans interrompre l’activité.',
      eyebrow: 'Vous êtes une entreprise',
      tag: 'entreprise',
      priority: 0.6,
      crumbs: [CRUMB, { label: 'Entreprise' }],
      serviceName: 'Traitement des punaises de lit en entreprise',
      lead: 'Un bureau n’est pas un environnement naturel pour les punaises de lit : personne n’y dort. Elles y arrivent pourtant, transportées par des sacs et des vêtements, et s’installent là où les textiles et l’immobilité se rencontrent.',
      quick: {
        question: 'Des punaises de lit peuvent-elles s’installer dans des bureaux ?',
        answer:
          'Oui, mais rarement en colonies importantes : sans occupant qui dort sur place, la source de nourriture est irrégulière. On les retrouve surtout dans les salles de repos, les sièges en tissu, les vestiaires et les espaces de sieste ou de garde. Le risque principal est la diffusion vers les domiciles des salariés.',
      },
      blocks: [
        {
          title: 'Où elles s’installent réellement',
          html: `<p>Dans un environnement de travail, la logique reste la même : chaleur, immobilité, textile. Cela désigne des zones précises :</p>
          <ul>
            <li>Les salles de repos et de pause, en particulier les canapés et fauteuils</li>
            <li>Les vestiaires et les casiers où s’entassent vêtements et sacs</li>
            <li>Les sièges de bureau en tissu, surtout dans les postes occupés longuement</li>
            <li>Les salles de garde, chambres de repos et espaces de sieste des établissements fonctionnant en continu</li>
            <li>Les zones d’attente ouvertes au public avec assises rembourrées</li>
            <li>Les locaux de stockage de textiles et de linge</li>
          </ul>`,
        },
        {
          title: 'Contrôler sans créer une panique inutile',
          html: `<p>Le sujet est sensible : un signalement mal géré génère des rumeurs, des refus de poste et des inquiétudes disproportionnées. Une communication factuelle règle l’essentiel.</p>
          ${checklist([
            'Traiter le signalement comme une vérification technique, pas comme une accusation',
            'Contrôler les zones à risque plutôt que l’ensemble des locaux',
            'Informer avec des faits : ce qui a été contrôlé, ce qui a été trouvé, ce qui est prévu',
            'Rappeler que les punaises de lit ne transmettent pas de maladie',
            'Fournir une consigne écrite aux salariés directement concernés',
            'Prévoir un contrôle de vérification après intervention',
          ])}
          ${callout({
            icon: 'shield',
            title: 'Le vrai enjeu : le domicile des salariés',
            text: 'Une punaise transportée dans un sac depuis un lieu de travail peut s’installer au domicile d’un salarié, où elle trouvera enfin un hôte régulier. C’est pourquoi une intervention en entreprise s’accompagne toujours de consignes destinées aux personnes concernées.',
          })}`,
        },
        {
          title: 'Intervenir sans interrompre l’activité',
          html: `<p>Les interventions en locaux professionnels se planifient en dehors des heures d’activité ou par zones successives. Le <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> a l’avantage de ne pas laisser de dépôt dans des espaces réoccupés le lendemain, ce qui simplifie la reprise.</p>
          <p>Les mobiliers rembourrés font l’objet d’un traitement ciblé, et les zones de stockage textile d’une consigne spécifique. Un compte rendu vous est remis, utile pour l’information interne et pour le suivi.</p>
          ${photo({
            name: 'bureaux-salle-repos-controle',
            alt: 'Contrôle des assises d’une salle de repos dans des locaux professionnels',
            brief: 'Contrôle de fauteuils en tissu dans une salle de pause d’entreprise, lampe et gants.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Les salles de repos et de pause',
        'Les vestiaires, casiers et zones de dépôt de sacs',
        'Les sièges de bureau et fauteuils en tissu',
        'Les salles de garde et espaces de repos en continu',
        'Les zones d’attente accueillant du public',
        'Les locaux de stockage de textiles',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'clipboard',
        title: 'Documenter l’intervention',
        text: `Un compte rendu daté précisant les zones contrôlées, les zones confirmées et les actions réalisées facilite le dialogue interne et la communication avec les représentants du personnel.

Il permet aussi de sortir des discussions d’opinion : on discute de ce qui a été constaté, pas de ce que chacun imagine.`,
      }),
      faq: [
        {
          q: 'Faut-il fermer les locaux ?',
          a: 'Rarement. Les interventions se planifient par zones et en dehors des heures d’activité. Une fermeture complète n’est envisagée que pour des situations étendues et inhabituelles en environnement de bureau.',
        },
        {
          q: 'Un salarié peut-il refuser de venir travailler ?',
          a: 'Cette question relève du dialogue social et du cadre juridique applicable, pas de la technique. Ce que nous pouvons apporter, ce sont des faits vérifiés : zones contrôlées, résultats et mesures prises, qui permettent d’objectiver la discussion.',
        },
        {
          q: 'Comment éviter la réintroduction ?',
          a: 'Par des mesures simples : limiter les textiles inutiles dans les espaces communs, éviter le stockage de vêtements en vrac dans les vestiaires, et traiter rapidement tout nouveau signalement plutôt que d’attendre une confirmation collective.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un commerce', href: '/punaises-de-lit-commerce' },
        { label: 'Punaises de lit en EHPAD', href: '/punaises-de-lit-ehpad' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un signalement dans vos locaux ?',
      ctaText: 'Un contrôle ciblé des zones à risque permet de trancher rapidement, sans mobiliser l’ensemble du site.',
    }),

    /* --------------------------------------------------------- EHPAD ---- */
    contentPage({
      url: '/punaises-de-lit-ehpad',
      h1: 'Punaises de lit en EHPAD : protéger des résidents fragiles',
      title: 'Punaises de lit en EHPAD — protocole adapté',
      description:
        'Punaises de lit en EHPAD : détection précoce, contraintes des résidents, méthodes physiques privilégiées et coordination avec les équipes soignantes.',
      eyebrow: 'Vous êtes un établissement',
      tag: 'ehpad',
      priority: 0.6,
      crumbs: [CRUMB, { label: 'EHPAD' }],
      serviceName: 'Traitement des punaises de lit en EHPAD',
      lead: 'En EHPAD, la difficulté n’est pas la technique : c’est la fragilité des personnes, la difficulté du déplacement des résidents et le fait que les piqûres soient souvent attribuées à autre chose pendant des semaines.',
      quick: {
        question: 'Comment traiter les punaises de lit en EHPAD ?',
        answer:
          'En privilégiant les méthodes physiques (chaleur, vapeur, aspiration) qui ne laissent pas de dépôt dans les chambres, en coordonnant l’intervention avec les équipes soignantes pour le déplacement des résidents, et en contrôlant les chambres voisines dès qu’une chambre est confirmée.',
      },
      blocks: [
        {
          title: 'Un diagnostic souvent retardé',
          html: `<p>Chez des personnes âgées, les lésions cutanées sont fréquentes et peuvent avoir de multiples origines. Des piqûres de punaises de lit sont régulièrement attribuées à une allergie, à une réaction médicamenteuse ou à un prurit sénile. Entre-temps, l’infestation progresse.</p>
          <p>Deux éléments aident à raccourcir ce délai : former les équipes soignantes à repérer les traces sur le lit lors des changes et des réfections, et contrôler systématiquement la chambre dès que des lésions inexpliquées apparaissent chez un résident.</p>`,
        },
        {
          title: 'Les contraintes propres à l’établissement',
          html: `<ul>
            <li><strong>Le déplacement des résidents</strong> : une chambre en traitement doit être libérée, ce qui demande une organisation avec les équipes et parfois un matériel médicalisé.</li>
            <li><strong>Le matériel médical</strong> : lits médicalisés, matelas anti-escarres, fauteuils roulants et coussins de positionnement doivent être contrôlés et traités selon leur nature.</li>
            <li><strong>Le linge</strong> : le circuit du linge est déjà organisé dans l’établissement, mais il doit être adapté pour éviter qu’il ne devienne un vecteur entre chambres.</li>
            <li><strong>La sensibilité aux produits</strong> : c’est l’une des raisons pour lesquelles les méthodes physiques sont à privilégier autant que possible.</li>
          </ul>
          ${callout({
            title: 'Le matelas anti-escarres',
            text: 'Ce type de matelas comporte des cellules, des coutures et des raccords qui offrent de nombreux interstices. Il ne peut pas être traité comme un matelas classique : sa compatibilité avec la chaleur ou la vapeur doit être vérifiée au cas par cas avec le fournisseur avant toute intervention.',
          })}`,
        },
        {
          title: 'Organiser une intervention',
          html: `<p>Le principe reste celui de l’<a href="/punaises-de-lit-immeuble">habitat collectif</a> : contrôler le cercle de chambres exposées, traiter simultanément ce qui communique, et traiter les points de passage. La <a href="/detection-canine-punaises-de-lit">détection canine</a> permet de contrôler un étage rapidement, ce qui est précieux dans un établissement où chaque entrée en chambre demande une organisation.</p>
          ${checklist([
            'Contrôle de la chambre signalée et des chambres contiguës',
            'Coordination avec l’équipe soignante pour le déplacement des résidents',
            'Vérification préalable de la compatibilité du matériel médical',
            'Traitement privilégiant les méthodes physiques',
            'Adaptation du circuit du linge pendant l’opération',
            'Contrôle de vérification après intervention',
          ])}
          ${photo({
            name: 'ehpad-chambre-controle',
            alt: 'Contrôle d’une chambre d’établissement médico-social lors d’une recherche de punaises de lit',
            brief: 'Chambre d’EHPAD vide, lit médicalisé, technicien contrôlant les coutures du matelas.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Ce qui se joue pour les familles',
          html: `<p>Une infestation en EHPAD génère rapidement une inquiétude des familles, parfois relayée publiquement. Comme en hôtellerie, ce qui protège l’établissement n’est pas l’absence de problème — elle est impossible à garantir — mais la démonstration d’une réaction rapide et documentée.</p>
          <p>Comptes rendus datés, périmètre contrôlé, actions menées et contrôle final constituent un dossier qui permet de répondre factuellement, sans minimiser ni dramatiser.</p>`,
        },
      ],
      points: [
        'La chambre signalée et les chambres contiguës',
        'Les lits médicalisés et matelas techniques',
        'Les fauteuils, coussins de positionnement et assises',
        'Le circuit du linge et la lingerie',
        'Les espaces communs avec assises rembourrées',
        'Les chambres des résidents présentant des lésions inexpliquées',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'people',
        title: 'Former les équipes',
        text: `Les aides-soignants voient les lits tous les jours. Une courte formation à la reconnaissance des traces — points noirs sur les coutures, mues, taches sur les draps — est l’investissement le plus rentable dans un établissement.

Nous pouvons prévoir ce temps d’explication lors d’une intervention.`,
      }),
      faq: [
        {
          q: 'Les résidents doivent-ils quitter leur chambre ?',
          a: 'Pendant l’intervention, oui : le volume traité n’est accessible à personne. La durée est communiquée à l’avance afin que l’équipe puisse organiser l’accueil des résidents concernés.',
        },
        {
          q: 'Peut-on traiter sans produit chimique ?',
          a: 'C’est ce que nous privilégions dans ce contexte : chaleur, vapeur et aspiration constituent une approche physique adaptée à des personnes fragiles. Le recours à un traitement professionnel complémentaire, s’il devenait nécessaire, serait expliqué et encadré.',
        },
        {
          q: 'À quelle fréquence contrôler un établissement ?',
          a: 'La fréquence dépend de la taille, du taux de rotation des chambres et de l’historique. Nous préférons des contrôles ciblés réguliers sur les chambres sensibles à un contrôle général annuel peu opérant.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Punaises de lit en entreprise', href: '/punaises-de-lit-entreprise' },
        { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Une chambre signalée dans votre établissement ?',
      ctaText: 'Nous organisons le contrôle des chambres exposées et une intervention compatible avec les contraintes de vos résidents.',
    }),

    /* ------------------------------------------------------ Commerce ---- */
    contentPage({
      url: '/punaises-de-lit-commerce',
      h1: 'Punaises de lit dans un commerce : cabines, assises et textiles',
      title: 'Punaises de lit dans un commerce — contrôle et traitement',
      description:
        'Punaises de lit dans un commerce : cabines d’essayage, sièges en tissu, salles d’attente et stocks textiles. Contrôle discret en Île-de-France.',
      eyebrow: 'Vous êtes commerçant',
      tag: 'commerce',
      priority: 0.55,
      crumbs: [CRUMB, { label: 'Commerce' }],
      serviceName: 'Traitement des punaises de lit dans un commerce',
      lead: 'Dans un commerce, les punaises de lit sont presque toujours de passage : elles arrivent avec un sac ou un vêtement et n’y trouvent pas d’hôte régulier. Le risque tient moins à l’installation durable qu’à la diffusion vers les clients et les domiciles.',
      quick: {
        question: 'Un magasin peut-il être infesté de punaises de lit ?',
        answer:
          'Une installation durable est rare, faute d’occupant qui dort sur place. En revanche, un magasin peut héberger temporairement des punaises dans les cabines d’essayage, les assises en tissu, les stocks textiles ou les vêtements de seconde main, et les diffuser vers les clients et le personnel.',
      },
      blocks: [
        {
          title: 'Les zones réellement concernées',
          html: `<ul>
            <li><strong>Les cabines d’essayage</strong> : banquettes, tapis, plinthes et coins sombres.</li>
            <li><strong>Les assises en tissu</strong> des espaces d’attente, notamment dans les salons, cabinets et lieux d’accueil.</li>
            <li><strong>Les stocks textiles</strong>, surtout en seconde main, dépôt-vente et friperie.</li>
            <li><strong>Les vestiaires du personnel</strong> et les sacs entreposés en réserve.</li>
            <li><strong>Le mobilier d’occasion</strong> acquis pour l’aménagement.</li>
            <li><strong>Les salles de repos</strong> lorsque le personnel y fait des pauses prolongées.</li>
          </ul>
          <p>Les cinémas, salles d’attente et lieux où l’on reste assis longtemps sur du tissu forment une catégorie à part : l’immobilité prolongée permet le contact, même sans installation durable.</p>`,
        },
        {
          title: 'Contrôler discrètement',
          html: `<p>Pour un commerce, la discrétion n’est pas un confort mais une nécessité commerciale. Nos interventions se planifient en dehors des heures d’ouverture, avec des véhicules et des tenues neutres si vous le souhaitez.</p>
          ${checklist([
            'Contrôle ciblé des zones textiles et des assises',
            'Inspection des réserves et des stocks de seconde main',
            'Contrôle des vestiaires et des espaces de pause',
            'Intervention en dehors des heures d’ouverture',
            'Compte rendu daté, utile pour le personnel et l’assurance',
            'Consignes pour limiter les réintroductions',
          ])}
          ${callout({
            icon: 'shield',
            title: 'Seconde main et dépôt-vente',
            text: 'Les commerces qui reçoivent des textiles d’origine variée sont structurellement exposés. La mesure la plus efficace est une zone de quarantaine : les arrivages y sont traités ou isolés avant de rejoindre la surface de vente.',
          })}`,
        },
        {
          title: 'Traiter sans fermer plus que nécessaire',
          html: `<p>Le traitement porte sur les zones confirmées et les zones exposées, rarement sur l’ensemble du local. Selon la configuration, il associe aspiration professionnelle, vapeur haute température sur les textiles et assises, et traitement thermique du volume lorsque c’est pertinent.</p>
          <p>Les stocks textiles font l’objet d’un traitement spécifique, avec une consigne de conditionnement afin qu’un carton traité ne soit pas recontaminé par un carton voisin.</p>
          ${photo({
            name: 'commerce-cabine-essayage',
            alt: 'Contrôle d’une cabine d’essayage dans le cadre d’une recherche de punaises de lit',
            brief: 'Cabine d’essayage : banquette soulevée, inspection des plinthes et du tapis à la lampe.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Les cabines d’essayage et leurs banquettes',
        'Les assises en tissu des espaces d’attente',
        'Les réserves et stocks textiles',
        'Les arrivages de seconde main',
        'Les vestiaires et sacs du personnel',
        'Le mobilier d’occasion utilisé dans l’aménagement',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'doc',
        title: 'Ce que nous ne publions pas',
        text: `Aucun nom d’établissement, aucune photo identifiable et aucune référence commerciale ne sont publiés sans accord écrit.

Les interventions en commerce sont traitées avec la même confidentialité qu’en hôtellerie.`,
      }),
      faq: [
        {
          q: 'Un client peut-il rapporter des punaises chez lui depuis mon magasin ?',
          a: 'C’est possible si une punaise se trouve sur un textile ou dans une assise au moment du contact, même sans infestation installée. C’est exactement le risque que le contrôle des zones textiles permet de réduire.',
        },
        {
          q: 'Faut-il jeter les stocks concernés ?',
          a: 'Rarement. Les textiles peuvent généralement être traités, par la chaleur notamment. L’élimination concerne surtout des articles dégradés ou des mobiliers impossibles à ouvrir.',
        },
        {
          q: 'Dois-je informer mes clients ?',
          a: 'Il n’existe pas de réponse unique : cela dépend de l’ampleur, de la nature du commerce et de ce qui a été constaté. Ce qui compte sur le plan technique est d’agir vite et de documenter, ce qui permet ensuite de répondre factuellement si la question se pose.',
        },
      ],
      related: [
        { label: 'Punaises de lit en entreprise', href: '/punaises-de-lit-entreprise' },
        { label: 'Punaises de lit en hôtel', href: '/punaises-de-lit-hotel' },
        { label: 'Méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Comment éviter de transporter des punaises de lit', href: '/blog/eviter-transporter-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un doute dans votre établissement ?',
      ctaText: 'Un contrôle ciblé en dehors des heures d’ouverture permet de trancher sans perturber votre activité.',
    }),
  ];
}
