import { graphql } from 'gatsby';
import React from 'react';

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

        <iframe
          title="Curriculum Vitae"
          width={document.body.clientWidth}
          height={document.body.clientHeight}
          src="/cv.pdf"
        ></iframe>
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
