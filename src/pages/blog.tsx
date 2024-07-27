import './page-styles/blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Post from '../components/blog/post/Post';
import { HeadComponent } from '../components/head/head';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

const titleCode = 'BLOG.PAGE.TITLE';
const descriptionCode = 'BLOG.PAGE.DESCRIPTION';
const namespaceCode = 'blog';

export default function Blog(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <Layout
      titleCode={titleCode}
      descriptionCode={descriptionCode}
      i18nNamespace={namespaceCode}
      location={props.location}
    >
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

export const Head = ({ location }: { location: Location }) =>
  HeadComponent(titleCode, descriptionCode, namespaceCode, location);

export const pageQuery = graphql`
  query {
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
  }
`;
