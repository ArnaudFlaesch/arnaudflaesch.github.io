import RSS from "rss";
import { DEFAULT_LOCALE, defaultImageUrl, rssFeedUrl, siteUrl, title } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { t } from "~/utils/i18n";

export const dynamic = "force-static";

export function GET() {
  const feed = new RSS({
    title,
    description: t("BLOG.PAGE.DESCRIPTION", DEFAULT_LOCALE),
    site_url: siteUrl,
    feed_url: rssFeedUrl,
    image_url: `${siteUrl}${defaultImageUrl}`
  });

  for (const post of getAllPosts()) {
    feed.item({
      title: post.title || "-",
      url: `${siteUrl}${post.path}`,
      date: post.date,
      description: post.description
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: { "Content-Type": "text/xml" }
  });
}
