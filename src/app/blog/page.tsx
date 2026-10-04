import React from "react";
import BlogPage from "~/components/BlogPage/BlogPage";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "BLOG.PAGE.TITLE",
  descriptionCode: "BLOG.PAGE.DESCRIPTION",
  path: "/blog",
  locale: "fr"
});

export default function Page() {
  return <BlogPage locale="fr" />;
}
