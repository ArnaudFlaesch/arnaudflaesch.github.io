import './page-styles/index.scss';

import { graphql, Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Post from '../components/blog/post/Post';
import Seo from '../components/head/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import { getUrlPath } from '../utils/TranslationUtils';

const titleCode = 'INDEX.PAGE.TITLE';
const descriptionCode = 'INDEX.PAGE.DESCRIPTION';
const namespaceCode = 'index';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;
  const rssFeedFile = props.data.site.siteMetadata.rss;
  const { t, i18n } = useTranslation(namespaceCode);

  return (
    <Layout
      titleCode={titleCode}
      descriptionCode={descriptionCode}
      i18nNamespace={namespaceCode}
      location={props.location}
    >
      <div id="home-page">
        <div id="site-links">
          <h2>{t('SITE.CONTENT')} :</h2>
          <ul>
            <li>
              <Link to={getUrlPath('/cv/', i18n.language)}>{t('CV.MESSAGE')}</Link>
            </li>
            <li>
              <Link to={getUrlPath('/projets/', i18n.language)}>{t('PROJECTS.MESSAGE')}</Link>
            </li>
            <li>
              <Link to={getUrlPath('/blog/', i18n.language)}>{t('BLOG.MESSAGE')}</Link> (
              <a href={rssFeedFile}>{t('RSS.FEED')}</a>)
            </li>
            <li>
              <Link to={getUrlPath('/contact/', i18n.language)}>{t('CONTACT.MESSAGE')}</Link>
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

export const Head = ({ pageContext, location }: { pageContext: { language: string }; location: Location }) => {
  const { t } = useTranslation(namespaceCode);
  const translatedDescription = t(descriptionCode);
  return (
    <Seo location={location.pathname} translatedDescription={translatedDescription} language={pageContext.language} />
  );
};

export const pageQuery = graphql`
  query {
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
  }
`;
