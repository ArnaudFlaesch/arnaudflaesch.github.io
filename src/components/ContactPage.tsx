import React from "react";
import ContactForm from "~/components/ContactForm/ContactForm";
import Seo from "~/components/Seo";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export default function ContactPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  return (
    <>
      <Seo
        titleCode="CONTACT.PAGE.TITLE"
        descriptionCode="CONTACT.PAGE.DESCRIPTION"
        path={locale === "en" ? "/en/contact" : "/contact"}
        locale={locale}
      />
      <h1 id="page-header">{t("CONTACT.PAGE.TITLE", locale)}</h1>
      <div id="page-description">{t("CONTACT.PAGE.DESCRIPTION", locale)}</div>
      <ContactForm locale={locale} />
    </>
  );
}
