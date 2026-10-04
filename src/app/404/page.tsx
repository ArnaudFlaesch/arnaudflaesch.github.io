import React from "react";
import NotFoundPage from "~/components/NotFoundPage";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "404.NOT.FOUND",
  descriptionCode: "PAGE.NOT.FOUND.MESSAGE",
  path: "/404",
  locale: "fr"
});

export default function Page() {
  return <NotFoundPage locale="fr" />;
}
