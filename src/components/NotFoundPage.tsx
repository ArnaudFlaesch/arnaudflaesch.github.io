import PageIntro from "~/components/PageIntro";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";
import { buildMetadata } from "~/utils/seo";

const title = t("404.NOT.FOUND", DEFAULT_LOCALE);
const description = t("PAGE.NOT.FOUND.MESSAGE", DEFAULT_LOCALE);

export const notFoundMetadata = buildMetadata({ title, description, path: "/404", locale: DEFAULT_LOCALE });

export default function NotFoundPage() {
  return <PageIntro title={title} description={description} />;
}
