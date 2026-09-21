# Expertise Punaises de Lit — Île-de-France

Site statique d’une entreprise familiale spécialisée dans la détection et le traitement
des punaises de lit en Île-de-France : diagnostic, détection canine, traitement thermique
(HUGETRI400) et méthodes professionnelles.

Générateur maison en Node (aucune dépendance de production), sortie 100 % statique.

---

## Démarrer

```bash
npm run build     # génère dist/
npm run serve     # génère puis sert sur http://localhost:4321
npm run audit     # build + audit SEO / liens / accessibilité / cohérence
npm run qa        # contrôles navigateur (nécessite le serveur lancé + playwright)
npm run check     # build + audit + QA navigateur
```

`npm run qa` suppose `node server.mjs` déjà lancé et Playwright installé à la
demande (`npm i -D playwright`). Playwright n’est **pas** une dépendance du
projet : l’installation chez l’hébergeur doit rester vide pour éviter le
téléchargement de navigateurs.

## Déploiement

Le projet n’a **aucune dépendance** : `npm ci` n’installe rien, le build est
pur Node.

### Hébergeur Node (Render, Railway, Clever Cloud, Hostinger…)

| Réglage | Valeur |
| --- | --- |
| Commande d’installation | `npm ci` (ou rien) |
| Commande de build | `npm run build` (optionnelle, `npm start` la relance) |
| Commande de démarrage | `npm start` |
| Port | lu dans la variable d’environnement `PORT` (défaut 4321) |
| Version de Node | 22 (`.nvmrc`), minimum 20 |

`npm start` construit `dist/` puis sert le site sur `PORT` / `HOST`
(`0.0.0.0` par défaut). Un `Procfile` (`web: npm start`) est fourni pour les
plateformes qui le lisent.

### Hébergement purement statique

`npm run build` produit `dist/`, directement publiable sur n’importe quel
hébergeur statique. Prévoir `dist/404.html` comme page d’erreur et servir les
URL sans extension (chaque page est un `index.html` dans son dossier).

---

## Architecture

```
build.mjs               générateur : lit src/content, écrit dist/
server.mjs              serveur de prévisualisation local
audit.mjs               audit statique (liens, SEO, a11y, duplication, promesses interdites)
tools/
  genimages.mjs         génère l’image Open Graph et l’icône (encodeur PNG maison)
  qa.mjs                contrôles navigateur : débordements, cibles tactiles, JS, interactions
  shot.mjs / shotel.mjs captures d’écran de contrôle
src/
  lib/
    site.mjs            configuration centrale : marque, téléphone, navigation, départements
    cities.mjs          communes disposant d’une page rédigée individuellement
    layout.mjs          gabarit HTML, en-tête, pied de page, barre d’appel mobile
    components.mjs      briques d’interface (sections, cartes, FAQ, CTA, tableaux…)
    templates.mjs       gabarit des pages « situation / profil / territoire »
    illustrations.mjs   schémas SVG dessinés pour le site (cycle, thermique, carte IDF…)
    photo.mjs           emplacements photo + génération de PHOTOS.md
    form.mjs            formulaire de demande de diagnostic
    schema.mjs          données structurées Schema.org
    blog.mjs            rendu des articles
    page.mjs / html.mjs utilitaires
  content/
    pages/*.mjs         pages du site (une page ou un tableau de pages par fichier)
    blog/*.mjs          articles (un fichier = un article)
  assets/
    styles.css          feuille de style unique
    app.js              scripts d’interface (menu, carte, sommaire, formulaire)
    img/                OG + icône générés
    photos/             photos réelles à déposer (voir PHOTOS.md)
```

### Ajouter une page

Créer un fichier dans `src/content/pages/`. Il exporte par défaut un objet page
(ou une fonction retournant un objet ou un tableau d’objets) produit par
`definePage()` ou `contentPage()`. Le fil d’ariane, les données structurées,
le canonical et l’entrée de sitemap sont générés automatiquement.

### Ajouter un article

Créer un fichier dans `src/content/blog/` exportant `{ slug, title, category,
published, updated, excerpt, description, quick, faq, related, body }`.
L’index et la pagination du blog se mettent à jour seuls.

---

## À compléter avant la mise en ligne

Le site a été rédigé sans inventer aucune information sur l’entreprise.
Les éléments suivants doivent être fournis puis intégrés :

| Élément | Où | État |
| --- | --- | --- |
| Domaine définitif | `src/lib/site.mjs` → `site.origin` | valeur provisoire |
| Raison sociale, SIREN, siège, directeur de publication, hébergeur | `/mentions-legales` | à compléter |
| E-mail de contact | `/mentions-legales`, `/politique-de-confidentialite` | à compléter |
| Certifications, assurances, qualifications | mentions légales + pages concernées | **non publiées** faute de justificatifs |
| Caractéristiques techniques du HUGETRI400 | `/hugetri400` | **non publiées** faute de documentation |
| Avis clients | section dédiée sur l’accueil | emplacement vide, **aucun avis inventé** |
| Photos de terrain | `src/assets/photos/` | voir `PHOTOS.md` (33 emplacements) |
| Réception du formulaire | `src/lib/form.mjs` → attribut `action` | non branché : un message explicite s’affiche |

### Photos

`PHOTOS.md` est régénéré à chaque build : il liste chaque emplacement, ses
dimensions et le sujet attendu. Déposez `nom.jpg` (et si possible `nom.webp` /
`nom.avif`) dans `src/assets/photos/` : le gabarit de réservation disparaît
automatiquement et `<picture>` sert les formats modernes.

Aucune image de banque générique ni visuel généré n’a été utilisé. Les schémas
techniques (cycle de développement, courbe thermique, carte départementale,
plan d’inspection) sont des SVG dessinés spécifiquement pour ce site.

---

## Règles éditoriales appliquées

Ces règles sont vérifiées automatiquement par `audit.mjs` :

- aucune promesse invérifiable (« 100 % garanti », « éradication totale »,
  « aucun risque de retour », « détection fiable à 100 % ») ;
- aucune donnée structurée non vérifiable (note, avis, prix, horaires, adresse) ;
- aucun faux témoignage, chiffre d’intervention ou partenariat ;
- la détection canine est présentée comme un outil de localisation dont la
  performance dépend du chien, du maître-chien, du dressage et des conditions,
  systématiquement complété par une vérification visuelle ;
- les limites de chaque méthode de traitement sont explicitées ;
- l’usage amateur de produits biocides n’est jamais encouragé ; le cadre
  réglementaire et les qualifications requises sont rappelés.

## Contrôles automatisés

`audit.mjs` vérifie : titres et descriptions uniques et dimensionnés, H1 unique,
hiérarchie des titres, `alt` et dimensions des images, JSON-LD valide, liens
internes et ancres, présence dans le sitemap, pages orphelines, artefacts de
rendu, duplication de contenu rédactionnel, promesses interdites.

`tools/qa.mjs` vérifie dans Chromium, de 320 à 1440 px : absence de débordement
horizontal, cibles tactiles ≥ 40 px, absence d’erreur JavaScript, texte non
tronqué, ouverture/fermeture du menu mobile, carte interactive, validation du
formulaire, et mesure le poids des pages.
