import * as React from 'react';
import { Link } from 'gatsby';
import './header.scss';

interface IProps {
  siteTitle: string;
}

export default function Header(props: IProps): React.ReactElement {
  return (
    <header>
      <div id="headerTitle">
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
}
