import type { MetadataRoute } from "next";
import { PAGE_NAMES } from "~/data/PagesData";
import { LOCALES, siteUrl } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { getLocalePath } from "~/utils/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...PAGE_NAMES.map((page) => `/${page}`), ...getAllPosts().map((post) => post.path)];
  return LOCALES.flatMap((locale) =>
    paths.map((path) => ({ url: `${siteUrl}${getLocalePath(path, locale)}`, changeFrequency: "monthly" as const }))
  );
}
