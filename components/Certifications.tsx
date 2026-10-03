import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import DetailBlock from "~/components/DetailBlock";
import TooltipIcon from "~/components/TooltipIcon";
import { certificationsData } from "~/data/CertificationData";
import { getLocaleFromLanguage } from "~/utils/DateUtils";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

const DEFAULT_CERTIFICATION_BADGE_SIZE = 115;

export default function Certifications({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  return (
    <div id="certifications-list">
      <h2>Certifications</h2>

      {certificationsData.map((certificationGroup, index) => (
        <DetailBlock
          key={index}
          titleComponent={
            <>
              {certificationGroup.title.map((title) => (
                <h4 key={title.label}>
                  {title.isNameTranslatableCode ? t(title.label, locale) : title.label} -{" "}
                  {format(title.date, "MMMM yyyy", { locale: getLocaleFromLanguage(locale) })}
                </h4>
              ))}
            </>
          }
          detailComponent={
            <div className="certifications-logos">
              {certificationGroup.certifications.map((certification) => {
                const label = certification.isNameTranslatableCode
                  ? t(certification.name, locale)
                  : certification.name;
                const width = certificationGroup.imageSize ?? DEFAULT_CERTIFICATION_BADGE_SIZE;
                const height =
                  certificationGroup.imageHeight ??
                  certificationGroup.imageSize ??
                  DEFAULT_CERTIFICATION_BADGE_SIZE;

                return (
                  <Link
                    key={certification.name}
                    href={certification.badgeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipIcon
                      tooltip={label}
                      iconWidth={width}
                      iconHeight={height}
                      iconPath={certification.imagePath}
                      alt={label}
                    />
                  </Link>
                );
              })}
            </div>
          }
        />
      ))}
    </div>
  );
}
