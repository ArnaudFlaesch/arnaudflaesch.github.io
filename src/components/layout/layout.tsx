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

import './layout.css';

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
      <div className="portfolio-body">
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}
