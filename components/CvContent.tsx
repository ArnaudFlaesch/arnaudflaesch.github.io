"use client";

import React, { useState } from "react";
import Experience from "~/components/Experience";
import Certifications from "~/components/Certifications";
import Skills from "~/components/Skills";
import DetailBlock from "~/components/DetailBlock";
import { formationData } from "~/data/EducationData";
import { jobData } from "~/data/WorkData";
import { hobbiesList } from "~/data/HobbiesData";
import type { ITranslatableElement } from "~/model/ITranslatableElement";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

const DEFAULT_NUMBER_OF_JOBS_TO_SHOW = 3;

export default function CvContent({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const [jobIndexEnd, setJobIndexEnd] = useState<number | undefined>(DEFAULT_NUMBER_OF_JOBS_TO_SHOW);

  return (
    <div id="cv-page">
      <div id="job-list">
        <div id="jobs-header">
          <h2>{t("WORK.EXPERIENCE", locale)}</h2>
          <a
            id="cv-download-button"
            href={locale === DEFAULT_LOCALE ? "/CV.pdf" : "/Resume.pdf"}
            download={`${t("RESUME", locale)} Arnaud Flaesch.pdf`}
          >
            {t("DOWNLOAD.RESUME", locale)}
          </a>
        </div>
        {jobData.map((job, index) => {
          const isVisible = !jobIndexEnd || index < jobIndexEnd;
          return (
            <div key={job.name} style={{ display: isVisible ? "inherit" : "none" }}>
              <Experience experience={job} locale={locale} />
            </div>
          );
        })}

        {jobIndexEnd === DEFAULT_NUMBER_OF_JOBS_TO_SHOW ? (
          <button
            type="button"
            className="cv-button"
            onClick={() => setJobIndexEnd(undefined)}
          >
            {t("SEE.MORE.EXPERIENCES", locale)}
          </button>
        ) : (
          <button
            type="button"
            className="cv-button"
            onClick={() => setJobIndexEnd(DEFAULT_NUMBER_OF_JOBS_TO_SHOW)}
          >
            {t("SEE.LESS.EXPERIENCES", locale)}
          </button>
        )}
      </div>

      <Certifications locale={locale} />

      <div id="formation-list">
        <h2>{t("EDUCATION", locale)}</h2>
        {formationData.map((formation) => (
          <Experience key={formation.title_fr} experience={formation} locale={locale} />
        ))}
      </div>

      <h2 id="skills-title">{t("LANGUAGES.TOOLS", locale)}</h2>
      <Skills locale={locale} />

      <h2 id="hobbies-title">{t("HOBBIES", locale)}</h2>

      <div id="hobbies-list">
        {hobbiesList.map((hobby, index) => {
          const hobbyInfo = hobby[locale as keyof ITranslatableElement] || hobby.fr;
          return (
            <DetailBlock
              key={index}
              titleComponent={<h3>{hobbyInfo.title}</h3>}
              detailComponent={hobbyInfo.description}
            />
          );
        })}
      </div>
    </div>
  );
}
