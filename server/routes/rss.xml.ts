import { defaultImageUrl, rssFeedUrl, siteUrl, title } from "~/data/SiteData";
import RSS from "rss";

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: title,
    description:
      "Mon blog sur lequel vous trouverez des articles aussi bien sur des sujets techniques que sur d'autres sujets.",
    site_url: siteUrl,
    feed_url: `${rssFeedUrl}`,
    image_url: `${siteUrl}${defaultImageUrl}`
  });
  const blogPosts = await queryCollection(event, "blog").order("date", "DESC").all();

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? "-",
      url: `${siteUrl}${doc.path}`,
      date: doc.date,
      description: doc.description
    });
  }
  const feedString = feed.xml({ indent: true });
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
