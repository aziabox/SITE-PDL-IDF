import { contentPage } from '../../lib/templates.mjs';
import { callout, checklist, figure } from '../../lib/components.mjs';
import { photo } from '../../lib/photo.mjs';

const CRUMB = { label: 'Punaises de lit', href: '/punaises-de-lit' };

export default function () {
  return [
    /* ------------------------------------------------ 1. Dans un lit ---- */
    contentPage({
      url: '/punaises-de-lit-dans-un-lit',
      h1: 'Punaises de lit dans un lit : où chercher et quoi faire',
      title: 'Punaises de lit dans un lit — inspection et traitement',
      description:
        'Punaises de lit dans un lit : ordre d’inspection du matelas, du sommier et de la tête de lit, signes à chercher, erreurs à éviter et solutions professionnelles en Île-de-France.',
      eyebrow: 'Par situation',
      tag: 'lit',
      priority: 0.7,
      crumbs: [CRUMB, { label: 'Dans un lit' }],
      serviceName: 'Traitement des punaises de lit dans un lit',
      lead: 'Le lit est le point de départ de presque toutes les infestations que nous diagnostiquons. Pas parce que les punaises l’apprécient particulièrement, mais parce que c’est là que dort la personne dont elles se nourrissent. Savoir l’inspecter dans le bon ordre change tout.',
      quick: {
        question: 'Comment vérifier si mon lit abrite des punaises de lit ?',
        answer:
          'Inspectez dans cet ordre : coutures et passepoils du matelas, étiquettes, dessous du matelas, puis la structure du sommier (angles, agrafes, toile), puis la tête de lit et enfin les pieds et le sol autour. Cherchez des taches noires groupées, des mues translucides et des insectes bruns aplatis de 5 à 6 mm.',
      },
      blocks: [
        {
          title: 'Pourquoi le lit en premier',
          html: `<p>Une punaise de lit ne chasse pas : elle attend. Elle se loge au plus près de sa source de nourriture et ne s’en éloigne que lorsque la population devient trop importante ou que l’endroit devient inhospitalier. Dans la pratique, cela signifie que l’immense majorité des foyers se trouve à moins d’un mètre de l’endroit où vous posez la tête.</p>
          <p>Ce constat a une conséquence directe sur la méthode : commencer l’inspection par le lit n’est pas une facilité, c’est la logique même de l’insecte. Quand nous trouvons des foyers éloignés du couchage sans rien près du lit, cela signale généralement autre chose — un traitement précédent qui a dispersé la population, ou une source située dans un logement voisin.</p>`,
        },
        {
          title: 'L’ordre d’inspection que nous suivons',
          html: `<p>Un lit s’inspecte de la surface vers la structure, et du plus lisible vers le plus fermé :</p>
          <ol>
            <li><strong>Les draps et la protection de matelas</strong> : traces de sang, petits points noirs.</li>
            <li><strong>Les coutures, passepoils et étiquettes du matelas</strong>, sur les deux faces et sur tout le pourtour.</li>
            <li><strong>Le dessous du matelas</strong>, que l’on oublie souvent : il faut le relever, pas simplement le soulever d’un coin.</li>
            <li><strong>Le sommier</strong> : angles, agrafes, toile de fond, jonction entre la structure et le cadre.</li>
            <li><strong>La tête de lit</strong>, particulièrement si elle est capitonnée ou fixée au mur.</li>
            <li><strong>Les pieds, le cadre et le sol autour</strong> : plinthes, rainures, tapis.</li>
          </ol>
          <p>Cet ordre n’est pas indifférent. Démonter le sommier avant d’avoir lu les traces sur le matelas fait perdre une information : la répartition des traces indique souvent de quel côté du lit dort la personne piquée, et donc où se concentre le foyer principal.</p>`,
        },
        {
          title: 'Les signes qui ne trompent pas',
          html: `<p>Sur un lit, trois indices se recoupent :</p>
          <ul>
            <li><strong>Des taches noires groupées</strong> le long d’une couture ou dans un angle de sommier : ce sont des déjections. Isolées, elles peuvent venir d’autre chose ; regroupées et alignées sur une couture, elles sont caractéristiques.</li>
            <li><strong>Des mues</strong>, enveloppes vides et translucides : elles prouvent qu’une population se développe sur place.</li>
            <li><strong>Des œufs</strong>, blanchâtres et collés, souvent dans les recoins les plus abrités.</li>
          </ul>
          <p>Voir un insecte vivant en pleine journée n’est pas le premier signe : c’est souvent un signe tardif, qui indique une population déjà établie.</p>
          ${callout({
            title: 'Un piège classique',
            text: 'Beaucoup de personnes inspectent uniquement la face supérieure du matelas et concluent qu’il n’y a rien. Dans la majorité des cas que nous voyons, les traces se trouvent sur le pourtour, sous l’étiquette, ou dans la structure du sommier — jamais au milieu du matelas.',
          })}`,
        },
        {
          title: 'Ce qu’il ne faut pas faire dans l’urgence',
          html: `<p>La réaction spontanée — tout sortir, tout laver, dormir ailleurs — est celle qui aggrave le plus souvent la situation.</p>
          ${checklist([
            'Ne déplacez pas le matelas dans une autre pièce : vous créez un second foyer',
            'Ne dormez pas sur le canapé : les punaises suivent l’occupant en quelques nuits',
            'Ne jetez pas le lit sur le palier : vous exposez tout l’immeuble',
            'N’utilisez pas de bombe insecticide : elle disperse les insectes vers les pièces voisines',
            'Ne démontez pas tout avant le diagnostic : vous effacez les indices de localisation',
          ])}`,
        },
        {
          title: 'Comment nous traitons un lit infesté',
          html: `<p>Le lit concentre l’intervention, mais ne la résume jamais. Après le diagnostic, le traitement associe généralement plusieurs actions : aspiration professionnelle des zones visibles, travail à la <a href="/methodes-traitement-punaises-de-lit#vapeur">vapeur haute température</a> sur les coutures et la structure accessible, démontage ciblé des éléments qui abritent des foyers confirmés, puis <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> du volume lorsque la configuration s’y prête.</p>
          <p>Dans presque tous les cas, le couchage est ensuite isolé : mise en housse du matelas et du sommier quand c’est pertinent, dégagement du lit des murs et des rideaux, retrait du stockage sous le lit. Ce travail d’isolement rend les contrôles ultérieurs beaucoup plus lisibles.</p>`,
        },
      ],
      points: [
        'La répartition des traces sur le matelas et le sommier',
        'La structure du sommier, souvent plus infestée que le matelas lui-même',
        'La tête de lit et ses fixations murales',
        'Le mobilier situé à moins d’un mètre du couchage',
        'Les plinthes et le sol du côté où dort la personne piquée',
        'Les signes d’extension vers les autres pièces',
      ],
      aside: photo({
        name: 'coutures-matelas-traces',
        alt: 'Traces de punaises de lit visibles sur la couture d’un matelas',
        brief: 'Macro sur une couture de matelas avec points noirs (déjections) et une mue, éclairage de lampe torche.',
        width: 1200,
        height: 800,
      }),
      faq: [
        {
          q: 'Faut-il jeter le lit ?',
          a: 'Le plus souvent, non. Un matelas et un sommier peuvent être traités. Jeter un lit infesté sans précaution est même risqué : en le sortant par les parties communes, on sème des punaises sur le trajet. Si un élément est réellement hors d’usage, l’élimination se prépare : conditionnement fermé, marquage et évacuation directe.',
        },
        {
          q: 'Les housses anti-punaises suffisent-elles ?',
          a: 'Elles servent à enfermer ce qui est dans le matelas et à rendre la surface lisible, mais elles ne traitent pas le sommier, la tête de lit ni le reste de la pièce. C’est un outil complémentaire, pas un traitement.',
        },
        {
          q: 'Pourquoi je me fais piquer alors que je ne trouve rien sur mon lit ?',
          a: 'Parce que le foyer peut être ailleurs : tête de lit fixée au mur, plinthe derrière le lit, table de chevet, ou même un logement voisin dans un immeuble. C’est typiquement la situation où une détection canine permet de gagner beaucoup de temps.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un matelas', href: '/punaises-de-lit-matelas' },
        { label: 'Punaises de lit dans un sommier', href: '/punaises-de-lit-sommier' },
        { label: 'Punaises de lit dans une chambre', href: '/punaises-de-lit-chambre' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
      ],
      ctaTitle: 'Des traces sur votre lit ?',
      ctaText: 'Ne déplacez rien et ne jetez rien : un diagnostic permet de savoir exactement quelles zones sont concernées avant d’agir.',
    }),

    /* ------------------------------------------------- 2. Matelas ------- */
    contentPage({
      url: '/punaises-de-lit-matelas',
      h1: 'Punaises de lit dans un matelas : inspecter, traiter, décider',
      title: 'Punaises de lit dans un matelas — faut-il le jeter ?',
      description:
        'Punaises de lit dans un matelas : lire les traces sur les coutures, savoir quand il peut être traité et dans quels cas il doit être éliminé.',
      eyebrow: 'Par situation',
      tag: 'matelas',
      priority: 0.7,
      crumbs: [CRUMB, { label: 'Dans un matelas' }],
      serviceName: 'Traitement des punaises de lit dans un matelas',
      lead: 'Le matelas est la pièce du couchage que tout le monde inspecte en premier — et celle où l’on conclut le plus souvent trop vite. Les traces s’y lisent, mais elles ne racontent qu’une partie de l’histoire.',
      quick: {
        question: 'Faut-il jeter un matelas infesté de punaises de lit ?',
        answer:
          'Dans la grande majorité des cas, non : un matelas peut être traité. Le jeter sans précaution disperse les punaises dans l’immeuble et vous expose à racheter un matelas qui sera recontaminé si le reste du logement n’est pas traité. La décision se prend après diagnostic, selon l’état réel du matelas.',
      },
      blocks: [
        {
          title: 'Ce que les traces sur un matelas vous apprennent',
          html: `<p>Un matelas est un support lisible : les tissus clairs révèlent bien les déjections, les coutures retiennent les mues et les œufs. Mais leur emplacement est aussi porteur d’information.</p>
          <ul>
            <li><strong>Des traces concentrées sur un seul côté</strong> indiquent généralement le côté où dort la personne piquée, donc l’axe principal du foyer.</li>
            <li><strong>Des traces sur tout le pourtour</strong> suggèrent une infestation plus ancienne ou une population importante.</li>
            <li><strong>Des traces sous le matelas, côté sommier</strong>, orientent l’attention vers la structure : c’est très souvent là que se trouve le cœur du problème.</li>
            <li><strong>Aucune trace sur le matelas malgré des piqûres</strong> ne signifie pas absence : il faut alors regarder la tête de lit, le sommier et l’environnement immédiat.</li>
          </ul>`,
        },
        {
          title: 'Les zones que l’on oublie',
          html: `<p>Sur un matelas, quatre endroits échappent régulièrement à l’inspection domestique :</p>
          <ul>
            <li>Le dessous de l’étiquette cousue, qui forme une poche parfaite</li>
            <li>Les poignées latérales et leurs coutures de fixation</li>
            <li>Les aérateurs en plastique et leur pourtour</li>
            <li>La face inférieure, rarement retournée complètement</li>
          </ul>
          <p>Ces zones ont un point commun : elles créent un interstice fermé, sombre et stable. C’est exactement ce que recherche une punaise de lit.</p>
          ${photo({
            name: 'matelas-etiquette-inspection',
            alt: 'Inspection du dessous de l’étiquette d’un matelas à la recherche de punaises de lit',
            brief: 'Main gantée soulevant l’étiquette cousue d’un matelas, lampe torche, traces visibles.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Traiter un matelas : ce qui fonctionne',
          html: `<p>Un matelas se traite, à condition de combiner plusieurs actions plutôt que d’en appliquer une seule :</p>
          <ul>
            <li><strong>L’aspiration professionnelle</strong> retire ce qui est présent en surface et dans les coutures accessibles, et réduit immédiatement la population.</li>
            <li><strong>La vapeur haute température</strong> traite les coutures et passepoils, à condition d’un passage lent et d’un matériel adapté.</li>
            <li><strong>Le traitement thermique</strong> agit sur le volume et pénètre le matelas en profondeur lorsque la température cible est atteinte et maintenue.</li>
            <li><strong>La mise en housse</strong>, après traitement, enferme ce qui pourrait subsister et rend la surface facile à contrôler.</li>
          </ul>
          <p>Ce qui ne fonctionne pas : pulvériser un produit du commerce sur le matelas. Outre l’exposition inutile pour la personne qui y dort, cela déplace les punaises vers le sommier et les plinthes sans traiter les œufs.</p>`,
        },
        {
          title: 'Dans quels cas un matelas doit-il être éliminé ?',
          html: `<p>Nous conseillons l’élimination dans des cas précis : matelas très dégradé, mousse ouverte ou déchirée offrant des cavités inaccessibles, infestation ancienne avec imprégnation importante, ou matelas déjà en fin de vie. C’est une décision technique, pas un réflexe.</p>
          ${callout({
            variant: 'sand',
            icon: 'alert',
            title: 'Si un matelas doit être jeté',
            text: 'Il doit être conditionné sur place dans une housse fermée avant d’être sorti, marqué comme infesté, et évacué directement — jamais laissé dans les parties communes, un local à poubelles ou sur le trottoir. Un matelas abandonné devant un immeuble est l’un des principaux vecteurs de propagation en ville.',
          })}`,
        },
      ],
      points: [
        'Les quatre faces et le pourtour complet du matelas',
        'Le dessous de l’étiquette et des poignées',
        'Les aérateurs et leurs contours',
        'La jonction matelas / sommier',
        'L’état général du matelas pour décider traitement ou élimination',
        'Le sommier, systématiquement, même si le matelas semble propre',
      ],
      aside: callout({
        icon: 'doc',
        title: 'Acheter un nouveau matelas ?',
        text: `Racheter un matelas avant d’avoir traité le logement est la dépense la plus inutile que nous voyons. Les punaises présentes dans le sommier, la tête de lit ou les plinthes colonisent le matelas neuf en quelques jours.

Si un remplacement est nécessaire, il se fait après le traitement, une fois la situation contrôlée.`,
      }),
      faq: [
        {
          q: 'Les punaises vivent-elles à l’intérieur du matelas ?',
          a: 'Elles se logent surtout dans les coutures, les passepoils, sous les étiquettes et dans les cavités accessibles. Elles ne creusent pas la mousse. En revanche, un matelas déchiré ou ouvert leur offre des cachettes profondes, très difficiles à atteindre.',
        },
        {
          q: 'Un lavage vapeur domestique suffit-il ?',
          a: 'Un appareil domestique n’atteint pas toujours la température utile à la sortie de la buse, et un passage trop rapide chasse les insectes sans les détruire. La vapeur est efficace, mais elle demande du matériel professionnel et une méthode.',
        },
        {
          q: 'Peut-on dormir sur le matelas pendant la période de traitement ?',
          a: 'Cela se décide au cas par cas. Continuer à dormir dans la chambre évite que les punaises ne suivent l’occupant vers le salon — mais cela dépend du protocole retenu et du calendrier d’intervention. Nous vous indiquons la consigne adaptée à votre situation.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un lit', href: '/punaises-de-lit-dans-un-lit' },
        { label: 'Punaises de lit dans un sommier', href: '/punaises-de-lit-sommier' },
        { label: 'Faut-il jeter son matelas ?', href: '/blog/faut-il-jeter-son-matelas' },
        { label: 'Les punaises survivent-elles dans un matelas ?', href: '/blog/punaises-survivent-matelas' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
      ],
      ctaTitle: 'Avant de jeter votre matelas, faites-le examiner',
      ctaText: 'Un diagnostic dit si le matelas peut être traité et, surtout, où se trouve réellement le reste de l’infestation.',
    }),

    /* -------------------------------------------------- 3. Sommier ------ */
    contentPage({
      url: '/punaises-de-lit-sommier',
      h1: 'Punaises de lit dans un sommier : la zone la plus souvent sous-estimée',
      title: 'Punaises de lit dans un sommier — inspection et traitement',
      description:
        'Punaises de lit dans un sommier tapissier ou à lattes : pourquoi il concentre souvent les foyers, comment l’inspecter et comment il se traite.',
      eyebrow: 'Par situation',
      tag: 'sommier',
      priority: 0.65,
      crumbs: [CRUMB, { label: 'Dans un sommier' }],
      serviceName: 'Traitement des punaises de lit dans un sommier',
      lead: 'Quand un diagnostic révèle une infestation installée, le sommier est très souvent plus concerné que le matelas. C’est aussi la partie que l’on inspecte le moins, parce qu’elle demande d’être démontée.',
      quick: {
        question: 'Pourquoi le sommier est-il si souvent infesté ?',
        answer:
          'Parce qu’il offre tout ce qu’une punaise de lit recherche : des angles fermés, du bois ou du tissu, des agrafes, une toile de fond sombre et une stabilité totale. Contrairement au matelas, il n’est jamais retourné ni nettoyé. Un sommier tapissier peut abriter un foyer important alors que le matelas paraît propre.',
      },
      blocks: [
        {
          title: 'Sommier tapissier, à lattes, coffre : trois situations différentes',
          html: `<p><strong>Le sommier tapissier</strong> est le plus problématique : sa toile de fond, ses angles agrafés et son cadre tissu forment un ensemble de cachettes fermées. Il est fréquent d’y découvrir des foyers denses alors que rien n’était visible en surface.</p>
          <p><strong>Le sommier à lattes</strong> est plus lisible : les foyers se logent aux extrémités des lattes, dans les embouts plastiques et à la jonction avec le cadre. Il s’inspecte et se traite plus facilement.</p>
          <p><strong>Le lit coffre</strong> combine deux difficultés : un volume de rangement rempli de textiles, et une structure fermée. C’est souvent le cas de figure le plus long à traiter, car le contenu doit être traité séparément.</p>`,
        },
        {
          title: 'Ce que révèle un démontage',
          html: `<p>Démonter un sommier, c’est ouvrir la seule zone que l’insecte considère comme sûre. Sur les interventions où le matelas ne montrait que quelques traces, le démontage révèle régulièrement :</p>
          <ul>
            <li>Des colonies groupées dans les angles internes du cadre</li>
            <li>Des œufs collés le long des agrafes de la toile de fond</li>
            <li>Des mues accumulées sur la face interne du tissu</li>
            <li>Des foyers dans les embouts des lattes et les encoches du cadre</li>
          </ul>
          <p>C’est pour cette raison que nous ne considérons jamais un diagnostic comme complet tant que le sommier n’a pas été examiné structurellement — et pas seulement soulevé.</p>`,
        },
        {
          title: 'Comment se traite un sommier',
          html: `<p>Le traitement dépend du type de structure. Sur un sommier à lattes, l’aspiration et la vapeur atteignent la plupart des cachettes, complétées par le traitement du volume. Sur un tapissier, l’accès est le problème principal : la chaleur du <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> présente ici un avantage net, puisqu’elle pénètre une structure que l’on ne peut pas ouvrir entièrement.</p>
          <p>Quand la structure est très dégradée ou l’infestation ancienne et dense, l’élimination du sommier peut être la solution la plus raisonnable. Elle se prépare alors comme celle d’un matelas : conditionnement fermé, évacuation directe, jamais de dépôt dans les parties communes.</p>
          ${photo({
            name: 'sommier-tapissier-demonte',
            alt: 'Sommier tapissier démonté lors d’une inspection punaises de lit',
            brief: 'Sommier tapissier retourné, toile de fond ouverte, traces visibles sur le cadre bois, technicien à l’œuvre.',
            width: 1200,
            height: 800,
          })}`,
        },
      ],
      points: [
        'Les angles internes du cadre et les agrafes',
        'La toile de fond et sa face interne',
        'Les embouts et extrémités des lattes',
        'La jonction sommier / pieds / sol',
        'Le contenu d’un lit coffre, traité séparément',
        'Le matelas, systématiquement, même si le sommier concentre les traces',
      ],
      aside: callout({
        title: 'Pourquoi ne pas se contenter de « soulever » le sommier',
        text: 'Soulever un sommier permet de voir le dessous de la toile, pas l’intérieur de la structure. Dans les infestations installées, c’est précisément à l’intérieur que se trouvent les colonies. Un diagnostic qui ne démonte rien passe à côté de l’essentiel.',
      }),
      faq: [
        {
          q: 'Faut-il jeter un sommier tapissier infesté ?',
          a: 'Pas systématiquement : il peut être traité, notamment par la chaleur qui pénètre la structure. L’élimination se justifie lorsque la structure est dégradée, l’infestation ancienne et dense, ou le sommier déjà en fin de vie.',
        },
        {
          q: 'Un sommier neuf peut-il être infesté rapidement ?',
          a: 'Oui, en quelques jours, si le reste du logement n’a pas été traité. C’est l’une des raisons pour lesquelles nous déconseillons tout rachat de literie avant la fin du traitement.',
        },
        {
          q: 'Faut-il vider un lit coffre avant votre venue ?',
          a: 'Non, pas avant le diagnostic : le contenu fait partie de ce qu’il faut examiner. En revanche, une fois le diagnostic posé, le conditionnement du contenu suit une consigne précise que nous vous remettons.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans un matelas', href: '/punaises-de-lit-matelas' },
        { label: 'Punaises de lit dans un lit', href: '/punaises-de-lit-dans-un-lit' },
        { label: 'Punaises de lit dans une chambre', href: '/punaises-de-lit-chambre' },
        { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
        { label: 'Méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
        { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
      ],
      ctaTitle: 'Le sommier est rarement épargné',
      ctaText: 'Si vous avez trouvé des traces sur le matelas, la structure du lit doit être examinée. Nous intervenons partout en Île-de-France.',
    }),

    /* --------------------------------------------------- 4. Canapé ------ */
    contentPage({
      url: '/punaises-de-lit-canape',
      h1: 'Punaises de lit dans un canapé : un foyer qui s’installe vite',
      title: 'Punaises de lit dans un canapé — que faire ?',
      description:
        'Punaises de lit dans un canapé ou un convertible : pourquoi le salon devient un second foyer, où inspecter et comment traiter le mobilier rembourré.',
      eyebrow: 'Par situation',
      tag: 'canape',
      priority: 0.65,
      crumbs: [CRUMB, { label: 'Dans un canapé' }],
      serviceName: 'Traitement des punaises de lit dans un canapé',
      lead: 'Un canapé infesté est presque toujours le signe de l’un de ces deux scénarios : quelqu’un y dort régulièrement, ou l’infestation de la chambre s’est étendue. Les deux appellent une réponse différente.',
      quick: {
        question: 'Comment savoir si mon canapé abrite des punaises de lit ?',
        answer:
          'Retirez les coussins et inspectez les coutures, les plis, le dessous des assises, les angles de la structure et l’envers du tissu de fond. Cherchez des taches noires groupées, des mues et des œufs. Un canapé convertible doit être ouvert entièrement : le mécanisme et le matelas replié sont des zones à contrôler en priorité.',
      },
      blocks: [
        {
          title: 'Pourquoi le canapé devient un second foyer',
          html: `<p>Les punaises de lit suivent l’occupant. Quand une personne quitte sa chambre pour dormir au salon — souvent par peur des piqûres — elle emmène le problème avec elle en quelques nuits. C’est l’un des enchaînements les plus fréquents que nous constatons : une chambre infestée, un salon utilisé comme refuge, puis deux foyers à traiter au lieu d’un.</p>
          <p>L’autre scénario est celui de l’extension naturelle : quand la population de la chambre devient trop importante, elle colonise les pièces voisines. Le canapé, avec ses tissus, ses plis et son immobilité, est une cible logique.</p>`,
        },
        {
          title: 'Les zones à inspecter sur un canapé',
          html: `<ul>
            <li>Les coutures des assises et des dossiers, y compris sur les faces cachées</li>
            <li>Le dessous des coussins amovibles et l’intérieur des housses</li>
            <li>La structure sous l’assise, souvent accessible en retournant le meuble</li>
            <li>La toile de fond en dessous, qui joue le même rôle que celle d’un sommier</li>
            <li>Les pieds, les angles et la jonction avec le sol</li>
            <li>Sur un convertible : le mécanisme, le matelas replié et ses coutures</li>
          </ul>
          <p>Un canapé en cuir ou en simili offre moins de cachettes en surface, mais ses coutures et sa structure restent des zones à contrôler. L’absence de tissu ne protège pas.</p>
          ${photo({
            name: 'canape-inspection-coutures',
            alt: 'Inspection des coutures et du dessous d’un canapé à la recherche de punaises de lit',
            brief: 'Coussins retirés, technicien inspectant les coutures d’assise d’un canapé avec une lampe.',
            width: 1200,
            height: 800,
          })}`,
        },
        {
          title: 'Traiter un canapé sans le détruire',
          html: `<p>Le mobilier rembourré supporte mal l’improvisation. Pulvériser un produit sur un canapé expose durablement les occupants — on y passe des heures par jour — pour un résultat généralement médiocre.</p>
          <p>Nous privilégions une combinaison : aspiration professionnelle des coutures et de la structure, vapeur haute température sur les surfaces accessibles avec un passage maîtrisé, et traitement du volume par la chaleur lorsque le protocole le prévoit. Les textiles amovibles suivent une consigne de lavage et de conditionnement spécifique.</p>
          ${callout({
            variant: 'sand',
            icon: 'alert',
            title: 'Le réflexe qui aggrave tout',
            text: 'Déposer un canapé infesté sur le trottoir est l’un des principaux vecteurs de propagation en milieu urbain. Un meuble abandonné est souvent récupéré dans l’heure — et l’infestation change simplement d’adresse.',
          })}`,
        },
      ],
      points: [
        'Les coutures d’assises, de dossiers et de accoudoirs',
        'La structure sous l’assise et la toile de fond',
        'Le mécanisme et le matelas d’un convertible',
        'Les textiles amovibles (plaids, housses, coussins)',
        'La chambre, systématiquement : le canapé est rarement le foyer d’origine',
        'Le tapis et les plinthes autour du canapé',
      ],
      aside: callout({
        icon: 'doc',
        title: 'Si vous dormez sur le canapé',
        text: `Arrêtez d’alterner entre le lit et le canapé : chaque déplacement crée un nouveau point de fixation pour l’infestation.

La consigne dépend du protocole retenu ; dans bien des cas, mieux vaut rester dans la chambre jusqu’à l’intervention plutôt que d’ouvrir un second front dans le salon.`,
      }),
      faq: [
        {
          q: 'Peut-on sauver un canapé infesté ?',
          a: 'Le plus souvent oui, surtout si l’infestation est repérée tôt. Les cas d’élimination concernent des meubles très dégradés, des mousses ouvertes ou des infestations anciennes et denses dans une structure impossible à ouvrir.',
        },
        {
          q: 'Un canapé en cuir peut-il être infesté ?',
          a: 'Oui. Le cuir offre moins de prise en surface, mais les coutures, la structure interne et le dessous du meuble restent des cachettes possibles.',
        },
        {
          q: 'Dois-je traiter aussi la chambre si seul le canapé montre des traces ?',
          a: 'Dans la quasi-totalité des cas, oui : le canapé est rarement le point de départ. Un diagnostic complet du logement évite de traiter une conséquence en laissant la cause intacte.',
        },
      ],
      related: [
        { label: 'Punaises de lit dans une chambre', href: '/punaises-de-lit-chambre' },
        { label: 'Punaises de lit dans un lit', href: '/punaises-de-lit-dans-un-lit' },
        { label: 'Punaises de lit dans un canapé (article)', href: '/blog/punaises-de-lit-canape' },
        { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
        { label: 'Méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
        { label: 'Demander un diagnostic', href: '/diagnostic' },
      ],
      ctaTitle: 'Un canapé suspect, une chambre à contrôler',
      ctaText: 'Traiter le salon sans examiner la chambre revient presque toujours à recommencer quelques semaines plus tard.',
    }),
  ];
}
