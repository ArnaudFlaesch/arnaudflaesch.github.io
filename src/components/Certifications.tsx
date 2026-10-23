import Tooltip from "@mui/material/Tooltip";
import DetailBlock from "~/components/DetailBlock";
import { certificationsData } from "~/data/CertificationData";
import type { Locale } from "~/data/SiteData";
import { formatDate } from "~/utils/date";
import { t } from "~/utils/i18n";

const DEFAULT_BADGE_SIZE = 115;

export default function Certifications({ locale }: { locale: Locale }) {
  return (
    <div id="certifications-list">
      <h2>Certifications</h2>

      {certificationsData.map(({ title, certifications, imageSize = DEFAULT_BADGE_SIZE, imageHeight = imageSize }) => (
        <DetailBlock
          key={title[0].label}
          title={title.map(({ label, date }) => (
            <h4 key={label}>
              {t(label, locale)} - {formatDate(date, locale)}
            </h4>
          ))}
        >
          <div className="certifications-logos">
            {certifications.map(({ name, badgeLink, imagePath }) => (
              <a key={name} href={badgeLink} target="_blank" rel="noopener noreferrer">
                <Tooltip title={t(name, locale)}>
                  <img src={imagePath} width={imageSize} height={imageHeight} alt={t(name, locale)} />
                </Tooltip>
              </a>
            ))}
          </div>
        </DetailBlock>
      ))}
    </div>
  );
}
