/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

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
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div id="site-container">
        <div id="profile-container">
          <Profile />
        </div>
        <main id="portfolio-body">
          <div>{props.children}</div>
          <Footer />
        </main>
      </div>
    </>
  );
}
