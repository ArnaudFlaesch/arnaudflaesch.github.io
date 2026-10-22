import type { Locale } from "~/data/SiteData";

const INTL_LOCALES: Record<Locale, string> = { fr: "fr-FR", en: "en-GB" };

export const MONTH_YEAR: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" };
export const FULL_DATE: Intl.DateTimeFormatOptions = { day: "2-digit", month: "long", year: "numeric" };

export function formatDate(date: Date | string, locale: Locale, options = MONTH_YEAR): string {
  return new Date(date).toLocaleDateString(INTL_LOCALES[locale], options);
}
