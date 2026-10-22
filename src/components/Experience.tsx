import ArrowForward from "@mui/icons-material/ArrowForward";
import DetailBlock from "~/components/DetailBlock";
import type { Locale } from "~/data/SiteData";
import type { IExperience } from "~/model/IExperience";
import { formatDate } from "~/utils/date";
import { t } from "~/utils/i18n";

export default function Experience({ experience, locale }: { experience: IExperience; locale: Locale }) {
  const { name, logoPath, website, location, dateDebut, dateFin } = experience;
  const title = (locale === "en" && experience.title_en) || experience.title_fr;
  const descriptions = (locale === "en" && experience.description_en) || experience.description_fr;
  const logo = logoPath ? <img src={logoPath} alt={name} /> : <h3>{name}</h3>;

  return (
    <DetailBlock
      title={
        <div className="job-content">
          <div className="job-period">
            {formatDate(dateDebut, locale)} <ArrowForward />
            <span>{dateFin ? formatDate(dateFin, locale) : t("TODAY", locale)}</span>
          </div>
          <div className="job-name">
            {website ? (
              <a href={website} target="_blank" rel="noopener noreferrer">
                {logo}
              </a>
            ) : (
              logo
            )}
          </div>
          <div className="job-location">{location}</div>
        </div>
      }
    >
      <div className="job-details-content">
        <h3>{title}</h3>
        <div className="job-description">
          {descriptions.map((description, index) => (
            <div key={index}>
              {description}
              <br />
            </div>
          ))}
        </div>
      </div>
    </DetailBlock>
  );
}
