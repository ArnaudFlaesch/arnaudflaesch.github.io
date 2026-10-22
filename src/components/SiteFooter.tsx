import type { Locale } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export default function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer>
      <span>
        © 2026, {t("DEVELOPED.WITH", locale)} <a href="https://nextjs.org/">Next.js</a>. {t("ICONS.BY", locale)} :{" "}
        <a href="https://icons8.com/">Icons8</a>.
      </span>
    </footer>
  );
}
