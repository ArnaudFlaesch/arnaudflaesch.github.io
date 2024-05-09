import { Locale } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';
import { fr } from 'date-fns/locale/fr';

export function getLocaleFromLanguage(language: string): Locale {
  return language === 'fr' ? fr : enUS;
}
