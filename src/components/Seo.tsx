"use client";

import { useLayoutEffect, useEffect } from "react";
import { defaultImageUrl, fullName, jobName, siteUrl, DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";
import type { SeoOptions } from "~/utils/seo";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Seo({
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
}: SeoOptions) {
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

  useIsomorphicLayoutEffect(() => {
    document.title = pageTitle;

    const setMeta = (attr: "name" | "property", key: string, content: string | undefined) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:description", description);
    setMeta("name", "author", fullName);
    setMeta("name", "creator", fullName);
    setMeta("property", "og:site_name", "arnaudflaesch.github.io");
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:image", ogImageUrl);
    setMeta("property", "og:locale", locale);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", type);

    if (type === "article") {
      setMeta("property", "article:author", fullName);
      if (publishedTime) setMeta("property", "article:published_time", publishedTime);
      if (modifiedTime) setMeta("property", "article:modified_time", modifiedTime);
    }
  }, [pageTitle, description, fullUrl, ogImageUrl, locale, type, publishedTime, modifiedTime]);

  return null;
}
