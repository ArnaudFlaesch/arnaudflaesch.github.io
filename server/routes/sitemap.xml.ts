import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";
import { siteUrl } from "~/data/SiteData";

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: siteUrl
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly"
    });
  }

  const blogPosts = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({ _partial: false })
    .find()
    .filter((doc) => doc?._path?.includes("/blog"));

  for (const post of blogPosts) {
    sitemap.write({
      url: post._path,
      changefreq: "monthly"
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
