import { thermalCurve } from '../../lib/illustrations.mjs';

export default {
  slug: 'traitement-thermique-comment-ca-marche',
  title: 'Traitement thermique : comment ça marche ?',
  category: 'Traitements',
  published: '2025-09-02',
  updated: '2026-07-28',
  readTime: '6 min de lecture',
  excerpt:
    'Le principe, le déroulé réel d’une intervention, ce que contrôlent les sondes et ce que la chaleur ne fait pas.',
  description:
    'Traitement thermique contre les punaises de lit : principe de la lutte physique par la chaleur, circulation de l’air, contrôle par sondes, déroulé d’intervention et limites.',
  quick: {
    question: 'Comment fonctionne un traitement thermique contre les punaises de lit ?',
    answer:
      'On élève la température de l’air d’un volume, puis on la maintient assez longtemps pour que la chaleur pénètre les matériaux où les punaises se cachent. L’action est physique, sans produit. Le point technique décisif n’est pas la température affichée dans la pièce, mais celle atteinte au cœur des matelas, meubles et interstices.',
  },
  faq: [
    {
      q: 'Combien de temps dure une intervention ?',
      a: 'Cela dépend du volume, de l’isolation et du protocole retenu. Une intervention comprend l’installation, la montée en température, le maintien puis la descente : elle occupe généralement une grande partie de la journée pour un logement.',
    },
    {
      q: 'Faut-il tout sortir du logement ?',
      a: 'Non, au contraire : sortir les affaires disperse l’infestation. Seuls les objets sensibles à la chaleur, listés sur la consigne de préparation, doivent être retirés — et traités séparément selon leur nature.',
    },
    {
      q: 'La chaleur abîme-t-elle le logement ?',
      a: 'Une intervention conduite correctement, avec une montée progressive et un contrôle des températures, n’endommage pas le bâti. Les éléments sensibles sont identifiés au diagnostic et retirés ou protégés avant l’intervention.',
    },
  ],
  related: [
    { label: 'Le traitement thermique en détail', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'La technologie HUGETRI400', href: '/hugetri400' },
    { label: 'Chaleur contre punaises de lit', href: '/blog/chaleur-contre-punaises-de-lit' },
    { label: 'Préparer son appartement', href: '/blog/preparer-appartement-avant-traitement' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
  ],
  body: `
<h2>Le principe : une action physique</h2>
<p>Le traitement thermique repose sur l’exposition à la chaleur, pas sur un produit. C’est ce qui le classe parmi les méthodes de lutte physique, aux côtés de l’aspiration et de la vapeur haute température, que les autorités sanitaires recommandent de privilégier.</p>
<p>La chaleur agit sur les différents stades de développement — œufs compris — à condition d’être réellement atteinte là où ils se trouvent. Toute la technique tient dans cette nuance.</p>

<h2>Pourquoi la circulation d’air est indispensable</h2>
<p>Chauffer une pièce ne suffit pas. Sans brassage, l’air chaud s’accumule en partie haute et laisse des zones nettement plus froides : derrière un meuble, sous un lit, au cœur d’un matelas, dans un angle de sommier.</p>
<p>C’est exactement là que se trouvent les punaises. La circulation d’air sert donc à homogénéiser la température dans tout le volume, y compris dans les zones les plus défavorables. Un traitement thermique sans brassage n’est pas un traitement : c’est un chauffage.</p>

<figure class="figure figure--diagram">
  <div class="figure__frame">${thermalCurve()}</div>
  <figcaption>Montée progressive puis maintien sur la durée définie par le protocole, sous contrôle des sondes.</figcaption>
</figure>
<h2>Ce que contrôlent les sondes</h2>
<p>Des sondes sont réparties dans le volume, positionnées aux endroits les plus difficiles à chauffer — pas là où la chaleur arrive en premier. Elles fournissent la seule information qui compte : la température réellement atteinte aux points critiques.</p>
<p>C’est cette lecture qui pilote l’intervention. On ne décide pas de la fin d’un traitement à la montre, mais à partir de ce qu’indiquent les points les plus défavorables. Si l’un d’eux reste en retard, l’équipe ajuste : repositionnement d’un brasseur, ouverture d’un volume fermé, modification de la diffusion.</p>

<h2>Le déroulé d’une intervention</h2>
<ol>
  <li><strong>Vérification de la préparation</strong> : l’équipe refait le tour du logement et corrige ce qui doit l’être.</li>
  <li><strong>Installation</strong> : générateur, gaines de diffusion, brasseurs, sondes.</li>
  <li><strong>Montée en température</strong> : progressive, pour laisser la chaleur pénétrer les matériaux.</li>
  <li><strong>Maintien</strong> : sur la durée définie par le protocole, sous contrôle permanent des relevés.</li>
  <li><strong>Traitement des zones sensibles</strong> : compléments ciblés à la vapeur ou par aspiration si nécessaire.</li>
  <li><strong>Descente et retrait</strong> : puis point avec vous sur ce qui a été fait et les consignes qui suivent.</li>
</ol>

<h2>Ce que la chaleur ne fait pas</h2>
<p>Un traitement thermique n’a aucun effet rémanent. Il agit pendant l’intervention, pas après. Si des punaises reviennent d’un logement voisin, d’un bagage ou d’un carton rapporté, elles ne rencontreront aucune barrière.</p>
<p>C’est pour cette raison que nous n’écrivons jamais « 100 % garanti » ou « aucun risque de retour » : ce sont des formules commerciales, pas des résultats vérifiables. Ce que nous pouvons décrire, ce sont les paramètres suivis pendant l’intervention et les consignes qui limitent la réintroduction.</p>

<h2>Quand cette méthode est pertinente</h2>
<p>Elle l’est particulièrement lorsque plusieurs pièces sont concernées, lorsque le mobilier est difficile à démonter, lorsqu’on souhaite limiter le recours aux produits, ou lorsqu’un délai court est nécessaire — remise en location, réouverture d’une chambre.</p>
<p>Elle l’est moins lorsque l’infestation est très localisée et récente, ou lorsque la source se trouve dans un logement voisin non traité : dans ce cas, c’est le périmètre qu’il faut corriger avant la méthode.</p>`,
};
