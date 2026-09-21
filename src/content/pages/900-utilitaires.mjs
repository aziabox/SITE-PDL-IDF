import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, linkGrid, callout, btnRow, btnPrimary, btnPhone, esc, departments, site,
} from '../../lib/components.mjs';
import { CITIES } from '../../lib/cities.mjs';

export default function () {
  const posts = globalThis.__POSTS__ || [];

  /* ----------------------------------------------------- Plan du site --- */
  const plan = definePage({
    url: '/plan-du-site',
    title: 'Plan du site — Punaises de lit Île-de-France',
    description:
      'Toutes les pages du site : expertise, méthodes de traitement, situations, profils, départements d’Île-de-France, villes et articles de blog.',
    priority: 0.3,
    changefreq: 'monthly',
    crumbs: [{ label: 'Plan du site' }],
    body: `
${pageHead({
  eyebrow: 'Navigation',
  title: 'Plan du site',
  lead: 'L’ensemble des pages publiées, regroupées par thème.',
})}
${section({
  variant: 'section--white',
  title: 'Pages principales',
  html: linkGrid([
    { label: 'Accueil', href: '/' },
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Notre histoire', href: '/notre-histoire' },
    { label: 'Demander un diagnostic', href: '/diagnostic' },
    { label: 'Blog', href: '/blog' },
  ]),
})}
${section({
  variant: 'section--glacier section--tight',
  title: 'Expertise et traitements',
  html: linkGrid([
    { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'HUGETRI400', href: '/hugetri400' },
    { label: 'Méthodes de traitement', href: '/methodes-traitement-punaises-de-lit' },
  ]),
})}
${section({
  variant: 'section--white section--tight',
  title: 'Par situation',
  html: linkGrid([
    { label: 'Dans un lit', href: '/punaises-de-lit-dans-un-lit' },
    { label: 'Dans un matelas', href: '/punaises-de-lit-matelas' },
    { label: 'Dans un sommier', href: '/punaises-de-lit-sommier' },
    { label: 'Dans un canapé', href: '/punaises-de-lit-canape' },
    { label: 'Dans une chambre', href: '/punaises-de-lit-chambre' },
    { label: 'En appartement', href: '/punaises-de-lit-appartement' },
    { label: 'Dans une maison', href: '/punaises-de-lit-maison' },
    { label: 'Dans un immeuble', href: '/punaises-de-lit-immeuble' },
  ]),
})}
${section({
  variant: 'section--glacier section--tight',
  title: 'Par profil',
  html: linkGrid([
    { label: 'Particulier', href: '/punaises-de-lit-particulier' },
    { label: 'Hôtel', href: '/punaises-de-lit-hotel' },
    { label: 'Location saisonnière', href: '/punaises-de-lit-location-saisonniere' },
    { label: 'Agence immobilière', href: '/punaises-de-lit-agence-immobiliere' },
    { label: 'Syndic de copropriété', href: '/punaises-de-lit-syndic' },
    { label: 'Entreprise', href: '/punaises-de-lit-entreprise' },
    { label: 'Résidence étudiante', href: '/punaises-de-lit-residence-etudiante' },
    { label: 'EHPAD', href: '/punaises-de-lit-ehpad' },
    { label: 'Commerce', href: '/punaises-de-lit-commerce' },
  ]),
})}
${section({
  variant: 'section--white section--tight',
  title: 'Île-de-France',
  html: `${linkGrid([
    { label: 'Toute l’Île-de-France', href: '/punaises-de-lit-ile-de-france' },
    ...departments.map((d) => ({ label: `${d.code} — ${d.name}`, href: `/${d.slug}` })),
  ])}
  <h3 class="mt-44">Villes</h3>
  ${linkGrid(CITIES.map((c) => ({ label: c.name, href: `/${c.slug}` })))}`,
})}
${section({
  variant: 'section--sand section--tight',
  title: 'Articles du blog',
  html: linkGrid(posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` }))),
})}
${section({
  variant: 'section--white section--tight',
  title: 'Informations',
  html: linkGrid([
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  ]),
})}`,
  });

  /* -------------------------------------------------- Mentions légales -- */
  const mentions = definePage({
    url: '/mentions-legales',
    title: 'Mentions légales — Punaises de lit Île-de-France',
    description:
      'Mentions légales du site : éditeur, hébergeur, propriété intellectuelle et responsabilité.',
    priority: 0.2,
    changefreq: 'yearly',
    crumbs: [{ label: 'Mentions légales' }],
    body: `
${pageHead({ eyebrow: 'Informations légales', title: 'Mentions légales' })}
${section({
  variant: 'section--white',
  wrap: 'wrap--narrow',
  html: `
${callout({
  icon: 'alert',
  variant: 'sand',
  title: 'Informations à compléter avant mise en ligne',
  text: `Les champs signalés ci-dessous doivent être renseignés avec les informations officielles de l’entreprise. Aucune donnée n’a été inventée : raison sociale, forme juridique, numéro d’immatriculation, adresse du siège, nom du directeur de publication, coordonnées et informations d’hébergement doivent être fournis par l’entreprise.

Tant qu’ils ne le sont pas, cette page reste incomplète et le site ne doit pas être publié en production.`,
})}
<div class="prose">
  <h2>Éditeur du site</h2>
  <ul>
    <li><strong>Raison sociale</strong> : à compléter</li>
    <li><strong>Forme juridique</strong> : à compléter</li>
    <li><strong>Capital social</strong> : à compléter</li>
    <li><strong>Siège social</strong> : à compléter</li>
    <li><strong>Numéro SIREN / SIRET</strong> : à compléter</li>
    <li><strong>Numéro de TVA intracommunautaire</strong> : à compléter</li>
    <li><strong>Directeur de la publication</strong> : à compléter</li>
    <li><strong>Téléphone</strong> : ${esc(site.phoneDisplay)}</li>
    <li><strong>E-mail de contact</strong> : à compléter</li>
  </ul>

  <h2>Hébergeur</h2>
  <ul>
    <li><strong>Dénomination</strong> : à compléter</li>
    <li><strong>Adresse</strong> : à compléter</li>
    <li><strong>Téléphone</strong> : à compléter</li>
  </ul>

  <h2>Activité</h2>
  <p>Le site présente une activité de détection et de traitement des punaises de lit en Île-de-France. Les certifications, agréments, qualifications professionnelles et assurances éventuellement détenus par l’entreprise seront mentionnés ici et sur les pages concernées dès que les justificatifs correspondants auront été fournis. Aucune mention de ce type n’est publiée sans pièce justificative.</p>

  <h2>Propriété intellectuelle</h2>
  <p>L’ensemble des contenus de ce site — textes, illustrations, schémas, mise en page et code — est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.</p>

  <h2>Responsabilité</h2>
  <p>Les informations publiées sur ce site sont fournies à titre informatif. Elles décrivent des méthodes professionnelles et des constats de terrain, mais ne constituent ni un diagnostic à distance, ni un engagement de résultat. Seule une intervention sur place permet d’évaluer une situation particulière.</p>
  <p>Les liens vers des sites tiers éventuellement présents n’engagent pas la responsabilité de l’éditeur quant à leur contenu.</p>

  <h2>Droit applicable</h2>
  <p>Le présent site est soumis au droit français.</p>
</div>`,
})}`,
  });

  /* ------------------------------------------------- Confidentialité ---- */
  const privacy = definePage({
    url: '/politique-de-confidentialite',
    title: 'Politique de confidentialité — Punaises de lit Île-de-France',
    description:
      'Traitement des données personnelles collectées via le formulaire de demande de diagnostic : finalité, conservation, destinataires et droits des personnes.',
    priority: 0.2,
    changefreq: 'yearly',
    crumbs: [{ label: 'Politique de confidentialité' }],
    body: `
${pageHead({ eyebrow: 'Données personnelles', title: 'Politique de confidentialité' })}
${section({
  variant: 'section--white',
  wrap: 'wrap--narrow',
  html: `
<div class="prose">
  <h2>Quelles données sont collectées</h2>
  <p>Le site ne collecte des données que lorsque vous les transmettez volontairement, via le formulaire de demande de diagnostic ou par téléphone : nom, numéro de téléphone, adresse e-mail, commune, et les éléments que vous choisissez de décrire (type de logement, surface, situation constatée, message libre).</p>

  <h2>Pourquoi elles sont collectées</h2>
  <p>Ces données servent uniquement à traiter votre demande : vous rappeler, évaluer la situation, organiser un diagnostic ou une intervention, et assurer le suivi. Elles ne sont ni revendues, ni louées, ni utilisées à des fins de prospection pour des tiers.</p>

  <h2>Durée de conservation</h2>
  <p>Les demandes sans suite sont conservées le temps nécessaire au traitement de la demande puis supprimées. Les dossiers ayant donné lieu à une intervention sont conservés pendant la durée légale applicable aux documents commerciaux et comptables.</p>

  <h2>Destinataires</h2>
  <p>Les données sont accessibles aux seules personnes de l’entreprise en charge du traitement des demandes et des interventions. Les éventuels prestataires techniques (hébergement, messagerie) n’y accèdent que dans le cadre strict de leurs prestations.</p>

  <h2>Vos droits</h2>
  <p>Conformément à la réglementation applicable en matière de protection des données personnelles, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition concernant vos données. Vous pouvez exercer ces droits en nous contactant au ${esc(site.phoneDisplay)} ou à l’adresse e-mail indiquée dans les mentions légales.</p>
  <p>Vous disposez également du droit d’introduire une réclamation auprès de l’autorité de contrôle compétente.</p>

  <h2>Mesures techniques</h2>
  <p>Le site est un site statique : il ne comporte ni espace client, ni base de données de visiteurs. Aucune donnée n’est stockée dans votre navigateur par le site lui-même en dehors des mécanismes techniques strictement nécessaires à son affichage.</p>

  <h2>Cookies et mesure d’audience</h2>
  <p>En l’état, le site ne dépose aucun cookie publicitaire ni traceur de mesure d’audience. Si un outil de mesure devait être ajouté ultérieurement, cette page serait mise à jour et un mécanisme de recueil du consentement serait mis en place avant tout dépôt de traceur soumis à consentement.</p>

  <h2>Contact</h2>
  <p>Pour toute question relative à cette politique ou au traitement de vos données, contactez-nous au ${esc(site.phoneDisplay)}.</p>
</div>`,
})}`,
  });

  /* ------------------------------------------------------------- 404 ---- */
  const notFound = definePage({
    url: '/404',
    title: 'Page introuvable — Punaises de lit Île-de-France',
    description: 'La page demandée n’existe pas ou a été déplacée. Retrouvez nos pages sur la détection et le traitement des punaises de lit en Île-de-France.',
    noindex: true,
    crumbs: [{ label: 'Page introuvable' }],
    body: `
${pageHead({
  eyebrow: 'Erreur 404',
  title: 'Cette page n’existe pas',
  lead: 'La page que vous cherchez a peut-être été déplacée, ou l’adresse comporte une erreur. Voici les pages les plus consultées — et si vous avez une question précise, le téléphone reste le plus rapide.',
  ctas: btnRow(btnPrimary('Demander un diagnostic', '/diagnostic', '404'), btnPhone('ghost')),
})}
${section({
  variant: 'section--white',
  title: 'Où aller ensuite',
  html: linkGrid([
    { label: 'Accueil', href: '/' },
    { label: 'Tout savoir sur la punaise de lit', href: '/punaises-de-lit' },
    { label: 'Détection canine', href: '/detection-canine-punaises-de-lit' },
    { label: 'Traitement thermique', href: '/traitement-thermique-punaises-de-lit' },
    { label: 'Méthodes de traitement', href: '/methodes-traitement-punaises-de-lit' },
    { label: 'Nos interventions en Île-de-France', href: '/punaises-de-lit-ile-de-france' },
    { label: 'Blog', href: '/blog' },
    { label: 'Plan du site', href: '/plan-du-site' },
  ]),
})}`,
  });

  return [plan, mentions, privacy, notFound];
}
