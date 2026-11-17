/* Raksa website: shared language, theme and settings-panel behaviour for every page. */
(() => {
  'use strict';

  /* Google Play store listing. Set the final URL here once the app is published;
     until then the home page shows a neutral "Coming to Google Play" state. */
  const PLAY_STORE_URL = '';

  const STRINGS = {
    fi: {
      skip: 'Siirry sisältöön', subtitle: 'Rakennuslaskuri', settings: 'Asetukset', language: 'Kieli', theme: 'Teema',
      system: 'Järjestelmä', light: 'Vaalea', dark: 'Tumma', privacy: 'Tietosuoja', home: 'Etusivu', support: 'Tuki', footerNav: 'Alatunniste',
      version: 'Versio 1.2.822',
      pageTitle: 'Raksa | Rakennuslaskuri',
      pageDescription: 'Raksa on Android-sovellus suorakulmaisen kolmion laskentaan ja rakennustyön mitoitukseen. Laskimet toimivat ilman verkkoyhteyttä ja käyttäjätiliä.',
      ogDescription: 'Kolmiolaskin ja mitoitus rakennustyön käytännön tilanteisiin. Laskimet toimivat ilman verkkoyhteyttä.',
      ogImageAlt: 'Raksa-rakennuslaskurin logo ja mitoitusnäkymä',
      eyebrow: 'Android-sovellus rakentamiseen',
      title: 'Mitat ja jaot selkeästi työmaalla',
      lead: 'Raksa ratkaisee suorakulmaisen kolmion ja laskee mittapisteet toistuville rakenteille, kuten tolppajaolle ja rimoitukselle. Laskimet toimivat ilman verkkoyhteyttä ja käyttäjätiliä.',
      explore: 'Katso työkalut',
      status: 'Android 8.0 tai uudempi',
      playComing: 'Tulossa Google Playhin', playGet: 'Lataa Google Playsta',
      toolsEyebrow: 'Työkalut', toolsTitle: 'Kolmiolaskin ja mitoitus',
      triangleTitle: 'Kolmiolaskin',
      triangleText: 'Anna kaksi arvoa, joista ainakin toinen on sivu. Raksa laskee muut sivut, kulmat, pinta-alan, piirin ja kaltevuuden jo kirjoittaessasi.',
      tri1: 'Esimerkiksi ristimitat, kattokaltevuus ja vinotuen pituus',
      tri2: 'Kulmasäädin pysähtyy yleisiin kaltevuuksiin, kuten 1:2 ja 30°',
      tri3: 'Kolmion kuva näyttää mitat ja kulmat yhdellä silmäyksellä',
      triangleAlt: 'Raksan kolmiolaskin: kateetti 3600 mm ja kulma 30°, tuloksena kolmion kuva, pinta-ala, piiri ja kaltevuus',
      dimTitle: 'Mitoitus',
      dimText: 'Laske mittapisteet ja materiaalien paikat aloituksen, jaon, mitan tai pisteiden määrän perusteella. Tulos päivittyy heti, kun muutat arvoja.',
      dim1: 'Kolme laskentatapaa: tunnettu pisteiden määrä, kiinteä jako rajattuun mittaan tai jaon sovitus annettuun pituuteen',
      dim2: 'Materiaalin vahvuus, keskitys ja lukittava kokonaismitta',
      dim3: 'Mittajana, jota voi zoomata koko näytössä, ja mittapisteiden lista',
      dimensionsAlt: 'Raksan mitoitus: Mitoitettu-tila, mitta 3000 mm, jako 600 mm ja materiaali 48 mm, tuloksena mittajana ja mittapisteet',
      featuresEyebrow: 'Ominaisuudet', featuresTitle: 'Tehty käytännön työhön',
      f1Title: 'Laskimet ilman verkkoyhteyttä',
      f1Text: 'Laskenta tapahtuu puhelimessa, eikä käyttäjätiliä tarvita. Verkkoyhteys tarvitaan vain, kun otat käyttöön automaattisesti käännetyn kielen.',
      f2Title: 'Kopioi ja jaa',
      f2Text: 'Tulosarvon napautus kopioi luvun. Jakopainike lähettää tulokset kuvana Androidin jakovalikon kautta.',
      f3Title: 'Tallentuu automaattisesti',
      f3Text: 'Arvot ja asetukset ovat tallessa, kun avaat sovelluksen uudelleen. Tyhjennyksen voi perua.',
      f4Title: 'Omat asetukset',
      f4Text: 'Yksiköt millimetreistä kilometreihin, 0–3 desimaalia sekä järjestelmän, vaalea tai tumma teema.',
      f5Title: 'Kielet',
      f5Text: 'Sovellus on suomeksi ja englanniksi. Lisäksi yli 50 kieltä on saatavilla automaattisena käännöksenä, joka voi olla epätarkka.',
      development: 'Kehitys', grow: 'Raksa kasvaa harkitusti',
      growText: 'Raksaan on tulossa lisää työkaluja. Ne näkyvät jo sovelluksen etusivulla merkinnällä Tulossa.',
      next1: 'Pinta-alat ja tilavuudet', next2: 'Materiaalimenekit', next3: 'Lisää rakentamisen laskureita ja käytännön työkaluja',
      notice: 'Raksa on laskennan ja mitoituksen apuväline. Tarkista syötetyt arvot, tulokset ja kriittiset mitat ennen työn toteuttamista.',
      privacyPageTitle: 'Raksa | Tietosuojaseloste',
      privacyDescription: 'Raksa-Android-sovelluksen ja raksa-verkkosivun tietosuojaseloste.',
      privacyEyebrow: 'Raksa · Rakennuslaskuri', privacyTitle: 'Tietosuojaseloste',
      privacyLead: 'Raksa-Android-sovelluksen ja tämän verkkosivun tietojen käsittely',
      metaPackage: 'Pakettitunnus', metaVersion: 'Sovellusversio', metaUpdated: 'Päivitetty',
      supportPageTitle: 'Raksa | Tuki ja palaute',
      supportDescription: 'Raksa-sovelluksen tuki: ongelmaraportin sisältö, yhteystiedot, sovelluksen tietojen tyhjentäminen ja käyttöohjeita.',
      supportEyebrow: 'Raksa · Rakennuslaskuri', supportTitle: 'Tuki ja palaute',
      supportLead: 'Näin saat apua Raksan käyttöön ja ilmoitat ongelmasta tai palautteesta.'
    },
    en: {
      skip: 'Skip to content', subtitle: 'Construction calculator', settings: 'Settings', language: 'Language', theme: 'Theme',
      system: 'System', light: 'Light', dark: 'Dark', privacy: 'Privacy', home: 'Home', support: 'Support', footerNav: 'Footer',
      version: 'Version 1.2.822',
      pageTitle: 'Raksa | Construction calculator',
      pageDescription: 'Raksa is an Android app for right-triangle calculations and construction dimensioning. The calculators work offline and without a user account.',
      ogDescription: 'Triangle calculator and dimensioning for practical construction work. The calculators work offline.',
      ogImageAlt: 'Raksa construction calculator logo and dimensioning screen',
      eyebrow: 'Android app for construction',
      title: 'Clear measurements and layouts on site',
      lead: 'Raksa solves right triangles and calculates measurement points for repeating structures such as stud and batten spacing. The calculators work offline and without a user account.',
      explore: 'View the tools',
      status: 'Android 8.0 or later',
      playComing: 'Coming to Google Play', playGet: 'Get it on Google Play',
      toolsEyebrow: 'Tools', toolsTitle: 'Triangle calculator and dimensioning',
      triangleTitle: 'Triangle calculator',
      triangleText: 'Enter two values, at least one of them a side. Raksa calculates the remaining sides, angles, area, perimeter and slope ratio as you type.',
      tri1: 'For example diagonal checks, roof pitch and brace length',
      tri2: 'The angle slider snaps to common slopes such as 1:2 and 30°',
      tri3: 'A triangle diagram shows the dimensions and angles at a glance',
      triangleAlt: 'Raksa triangle calculator: leg 3600 mm and angle 30°, with the triangle diagram, area, perimeter and slope ratio',
      dimTitle: 'Dimensioning',
      dimText: 'Calculate measurement points and material positions from a start, spacing, dimension or number of points. The result updates as soon as you change a value.',
      dim1: 'Three ways to calculate: a known number of points, a fixed spacing within a set length, or spacing fitted to a given length',
      dim2: 'Material thickness, centering and a lockable overall dimension',
      dim3: 'A measurement line you can zoom in full screen, and a list of points',
      dimensionsAlt: 'Raksa dimensioning: Dimensioned mode, dimension 3000 mm, spacing 600 mm and material 48 mm, with the measurement line and points',
      featuresEyebrow: 'Features', featuresTitle: 'Built for practical work',
      f1Title: 'Calculators work offline',
      f1Text: 'Calculations run on your phone, and no user account is needed. A network connection is needed only when you set up an automatically translated language.',
      f2Title: 'Copy and share',
      f2Text: 'Tap a result value to copy the number. The share button sends the results as an image through the Android share sheet.',
      f3Title: 'Saved automatically',
      f3Text: 'Values and settings are kept when you reopen the app. Clearing can be undone.',
      f4Title: 'Your settings',
      f4Text: 'Units from millimetres to kilometres, 0–3 decimal places, and a system, light or dark theme.',
      f5Title: 'Languages',
      f5Text: 'The app is in Finnish and English. More than 50 other languages are available as automatic translations, which may be inaccurate.',
      development: 'Development', grow: 'Raksa grows with purpose',
      growText: 'More tools are on the way. They already appear on the app\'s home screen as Coming soon.',
      next1: 'Areas and volumes', next2: 'Material usage', next3: 'More construction calculators and practical tools',
      notice: 'Raksa is a calculation and dimensioning aid. Check entered values, results and critical dimensions before carrying out the work.',
      privacyPageTitle: 'Raksa | Privacy Policy',
      privacyDescription: 'Privacy Policy for the Raksa Android app and this website.',
      privacyEyebrow: 'Raksa · Construction calculator', privacyTitle: 'Privacy Policy',
      privacyLead: 'Data handling in the Raksa Android app and on this website',
      metaPackage: 'Package name', metaVersion: 'App version', metaUpdated: 'Last updated',
      supportPageTitle: 'Raksa | Support and feedback',
      supportDescription: 'Support for the Raksa app: what to include in a problem report, contact details, clearing the app data and usage guidance.',
      supportEyebrow: 'Raksa · Construction calculator', supportTitle: 'Support and feedback',
      supportLead: 'How to get help with Raksa and report a problem or send feedback.'
    }
  };

  const root = document.documentElement;
  const darkQuery = matchMedia('(prefers-color-scheme: dark)');
  /* Each page declares itself with <body data-page="…">; the title key follows from it. */
  const PAGE_TITLE_KEYS = { home: 'pageTitle', privacy: 'privacyPageTitle', support: 'supportPageTitle' };
  const titleKey = PAGE_TITLE_KEYS[document.body.dataset.page] || PAGE_TITLE_KEYS.home;
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
      img.src = `assets/logo-${theme === 'dark' ? 'graphite' : 'silver'}.png`;
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
    document.querySelectorAll('time[datetime]').forEach((el) => {
      el.textContent = new Intl.DateTimeFormat(root.lang === 'en' ? 'en-GB' : 'fi-FI', { dateStyle: 'long' })
        .format(new Date(`${el.dateTime}T12:00:00`));
    });
    if (copy[titleKey]) document.title = copy[titleKey];
    if (save) store.set('raksa-language', root.lang);
    refreshImages();
  }

  /* Contact details are kept out of the HTML source to reduce scraping; they are decoded only in the browser. */
  const decode = (value) => [...atob(value)].reverse().join('');
  const CONTACT = { name: 'aWhvTCBvdHNpUg==', email: 'bW9jLmxpYW1nQG9sYWtpci5vdHNpUg==' };
  document.querySelectorAll('[data-contact] .reveal').forEach((btn) => {
    btn.addEventListener('click', () => {
      const address = decode(CONTACT.email);
      const holder = btn.parentElement;
      if (!holder) return;
      const link = document.createElement('a');
      link.href = `mailto:${address}`;
      link.textContent = address;
      holder.replaceChildren(document.createTextNode(`${decode(CONTACT.name)} · `), link);
      link.focus();
    });
  });

  if (PLAY_STORE_URL) {
    document.querySelectorAll('[data-play-store]').forEach((pending) => {
      const link = document.createElement('a');
      link.className = 'button primary play-link';
      link.href = PLAY_STORE_URL;
      link.rel = 'noopener';
      const label = pending.querySelector('[data-i18n]');
      if (label) label.dataset.i18n = 'playGet';
      link.append(...pending.childNodes);
      pending.replaceWith(link);
    });
  }

  const themeSelect = document.getElementById('theme');
  const languageSelect = document.getElementById('language');
  const button = document.getElementById('settingsButton');
  const panel = document.getElementById('settingsPanel');

  applyTheme(['light', 'dark'].includes(root.dataset.theme) ? root.dataset.theme : 'system', false);
  applyLanguage(root.lang, false);
  if (themeSelect) {
    themeSelect.value = root.dataset.theme;
    themeSelect.addEventListener('change', (e) => applyTheme(e.target.value, true));
  }
  if (languageSelect) {
    languageSelect.value = root.lang;
    languageSelect.addEventListener('change', (e) => applyLanguage(e.target.value, true));
  }
  darkQuery.addEventListener?.('change', () => { if (root.dataset.theme === 'system') applyTheme('system', false); });

  if (button && panel) {
    const setPanel = (open, returnFocus) => {
      panel.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      if (!open && returnFocus) button.focus();
    };
    button.addEventListener('click', () => setPanel(panel.hidden, false));
    document.addEventListener('click', (e) => { if (!panel.hidden && !e.target.closest('.settings')) setPanel(false, false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) setPanel(false, true); });
    addEventListener('pagehide', () => setPanel(false, false));
  }
})();
