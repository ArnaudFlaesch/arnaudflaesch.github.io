import './page-styles/blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { RssFeed } from '@mui/icons-material';
import Post from '../components/blog/post/Post';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import { Tooltip } from '@mui/material';

export default function Blog(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;
  const rss = props.data.site.siteMetadata.rss;

  return (
    <Layout title="Blog" location={props.location}>
      <>
        <Tooltip title="Flux RSS">
          <a href={rss}>
            <RssFeed id="rss-feed-icon" />
          </a>
        </Tooltip>
        <ol>{posts?.map((post: IPost) => <Post key={post.frontmatter.title} {...post} />)}</ol>
      </>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" location={'/blog'} />;

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
