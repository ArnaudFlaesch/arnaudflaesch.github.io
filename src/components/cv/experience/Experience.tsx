import './Experience.scss';

import * as React from 'react';

import { format } from 'date-fns/format';
import { IExperience } from '../../../model/IExperience';

import { ArrowForward } from '@mui/icons-material';

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocaleFromLanguage } from '../../../utils/DateUtils';
import DetailBlock from '../../detailBlock/DetailBlock';

export default function Experience(props: Readonly<IExperience>): ReactElement {
  const { t, i18n } = useTranslation('cv');

  const title: string | undefined = props[`title_${i18n.language}` as keyof IExperience] as string;
  const descriptionList: string[] | undefined = props[`description_${i18n.language}` as keyof IExperience] as string[];

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
          <ArrowForward /> {t('TODAY')}
        </>
      );
    }
  }

  function formatDate(date: Date): string {
    return format(date, 'LLLL yyyy', { locale: getLocaleFromLanguage(i18n.language) });
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
          <h3>{title}</h3>
          <div className="job-description">
            {descriptionList?.map((description, index) => (
              <div key={index}>
                {description}
                <br />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
