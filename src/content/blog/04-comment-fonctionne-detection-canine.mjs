import { processStrip } from '../../lib/illustrations.mjs';

export default {
  slug: 'comment-fonctionne-detection-canine',
  title: 'Comment fonctionne une détection canine ?',
  category: 'Détection',
  published: '2025-06-11',
  updated: '2026-07-14',
  readTime: '6 min de lecture',
  excerpt:
    'Ce que le chien cherche, comment il le signale, ce que vaut un marquage et pourquoi la vérification visuelle reste indispensable.',
  description:
    'Détection canine punaises de lit : principe de la recherche olfactive, marquage, vérification visuelle, conditions d’intervention et limites réelles de la méthode.',
  quick: {
    question: 'Comment fonctionne la détection canine des punaises de lit ?',
    answer:
      'Un chien entraîné parcourt les zones proches du couchage et signale par un comportement codifié les endroits où il perçoit l’odeur des punaises de lit. Chaque marquage est ensuite vérifié visuellement par le maître-chien. La méthode sert à cibler l’inspection, pas à la remplacer.',
  },
  faq: [
    {
      q: 'Le chien peut-il se tromper ?',
      a: 'Oui, comme tout outil de détection. Un marquage peut correspondre à une odeur résiduelle ancienne ou être influencé par les conditions sur place. C’est précisément pour cela que chaque marquage est vérifié avant toute conclusion.',
    },
    {
      q: 'Combien de temps dure une session ?',
      a: 'La recherche olfactive demande une concentration intense, entrecoupée de pauses. La durée dépend du nombre de pièces et de l’encombrement ; le rythme est adapté pour préserver la qualité de la détection plutôt que pour aller vite.',
    },
    {
      q: 'Faut-il préparer le logement ?',
      a: 'Quelques règles améliorent nettement le résultat : ne pas nettoyer avec des produits odorants juste avant, ne pas déplacer les affaires, écarter les animaux domestiques pendant la recherche et éviter les courants d’air importants.',
    },
  ],
  related: [
    { label: 'La détection canine en détail', href: '/detection-canine-punaises-de-lit' },
    { label: 'Que faire après une détection positive ?', href: '/blog/que-faire-apres-detection-positive' },
    { label: 'Punaises de lit dans un immeuble', href: '/punaises-de-lit-immeuble' },
    { label: 'Punaises de lit en hôtel', href: '/punaises-de-lit-hotel' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
  ],
  body: `
<h2>Ce que cherche le chien</h2>
<p>Contrairement à une idée répandue, le chien ne cherche pas l’insecte : il cherche une odeur. Cette distinction explique l’essentiel de l’intérêt et des limites de la méthode.</p>
<p>Chercher une odeur permet de signaler un foyer enfermé dans une structure que l’on ne peut pas ouvrir — l’intérieur d’un sommier tapissier, une tête de lit fixée au mur, l’arrière d’une plinthe. C’est exactement là où l’inspection visuelle atteint ses limites.</p>

<h2>Le déroulé d’une recherche</h2>
<p>La session suit un ordre méthodique, généralement du couchage vers l’extérieur, pièce par pièce. Le maître-chien contrôle trois choses en permanence : la couverture des zones, le rythme, et l’état de concentration du chien.</p>
<p>Quand le chien perçoit l’odeur recherchée, il adopte un comportement codifié : immobilisation, orientation vers la source, parfois une position d’indication apprise. Ce signal est un <strong>marquage</strong> : il indique une zone à examiner, pas une conclusion.</p>

<figure class="figure figure--diagram">
  <div class="figure__frame">${processStrip(['CHIEN', 'MARQUAGE', 'VÉRIFICATION', 'CARTOGRAPHIE', 'TRAITEMENT'])}</div>
  <figcaption>Le marquage ouvre la vérification : il ne conclut jamais à lui seul.</figcaption>
</figure>
<h2>La vérification, étape non négociable</h2>
<p>Chaque marquage est repris à la lampe, avec démontage ciblé si nécessaire : ouverture d’une structure, dépose d’un cache, examen des coutures et des fixations. On y cherche des preuves matérielles — insectes vivants, œufs, mues, déjections.</p>
<p>Le résultat de cette vérification est ce qui figure dans le compte rendu, avec trois catégories distinctes : zones confirmées, zones marquées non confirmées, zones contrôlées sans marquage. Cette distinction est essentielle, notamment en copropriété ou en hôtellerie où le document peut fonder des décisions.</p>

<h2>Ce qui influence la performance</h2>
<p>Aucune entreprise sérieuse ne devrait présenter la détection canine comme fiable à 100 %. Les données disponibles convergent : la performance dépend du chien lui-même, de la qualité et de la régularité de son dressage, du travail du maître-chien, du protocole appliqué et des conditions rencontrées sur place.</p>
<ul>
  <li><strong>L’encombrement</strong> : une pièce saturée d’objets limite l’accès aux zones à contrôler.</li>
  <li><strong>Les odeurs concurrentes</strong> : produits ménagers récents, parfums d’ambiance, cuisine.</li>
  <li><strong>Les conditions physiques</strong> : température, courants d’air, humidité.</li>
  <li><strong>La durée</strong> : une recherche trop longue sans pause dégrade la fiabilité.</li>
</ul>

<h2>Quand elle apporte le plus</h2>
<p>Trois situations, dans notre pratique :</p>
<ul>
  <li><strong>Une infestation débutante</strong>, avec peu de traces visibles mais des piqûres constatées.</li>
  <li><strong>Un grand volume à contrôler</strong> : hôtel, résidence, immeuble, maison à plusieurs chambres. Contrôler visuellement trente logements est irréaliste ; une recherche olfactive permet de cibler.</li>
  <li><strong>Un contrôle après traitement</strong>, où l’enjeu est de vérifier une absence — l’exercice le plus difficile pour une inspection visuelle seule.</li>
</ul>
<p>Dans ce dernier cas, le délai entre le traitement et le contrôle doit être choisi avec soin : des odeurs résiduelles peuvent persister et fausser la lecture.</p>`,
};
