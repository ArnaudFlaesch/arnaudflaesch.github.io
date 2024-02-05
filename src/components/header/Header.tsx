import './Header.scss';

import { Link } from 'gatsby';
import * as React from 'react';

interface IProps {
  siteTitle: string;
  location: Location;
}

export default function Header(props: Readonly<IProps>): React.ReactElement {
  return (
    <header id="portfolio-header">
      <div id="header-title">
        <h1>
          <Link to="/">{props.siteTitle}</Link>
        </h1>
      </div>
      <div id="url-list">
        <Link to="/cv">CV</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}
