import type { Locale } from "~/data/SiteData";

export type ITranslatableElement = Record<Locale, { title: string; description: string }>;
