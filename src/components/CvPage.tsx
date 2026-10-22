import Certifications from "~/components/Certifications";
import DetailBlock from "~/components/DetailBlock";
import ExpandableList from "~/components/ExpandableList";
import Experience from "~/components/Experience";
import TechIcon from "~/components/TechIcon";
import { formationData } from "~/data/EducationData";
import { hobbiesList } from "~/data/HobbiesData";
import { DEFAULT_LOCALE, fullName, type Locale } from "~/data/SiteData";
import { skills } from "~/data/SkillsData";
import { jobData } from "~/data/WorkData";
import { t } from "~/utils/i18n";

const DEFAULT_NUMBER_OF_JOBS_TO_SHOW = 3;

export default function CvPage({ locale }: { locale: Locale }) {
  return (
    <div id="cv-page">
      <div id="job-list">
        <div id="jobs-header">
          <h2>{t("WORK.EXPERIENCE", locale)}</h2>
          <a
            id="cv-download-button"
            href={locale === DEFAULT_LOCALE ? "/CV.pdf" : "/Resume.pdf"}
            download={`${t("RESUME", locale)} ${fullName}.pdf`}
          >
            {t("DOWNLOAD.RESUME", locale)}
          </a>
        </div>
        <ExpandableList
          items={jobData.map((job) => (
            <Experience key={job.name} experience={job} locale={locale} />
          ))}
          initialCount={DEFAULT_NUMBER_OF_JOBS_TO_SHOW}
          showMoreLabel={t("SEE.MORE.EXPERIENCES", locale)}
          showLessLabel={t("SEE.LESS.EXPERIENCES", locale)}
        />
      </div>

      <Certifications locale={locale} />

      <div id="formation-list">
        <h2>{t("EDUCATION", locale)}</h2>
        {formationData.map((formation) => (
          <Experience key={formation.title_fr} experience={formation} locale={locale} />
        ))}
      </div>

      <div id="skills-list">
        <h2>{t("LANGUAGES.TOOLS", locale)}</h2>
        {skills.map(({ label, skills }) => (
          <DetailBlock key={label} title={<h3>{t(label, locale)}</h3>}>
            {skills.map((skill) => (
              <TechIcon key={skill.name} category={label} skill={skill} />
            ))}
          </DetailBlock>
        ))}
      </div>

      <div id="hobbies-list">
        <h2>{t("HOBBIES", locale)}</h2>
        {hobbiesList.map((hobby) => (
          <DetailBlock key={hobby.fr.title} title={<h3>{hobby[locale].title}</h3>}>
            {hobby[locale].description}
          </DetailBlock>
        ))}
      </div>
    </div>
  );
}
