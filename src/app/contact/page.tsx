import React from "react";
import ContactPage from "~/components/ContactPage";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "CONTACT.PAGE.TITLE",
  descriptionCode: "CONTACT.PAGE.DESCRIPTION",
  path: "/contact",
  locale: "fr"
});

export default function Page() {
  return <ContactPage locale="fr" />;
}
