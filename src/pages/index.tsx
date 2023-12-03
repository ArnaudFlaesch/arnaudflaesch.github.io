import { graphql } from 'gatsby';
import React from 'react';
import './index.css';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';

export default function Index(/*props: IPageProps*/): React.ReactElement {
  // const posts = props.data.allMarkdownRemark.nodes;

  return (
    <div>
      <Layout>
        <Seo title="Home" />
        <h1>Bonjour !</h1>
        {/*<ol>
          {posts.map((post: IPost) => (
            <Post key={post.frontmatter.title} {...post} />
          ))}
          </ol>*/}
        <br />

        <iframe id="cv-container" title="Curriculum Vitae" src="/cv.pdf"></iframe>
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query {
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
        }
      }
    }
  }
`;
