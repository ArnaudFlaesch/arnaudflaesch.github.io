import './page-styles/index.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Post from '../components/blog/post/Post';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;
  const rssFeedFile = props.data.site.siteMetadata.rss;

  const { t } = useTranslation();

  const pageTitle = t("WELCOME.MESSAGE");
  const description = t(props.data.site.siteMetadata.description)

  return (
    <Layout title={pageTitle} description={description} location={props.location}>
      <div id="home-page">
        <div id="site-links">
          <h2>{t('SITE.CONTENT')} :</h2>
          <ul>
            <li>
              <Link to="/cv/">{t("CV.MESSAGE")}</Link>
            </li>
            <li>
              <Link to="/projets/">
              {t("PROJECTS.MESSAGE")}
              </Link>
            </li>
            <li>
              <Link to="/blog/">{t("BLOG.MESSAGE")}</Link> (<a href={rssFeedFile}>{t("RSS.FEED")}</a>)
            </li>
            <li>
              <Link to="/contact/">{t("CONTACT.MESSAGE")}</Link>
            </li>
          </ul>
        </div>

        <h2 id="blog-title">
          <a href="/blog">{t("RECENT.ARTICLES")}</a>
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

export const Head = () => <Seo location={''} />;

export const pageQuery = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        description
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
