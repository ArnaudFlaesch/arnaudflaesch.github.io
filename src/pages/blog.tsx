import './page-styles/blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Post from '../components/post/Post';
import Seo from '../components/Seo';
import Layout from '../layout/layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

export default function Blog(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <Layout location={props.location}>
      <h2>Blog</h2>

      <ol>{posts?.map((post: IPost) => <Post key={post.frontmatter.title} {...post} />)}</ol>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" location={'/blog'} />;

export const pageQuery = graphql`
  query {
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
