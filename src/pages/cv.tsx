import './page-styles/cv.scss';

import { Button, Tooltip } from '@mui/material';
import { format } from 'date-fns';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as React from 'react';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Experience from '../components/cv/experience/Experience';
import Skills from '../components/cv/skills/Skills';
import DetailBlock from '../components/detailBlock/DetailBlock';
import { HeadComponent } from '../components/head/head';
import formationData from '../data/EducationData';
import { hobbiesList } from '../data/HobbiesData';
import jobData from '../data/WorkData';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { ITranslatableElement } from '../model/ITranslatableElement';
import { getLocaleFromLanguage } from '../utils/DateUtils';

const titleCode = 'CV.PAGE.TITLE';
const descriptionCode = 'CV.PAGE.DESCRIPTION';
const namespaceCode = 'cv';

export default function CV(props: Readonly<IPageProps>): ReactElement {
  const scrumOrgLink = props.data.site.siteMetadata.socials.scrumOrg;
  const githubActionsBadgeLink = 'https://www.credly.com/badges/bcc83162-8396-4e95-b73d-b89ad2658027';
  const githubAdvancedSecurityBadgeLink = 'https://www.credly.com/badges/a20775eb-8713-4013-b0fe-d5e359a543e8';
  const githubFoundationsBadgeLink = 'https://www.credly.com/badges/85ef131c-c299-4bd5-aa55-77141c16c822';
  const githubCopilotBadgeLink = 'https://www.credly.com/badges/e8fd9833-c41b-40b9-8af6-7c7105b7f5c2';
  const leadingSafeBadgeLink = 'https://www.credly.com/badges/73047751-ef1f-47b9-a0d1-6c4f24319c61';
  const googleCloudDigitalLeaderBadgeLink = 'https://www.credly.com/badges/b849f990-e002-40ac-b8dd-ac3f5f9fa211';
  const googleCloudProfessionalDeveloperBadgeLink =
    'https://www.credly.com/badges/6fc2687b-3a79-4828-b164-f5da38917bd0';

  const DEFAUL_NUMBER_OF_JOBS_TO_SHOW = 3;

  const { t, i18n } = useTranslation(namespaceCode);

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
    <Layout
      titleCode={titleCode}
      descriptionCode={descriptionCode}
      i18nNamespace={namespaceCode}
      location={props.location}
    >
      <div id="cv-page">
        <div id="job-list">
          <div id="jobs-header">
            <h2>{t('WORK.EXPERIENCE')}</h2>
            <Button
              id="cv-download-button"
              href={i18n.language === 'fr' ? '/CV.pdf' : '/Resume.pdf'}
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
          <h2>Certifications</h2>
          <DetailBlock
            titleComponent={
              <h4>{`Google Cloud Professional Cloud Developer ${t('AND')} Digital Leader - ${format(new Date(2024, 5, 4), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
            }
            detailComponent={
              <div className="certifications-logos">
                <Tooltip title="Google Cloud Professional Cloud Developer">
                  <a href={googleCloudProfessionalDeveloperBadgeLink}>
                    <StaticImage
                      width={105}
                      src="../images/certifications/professional-cloud-developer-certification.png"
                      alt={'Google Cloud Professional Cloud Developer'}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="Google Cloud Digital Leader">
                  <a href={googleCloudDigitalLeaderBadgeLink}>
                    <StaticImage
                      width={105}
                      src="../images/certifications/cloud-digital-leader-certification.png"
                      alt={'Google Cloud Digital Leader'}
                    />
                  </a>
                </Tooltip>
              </div>
            }
          />

          <DetailBlock
            titleComponent={
              <>
                <h4>{`GitHub Actions ${t('AND')} Advanced Security -
                    ${format(new Date(2024, 2, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
                <br />
                <h4>{`GitHub Foundations -
                    ${format(new Date(2024, 6, 5), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
              </>
            }
            detailComponent={
              <div className="certifications-logos">
                <Tooltip title="GitHub Actions">
                  <a href={githubActionsBadgeLink}>
                    <StaticImage width={105} src="../images/certifications/github-actions.png" alt={'GitHub Actions'} />
                  </a>
                </Tooltip>
                <Tooltip title="GitHub Advanced Security">
                  <a href={githubAdvancedSecurityBadgeLink}>
                    <StaticImage
                      width={105}
                      src="../images/certifications/github-advanced-security.png"
                      alt={'GitHub Advanced Security'}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="GitHub Foundations">
                  <a href={githubFoundationsBadgeLink}>
                    <StaticImage
                      width={105}
                      src="../images/certifications/github-foundations.png"
                      alt={'GitHub Foundations'}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="GitHub Copilot">
                  <a href={githubCopilotBadgeLink}>
                    <StaticImage width={105} src="../images/certifications/github-copilot.png" alt={'GitHub Copilot'} />
                  </a>
                </Tooltip>
              </div>
            }
          />

          <DetailBlock
            titleComponent={
              <h4>{`Professional Scrum Master 1 ${t('AND')} 2 -
                    ${format(new Date(2023, 11, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
            }
            detailComponent={
              <div className="certifications-logos">
                <Tooltip title="PSM 1">
                  <a href={scrumOrgLink}>
                    <StaticImage
                      width={100}
                      src="../images/certifications/professional-scrum-master-i-psm-i.png"
                      alt={'PSM 1'}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="PSM 2">
                  <a href={scrumOrgLink}>
                    <StaticImage
                      width={100}
                      src="../images/certifications/professional-scrum-master-ii-psm-ii.png"
                      alt={'PSM 2'}
                    />
                  </a>
                </Tooltip>
              </div>
            }
          />

          <DetailBlock
            titleComponent={
              <h4>{`SAFe 6 Agilist -
                    ${format(new Date(2024, 4, 16), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
            }
            detailComponent={
              <div className="certifications-logos">
                <Tooltip title="SAFe 6 Agilist">
                  <a href={leadingSafeBadgeLink}>
                    <StaticImage
                      width={95}
                      src="../images/certifications/certified-safe-6-agilist.png"
                      alt={'SAFe 6 Agilist'}
                    />
                  </a>
                </Tooltip>
              </div>
            }
          />

          <DetailBlock
            titleComponent={
              <h4>{`${t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')} - 
                    ${format(new Date(2024, 3, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
            }
            detailComponent={
              <div className="certifications-logos">
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
              hobby[i18n.language as keyof ITranslatableElement].title,
              hobby[i18n.language as keyof ITranslatableElement].description
            )
          )}
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ location }: { location: Location }) =>
  HeadComponent(titleCode, descriptionCode, namespaceCode, location);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        socials {
          scrumOrg
        }
      }
    }
  }
`;
