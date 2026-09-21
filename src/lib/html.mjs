// Petits utilitaires de rendu HTML (aucune dependance externe).

export const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const attr = (s = '') => esc(s).replace(/'/g, '&#39;');

/** Concatene un tableau (en ignorant null/undefined/false). */
export const join = (arr, sep = '\n') => (Array.isArray(arr) ? arr : [arr]).filter(Boolean).join(sep);

/** Transforme un texte multi-paragraphes (separes par une ligne vide) en <p>. */
export const paras = (text) =>
  String(text)
    .trim()
    .split(/\n\s*\n/)
    .map((p) => `<p>${p.trim().replace(/\n\s*/g, ' ')}</p>`)
    .join('\n');

export const slugify = (s) =>
  String(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Icones ligne, style unique du site : trait 1.5, angles doux, 24x24. */
const ICONS = {
  dog: '<path d="M4 8.5 4 5.2a.6.6 0 0 1 1-.45L7.4 7"/><path d="M20 8.5V5.2a.6.6 0 0 0-1-.45L16.6 7"/><path d="M4 8.5c0 4.2 1.4 6.3 1.4 8.4V19a1 1 0 0 0 1 1h11.2a1 1 0 0 0 1-1v-2.1c0-2.1 1.4-4.2 1.4-8.4"/><path d="M10 12.5h.01M14 12.5h.01"/><path d="M12 15.2c-.9 0-1.4.5-1.4 1s.6 1 1.4 1 1.4-.5 1.4-1-.5-1-1.4-1Z"/>',
  heat: '<path d="M12 3c2.4 2.6 3.6 4.8 3.6 6.7 0 1.6-.8 2.6-1.9 2.6-1 0-1.7-.7-1.7-1.9 0-1 .4-1.8.4-2.7"/><path d="M8.4 9.6C7 11.2 6.2 12.9 6.2 14.6 6.2 17.6 8.8 20 12 20s5.8-2.4 5.8-5.4c0-1-.3-2-.8-3"/>',
  shield: '<path d="M12 3.5 5 6.2v5.2c0 4 2.9 7.6 7 9.1 4.1-1.5 7-5.1 7-9.1V6.2Z"/><path d="m9.2 12.2 2 2 3.6-3.9"/>',
  search: '<circle cx="11" cy="11" r="6.2"/><path d="m15.6 15.6 3.9 3.9"/>',
  bed: '<path d="M3 6v12"/><path d="M3 17h18"/><path d="M21 17v-4.2a2 2 0 0 0-2-2H3"/><path d="M7.6 10.8V9.2a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1v1.6"/>',
  home: '<path d="M4 10.6 12 4.3l8 6.3"/><path d="M6 9.4V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.4"/><path d="M10 20v-5h4v5"/>',
  building: '<path d="M4 20h16"/><path d="M6 20V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15"/><path d="M15 9h2.8a1 1 0 0 1 1 1v10"/><path d="M8.6 7.5h3.2M8.6 11h3.2M8.6 14.5h3.2"/>',
  thermo: '<path d="M14 13.7V5.6a2 2 0 1 0-4 0v8.1a3.6 3.6 0 1 0 4 0Z"/><path d="M12 9.4v5.4"/>',
  clipboard: '<path d="M9 4.8H7.6a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h8.8a1 1 0 0 0 1-1V5.8a1 1 0 0 0-1-1H15"/><path d="M9.6 3.4h4.8a.6.6 0 0 1 .6.6v1.6a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V4a.6.6 0 0 1 .6-.6Z"/><path d="M9.4 11h5.2M9.4 14.6h3.4"/>',
  phone: '<path d="M6.3 4h2.4l1.5 3.6-1.9 1.2a10.6 10.6 0 0 0 4.9 4.9l1.2-1.9L18 13.3v2.4a2 2 0 0 1-2.2 2A13.4 13.4 0 0 1 4.3 6.2 2 2 0 0 1 6.3 4Z"/>',
  mail: '<rect x="3.4" y="5.6" width="17.2" height="12.8" rx="1.4"/><path d="m3.9 6.6 8.1 5.6 8.1-5.6"/>',
  clock: '<circle cx="12" cy="12" r="8.2"/><path d="M12 7.4V12l3 1.8"/>',
  leaf: '<path d="M19.4 4.6C10.8 4.2 5.4 7.8 5.4 13.4c0 2 .8 3.8 2 5"/><path d="M6.4 19.4C13.6 20 19.4 15.6 19.4 4.6"/><path d="M4.6 20.2 8 16.8"/>',
  steam: '<path d="M7 19.2h10"/><path d="M8.6 19.2v-2.4a3.4 3.4 0 0 1 6.8 0v2.4"/><path d="M12 10.6c0-1.2 1.4-1.6 1.4-2.9S12 5.4 12 4.2"/><path d="M8.4 10.2c0-1 1-1.4 1-2.4"/><path d="M15.6 10.2c0-1 -1-1.4-1-2.4"/>',
  vacuum: '<path d="M4.4 19.4h5.2l-.8-4.2a4.8 4.8 0 0 1 4.7-5.6h1.2"/><circle cx="17.4" cy="8" r="3.4"/><path d="M3.4 19.4h7.2"/><path d="M14.4 19.4h6"/>',
  map: '<path d="m9.4 4.6 5.2 2.2 4.1-1.8a.6.6 0 0 1 .8.6v11.2a.6.6 0 0 1-.4.6l-4.5 1.9-5.2-2.2-4.1 1.8a.6.6 0 0 1-.8-.6V6.9a.6.6 0 0 1 .4-.6Z"/><path d="M9.4 4.6v12.3M14.6 6.8v12.3"/>',
  check: '<path d="m5 12.6 4.4 4.4L19 7.4"/>',
  alert: '<path d="M12 4.6 3.6 19h16.8Z"/><path d="M12 10v4M12 16.6h.01"/>',
  people: '<circle cx="9.4" cy="8.6" r="3.1"/><path d="M3.6 19.4c0-3.1 2.6-5.2 5.8-5.2s5.8 2.1 5.8 5.2"/><path d="M16.2 6.2a3.1 3.1 0 0 1 0 6"/><path d="M17.4 14.6c1.8.6 3 2.2 3 4.8"/>',
  doc: '<path d="M6.6 3.6h6.6l4.2 4.2v12.6a1 1 0 0 1-1 1H6.6a1 1 0 0 1-1-1V4.6a1 1 0 0 1 1-1Z"/><path d="M13 3.6v4.4h4.4"/><path d="M8.6 12.4h6.8M8.6 16h4.4"/>',
  hotel: '<path d="M4 20V4.8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1V20"/><path d="M3 20h18"/><path d="M8 7.6h2.4M13.6 7.6H16M8 11.4h2.4M13.6 11.4H16"/><path d="M10 20v-3.6h4V20"/>',
};

export const icon = (name, cls = '') =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.check}</svg>`;
