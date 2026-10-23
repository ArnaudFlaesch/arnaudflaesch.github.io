import { DEFAULT_LOCALE, LOCALES, type Locale } from "~/data/SiteData";
import en from "~/locales/en";
import fr from "~/locales/fr";

const translations: Record<Locale, Record<string, string>> = { fr, en };

// Unknown keys are returned as-is, so plain labels can go through t() too.
export function t(key: string, locale: Locale): string {
  return translations[locale][key] ?? key;
}

export function getLocalePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

function isPrefixedLocale(segment: string | undefined): segment is Locale {
  return segment !== DEFAULT_LOCALE && LOCALES.includes(segment as Locale);
}

/** Splits "/en/blog/foo/" into { locale: "en", segments: ["blog", "foo"] }. */
export function parsePath(pathname: string): { locale: Locale; segments: string[] } {
  const segments = pathname.split("/").filter(Boolean);
  if (isPrefixedLocale(segments[0])) {
    return { locale: segments[0], segments: segments.slice(1) };
  }
  return { locale: DEFAULT_LOCALE, segments };
}
