/* Illustrations vectorielles dessinees pour ce site (aucune banque d'images).
   Palette : #173B4D bleu profond, #3E7185 bleu moyen, #DCECF2 bleu glacier,
   #E9E1D4 sable, #F8FAF9 blanc casse. */
import { departments } from './site.mjs';
import { attr, esc } from './html.mjs';

/* --- Punaise de lit stylisee (vue de dessus) ----------------------------- */
export const bedbug = (x, y, s = 1, fill = '#8a6a4f', stroke = '#5d4633') => `
<g transform="translate(${x} ${y}) scale(${s})" stroke="${stroke}" stroke-width="1.1" stroke-linecap="round" fill="none">
  <ellipse cx="0" cy="2" rx="11" ry="14" fill="${fill}" stroke="${stroke}"/>
  <path d="M-10.2 -1.5h20.4M-10.8 3h21.6M-9.6 7.5h19.2M-7.6 11.8h15.2" opacity=".5"/>
  <ellipse cx="0" cy="-12.5" rx="6.4" ry="4.6" fill="${fill}" stroke="${stroke}"/>
  <path d="M-4.6 -16.2c-2.6-1.6-4.4-3.4-5.6-5.8M4.6 -16.2c2.6-1.6 4.4-3.4 5.6-5.8"/>
  <path d="M-10.4 -3.6c-3.4-1.2-5.6-3-7-5.4M10.4 -3.6c3.4-1.2 5.6-3 7-5.4"/>
  <path d="M-11 3.4c-3.8.2-6.4 1-8.4 2.6M11 3.4c3.8.2 6.4 1 8.4 2.6"/>
  <path d="M-9.8 9.6c-3.4 1.4-5.4 3.2-6.8 5.6M9.8 9.6c3.4 1.4 5.4 3.2 6.8 5.6"/>
</g>`;

/* --- Scene d'accueil : coupe d'un logement et zones inspectees ------------ */
export const heroPlan = () => `
<svg viewBox="0 0 640 420" role="img" aria-labelledby="heroplan-t heroplan-d" class="illu">
  <title id="heroplan-t">Schéma d’inspection d’une chambre</title>
  <desc id="heroplan-d">Coupe d’une chambre indiquant les cinq zones systématiquement inspectées lors d’un diagnostic punaises de lit : tête de lit, coutures du matelas, sommier, plinthes et mobilier proche du couchage.</desc>
  <rect width="640" height="420" fill="#F8FAF9"/>
  <g stroke="#DCECF2" stroke-width="1">
    ${Array.from({ length: 14 }, (_, i) => `<path d="M0 ${i * 32} H640"/>`).join('')}
    ${Array.from({ length: 20 }, (_, i) => `<path d="M${i * 32} 0 V420"/>`).join('')}
  </g>
  <!-- murs -->
  <path d="M56 72 H584 V384 H56 Z" fill="#fff" stroke="#173B4D" stroke-width="2.2"/>
  <path d="M56 384 H584" stroke="#173B4D" stroke-width="3"/>
  <!-- plinthe -->
  <path d="M60 372 H580" stroke="#3E7185" stroke-width="4" stroke-linecap="round" opacity=".35"/>
  <!-- fenetre -->
  <g stroke="#3E7185" stroke-width="1.6" fill="#EEF6F9">
    <rect x="420" y="110" width="126" height="92" rx="3"/>
    <path d="M483 110v92M420 156h126"/>
  </g>
  <!-- tete de lit -->
  <rect x="96" y="156" width="24" height="150" rx="5" fill="#E9E1D4" stroke="#173B4D" stroke-width="1.8"/>
  <!-- matelas + sommier -->
  <rect x="120" y="228" width="230" height="44" rx="9" fill="#fff" stroke="#173B4D" stroke-width="1.8"/>
  <path d="M124 250h222" stroke="#3E7185" stroke-width="1.2" stroke-dasharray="5 5"/>
  <rect x="122" y="272" width="226" height="34" rx="5" fill="#EEF6F9" stroke="#173B4D" stroke-width="1.6"/>
  <path d="M136 306v22M334 306v22" stroke="#173B4D" stroke-width="3" stroke-linecap="round"/>
  <!-- oreiller -->
  <path d="M132 230c10-14 44-16 56-4" fill="#E9E1D4" stroke="#173B4D" stroke-width="1.5"/>
  <!-- table de chevet -->
  <g stroke="#173B4D" stroke-width="1.6" fill="#fff">
    <rect x="368" y="266" width="72" height="62" rx="4"/>
    <path d="M368 292h72"/>
    <circle cx="404" cy="280" r="2.6" fill="#3E7185" stroke="none"/>
    <circle cx="404" cy="310" r="2.6" fill="#3E7185" stroke="none"/>
  </g>
  <!-- reperes de zones -->
  <g font-family="'Plus Jakarta Sans',sans-serif" font-size="13" font-weight="700">
    ${[
      [108, 140, '1'],
      [236, 212, '2'],
      [236, 324, '3'],
      [520, 364, '4'],
      [404, 248, '5'],
    ]
      .map(
        ([cx, cy, n]) => `<g>
      <circle cx="${cx}" cy="${cy}" r="13" fill="#173B4D"/>
      <text x="${cx}" y="${cy + 4.5}" text-anchor="middle" fill="#fff">${n}</text>
    </g>`
      )
      .join('')}
  </g>
  <g stroke="#3E7185" stroke-width="1.3" stroke-dasharray="4 4" opacity=".8">
    <path d="M108 154v22"/><path d="M236 226v-2"/><path d="M236 310v-8"/><path d="M520 352v-8"/>
  </g>
  ${bedbug(300, 194, 0.62)}
  ${bedbug(468, 326, 0.5)}
</svg>`;

/* --- Cycle de developpement : oeuf -> nymphe -> adulte ------------------- */
export const lifecycle = () => `
<svg viewBox="0 0 900 340" role="img" aria-labelledby="cycle-t cycle-d" class="illu">
  <title id="cycle-t">Cycle de développement de la punaise de lit</title>
  <desc id="cycle-d">De l’œuf aux cinq stades nymphaux puis à l’adulte : chaque mue nécessite un repas de sang, et la taille passe d’environ un millimètre à cinq ou six millimètres.</desc>
  <rect width="900" height="340" fill="#fff"/>
  <path d="M70 196 H830" stroke="#DCECF2" stroke-width="2"/>
  ${[
    { x: 110, label: 'Œuf', size: '≈ 1 mm', note: 'Blanc nacré, collé dans une fissure', s: 0 },
    { x: 260, label: 'Nymphe 1', size: '≈ 1,5 mm', note: 'Translucide après éclosion', s: 0.3 },
    { x: 410, label: 'Nymphes 2-3', size: '2 – 3 mm', note: 'Un repas par mue', s: 0.45 },
    { x: 560, label: 'Nymphes 4-5', size: '3 – 4,5 mm', note: 'Couleur plus soutenue', s: 0.6 },
    { x: 730, label: 'Adulte', size: '5 – 6 mm', note: 'Brun, aplati, visible à l’œil nu', s: 0.85 },
  ]
    .map(
      (st, i) => `<g>
    <circle cx="${st.x}" cy="196" r="6" fill="#3E7185"/>
    ${
      i === 0
        ? `<g transform="translate(${st.x} 132)"><ellipse rx="9" ry="13" fill="#F1EADF" stroke="#8a6a4f" stroke-width="1.2"/><path d="M-4 -6a5 5 0 0 1 5-4" stroke="#fff" stroke-width="1.4" fill="none"/></g>`
        : bedbug(st.x, 132, st.s, i === 4 ? '#8a6a4f' : '#c8ab8c')
    }
    <text x="${st.x}" y="236" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="15" font-weight="700" fill="#173B4D">${st.label}</text>
    <text x="${st.x}" y="258" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" fill="#3E7185">${st.size}</text>
    <text x="${st.x}" y="284" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#566E7A">${st.note.length > 26 ? st.note.slice(0, 26) : st.note}</text>
  </g>`
    )
    .join('')}
  <g stroke="#3E7185" stroke-width="1.4" fill="none" marker-end="url(#arrowc)">
    <path d="M132 196h100"/><path d="M282 196h100"/><path d="M432 196h100"/><path d="M582 196h122"/>
  </g>
  <defs>
    <marker id="arrowc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 1 L9 5 L0 9 z" fill="#3E7185"/>
    </marker>
  </defs>
  <g font-family="Inter,sans-serif" font-size="12.5" fill="#566E7A">
    <text x="70" y="316">Chaque mue nécessite un repas de sang. La durée du cycle dépend fortement de la température et de l’accès à l’hôte.</text>
  </g>
</svg>`;

/* --- Courbe de montee en temperature ------------------------------------- */
export const thermalCurve = () => `
<svg viewBox="0 0 900 420" role="img" aria-labelledby="th-t th-d" class="illu">
  <title id="th-t">Principe d’un traitement thermique</title>
  <desc id="th-d">La température de l’air est montée progressivement puis maintenue pendant la durée définie par le protocole, sous contrôle de sondes réparties dans le volume traité.</desc>
  <rect width="900" height="420" fill="#fff"/>
  <g stroke="#DCECF2" stroke-width="1">
    ${[80, 140, 200, 260, 320].map((y) => `<path d="M90 ${y} H840"/>`).join('')}
  </g>
  <path d="M90 60 V330 H840" stroke="#173B4D" stroke-width="1.6" fill="none"/>
  <path d="M90 320 C 230 316, 300 150, 420 120 C 520 96, 640 104, 840 100"
        fill="none" stroke="#3E7185" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M90 320 C 230 316, 300 150, 420 120 C 520 96, 640 104, 840 100 L840 330 L90 330 Z"
        fill="#3E7185" opacity=".07"/>
  <path d="M420 100 H840" stroke="#173B4D" stroke-width="1.3" stroke-dasharray="6 5"/>
  <g font-family="Inter,sans-serif" font-size="13" fill="#566E7A">
    <text x="96" y="352">Installation</text>
    <text x="262" y="352">Montée en température</text>
    <text x="520" y="352">Maintien selon protocole</text>
    <text x="760" y="352">Descente</text>
    <text x="96" y="52" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700" fill="#173B4D">Température de l’air dans le volume traité</text>
    <text x="448" y="88" fill="#173B4D">Palier cible défini par le protocole d’intervention</text>
  </g>
  <g fill="#173B4D">
    ${[470, 560, 650, 740]
      .map(
        (x) => `<g><circle cx="${x}" cy="${x === 470 ? 112 : 104}" r="5" fill="#173B4D"/>
      <path d="M${x} ${x === 470 ? 117 : 109} V150" stroke="#173B4D" stroke-width="1" stroke-dasharray="3 3"/>
      <rect x="${x - 26}" y="150" width="52" height="22" rx="4" fill="#EEF6F9" stroke="#3E7185" stroke-width="1"/>
      <text x="${x}" y="165" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#173B4D">sonde</text></g>`
      )
      .join('')}
  </g>
  <g font-family="Inter,sans-serif" font-size="12.5" fill="#566E7A">
    <text x="90" y="392">Les paramètres exacts (température cible, durée de maintien, nombre de sondes) sont fixés par le protocole retenu pour le logement traité.</text>
  </g>
</svg>`;

/* --- Coupe d'une piece en traitement thermique --------------------------- */
export const thermalRoom = () => `
<svg viewBox="0 0 640 420" role="img" aria-labelledby="tr-t tr-d" class="illu">
  <title id="tr-t">Diffusion de la chaleur dans une pièce traitée</title>
  <desc id="tr-d">Le générateur d’air chaud et les brasseurs font circuler l’air pour homogénéiser la température dans tout le volume, y compris derrière les meubles et dans les textiles.</desc>
  <rect width="640" height="420" fill="#F8FAF9"/>
  <path d="M48 60 H592 V356 H48 Z" fill="#fff" stroke="#173B4D" stroke-width="2.2"/>
  <g opacity=".5" stroke="#3E7185" stroke-width="1.4" fill="none">
    <path d="M150 300c60-34 30-92 92-120 62-28 74 34 140 12"/>
    <path d="M150 250c60-34 30-92 92-120 62-28 100 44 166 22"/>
    <path d="M180 336c60-34 30-92 92-120 62-28 74 34 140 12"/>
  </g>
  <rect x="64" y="236" width="86" height="106" rx="7" fill="#173B4D"/>
  <g stroke="#DCECF2" stroke-width="2" fill="none">
    <path d="M80 258h54M80 276h54M80 294h54"/>
    <circle cx="107" cy="322" r="11"/>
  </g>
  <text x="107" y="366" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#173B4D">générateur</text>
  <rect x="236" y="256" width="180" height="40" rx="8" fill="#fff" stroke="#173B4D" stroke-width="1.8"/>
  <rect x="238" y="296" width="176" height="30" rx="5" fill="#EEF6F9" stroke="#173B4D" stroke-width="1.5"/>
  <rect x="452" y="170" width="106" height="172" rx="6" fill="#fff" stroke="#173B4D" stroke-width="1.8"/>
  <path d="M452 226h106M452 284h106M505 170v172" stroke="#173B4D" stroke-width="1.2"/>
  <g font-family="Inter,sans-serif" font-size="11.5" fill="#173B4D">
    ${[
      [300, 240, 'sonde 1'],
      [478, 152, 'sonde 2'],
      [206, 148, 'sonde 3'],
    ]
      .map(
        ([x, y, t]) => `<g><circle cx="${x}" cy="${y + 14}" r="4.5" fill="#3E7185"/>
      <rect x="${x - 28}" y="${y - 8}" width="56" height="20" rx="4" fill="#EEF6F9" stroke="#3E7185"/>
      <text x="${x}" y="${y + 6}" text-anchor="middle">${t}</text></g>`
      )
      .join('')}
  </g>
  <text x="320" y="392" text-anchor="middle" font-family="Inter,sans-serif" font-size="12.5" fill="#566E7A">Chaleur + circulation d’air + contrôle des températures dans le volume traité</text>
</svg>`;

/* --- Chien detecteur : silhouette ---------------------------------------- */
export const dogScene = () => `
<svg viewBox="0 0 640 420" role="img" aria-labelledby="dog-t dog-d" class="illu">
  <title id="dog-t">Détection canine le long d’un couchage</title>
  <desc id="dog-d">Le chien parcourt le périmètre du couchage et marque les zones odorantes ; le maître-chien vérifie ensuite visuellement chaque marquage.</desc>
  <rect width="640" height="420" fill="#F8FAF9"/>
  <path d="M40 330 H600" stroke="#173B4D" stroke-width="2"/>
  <rect x="300" y="196" width="264" height="42" rx="9" fill="#fff" stroke="#173B4D" stroke-width="1.8"/>
  <rect x="302" y="238" width="260" height="32" rx="5" fill="#EEF6F9" stroke="#173B4D" stroke-width="1.6"/>
  <path d="M318 270v58M546 270v58" stroke="#173B4D" stroke-width="3.4" stroke-linecap="round"/>
  <rect x="272" y="140" width="24" height="130" rx="5" fill="#E9E1D4" stroke="#173B4D" stroke-width="1.8"/>
  <!-- chien -->
  <g transform="translate(96 208)" fill="#173B4D">
    <path d="M12 100 V62 c0-16 10-28 26-32 l40-10 c10-3 18-10 22-19 l6-13 c2-5 9-6 12-1 l10 16 c3 5 9 8 15 8 h22 c8 0 14 6 14 14 v10 c0 6-4 11-10 13 l-16 5 -4 14 c-2 9-9 16-18 18 l-14 3 v12 h-14 V98 h-40 v12 H12 Z"/>
    <path d="M150 12 l14 -14 c4-4 10-1 10 4 v18 Z"/>
    <circle cx="166" cy="26" r="2.6" fill="#fff"/>
    <path d="M186 34 h10" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M18 62 C4 50 0 34 6 20" fill="none" stroke="#173B4D" stroke-width="7" stroke-linecap="round"/>
  </g>
  <!-- cone d'odeur -->
  <g opacity=".55">
    <path d="M292 236 q-22 8 -42 26 q22 6 42 -4 Z" fill="#DCECF2"/>
    <circle cx="300" cy="228" r="5" fill="#3E7185"/>
    <circle cx="288" cy="262" r="3.4" fill="#3E7185" opacity=".7"/>
    <circle cx="278" cy="274" r="2.4" fill="#3E7185" opacity=".5"/>
  </g>
  <g font-family="Inter,sans-serif" font-size="12.5" fill="#34434A">
    <text x="300" y="304">zone marquée → vérification visuelle</text>
  </g>
  <text x="40" y="378" font-family="Inter,sans-serif" font-size="12.5" fill="#566E7A">La performance dépend du chien, du maître-chien, du dressage et des conditions d’intervention.</text>
</svg>`;

/* --- Carte interactive Ile-de-France ------------------------------------- */
const DEPT_PATHS = {
  // Carte schematique : les huit departements partagent leurs frontieres.
  75: 'M424 330 L452 318 L482 330 L490 354 L470 376 L438 376 L418 354 Z',
  92: 'M455 215 L452 318 L424 330 L418 354 L438 376 L470 376 L470 485 L385 470 L330 405 L322 325 L360 255 Z',
  93: 'M455 215 L452 318 L482 330 L490 354 L605 375 L600 300 L545 235 Z',
  94: 'M490 354 L605 375 L560 455 L470 485 L470 376 Z',
  95: 'M150 250 L330 140 L440 95 L560 110 L622 170 L612 250 L600 300 L545 235 L455 215 L360 255 L322 325 Z',
  78: 'M150 250 L322 325 L330 405 L385 470 L330 520 L250 560 L170 520 L120 430 L105 330 Z',
  91: 'M385 470 L470 485 L560 455 L585 520 L560 600 L470 645 L380 635 L320 570 L330 520 Z',
  77: 'M622 170 L700 150 L780 190 L845 280 L860 380 L850 480 L800 570 L720 610 L640 580 L585 520 L560 455 L605 375 L600 300 L612 250 Z',
};
const DEPT_LABELS = {
  75: [452, 356],
  92: [366, 372],
  93: [522, 288],
  94: [527, 424],
  95: [466, 178],
  78: [212, 404],
  91: [452, 562],
  77: [742, 384],
};

export const idfMap = () => `
<svg class="idf__map" viewBox="88 78 790 590" role="img" aria-label="Carte des huit départements d’Île-de-France" data-idf-map
     data-depts='${attr(
       JSON.stringify(
         Object.fromEntries(
           departments.map((d) => [
             d.code,
             {
               code: d.code,
               name: d.name,
               slug: d.slug,
               article: d.article === 'à' ? 'à' : d.article,
               intro: `Interventions ${d.article} ${d.name} : diagnostic, détection canine et traitement adapté aux ${d.habitat}.`,
             },
           ])
         )
       ).replace(/'/g, '&#39;')
     )}'>
  ${departments
    .map(
      (d) => `<a class="idf__deptlink" href="/${d.slug}" data-code="${d.code}"
      aria-label="Punaises de lit ${d.article} ${esc(d.name)} (${d.code})">
      <title>${esc(d.name)} (${d.code}) — voir la page</title>
      <path class="idf__dept" d="${DEPT_PATHS[d.code]}"/>
      <text class="idf__label" x="${DEPT_LABELS[d.code][0]}" y="${DEPT_LABELS[d.code][1]}" text-anchor="middle">${d.code}</text>
    </a>`
    )
    .join('\n  ')}
</svg>`;

/* --- Bandeau HUGETRI400 --------------------------------------------------- */
export const hugetriPanel = () => `
<svg viewBox="0 0 640 400" role="img" aria-labelledby="hg-t hg-d" class="illu">
  <title id="hg-t">Principe de fonctionnement du traitement thermique HUGETRI400</title>
  <desc id="hg-d">Quatre fonctions articulées : production de chaleur, circulation de l’air, contrôle des températures et exposition thermique conduite selon le protocole.</desc>
  <rect width="640" height="400" fill="#173B4D"/>
  <g stroke="rgba(255,255,255,.1)" stroke-width="1">
    ${Array.from({ length: 10 }, (_, i) => `<path d="M0 ${i * 40} H640"/>`).join('')}
  </g>
  <circle cx="320" cy="196" r="128" fill="none" stroke="rgba(255,255,255,.16)"/>
  <circle cx="320" cy="196" r="92" fill="none" stroke="rgba(255,255,255,.12)"/>
  <text x="320" y="186" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="34" font-weight="700" fill="#fff" letter-spacing="1">HUGETRI400</text>
  <text x="320" y="214" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" fill="#9FC4D3">technologie thermique nouvelle génération</text>
  ${[
    [150, 74, 'CHALEUR'],
    [490, 74, 'CIRCULATION'],
    [150, 320, 'CONTRÔLE'],
    [490, 320, 'EXPOSITION'],
  ]
    .map(
      ([x, y, label]) => `<g>
    <rect x="${x - 86}" y="${y - 22}" width="172" height="44" rx="8" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.22)"/>
    <text x="${x}" y="${y + 6}" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="14" font-weight="700" fill="#fff" letter-spacing="1.6">${label}</text>
  </g>`
    )
    .join('')}
  <g stroke="rgba(159,196,211,.5)" stroke-width="1.2" stroke-dasharray="4 5" fill="none">
    <path d="M186 102 L268 150"/><path d="M454 102 L372 150"/>
    <path d="M186 292 L268 244"/><path d="M454 292 L372 244"/>
  </g>
</svg>`;

/* --- Frise generique DIAGNOSTIC -> ... ----------------------------------- */
export const processStrip = (labels) => `
<svg viewBox="0 0 ${labels.length * 180} 120" role="img" aria-label="${attr(labels.join(' puis '))}" class="illu">
  <rect width="${labels.length * 180}" height="120" fill="#fff"/>
  ${labels
    .map((l, i) => {
      const x = i * 180 + 90;
      return `<g>
      <circle cx="${x}" cy="46" r="17" fill="${i === 0 ? '#173B4D' : '#EEF6F9'}" stroke="#3E7185" stroke-width="1.4"/>
      <text x="${x}" y="52" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="13" font-weight="700" fill="${i === 0 ? '#fff' : '#173B4D'}">${i + 1}</text>
      <text x="${x}" y="92" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="12.5" font-weight="700" fill="#173B4D" letter-spacing="1.1">${esc(l)}</text>
      ${i < labels.length - 1 ? `<path d="M${x + 24} 46 H${x + 156}" stroke="#3E7185" stroke-width="1.3" marker-end="url(#ar2)"/>` : ''}
    </g>`;
    })
    .join('')}
  <defs><marker id="ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 1 L9 5 L0 9 z" fill="#3E7185"/></marker></defs>
</svg>`;

/* --- Panneau departemental (rendu serveur, enrichi ensuite par le script) - */
export const idfPanel = (code = '75') => {
  const d = departments.find((x) => x.code === code) || departments[0];
  const li = (label) =>
    `<li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.6 4.4 4.4L19 7.4"/></svg>${label}</li>`;
  return `<div class="idf__panel" data-idf-panel aria-live="polite">
  <p class="eyebrow">Département ${d.code}</p>
  <h3>Punaises de lit ${d.article} ${esc(d.name)}</h3>
  <p>Interventions ${d.article} ${esc(d.name)} : diagnostic, détection canine et traitement adapté aux ${esc(d.habitat)}.</p>
  <ul class="idf__services">
    ${li('Diagnostic et inspection')}
    ${li('Détection canine')}
    ${li('Traitement thermique')}
    ${li('Traitements professionnels adaptés')}
  </ul>
  <a class="btn btn--primary btn--sm" href="/${d.slug}">Voir la page ${d.code}</a>
</div>`;
};
