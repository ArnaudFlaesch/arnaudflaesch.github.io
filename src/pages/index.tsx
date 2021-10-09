import { graphql, Link } from 'gatsby';
import React from 'react';
import Bio from '../components/bio/Bio';
import Layout from '../components/layout/layout';
import Post from '../components/post/Post';
import Profile from '../components/Profile';
import Seo from '../components/seo';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

export default function Index(props: IPageProps): React.ReactElement {
  const siteTitle = props.data.site.siteMetadata?.title || `Title`;
  const posts = props.data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <div>
      <div className="float-left ml-10 mt-40">
        <Profile />
      </div>

      <Layout>
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Bio />
        <ol>
          {posts.map((post: IPost) => (
            <Post key={post.frontmatter.title} {...post} />
          ))}
        </ol>
        <br />
        <p>
          <Link to="/projects/">Projets professionnels et personnels</Link>{' '}
          <br />
          <Link to="/curriculum/">Curriculum Vitae</Link> <br />
          <Link to="/skills/">Compétences</Link> <br />
        </p>
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
