import { NextResponse } from "next/server";
import RSS from "rss";
import { defaultImageUrl, rssFeedUrl, siteUrl, title } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";

export const dynamic = "force-static";

export async function GET() {
  const feed = new RSS({
    title: title,
    description:
      "Mon blog sur lequel vous trouverez des articles aussi bien sur des sujets techniques que sur d'autres sujets.",
    site_url: siteUrl,
    feed_url: `${rssFeedUrl}`,
    image_url: `${siteUrl}${defaultImageUrl}`
  });

  const blogPosts = getAllPosts();

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title || "-",
      url: `${siteUrl}${doc.path}`,
      date: doc.date,
      description: doc.description
    });
  }

  const feedString = feed.xml({ indent: true });

  return new NextResponse(feedString, {
    status: 200,
    headers: {
      "Content-Type": "text/xml"
    }
  });
}
