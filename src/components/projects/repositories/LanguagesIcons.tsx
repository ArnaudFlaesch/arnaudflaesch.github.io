import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';
const ICON_HEIGHT = 40;
const ICON_WIDTH = 40;

export function AngularIcon() {
  return (
    <TooltipIcon
      tooltip="Angular 2"
      image={
        <StaticImage
          src="../../../images/icons/frontend/angular2.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Angular 2"
        />
      }
    />
  );
}
export function JestIcon() {
  return (
    <TooltipIcon
      tooltip="Jest"
      image={
        <StaticImage src="../../../images/icons/frontend/jest.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Jest" />
      }
    />
  );
}
export function SassIcon() {
  return (
    <TooltipIcon
      tooltip="Sass"
      image={
        <StaticImage src="../../../images/icons/frontend/sass.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Sass" />
      }
    />
  );
}
export function CypressIcon() {
  return (
    <TooltipIcon
      tooltip="Cypress"
      image={
        <StaticImage
          src="../../../images/icons/frontend/cypress.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Cypress"
        />
      }
    />
  );
}
export function KotlinIcon() {
  return (
    <TooltipIcon
      tooltip="Kotlin"
      image={
        <StaticImage
          src="../../../images/icons/backend/kotlin.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Kotlin"
        />
      }
    />
  );
}
export function SpringBootIcon() {
  return (
    <TooltipIcon
      tooltip="Spring Boot"
      image={
        <StaticImage
          src="../../../images/icons/backend/spring.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Spring Boot"
        />
      }
    />
  );
}
export function JUnitIcon() {
  return (
    <TooltipIcon
      tooltip="JUnit 5"
      image={
        <StaticImage
          src="../../../images/icons/backend/junit.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="JUnit 5"
        />
      }
    />
  );
}
export function GradleIcon() {
  return (
    <TooltipIcon
      tooltip="Gradle"
      image={
        <StaticImage
          src="../../../images/icons/backend/gradle.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Gradle"
        />
      }
    />
  );
}
export function DockerIcon() {
  return (
    <TooltipIcon
      tooltip="Docker"
      image={
        <StaticImage
          src="../../../images/icons/tools/docker.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Docker"
        />
      }
    />
  );
}
export function PostgreSQLIcon() {
  return (
    <TooltipIcon
      tooltip="PostgreSQL"
      image={
        <StaticImage
          src="../../../images/icons/tools/postgresql.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="PostgreSQL"
        />
      }
    />
  );
}
export function SnykIcon() {
  return (
    <TooltipIcon
      tooltip="Snyk"
      image={
        <StaticImage src="../../../images/icons/tools/snyk.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Snyk" />
      }
    />
  );
}
export function ReactJSIcon() {
  return (
    <TooltipIcon
      tooltip="ReactJS"
      image={
        <StaticImage
          src="../../../images/icons/frontend/reactjs.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="ReactJS"
        />
      }
    />
  );
}
export function GatsbyIcon() {
  return (
    <TooltipIcon
      tooltip="Gatsby"
      image={
        <StaticImage
          src="../../../images/icons/frontend/gatsby.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Gatsby"
        />
      }
    />
  );
}
export function TypeScriptIcon() {
  return (
    <TooltipIcon
      tooltip="TypeScript"
      image={
        <StaticImage
          src="../../../images/icons/frontend/typescript.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="TypeScript"
        />
      }
    />
  );
}
export function GithubActionsIcon() {
  return (
    <TooltipIcon
      tooltip="Github Actions"
      image={
        <StaticImage
          src="../../../images/icons/tools/github-actions.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Github Actions"
        />
      }
    />
  );
}
export function GraphQLIcon() {
  return (
    <TooltipIcon
      tooltip="GraphQL"
      image={
        <StaticImage
          src="../../../images/icons/tools/graphql.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="GraphQL"
        />
      }
    />
  );
}
