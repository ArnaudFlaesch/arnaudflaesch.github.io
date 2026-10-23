import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
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
  tags: string[];
  html: string;
}

function readPost(file: string): BlogPost {
  const slug = path.basename(path.dirname(file));
  const { data, content } = matter.read(file);
  return {
    slug,
    path: `/blog/${slug}/`,
    title: data.title ?? "",
    date: data.date ?? "",
    description: data.description ?? "",
    image: data.image ?? "",
    imageSubtitle: data.imageSubtitle,
    tags: data.tags ?? [],
    html: marked.parse(content, { async: false })
  };
}

/** All posts, newest first. Memoized per render pass. */
export const getAllPosts = cache((): BlogPost[] =>
  fs
    .globSync("content/blog/*/index.md")
    .map(readPost)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
);

/** The post with its newer (previous) and older (next) neighbours. */
export function getPostBySlug(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return undefined;
  }
  return { post: posts[index], previous: posts[index - 1], next: posts[index + 1] };
}
