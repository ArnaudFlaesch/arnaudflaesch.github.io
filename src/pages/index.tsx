import { graphql, Link } from 'gatsby';
import React from 'react';
import Bio from '../components/bio/Bio';
import Layout from '../components/layout/layout';
import Post from '../components/post/Post';
import Seo from '../components/seo';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

export default function Index(props: IPageProps): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <div>
      <Layout>
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Bio />
        <ol>
          {posts &&
            posts.map((post: IPost) => (
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
