import * as React from 'react';
import { Link } from 'gatsby';
import './header.scss';

interface IProps {
  siteTitle: string;
}

export default function Header(props: IProps): React.ReactElement {
  return (
    <header id="portfolio-header">
      <div className="flex flex-row justify-evenly">
        <div id="header-title">
          <h1>
            <Link to="/">{props.siteTitle}</Link>
          </h1>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <Link to="/blog/">Blog </Link>
          <Link to="/projects/">Projets </Link>
          <Link to="/curriculum/">CV</Link>
          <Link to="/skills/">Compétences</Link>
        </div>
      </div>
    </header>
  );
}
