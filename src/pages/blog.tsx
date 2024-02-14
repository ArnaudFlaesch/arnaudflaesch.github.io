import './page-styles/blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Post from '../components/blog/post/Post';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

const title = 'Blog';
const description = 'Mon blog sur lequel vous trouverez des articles techniques sur divers sujets.';

export default function Blog(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <Layout title={title} location={props.location}>
      <ol>{posts?.map((post: IPost) => <Post key={post.frontmatter.title} {...post} />)}</ol>
    </Layout>
  );
}

export const Head = () => <Seo title={title} location={'/blog'} description={description} />;

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
