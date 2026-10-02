import { SitemapStream, streamToPromise } from "sitemap";
import { siteUrl } from "~/data/SiteData";

export default defineEventHandler(async (event) => {
  const docs = await queryCollection(event, "blog").all();
  const sitemap = new SitemapStream({
    hostname: siteUrl
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc.path,
      changefreq: "monthly"
    });
  }

  sitemap.end();

  return streamToPromise(sitemap);
});
