import './header.scss';

import { navigate } from 'gatsby';
import * as React from 'react';

interface IProps {
  siteTitle: string;
  location: Location;
}

interface IUrl {
  link: string;
  name: string;
}

export default function Header(props: Readonly<IProps>): React.ReactElement {
  const urls: IUrl[] = [
    {
      link: '#cv',
      name: 'CV'
    },
    {
      link: '#projets',
      name: 'Projets'
    },
    {
      link: '#contact',
      name: 'Contact'
    }
  ];

  function redirectIfNeeded(link: string): void {
    if (props.location.pathname !== '/') {
      navigate(`/${link}`);
    }
  }

  return (
    <header id="portfolio-header">
      <div id="header-title">
        <h1>
          <a href="/">{props.siteTitle}</a>
        </h1>
      </div>
      <div id="url-list">
        {urls.map((url: IUrl) => (
          <a key={url.link} onClick={() => redirectIfNeeded(url.link)} href={url.link}>
            <span>{url.name}</span>
          </a>
        ))}
        <a href="/blog">Blog</a>
      </div>
    </header>
  );
}
