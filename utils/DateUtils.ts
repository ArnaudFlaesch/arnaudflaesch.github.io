import type { Locale } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { DEFAULT_LOCALE } from "~/data/SiteData";

export function getLocaleFromLanguage(language: string): Locale {
  return language === DEFAULT_LOCALE ? fr : enUS;
}
