import { translationFR, indexFR, cvFR, projetsFR, blogFR, contactFR } from './locales/fr';
import { translationEN, indexEN, cvEN, projetsEN, blogEN, contactEN } from './locales/en';
import { DEFAULT_LOCALE } from './data/SiteData';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: DEFAULT_LOCALE,
  messages: {
    fr: {
      ...translationFR,
      ...indexFR,
      ...cvFR,
      ...projetsFR,
      ...blogFR,
      ...contactFR
    },
    en: {
      ...translationEN,
      ...indexEN,
      ...cvEN,
      ...projetsEN,
      ...blogEN,
      ...contactEN
    }
  }
}));
