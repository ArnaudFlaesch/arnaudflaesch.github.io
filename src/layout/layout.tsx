/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/header/header';

import './layout.scss';
import Profile from '../components/profile/Profile';

interface IProps {
  children: React.ReactElement[];
}

export default function Layout(props: Readonly<IProps>): React.ReactElement {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <div id="page-container">
      <div id="fixed-header">
        <Header siteTitle={data.site.siteMetadata?.author || 'Title'} />
      </div>
      <div id="site-container">
        <div id="profile-container">
          <div id="profile-content">
            <Profile />
          </div>
        </div>
        <main id="portfolio-body">
          <div id="portfolio-content">
            <div>{props.children}</div>
          </div>
          <footer>
            <div>
              © 2024, Développé avec <a href="https://www.gatsbyjs.com/">Gatsby</a>. Favicon par{' '}
              <a href="https://icons8.com/">Icons8</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
