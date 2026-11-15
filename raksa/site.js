/* Raksa website: shared language, theme and settings-panel behaviour for every page. */
(() => {
  'use strict';

  const STRINGS = {
    fi: {
      skip: 'Siirry sisältöön', subtitle: 'Rakennuslaskuri', settings: 'Asetukset', language: 'Kieli', theme: 'Teema',
      system: 'Järjestelmä', light: 'Vaalea', dark: 'Tumma', privacy: 'Tietosuoja', home: 'Etusivu', contact: 'Yhteystiedot', footerNav: 'Alatunniste',
      version: 'Versio 1.2.806',
      pageTitle: 'Raksa | Rakennuslaskuri',
      pageDescription: 'Raksa on Android-sovellus suorakulmaisen kolmion laskentaan ja rakennustyön mitoitukseen. Toimii ilman verkkoyhteyttä ja käyttäjätiliä.',
      ogDescription: 'Kolmiolaskin ja mitoitus rakennustyön käytännön tilanteisiin. Toimii ilman verkkoyhteyttä.',
      ogImageAlt: 'Raksa-rakennuslaskurin logo ja mitoitusnäkymä',
      eyebrow: 'Android-sovellus rakentamiseen',
      title: 'Mitat ja jaot selkeästi työmaalla',
      lead: 'Raksa ratkaisee suorakulmaisen kolmion ja laskee mittapisteet toistuville rakenteille, kuten tolppajaolle ja rimoitukselle. Laskenta tapahtuu laitteessa ilman verkkoyhteyttä ja käyttäjätiliä.',
      explore: 'Katso työkalut',
      status: 'Kehitysversio 1.2.806 · Ei vielä saatavilla Google Playssa',
      toolsEyebrow: 'Työkalut', toolsTitle: 'Kolmiolaskin ja mitoitus',
      triangleTitle: 'Kolmiolaskin',
      triangleText: 'Anna kaksi arvoa, joista ainakin toinen on sivu. Raksa laskee muut sivut, kulmat, pinta-alan, piirin ja kaltevuuden jo kirjoittaessasi.',
      tri1: 'Kateetit, hypotenuusa sekä kulmat α ja β',
      tri2: 'Kulmasäädin pysähtyy yleisiin kaltevuuksiin, kuten 1:2 ja 30°',
      tri3: 'Tuloksena kolmion kuva, pinta-ala, piiri ja kaltevuussuhde',
      triangleAlt: 'Raksan kolmiolaskin: kateetti 3600 mm ja kulma 30°, tuloksena kolmion kuva, pinta-ala, piiri ja kaltevuus',
      dimTitle: 'Mitoitus',
      dimText: 'Laske mittapisteet ja materiaalien paikat aloituksen, jaon, mitan tai pisteiden määrän perusteella. Tulos päivittyy automaattisesti, kun syötteet ovat kelvollisia.',
      dim1: 'Jaotettu, Mitoitettu ja Sovitettu – Sovitettu tavoitejaon tai pisteiden mukaan',
      dim2: 'Keskitys välin tai pisteen mukaan ja lukittava kokonaismitta',
      dim3: 'Materiaalivahvuus, zoomattava mittajana koko näytön tilassa ja mittapistelista',
      dimensionsAlt: 'Raksan mitoitus: Mitoitettu-tila, mitta 3000 mm, jako 600 mm ja materiaali 48 mm, tuloksena mittajana ja mittapisteet',
      featuresEyebrow: 'Molemmissa laskimissa', featuresTitle: 'Tehty käytännön työhön',
      f1Title: 'Ilman verkkoyhteyttä',
      f1Text: 'Laskenta tapahtuu laitteessa. Sovellus ei tarvitse käyttäjätiliä eikä pyydä Android-käyttöoikeuksia.',
      f2Title: 'Kopioi ja jaa',
      f2Text: 'Tulosarvon napautus kopioi luvun. Jakopainike lähettää tulokset kuvana Androidin jakovalikon kautta.',
      f3Title: 'Tallentuu automaattisesti',
      f3Text: 'Arvot ja asetukset ovat tallessa, kun avaat sovelluksen uudelleen. Tyhjennyksen voi perua.',
      f4Title: 'Omat asetukset',
      f4Text: 'Yksiköt millimetreistä kilometreihin, 0–3 desimaalia, suomi tai englanti sekä järjestelmän, vaalea tai tumma teema.',
      development: 'Kehitys', grow: 'Raksa kasvaa harkitusti',
      growText: 'Seuraavat työkalut näkyvät sovelluksessa jo merkinnällä Tulossa. Tällä sivulla esitellään valmiina vain nykyisen version ominaisuudet.',
      next1: 'Pinta-alat ja tilavuudet', next2: 'Materiaalimenekit', next3: 'Lisää rakentamisen laskureita ja käytännön työkaluja',
      notice: 'Raksa on laskennan ja mitoituksen apuväline. Tarkista syötetyt arvot, tulokset ja kriittiset mitat ennen työn toteuttamista.',
      privacyPageTitle: 'Raksa | Tietosuojaseloste',
      privacyDescription: 'Raksa-Android-sovelluksen ja raksa-verkkosivun tietosuojaseloste.',
      privacyEyebrow: 'Raksa · Rakennuslaskuri', privacyTitle: 'Tietosuojaseloste',
      privacyLead: 'Raksa-Android-sovelluksen ja tämän verkkosivun tietojen käsittely',
      metaPackage: 'Pakettitunnus', metaVersion: 'Sovellusversio', metaUpdated: 'Päivitetty', metaUpdatedValue: '15.11.2026'
    },
    en: {
      skip: 'Skip to content', subtitle: 'Construction calculator', settings: 'Settings', language: 'Language', theme: 'Theme',
      system: 'System', light: 'Light', dark: 'Dark', privacy: 'Privacy', home: 'Home', contact: 'Contact', footerNav: 'Footer',
      version: 'Version 1.2.806',
      pageTitle: 'Raksa | Construction calculator',
      pageDescription: 'Raksa is an Android app for right-triangle calculations and construction dimensioning. Works offline and without a user account.',
      ogDescription: 'Triangle calculator and dimensioning for practical construction work. Works offline.',
      ogImageAlt: 'Raksa construction calculator logo and dimensioning screen',
      eyebrow: 'Android app for construction',
      title: 'Clear measurements and layouts on site',
      lead: 'Raksa solves right triangles and calculates measurement points for repeating structures such as stud and batten spacing. Calculations run on the device, offline and without a user account.',
      explore: 'View the tools',
      status: 'Development version 1.2.806 · Not yet available on Google Play',
      toolsEyebrow: 'Tools', toolsTitle: 'Triangle calculator and dimensioning',
      triangleTitle: 'Triangle calculator',
      triangleText: 'Enter two values, at least one of them a side. Raksa calculates the remaining sides, angles, area, perimeter and slope ratio as you type.',
      tri1: 'Legs, hypotenuse and angles α and β',
      tri2: 'The angle slider snaps to common slopes such as 1:2 and 30°',
      tri3: 'Results include a triangle diagram, area, perimeter and slope ratio',
      triangleAlt: 'Raksa triangle calculator: leg 3600 mm and angle 30°, with the triangle diagram, area, perimeter and slope ratio',
      dimTitle: 'Dimensioning',
      dimText: 'Calculate measurement points and material positions from a start, spacing, dimension or number of points. The result updates automatically once the inputs are valid.',
      dim1: 'Distributed, Dimensioned and Fitted – Fitted by target spacing or by points',
      dim2: 'Centering on a gap or a point, and a lockable overall dimension',
      dim3: 'Material thickness, a zoomable full-screen measurement line and a point listing',
      dimensionsAlt: 'Raksa dimensioning: Dimensioned mode, dimension 3000 mm, spacing 600 mm and material 48 mm, with the measurement line and points',
      featuresEyebrow: 'In both calculators', featuresTitle: 'Built for practical work',
      f1Title: 'Works offline',
      f1Text: 'Calculations run on the device. The app needs no user account and requests no Android permissions.',
      f2Title: 'Copy and share',
      f2Text: 'Tap a result value to copy the number. The share button sends the results as an image through the Android share sheet.',
      f3Title: 'Saved automatically',
      f3Text: 'Values and settings are kept when you reopen the app. Clearing can be undone.',
      f4Title: 'Your settings',
      f4Text: 'Units from millimetres to kilometres, 0–3 decimal places, Finnish or English, and a system, light or dark theme.',
      development: 'Development', grow: 'Raksa grows with purpose',
      growText: 'The next tools are already shown in the app as Coming soon. This page presents as complete only the features of the current version.',
      next1: 'Areas and volumes', next2: 'Material usage', next3: 'More construction calculators and practical tools',
      notice: 'Raksa is a calculation and dimensioning aid. Check entered values, results and critical dimensions before carrying out the work.',
      privacyPageTitle: 'Raksa | Privacy Policy',
      privacyDescription: 'Privacy Policy for the Raksa Android app and this website.',
      privacyEyebrow: 'Raksa · Construction calculator', privacyTitle: 'Privacy Policy',
      privacyLead: 'Data handling in the Raksa Android app and on this website',
      metaPackage: 'Package name', metaVersion: 'App version', metaUpdated: 'Last updated', metaUpdatedValue: '15 November 2026'
    }
  };

  const root = document.documentElement;
  const darkQuery = matchMedia('(prefers-color-scheme: dark)');
  const isPrivacy = document.body.dataset.page === 'privacy';
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } }
  };

  const resolveTheme = (mode) => (mode === 'system' ? (darkQuery.matches ? 'dark' : 'light') : mode);

  function refreshImages() {
    const theme = root.dataset.resolvedTheme === 'dark' ? 'dark' : 'light';
    const lang = root.lang === 'en' ? 'en' : 'fi';
    document.querySelectorAll('img[data-shot]').forEach((img) => {
      img.src = `assets/screens/${img.dataset.shot}-${theme}-${lang}.webp`;
    });
    document.querySelectorAll('.brand-logo').forEach((img) => {
      img.src = `assets/logo-${theme}.png`;
    });
  }

  function applyTheme(mode, save) {
    root.dataset.theme = mode;
    root.dataset.resolvedTheme = resolveTheme(mode);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = root.dataset.resolvedTheme === 'dark' ? '#0E1014' : '#F5F2EC';
    if (save) store.set('raksa-theme', mode);
    refreshImages();
  }

  function applyLanguage(lang, save) {
    const copy = STRINGS[lang] ? STRINGS[lang] : STRINGS.fi;
    root.lang = STRINGS[lang] ? lang : 'fi';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const text = copy[el.dataset.i18n];
      if (text) el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const text = copy[el.dataset.i18nAria];
      if (text) el.setAttribute('aria-label', text);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const text = copy[el.dataset.i18nAlt];
      if (text) el.alt = text;
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const text = copy[el.dataset.i18nContent];
      if (text) el.content = text;
    });
    document.title = isPrivacy ? copy.privacyPageTitle : copy.pageTitle;
    document.querySelectorAll('[data-contact-link]').forEach((a) => {
      a.hash = root.lang === 'en' ? 'contact' : 'yhteystiedot';
    });
    if (save) store.set('raksa-language', root.lang);
    refreshImages();
  }

  /* Contact details are kept out of the HTML source to reduce scraping; they are decoded only in the browser. */
  const decode = (value) => [...atob(value)].reverse().join('');
  const CONTACT = { name: 'aWhvTCBvdHNpUg==', email: 'bW9jLmxpYW1nQG9sYWtpci5vdHNpUg==' };
  document.querySelectorAll('[data-contact="name"]').forEach((el) => { el.textContent = decode(CONTACT.name); });
  document.querySelectorAll('[data-contact="email"] .reveal').forEach((btn) => {
    btn.addEventListener('click', () => {
      const address = decode(CONTACT.email);
      const link = document.createElement('a');
      link.href = `mailto:${address}`;
      link.textContent = address;
      btn.replaceWith(link);
      link.focus();
    });
  });

  const themeSelect = document.getElementById('theme');
  const languageSelect = document.getElementById('language');
  const button = document.getElementById('settingsButton');
  const panel = document.getElementById('settingsPanel');

  applyTheme(['light', 'dark'].includes(root.dataset.theme) ? root.dataset.theme : 'system', false);
  applyLanguage(root.lang, false);
  themeSelect.value = root.dataset.theme;
  languageSelect.value = root.lang;

  themeSelect.addEventListener('change', (e) => applyTheme(e.target.value, true));
  languageSelect.addEventListener('change', (e) => applyLanguage(e.target.value, true));
  darkQuery.addEventListener?.('change', () => { if (root.dataset.theme === 'system') applyTheme('system', false); });

  function setPanel(open, returnFocus) {
    panel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    if (!open && returnFocus) button.focus();
  }
  button.addEventListener('click', () => setPanel(panel.hidden, false));
  document.addEventListener('click', (e) => { if (!panel.hidden && !e.target.closest('.settings')) setPanel(false, false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) setPanel(false, true); });
  addEventListener('pagehide', () => setPanel(false, false));
})();
