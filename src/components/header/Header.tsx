import { BookTwoTone, CodeTwoTone, EmailTwoTone, HomeTwoTone, WorkTwoTone } from '@mui/icons-material';
import './Header.scss';

import { Link } from 'gatsby';
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
      label: 'Accueil',
      icon: <HomeTwoTone />
    },
    {
      path: '/cv/',
      label: 'CV',
      icon: <WorkTwoTone />
    },
    {
      path: '/blog/',
      label: 'Blog',
      icon: <BookTwoTone />
    },
    {
      path: '/projets/',
      label: 'Projets',
      icon: <CodeTwoTone />
    },
    {
      path: '/contact/',
      label: 'Contact',
      icon: <EmailTwoTone />
    }
  ];

  return (
    <span id="portfolio-header">
      <h1>
        <Link to="/">{props.siteTitle}</Link>
      </h1>
      <div id="url-list">
        {urls.map((url) => (
          <Link key={url.path} activeClassName="active" to={url.path}>
            {url.icon}
            {url.label}
          </Link>
        ))}
      </div>
    </span>
  );
}
