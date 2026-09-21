import { site, departments, legal } from './site.mjs';

// Regle du projet : aucune donnee non verifiee dans les donnees structurees.
// Pas de aggregateRating, review, priceRange, address postale, openingHours,
// award ni certification tant que l'entreprise ne les a pas fournis.

const ORG_ID = `${site.origin}/#organisation`;

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: site.nameFull,
  legalName: legal.denomination,
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'SIREN', value: legal.sirenRaw },
    { '@type': 'PropertyValue', propertyID: 'SIRET', value: legal.siret.replace(/\s/g, '') },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: legal.adresse.rue,
    postalCode: legal.adresse.codePostal,
    addressLocality: legal.adresse.ville,
    addressCountry: 'FR',
  },
  description:
    'Entreprise familiale spécialisée depuis plus de 10 ans dans la détection et le traitement des punaises de lit en Île-de-France : diagnostic, détection canine, traitement thermique et méthodes professionnelles.',
  url: site.origin + '/',
  telephone: '+33 7 56 82 27 85',
  image: `${site.origin}/assets/img/og-default.png`,
  logo: `${site.origin}/assets/img/og-default.png`,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    ...departments.map((d) => ({ '@type': 'AdministrativeArea', name: `${d.name} (${d.code})` })),
  ],
  knowsAbout: [
    'Punaises de lit',
    'Cimex lectularius',
    'Détection canine des punaises de lit',
    'Traitement thermique des punaises de lit',
    'Diagnostic d’infestation',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33 7 56 82 27 85',
    contactType: 'customer service',
    areaServed: 'FR',
    availableLanguage: ['French'],
  },
});

export const webPage = ({ url, title, description, updated, breadcrumb = true }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${site.origin}${url}#webpage`,
  url: `${site.origin}${url}`,
  name: title,
  description,
  inLanguage: 'fr-FR',
  isPartOf: { '@type': 'WebSite', '@id': `${site.origin}/#website`, name: site.nameFull, url: site.origin + '/' },
  publisher: { '@id': ORG_ID },
  ...(updated ? { dateModified: updated } : {}),
  ...(breadcrumb ? { breadcrumb: { '@id': `${site.origin}${url}#breadcrumb` } } : {}),
});

export const breadcrumbList = (url, items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${site.origin}${url}#breadcrumb`,
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.label,
    ...(it.href ? { item: `${site.origin}${it.href}` } : {}),
  })),
});

export const service = ({ name, description, url, serviceType, area }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${site.origin}${url}`,
  serviceType: serviceType || name,
  provider: { '@id': ORG_ID },
  areaServed: area || { '@type': 'AdministrativeArea', name: 'Île-de-France' },
});

export const faqPage = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\s+/g, ' ').trim() },
  })),
});

export const article = ({ url, title, description, published, updated, section }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  mainEntityOfPage: `${site.origin}${url}`,
  datePublished: published,
  dateModified: updated || published,
  inLanguage: 'fr-FR',
  ...(section ? { articleSection: section } : {}),
  // Auteur : l'entreprise elle-meme, faute de nom d'auteur verifie.
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  image: `${site.origin}/assets/img/og-default.png`,
});
