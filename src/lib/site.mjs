// Configuration centrale du site.
// Aucune donnee non verifiee ne doit etre ajoutee ici (pas d'avis, de note,
// de certification, d'adresse ou de chiffre d'interventions inventes).

export const site = {
  name: 'Expertise Punaises de Lit',
  nameFull: 'Expertise Punaises de Lit — Île-de-France',
  baseline: 'Détection & traitement — Île-de-France',
  // Renseigner le domaine definitif avant mise en ligne (utilise pour les
  // canonicals, le sitemap et les balises Open Graph).
  origin: 'https://www.expertise-punaises-de-lit-idf.fr',
  phoneDisplay: '07 56 82 27 85',
  phoneHref: '+33756822785',
  locale: 'fr_FR',
  lang: 'fr',
  areaServed: 'Île-de-France',
};

/* Informations legales de l'entreprise (source : registres publics INSEE /
   RCS de Nanterre). Ne renseigner ici que des donnees verifiables. */
export const legal = {
  exploitant: 'Bilal ASSOUL',
  denomination: 'ASSOUL BILAL',
  forme: 'Entrepreneur individuel (EI)',
  siren: '901 133 041',
  sirenRaw: '901133041',
  siret: '901 133 041 00011',
  rcs: '901 133 041 R.C.S. Nanterre',
  greffe: 'Nanterre',
  immatriculationRcs: '7 juillet 2021',
  immatriculationRne: '6 juillet 2021',
  creation: '6 juillet 2021',
  adresse: {
    rue: '1 rue Albert Simonin',
    codePostal: '92400',
    ville: 'Courbevoie',
    pays: 'France',
    complet: '1 rue Albert Simonin, 92400 Courbevoie',
  },
  naf: '81.29A',
  nafLibelle: 'Désinfection, désinsectisation, dératisation',
  directeurPublication: 'Bilal ASSOUL',
};

/* Hebergeur du site */
export const host = {
  nom: 'Hostinger International Ltd',
  adresse: '61 Lordou Vironos Street, Lumiel Building, 4e étage, 6023 Larnaca, Chypre',
  registre: 'HE 301365',
  site: 'https://www.hostinger.fr',
};

export const departments = [
  {
    code: '75', name: 'Paris', slug: 'punaises-de-lit-paris-75',
    article: 'à', short: 'Paris',
    habitat: 'immeubles haussmanniens, petites surfaces, colocations et locations meublées',
  },
  {
    code: '77', name: 'Seine-et-Marne', slug: 'punaises-de-lit-seine-et-marne-77',
    article: 'en', short: 'Seine-et-Marne',
    habitat: 'maisons individuelles, pavillons, résidences récentes et hébergements touristiques',
  },
  {
    code: '78', name: 'Yvelines', slug: 'punaises-de-lit-yvelines-78',
    article: 'dans les', short: 'Yvelines',
    habitat: 'maisons familiales, résidences anciennes et logements étudiants',
  },
  {
    code: '91', name: 'Essonne', slug: 'punaises-de-lit-essonne-91',
    article: 'en', short: 'Essonne',
    habitat: 'pavillons, résidences universitaires et copropriétés de taille moyenne',
  },
  {
    code: '92', name: 'Hauts-de-Seine', slug: 'punaises-de-lit-hauts-de-seine-92',
    article: 'dans les', short: 'Hauts-de-Seine',
    habitat: 'copropriétés denses, immeubles de bureaux et appartements familiaux',
  },
  {
    code: '93', name: 'Seine-Saint-Denis', slug: 'punaises-de-lit-seine-saint-denis-93',
    article: 'en', short: 'Seine-Saint-Denis',
    habitat: 'grands ensembles, immeubles collectifs et logements sociaux',
  },
  {
    code: '94', name: 'Val-de-Marne', slug: 'punaises-de-lit-val-de-marne-94',
    article: 'dans le', short: 'Val-de-Marne',
    habitat: 'copropriétés des années 60-70, pavillons et résidences étudiantes',
  },
  {
    code: '95', name: "Val-d'Oise", slug: 'punaises-de-lit-val-doise-95',
    article: 'dans le', short: "Val-d'Oise",
    habitat: 'pavillons, résidences récentes et hébergements liés à la zone aéroportuaire',
  },
];

export const nav = [
  { label: 'Punaises de lit', href: '/punaises-de-lit', children: [
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Dans un lit', href: '/punaises-de-lit-dans-un-lit' },
    { label: 'Dans un matelas', href: '/punaises-de-lit-matelas' },
    { label: 'Dans un sommier', href: '/punaises-de-lit-sommier' },
    { label: 'Dans un canapé', href: '/punaises-de-lit-canape' },
    { label: 'Dans une chambre', href: '/punaises-de-lit-chambre' },
    { label: 'En appartement', href: '/punaises-de-lit-appartement' },
    { label: 'Dans une maison', href: '/punaises-de-lit-maison' },
    { label: 'Dans un immeuble', href: '/punaises-de-lit-immeuble' },
  ]},
  { label: 'Expertise', href: '/methodes-traitement-punaises-de-lit', children: [
    { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'HUGETRI400', href: '/hugetri400' },
    { label: 'Toutes les méthodes professionnelles', href: '/methodes-traitement-punaises-de-lit' },
    { label: 'Notre histoire familiale', href: '/notre-histoire' },
  ]},
  { label: 'Île-de-France', href: '/punaises-de-lit-ile-de-france', children: [
    { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
    ...departments.map((d) => ({ label: `${d.code} — ${d.name}`, href: `/${d.slug}` })),
  ]},
  { label: 'Vous êtes', href: '/punaises-de-lit-particulier', children: [
    { label: 'Particulier', href: '/punaises-de-lit-particulier' },
    { label: 'Hôtel', href: '/punaises-de-lit-hotel' },
    { label: 'Location saisonnière', href: '/punaises-de-lit-location-saisonniere' },
    { label: 'Agence immobilière', href: '/punaises-de-lit-agence-immobiliere' },
    { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
    { label: 'Entreprise', href: '/punaises-de-lit-entreprise' },
    { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
    { label: 'EHPAD', href: '/punaises-de-lit-ehpad' },
    { label: 'Commerce', href: '/punaises-de-lit-commerce' },
  ]},
  { label: 'Blog', href: '/blog' },
];

export const cta = {
  primary: { label: 'Demander un diagnostic', href: '/diagnostic' },
  phone: { label: site.phoneDisplay, href: `tel:${site.phoneHref}` },
  canine: { label: 'Organiser une détection canine', href: '/detection-canine-punaises-de-lit#diagnostic' },
};
