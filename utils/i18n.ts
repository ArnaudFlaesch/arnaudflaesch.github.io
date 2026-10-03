import { translationFR, indexFR, projetsFR, cvFR, blogFR, contactFR } from "~/locales/fr";
import { translationEN, indexEN, projetsEN, cvEN, blogEN, contactEN } from "~/locales/en";
import { DEFAULT_LOCALE } from "~/data/SiteData";

export const translations: Record<string, Record<string, string>> = {
  fr: {
    ...translationFR,
    ...indexFR,
    ...projetsFR,
    ...cvFR,
    ...blogFR,
    ...contactFR
  },
  en: {
    ...translationEN,
    ...indexEN,
    ...projetsEN,
    ...cvEN,
    ...blogEN,
    ...contactEN
  }
};

export function t(key: string, locale: string = DEFAULT_LOCALE): string {
  const dict = translations[locale] || translations[DEFAULT_LOCALE];
  return dict[key] ?? key;
}

export function getLocalePath(path: string, locale: string = DEFAULT_LOCALE): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  if (cleanPath === "/") {
    return "/en";
  }
  return `/en${cleanPath}`;
}
