import { serverQueryContent } from '#content/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { siteUrl } from '~/data/SiteData';

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: siteUrl
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
