import './page-styles/cv.scss';

import { Button, Tooltip } from '@mui/material';
import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import Experience from '../components/cv/experience/Experience';
import Skills from '../components/cv/skills/Skills';
import DetailBlock from '../components/detailBlock/DetailBlock';
import formationData from '../data/FormationData';
import jobData from '../data/JobData';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { ReactElement } from 'react';
import { hobbiesList } from '../data/HobbiesData';

const title = 'Curriculum Vitae';
const description =
  "Le détail de mon parcours professionnel et scolaire, ainsi que mes compétences techniques et centres d'intérêts.";

export default function CV(props: Readonly<IPageProps>): ReactElement {
  const data = useStaticQuery(graphql`
    query CVQuery {
      site {
        siteMetadata {
          socials {
            scrumOrg
          }
        }
      }
    }
  `);

  const scrumOrgLink = data.site.siteMetadata.socials.scrumOrg;
  const githubActionsBadgeLink = 'https://www.credly.com/badges/bcc83162-8396-4e95-b73d-b89ad2658027';
  const githubAdvancedSecurityBadgeLink = 'https://www.credly.com/badges/a20775eb-8713-4013-b0fe-d5e359a543e8';

  const DEFAUL_NUMBER_OF_JOBS_TO_SHOW = 3;

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
            <h2>Expériences professionnelles</h2>
            <Button
              id="cv-download-button"
              href="/CV.pdf"
              variant="contained"
              download="Curriculum Vitae Arnaud Flaesch.pdf"
            >
              Télécharger mon CV
            </Button>
          </div>
          {jobData.slice(0, jobIndexEnd).map((job) => (
            <Experience key={job.name} {...job} />
          ))}

          {jobIndexEnd === DEFAUL_NUMBER_OF_JOBS_TO_SHOW && (
            <Button onClick={showMoreJobs}>Voir plus d'expériences</Button>
          )}
          {jobIndexEnd !== DEFAUL_NUMBER_OF_JOBS_TO_SHOW && (
            <Button onClick={showLessJobs}>Voir moins d'expériences</Button>
          )}
        </div>

        <div id="formation-list">
          <h2>Formation</h2>
          {formationData.map((formation) => (
            <Experience key={formation.title} {...formation} />
          ))}
        </div>

        <div id="certifications-list">
          <DetailBlock
            titleComponent={<h3>{'Certifications'}</h3>}
            detailComponent={
              <div id="certifications-detail-list">
                <h4>Professional Scrum Master 1 et 2 (décembre 2023)</h4>
                <div className="certifications-logos">
                  <Tooltip title="PSM 1">
                    <a href={scrumOrgLink}>
                      <StaticImage height={80} width={80} src="../images/certifications/psm1.png" alt={'PSM 1'} />
                    </a>
                  </Tooltip>
                  <Tooltip title="PSM 2">
                    <a href={scrumOrgLink}>
                      <StaticImage height={80} width={80} src="../images/certifications/psm2.png" alt={'PSM 2'} />
                    </a>
                  </Tooltip>
                </div>

                <h4>GitHub (mars 2024)</h4>
                <div className="certifications-logos">
                  <Tooltip title="GitHub Actions">
                    <a href={githubActionsBadgeLink}>
                      <StaticImage
                        height={90}
                        width={90}
                        src="../images/certifications/github-actions.png"
                        alt={'GitHub Actions'}
                      />
                    </a>
                  </Tooltip>
                  <Tooltip title="GitHub Advanced Security">
                    <a href={githubAdvancedSecurityBadgeLink}>
                      <StaticImage
                        height={90}
                        width={90}
                        src="../images/certifications/github-advanced-security.png"
                        alt={'GitHub Advanced Security'}
                      />
                    </a>
                  </Tooltip>
                </div>
              </div>
            }
          />
        </div>

        <h2 id="skills-title">Langages et technologies</h2>
        <Skills />

        <h2 id="hobbies-title">Centres d'intérêts</h2>

        <div id="hobbies-list">{hobbiesList.map((hobby) => createDetailBlock(hobby.title, hobby.description))}</div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo location={'/cv'} title={title} description={description} />;
