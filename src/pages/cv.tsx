import './page-styles/cv.scss';

import { Button, Tooltip } from '@mui/material';
import { format } from 'date-fns';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import { ReactElement } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Experience from '../components/cv/experience/Experience';
import Skills from '../components/cv/skills/Skills';
import DetailBlock from '../components/detailBlock/DetailBlock';
import formationData from '../data/EducationData';
import { hobbiesList } from '../data/HobbiesData';
import jobData from '../data/WorkData';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { ITranslatableElement } from '../model/ITranslatableElement';
import { getLocaleFromLanguage } from '../utils/DateUtils';
import { HeadComponent } from '../components/head/head';

const titleCode = 'CV.PAGE.TITLE';
const descriptionCode = 'CV.PAGE.DESCRIPTION';
const namespaceCode = 'cv';

export default function CV(props: Readonly<IPageProps>): ReactElement {
  const scrumOrgLink = props.data.site.siteMetadata.socials.scrumOrg;
  const githubActionsBadgeLink = 'https://www.credly.com/badges/bcc83162-8396-4e95-b73d-b89ad2658027';
  const githubAdvancedSecurityBadgeLink = 'https://www.credly.com/badges/a20775eb-8713-4013-b0fe-d5e359a543e8';
  const leadingSafeBadgeLink = 'https://www.credly.com/badges/73047751-ef1f-47b9-a0d1-6c4f24319c61';
  const googleCloudDigitalLeaderBadgeLink = 'https://www.credly.com/badges/b849f990-e002-40ac-b8dd-ac3f5f9fa211';
  const googleCloudProfessionalDeveloperBadgeLink =
    'https://www.credly.com/badges/6fc2687b-3a79-4828-b164-f5da38917bd0';

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
    <Layout titleCode={titleCode} descriptionCode={descriptionCode} location={props.location}>
      <div id="cv-page">
        <div id="job-list">
          <div id="jobs-header">
            <h2>{t('WORK.EXPERIENCE')}</h2>
            <Button
              id="cv-download-button"
              href={language === 'fr' ? '/CV.pdf' : '/Resume.pdf'}
              variant="contained"
              download={`${t('RESUME')} Arnaud Flaesch.pdf`}
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
                    Google Cloud Professional Cloud Developer & Digital Leader -{' '}
                    {format(new Date(2024, 5, 4), 'MMMM yyyy', { locale: getLocaleFromLanguage(language) })}
                  </h4>
                  <div className="certifications-logos">
                    <Tooltip title="Google Cloud Professional Cloud Developer">
                      <a href={googleCloudProfessionalDeveloperBadgeLink}>
                        <StaticImage
                          width={100}
                          src="../images/certifications/professional-cloud-developer-certification.png"
                          alt={'Google Cloud Professional Cloud Developer'}
                        />
                      </a>
                    </Tooltip>
                    <Tooltip title="Google Cloud Digital Leader">
                      <a href={googleCloudDigitalLeaderBadgeLink}>
                        <StaticImage
                          width={100}
                          src="../images/certifications/cloud-digital-leader-certification.png"
                          alt={'Google Cloud Digital Leader'}
                        />
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
                    Professional Scrum Master 1 {t('AND')} 2 -{' '}
                    {format(new Date(2023, 11, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(language) })}
                  </h4>
                  <div className="certifications-logos">
                    <Tooltip title="PSM 1">
                      <a href={scrumOrgLink}>
                        <StaticImage
                          width={95}
                          src="../images/certifications/professional-scrum-master-i-psm-i.png"
                          alt={'PSM 1'}
                        />
                      </a>
                    </Tooltip>
                    <Tooltip title="PSM 2">
                      <a href={scrumOrgLink}>
                        <StaticImage
                          width={95}
                          src="../images/certifications/professional-scrum-master-ii-psm-ii.png"
                          alt={'PSM 2'}
                        />
                      </a>
                    </Tooltip>
                  </div>
                </div>
                <hr />

                <div>
                  <h4>
                    SAFe 6 Agilist -{' '}
                    {format(new Date(2024, 4, 16), 'MMMM yyyy', { locale: getLocaleFromLanguage(language) })}
                  </h4>
                  <div className="certifications-logos">
                    <Tooltip title="SAFe 6 Agilist">
                      <a href={leadingSafeBadgeLink}>
                        <StaticImage
                          width={90}
                          src="../images/certifications/certified-safe-6-agilist.png"
                          alt={'SAFe 6 Agilist'}
                        />
                      </a>
                    </Tooltip>
                  </div>
                </div>

                <hr />

                <div>
                  <h4>
                    {t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')} -{' '}
                    {format(new Date(2024, 3, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(language) })}
                  </h4>
                  <PhotoProvider>
                    <PhotoView src="/certifications/numerique-responsable.png">
                      <Tooltip title={t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')}>
                        <img
                          className="large-image"
                          src="/certifications/numerique-responsable.png"
                          alt={t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE') ?? ''}
                        />
                      </Tooltip>
                    </PhotoView>
                  </PhotoProvider>
                </div>
              </div>
            }
          />
        </div>

        <div id="formation-list">
          <h2>{t('EDUCATION')}</h2>
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

export const Head = ({ location, data, pageContext }) =>
  HeadComponent(location, data, pageContext, titleCode, descriptionCode, namespaceCode);

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
