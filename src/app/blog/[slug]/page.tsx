import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostPage from "~/components/BlogPostPage";
import { getAllPosts, getPostBySlug } from "~/utils/content";
import { buildMetadata } from "~/utils/seo";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { post } = getPostBySlug(slug);
  if (!post) {
    return {};
  }

  return buildMetadata({
    customTitle: post.title,
    customDescription: post.description,
    path: `/blog/${post.slug}/`,
    locale: "fr",
    type: "article",
    image: `/blog/${post.image}`,
    publishedTime: post.date,
    modifiedTime: post.date
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { post, previous, next } = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage doc={post} previous={previous} next={next} locale="fr" />;
}
