import './CV.scss';

import { Button } from '@mui/material';
import * as React from 'react';

import jobData from '../../data/JobData';
import JobExperience from './jobExperience/JobExperience';

export default function CV(): React.ReactElement {
  const DEFAUL_NUMBER_OF_JOBS_TO_SHOW = 3;

  const [jobIndexEnd, setJobIndexEnd] = React.useState<number | undefined>(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);
  /*
  function createCVElement(element: ICVElement) {
    return (
      <div>
        <h6>{element.title} : </h6>
        {element.description}
      </div>
    );
  }*/

  function showMoreJobs() {
    setJobIndexEnd(undefined);
  }

  function showLessJobs() {
    setJobIndexEnd(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);
  }

  return (
    <>
      <Button href="/CV.pdf" variant="contained" download="Curriculum Vitae Arnaud Flaesch.pdf">
        Télécharger mon CV
      </Button>

      <br />

      <div id="job-list">{jobData.map((job) => JobExperience(job)).slice(0, jobIndexEnd)}</div>

      {jobIndexEnd === DEFAUL_NUMBER_OF_JOBS_TO_SHOW && <Button onClick={showMoreJobs}>Voir plus d'expériences</Button>}
      {jobIndexEnd !== DEFAUL_NUMBER_OF_JOBS_TO_SHOW && (
        <Button onClick={showLessJobs}>Voir moins d'expériences</Button>
      )}
      {/**
        <div id="cv-grid">
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
            <div id="experience-block">
              <h4>Formation</h4>
            </div>

            <div id="hobbies-block">
              <h4>Centres d'intérêts</h4>
              {hobbiesList.map((hobby) => createCVElement(hobby))}
            </div>
          </div>
        </div> */}
    </>
  );
}
