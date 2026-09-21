import { lifecycle } from '../../lib/illustrations.mjs';

export default {
  slug: 'combien-de-temps-vivent-punaises-de-lit',
  title: 'Combien de temps vivent les punaises de lit ?',
  category: 'Reconnaître',
  published: '2025-05-27',
  updated: '2026-04-02',
  readTime: '5 min de lecture',
  excerpt:
    'Durée de vie, résistance au jeûne, influence de la température : ce qui explique qu’un logement laissé vide ne se « vide » pas de ses punaises.',
  description:
    'Durée de vie des punaises de lit, résistance au jeûne et rôle de la température. Pourquoi laisser un logement inoccupé ne suffit pas à éliminer une infestation.',
  quick: {
    question: 'Combien de temps une punaise de lit peut-elle survivre sans se nourrir ?',
    answer:
      'Plusieurs mois selon les conditions, en particulier la température : le froid ralentit son métabolisme et prolonge sa résistance au jeûne. C’est pourquoi un logement laissé inoccupé quelques semaines n’est pas débarrassé de ses punaises — elles restent en attente dans leurs cachettes.',
  },
  faq: [
    {
      q: 'Partir en vacances peut-il régler le problème ?',
      a: 'Non. Les punaises réduisent simplement leur activité et attendent le retour d’un occupant. Pire : au retour, l’activité reprend souvent de façon plus marquée, ce qui donne l’impression d’une aggravation soudaine.',
    },
    {
      q: 'Le froid les tue-t-il ?',
      a: 'Le froid ralentit leur métabolisme plutôt qu’il ne les détruit rapidement. Une exposition au froid ne constitue pas un traitement fiable dans un logement : une baisse de température ambiante ne suffit pas.',
    },
    {
      q: 'Combien d’œufs une femelle peut-elle pondre ?',
      a: 'La ponte s’effectue régulièrement sur la durée de vie de la femelle, par petits groupes plutôt qu’en une fois. C’est ce rythme continu qui explique la progression rapide d’une population non traitée.',
    },
  ],
  related: [
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Comment reconnaître une punaise de lit ?', href: '/blog/reconnaitre-punaise-de-lit' },
    { label: 'Les punaises survivent-elles dans un matelas ?', href: '/blog/punaises-survivent-matelas' },
    { label: 'Chaleur contre punaises de lit', href: '/blog/chaleur-contre-punaises-de-lit' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
  ],
  body: `
<h2>Une durée de vie qui dépend des conditions</h2>
<p>La durée de vie d’une punaise de lit adulte se compte en mois, avec de fortes variations selon deux facteurs : la température ambiante et l’accès régulier à un hôte.</p>
<p>Dans un logement chauffé et occupé, le cycle se déroule plus vite : les mues s’enchaînent, la population croît. Dans une pièce froide et peu occupée, tout ralentit — le développement comme la mortalité.</p>

<h2>Le cycle de développement</h2>
<p>De l’œuf à l’adulte, l’insecte passe par cinq stades nymphaux. Chaque passage d’un stade au suivant nécessite un repas de sang. Cette contrainte biologique a une conséquence pratique : une population en croissance doit rester proche de l’occupant du logement.</p>
<p>C’est aussi ce qui explique la règle du mètre : les foyers se situent presque toujours à proximité immédiate du couchage, parce que s’en éloigner coûte de l’énergie et du risque.</p>

<figure class="figure figure--diagram">
  <div class="figure__frame">${lifecycle()}</div>
  <figcaption>Chaque mue nécessite un repas de sang : la durée du cycle dépend de la température et de l’accès à l’hôte.</figcaption>
</figure>
<h2>La résistance au jeûne, le point qui pose problème</h2>
<p>C’est la caractéristique qui rend les stratégies d’attente inefficaces. Une punaise de lit peut rester plusieurs mois sans se nourrir, en particulier lorsque la température est basse.</p>
<p>Conséquences concrètes que nous observons régulièrement :</p>
<ul>
  <li>Un logement vacant pendant l’été peut piquer dès la première nuit de réoccupation.</li>
  <li>Une chambre d’hôtel fermée plusieurs semaines n’est pas assainie pour autant.</li>
  <li>Un meuble stocké en cave ou en garde-meuble peut réintroduire l’infestation des mois plus tard.</li>
</ul>

<h2>Pourquoi la température est le paramètre clé</h2>
<p>La température gouverne la vitesse du cycle : plus elle est élevée, plus le développement est rapide. C’est ce qui explique qu’une infestation semble parfois « exploser » à l’arrivée de la saison de chauffe, alors qu’elle était simplement plus lente auparavant.</p>
<p>C’est aussi le principe sur lequel repose le <a href="/traitement-thermique-punaises-de-lit">traitement thermique</a> : une exposition à une température suffisamment élevée, maintenue assez longtemps, agit sur les différents stades de développement, œufs compris. La difficulté technique n’est pas d’atteindre cette température dans l’air, mais de l’atteindre au cœur des matériaux où les insectes se trouvent.</p>

<h2>Ce qu’il faut en retenir</h2>
<p>Le temps ne règle pas une infestation de punaises de lit. Il la ralentit ou l’accélère, mais il ne l’élimine pas. Toute stratégie fondée sur l’attente — vider un logement, partir quelques semaines, fermer une chambre — se solde par un retour de la situation au moment de la réoccupation.</p>`,
};
