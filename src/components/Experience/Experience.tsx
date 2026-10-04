import React from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { fr } from "date-fns/locale/fr";
import DetailBlock from "~/components/DetailBlock/DetailBlock";
import ArrowForward from "@mui/icons-material/ArrowForward";
import type { IExperience } from "~/model/IExperience";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";
import "./Experience.scss";

interface ExperienceProps {
  experience: IExperience;
  locale?: string;
}

export default function Experience({ experience, locale = DEFAULT_LOCALE }: ExperienceProps) {
  const currentLocale = locale === "fr" ? fr : enUS;

  const title = (experience[`title_${locale}` as keyof IExperience] as string) || experience.title_fr;
  const descriptionList =
    (experience[`description_${locale}` as keyof IExperience] as string[]) || experience.description_fr;

  function formatDate(date: Date): string {
    return format(new Date(date), "LLLL yyyy", { locale: currentLocale });
  }

  return (
    <DetailBlock
      titleComponent={
        <div className="job-content">
          <div className="job-period">
            {formatDate(experience.dateDebut)} <ArrowForward />
            {experience.dateFin ? <span> {formatDate(experience.dateFin)}</span> : <span>{t("TODAY", locale)}</span>}
          </div>
          <div className="job-name">
            {experience.website ? (
              <a href={experience.website} target="_blank" rel="noopener noreferrer">
                {experience.logoPath ? (
                  <img src={experience.logoPath} alt={experience.name} />
                ) : (
                  <h3>{experience.name}</h3>
                )}
              </a>
            ) : (
              <span>
                {experience.logoPath ? (
                  <img src={experience.logoPath} alt={experience.name} />
                ) : (
                  <h3>{experience.name}</h3>
                )}
              </span>
            )}
          </div>
          <div className="job-location">{experience.location}</div>
        </div>
      }
      detailComponent={
        <div className="job-details-content">
          <h3>{title}</h3>
          <div className="job-description">
            {descriptionList?.map((description, index) => (
              <div key={index}>
                {description}
                <br />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
