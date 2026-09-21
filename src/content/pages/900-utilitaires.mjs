import { definePage } from '../../lib/page.mjs';
import {
  section, pageHead, linkGrid, callout, btnRow, btnPrimary, btnPhone, esc, departments, site,
} from '../../lib/components.mjs';
import { legal, host } from '../../lib/site.mjs';
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
    // Page accessible depuis le pied de page mais retirée des résultats de
    // recherche, pour limiter l'exposition des données d'identité.
    noindex: true,
    priority: 0.2,
    changefreq: 'yearly',
    crumbs: [{ label: 'Mentions légales' }],
    body: `
${pageHead({ eyebrow: 'Informations légales', title: 'Mentions légales' })}
${section({
  variant: 'section--white',
  wrap: 'wrap--narrow',
  html: `
<div class="prose">
  <h2>Éditeur du site</h2>
  <p>Le présent site est édité par <strong>${esc(legal.exploitant)}</strong>, exerçant sous la dénomination <strong>${esc(legal.denomination)}</strong>, ${esc(legal.forme)}, et exploitant l’activité de détection et de traitement des punaises de lit présentée sur ce site sous le nom commercial « ${esc(site.name)} ».</p>
  <ul>
    <li><strong>Dénomination</strong> : ${esc(legal.denomination)}</li>
    <li><strong>Forme juridique</strong> : ${esc(legal.forme)}</li>
    <li><strong>Siège</strong> : ${esc(legal.adresse.complet)}, ${esc(legal.adresse.pays)}</li>
    <li><strong>SIREN</strong> : ${esc(legal.siren)}</li>
    <li><strong>SIRET (siège)</strong> : ${esc(legal.siret)}</li>
    <li><strong>Registre du commerce et des sociétés</strong> : ${esc(legal.rcs)}, immatriculation le ${esc(legal.immatriculationRcs)} au greffe de ${esc(legal.greffe)}</li>
    <li><strong>Registre national des entreprises</strong> : immatriculation le ${esc(legal.immatriculationRne)}</li>
    <li><strong>Code NAF / APE</strong> : ${esc(legal.naf)} — ${esc(legal.nafLibelle)}</li>
    <li><strong>Téléphone</strong> : <a href="tel:${site.phoneHref}">${esc(site.phoneDisplay)}</a></li>
    <li><strong>Directeur de la publication</strong> : ${esc(legal.directeurPublication)}</li>
  </ul>

  <h2>Hébergement</h2>
  <p>Le site est hébergé par :</p>
  <ul>
    <li><strong>${esc(host.nom)}</strong></li>
    <li>${esc(host.adresse)}</li>
    <li>Numéro d’enregistrement : ${esc(host.registre)}</li>
    <li><a href="${host.site}" rel="noopener nofollow" target="_blank">${esc(host.site.replace('https://', ''))}</a></li>
  </ul>

  <h2>Activité</h2>
  <p>L’entreprise exerce une activité de désinfection, désinsectisation et dératisation (code NAF ${esc(legal.naf)}), spécialisée sur ce site dans la détection et le traitement des punaises de lit en Île-de-France.</p>
  <p>Les qualifications, certifications et attestations d’assurance détenues par l’entreprise sont communiquées sur demande dans le cadre d’une intervention. Aucune mention de ce type n’est publiée sur ce site sans pièce justificative correspondante.</p>

  <h2>Propriété intellectuelle</h2>
  <p>L’ensemble des contenus de ce site — textes, illustrations, schémas, mise en page et code — est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
  <p>Le fond de carte des départements d’Île-de-France est établi à partir des contours administratifs IGN / INSEE diffusés sous Licence Ouverte.</p>

  <h2>Responsabilité</h2>
  <p>Les informations publiées sur ce site sont fournies à titre informatif. Elles décrivent des méthodes professionnelles et des constats de terrain, mais ne constituent ni un diagnostic à distance, ni un engagement de résultat. Seule une intervention sur place permet d’évaluer une situation particulière.</p>
  <p>Les liens vers des sites tiers éventuellement présents n’engagent pas la responsabilité de l’éditeur quant à leur contenu.</p>

  <h2>Données personnelles</h2>
  <p>Le traitement des données transmises via le formulaire de demande de diagnostic est décrit dans la <a href="/politique-de-confidentialite">politique de confidentialité</a>.</p>

  <h2>Droit applicable</h2>
  <p>Le présent site est soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français sont compétents.</p>
</div>`,
})}`,
  });

  /* ------------------------------------------------- Confidentialité ---- */
  const privacy = definePage({
    url: '/politique-de-confidentialite',
    title: 'Politique de confidentialité — Punaises de lit Île-de-France',
    description:
      'Traitement des données personnelles collectées via le formulaire de demande de diagnostic : finalité, conservation, destinataires et droits des personnes.',
    // Contient les mêmes données d'identité que les mentions légales.
    noindex: true,
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
  <h2>Responsable du traitement</h2>
  <p>Le responsable du traitement des données collectées sur ce site est <strong>${esc(legal.exploitant)}</strong> (${esc(legal.denomination)}, ${esc(legal.forme)}), dont le siège est situé ${esc(legal.adresse.complet)}, SIREN ${esc(legal.siren)}.</p>
  <p>Contact : <a href="tel:${site.phoneHref}">${esc(site.phoneDisplay)}</a> ou par courrier à l’adresse du siège.</p>

  <h2>Quelles données sont collectées</h2>
  <p>Le site ne collecte des données que lorsque vous les transmettez volontairement, via le formulaire de demande de diagnostic ou par téléphone : nom, numéro de téléphone, adresse e-mail, commune, et les éléments que vous choisissez de décrire (type de logement, surface, situation constatée, message libre).</p>
  <p>Aucun compte utilisateur, aucun profilage et aucune collecte automatique de données de navigation ne sont mis en œuvre par le site lui-même.</p>

  <h2>Pourquoi elles sont collectées</h2>
  <p>Ces données servent uniquement à traiter votre demande : vous rappeler, évaluer la situation, organiser un diagnostic ou une intervention, et assurer le suivi. Elles ne sont ni revendues, ni louées, ni utilisées à des fins de prospection pour des tiers.</p>
  <p><strong>Base légale</strong> : votre consentement, recueilli lors de l’envoi du formulaire, puis, le cas échéant, l’exécution de mesures précontractuelles et du contrat d’intervention, ainsi que le respect des obligations légales de conservation des documents commerciaux et comptables.</p>

  <h2>Durée de conservation</h2>
  <p>Les demandes sans suite sont conservées le temps nécessaire à leur traitement, puis supprimées. Les dossiers ayant donné lieu à une intervention sont conservés pendant la durée légale applicable aux documents commerciaux et comptables.</p>

  <h2>Destinataires</h2>
  <p>Les données sont accessibles aux seules personnes de l’entreprise en charge du traitement des demandes et des interventions. Les prestataires techniques n’y accèdent que dans le cadre strict de leurs prestations : l’hébergement du site est assuré par ${esc(host.nom)} (${esc(host.adresse)}). Aucun transfert de données n’est opéré vers un pays tiers en dehors de ce cadre.</p>

  <h2>Vos droits</h2>
  <p>Conformément au Règlement général sur la protection des données et à la loi « Informatique et Libertés », vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition concernant vos données, ainsi que d’un droit à la portabilité et du droit de retirer votre consentement à tout moment.</p>
  <p>Vous pouvez exercer ces droits en nous contactant au <a href="tel:${site.phoneHref}">${esc(site.phoneDisplay)}</a> ou par courrier à : ${esc(legal.denomination)}, ${esc(legal.adresse.complet)}.</p>
  <p>Vous disposez également du droit d’introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.</p>

  <h2>Sécurité et mesures techniques</h2>
  <p>Le site est un site statique : il ne comporte ni espace client, ni base de données de visiteurs. Il est diffusé en HTTPS. Aucune donnée n’est stockée dans votre navigateur par le site en dehors des mécanismes techniques strictement nécessaires à son affichage.</p>

  <h2>Cookies et mesure d’audience</h2>
  <p>En l’état, le site ne dépose aucun cookie publicitaire ni traceur de mesure d’audience. Les polices de caractères sont appelées auprès du service Google Fonts, ce qui implique une connexion de votre navigateur à ce service lors du chargement des pages.</p>
  <p>Si un outil de mesure d’audience devait être ajouté ultérieurement, cette page serait mise à jour et un mécanisme de recueil du consentement serait mis en place avant tout dépôt de traceur soumis à consentement.</p>

  <h2>Contact</h2>
  <p>Pour toute question relative à cette politique ou au traitement de vos données, contactez-nous au <a href="tel:${site.phoneHref}">${esc(site.phoneDisplay)}</a>.</p>
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
