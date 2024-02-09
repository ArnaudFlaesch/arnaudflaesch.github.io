import { Link, graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../../../layout/Layout';
import Seo from '../../Seo';
import Bio from '../../bio/Bio';

import { Facebook, Folder, LinkedIn, X } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import './TemplateBlogPost.scss';

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  location: Location;
}

export default function TemplateBlogPost(props: Readonly<IProps>): React.ReactElement {
  const post = props.data.markdownRemark;
  const { previous, next } = props.data;
  const href = props.location.href;
  const siteUrl = props.data.site.siteMetadata.siteUrl;

  const postTitle = post.frontmatter.title;
  const pubDate = post.frontmatter.date;
  const category = post.frontmatter.category;
  const tags = post.frontmatter.tags ?? [];
  const imageUrl = post.frontmatter.image;

  const blogUrlPrefix = '/blog/';

  function handleShare(url: string): void {
    window.open(encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700');
  }

  function createTagRef(tagName: string) {
    return (
      <span key={tagName} className="article-tag">
        <a href={`${siteUrl}${blogUrlPrefix}tag/${tagName}`}>#{tagName}</a>
      </span>
    );
  }

  return (
    <Layout blogView={true} location={props.location}>
      <>
        <article className="blog-post" itemScope itemType="https://schema.org/Article">
          <header>
            <h1 itemProp="headline">{postTitle}</h1>
            <div className="article-data">
              <p>{format(pubDate, 'dd MMMM yyyy', { locale: fr })}</p>
              {category && (
                <div className="article-category">
                  <a href={`${siteUrl}${blogUrlPrefix}category/${category}`}>
                    <Folder /> {category}
                  </a>
                </div>
              )}
            </div>
          </header>
          <img src={`${blogUrlPrefix}${imageUrl}`} alt="Illustration article" />
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
          <hr />
          <footer className="blog-post-footer">
            <Bio />
            <div className="footer-links">
              <div className="share-buttons">
                Partager ce billet de blog :
                <Tooltip title="Partager sur Facebook">
                  <a href="#" onClick={() => handleShare(`https://www.facebook.com/sharer.php?u=${href}`)}>
                    <Facebook />
                  </a>
                </Tooltip>
                <Tooltip title="Partager sur X">
                  <a href="#" onClick={() => handleShare(`https://twitter.com/share?url=${href}`)}>
                    <X />
                  </a>
                </Tooltip>
                <Tooltip title="Partager sur LinkedIn">
                  <a href="#" onClick={() => handleShare(`https://www.linkedin.com/shareArticle?url=${href}`)}>
                    <LinkedIn />
                  </a>
                </Tooltip>
              </div>

              <div className="article-tags">{tags.map(createTagRef)}</div>
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
      </>
    </Layout>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Head = ({ location, data }: { location: Location; data: any }) => {
  const post = data.markdownRemark;
  const pubDate = post.frontmatter.date;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const blogUrlPrefix = '/blog/';

  const ogTagPubDate = {
    property: 'og:pubdate',
    content: pubDate
  };
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      image={`${siteUrl}${blogUrlPrefix}${post.frontmatter.image}`}
      location={location.pathname}
      type="article"
      meta={[ogTagPubDate]}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        image
        category
        tags
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
