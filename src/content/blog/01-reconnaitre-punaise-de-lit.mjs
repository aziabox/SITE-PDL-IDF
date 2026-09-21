import { bedbug } from '../../lib/illustrations.mjs';

export default {
  slug: 'reconnaitre-punaise-de-lit',
  title: 'Comment reconnaître une punaise de lit ?',
  category: 'Reconnaître',
  published: '2025-03-14',
  updated: '2026-06-09',
  readTime: '6 min de lecture',
  excerpt:
    'Taille, couleur, forme, comportement : les critères qui permettent d’identifier une punaise de lit sans se tromper, et les insectes avec lesquels on la confond le plus souvent.',
  description:
    'Reconnaître une punaise de lit : 5 à 6 mm, ovale, aplatie, brune et sans ailes. Critères d’identification, confusions fréquentes et traces associées.',
  quick: {
    question: 'À quoi ressemble une punaise de lit ?',
    answer:
      'À un insecte brun, ovale et aplati de 5 à 6 mm à l’âge adulte — la taille d’un pépin de pomme. Elle n’a pas d’ailes fonctionnelles, ne vole pas, ne saute pas, et se déplace en marchant. Après un repas de sang, son corps gonfle, s’allonge et devient rouge sombre.',
  },
  faq: [
    {
      q: 'Peut-on voir une punaise de lit à l’œil nu ?',
      a: 'Oui, un adulte de 5 à 6 mm est parfaitement visible. Les nymphes des premiers stades, de l’ordre du millimètre et translucides, sont en revanche très difficiles à repérer sans éclairage direct.',
    },
    {
      q: 'Les punaises de lit volent-elles ?',
      a: 'Non. Elles ne possèdent pas d’ailes fonctionnelles. Un insecte qui vole dans la chambre n’est pas une punaise de lit : c’est l’un des critères d’exclusion les plus simples.',
    },
    {
      q: 'À quoi ressemblent les œufs ?',
      a: 'À de très petits grains blanchâtres d’environ un millimètre, collés dans une couture ou une fissure, souvent par petits groupes. Ils sont difficiles à voir sans lampe et sans savoir où regarder.',
    },
  ],
  related: [
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Reconnaître les piqûres', href: '/blog/piqures-punaises-de-lit' },
    { label: 'Combien de temps vivent-elles ?', href: '/blog/combien-de-temps-vivent-punaises-de-lit' },
    { label: 'Punaises de lit dans un matelas', href: '/punaises-de-lit-matelas' },
    { label: 'Erreurs à éviter', href: '/blog/punaises-de-lit-erreurs-a-eviter' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
  ],
  body: `
<h2>Les cinq critères d’identification</h2>
<p>Identifier une punaise de lit ne demande pas de matériel particulier. Cinq critères suffisent, et ils doivent être réunis.</p>
<ul>
  <li><strong>La taille</strong> : 5 à 6 mm à l’âge adulte. Plus petite, il s’agit probablement d’une nymphe ; nettement plus grande, ce n’est pas une punaise de lit.</li>
  <li><strong>La forme</strong> : ovale, très aplatie vue de dessus. C’est cette platitude qui lui permet de se glisser dans une couture ou une fente de bois.</li>
  <li><strong>La couleur</strong> : brun clair à brun rouge, plus foncée après un repas.</li>
  <li><strong>L’absence d’ailes</strong> : elle ne vole pas et ne saute pas. Elle marche, assez lentement.</li>
  <li><strong>La localisation</strong> : elle vit à proximité immédiate du couchage, rarement au-delà d’un mètre dans les infestations débutantes.</li>
</ul>

<figure class="figure figure--diagram">
  <div class="figure__frame">${`<svg viewBox="0 0 360 240" role="img" aria-label="Punaise de lit adulte vue de dessus, environ 5 à 6 mm"><rect width="360" height="240" fill="#F8FAF9"/><g opacity=".45" stroke="#DCECF2" stroke-width="1">${Array.from({ length: 8 }, (_, i) => `<path d="M0 ${i * 30} H360"/>`).join('')}</g>${bedbug(180, 110, 3.9)}<path d="M126 196 H234" stroke="#173B4D" stroke-width="1.4"/><path d="M126 190v12M234 190v12" stroke="#173B4D" stroke-width="1.4"/><text x="180" y="222" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" fill="#173B4D">5 à 6 mm à l’âge adulte</text></svg>`}</div>
  <figcaption>Corps ovale et aplati, brun, sans ailes : la punaise de lit adulte se déplace en marchant.</figcaption>
</figure>
<h2>Avant et après le repas : deux apparences</h2>
<p>C’est la source de confusion la plus fréquente. À jeun, la punaise est plate, brune et discrète. Gorgée de sang, son abdomen se distend, s’allonge et prend une teinte rouge sombre, presque bordeaux.</p>
<p>Beaucoup de personnes affirment n’avoir jamais vu de punaise alors qu’elles en ont écrasé une pendant la nuit : la trace rouge sur le drap et le corps déformé ne correspondaient pas à l’image qu’elles en avaient.</p>

<h2>Les confusions les plus fréquentes</h2>
<h3>Les larves de dermeste</h3>
<p>Souvent trouvées dans les logements, elles sont allongées et couvertes de poils. Une punaise de lit est glabre à l’œil nu et nettement plus large que longue en proportion.</p>
<h3>Les psoques</h3>
<p>Minuscules, pâles, présents dans les zones humides. Ils ne piquent pas et n’ont aucun lien avec le couchage.</p>
<h3>Les tiques</h3>
<p>Elles possèdent huit pattes à l’état adulte, contre six pour un insecte. Elles ne s’installent pas dans un matelas.</p>
<h3>Les puces</h3>
<p>Elles sautent, ce qu’une punaise de lit ne fait jamais. C’est le critère le plus rapide pour trancher.</p>

<h2>Les signes qui accompagnent la présence</h2>
<p>Trouver un insecte est un point de départ, mais l’essentiel du diagnostic repose sur les traces, plus nombreuses et plus faciles à trouver que les insectes eux-mêmes :</p>
<ul>
  <li>De petites taches noires groupées sur les coutures du matelas, les angles du sommier ou les plinthes : ce sont les déjections.</li>
  <li>Des mues translucides, enveloppes vides ayant la forme de l’insecte : elles prouvent qu’une population se développe sur place.</li>
  <li>Des traces de sang sur les draps, laissées par un insecte gorgé écrasé pendant la nuit.</li>
</ul>
<p>Ces éléments, réunis, constituent une confirmation bien plus solide qu’une observation isolée.</p>

<h2>Où regarder en priorité</h2>
<p>Inspectez dans cet ordre : coutures et passepoils du matelas, dessous de l’étiquette, face inférieure du matelas, angles et toile du sommier, tête de lit, puis plinthes et mobilier situé à moins d’un mètre du lit.</p>
<p>Dans la grande majorité des cas que nous diagnostiquons, la structure du sommier est plus concernée que le matelas lui-même — simplement parce qu’elle n’est jamais retournée ni nettoyée.</p>

<h2>Et si vous en trouvez une ?</h2>
<p>Ne déplacez rien, ne jetez rien, n’achetez pas de produit. Photographiez, notez la pièce concernée, et faites confirmer par un diagnostic. Les gestes pris dans l’urgence — déménager le matelas, dormir au salon, pulvériser un insecticide — dispersent une population concentrée et transforment un problème localisé en infestation étendue.</p>`,
};
