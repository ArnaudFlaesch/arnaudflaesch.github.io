import * as React from 'react';
import {
  formatDateEndFromExperience,
  formatDateFromExperience
} from '../../utils/DateUtils';
import Experience from './Experience';
import './Experience.css';

const ExperienceComponent: React.FunctionComponent<Experience> = (
  props: Experience
) => {
  return (
    <div className="experienceBlock">
      <header className="jobTitle">{props.title}</header>
      <div className="employerName">{props.name}</div>
      <div className="employerLocation">{props.location}</div>
      <div>
        {formatDateFromExperience(props.dateDebut)} -&gt;{' '}
        {formatDateEndFromExperience(props.dateFin)}
      </div>
      <div>{props.description}</div>
      <div>
        {props.skills.map((skill) => {
          return (
            <span key={skill} className="skillBlock">
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceComponent;
