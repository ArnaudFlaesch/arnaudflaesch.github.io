import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPost {
  slug: string;
  path: string;
  title: string;
  date: string;
  description: string;
  image: string;
  imageSubtitle?: string;
  tags?: string[];
  content: string;
  html: string;
}

const contentDir = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const entries = fs.readdirSync(contentDir, { withFileTypes: true });
  const posts: BlogPost[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullDir = path.join(contentDir, entry.name);
      const indexPath = path.join(fullDir, "index.md");
      if (fs.existsSync(indexPath)) {
        const fileContent = fs.readFileSync(indexPath, "utf-8");
        const { data, content } = matter(fileContent);
        const html = marked.parse(content) as string;
        const slug = entry.name;
        posts.push({
          slug,
          path: `/blog/${slug}/`,
          title: data.title ?? "",
          date: data.date ?? "",
          description: data.description ?? "",
          image: data.image ?? "",
          imageSubtitle: data.imageSubtitle,
          tags: data.tags ?? [],
          content,
          html
        });
      }
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { post: BlogPost | null; previous: BlogPost | null; next: BlogPost | null } {
  const posts = getAllPosts();
  const cleanSlug = slug.replace(/\/+$/, "").replace(/^\/+/, "");
  const index = posts.findIndex((p) => p.slug === cleanSlug);

  if (index === -1) {
    return { post: null, previous: null, next: null };
  }

  const post = posts[index];
  // previous and next post according to chronology (posts sorted DESC: previous post is newer/older)
  // In Nuxt queryCollectionItemSurroundings ordered DESC:
  // surround[0] = previous (newer in DESC order), surround[1] = next (older in DESC order)
  const previous = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  return { post, previous, next };
}
