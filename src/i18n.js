import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './locales/fr/translationFR.json';
import translationIT from './locales/it/translationIT.json';
import translationDE from './locales/de/translationDE.json';

// Translations
const resources = {
  fr: {
    translation: translationFR
  },
  it: {
    translation: translationIT
  },
  de: {
    translation: translationDE
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;