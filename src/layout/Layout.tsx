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
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import './Layout.scss';

interface IProps {
  titleCode?: string;
  descriptionCode?: string;
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
  const { t } = useTranslation();

  return (
    <div id="site-container">
      <header id="fixed-header">
        <Header location={props.location} siteTitle={author} />
      </header>
      <div id="site-body">
        <div id="profile-container" className={props.blogView ? 'blog-view' : ''}>
          <Profile />
        </div>
        <div id="site-page">
          <main id="site-content">
            <div id="page-header">
              {props.titleCode && <h1 id="page-title">{t(props.titleCode)}</h1>}
              {props.location.pathname.endsWith('/blog/') && (
                <Tooltip title="Flux RSS">
                  <a href={rss}>
                    <RssFeed id="rss-feed-icon" />
                  </a>
                </Tooltip>
              )}
            </div>
            {props.descriptionCode && <div id="page-description">{t(props.descriptionCode)}</div>}
            {props.children}
          </main>
          <footer>
            © 2024, {t('DEVELOPED.WITH')} <a href="https://www.gatsbyjs.com/">Gatsby</a>. {t('ICONS.BY')}
            {' : '}
            <a href="https://icons8.com/">Icons8</a>.
          </footer>
        </div>
      </div>
    </div>
  );
}
