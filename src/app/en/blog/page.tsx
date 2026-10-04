import React from "react";
import BlogPage from "~/components/BlogPage/BlogPage";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "BLOG.PAGE.TITLE",
  descriptionCode: "BLOG.PAGE.DESCRIPTION",
  path: "/en/blog",
  locale: "en"
});

export default function Page() {
  return <BlogPage locale="en" />;
}
