import { Book, BookTwoTone, Code, Email, Home, Laptop, Work } from '@mui/icons-material';
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
      icon: <Home />
    },
    {
      path: '/cv/',
      label: 'CV',
      icon: <Work />
    },
    {
      path: '/blog/',
      label: 'Blog',
      icon: <BookTwoTone />
    },
    {
      path: '/projets/',
      label: 'Projets',
      icon: <Code />
    },
    {
      path: '/contact/',
      label: 'Contact',
      icon: <Email />
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
            {url.icon}
            {url.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
