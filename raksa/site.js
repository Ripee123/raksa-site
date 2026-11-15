/* Raksa – yhteinen skripti: teema, kieli ja asetusvalikko.
   Suomenkielinen sisältö on HTML:ssä; englanninkieliset tekstit ovat sivukohtaisessa
   window.RAKSA_EN -sanakirjassa. Elementit merkitään data-i18n- ja data-i18n-attr-attribuuteilla. */
(function () {
  'use strict';

  var root = document.documentElement;
  var media = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  var EN = window.RAKSA_EN || {};
  var original = new Map();

  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* ei tallennusta */ } }

  function resolve(theme) {
    if (theme === 'light' || theme === 'dark') return theme;
    return media && media.matches ? 'dark' : 'light';
  }

  function defaultLanguage() {
    var langs = navigator.languages || [navigator.language || 'fi'];
    for (var i = 0; i < langs.length; i++) {
      var l = String(langs[i]).toLowerCase();
      if (l.indexOf('fi') === 0) return 'fi';
      if (l.indexOf('en') === 0) return 'en';
    }
    return 'fi';
  }

  function updateImages() {
    var t = root.dataset.resolvedTheme === 'dark' ? 'dark' : 'light';
    var l = root.lang === 'en' ? 'en' : 'fi';
    document.querySelectorAll('img[data-shot]').forEach(function (img) {
      var src = 'assets/' + img.dataset.shot + '-' + t + '-' + l + '.jpg';
      if (img.getAttribute('src') !== src) img.src = src;
    });
    document.querySelectorAll('img[data-logo]').forEach(function (img) {
      img.src = 'assets/logo-' + t + '.png';
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === 'dark' ? '#080d18' : '#f6f8fa';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.dataset.resolvedTheme = resolve(theme);
    updateImages();
  }

  function applyLanguage(lang) {
    lang = lang === 'en' ? 'en' : 'fi';
    root.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (!original.has(el)) original.set(el, el.innerHTML);
      var value = lang === 'en' ? EN[key] : original.get(el);
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.dataset.i18nAttr.split(';').forEach(function (pair) {
        var parts = pair.split(':');
        var attr = parts[0].trim(), key = (parts[1] || '').trim();
        var store = 'i18nOrig' + attr.replace(/[^a-z]/gi, '');
        if (!(store in el.dataset)) el.dataset[store] = el.getAttribute(attr) || '';
        var value = lang === 'en' ? EN[key] : el.dataset[store];
        if (value != null) el.setAttribute(attr, value);
      });
    });

    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.hidden = el.dataset.lang !== lang;
    });

    updateImages();
  }

  // Alkutila
  var storedTheme = load('raksa-theme');
  var theme = ['system', 'light', 'dark'].indexOf(storedTheme) >= 0 ? storedTheme : 'system';
  var storedLang = load('raksa-language');
  var lang = storedLang === 'fi' || storedLang === 'en' ? storedLang : defaultLanguage();

  applyTheme(theme);
  applyLanguage(lang);

  var themeSelect = document.getElementById('theme');
  var langSelect = document.getElementById('language');
  var button = document.getElementById('settingsButton');
  var panel = document.getElementById('settingsPanel');

  if (themeSelect) {
    themeSelect.value = theme;
    themeSelect.addEventListener('change', function () {
      applyTheme(themeSelect.value);
      save('raksa-theme', themeSelect.value);
    });
  }
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener('change', function () {
      applyLanguage(langSelect.value);
      save('raksa-language', langSelect.value);
    });
  }
  if (media) {
    var onChange = function () { if (root.dataset.theme === 'system') applyTheme('system'); };
    if (media.addEventListener) media.addEventListener('change', onChange);
    else if (media.addListener) media.addListener(onChange);
  }

  if (button && panel) {
    var setOpen = function (open, focusButton) {
      panel.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      if (!open && focusButton) button.focus();
    };
    button.addEventListener('click', function () { setOpen(panel.hidden); });
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !e.target.closest('.settings')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) setOpen(false, true);
    });
    window.addEventListener('pagehide', function () { setOpen(false); });
  }
})();
