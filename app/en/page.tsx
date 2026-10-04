import React from "react";
import HomePage from "~/components/HomePage";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "INDEX.PAGE.TITLE",
  descriptionCode: "INDEX.PAGE.DESCRIPTION",
  path: "/en",
  locale: "en"
});

export default function Page() {
  return <HomePage locale="en" />;
}
