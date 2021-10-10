import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Bio from '../components/bio/Bio';

import './template-blog-post.scss';
import { Share } from 'react-twitter-widgets';

interface IProps {
  data: any;
  location: any;
}

export default function BlogPostTemplate(props: IProps): React.ReactElement {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata?.title || 'Title';
  const { previous, next } = props.data;

  return (
    <Layout {...(props.location, siteTitle)}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <div>
        <article className="blog-post" itemScope itemType="https://schema.org/Article">
          <div>
            <header>
              <div className="flex flex-row">
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <div className="flex flex-row">
                  <div
                    className="fb-share-button"
                    data-href="https://developers.facebook.com/docs/plugins/"
                    data-layout="button_count"
                    data-size="small"
                  >
                    <a
                      target="_blank"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${props.location.href}`}
                      className="fb-xfbml-parse-ignore"
                    >
                      Partager sur Facebook
                    </a>
                  </div>
                  <Share url={props.location.href} />
                  <button>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.location.href}`}>
                      Partager sur Linkedin
                    </a>
                  </button>
                </div>
              </div>
              <p>{post.frontmatter.date}</p>
            </header>
          </div>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
          <hr />
          <footer>
            <Bio />
          </footer>
        </article>
        <nav className="blog-post-nav">
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src={`https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v12.0&appId=${process.env.FACEBOOK_SDK_APP_ID}&autoLogAppEvents=1`}
        nonce="ixhpUZRo"
      ></script>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
