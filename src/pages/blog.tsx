import './blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Post from '../components/post/Post';
import Seo from '../components/seo';
import Layout from '../layout/layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

export default function Blog(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo title="Blog" location="/blog" />
      <h1>Blog</h1>

      <ol>{posts?.map((post: IPost) => <Post key={post.frontmatter.title} {...post} />)}</ol>
    </Layout>
  );
}

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
        }
      }
    }
  }
`;
