import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Profile from '../components/Profile';
import Seo from '../components/seo';

interface IProps {
  data: any;
  location: any;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Index(props: IProps): React.ReactElement {
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

        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            );
          })}
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
