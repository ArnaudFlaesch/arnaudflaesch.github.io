import * as React from 'react';
import './footer.scss';

export default function Footer(): React.ReactElement {
  return (
    <footer>
      <div>
        © 2024, Développé avec <a href="https://www.gatsbyjs.com/">Gatsby</a>.Favicon par{' '}
        <a href="https://icons8.com/">Icons8</a>
      </div>
    </footer>
  );
}
