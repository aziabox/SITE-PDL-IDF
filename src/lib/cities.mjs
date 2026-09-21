/* Communes pour lesquelles une page a ete redigee individuellement.
   Aucune page n'est generee automatiquement : chaque ville presente ici
   correspond a une page ecrite specifiquement. */
export const CITIES = [
  { name: 'Boulogne-Billancourt', slug: 'punaises-de-lit-boulogne-billancourt', dept: '92' },
  { name: 'Nanterre', slug: 'punaises-de-lit-nanterre', dept: '92' },
  { name: 'Saint-Denis', slug: 'punaises-de-lit-saint-denis', dept: '93' },
  { name: 'Montreuil', slug: 'punaises-de-lit-montreuil', dept: '93' },
  { name: 'Créteil', slug: 'punaises-de-lit-creteil', dept: '94' },
  { name: 'Vitry-sur-Seine', slug: 'punaises-de-lit-vitry-sur-seine', dept: '94' },
  { name: 'Versailles', slug: 'punaises-de-lit-versailles', dept: '78' },
  { name: 'Argenteuil', slug: 'punaises-de-lit-argenteuil', dept: '95' },
  { name: 'Cergy', slug: 'punaises-de-lit-cergy', dept: '95' },
  { name: 'Massy', slug: 'punaises-de-lit-massy', dept: '91' },
  { name: 'Évry-Courcouronnes', slug: 'punaises-de-lit-evry-courcouronnes', dept: '91' },
  { name: 'Meaux', slug: 'punaises-de-lit-meaux', dept: '77' },
];

export const citiesOf = (code) => CITIES.filter((c) => c.dept === code);
