import * as React from 'react';
import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer
      style={{
        marginTop: `2rem`
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  );
}
