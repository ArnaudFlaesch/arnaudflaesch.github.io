import './page-styles/index.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Post from '../components/blog/post/Post';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;
  const description = props.data.site.siteMetadata.description;

  return (
    <Layout location={props.location}>
      <div id="presentation">
        <h1>Bonjour !</h1>
        <div>{description}</div>
      </div>

      <h2 id="blog-title">
        <a href="/blog">Blog</a>
      </h2>
      <ol>
        {posts.map((post: IPost) => (
          <Post key={post.frontmatter.title} {...post} />
        ))}
      </ol>
    </Layout>
  );
}

export const Head = () => <Seo location={''} />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
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
