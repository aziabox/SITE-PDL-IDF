import { definePage } from '../../lib/page.mjs';
import { section, pageHead, checklist, faq, callout, icon, esc } from '../../lib/components.mjs';
import { diagnosticForm } from '../../lib/form.mjs';
import { service } from '../../lib/schema.mjs';
import { site } from '../../lib/site.mjs';

const FAQ = [
  {
    q: 'Le diagnostic est-il payant ?',
    a: 'Les conditions du diagnostic vous sont indiquées lors de l’échange téléphonique, avant tout déplacement, en fonction de la commune, de la surface et du type de recherche demandé (inspection visuelle seule ou avec détection canine). Aucun tarif n’est affiché ici tant qu’il n’est pas confirmé par l’entreprise.',
  },
  {
    q: 'Que dois-je préparer avant votre venue ?',
    a: 'Rien de particulier, et surtout : ne déménagez pas les affaires de la chambre et ne jetez rien. Déplacer un matelas ou des cartons avant l’inspection disperse les punaises et fausse la lecture des traces. Laissez la pièce en l’état, nous verrons ensemble sur place.',
  },
  {
    q: 'Combien de temps dure un diagnostic ?',
    a: 'Cela dépend du nombre de pièces et de l’encombrement. Une inspection sérieuse ne se limite jamais au matelas : elle couvre le sommier, la tête de lit, les plinthes, le mobilier proche et les points de passage éventuels vers les logements voisins.',
  },
  {
    q: 'Puis-je vous appeler sans remplir le formulaire ?',
    a: `Bien sûr. Le téléphone reste le moyen le plus rapide : ${site.phoneDisplay}. Le formulaire sert surtout à nous transmettre des éléments précis (ville, type de logement, ce que vous avez observé) pour préparer l’échange.`,
  },
];

export default function () {
  return definePage({
    url: '/diagnostic',
    title: 'Demander un diagnostic punaises de lit — Île-de-France',
    description:
      'Décrivez votre situation : nous vous rappelons pour organiser un diagnostic punaises de lit adapté à votre logement en Île-de-France. Détection canine possible. 07 56 82 27 85.',
    priority: 0.9,
    changefreq: 'monthly',
    crumbs: [{ label: 'Demander un diagnostic' }],
    faq: FAQ,
    schema: [
      service({
        name: 'Diagnostic punaises de lit',
        description:
          'Inspection professionnelle d’un logement ou d’un établissement pour confirmer la présence de punaises de lit et localiser les foyers.',
        url: '/diagnostic',
        serviceType: 'Diagnostic punaises de lit',
      }),
    ],
    body: `
${pageHead({
  eyebrow: 'Diagnostic',
  title: 'Demander un diagnostic punaises de lit',
  lead: 'Avant de parler traitement, il faut savoir ce que l’on traite, où, et jusqu’où l’infestation s’est étendue. Décrivez-nous la situation : nous vous rappelons pour organiser le diagnostic adapté.',
  ctas: `<div class="btn-row"><a class="btn btn--tel" href="tel:${site.phoneHref}" data-cta="diag-tel">${icon('phone')} ${esc(site.phoneDisplay)}</a><a class="btn btn--ghost" href="#formulaire">Remplir le formulaire</a></div>`,
})}

${section({
  variant: 'section--white',
  html: `
<div class="grid grid--2" style="align-items:start">
  <div>
    <p class="eyebrow">Ce que comprend un diagnostic</p>
    <h2 style="font-size:clamp(1.35rem,1.1rem+1vw,1.85rem)">Une inspection méthodique, pas un coup d’œil</h2>
    <p>L’objectif n’est pas seulement de dire « oui, il y a des punaises ». C’est de déterminer l’étendue réelle : combien de pièces sont concernées, depuis combien de temps l’infestation dure, par où elle est arrivée et quelles méthodes sont applicables au logement.</p>
    ${checklist([
      'Inspection du couchage : matelas, coutures, sommier, tête de lit, structure',
      'Examen du mobilier situé à proximité immédiate du lit',
      'Recherche de traces : déjections, mues, œufs, insectes vivants',
      'Contrôle des plinthes, prises, encadrements et points de passage',
      'Détection canine si la configuration ou la surface le justifie',
      'Évaluation des risques de propagation vers les pièces ou logements voisins',
      'Restitution claire : ce qui a été trouvé, où, et les options de traitement',
    ])}
    ${callout({
      variant: 'sand',
      icon: 'alert',
      title: 'Trois erreurs à éviter avant notre passage',
      text: `Ne déménagez pas vos affaires dans une autre pièce ou chez un proche : c’est le meilleur moyen d’étendre l’infestation.

Ne jetez pas votre matelas sur le palier ou dans la rue. N’utilisez pas de produits achetés en grande surface : ils dispersent souvent les punaises sans les détruire et compliquent le travail ensuite.`,
    })}
  </div>
  <div>${diagnosticForm()}</div>
</div>`,
})}

${section({
  variant: 'section--glacier',
  eyebrow: 'FAQ',
  title: 'Avant de nous contacter',
  html: faq(FAQ),
  wrap: 'wrap--narrow',
})}`,
  });
}
