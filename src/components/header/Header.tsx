import './Header.scss';

import { Link } from 'gatsby';
import * as React from 'react';

interface IProps {
  siteTitle: string;
  location: Location;
}

interface IUrl {
  path: string;
  label: string;
}

export default function Header(props: Readonly<IProps>): React.ReactElement {
  const urls: IUrl[] = [
    {
      path: '/',
      label: 'Accueil'
    },
    {
      path: '/cv/',
      label: 'CV'
    },
    {
      path: '/blog/',
      label: 'Blog'
    },
    {
      path: '/projets/',
      label: 'Projets'
    },
    {
      path: '/contact/',
      label: 'Contact'
    }
  ];

  return (
    <header id="portfolio-header">
      <div id="header-title">
        <h1>
          <Link to="/">{props.siteTitle}</Link>
        </h1>
      </div>
      <div id="url-list">
        {urls.map((url) => (
          <Link key={url.path} className={props.location.pathname === url.path ? 'active' : ''} to={url.path}>
            {url.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
