import './index.css';

import { graphql } from 'gatsby';
import React from 'react';

import Contact from '../components/contact/Contact';
import Layout from '../layout/layout';
import Post from '../components/post/Post';
import Seo from '../components/seo';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import Skills from './skills/skills';
import Projects from '../components/projects/projects';
import CV from '../components/cv/CV';

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

        <div id="contact">
          <Contact />
        </div>

        <div>
          <h2>Curriculum Vitae</h2>
          <CV />
        </div>
        {/*
        <div id="cv">
          <h2>Curriculum Vitae</h2>
          <iframe id="cv-container" title="Curriculum Vitae" src="/Curriculum Vitae Arnaud Flaesch.pdf"></iframe>
        </div>
  */}
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

        <h3>Projets en cours</h3>
        <Projects />
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
