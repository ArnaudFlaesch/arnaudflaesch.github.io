import * as React from 'react';

import './Experience.scss';

import { IExperience } from '../../../model/IExperience';
import { format } from 'date-fns/format';

import { fr } from 'date-fns/locale/fr';
import DetailBlock from '../../detailBlock/DetailBlock';
import { ArrowForward } from '@mui/icons-material';
import { ReactElement } from 'react';

export default function Experience(props: Readonly<IExperience>): ReactElement {
  function displayPeriod(dateDebut: Date, dateFin?: Date): ReactElement {
    if (dateFin) {
      return (
        <>
          {formatDate(dateDebut)}
          <ArrowForward /> {formatDate(dateFin)}
        </>
      );
    } else {
      return (
        <>
          {formatDate(dateDebut)}
          <ArrowForward /> {`Aujourd'hui`}
        </>
      );
    }
  }

  function formatDate(date: Date): string {
    const formattedDate = format(date, 'LLLL yyyy', { locale: fr });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  function createExperienceData(jobName: string, website?: string, logoPath?: string): ReactElement {
    const name = <h3>{jobName}</h3>;
    const logo = logoPath ? <img src={logoPath} alt={jobName} /> : null;
    const title = logo ? logo : name;
    return website ? <a href={props.website}>{title}</a> : <>{title}</>;
  }

  return (
    <DetailBlock
      titleComponent={
        <div className="job-content">
          <div className="job-period">{displayPeriod(props.dateDebut, props.dateFin)}</div>
          <div className="job-name">{createExperienceData(props.name, props.website, props.logoPath)}</div>
          <div className="job-location">{props.location}</div>
        </div>
      }
      detailComponent={
        <div className="job-details-content">
          <h3>{props.title}</h3>
          <div className="job-description">
            {props.description.map((description) => (
              <div>{description}</div>
            ))}
          </div>
        </div>
      }
    />
  );
}
