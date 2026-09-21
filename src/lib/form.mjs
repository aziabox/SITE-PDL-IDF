import { site } from './site.mjs';
import { icon } from './html.mjs';

/** Formulaire de demande de diagnostic.
 *  L'attribut action reste vide tant que le service de reception (e-mail,
 *  CRM, endpoint) n'est pas branche : le script affiche alors un message
 *  explicite plutot que de perdre la demande. */
export const diagnosticForm = ({ id = 'formulaire', compact = false } = {}) => `
<form class="formcard" id="${id}" data-diag-form method="post" novalidate>
  <div class="form__grid">
    <div class="field">
      <label for="f-nom">Nom et prénom <span aria-hidden="true">*</span></label>
      <input id="f-nom" name="nom" type="text" autocomplete="name" required data-err="Merci d’indiquer votre nom.">
      <p class="err" role="alert"></p>
    </div>
    <div class="field">
      <label for="f-tel">Téléphone <span aria-hidden="true">*</span></label>
      <input id="f-tel" name="telephone" type="tel" inputmode="tel" autocomplete="tel" required data-err="Un numéro à 10 chiffres est nécessaire pour vous rappeler.">
      <p class="err" role="alert"></p>
    </div>
    <div class="field">
      <label for="f-mail">E-mail <span aria-hidden="true">*</span></label>
      <input id="f-mail" name="email" type="email" autocomplete="email" required data-err="Merci d’indiquer un e-mail valide.">
      <p class="err" role="alert"></p>
    </div>
    <div class="field">
      <label for="f-ville">Ville et code postal <span aria-hidden="true">*</span></label>
      <input id="f-ville" name="ville" type="text" autocomplete="address-level2" placeholder="Ex. Montreuil 93100" required data-err="Indiquez la commune concernée.">
      <p class="err" role="alert"></p>
    </div>
    <div class="field">
      <label for="f-logement">Type de logement</label>
      <select id="f-logement" name="logement">
        <option value="">Sélectionner…</option>
        <option>Appartement</option>
        <option>Maison</option>
        <option>Studio / chambre</option>
        <option>Immeuble / parties communes</option>
        <option>Hôtel ou hébergement touristique</option>
        <option>Résidence (étudiante, seniors, EHPAD)</option>
        <option>Local professionnel ou commerce</option>
      </select>
    </div>
    <div class="field">
      <label for="f-surface">Surface approximative</label>
      <input id="f-surface" name="surface" type="text" inputmode="numeric" placeholder="Ex. 45 m²">
    </div>
    <div class="field">
      <label for="f-presence">Présence constatée ?</label>
      <select id="f-presence" name="presence">
        <option value="">Sélectionner…</option>
        <option>Oui, punaises vues vivantes</option>
        <option>Traces / déjections / mues observées</option>
        <option>Piqûres uniquement</option>
        <option>Doute, rien vu pour l’instant</option>
      </select>
    </div>
    <div class="field">
      <label for="f-depuis">Depuis quand ?</label>
      <select id="f-depuis" name="depuis">
        <option value="">Sélectionner…</option>
        <option>Moins d’une semaine</option>
        <option>1 à 4 semaines</option>
        <option>1 à 6 mois</option>
        <option>Plus de 6 mois</option>
        <option>Après un traitement déjà réalisé</option>
      </select>
    </div>
    <div class="field field--full">
      <label for="f-canine">Souhaitez-vous une détection canine ?</label>
      <select id="f-canine" name="detection_canine">
        <option value="">Sélectionner…</option>
        <option>Oui, pour localiser les foyers</option>
        <option>Oui, pour un contrôle après traitement</option>
        <option>Non</option>
        <option>À voir avec vous</option>
      </select>
      <p class="hint">La détection canine sert à cibler les zones à inspecter ; elle est complétée par une vérification visuelle.</p>
    </div>
    <div class="field field--full">
      <span class="label" id="lbl-traitement" style="font-family:var(--ff-title);font-size:.87rem;font-weight:500;color:var(--c-deep)">Type d’intervention souhaité</span>
      <div class="radio-row" role="radiogroup" aria-labelledby="lbl-traitement">
        ${[
          ['Diagnostic', 'diagnostic'],
          ['Traitement thermique', 'thermique'],
          ['Traitement professionnel', 'professionnel'],
          ['Je ne sais pas', 'inconnu'],
        ]
          .map(
            ([label, value], i) => `<label class="radio-chip">
          <input type="radio" name="intervention" value="${value}"${i === 3 ? ' checked' : ''}>
          <span>${label}</span>
        </label>`
          )
          .join('')}
      </div>
    </div>
    <div class="field field--full">
      <label for="f-message">Votre message</label>
      <textarea id="f-message" name="message" rows="${compact ? 3 : 5}" placeholder="Décrivez ce que vous observez : pièces concernées, traitements déjà tentés, contraintes d’accès…"></textarea>
    </div>
    <div class="field field--full">
      <label class="form__consent">
        <input type="checkbox" name="consentement" required data-err="Votre accord est nécessaire pour traiter la demande.">
        <span>J’accepte que mes coordonnées soient utilisées pour être recontacté au sujet de ma demande. Elles ne sont ni revendues ni utilisées à d’autres fins.</span>
      </label>
      <p class="err" role="alert"></p>
    </div>
  </div>
  <div class="form__foot">
    <button class="btn btn--primary" type="submit" data-cta="form-submit">Demander mon diagnostic</button>
    <a class="btn btn--tel" href="tel:${site.phoneHref}" data-cta="form-tel">${icon('phone')} ${site.phoneDisplay}</a>
  </div>
  <p class="form__status" data-form-status role="status" aria-live="polite"></p>
</form>`;
