import type { Metadata } from "next";
import { defaultImageUrl, fullName, jobName, siteUrl, DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export interface SeoOptions {
  titleCode?: string;
  customTitle?: string;
  descriptionCode?: string;
  customDescription?: string;
  path: string;
  locale?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata({
  titleCode,
  customTitle,
  descriptionCode,
  customDescription,
  path,
  locale = DEFAULT_LOCALE,
  type = "website",
  image,
  publishedTime,
  modifiedTime
}: SeoOptions): Metadata {
  const defaultTitle = `${fullName} - ${t(jobName, locale)}`;
  let pageTitle = defaultTitle;

  if (customTitle) {
    pageTitle = `${customTitle} | ${defaultTitle}`;
  } else if (titleCode && titleCode !== "INDEX.PAGE.TITLE") {
    pageTitle = `${t(titleCode, locale)} | ${defaultTitle}`;
  }

  const description =
    customDescription || (descriptionCode ? t(descriptionCode, locale) : "");
  const fullUrl = `${siteUrl}${path}`;
  const ogImageUrl = image
    ? (image.startsWith("http") ? image : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`)
    : `${siteUrl}${defaultImageUrl}`;

  const metadata: Metadata = {
    title: pageTitle,
    description: description,
    authors: [{ name: fullName }],
    creator: fullName,
    openGraph: {
      title: pageTitle,
      description: description,
      url: fullUrl,
      siteName: "arnaudflaesch.github.io",
      locale: locale,
      ...(type === "article"
        ? {
            type: "article",
            authors: [fullName],
            publishedTime: publishedTime,
            modifiedTime: modifiedTime
          }
        : {
            type: "website"
          }),
      images: [
        {
          url: ogImageUrl
        }
      ]
    },
    other: {
      author: fullName,
      "og:site_name": "arnaudflaesch.github.io",
      "og:image": ogImageUrl
    }
  };

  return metadata;
}
