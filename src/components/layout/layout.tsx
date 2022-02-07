/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import Footer from '../footer/footer';

import './layout.scss';
import Profile from '../Profile';

interface IProps {
  children: React.ReactElement[];
}

export default function Layout(props: IProps): React.ReactElement {
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
      <div className="flex flex-row space-x-10">
        <div className="ml-10 w-1/6 items-center">
          <Profile />
        </div>
        <div className="w-full">
          <main className="portfolio-body">
            <div>{props.children}</div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
