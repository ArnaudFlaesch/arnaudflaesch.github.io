import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../../layout/layout';
import Seo from '../../seo';
import Bio from '../../bio/Bio';

import './template-blog-post.scss';
import { Facebook, LinkedIn, X } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip/Tooltip';

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  location: Location;
}

export default function BlogPostTemplate(props: Readonly<IProps>): React.ReactElement {
  const post = props.data.markdownRemark;
  const { previous, next } = props.data;

  function handleShare(url: string): void {
    window.open(encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700');
  }

  return (
    <Layout location={props.location}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <div>
        <article className="blog-post" itemScope itemType="https://schema.org/Article">
          <div>
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </header>
          </div>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
          <hr />
          <footer className="blog-post-footer">
            <Bio />
            <div className="share-buttons">
              Partager ce billet de blog :
              <div>
                <Tooltip title="Partager sur Facebook">
                  <a
                    href="#"
                    onClick={() => handleShare(`https://www.facebook.com/sharer.php?u=${props.location.href}`)}
                  >
                    <Facebook />
                  </a>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Partager sur X">
                  <a href="#" onClick={() => handleShare(`https://twitter.com/share?url=${props.location.href}`)}>
                    <X />
                  </a>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Partager sur LinkedIn">
                  <a
                    href="#"
                    onClick={() => handleShare(`https://www.linkedin.com/shareArticle?url=${props.location.href}`)}
                  >
                    <LinkedIn />
                  </a>
                </Tooltip>
              </div>
            </div>
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
        date(formatString: "DD MMMM, YYYY", locale: "fr")
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
