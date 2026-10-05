import { NextResponse } from "next/server";
import { siteUrl } from "~/data/SiteData";

export const dynamic = "force-static";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=UTF-8"
    }
  });
}
