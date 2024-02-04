import './index.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Contact from '../components/contact/Contact';
import Cv from '../components/cv/Cv';
import Post from '../components/post/Post';
import Projects from '../components/projects/projects';
import Skills from '../components/skills/Skills';
import Layout from '../layout/layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const posts = props.data.allMarkdownRemark.nodes;
  const description = props.data.site.siteMetadata.description;

  return (
    <Layout location={props.location}>
      <div id="home">
        <div id="presentation">
          <h1>Bonjour !</h1>
          <div>{description}</div>
        </div>

        <div id="cv">
          <h2>Curriculum Vitae</h2>
          <Cv />
        </div>

        <div id="technos">
          <h2>Langages et technologies</h2>
          <Skills />
        </div>

        <div id="projets">
          <h2>Projets en cours</h2>
          <Projects />
        </div>

        <div id="contact">
          <h2>Formulaire de contact</h2>
          <Contact />
        </div>

        <div>
          <h2>
            <a href="/blog">Blog</a>
          </h2>
          <ol>
            {posts.map((post: IPost) => (
              <Post key={post.frontmatter.title} {...post} />
            ))}
          </ol>
        </div>
      </div>
      <span id="blank"></span>
    </Layout>
  );
}

export const Head = () => <Seo location={''} />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
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
