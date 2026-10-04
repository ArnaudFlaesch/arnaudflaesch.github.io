import { NextResponse } from "next/server";
import { siteUrl } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";

export async function GET() {
  const posts = getAllPosts();
  const staticRoutes = [
    "",
    "/en",
    "/cv",
    "/en/cv",
    "/blog",
    "/en/blog",
    "/projets",
    "/en/projets",
    "/contact",
    "/en/contact"
  ];

  const postUrls = posts.flatMap((post) => [`${siteUrl}${post.path}`, `${siteUrl}/en${post.path}`]);

  const allUrls = [...staticRoutes.map((route) => `${siteUrl}${route}`), ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=UTF-8"
    }
  });
}
