import * as React from 'react';

import './Experience.scss';

import { IExperience } from '../../../model/IExperience';
import { format } from 'date-fns/format';

import { fr } from 'date-fns/locale/fr';

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
    <div className="job">
      <div className="job-title">
        <div className="job-period">{displayPeriod(props.dateDebut, props.dateFin)}</div>
        <div className="job-name">
          {props.website && (
            <a href={props.website}>
              <h3>{props.name}</h3>
            </a>
          )}
          {!props.website && <h3>{props.name}</h3>}
        </div>
        {props.location}
      </div>
      <div className="job-details">
        <h3>{props.title}</h3>
        <div>{props.description}</div>
      </div>
    </div>
  );
}
