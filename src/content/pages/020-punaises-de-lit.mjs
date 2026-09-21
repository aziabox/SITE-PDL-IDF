import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, quick, callout, faq, ctaBand, figure, linkGrid, tocFromHeadings,
  h2, btnRow, btnPrimary, btnPhone, checklist, relatedSection,
} from '../../lib/components.mjs';
import { lifecycle, bedbug } from '../../lib/illustrations.mjs';
import { photo } from '../../lib/photo.mjs';

const HEADINGS = [
  'Reconnaître une punaise de lit',
  'Le cycle de développement',
  'Les traces qu’elles laissent',
  'Les piqûres',
  'Où se cachent-elles ?',
  'Comment se comportent-elles ?',
  'Comment arrivent-elles dans un logement ?',
  'Comment éviter qu’elles se propagent',
  'Que faire si vous en trouvez',
];

const FAQ = [
  {
    q: 'À quoi ressemble une punaise de lit adulte ?',
    a: 'Un insecte brun, ovale et aplati, de 5 à 6 mm environ — la taille d’un pépin de pomme. Après un repas de sang, son corps gonfle, s’allonge et prend une teinte rouge sombre. Elle ne vole pas et ne saute pas : elle marche.',
  },
  {
    q: 'Les punaises de lit transmettent-elles des maladies ?',
    a: 'Les punaises de lit ne sont pas considérées comme des vecteurs de maladies. Les conséquences les plus fréquentes sont les réactions cutanées, les démangeaisons, les troubles du sommeil et l’anxiété liée à l’infestation, qui ne doivent pas être minimisés.',
  },
  {
    q: 'Combien de temps une punaise de lit peut-elle survivre sans se nourrir ?',
    a: 'Plusieurs mois selon les conditions, en particulier la température. C’est pour cette raison qu’un logement laissé vide quelques semaines ne se « vide » pas des punaises : elles restent en attente dans leurs cachettes et reprennent leur activité au retour d’un occupant.',
  },
  {
    q: 'Un logement propre peut-il être infesté ?',
    a: 'Oui. Les punaises de lit ne sont pas liées au manque d’hygiène : elles sont transportées par les bagages, les vêtements, les meubles d’occasion ou par les logements voisins. Un intérieur impeccable peut être infesté, et un logement encombré est simplement plus difficile à inspecter et à traiter.',
  },
  {
    q: 'Peut-on s’en débarrasser seul ?',
    a: 'Les produits grand public donnent rarement un résultat durable et peuvent aggraver la situation en dispersant les insectes dans d’autres pièces. Le lavage à haute température des textiles et l’aspiration sont utiles, mais ils ne suffisent pas à traiter les foyers logés dans le sommier, les plinthes ou les meubles.',
  },
];

export default function () {
  const body = `
${pageHead({
  eyebrow: 'Dossier complet',
  title: 'Punaises de lit : reconnaître, comprendre, agir',
  lead: 'Ce que nous observons sur le terrain depuis plus de dix ans, réuni en une page : à quoi ressemble une punaise de lit, comment elle vit, ce qu’elle laisse derrière elle, et ce qu’il faut faire — ou ne surtout pas faire — quand on la découvre chez soi.',
  ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'pilier'), btnPhone('ghost')),
  media: figure({
    svg: `<svg viewBox="0 0 360 260" role="img" aria-label="Punaise de lit adulte, vue de dessus, environ 5 à 6 millimètres"><rect width="360" height="260" fill="#F8FAF9"/><g opacity=".45" stroke="#DCECF2" stroke-width="1">${Array.from({ length: 9 }, (_, i) => `<path d="M0 ${i * 30} H360"/>`).join('')}</g>${bedbug(180, 120, 4.2)}<path d="M120 212 H240" stroke="#173B4D" stroke-width="1.4"/><path d="M120 206v12M240 206v12" stroke="#173B4D" stroke-width="1.4"/><text x="180" y="238" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" fill="#173B4D">5 à 6 mm à l’âge adulte</text></svg>`,
    className: 'figure--diagram',
    caption: 'Corps ovale et aplati, brun, sans ailes fonctionnelles : la punaise de lit se déplace en marchant.',
  }),
})}

${section({
  variant: 'section--white',
  html: `
<div class="layout-doc">
  <div class="prose">
    ${quick({
      question: 'Comment reconnaître une punaise de lit en quelques secondes ?',
      answer:
        'Cherchez un insecte brun, ovale et aplati de 5 à 6 mm, sans ailes, qui marche lentement. Il vit à moins d’un mètre du couchage : coutures du matelas, structure du sommier, tête de lit. S’il est visible sur un mur en pleine journée, l’infestation est souvent déjà installée depuis plusieurs semaines.',
      level: 2,
    })}

    ${h2(HEADINGS[0])}
    <p>La punaise de lit adulte (<em>Cimex lectularius</em>) mesure entre 5 et 6 millimètres. Son corps est ovale, très aplati vue de dessus, de couleur brun clair à brun rouge. Cette forme plate lui permet de se glisser dans des interstices de moins d’un millimètre : une couture de matelas, une fente de bois, l’arrière d’une plinthe ou le pourtour d’une prise électrique.</p>
    <p>Après un repas de sang, son aspect change nettement : l’abdomen se gonfle, s’allonge et devient rouge sombre. Beaucoup de personnes qui « n’ont jamais vu de punaise » en ont en réalité écrasé une sans la reconnaître, parce qu’elle était gorgée de sang et ne ressemblait plus à l’image qu’elles en avaient.</p>
    <p>Trois points permettent de l’identifier sans erreur : elle ne vole pas, elle ne saute pas, et elle reste à proximité immédiate de l’endroit où l’on dort. Un insecte qui vole dans la chambre n’est pas une punaise de lit.</p>

    ${h2(HEADINGS[1])}
    <p>Le cycle commence par l’œuf : blanc nacré, environ un millimètre, collé dans une fissure ou une couture. La femelle les dépose par petits groupes, ce qui explique que l’on trouve souvent plusieurs foyers rapprochés plutôt qu’un seul.</p>
    <p>De l’œuf sort une nymphe, translucide et très petite. Elle passe par cinq stades successifs avant l’âge adulte, et chaque passage d’un stade au suivant nécessite un repas de sang. C’est un point essentiel : une population en développement doit se nourrir régulièrement, donc rester proche de l’occupant du logement.</p>
    ${figure({
      svg: lifecycle(),
      className: 'figure--diagram',
      caption: 'De l’œuf à l’adulte : cinq stades nymphaux, chacun précédé d’un repas de sang. La durée du cycle dépend surtout de la température ambiante et de l’accès à l’hôte.',
    })}
    <p>La durée du cycle varie fortement selon la température et la fréquence des repas. Dans un logement chauffé et occupé, il se déroule plus vite que dans une pièce froide et inoccupée. Cette variabilité explique pourquoi deux logements voisins peuvent présenter des niveaux d’infestation très différents à quelques semaines d’écart.</p>

    ${h2(HEADINGS[2])}
    <p>Les punaises de lit sont discrètes, mais elles laissent des indices. Savoir les lire évite de confondre une infestation réelle avec une inquiétude liée à des piqûres d’une autre origine.</p>
    <ul>
      <li><strong>Les déjections</strong> : de petites taches noires, rondes, de la taille d’une pointe de stylo, souvent regroupées. On les trouve sur les coutures du matelas, les angles du sommier, l’arrière de la tête de lit ou le long des plinthes. Sur un tissu clair, elles diffusent légèrement, comme de l’encre.</li>
      <li><strong>Les mues</strong> : des enveloppes translucides, de la forme de l’insecte mais vides. Leur présence indique que des nymphes se développent sur place — donc que l’infestation n’est pas seulement de passage.</li>
      <li><strong>Les œufs</strong> : blanchâtres, collés, très petits, généralement dans les zones abritées. Ils sont plus difficiles à repérer à l’œil nu.</li>
      <li><strong>Les traces de sang</strong> : de petites marques rouge-brun sur les draps, laissées quand un insecte gorgé est écrasé pendant la nuit.</li>
      <li><strong>Une odeur</strong> : dans les infestations importantes, une odeur sucrée et légèrement écœurante peut être perceptible dans la pièce.</li>
    </ul>
    ${callout({
      title: 'Les piqûres seules ne prouvent rien',
      text: 'Les réactions cutanées varient énormément d’une personne à l’autre : certaines ne réagissent pas du tout, d’autres développent des lésions marquées. Deux personnes dormant dans le même lit peuvent avoir des résultats totalement différents. C’est pourquoi nous cherchons systématiquement des traces matérielles avant de conclure.',
    })}

    ${h2(HEADINGS[3])}
    <p>Les piqûres apparaissent généralement sur les zones découvertes pendant le sommeil : bras, épaules, dos, jambes, cou. Elles sont souvent groupées ou alignées, parce que l’insecte pique plusieurs fois sur un court trajet. Les démangeaisons peuvent apparaître immédiatement ou plusieurs jours plus tard.</p>
    <p>La punaise de lit n’est pas considérée comme un vecteur de maladies. Les conséquences réelles sont ailleurs : grattage, surinfections possibles, sommeil dégradé, fatigue, et une charge psychologique souvent sous-estimée. Beaucoup de personnes n’osent plus recevoir chez elles ou dormir dans leur propre chambre. C’est une raison suffisante pour traiter sérieusement le problème.</p>

    ${h2(HEADINGS[4])}
    <p>La règle du mètre est un bon repère : la grande majorité des foyers se trouve à moins d’un mètre de l’endroit où dort l’occupant. Dans l’ordre de fréquence que nous constatons :</p>
    <ul>
      <li>Coutures, passepoils et étiquettes du matelas</li>
      <li>Structure du sommier, en particulier les sommiers tapissiers et les cadres en bois</li>
      <li>Tête de lit, surtout lorsqu’elle est capitonnée ou fixée au mur</li>
      <li>Table de chevet, tiroirs, plis des rideaux proches du lit</li>
      <li>Plinthes, fentes de parquet, encadrements de porte</li>
      <li>Canapé et fauteuil lorsqu’une personne y dort régulièrement</li>
    </ul>
    <p>Quand l’infestation progresse, les cachettes s’éloignent : prises électriques, cadres, papier peint décollé, voire pièces voisines. Cette extension est un indicateur d’ancienneté, et elle change la méthode de traitement à retenir.</p>
    ${photo({
      name: 'inspection-sommier-lampe',
      alt: 'Inspection à la lampe de la structure d’un sommier à la recherche de punaises de lit',
      brief: 'Gros plan sur une main gantée et une lampe éclairant l’angle d’un sommier, traces visibles.',
      width: 1200,
      height: 800,
    })}

    ${h2(HEADINGS[5])}
    <p>Les punaises de lit sont principalement actives la nuit, souvent en fin de nuit, lorsque l’hôte est immobile depuis plusieurs heures. Elles se repèrent par la chaleur et le dioxyde de carbone émis par la respiration. Après le repas, elles regagnent leur cachette pour digérer.</p>
    <p>Elles résistent longtemps au jeûne : plusieurs mois selon la température. C’est la raison pour laquelle laisser un logement vide « pour les affamer » ne fonctionne pas — et pourquoi une chambre d’hôtel inoccupée quelques semaines peut piquer dès la première nuit de réoccupation.</p>

    ${h2(HEADINGS[6])}
    <p>Elles ne viennent pas de la saleté : elles sont transportées. Les voies d’entrée les plus fréquentes que nous identifions lors des diagnostics sont :</p>
    <ul>
      <li>Un bagage posé sur un lit ou un porte-bagage lors d’un déplacement</li>
      <li>Un meuble, un matelas ou un objet d’occasion récupéré sans contrôle</li>
      <li>Un logement voisin infesté, via les gaines techniques, les plinthes ou les paliers</li>
      <li>Des vêtements, sacs ou textiles rapportés d’un lieu infesté</li>
      <li>Un déménagement, où cartons et matelas circulent entre plusieurs adresses</li>
    </ul>
    <p>En immeuble collectif, l’origine est souvent impossible à établir avec certitude — et ce n’est pas le plus important. Ce qui compte, c’est de savoir si le logement voisin ou mitoyen est concerné, car traiter un seul appartement dans un immeuble infesté conduit régulièrement à une réinstallation.</p>

    ${h2(HEADINGS[7])}
    <p>Quelques réflexes limitent réellement la propagation, avant comme après une intervention :</p>
    ${checklist([
      'Ne déplacez pas les affaires de la chambre infestée vers une autre pièce ou chez un proche',
      'Ne jetez pas matelas et meubles dans les parties communes : vous exposez tout l’immeuble',
      'Lavez les textiles à haute température, puis conservez-les dans des sacs fermés jusqu’au traitement',
      'Évitez de dormir dans le salon : vous créeriez un second foyer autour du canapé',
      'Signalez la situation au bailleur ou au syndic lorsqu’il s’agit d’un immeuble collectif',
      'N’utilisez pas de produits grand public : ils dispersent souvent les insectes sans traiter les foyers',
    ])}

    ${h2(HEADINGS[8])}
    <p>La première étape est toujours la même : confirmer la présence et localiser les foyers. C’est le rôle du diagnostic, avec une inspection visuelle méthodique et, si la configuration le justifie, une <a href="/detection-canine-punaises-de-lit">détection canine</a> pour cibler les zones difficiles à examiner.</p>
    <p>Vient ensuite le choix de la méthode : <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a>, approche combinée mêlant aspiration, vapeur et travail mécanique, ou traitement professionnel adapté lorsque c’est nécessaire. Toutes les options figurent sur la page consacrée aux <a href="/methodes-traitement-punaises-de-lit">méthodes de traitement</a>.</p>
    <p>Enfin, le suivi : consignes de réintégration des affaires, points de vigilance et contrôle quelques semaines plus tard. Une infestation considérée comme traitée sans vérification reste une hypothèse, pas un résultat.</p>
  </div>
  ${tocFromHeadings(HEADINGS)}
</div>`,
})}

${section({
  variant: 'section--glacier',
  eyebrow: 'FAQ',
  title: 'Questions fréquentes sur les punaises de lit',
  html: faq(FAQ),
  wrap: 'wrap--narrow',
})}

${relatedSection({
  title: 'Aller plus loin',
  links: [
    { label: 'Punaises de lit dans un lit', href: '/punaises-de-lit-dans-un-lit' },
    { label: 'Punaises de lit dans un matelas', href: '/punaises-de-lit-matelas' },
    { label: 'Punaises de lit dans un canapé', href: '/punaises-de-lit-canape' },
    { label: 'Punaises de lit en appartement', href: '/punaises-de-lit-appartement' },
    { label: 'La détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Le traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'Toutes les méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
    { label: 'Nos interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
  ],
})}

${ctaBand({
  title: 'Vous avez trouvé des traces ? Ne déplacez rien.',
  text: 'Un diagnostic permet de savoir exactement où en est l’infestation avant d’engager le moindre traitement. Nous intervenons dans les huit départements d’Île-de-France.',
  tag: 'pilier',
})}`;

  return definePage({
    url: '/punaises-de-lit',
    title: 'Punaises de lit : reconnaître, comprendre et agir — guide complet',
    description:
      'Reconnaître une punaise de lit, comprendre son cycle, repérer les traces et les piqûres, savoir où elles se cachent et limiter leur propagation.',
    priority: 0.9,
    changefreq: 'monthly',
    crumbs: [{ label: 'Punaises de lit' }],
    faq: FAQ,
    body,
  });
}
