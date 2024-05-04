import './page-styles/index.scss';

import { Link, graphql } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Post from '../components/blog/post/Post';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const description = props.data.site.siteMetadata.description;
  const posts = props.data.allMarkdownRemark.nodes;
  const rssFeedFile = props.data.site.siteMetadata.rss;

  const pageTitle = 'Bonjour !';

  return (
    <Layout title={pageTitle} description={description} location={props.location}>
      <div id="home-page">
        <div id="site-links">
          <h2>Contenu du site :</h2>
          <ul>
            <li>
              <Link to="/cv/">Mon parcours détaillé et mon CV téléchargeable</Link>
            </li>
            <li>
              <Link to="/projets/">
                Les projets personnels sur lesquels je travaille occasionnellement, hébergés sur GitHub
              </Link>
            </li>
            <li>
              <Link to="/blog/">Des articles de blog</Link> (<a href={rssFeedFile}>flux RSS</a>)
            </li>
            <li>
              <Link to="/contact/">Un formulaire de contact pour m'envoyer un email</Link>
            </li>
          </ul>
        </div>

        <h2 id="blog-title">
          <a href="/blog">Articles récents</a>
        </h2>
        <ol>
          {posts.map((post: IPost) => (
            <li key={post.fields.slug}>
              <Post {...post} />
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo location={''} />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        rss
      }
    }
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
          image
        }
      }
    }
  }
`;
