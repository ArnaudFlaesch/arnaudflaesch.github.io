import { BookTwoTone, CodeTwoTone, EmailTwoTone, HomeTwoTone, WorkTwoTone } from '@mui/icons-material';
import './Header.scss';

import { StaticImage } from 'gatsby-plugin-image';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import { ReactElement } from 'react';

interface IProps {
  siteTitle: string;
  location: Location;
}

interface IUrl {
  icon: ReactElement;
  path: string;
  label: string;
}

export default function Header(props: Readonly<IProps>): ReactElement {
  const urls: IUrl[] = [
    {
      path: '/',
      label: 'HOME.LABEL',
      icon: <HomeTwoTone />
    },
    {
      path: '/cv/',
      label: 'RESUME.LABEL',
      icon: <WorkTwoTone />
    },
    {
      path: '/blog/',
      label: 'BLOG.LABEL',
      icon: <BookTwoTone />
    },
    {
      path: '/projets/',
      label: 'PROJECTS.LABEL',
      icon: <CodeTwoTone />
    },
    {
      path: '/contact/',
      label: 'CONTACT.LABEL',
      icon: <EmailTwoTone />
    }
  ];

  const { t } = useTranslation();
  const { originalPath, language } = useI18next();

  return (
    <span id="portfolio-header">
      <h1>
        <Link to="/">{props.siteTitle}</Link>
      </h1>
      <div id="right-navbar">
        <div id="url-list">
          {urls.map((url) => (
            <Link key={url.path} activeClassName="active" to={url.path}>
              {url.icon}
              {t(url.label)}
            </Link>
          ))}
        </div>
        <div id="switch-language">
          {language === 'fr' ? (
            <Link to={originalPath} language={'en'}>
              <StaticImage height={30} src="../../images/icons/languages/us-flag.png" alt={'en'}></StaticImage>
            </Link>
          ) : (
            <Link to={originalPath} language={'fr'}>
              <StaticImage height={30} src="../../images/icons/languages/french-flag.png" alt={'fr'}></StaticImage>
            </Link>
          )}
        </div>
      </div>
    </span>
  );
}
