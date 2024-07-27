import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationFR, indexFR, cvFR, projetsFR, blogFR, contactFR } from '../locales/fr';
import { translationEN, indexEN, cvEN, projetsEN, blogEN, contactEN } from '../locales/en';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    common: translationEN,
    index: indexEN,
    cv: cvEN,
    projets: projetsEN,
    blog: blogEN,
    contact: contactEN
  },
  fr: {
    common: translationFR,
    index: indexFR,
    cv: cvFR,
    projets: projetsFR,
    blog: blogFR,
    contact: contactFR
  }
};

i18n.use(initReactI18next);
i18n.use(LanguageDetector);
i18n.init({
  resources,
  defaultLng: 'fr',
  fallbackLng: 'en',
  defaultNS: 'common',
  fallbackNS: 'common',
  supportedLngs: ['fr', 'en'],
  interpolation: {
    escapeValue: false
  },
  keySeparator: false,
  nsSeparator: false,
  detection: {
    order: ['path'],
    lookupFromPathIndex: 0,
    caches: ['localStorage']
  }
});

export default i18n;
