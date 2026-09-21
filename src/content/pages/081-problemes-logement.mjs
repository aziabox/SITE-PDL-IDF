import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist, dataTable } from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';

const CRUMB = { label: 'Punaises de lit', href: '/punaises-de-lit' };

export default function () {
  return [
    /* ------------------------------------------------- 5. Chambre ------- */
    contentPage({
      url: '/punaises-de-lit-chambre',
      h1: 'Punaises de lit dans une chambre : traiter la pièce, pas seulement le lit',
      title: 'Punaises de lit dans une chambre — inspection et traitement',
      description:
        'Punaises de lit dans une chambre : inspecter au-delà du lit, plinthes, mobilier et textiles, préparer le traitement et éviter l’extension aux autres pièces.',
      eyebrow: 'Par situation',
      tag: 'chambre',
      priority: 0.65,
      crumbs: [CRUMB, { label: 'Dans une chambre' }],
      serviceName: 'Traitement des punaises de lit dans une chambre',
      lead: 'Traiter un lit sans traiter la pièce qui l’entoure fonctionne rarement. Dans une chambre infestée depuis plusieurs semaines, les foyers secondaires sont déjà en place — et ce sont eux qui recolonisent le couchage après une intervention partielle.',
      quick: {
        question: 'Comment traiter une chambre infestée de punaises de lit ?',
        answer:
          'Le traitement couvre la pièce entière, pas seulement le lit : couchage, mobilier proche, plinthes, textiles, rideaux et points de passage. L’intervention associe généralement aspiration, vapeur, travail mécanique et traitement du volume par la chaleur, avec une préparation définie à l’avance et un contrôle après coup.',
      },
      blocks: [
        {
          title: 'Ce qui se passe quand seule la literie est traitée',
          html: `<p>C’est le scénario que nous rattrapons le plus souvent. Un premier traitement a porté sur le matelas et le sommier ; quelques semaines plus tard, les piqûres reprennent. Ce n’est presque jamais une question de résistance : c’est une question de périmètre.</p>
          <p>Les punaises présentes derrière une plinthe, dans une table de chevet ou dans le pli d’un rideau n’ont pas été touchées. Elles reviennent simplement vers leur source de nourriture dès que celle-ci redevient disponible.</p>`,
        },
        {
          title: 'La chambre, zone par zone',
          html: `${dataTable(
            ['Zone', 'Ce que l’on y cherche'],
            [
              ['Couchage', 'Coutures, structure du sommier, tête de lit et ses fixations'],
              ['Mobilier proche', 'Tables de chevet, tiroirs, arrière et dessous des meubles'],
              ['Plinthes et sol', 'Fentes de parquet, jonctions, angles derrière le lit'],
              ['Murs', 'Prises, interrupteurs, cadres, papier peint décollé, moulures'],
              ['Textiles', 'Rideaux (surtout les ourlets), tapis, linge stocké'],
              ['Rangements', 'Armoires, penderies, cartons sous le lit, valises'],
            ],
            'Zones inspectées dans une chambre'
          )}
          <p>L’ordre de l’inspection suit toujours la même logique : du couchage vers l’extérieur, par cercles concentriques. Les foyers les plus éloignés du lit indiquent l’ancienneté de l’infestation.</p>`,
        },
        {
          title: 'Préparer une chambre avant le traitement',
          html: `<p>La préparation n’est pas une formalité : elle conditionne directement le résultat, surtout pour un traitement thermique où l’air chaud doit circuler.</p>
          ${checklist([
            'Laver le linge à haute température puis le conserver en sacs fermés',
            'Ouvrir les tiroirs, placards et espaces fermés pour laisser circuler l’air',
            'Dégager les accès autour du lit, des plinthes et des meubles',
            'Retirer les objets sensibles à la chaleur indiqués sur la consigne',
            'Ne rien sortir de la chambre vers une autre pièce ou une autre adresse',
            'Retirer les animaux, plantes et aliments du volume traité',
          ])}
          ${callout({
            title: 'Le stockage sous le lit',
            text: 'Cartons, valises et boîtes stockés sous un lit sont un réservoir idéal : sombre, stable et jamais dérangé. Dans une chambre infestée, ce stockage est systématiquement traité comme une zone à part entière — et il est judicieux, après le traitement, de ne pas le reconstituer.',
          })}`,
        },
        {
          title: 'Éviter que l’infestation gagne le reste du logement',
          html: `<p>Trois règles limitent réellement l’extension, et elles sont contre-intuitives :</p>
          <ul>
            <li><strong>Ne changez pas de pièce pour dormir.</strong> Les punaises suivent l’occupant : changer de chambre revient à créer un deuxième foyer.</li>
            <li><strong>Ne déplacez pas les affaires.</strong> Chaque carton transporté est un véhicule potentiel.</li>
            <li><strong>Fermez la boucle textile.</strong> Le linge lavé doit être conservé à part jusqu’au traitement, sinon il se recontamine dans la chambre.</li>
          </ul>
          ${photo({
            name: 'chambre-preparation-traitement',
            alt: 'Chambre préparée avant un traitement contre les punaises de lit, meubles écartés des murs',
            brief: 'Chambre préparée : lit écarté du mur, tiroirs ouverts, sacs de linge fermés, sol dégagé.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Le couchage complet, matelas et structure',
        'Les meubles situés à moins d’un mètre du lit',
        'Les plinthes et le sol derrière la tête de lit',
        'Les rideaux, en particulier les ourlets',
        'Le stockage sous le lit et dans les placards',
        'Les pièces voisines, pour évaluer l’extension',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'clock',
        title: 'Combien de temps la chambre est-elle indisponible ?',
        text: 'Cela dépend de la méthode et de la surface. Pour un traitement thermique, la pièce reste inaccessible pendant toute l’intervention, personnes et animaux compris. La durée exacte vous est communiquée avant l’intervention, et non le jour même.',
      }),
      faq: [
        {
          q: 'Dois-je dormir ailleurs pendant le traitement ?',
          a: 'Pendant l’intervention, oui, le volume traité n’est pas accessible. En revanche, avant l’intervention, changer de pièce pour dormir est souvent contre-productif : cela étend l’infestation. Nous vous indiquons la consigne adaptée à votre situation.',
        },
        {
          q: 'Faut-il repeindre ou refaire les plinthes après ?',
          a: 'Non, ce n’est pas nécessaire. Un traitement correctement conduit ne laisse pas de dégâts esthétiques. Le décollement ponctuel d’une plinthe, quand il est nécessaire, est ciblé et limité aux zones confirmées.',
        },
        {
          q: 'Une chambre d’enfant se traite-t-elle différemment ?',
          a: 'Le principe reste le même, mais les contraintes ne sont pas identiques : jouets en tissu, lit superposé, textiles nombreux. Nous adaptons la préparation et privilégions les méthodes physiques dans ces pièces.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un lit', href: '/punaises-de-lit-dans-un-lit' },
        { label: 'Punaises de lit dans un canapé', href: '/punaises-de-lit-canape' },
        { label: 'Comment traiter une chambre infestée', href: '/blog/traiter-chambre-infestee' },
        { label: 'Préparer son appartement avant un traitement', href: '/blog/preparer-appartement-avant-traitement' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
      ],
      ctaTitle: 'Une chambre concernée, un logement à évaluer',
      ctaText: 'Le diagnostic détermine le périmètre réel du traitement — c’est ce qui évite les interventions partielles et les rechutes.',
    }),

    /* ---------------------------------------------- 6. Appartement ------ */
    contentPage({
      url: '/punaises-de-lit-appartement',
      h1: 'Punaises de lit en appartement : traiter chez soi sans ignorer l’immeuble',
      title: 'Punaises de lit en appartement — diagnostic et traitement',
      description:
        'Punaises de lit en appartement : propagation entre logements, signalement au propriétaire ou au syndic, déroulé d’un traitement et précautions en copropriété.',
      eyebrow: 'Par situation',
      tag: 'appartement',
      priority: 0.75,
      crumbs: [CRUMB, { label: 'En appartement' }],
      serviceName: 'Traitement des punaises de lit en appartement',
      lead: 'En appartement, la question n’est jamais seulement « comment traiter chez moi ». C’est aussi « d’où cela vient » et « jusqu’où cela va ». Un traitement isolé dans un immeuble concerné tient rarement dans la durée.',
      quick: {
        question: 'Les punaises de lit passent-elles d’un appartement à l’autre ?',
        answer:
          'Oui. Elles circulent par les plinthes, les gaines techniques, les canalisations, les faux plafonds, les paliers et les parties communes. Dans un immeuble, un logement infesté expose les logements mitoyens, surtout ceux qui partagent un mur, un plancher ou une colonne technique.',
      },
      blocks: [
        {
          title: 'Comment elles circulent dans un immeuble',
          html: `<p>Une punaise de lit ne parcourt pas des distances considérables, mais elle n’a pas besoin de le faire : dans un immeuble, quelques mètres suffisent pour changer de logement. Les chemins que nous identifions le plus souvent sont :</p>
          <ul>
            <li>Les plinthes et les jonctions mur-plancher entre logements mitoyens</li>
            <li>Les gaines techniques (électricité, plomberie, ventilation)</li>
            <li>Les passages de canalisations et les trémies</li>
            <li>Les paliers, les ascenseurs et les locaux communs (vélos, poubelles, caves)</li>
            <li>Les objets et meubles déposés dans les parties communes</li>
          </ul>
          <p>Cette réalité change la méthode : dans un immeuble où plusieurs logements sont concernés, traiter un seul appartement revient souvent à vider une baignoire sans fermer le robinet.</p>`,
        },
        {
          title: 'Qui fait quoi : locataire, propriétaire, syndic',
          html: `<p>La répartition des responsabilités dépend de la situation contractuelle et du règlement de copropriété. Quelques repères pratiques, que nous constatons sur le terrain :</p>
          <ul>
            <li><strong>Le locataire</strong> signale la situation par écrit au propriétaire ou au gestionnaire, dès les premiers signes, et conserve une trace de ce signalement.</li>
            <li><strong>Le propriétaire bailleur</strong> est concerné par la remise en état du logement loué et par le traitement de l’infestation.</li>
            <li><strong>Le syndic</strong> intervient lorsque les parties communes sont concernées ou lorsque plusieurs lots sont touchés : c’est lui qui peut coordonner une intervention à l’échelle du bâtiment.</li>
          </ul>
          ${callout({
            icon: 'doc',
            title: 'Le signalement écrit, réflexe utile',
            text: 'Un signalement écrit et daté protège tout le monde : il établit la chronologie, déclenche la prise en charge et évite les discussions sur la date d’apparition. Un simple e-mail suffit, avec les éléments constatés et les photos éventuelles.',
          })}`,
        },
        {
          title: 'Le déroulé d’un traitement en appartement',
          html: `<p>Le diagnostic détermine le périmètre : un logement seul, plusieurs pièces, ou un ensemble de lots. La <a href="/detection-canine-punaises-de-lit">détection canine</a> prend ici tout son sens, car elle permet de contrôler rapidement plusieurs logements voisins pour savoir si l’infestation dépasse le vôtre.</p>
          <p>Le traitement retenu est ensuite adapté : <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> lorsque la configuration s’y prête, approche combinée avec aspiration, vapeur et travail mécanique dans d’autres cas. Les points de passage vers les logements voisins font l’objet d’un traitement spécifique, sans quoi la recolonisation est probable.</p>
          ${photo({
            name: 'immeuble-palier-intervention',
            alt: 'Intervention dans un appartement d’immeuble, matériel acheminé par le palier',
            brief: 'Technicien acheminant le matériel dans le couloir d’un immeuble, cartons de protection au sol.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Précautions spécifiques à la copropriété',
          html: `${checklist([
            'Ne rien déposer dans les parties communes, même temporairement',
            'Conditionner en sac fermé tout élément évacué, avant de sortir du logement',
            'Prévenir le syndic ou le gestionnaire quand un mur mitoyen est concerné',
            'Éviter la buanderie commune tant que le traitement n’est pas terminé',
            'Traiter les points de passage : plinthes, gaines, passages de canalisation',
            'Contrôler les logements mitoyens quand les indices le justifient',
          ])}`,
        },
      ],
      points: [
        'Le couchage et le mobilier proche dans chaque chambre',
        'Les murs mitoyens et les plinthes correspondantes',
        'Les gaines techniques et passages de canalisations',
        'L’entrée du logement et le palier',
        'Les caves et locaux annexes lorsqu’ils sont utilisés pour du stockage',
        'Les logements voisins, si le diagnostic le justifie',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'building',
        title: 'Quand plusieurs lots sont concernés',
        text: `Un traitement coordonné à l’échelle du bâtiment coûte moins cher et fonctionne mieux qu’une succession d’interventions isolées étalées sur un an.

Nous pouvons établir un constat par lot, distinguant zones confirmées et zones contrôlées, pour permettre au syndic ou au bailleur de décider sur des éléments objectifs.`,
      }),
      faq: [
        {
          q: 'Mon voisin refuse de faire traiter : que faire ?',
          a: 'Signalez la situation par écrit au syndic ou au gestionnaire, en documentant ce que vous constatez. En copropriété, l’argument technique — un foyer voisin recontamine les logements traités — pèse généralement plus que l’argument individuel. Un constat par lot aide à objectiver la discussion.',
        },
        {
          q: 'Faut-il traiter tout l’immeuble ?',
          a: 'Pas nécessairement. Ce qui compte, c’est de contrôler les logements réellement exposés : mitoyens, superposés, et ceux reliés par une colonne technique. La détection canine permet d’établir rapidement ce périmètre.',
        },
        {
          q: 'Puis-je faire traiter sans l’accord du propriétaire ?',
          a: 'Vous pouvez faire intervenir un professionnel, mais informez le propriétaire par écrit au préalable : la prise en charge et la coordination avec l’immeuble en dépendent, surtout si plusieurs lots sont concernés.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Punaises de lit dans une chambre', href: '/punaises-de-lit-chambre' },
        { label: 'Punaises de lit en appartement (article)', href: '/blog/punaises-de-lit-appartement' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Un appartement concerné dans un immeuble ?',
      ctaText: 'Nous évaluons le périmètre réel avant d’intervenir : c’est la seule façon d’éviter un traitement qui ne tiendra pas.',
    }),

    /* --------------------------------------------------- 7. Maison ------ */
    contentPage({
      url: '/punaises-de-lit-maison',
      h1: 'Punaises de lit dans une maison : un périmètre plus large à couvrir',
      title: 'Punaises de lit dans une maison — diagnostic et traitement',
      description:
        'Punaises de lit dans une maison : chambres multiples, combles, dressing et textiles stockés. Comment délimiter l’infestation avant de traiter.',
      eyebrow: 'Par situation',
      tag: 'maison',
      priority: 0.65,
      crumbs: [CRUMB, { label: 'Dans une maison' }],
      serviceName: 'Traitement des punaises de lit dans une maison',
      lead: 'Une maison a un avantage sur un appartement : pas de voisin mitoyen pour réalimenter l’infestation. Elle a aussi un inconvénient : le volume est plus grand, les chambres sont multiples, et les textiles sont souvent stockés partout.',
      quick: {
        question: 'Comment traiter une maison infestée de punaises de lit ?',
        answer:
          'Il faut d’abord délimiter : toutes les chambres ne sont pas forcément concernées, mais toutes doivent être contrôlées, y compris les chambres d’amis peu utilisées. Le traitement porte ensuite sur les zones confirmées et les zones à risque, avec une attention particulière aux textiles stockés et aux espaces de rangement.',
      },
      blocks: [
        {
          title: 'Délimiter avant de traiter',
          html: `<p>Dans une maison, l’erreur la plus coûteuse est de traiter tout le volume « par sécurité », ou au contraire de se limiter à la chambre où les piqûres ont été constatées. Les deux approches manquent le point essentiel : savoir où se trouvent réellement les foyers.</p>
          <p>Le diagnostic cartographie la situation pièce par pièce. La <a href="/detection-canine-punaises-de-lit">détection canine</a> est particulièrement utile ici : contrôler cinq ou six chambres visuellement prend un temps considérable, alors qu’une recherche olfactive permet de cibler rapidement les pièces à examiner en profondeur.</p>`,
        },
        {
          title: 'Les zones propres aux maisons',
          html: `<ul>
            <li><strong>Les chambres peu utilisées</strong> : une chambre d’amis peut abriter un foyer resté discret pendant des mois, réveillé à chaque visite.</li>
            <li><strong>Le dressing et les penderies</strong> : volume de textile important, rarement dérangé.</li>
            <li><strong>Les combles et le stockage saisonnier</strong> : valises, couettes, linge de maison rangés d’une saison à l’autre.</li>
            <li><strong>Les escaliers et paliers</strong> : les jonctions bois et les plinthes sur plusieurs niveaux.</li>
            <li><strong>Les canapés et fauteuils</strong>, surtout si quelqu’un y fait la sieste régulièrement.</li>
            <li><strong>Le garage ou la buanderie</strong>, quand du linge y transite ou y est stocké.</li>
          </ul>
          ${callout({
            title: 'Les valises, vecteur numéro un',
            text: 'Dans les maisons, l’origine identifiée est très souvent un bagage : un voyage, un séjour à l’hôtel, un retour de vacances. Une valise stockée en combles après un séjour peut rester silencieuse plusieurs semaines avant que les punaises ne rejoignent la chambre la plus proche.',
          })}`,
        },
        {
          title: 'Traiter un volume important',
          html: `<p>Sur une maison, la logistique compte autant que la technique. Un <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> demande une alimentation électrique suffisante, un volume que l’on peut isoler et une préparation sérieuse pièce par pièce. Selon les cas, l’intervention se déroule par zones successives plutôt que sur l’ensemble du bâtiment en une fois.</p>
          <p>Les textiles suivent un circuit à part : lavage à haute température, conditionnement en sacs fermés, réintégration après traitement. C’est fastidieux, mais c’est ce qui évite qu’un carton rangé au grenier ne relance la situation trois mois plus tard.</p>
          ${photo({
            name: 'maison-chambre-etage-controle',
            alt: 'Contrôle d’une chambre à l’étage d’une maison lors d’un diagnostic punaises de lit',
            brief: 'Technicien contrôlant une chambre d’amis à l’étage, valise ouverte à proximité, lumière naturelle.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Toutes les chambres, y compris celles peu utilisées',
        'Le dressing, les penderies et le linge stocké',
        'Les combles et le stockage saisonnier',
        'Les canapés et fauteuils des pièces de vie',
        'Les valises et sacs de voyage',
        'Les plinthes et jonctions sur chaque niveau',
      ],
      aside: callout({
        variant: 'sand',
        icon: 'home',
        title: 'Un avantage à exploiter',
        text: `Sans mitoyenneté, une maison traitée correctement n’a pas de source de réalimentation extérieure. Le risque principal devient interne : un carton, une valise ou un textile non traité qui réintroduit le problème.

C’est pourquoi le circuit des textiles est, dans une maison, au moins aussi important que le traitement lui-même.`,
      }),
      faq: [
        {
          q: 'Faut-il traiter toute la maison ?',
          a: 'Rarement en totalité. Le traitement porte sur les zones confirmées et les zones à risque identifiées au diagnostic. Traiter systématiquement l’ensemble du volume coûte cher sans améliorer le résultat si le périmètre a été correctement établi.',
        },
        {
          q: 'Les animaux domestiques sont-ils concernés ?',
          a: 'Les punaises de lit se nourrissent principalement sur l’humain. Les paniers et couchages d’animaux doivent tout de même être contrôlés et traités, car ils offrent des textiles et des interstices adaptés.',
        },
        {
          q: 'Le jardin ou le garage peuvent-ils être infestés ?',
          a: 'Les punaises de lit ne s’installent pas à l’extérieur : elles ont besoin d’un hôte à proximité. Le garage ou la buanderie ne sont concernés que s’ils servent au stockage de textiles ou de mobilier provenant d’une zone infestée.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans une chambre', href: '/punaises-de-lit-chambre' },
        { label: 'Punaises de lit dans un canapé', href: '/punaises-de-lit-canape' },
        { label: 'Punaises de lit et déménagement', href: '/blog/punaises-de-lit-demenagement' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Plusieurs chambres à contrôler ?',
      ctaText: 'La détection canine permet de cibler rapidement les pièces réellement concernées, plutôt que de tout traiter au hasard.',
    }),

    /* ------------------------------------------------- 8. Immeuble ------ */
    contentPage({
      url: '/punaises-de-lit-immeuble',
      h1: 'Punaises de lit dans un immeuble : une infestation qui se traite à l’échelle du bâtiment',
      title: 'Punaises de lit dans un immeuble — approche collective',
      description:
        'Punaises de lit dans un immeuble : cartographie des lots concernés, parties communes, gaines techniques, coordination avec le syndic et plan d’intervention. Île-de-France.',
      eyebrow: 'Par situation',
      tag: 'immeuble',
      priority: 0.7,
      crumbs: [CRUMB, { label: 'Dans un immeuble' }],
      serviceName: 'Traitement des punaises de lit dans un immeuble',
      lead: 'Dans un immeuble, la question n’est pas de savoir qui a « amené » les punaises. C’est de savoir quels lots sont concernés aujourd’hui, et dans quel ordre intervenir pour que le traitement tienne.',
      quick: {
        question: 'Comment gérer une infestation de punaises de lit dans un immeuble ?',
        answer:
          'Il faut d’abord établir une cartographie : quels lots sont confirmés, lesquels sont à risque, quelles parties communes sont concernées. L’intervention est ensuite planifiée de manière coordonnée, en traitant simultanément les lots liés entre eux, faute de quoi les logements traités sont recolonisés depuis ceux qui ne l’ont pas été.',
      },
      blocks: [
        {
          title: 'Pourquoi les interventions isolées échouent',
          html: `<p>Le schéma est toujours le même : un lot signale, il est traité, tout va bien pendant quelques semaines, puis les piqûres reprennent. Entre-temps, le lot mitoyen ou celui du dessus n’a rien signalé — soit parce qu’il ne réagit pas aux piqûres, soit parce qu’il n’a pas identifié le problème.</p>
          <p>Les punaises circulent par les plinthes, les gaines et les passages de canalisation. Un traitement isolé dans ce contexte ne traite qu’une partie du système, et la réalimentation reprend dès que les conditions le permettent.</p>`,
        },
        {
          title: 'Établir une cartographie du bâtiment',
          html: `<p>La première étape est un état des lieux objectif. Elle repose sur trois éléments :</p>
          <ul>
            <li><strong>Les signalements</strong> des occupants, y compris les signalements anciens ou non suivis</li>
            <li><strong>Le contrôle des lots exposés</strong> : mitoyens, superposés, reliés par une colonne technique</li>
            <li><strong>L’inspection des parties communes</strong> : paliers, locaux vélos, caves, local poubelles, gaines accessibles</li>
          </ul>
          <p>La <a href="/detection-canine-punaises-de-lit">détection canine</a> est ici l’outil le plus efficace : elle permet de contrôler un nombre important de lots dans un délai raisonnable, ce qu’une inspection visuelle exhaustive ne permet pas. Chaque marquage est vérifié, et le compte rendu distingue clairement les lots confirmés, les lots signalés non confirmés et les lots contrôlés sans signalement.</p>`,
        },
        {
          title: 'Planifier une intervention coordonnée',
          html: `<p>Une fois la cartographie établie, le plan d’intervention définit l’ordre et le calendrier. Le principe est simple : les lots liés entre eux se traitent dans une même séquence, pas à plusieurs semaines d’écart.</p>
          ${checklist([
            'Traitement simultané des lots mitoyens et superposés concernés',
            'Traitement des points de passage : plinthes, gaines, trémies, passages de canalisation',
            'Consignes de préparation identiques et diffusées à tous les occupants concernés',
            'Règles communes pour les parties communes pendant la période de traitement',
            'Contrôle après intervention sur les lots traités et les lots exposés',
            'Procédure de signalement pour les mois qui suivent',
          ])}
          ${photo({
            name: 'immeuble-parties-communes-controle',
            alt: 'Contrôle des parties communes d’un immeuble dans le cadre d’une infestation de punaises de lit',
            brief: 'Inspection d’un local commun ou d’un palier : plinthes, gaines techniques, local vélos.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Le rôle du syndic et du gestionnaire',
          html: `<p>Le syndic n’a pas à trancher des questions techniques : son rôle est de permettre la coordination. Concrètement, cela signifie donner accès aux parties communes, organiser l’information des occupants, et faire en sorte que les lots concernés soient traités dans une même fenêtre de temps.</p>
          <p>Nous fournissons les éléments qui permettent cette décision : constat par lot, périmètre recommandé, calendrier proposé et consignes de préparation. Les modalités détaillées figurent sur la page dédiée aux <a href="/punaises-de-lit-syndic">syndics de copropriété</a>.</p>`,
        },
      ],
      points: [
        'Les lots signalés et leurs mitoyens directs',
        'Les lots superposés et les colonnes techniques communes',
        'Les paliers, escaliers et locaux communs',
        'Le local poubelles et le local vélos',
        'Les caves lorsqu’elles servent au stockage de textiles ou de mobilier',
        'Les logements meublés et les locations de courte durée du bâtiment',
      ],
      aside: callout({
        icon: 'people',
        title: 'Le facteur humain',
        text: `Dans un immeuble, l’obstacle principal n’est pas technique : c’est le silence. Beaucoup d’occupants ne signalent pas, par gêne ou par crainte d’être tenus pour responsables.

Une communication claire — l’infestation n’est pas liée à l’hygiène, le signalement précoce réduit le coût pour tout le monde — change radicalement le résultat d’une opération collective.`,
      }),
      faq: [
        {
          q: 'Combien de lots faut-il contrôler ?',
          a: 'Au minimum les lots mitoyens, superposés et reliés par une colonne technique au lot signalé. Le périmètre s’élargit en fonction de ce que révèle le contrôle : chaque lot confirmé génère à son tour un cercle de lots à vérifier.',
        },
        {
          q: 'Les parties communes doivent-elles être traitées ?',
          a: 'Elles doivent être contrôlées systématiquement. Elles sont rarement des foyers durables — il n’y a pas d’occupant qui y dort — mais elles servent de couloir de circulation et peuvent abriter des punaises en transit, notamment près des locaux de stockage.',
        },
        {
          q: 'Peut-on intervenir sans l’accord de tous les occupants ?',
          a: 'L’accès à un logement privatif nécessite l’accord de l’occupant. C’est justement pourquoi la communication en amont est déterminante : un plan bien expliqué obtient beaucoup plus d’adhésion qu’une convocation administrative.',
        },
      ],
      related: [
        { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Punaises de lit dans un immeuble (article)', href: '/blog/punaises-de-lit-immeuble' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Agence immobilière', href: '/punaises-de-lit-agence-immobiliere' },
        { label: 'Interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
      ],
      ctaTitle: 'Plusieurs lots concernés dans votre immeuble ?',
      ctaText: 'Nous établissons une cartographie des lots confirmés et exposés, puis un plan d’intervention coordonné.',
    }),
  ];
}
