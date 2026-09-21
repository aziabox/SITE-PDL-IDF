/* Expertise Punaises de Lit — scripts d'interface (vanilla, sans dependance). */
(function () {
  'use strict';

  /* --- Menu mobile ----------------------------------------------------- */
  var burger = document.querySelector('.burger');
  var drawer = document.getElementById('menu-mobile');
  if (burger && drawer) {
    var lastFocus = null;
    var open = function () {
      lastFocus = document.activeElement;
      drawer.classList.add('is-open');
      drawer.removeAttribute('hidden');
      burger.setAttribute('aria-expanded', 'true');
      document.documentElement.style.overflow = 'hidden';
      var first = drawer.querySelector('a, button');
      if (first) first.focus();
    };
    var close = function () {
      drawer.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      window.setTimeout(function () {
        if (!drawer.classList.contains('is-open')) drawer.setAttribute('hidden', '');
      }, 280);
      if (lastFocus) lastFocus.focus();
    };
    burger.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) close(); else open();
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('.drawer__close') || e.target.closest('a')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });
  }

  /* --- Ombre de l'en-tete au defilement --------------------------------- */
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Carte interactive Ile-de-France ---------------------------------- */
  var map = document.querySelector('[data-idf-map]');
  if (map) {
    var panel = document.querySelector('[data-idf-panel]');
    var data = {};
    try { data = JSON.parse(map.getAttribute('data-depts') || '{}'); } catch (e) { data = {}; }
    var render = function (code) {
      var d = data[code];
      if (!d || !panel) return;
      panel.querySelectorAll('[data-idf-map] .idf__dept').forEach(function () {});
      panel.innerHTML =
        '<p class="eyebrow">Département ' + d.code + '</p>' +
        '<h3>Punaises de lit ' + d.article + ' ' + d.name + '</h3>' +
        '<p>' + d.intro + '</p>' +
        '<ul class="idf__services">' +
        '<li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.6 4.4 4.4L19 7.4"/></svg>Diagnostic et inspection</li>' +
        '<li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.6 4.4 4.4L19 7.4"/></svg>Détection canine</li>' +
        '<li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.6 4.4 4.4L19 7.4"/></svg>Traitement thermique</li>' +
        '<li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.6 4.4 4.4L19 7.4"/></svg>Traitements professionnels adaptés</li>' +
        '</ul>' +
        '<a class="btn btn--primary btn--sm" href="/' + d.slug + '">Voir la page ' + d.code + '</a>';
    };
    var select = function (el) {
      map.querySelectorAll('.idf__dept').forEach(function (p) {
        p.classList.toggle('is-active', p === el);
        p.setAttribute('aria-pressed', p === el ? 'true' : 'false');
      });
      render(el.getAttribute('data-code'));
    };
    map.querySelectorAll('.idf__dept').forEach(function (p) {
      p.addEventListener('click', function () { select(p); });
      p.addEventListener('mouseenter', function () { render(p.getAttribute('data-code')); });
      p.addEventListener('focus', function () { select(p); });
      p.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(p); }
      });
    });
    var initial = map.querySelector('.idf__dept[data-code="75"]') || map.querySelector('.idf__dept');
    if (initial) { initial.classList.add('is-active'); render(initial.getAttribute('data-code')); }
  }

  /* --- Sommaire : mise en evidence de la section lue --------------------- */
  var toc = document.querySelector('[data-toc]');
  if (toc && 'IntersectionObserver' in window) {
    var links = Array.prototype.slice.call(toc.querySelectorAll('a'));
    var targets = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-88px 0px -70% 0px' });
    targets.forEach(function (t) { obs.observe(t); });
  }

  /* --- Formulaire de diagnostic ----------------------------------------- */
  var form = document.querySelector('[data-diag-form]');
  if (form) {
    var status = form.querySelector('[data-form-status]');
    var setError = function (input, on, msg) {
      var field = input.closest('.field');
      if (!field) return;
      field.classList.toggle('has-error', on);
      input.setAttribute('aria-invalid', on ? 'true' : 'false');
      var err = field.querySelector('.err');
      if (err && msg) err.textContent = msg;
    };
    var phoneOk = function (v) { return v.replace(/[^0-9+]/g, '').length >= 10; };
    form.addEventListener('submit', function (e) {
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (input) {
        var v = (input.value || '').trim();
        var bad = !v;
        if (!bad && input.type === 'email') bad = !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v);
        if (!bad && input.type === 'tel') bad = !phoneOk(v);
        if (!bad && input.type === 'checkbox') bad = !input.checked;
        setError(input, bad, bad ? (input.getAttribute('data-err') || 'Merci de renseigner ce champ.') : '');
        if (bad && ok) { input.focus(); }
        if (bad) ok = false;
      });
      if (!ok) {
        e.preventDefault();
        if (status) {
          status.textContent = 'Certains champs doivent être complétés avant l’envoi.';
          status.classList.add('is-visible');
        }
        return;
      }
      // Aucun service d'envoi n'est configure : on evite une soumission dans le vide.
      if (!form.getAttribute('action')) {
        e.preventDefault();
        if (status) {
          status.innerHTML =
            'Le formulaire est prêt mais aucun service d’envoi n’est encore relié. ' +
            'Appelez-nous au <a href="tel:+33756822785">07 56 82 27 85</a> ou configurez l’attribut <code>action</code> du formulaire.';
          status.classList.add('is-visible');
        }
      }
    });
    form.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('input', function () { setError(input, false); });
    });
  }
})();
