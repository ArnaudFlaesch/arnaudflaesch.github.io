import './page-styles/blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Post from '../components/blog/post/Post';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import { getTranslation } from '../utils/TranslationUtils';

const titleCode = 'BLOG.PAGE.TITLE';
const descriptionCode = 'BLOG.PAGE.DESCRIPTION';
const namespaceCode = 'blog';

export default function Blog(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <Layout titleCode={titleCode} descriptionCode={descriptionCode} location={props.location}>
      <ol id="articles-list">
        {posts?.map((post: IPost) => (
          <li key={post.fields.slug}>
            <Post {...post} />
          </li>
        ))}
      </ol>
    </Layout>
  );
}

export const Head = ({ location, data, pageContext }) => {
  const translatedTitle = getTranslation(titleCode, pageContext.language, namespaceCode, data.locales.edges);
  const translatedDescription = getTranslation(
    descriptionCode,
    pageContext.language,
    namespaceCode,
    data.locales.edges
  );
  return (
    <Seo
      location={location.pathname}
      translatedTitle={translatedTitle}
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
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
