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
import Layout from '../layout/layout';
import { IPageProps } from '../model/IPageProps';

export default function CV(props: Readonly<IPageProps>): React.ReactElement {
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

  const DEFAUL_NUMBER_OF_JOBS_TO_SHOW = 3;
  const IMG_HEIGHT = 60;
  const IMG_WIDTH = 60;

  const [jobIndexEnd, setJobIndexEnd] = React.useState<number | undefined>(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);

  function showMoreJobs() {
    setJobIndexEnd(undefined);
  }

  function showLessJobs() {
    setJobIndexEnd(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);
  }

  return (
    <Layout location={props.location}>
      <h2>Curriculum Vitae</h2>
      <Button id="cv-download-button" href="/CV.pdf" variant="contained" download="Curriculum Vitae Arnaud Flaesch.pdf">
        Télécharger mon CV
      </Button>

      <div id="job-list" className="experience-container">
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

      <div id="formation-list" className="experience-container">
        {formationData.map((formation) => (
          <Experience key={formation.title} {...formation} />
        ))}
      </div>

      <div id="certifications-list">
        <DetailBlock
          titleComponent={<h2>{'Certifications'}</h2>}
          detailComponent={
            <>
              <Tooltip title="PSM 1">
                <a href={scrumOrgLink}>
                  <StaticImage
                    height={IMG_HEIGHT}
                    width={IMG_WIDTH}
                    src="../images/certifications/psm1.png"
                    alt={'PSM 1'}
                  />
                </a>
              </Tooltip>
              <Tooltip title="PSM 2">
                <a href={scrumOrgLink}>
                  <StaticImage
                    height={IMG_HEIGHT}
                    width={IMG_WIDTH}
                    src="../images/certifications/psm2.png"
                    alt={'PSM 2'}
                  />
                </a>
              </Tooltip>
            </>
          }
        />
      </div>

      <h2>Langages et technologies</h2>
      <Skills />

      {/**
        <div >
          <div>
            <div id="skills-block">
              <h4>Compétences</h4>
              {skillsList.map((skill) => createCVElement(skill))}
            </div>
            <div id="certifications-block">
              <h4>Certifications</h4>
              {certificationsList.map((certification) => createCVElement(certification))}
            </div>
            <div id="personal-projects-block">
              <h4>Projets personnels</h4>
              {projectList.map((project) => createCVElement(project))}
            </div>
          </div>
          <div>
            

            <div id="hobbies-block">
              <h4>Centres d'intérêts</h4>
              {hobbiesList.map((hobby) => createCVElement(hobby))}
            </div>
          </div>
        </div> */}
    </Layout>
  );
}

export const Head = () => <Seo location={'/cv'} title="CV" />;
