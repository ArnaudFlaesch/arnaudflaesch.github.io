import './index.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Contact from '../components/contact/Contact';
import Layout from '../layout/layout';
import Post from '../components/post/Post';
import Seo from '../components/seo';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import Skills from '../components/skills/Skills';
import CV from '../components/cv/CV';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo title="Home" />

      <div id="home">
        <div id="presentation">
          <h1>Bonjour !</h1>
          <p>
            Je m'appelle Arnaud et je suis développeur fullstack.
            <br />
            Vous trouverez sur ce site une présentation de mon parcours ainsi que les projets personnels sur lesquels je
            travaille.
          </p>
        </div>

        <div id="cv">
          <h2>Curriculum Vitae</h2>
          <CV />
        </div>

        <div id="technos">
          <h2>Langages et technologies</h2>
          <Skills />
        </div>

        <div id="contact">
          <h2>Formulaire de contact</h2>
          <Contact />
        </div>

        <div id="blog">
          <h2>Blog</h2>
          <ol>
            {posts.map((post: IPost) => (
              <Post key={post.frontmatter.title} {...post} />
            ))}
          </ol>
        </div>

        {/**
        <h3>Projets en cours</h3>
        <Projects />
           */}
      </div>
    </Layout>
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
