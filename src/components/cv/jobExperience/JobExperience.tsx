import * as React from 'react';

import './JobExperience.scss';

import { IExperience } from '../../../model/IExperience';
import { format } from 'date-fns/format';

import { fr } from 'date-fns/locale/fr';

export default function JobExperience(props: Readonly<IExperience>): React.ReactElement {
  function displayPeriod(dateDebut: Date, dateFin?: Date): string {
    if (dateFin) {
      return `${formatDate(dateDebut)} -> ${formatDate(dateFin)}`;
    } else {
      return `${formatDate(dateDebut)} -> Aujourd'hui`;
    }
  }

  function formatDate(date: Date): string {
    const formattedDate = format(date, 'LLLL-yyyy', { locale: fr });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return (
    <div className="job">
      <div className="job-title">
        <div className="job-period">{displayPeriod(props.dateDebut, props.dateFin)}</div>
        <div className="job-name">
          <h3>{props.name}</h3>
        </div>
      </div>
      <div className="job-details">
        <div>
          {props.title} / {props.location}
        </div>
        <div>{props.description}</div>
      </div>
    </div>
  );
}
