import { BookTwoTone, CodeTwoTone, EmailTwoTone, HomeTwoTone, WorkTwoTone } from '@mui/icons-material';
import './Header.scss';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { getAlternativePathFromCurrentPath, getUrlPath } from '../../utils/TranslationUtils';

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

  const { t, i18n } = useTranslation('common');

  return (
    <span id="portfolio-header">
      <h1>
        <Link to={getUrlPath('/', i18n.language)}>{props.siteTitle}</Link>
      </h1>
      <div id="right-navbar">
        <div id="url-list">
          {urls.map((url) => (
            <Link
              key={url.path}
              activeClassName="active"
              to={i18n.language === 'fr' ? url.path : `/${i18n.language}${url.path}`}
            >
              {url.icon}
              {t(url.label)}
            </Link>
          ))}
        </div>
        <div id="switch-language">
          {i18n.language === 'fr' ? (
            <Link
              to={getAlternativePathFromCurrentPath('en', i18n.language, props.location.pathname)}
              onClick={() => i18n.changeLanguage('en')}
            >
              <StaticImage height={30} src="../../images/icons/languages/us-flag.png" alt={'en'}></StaticImage>
            </Link>
          ) : (
            <Link
              to={getAlternativePathFromCurrentPath('fr', i18n.language, props.location.pathname)}
              onClick={() => i18n.changeLanguage('fr')}
            >
              <StaticImage height={30} src="../../images/icons/languages/french-flag.png" alt={'fr'}></StaticImage>
            </Link>
          )}
        </div>
      </div>
    </span>
  );
}
