import * as React from 'react';

import './Experience.scss';

import { IExperience } from '../../../model/IExperience';
import { format } from 'date-fns/format';

import { fr } from 'date-fns/locale/fr';
import DetailBlock from '../../detailBlock/DetailBlock';

export default function Experience(props: Readonly<IExperience>): React.ReactElement {
  function displayPeriod(dateDebut: Date, dateFin?: Date): string {
    if (dateFin) {
      return `${formatDate(dateDebut)} -> ${formatDate(dateFin)}`;
    } else {
      return `${formatDate(dateDebut)} -> Aujourd'hui`;
    }
  }

  function formatDate(date: Date): string {
    const formattedDate = format(date, 'LLLL yyyy', { locale: fr });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return (
    <DetailBlock
      titleComponent={
        <div className="job-content">
          <div className="job-period">{displayPeriod(props.dateDebut, props.dateFin)}</div>
          <div className="job-name">
            {props.website && (
              <a href={props.website}>
                <h3>{props.name}</h3>
              </a>
            )}
            {!props.website && <h3>{props.name}</h3>}
          </div>
          <div>{props.location}</div>
        </div>
      }
      detailComponent={
        <div className="job-details-content">
          <h3>{props.title}</h3>
          <div className="job-description">{props.description}</div>
        </div>
      }
    />
  );
}
