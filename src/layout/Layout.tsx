/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { RssFeed } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import './Layout.scss';

interface IProps {
  title?: string;
  children: React.ReactElement;
  location: Location;
  blogView?: boolean;
}

export default function Layout(props: Readonly<IProps>): React.ReactElement {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          rss
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author;
  const rss = data.site.siteMetadata.rss;

  return (
    <div id="page-container">
      <header id="fixed-header">
        <Header location={props.location} siteTitle={author} />
      </header>
      <div id="site-container">
        <div id="profile-container" className={props.blogView ? 'blog-view' : ''}>
          <div id="profile-content">
            <Profile />
          </div>
        </div>
        <main id="portfolio-body">
          <div id="portfolio-content">
            <div id="page-header">
              {props.title && <h1 id="page-title">{props.title}</h1>}{' '}
              {props.location.pathname === '/blog/' && (
                <a href={rss}>
                  <Tooltip title="Flux RSS">
                    <RssFeed id="rss-feed-icon" />
                  </Tooltip>
                </a>
              )}
            </div>
            <div id="page-content">{props.children}</div>
          </div>
          <footer>
            <div>
              © 2024, Développé avec <a href="https://www.gatsbyjs.com/">Gatsby</a>. Icons by{' '}
              <a href="https://icons8.com/">Icons8</a>.
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
