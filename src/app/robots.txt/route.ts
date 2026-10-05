import { NextResponse } from "next/server";

export const dynamic = "force-static";

const robotsTxtContent =
  "# START nuxt-robots (indexable)\nUser-agent: *\nAllow: /\nAllow: /en/\n\nSitemap: https://arnaudflaesch.github.io/sitemap_index.xml\n# END nuxt-robots";

export async function GET() {
  return new NextResponse(robotsTxtContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
