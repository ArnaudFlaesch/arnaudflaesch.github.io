import { defaultImageUrl, rssFeedUrl, siteUrl, title } from "../../../PortfolioV2/data/SiteData";
import { serverQueryContent } from "#content/server";
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
  const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find();

  const blogPosts = docs.filter((doc) => doc?._path?.includes("/blog"));
  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? "-",
      url: `${siteUrl}${doc._path}`,
      date: doc.date,
      description: doc.description
    });
  }
  const feedString = feed.xml({ indent: true });
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
