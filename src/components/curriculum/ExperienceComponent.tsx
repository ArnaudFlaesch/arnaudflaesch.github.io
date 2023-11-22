import * as React from 'react';
import { formatDateEndFromExperience, formatDateFromExperience } from '../../utils/DateUtils';
import Experience from './Experience';
import './Experience.scss';

const ExperienceComponent: React.FunctionComponent<Experience> = (props: Experience) => {
  return (
    <div className="experience-block">
      <header className="job-title">{props.title}</header>
      <div className="employer-name">{props.name}</div>
      <div className="employer-location">{props.location}</div>
      <div>
        {formatDateFromExperience(props.dateDebut)} -&gt; {formatDateEndFromExperience(props.dateFin)}
      </div>
      <div>{props.description}</div>
      <div>
        {props.skills.map((skill) => {
          return (
            <span key={skill} className="skill-block">
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceComponent;
