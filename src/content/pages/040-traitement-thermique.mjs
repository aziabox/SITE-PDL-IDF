import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, quick, callout, faq, ctaBand, figure, steps, checklist,
  btnRow, btnPrimary, btnPhone, relatedSection, h2, tocFromHeadings, lineCards,
} from '../../lib/components.mjs';
import { thermalCurve, thermalRoom, processStrip } from '../../lib/illustrations.mjs';
import { photo } from '../../lib/photo.mjs';
import { service } from '../../lib/schema.mjs';

const HEADINGS = [
  'Qu’est-ce qu’un traitement thermique ?',
  'Pourquoi utiliser la chaleur ?',
  'Comment se déroule une intervention ?',
  'Préparation du logement',
  'Installation du matériel',
  'Montée en température',
  'Contrôle des températures',
  'Traitement des zones sensibles',
  'Fin d’intervention',
  'Consignes après traitement',
  'Avantages',
  'Limites',
  'Quand choisir cette méthode ?',
];

const FAQ = [
  {
    q: 'Le traitement thermique détruit-il les œufs ?',
    a: 'La chaleur agit sur les différents stades de développement, œufs compris, lorsque la température cible est réellement atteinte et maintenue dans la zone où ils se trouvent. Tout l’enjeu technique est là : ce n’est pas la température affichée dans la pièce qui compte, mais celle atteinte au cœur des matelas, des meubles et des interstices. C’est pourquoi nous contrôlons les températures par sondes pendant toute l’intervention.',
  },
  {
    q: 'Dois-je quitter mon logement pendant le traitement ?',
    a: 'Oui : la pièce ou le logement traité n’est pas accessible pendant l’intervention, ni aux personnes ni aux animaux. La durée d’indisponibilité vous est indiquée avant l’intervention, en fonction de la surface et du protocole retenu.',
  },
  {
    q: 'Mes meubles et mes affaires risquent-ils d’être abîmés ?',
    a: 'Certains matériaux et objets ne supportent pas une exposition prolongée à la chaleur : bougies, cosmétiques, disques vinyles, certains instruments, plastiques fins, produits sous pression, certaines colles et certaines œuvres. La liste des objets à retirer vous est remise avant l’intervention, et nous faisons le tour du logement avec vous.',
  },
  {
    q: 'Un seul passage suffit-il ?',
    a: 'Cela dépend de la situation : étendue de l’infestation, configuration du logement, présence de logements voisins concernés. Nous n’affirmons pas qu’un passage règle systématiquement tout — ce serait une promesse invérifiable. Le nombre d’interventions et les contrôles prévus sont définis avec vous après le diagnostic.',
  },
  {
    q: 'Le traitement thermique laisse-t-il des résidus ?',
    a: 'La chaleur est une action physique : elle ne laisse pas de dépôt de produit dans le logement. Lorsqu’une action complémentaire est nécessaire sur des points précis, elle est expliquée et tracée.',
  },
];

export default function () {
  const body = `
${pageHead({
  eyebrow: '02 — Traitement thermique',
  title: 'Traitement thermique des punaises de lit',
  lead: 'La chaleur est une méthode de lutte physique : elle agit sur les punaises de lit présentes dans le volume traité, sans dépendre d’un insecticide pour les atteindre. Encore faut-il que la température soit réellement atteinte partout — c’est tout l’enjeu d’une intervention conduite sérieusement.',
  ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'thermique-head'), btnPhone('ghost')),
  media: figure({
    svg: thermalRoom(),
    className: 'figure--diagram',
    caption: 'Chaleur, circulation d’air et contrôle des températures : trois conditions indissociables d’un traitement thermique maîtrisé.',
  }),
})}

${section({
  variant: 'section--white',
  html: `
<div class="layout-doc">
  <div class="prose">
    ${quick({
      question: 'Le traitement thermique est-il adapté à mon logement ?',
      answer:
        'Dans de nombreux cas, oui : la chaleur traite le volume dans son ensemble, y compris des zones difficiles d’accès. Le choix dépend toutefois de la configuration réelle — isolation, volume, matériaux, objets sensibles présents, contraintes d’accès et d’alimentation électrique. C’est ce que le diagnostic permet de déterminer avant de s’engager.',
      level: 2,
    })}

    ${h2(HEADINGS[0])}
    <p>Un traitement thermique consiste à élever la température de l’air d’un volume — une pièce, plusieurs pièces, parfois un logement entier — puis à la maintenir suffisamment longtemps pour que la chaleur pénètre les matériaux dans lesquels les punaises de lit se cachent. L’action est physique : elle repose sur l’exposition thermique, et non sur un produit chimique.</p>
    <p>Nous mettons en œuvre cette méthode avec la technologie <a href="/hugetri400">HUGETRI400</a>, un équipement thermique professionnel de nouvelle génération, lorsque le protocole d’intervention et la configuration du logement s’y prêtent.</p>

    ${h2(HEADINGS[1])}
    <p>La chaleur présente trois intérêts que nous constatons régulièrement sur le terrain :</p>
    ${lineCards([
      { title: 'Elle atteint ce que l’on ne voit pas', text: 'Une fois la température établie dans le volume, elle pénètre progressivement les matelas, les structures de sommier et les interstices où l’inspection ne va pas.' },
      { title: 'Elle agit sur tous les stades', text: 'Œufs, nymphes et adultes sont sensibles à une exposition thermique suffisante, à condition que la température soit atteinte là où ils se trouvent.' },
      { title: 'Elle ne laisse pas de dépôt', text: 'C’est une action physique : aucun résidu de produit n’est déposé dans le logement par le traitement lui-même.' },
      { title: 'Elle traite en une opération continue', text: 'Le volume est traité dans son ensemble sur une même séquence, plutôt que zone par zone sur plusieurs jours.' },
    ])}
    <p>Le traitement thermique est une méthode reconnue de lutte physique contre les punaises de lit. Les autorités sanitaires recommandent d’ailleurs de privilégier une approche physique rigoureuse et professionnelle, dont la chaleur fait partie au même titre que l’aspiration et la vapeur haute température.</p>

    ${h2(HEADINGS[2])}
    ${figure({ svg: processStrip(['DIAGNOSTIC', 'PRÉPARATION', 'TRAITEMENT', 'CONTRÔLE', 'CONSEILS']), className: 'figure--diagram' })}
    <p>Une intervention thermique n’est jamais improvisée. Elle suit une séquence stable, dont chaque étape conditionne la suivante — et un raccourci pris au début se paie toujours à la fin.</p>

    ${h2(HEADINGS[3])}
    <p>La préparation est la partie qui vous concerne directement, et c’est aussi celle qui pèse le plus sur le résultat. Une consigne précise vous est remise après le diagnostic ; elle couvre généralement :</p>
    ${checklist([
      'Le retrait des objets sensibles à la chaleur (cosmétiques, bougies, produits sous pression, certains plastiques, disques, instruments, œuvres)',
      'Le traitement séparé du linge : lavage à haute température puis conservation en sacs fermés',
      'Le dégagement des accès autour du lit, du mobilier et des plinthes',
      'L’ouverture des tiroirs, placards et espaces fermés pour laisser circuler l’air chaud',
      'Le retrait des animaux, plantes et aliments du volume traité',
      'La consigne la plus importante : ne rien sortir du logement vers une autre adresse',
    ])}
    ${callout({
      variant: 'sand',
      icon: 'alert',
      title: 'Ce qu’il ne faut surtout pas faire',
      text: 'Déménager les affaires de la chambre « en attendant » est la cause la plus fréquente de réinfestation que nous rencontrions. Les punaises voyagent avec les cartons, les sacs et les textiles. Tant que le traitement n’a pas eu lieu, tout reste sur place, dans les conditions que nous vous indiquons.',
    })}

    ${h2(HEADINGS[4])}
    <p>À l’arrivée, l’équipe reprend le tour du logement, vérifie la préparation et corrige ce qui doit l’être. Le matériel est ensuite mis en place : générateur d’air chaud, gaines de diffusion, brasseurs pour la circulation de l’air, et sondes réparties dans le volume. Le positionnement des sondes n’est pas symbolique : elles sont placées aux endroits les plus difficiles à chauffer, pas là où la chaleur arrive en premier.</p>
    ${photo({
      name: 'installation-materiel-thermique',
      alt: 'Installation du matériel de traitement thermique et des gaines de diffusion dans une chambre',
      brief: 'Technicien déroulant une gaine de diffusion et positionnant une sonde dans une chambre préparée.',
      width: 1200,
      height: 800,
    })}

    ${h2(HEADINGS[5])}
    <p>La température est élevée progressivement. Cette montée n’est pas une course : elle doit rester contrôlée pour que la chaleur pénètre les matériaux sans créer de contraintes inutiles sur le bâti et le mobilier. La circulation d’air joue ici un rôle décisif — sans brassage, une pièce peut afficher une température correcte au centre tout en restant nettement plus froide derrière un meuble ou au cœur d’un matelas.</p>
    ${figure({
      svg: thermalCurve(),
      className: 'figure--diagram',
      caption: 'Montée progressive, puis maintien sur la durée définie par le protocole, sous contrôle de sondes réparties dans le volume traité.',
    })}

    ${h2(HEADINGS[6])}
    <p>Pendant toute l’intervention, les températures relevées par les sondes sont suivies. C’est cette lecture qui pilote l’opération : on ne décide pas de la fin d’un traitement à la montre, mais à partir de ce que les points les plus défavorables indiquent réellement.</p>
    <p>Si un point reste en retard, l’équipe intervient : repositionnement d’un brasseur, ouverture d’un volume fermé, ajustement de la diffusion. C’est un travail d’ajustement continu, et c’est ce qui distingue un traitement thermique conduit correctement d’un simple chauffage de pièce.</p>

    ${h2(HEADINGS[7])}
    <p>Certaines zones demandent un traitement complémentaire ciblé, parce que la chaleur de l’air y pénètre plus difficilement ou parce que leur contenu est sensible : coutures profondes, structures fermées, plinthes, jonctions de sol, meubles massifs. Selon les cas, un travail à la vapeur haute température, une aspiration professionnelle ou un démontage ciblé complètent l’action thermique. Ces compléments sont décrits sur la page consacrée aux <a href="/methodes-traitement-punaises-de-lit">méthodes de traitement</a>.</p>

    ${h2(HEADINGS[8])}
    <p>En fin d’intervention, la descente en température est conduite puis le matériel est retiré. Un point est fait avec vous : ce qui a été traité, ce qui a été observé pendant l’opération, les zones qui appelleront une vigilance particulière, et les consignes de réintégration de vos affaires.</p>

    ${h2(HEADINGS[9])}
    ${steps([
      { title: 'Réintégrer progressivement', text: 'Les textiles traités et conservés en sacs fermés sont réintroduits après le traitement, sans mélanger avec des affaires non contrôlées.' },
      { title: 'Ne rien rapporter du stockage extérieur', text: 'Un carton laissé chez un proche ou dans une cave pendant l’intervention doit être contrôlé avant de revenir dans le logement.' },
      { title: 'Observer, sans paniquer', text: 'Des observations ponctuelles peuvent survenir dans les jours qui suivent. Elles doivent être signalées et interprétées, pas traitées avec un produit acheté en urgence.' },
      { title: 'Maintenir le couchage lisible', text: 'Housses de matelas et sommier dégagés facilitent grandement les contrôles ultérieurs.' },
      { title: 'Planifier un contrôle', text: 'Une vérification quelques semaines plus tard, visuelle ou avec détection canine, permet de confirmer l’évolution réelle de la situation.' },
    ])}

    ${h2(HEADINGS[10])}
    ${checklist([
      'Action physique par la chaleur, sans dépôt de produit dans le logement',
      'Traitement du volume dans son ensemble, y compris des zones difficiles d’accès',
      'Action sur les différents stades de développement lorsque la température est atteinte',
      'Intervention conduite sous contrôle de températures, donc traçable',
      'Réintégration du logement rapide après la descente en température',
    ])}

    ${h2(HEADINGS[11])}
    ${callout({
      title: 'Ce que la chaleur ne fait pas',
      text: `Un traitement thermique n’a aucun effet rémanent : il agit pendant l’intervention, pas après. Si des punaises reviennent d’un logement voisin, d’un bagage ou d’un meuble rapporté, elles ne rencontreront aucune barrière.

Certains objets et matériaux ne supportent pas l’exposition à la chaleur et doivent être retirés au préalable. Certaines configurations (volume mal isolé, accès contraint, alimentation électrique insuffisante, infestation étendue au-delà du logement) rendent la méthode moins pertinente seule.

Enfin, nous n’écrivons pas « 100 % d’éradication » ni « aucun risque de retour » : ce sont des formules commerciales, pas des résultats vérifiables avant d’avoir vu le logement.`,
    })}

    ${h2(HEADINGS[12])}
    <p>Le traitement thermique est particulièrement pertinent lorsque l’infestation concerne un logement entier ou plusieurs pièces, lorsque le mobilier est difficile à démonter, lorsque les occupants souhaitent limiter le recours aux produits, ou lorsqu’un délai court est nécessaire (remise en location, réouverture d’une chambre d’hôtel).</p>
    <p>Il l’est moins lorsque l’infestation est très localisée et récente — un traitement ciblé peut alors suffire — ou lorsque le contexte impose d’abord de traiter la source : un immeuble où plusieurs logements sont concernés demande une approche coordonnée, faute de quoi le logement traité sera réinfesté depuis le voisinage.</p>
  </div>
  ${tocFromHeadings(HEADINGS)}
</div>`,
})}

${section({
  variant: 'section--glacier',
  eyebrow: 'FAQ',
  title: 'Questions fréquentes sur le traitement thermique',
  html: faq(FAQ),
  wrap: 'wrap--narrow',
})}

${relatedSection({
  title: 'Pages liées',
  links: [
    { label: 'La technologie HUGETRI400', href: '/hugetri400' },
    { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Toutes les méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
    { label: 'Préparer son logement avant traitement', href: '/blog/preparer-appartement-avant-traitement' },
    { label: 'Traitement chimique ou thermique ?', href: '/blog/traitement-chimique-ou-thermique' },
    { label: 'Punaises de lit dans un matelas', href: '/punaises-de-lit-matelas' },
    { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
    { label: 'Interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
  ],
})}

${ctaBand({
  title: 'Savoir si le thermique est adapté à votre logement',
  text: 'Cela se décide après le diagnostic, en fonction du volume, des matériaux et de l’étendue réelle de l’infestation. Expliquez-nous votre situation.',
  tag: 'thermique',
})}`;

  return definePage({
    url: '/traitement-thermique-punaises-de-lit',
    title: 'Traitement thermique punaises de lit — déroulé, avantages et limites',
    description:
      'Traitement thermique des punaises de lit : principe, préparation, montée en température, contrôle par sondes, consignes après traitement et limites.',
    priority: 0.9,
    changefreq: 'monthly',
    crumbs: [{ label: 'Expertise', href: '/methodes-traitement-punaises-de-lit' }, { label: 'Traitement thermique' }],
    faq: FAQ,
    schema: [
      service({
        name: 'Traitement thermique des punaises de lit',
        description:
          'Traitement par la chaleur d’un logement ou d’un établissement infesté par les punaises de lit, conduit sous contrôle de températures.',
        url: '/traitement-thermique-punaises-de-lit',
        serviceType: 'Traitement thermique punaises de lit',
      }),
    ],
    body,
  });
}
