import React from "react";
import TemplateBlogPost from "~/components/TemplateBlogPost/TemplateBlogPost";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import type { BlogPost } from "~/utils/content";

interface BlogPostPageProps {
  doc: BlogPost;
  previous?: BlogPost | null;
  next?: BlogPost | null;
  locale?: string;
}

export default function BlogPostPage({ doc, previous, next, locale = DEFAULT_LOCALE }: BlogPostPageProps) {
  return <TemplateBlogPost doc={doc} previous={previous} next={next} locale={locale} />;
}
