import './header.scss';

import * as React from 'react';

interface IProps {
  siteTitle: string;
}

export default function Header(props: Readonly<IProps>): React.ReactElement {
  return (
    <header id="portfolio-header">
      <div id="header-title">
        <h1>
          <a href="/">{props.siteTitle}</a>
        </h1>
      </div>
      <div id="url-list">
        <a href="#cv">Curriculum Vitae</a>
        <a href="#technos">Langages et outils utilisés</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}
