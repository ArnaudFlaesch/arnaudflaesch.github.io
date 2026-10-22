import type { Metadata } from "next";
import { defaultImageUrl, fullName, jobName, siteName, siteUrl, type Locale } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export interface SeoOptions {
  /** Page title, prepended to the site title. Omitted on the home page. */
  title?: string;
  description?: string;
  path: string;
  locale: Locale;
  /** Image path relative to the site root. */
  image?: string;
  article?: { publishedTime: string; modifiedTime: string };
}

export function buildMetadata({
  title,
  description = "",
  path,
  locale,
  image = defaultImageUrl,
  article
}: SeoOptions): Metadata {
  const siteTitle = `${fullName} - ${t(jobName, locale)}`;
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return {
    title: pageTitle,
    description,
    authors: [{ name: fullName }],
    creator: fullName,
    openGraph: {
      title: pageTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName,
      locale,
      images: [{ url: `${siteUrl}${image}` }],
      ...(article ? { type: "article", authors: [fullName], ...article } : { type: "website" })
    }
  };
}
