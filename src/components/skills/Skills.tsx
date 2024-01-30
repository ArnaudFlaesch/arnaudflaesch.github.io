import './Skills.scss';

import { Icon, Tooltip } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import DetailBlock from '../detailBlock/DetailBlock';
import { ReactElement } from 'react';

export default function Skills(): React.ReactElement {
  const MAX_HEIGHT = 40;
  const MAX_WIDTH = 40;

  function createSkillBlock(skillName: string, icons: ReactElement[]): ReactElement {
    return (
      <DetailBlock
        titleComponent={
          <div className="skill-category">
            <h2>{skillName}</h2>
          </div>
        }
        detailComponent={<>{icons}</>}
      />
    );
  }

  function createIcon(key: string, image: ReactElement): ReactElement {
    return (
      <Tooltip key={key} title={key}>
        <Icon fontSize="large">{image}</Icon>
      </Tooltip>
    );
  }

  return (
    <>
      {createSkillBlock('Frontend', [
        createIcon(
          'Angular 2',
          <StaticImage
            src="../../images/icons/frontend/angular2.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Angular 2"
          />
        ),
        createIcon(
          'Sass',
          <StaticImage src="../../images/icons/frontend/sass.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Sass" />
        ),
        createIcon(
          'Jest',
          <StaticImage src="../../images/icons/frontend/jest.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Jest" />
        ),
        createIcon(
          'Typescript',
          <StaticImage
            src="../../images/icons/frontend/typescript.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Typescript"
          />
        ),
        createIcon(
          'CSS 3',
          <StaticImage src="../../images/icons/frontend/css3.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="CSS 3" />
        )
      ])}

      {createSkillBlock('Backend', [
        createIcon(
          'Java',
          <StaticImage src="../../images/icons/backend/java.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Java" />
        ),
        createIcon(
          'Kotlin',
          <StaticImage src="../../images/icons/backend/kotlin.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Kotlin" />
        ),
        createIcon(
          'Spring Boot',
          <StaticImage
            src="../../images/icons/backend/spring-boot.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Spring Boot"
          />
        )
      ])}

      {createSkillBlock('Outils', [
        createIcon(
          'Docker',
          <StaticImage src="../../images/icons/tools/docker.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Docker" />
        ),
        createIcon(
          'Git',
          <StaticImage src="../../images/icons/tools/git.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Git" />
        ),
        createIcon(
          'GitHub',
          <StaticImage src="../../images/icons/tools/github.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="GitHub" />
        ),
        createIcon(
          'Heroku',
          <StaticImage src="../../images/icons/tools/heroku.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Heroku" />
        ),
        createIcon(
          'Jenkins',
          <StaticImage src="../../images/icons/tools/jenkins.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Jenkins" />
        ),
        createIcon(
          'MySQL',
          <StaticImage src="../../images/icons/tools/mysql.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="MySQL" />
        ),
        createIcon(
          'PostgreSQL',
          <StaticImage
            src="../../images/icons/tools/postgresql.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="PostgreSQL"
          />
        ),
        createIcon(
          'Scrum',
          <StaticImage src="../../images/icons/tools/scrum.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Scrum" />
        ),
        createIcon(
          'Node.JS',
          <StaticImage src="../../images/icons/tools/nodejs.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Node.js" />
        )
      ])}

      {/* <div id="techno-grid">
        <div className="language-list-container">
          <h4>Frontend</h4>
          <span>
            <a href="#"></a>
            <a href="#">
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>
            <a href="https://www.javascript.com/">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>
           
            <a href="#">
              <img
                src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference">
              <img
                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>
            <a href="https://www.cypress.io" target="_blank">
              <img
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg"
                alt="cypress"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>

            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>
          </span>
        </div>

        <div className="language-list-container">
          <h4>Backend</h4>
          <span>Spring Boot, Spring Security</span>
          <span>
           

            <a href="https://gradle.org/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gradle/gradle-plain-wordmark.svg"
                alt="gradle"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>
            <a href="https://www.junit.org/" target="_blank">
              <StaticImage src="../../images/logos/backend/junit.svg" height={MAX_HEIGHT} alt={'junit'} />
            </a>
            <a href="https://www.Mockito.org/" target="_blank">
              Mockito
            </a>
          </span>
        </div>

        <div className="language-list-container">
          <h4>Outils</h4>
          <span>Github Actions, Sonarcloud, Snyk</span>
          <span>

            <a href="https://www.mongodb.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>

            <a href="https://www.sonarsource.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/s/sonarqube.svg"
                alt="sonarqube"
                width={MAX_WIDTH}
                height={MAX_HEIGHT}
              />
            </a>
            <a href="https://www.linux.org/" target="_blank">
              <StaticImage src="../../images/logos/tools/linux.svg" height={MAX_HEIGHT} alt={'linux'} />
            </a>
            <a href="https://www.debian.org/" target="_blank">
              <StaticImage src="../../images/logos/tools/debian.svg" width={MAX_WIDTH} alt={'debian'} />
            </a>
            <a href="https://snyk.io/" target="_blank">
              <StaticImage src="../../images/logos/tools/snyk.svg" height={MAX_HEIGHT} alt={'snyk'} />
            </a>
            <a href="https://www.sonarsource.com/" target="_blank">
              <StaticImage src="../../images/logos/tools/sonarcloud.svg" height={MAX_HEIGHT} alt={'sonarcloud'} />
            </a>
          </span>
        </div>
    
      </div>*/}
    </>
  );
}
