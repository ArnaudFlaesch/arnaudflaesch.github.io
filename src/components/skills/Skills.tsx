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
          'ReactJS',
          <StaticImage
            src="../../images/icons/frontend/reactjs.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="ReactJS"
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
          'JQuery',
          <StaticImage
            src="../../images/icons/frontend/jquery.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="JQuery"
          />
        ),
        createIcon(
          'Javascript',
          <StaticImage
            src="../../images/icons/frontend/javascript.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Javascript"
          />
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
          'Cypress',
          <StaticImage
            src="../../images/icons/frontend/cypress.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Cypress"
          />
        ),
        createIcon(
          'HTML 5',
          <StaticImage src="../../images/icons/frontend/html.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="HTML 5" />
        ),
        createIcon(
          'CSS 3',
          <StaticImage src="../../images/icons/frontend/css3.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="CSS 3" />
        ),
        createIcon(
          'TailwindCSS',
          <StaticImage
            src="../../images/icons/frontend/tailwindCSS.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="TailwindCSS"
          />
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
            src="../../images/icons/backend/springboot.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Spring Boot"
          />
        ),
        createIcon(
          'JUnit 5',
          <StaticImage src="../../images/icons/backend/junit.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="JUnit 5" />
        ),
        createIcon(
          'Gradle',
          <StaticImage src="../../images/icons/backend/gradle.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Gradle" />
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
          'MongoDB',
          <StaticImage src="../../images/icons/tools/mongodb.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="MongoDB" />
        ),
        createIcon(
          'Scrum',
          <StaticImage src="../../images/icons/tools/scrum.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Scrum" />
        ),
        createIcon(
          'Node.JS',
          <StaticImage src="../../images/icons/tools/nodejs.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Node.js" />
        ),
        createIcon(
          'Github Actions',
          <StaticImage
            src="../../images/icons/tools/githubactions.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Github Actions"
          />
        ),
        createIcon(
          'Linux',
          <StaticImage src="../../images/icons/tools/linux.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Linux" />
        ),
        createIcon(
          'Snyk',
          <StaticImage src="../../images/icons/tools/snyk.png" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Snyk" />
        ),
        createIcon(
          'Sonarcloud',
          <StaticImage
            src="../../images/icons/tools/sonarcloud.png"
            width={MAX_WIDTH}
            height={MAX_HEIGHT}
            alt="Sonarcloud"
          />
        )
      ])}
    </>
  );
}
