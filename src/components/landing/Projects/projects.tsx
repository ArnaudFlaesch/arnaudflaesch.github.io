import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import  './projects.scss';

export const Projects = () => {
  const { theme }  = useContext(ThemeContext);
  
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <div className="wrapper container" id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {edges.map(({ node }) => (
          <a className="item" key={node.id} href={node.url} target="_blank" rel="noopener noreferrer">
            <div className={"card " + theme}>
              <div className="content">
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </div>
              <div className="titleWrap">
                <div className="stats" >
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.forkCount}</span>
                  </div>
                </div>
                <div className="stats">
                  <div className="languages">
                    {
                      node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
