import { siteUrl } from "~/data/SiteData";

export const dynamic = "force-static";

const robotsTxtContent = `# START nuxt-robots (indexable)
User-agent: *
Allow: /
Allow: /en/

Sitemap: ${siteUrl}/sitemap_index.xml
# END nuxt-robots`;

export function GET() {
  return new Response(robotsTxtContent, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
