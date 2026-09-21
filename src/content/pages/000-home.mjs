import { definePage } from '../../lib/page.mjs';
import {
  section, cardGrid, checklist, steps, quick, callout, faq, ctaBand, figure,
  linkGrid, btnRow, btnPrimary, btnPhone, pills, statLine, icon, esc, departments,
} from '../../lib/components.mjs';
import { heroPlan, idfMap, hugetriPanel, dogScene, processStrip } from '../../lib/illustrations.mjs';
import { photo } from '../../lib/photo.mjs';
import { organization, service } from '../../lib/schema.mjs';
import { postCard } from '../../lib/blog.mjs';

const FAQ = [
  {
    q: 'Comment savoir si j’ai vraiment des punaises de lit ?',
    a: `Trois indices se recoupent : des piqûres alignées ou groupées apparues pendant la nuit, de petites taches noires (déjections) sur les coutures du matelas, le sommier ou les plinthes, et parfois des mues translucides. Seule l’observation d’insectes vivants, d’œufs ou de traces fraîches confirme réellement l’infestation. C’est le rôle du diagnostic : chercher ces preuves là où elles se trouvent.`,
  },
  {
    q: 'Faut-il jeter son matelas ou ses meubles ?',
    a: `Dans la grande majorité des situations, non. Un matelas peut être traité, et jeter un meuble infesté sans précaution risque surtout de disperser les punaises dans l’immeuble ou dans le reste du logement. La décision se prend après diagnostic, en fonction de l’état réel du couchage.`,
  },
  {
    q: 'Combien de temps dure une intervention ?',
    a: `Cela dépend de la méthode retenue, de la surface et du nombre de pièces concernées. Un traitement thermique demande une installation, une montée en température puis un maintien suivi par sondes : il occupe généralement une grande partie de la journée pour un logement. Le déroulé précis vous est indiqué avant l’intervention.`,
  },
  {
    q: 'Intervenez-vous dans tous les départements d’Île-de-France ?',
    a: `Oui : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d’Oise (95). Chaque département dispose de sa page dédiée avec les spécificités locales d’habitat.`,
  },
  {
    q: 'La détection canine est-elle fiable à 100 % ?',
    a: `Aucun professionnel sérieux ne devrait l’affirmer. Le chien est un excellent outil de localisation, mais sa performance dépend du dressage, du maître-chien, du protocole suivi et des conditions d’intervention (odeurs concurrentes, encombrement, température). C’est pourquoi chaque marquage est vérifié visuellement avant d’en tirer une conclusion.`,
  },
];

export default function home() {
  const posts = (globalThis.__POSTS__ || []).slice(0, 3);

  const hero = `
<section class="hero">
  <div class="wrap hero__grid">
    <div>
      <p class="hero__kicker"><span class="dot"></span> Entreprise familiale · plus de 10 ans d’expérience terrain</p>
      <h1>Punaises de lit en Île-de-France : détection &amp; traitement professionnel</h1>
      <p class="hero__lead">Plus de 10 ans de savoir-faire familial pour identifier rapidement l’infestation et choisir la méthode de traitement adaptée à votre logement ou votre établissement.</p>
      <div class="hero__cta">
        ${btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', 'hero'), btnPhone('tel'))}
        <p class="hero__phone-note">Un doute, une urgence, une question sur un devis : parlez directement à un spécialiste.</p>
      </div>
      ${pills([
        { icon: 'dog', label: 'Détection canine' },
        { icon: 'heat', label: 'Traitement thermique' },
        { icon: 'shield', label: 'Traitements professionnels' },
        { icon: 'map', label: 'Intervention en Île-de-France' },
      ])}
    </div>
    <div class="hero__media">
      <figure class="figure figure--diagram">
        <div class="hero__figbox">
          <div class="figure__frame">${heroPlan()}</div>
          <div class="hero__badge">
            <strong>+ de 10 ans</strong>
            <span>d’expérience familiale sur le terrain, transmise de père en fils.</span>
          </div>
        </div>
        <figcaption>Les zones inspectées en priorité : <b>1</b> tête de lit · <b>2</b> coutures du matelas · <b>3</b> sommier · <b>4</b> plinthes · <b>5</b> mobilier à moins d’un mètre du couchage.</figcaption>
      </figure>
    </div>
  </div>
</section>`;

  const repere = section({
    variant: 'section--tight section--white',
    html: statLine([
      { title: 'Diagnostic avant tout', text: 'Comprendre l’étendue réelle avant d’engager le moindre traitement.' },
      { title: 'Détection canine', text: 'Localiser les foyers difficiles à voir, puis vérifier visuellement.' },
      { title: 'Traitement thermique', text: 'La chaleur comme méthode de lutte physique, conduite sous contrôle.' },
      { title: 'Suivi après intervention', text: 'Consignes, points de contrôle et accompagnement dans la durée.' },
    ]),
  });

  const histoire = section({
    id: 'notre-histoire',
    variant: 'section--white',
    html: `
<div class="expertise">
  <div class="expertise__item">
    <div class="expertise__body">
      <p class="eyebrow">Notre histoire</p>
      <h2>Une expertise familiale construite sur plus de 10 ans de terrain</h2>
      <p>Notre entreprise est née d’un métier appris sur le terrain, puis transmis de père en fils. Les punaises de lit ne s’apprennent pas dans un manuel : elles s’apprennent dans les chambres, les sommiers démontés, les plinthes décollées et les retours d’intervention qu’on analyse le lendemain.</p>
      <p>Au fil des années, cette pratique quotidienne a fait émerger des réflexes : savoir où regarder en premier selon le type d’immeuble, reconnaître une infestation ancienne d’une contamination récente, comprendre comment les punaises circulent entre deux logements mitoyens.</p>
      <blockquote>Chaque infestation est différente. Notre métier ne consiste pas simplement à appliquer un produit, mais à comprendre où se trouvent les punaises, comment elles se sont installées et quelle méthode est réellement adaptée à la situation.</blockquote>
      <p>C’est ce que nous appelons un travail de spécialiste : une seule espèce, un seul objectif, et le temps passé à observer avant d’agir.</p>
      <p class="mt-32"><a class="link-arrow" href="/notre-histoire">Découvrir notre façon de travailler</a></p>
    </div>
    <div class="expertise__media">
      ${photo({
        name: 'equipe-inspection-chambre',
        alt: 'Technicien inspectant les coutures d’un matelas lors d’un diagnostic punaises de lit',
        brief: 'Technicien en tenue de travail, lampe à la main, inspectant les coutures d’un matelas dans une chambre réelle.',
        width: 1200,
        height: 900,
      })}
    </div>
  </div>
</div>`,
  });

  const expertise = section({
    id: 'expertise',
    variant: 'section--glacier',
    eyebrow: 'Notre expertise',
    title: 'Deux savoir-faire complémentaires : localiser, puis traiter',
    lead: 'Localiser précisément une infestation et la traiter efficacement sont deux métiers différents. Nous les pratiquons tous les deux, parce que l’un sans l’autre conduit presque toujours à des traitements incomplets.',
    html: `
<div class="expertise">
  <article class="expertise__item">
    <div class="expertise__body">
      <p class="expertise__num">01 — Détection canine</p>
      <h3 style="font-size:clamp(1.35rem,1.1rem+1vw,1.85rem)">Localiser les foyers difficiles à voir</h3>
      <p>Un chien spécialement entraîné détecte l’odeur des punaises de lit là où l’œil ne passe pas : sous un sommier tapissier, dans une tête de lit fixée au mur, derrière une plinthe ou dans un meuble adjacent au couchage.</p>
      <ul>
        <li>Appartements, maisons, immeubles et résidences</li>
        <li>Hôtels, logements collectifs, bureaux et locaux professionnels</li>
        <li>Contrôles ciblés sur une chambre suspecte ou un logement voisin</li>
        <li>Recherche après traitement, pour vérifier l’absence de foyer résiduel</li>
      </ul>
      ${callout({
        title: 'Ce que nous ne promettons pas',
        text: `La détection canine n’est pas fiable à 100 %, et personne ne devrait l’affirmer. Sa performance dépend du dressage du chien, du maître-chien, du protocole appliqué et des conditions réelles sur place. Nous la présentons pour ce qu’elle est : un outil professionnel de localisation, complété par une inspection visuelle.`,
      })}
      ${btnRow(btnPrimary('Organiser une détection canine', '/detection-canine-punaises-de-lit', 'home-canine'))}
    </div>
    <div class="expertise__media">
      ${figure({ svg: dogScene(), className: 'figure--diagram', caption: 'Le chien marque une zone odorante ; le maître-chien vérifie ensuite visuellement chaque marquage avant toute conclusion.' })}
    </div>
  </article>

  <article class="expertise__item">
    <div class="expertise__body">
      <p class="expertise__num">02 — Traitement thermique</p>
      <h3 style="font-size:clamp(1.35rem,1.1rem+1vw,1.85rem)">HUGETRI400, la technologie thermique nouvelle génération</h3>
      <p>Le traitement thermique agit par la chaleur : c’est une méthode de lutte physique, sans dépendre d’un insecticide pour atteindre les insectes présents dans le volume traité. Nous le mettons en œuvre avec la technologie HUGETRI400 lorsque le protocole et le logement s’y prêtent.</p>
      <div class="grid grid--2 mt-32">
        <div class="card card--line"><h3>Chaleur</h3><p>Montée en température contrôlée du volume traité.</p></div>
        <div class="card card--line"><h3>Circulation d’air</h3><p>Diffusion homogène de la chaleur dans l’ensemble du volume.</p></div>
        <div class="card card--line"><h3>Contrôle</h3><p>Surveillance des températures pendant toute l’intervention.</p></div>
        <div class="card card--line"><h3>Traitement</h3><p>Exposition thermique conduite selon le protocole retenu.</p></div>
      </div>
      <p class="mt-32">${btnRow(btnPrimary('Découvrir le traitement thermique', '/traitement-thermique-punaises-de-lit', 'home-thermique'), `<a class="btn btn--ghost" href="/hugetri400">La technologie HUGETRI400</a>`)}</p>
    </div>
    <div class="expertise__media">
      ${figure({ svg: hugetriPanel(), caption: 'Quatre fonctions articulées : chaleur, circulation d’air, contrôle des températures et exposition conduite selon le protocole.' })}
    </div>
  </article>
</div>`,
  });

  const methodes = section({
    variant: 'section--white',
    eyebrow: 'Méthodes professionnelles',
    title: 'Le thermique n’est pas la seule réponse',
    lead: 'Selon le logement, le niveau d’infestation et les contraintes sur place, plusieurs approches peuvent être combinées. Nous choisissons la méthode en fonction de la situation, pas l’inverse.',
    html: `${cardGrid(
      [
        { icon: 'heat', title: 'Traitement thermique', text: 'Action physique par la chaleur sur le volume traité, conduite sous contrôle de températures.', href: '/traitement-thermique-punaises-de-lit', linkLabel: 'En savoir plus' },
        { icon: 'steam', title: 'Vapeur haute température', text: 'Traitement ciblé des surfaces accessibles : coutures, plinthes, textiles, points de couture du sommier.', href: '/methodes-traitement-punaises-de-lit#vapeur', linkLabel: 'En savoir plus' },
        { icon: 'vacuum', title: 'Aspiration professionnelle', text: 'Retrait mécanique immédiat des insectes, mues et œufs visibles, avant les autres opérations.', href: '/methodes-traitement-punaises-de-lit#aspiration', linkLabel: 'En savoir plus' },
        { icon: 'clipboard', title: 'Travail mécanique', text: 'Démontage, mise en housse, isolement du couchage et traitement des points de fuite.', href: '/methodes-traitement-punaises-de-lit#mecanique', linkLabel: 'En savoir plus' },
        { icon: 'shield', title: 'Traitement biocide professionnel', text: 'Lorsqu’il est nécessaire, dans le respect de la réglementation applicable et des qualifications requises.', href: '/methodes-traitement-punaises-de-lit#biocide', linkLabel: 'En savoir plus' },
        { icon: 'clock', title: 'Prévention et suivi', text: 'Consignes, points de contrôle et vérifications pour éviter une réinstallation après traitement.', href: '/methodes-traitement-punaises-de-lit#suivi', linkLabel: 'En savoir plus' },
      ],
      3
    )}`,
  });

  const deroule = section({
    variant: 'section--sand',
    eyebrow: 'Déroulé type',
    title: 'Du premier appel au contrôle après traitement',
    lead: 'Un cadre clair, expliqué avant l’intervention : vous savez ce qui va se passer, ce que vous avez à préparer et ce qui sera vérifié ensuite.',
    html: `
${figure({ svg: processStrip(['DIAGNOSTIC', 'PRÉPARATION', 'TRAITEMENT', 'CONTRÔLE', 'CONSEILS']), className: 'figure--diagram' })}
<div class="mt-44">
${steps([
  { title: 'Premier échange', text: 'Vous décrivez ce que vous observez : piqûres, traces, pièces concernées, traitements déjà tentés. Nous identifions déjà les points à vérifier en priorité.' },
  { title: 'Diagnostic sur place', text: 'Inspection méthodique du couchage et de son environnement, avec détection canine si la configuration le justifie. Objectif : savoir où sont réellement les foyers.' },
  { title: 'Choix de la méthode', text: 'Nous vous expliquons les options adaptées à votre logement, leurs limites et ce qu’elles impliquent pour vous, avant toute décision.' },
  { title: 'Préparation du logement', text: 'Une liste précise de ce qu’il faut faire — et surtout de ce qu’il ne faut pas faire — vous est remise. La qualité de la préparation conditionne le résultat.' },
  { title: 'Intervention', text: 'Mise en œuvre du traitement retenu, avec suivi des paramètres pendant toute la durée de l’opération.' },
  { title: 'Consignes et contrôle', text: 'Consignes après traitement, points de vigilance et vérification de l’évolution de la situation dans les semaines qui suivent.' },
])}
</div>`,
  });

  const geo = section({
    variant: 'section--white',
    eyebrow: 'Réponses rapides',
    title: 'Les questions que l’on nous pose en premier',
    lead: 'Des réponses courtes et honnêtes, sans promesse commerciale, pour vous aider à décider de la suite.',
    html: `
<div class="grid grid--2">
  ${quick({ question: 'Comment savoir si j’ai des punaises de lit ?', answer: 'Cherchez trois signes : des piqûres apparues la nuit, souvent alignées ; de petites taches noires sur les coutures du matelas, le sommier ou les plinthes ; des mues translucides. La confirmation vient de l’observation de traces ou d’insectes, pas des seules piqûres, qui varient beaucoup d’une personne à l’autre.', level: 3 })}
  ${quick({ question: 'Comment fonctionne la détection canine ?', answer: 'Un chien entraîné parcourt les zones proches du couchage et signale les endroits où il perçoit l’odeur des punaises. Chaque marquage est ensuite vérifié visuellement. Cette approche sert à cibler l’inspection, notamment dans les zones inaccessibles à l’œil, pas à remplacer le contrôle humain.', level: 3 })}
  ${quick({ question: 'Quel traitement choisir ?', answer: 'Cela dépend du niveau d’infestation, du type de logement, des matériaux présents et des contraintes d’accès. Le traitement thermique convient à de nombreux logements ; d’autres situations demandent une approche combinée : aspiration, vapeur, travail mécanique, et si nécessaire un traitement professionnel adapté.', level: 3 })}
  ${quick({ question: 'Que faire après le traitement ?', answer: 'Suivez les consignes remises : réintégration progressive des affaires traitées, vigilance sur les textiles, aucune réintroduction d’objets non contrôlés. Un contrôle quelques semaines plus tard permet de vérifier qu’aucun foyer résiduel n’est resté actif.', level: 3 })}
</div>
<p class="mt-32"><a class="link-arrow" href="/punaises-de-lit">Tout savoir sur la punaise de lit</a></p>`,
  });

  const carte = section({
    id: 'ile-de-france',
    variant: 'section--glacier',
    eyebrow: 'Île-de-France',
    title: 'Nos interventions département par département',
    lead: 'Sélectionnez un département pour accéder à sa page dédiée : contexte d’habitat, problématiques rencontrées et services disponibles.',
    html: `
<div class="idf">
  <div class="idf__mapwrap">${idfMap()}<p class="idf__hint">Carte schématique des huit départements — survolez ou sélectionnez un département pour afficher les services disponibles.</p></div>
  <div class="idf__panel" data-idf-panel></div>
</div>
<ul class="idf__list">
  <li><a href="/punaises-de-lit-ile-de-france">Toute l’Île-de-France</a></li>
  ${departments.map((d) => `<li><a href="/${d.slug}">${d.code} — ${esc(d.name)}</a></li>`).join('')}
</ul>`,
  });

  const confiance = section({
    variant: 'section--white',
    eyebrow: 'Confiance',
    title: 'Pourquoi nous faire confiance ?',
    html: `
<div class="grid grid--2">
  <div>
    ${checklist([
      'Plus de 10 ans d’expérience sur le terrain',
      'Entreprise familiale, pas un réseau d’apporteurs d’affaires',
      'Expertise transmise de père en fils',
      'Détection canine pour localiser les foyers',
      'Traitement thermique conduit sous contrôle de températures',
      'Méthodes professionnelles adaptées à chaque situation',
      'Diagnostic préalable avant toute proposition de traitement',
      'Intervention dans les huit départements d’Île-de-France',
      'Accompagnement avant, pendant et après le traitement',
    ])}
  </div>
  <div>
    ${callout({
      variant: 'sand',
      icon: 'doc',
      title: 'Ce que vous ne trouverez pas sur ce site',
      text: `Pas de taux de réussite inventé, pas de « 100 % garanti », pas de faux avis ni de chiffres décoratifs. Les certifications, assurances et références que nous pourrons afficher le seront uniquement sur pièces justificatives.

Nous préférons expliquer les limites d’une méthode plutôt que promettre un résultat que personne ne peut garantir par écrit avant d’avoir vu le logement.`,
    })}
    ${photo({
      name: 'materiel-thermique-intervention',
      alt: 'Matériel de traitement thermique installé dans une pièce avant intervention',
      brief: 'Matériel thermique en place dans une pièce vidée, gaines et sondes visibles, avant montée en température.',
      width: 1200,
      height: 800,
    })}
  </div>
</div>`,
  });

  const avis = section({
    variant: 'section--sand section--tight',
    html: `
<div class="section__head section__head--center">
  <p class="eyebrow">Témoignages</p>
  <h2>Les avis de nos clients</h2>
  <p class="lead">Cet emplacement est réservé aux témoignages réellement recueillis auprès de clients. Tant qu’ils ne sont pas vérifiés, il reste vide : nous ne publions pas d’avis fictifs.</p>
</div>
<div class="placeholder-note text-center">Emplacement prêt à recevoir les avis vérifiés (plateforme d’avis, fiche d’établissement ou témoignages recueillis avec accord écrit). Aucun contenu inventé n’est affiché ici.</div>`,
  });

  const problemes = section({
    variant: 'section--white',
    eyebrow: 'Trouver la bonne page',
    title: 'Où observez-vous le problème ?',
    html: `
${linkGrid([
  { label: 'Punaises de lit dans un lit', href: '/punaises-de-lit-dans-un-lit' },
  { label: 'Dans un matelas', href: '/punaises-de-lit-matelas' },
  { label: 'Dans un sommier', href: '/punaises-de-lit-sommier' },
  { label: 'Dans un canapé', href: '/punaises-de-lit-canape' },
  { label: 'Dans une chambre', href: '/punaises-de-lit-chambre' },
  { label: 'Dans un appartement', href: '/punaises-de-lit-appartement' },
  { label: 'Dans une maison', href: '/punaises-de-lit-maison' },
  { label: 'Dans un immeuble', href: '/punaises-de-lit-immeuble' },
])}
<h2 class="mt-44" style="font-size:clamp(1.2rem,1.05rem+.6vw,1.5rem)">Vous êtes…</h2>
${linkGrid([
  { label: 'Particulier', href: '/punaises-de-lit-particulier' },
  { label: 'Hôtel', href: '/punaises-de-lit-hotel' },
  { label: 'Location saisonnière', href: '/punaises-de-lit-location-saisonniere' },
  { label: 'Agence immobilière', href: '/punaises-de-lit-agence-immobiliere' },
  { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
  { label: 'Entreprise', href: '/punaises-de-lit-entreprise' },
  { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
  { label: 'EHPAD', href: '/punaises-de-lit-ehpad' },
  { label: 'Commerce', href: '/punaises-de-lit-commerce' },
])}`,
  });

  const blog = posts.length
    ? section({
        variant: 'section--glacier',
        eyebrow: 'Blog',
        title: 'Comprendre avant d’agir',
        lead: 'Nos réponses détaillées aux questions les plus fréquentes, rédigées à partir de ce que nous voyons sur le terrain.',
        html: `<div class="grid grid--3">${posts.map(postCard).join('')}</div>
        <p class="mt-32"><a class="link-arrow" href="/blog">Tous les articles</a></p>`,
      })
    : '';

  const faqSec = section({
    variant: 'section--white',
    eyebrow: 'FAQ',
    title: 'Questions fréquentes',
    html: faq(FAQ),
    wrap: 'wrap--narrow',
  });

  return definePage({
    url: '/',
    title: 'Punaises de lit Île-de-France — détection et traitement',
    description:
      'Entreprise familiale spécialisée depuis plus de 10 ans dans les punaises de lit en Île-de-France : diagnostic, détection canine, traitement thermique HUGETRI400.',
    priority: 1.0,
    changefreq: 'weekly',
    faq: FAQ,
    schema: [
      organization(),
      service({
        name: 'Détection et traitement des punaises de lit',
        description:
          'Diagnostic, détection canine, traitement thermique et méthodes professionnelles contre les punaises de lit, en Île-de-France.',
        url: '/',
        serviceType: 'Traitement des punaises de lit',
      }),
    ],
    body: [hero, repere, histoire, expertise, methodes, deroule, geo, carte, confiance, avis, problemes, blog, faqSec, ctaBand({ tag: 'home' })].join('\n'),
  });
}
