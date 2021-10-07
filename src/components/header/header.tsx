import * as React from 'react';
import { Link } from 'gatsby';
import './header.scss';

interface IProps {
  siteTitle: string;
}

export default function Header(props: IProps): React.ReactElement {
  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
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
