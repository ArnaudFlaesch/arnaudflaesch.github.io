import './page-styles/cv.scss';

import { Button, Tooltip } from '@mui/material';
import * as React from 'react';

import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { ReactElement } from 'react';
import Seo from '../components/Seo';
import Experience from '../components/cv/experience/Experience';
import Skills from '../components/cv/skills/Skills';
import DetailBlock from '../components/detailBlock/DetailBlock';
import formationData from '../data/FormationData';
import { hobbiesList } from '../data/HobbiesData';
import jobData from '../data/JobData';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { ITranslatableElement } from '../model/ITranslatableElement';
import { format } from 'date-fns';
import { getLocaleFromLanguage } from '../utils/DateUtils';

const title = 'Curriculum Vitae';
const description =
  "Le détail de mon parcours professionnel et scolaire, ainsi que mes compétences techniques et centres d'intérêts.";

export default function CV(props: Readonly<IPageProps>): ReactElement {
  const scrumOrgLink = props.data.site.siteMetadata.socials.scrumOrg;
  const githubActionsBadgeLink = 'https://www.credly.com/badges/bcc83162-8396-4e95-b73d-b89ad2658027';
  const githubAdvancedSecurityBadgeLink = 'https://www.credly.com/badges/a20775eb-8713-4013-b0fe-d5e359a543e8';

  const DEFAUL_NUMBER_OF_JOBS_TO_SHOW = 3;

  const { t } = useTranslation();
  const { language } = useI18next();

  const [jobIndexEnd, setJobIndexEnd] = React.useState<number | undefined>(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);

  function showMoreJobs() {
    setJobIndexEnd(undefined);
  }

  function showLessJobs() {
    setJobIndexEnd(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);
  }

  function createDetailBlock(title: string, detail: string): ReactElement {
    return <DetailBlock key={title} titleComponent={<h3>{title}</h3>} detailComponent={<div>{detail}</div>} />;
  }

  return (
    <Layout title={title} description={description} location={props.location}>
      <div id="cv-page">
        <div id="job-list">
          <div id="jobs-header">
            <h2>{t('WORKING.EXPERIENCE')}</h2>
            <Button
              id="cv-download-button"
              href="/CV.pdf"
              variant="contained"
              download={`${t("Curriculum Vitae")} Arnaud Flaesch.pdf`}
            >
              {t('DOWNLOAD.RESUME')}
            </Button>
          </div>
          {jobData.slice(0, jobIndexEnd).map((job) => (
            <Experience key={job.name} {...job} />
          ))}

          {jobIndexEnd === DEFAUL_NUMBER_OF_JOBS_TO_SHOW && (
            <Button onClick={showMoreJobs}>{t('SEE.MORE.EXPERIENCES')}</Button>
          )}
          {jobIndexEnd !== DEFAUL_NUMBER_OF_JOBS_TO_SHOW && (
            <Button onClick={showLessJobs}>{t('SEE.LESS.EXPERIENCES')}</Button>
          )}
        </div>

        <div id="certifications-list">
          <DetailBlock
            titleComponent={<h3>{'Certifications'}</h3>}
            detailComponent={
              <div id="certifications-detail-list">
                <div>
                  <h4>
                    Professional Scrum Master 1 {t('AND')} 2 -{' '}
                    {format(new Date(2023, 11, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(language) })}
                  </h4>
                  <div className="certifications-logos">
                    <Tooltip title="PSM 1">
                      <a href={scrumOrgLink}>
                        <StaticImage width={80} src="../images/certifications/psm1.png" alt={'PSM 1'} />
                      </a>
                    </Tooltip>
                    <Tooltip title="PSM 2">
                      <a href={scrumOrgLink}>
                        <StaticImage width={80} src="../images/certifications/psm2.png" alt={'PSM 2'} />
                      </a>
                    </Tooltip>
                  </div>
                </div>

                <hr />

                <div>
                  <h4>
                    GitHub Advanced Security {t('AND')} Actions -{' '}
                    {format(new Date(2024, 2, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(language) })}
                  </h4>
                  <div className="certifications-logos">
                    <Tooltip title="GitHub Actions">
                      <a href={githubActionsBadgeLink}>
                        <StaticImage
                          width={100}
                          src="../images/certifications/github-actions.png"
                          alt={'GitHub Actions'}
                        />
                      </a>
                    </Tooltip>
                    <Tooltip title="GitHub Advanced Security">
                      <a href={githubAdvancedSecurityBadgeLink}>
                        <StaticImage
                          width={100}
                          src="../images/certifications/github-advanced-security.png"
                          alt={'GitHub Advanced Security'}
                        />
                      </a>
                    </Tooltip>
                  </div>
                </div>

                <hr />

                <div>
                  <h4>
                    {t('RESPONSIBLE.DIGITAL.KNOWLEDGE.CERTIFICATE')} -{' '}
                    {format(new Date(2024, 3, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(language) })}
                  </h4>
                  <Tooltip title={t('RESPONSIBLE.DIGITAL.KNOWLEDGE.CERTIFICATE')}>
                    <img
                      src="/certifications/numerique-responsable.png"
                      alt={t('RESPONSIBLE.DIGITAL.KNOWLEDGE.CERTIFICATE') ?? ''}
                    />
                  </Tooltip>
                </div>
              </div>
            }
          />
        </div>

        <div id="formation-list">
          <h2>Formation</h2>
          {formationData.map((formation) => (
            <Experience key={formation.title_fr} {...formation} />
          ))}
        </div>

        <h2 id="skills-title">{t('LANGUAGES.TOOLS')}</h2>
        <Skills />

        <h2 id="hobbies-title">{t('HOBBIES')}</h2>

        <div id="hobbies-list">
          {hobbiesList.map((hobby) =>
            createDetailBlock(
              hobby[language as keyof ITranslatableElement].title,
              hobby[language as keyof ITranslatableElement].description
            )
          )}
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo location={'/cv'} title={title} description={description} />;

export const pageQuery = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        socials {
          scrumOrg
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
