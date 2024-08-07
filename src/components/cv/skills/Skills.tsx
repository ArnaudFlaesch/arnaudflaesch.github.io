import './Skills.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { ReactElement } from 'react';
import DetailBlock from '../../detailBlock/DetailBlock';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';
import { useTranslation } from 'react-i18next';

export default function Skills(): React.ReactElement {
  const MAX_HEIGHT = 40;
  const MAX_WIDTH = 40;

  const { t } = useTranslation('cv');

  function createSkillBlock(skillName: string, icons: ReactElement[]): ReactElement {
    return (
      <DetailBlock
        titleComponent={<h3 className="skill-category-title">{skillName}</h3>}
        detailComponent={<>{icons}</>}
      />
    );
  }

  return (
    <div id="skills-list">
      {createSkillBlock('Frontend', [
        TooltipIcon({
          tooltip: 'Angular 2',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/angular2.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Angular 2"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'ReactJS',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/reactjs.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="ReactJS"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Sass',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/sass.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Sass"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Jest',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/jest.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Jest"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'JQuery',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/jquery.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="JQuery"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Javascript',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/javascript.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Javascript"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Typescript',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/typescript.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Typescript"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Cypress',
          image: <StaticImage src="../../../images/icons/frontend/cypress.png" height={MAX_HEIGHT} alt="Cypress" />
        }),
        TooltipIcon({
          tooltip: 'Gatsby',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/gatsby.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Gatsby"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Chart.js',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/chartjs.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Chart.js"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'HTML 5',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/html.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="HTML 5"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'CSS 3',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/css3.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="CSS 3"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'TailwindCSS',
          image: (
            <StaticImage
              src="../../../images/icons/frontend/tailwindcss.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="TailwindCSS"
            />
          )
        })
      ])}

      {createSkillBlock('Backend', [
        TooltipIcon({
          tooltip: 'Java',
          image: (
            <StaticImage
              src="../../../images/icons/backend/java.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Java"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Kotlin',
          image: (
            <StaticImage
              src="../../../images/icons/backend/kotlin.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Kotlin"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Spring',
          image: (
            <StaticImage
              src="../../../images/icons/backend/spring.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Spring"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'JUnit 5',
          image: (
            <StaticImage
              src="../../../images/icons/backend/junit.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="JUnit 5"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Gradle',
          image: (
            <StaticImage
              src="../../../images/icons/backend/gradle.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Gradle"
            />
          )
        })
      ])}

      {createSkillBlock(t('TOOLS'), [
        TooltipIcon({
          tooltip: 'Docker',
          image: (
            <StaticImage
              src="../../../images/icons/tools/docker.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Docker"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Git',
          image: (
            <StaticImage src="../../../images/icons/tools/git.svg" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Git" />
          )
        }),
        TooltipIcon({
          tooltip: 'GitHub',
          image: (
            <StaticImage
              src="../../../images/icons/tools/github.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="GitHub"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Github Actions',
          image: (
            <StaticImage
              src="../../../images/icons/tools/github-actions.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Github Actions"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Jenkins',
          image: (
            <StaticImage
              src="../../../images/icons/tools/jenkins.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Jenkins"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Heroku',
          image: (
            <StaticImage
              src="../../../images/icons/tools/heroku.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Heroku"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'GraphQL',
          image: (
            <StaticImage
              src="../../../images/icons/tools/graphql.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="GraphQL"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'MySQL',
          image: (
            <StaticImage
              src="../../../images/icons/tools/mysql.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="MySQL"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'PostgreSQL',
          image: (
            <StaticImage
              src="../../../images/icons/tools/postgresql.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="PostgreSQL"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'MongoDB',
          image: (
            <StaticImage
              src="../../../images/icons/tools/mongodb.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="MongoDB"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Scrum',
          image: (
            <StaticImage
              src="../../../images/icons/tools/scrum.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Scrum"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Node.JS',
          image: (
            <StaticImage
              src="../../../images/icons/tools/nodejs.svg"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Node.js"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Linux',
          image: (
            <StaticImage
              src="../../../images/icons/tools/linux.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Linux"
            />
          )
        }),
        TooltipIcon({
          tooltip: 'Snyk',
          image: (
            <StaticImage src="../../../images/icons/tools/snyk.svg" width={MAX_WIDTH} height={MAX_HEIGHT} alt="Snyk" />
          )
        }),
        TooltipIcon({
          tooltip: 'Sonarcloud',
          image: (
            <StaticImage
              src="../../../images/icons/tools/sonarcloud.png"
              width={MAX_WIDTH}
              height={MAX_HEIGHT}
              alt="Sonarcloud"
            />
          )
        })
      ])}
    </div>
  );
}
