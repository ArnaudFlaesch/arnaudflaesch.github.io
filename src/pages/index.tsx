import './page-styles/index.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Post from '../components/blog/post/Post';
import Seo from '../components/head/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import { getTranslation } from '../utils/TranslationUtils';

const titleCode = 'INDEX.PAGE.TITLE';
const descriptionCode = 'INDEX.PAGE.DESCRIPTION';
const namespaceCode = 'index';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;
  const rssFeedFile = props.data.site.siteMetadata.rss;

  const { t } = useTranslation();

  return (
    <Layout titleCode={titleCode} descriptionCode={descriptionCode} location={props.location}>
      <div id="home-page">
        <div id="site-links">
          <h2>{t('SITE.CONTENT')} :</h2>
          <ul>
            <li>
              <Link to="/cv/">{t('CV.MESSAGE')}</Link>
            </li>
            <li>
              <Link to="/projets/">{t('PROJECTS.MESSAGE')}</Link>
            </li>
            <li>
              <Link to="/blog/">{t('BLOG.MESSAGE')}</Link> (<a href={rssFeedFile}>{t('RSS.FEED')}</a>)
            </li>
            <li>
              <Link to="/contact/">{t('CONTACT.MESSAGE')}</Link>
            </li>
          </ul>
        </div>

        <h2 id="blog-title">
          <a href="/blog">{t('RECENT.ARTICLES')}</a>
        </h2>
        <ol>
          {posts.map((post: IPost) => (
            <li key={post.fields.slug}>
              <Post {...post} />
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}

export const Head = ({ data, pageContext }) => {
  const translatedDescription = getTranslation(
    descriptionCode,
    pageContext.language,
    namespaceCode,
    data.locales.edges
  );
  return (
    <Seo
      location={pageContext.language === 'fr' ? '' : `/${pageContext.language}`}
      translatedDescription={translatedDescription}
      language={pageContext.language}
    />
  );
};

export const pageQuery = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        rss
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
