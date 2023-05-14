import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Bio from '../components/bio/Bio';

import './template-blog-post.scss';

interface IProps {
  data: any;
  location: any;
}

export default function BlogPostTemplate(props: IProps): React.ReactElement {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata?.title || 'Title';
  const { previous, next } = props.data;

  function handleShare(url: string): void {
    window.open(encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700');
  }

  return (
    <Layout {...(props.location, siteTitle)}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <div>
        <article className="blog-post" itemScope itemType="https://schema.org/Article">
          <div>
            <header>
              <div className="header-container">
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <div className="share-buttons">
                  <div>
                    <a
                      href="#"
                      onClick={() => handleShare(`https://www.facebook.com/sharer.php?u=${props.location.href}`)}
                    >
                      Partager sur Facebook
                    </a>
                  </div>
                  <div>
                    <a href="#" onClick={() => handleShare(`https://twitter.com/share?url=${props.location.href}`)}>
                      Partager sur Twitter
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      onClick={() => handleShare(`https://www.linkedin.com/shareArticle?url=${props.location.href}`)}
                    >
                      Partager sur Linkedin
                    </a>
                  </div>
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
