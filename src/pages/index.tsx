import { graphql } from 'gatsby';
import React from 'react';
import './index.css';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Skills from './skills/skills';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import Post from '../components/post/Post';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <div>
      <Layout>
        <Seo title="Home" />
        <h1>Bonjour !</h1>
        <p>
          Je m'appelle Arnaud et je suis développeur fullstack.
          <br />
          Vous trouverez sur ce site une présentation de mon parcours ainsi que les projets personnels sur lesquels je
          travaille.
        </p>

        <div id="cv">
          <h2>Curriculum Vitae</h2>
          <iframe id="cv-container" title="Curriculum Vitae" src="/Curriculum Vitae Arnaud Flaesch.pdf"></iframe>
        </div>

        <div id="technos">
          <Skills />
        </div>

        {
          <ol>
            {posts.map((post: IPost) => (
              <Post key={post.frontmatter.title} {...post} />
            ))}
          </ol>
        }
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
