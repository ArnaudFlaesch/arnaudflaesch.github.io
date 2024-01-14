import './CV.scss';

import * as React from 'react';

import jobData from '../../data/JobData';
import { IExperience } from '../../model/IExperience';
import { skillsList } from '../../data/SkillsData';
import { ICVElement } from '../../model/ICVElement';
import { hobbiesList } from '../../data/HobbiesData';
import { certificationsList } from '../../data/CertificationsData';
import { projectList } from '../../data/PersonalProjectsData';

export default function CV(): React.ReactElement {
  function createJobComponent(experience: IExperience): React.ReactElement {
    return (
      <div>
        <h3>{experience.title}</h3>
        <div>
          {experience.name} / {experience.location}
        </div>
        <div>{experience.description}</div>
      </div>
    );
  }

  function createCVElement(element: ICVElement) {
    return (
      <div>
        <h6>{element.title} : </h6>
        {element.description}
      </div>
    );
  }

  return (
    <>
      <div id="job-list">{jobData.map((job) => createJobComponent(job))}</div>

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
      </div>
    </>
  );
}
