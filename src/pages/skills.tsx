import * as React from 'react';

export default function Skills(): React.ReactElement {
  return (
    <>
      <h2>Langages et technologies</h2>
      <div id="techno-grid">
        <div className="language-list-container">
          <h4>Frontend</h4>
          <span>
            <a href="#">
              <img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" width="40" height="40" />
            </a>
            <a href="#">
              <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" width="40" height="40" />
            </a>
            <a href="https://www.javascript.com/">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.typescriptlang.org/">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                width="40"
                height="40"
              />
            </a>
            <a href="#">
              <img src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" width="40" height="40" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference">
              <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" width="40" height="40" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" width="40" height="40" />
            </a>
            <a href="https://www.cypress.io" target="_blank">
              <img
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg"
                alt="cypress"
                width="40"
                height="40"
              />
            </a>
            <a href="https://jestjs.io" target="_blank">
              <img
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg"
                alt="jest"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.w3schools.com/css/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />
            </a>
            <a href="https://sass-lang.com" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="40"
                height="40"
              />
            </a>

            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
              />
            </a>
          </span>
        </div>

        <div className="language-list-container">
          <h4>Backend</h4>
          <span>Spring Boot, Spring Security</span>
          <span>
            <a href="https://dev.java/">
              <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" width="40" height="40" />
            </a>
            <a href="https://kotlinlang.org/docs/home.html">
              <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" width="40" height="40" />
            </a>

            <a href="#">
              <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" width="40" height="40" />
            </a>
            <a href="https://gradle.org/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gradle/gradle-plain-wordmark.svg"
                alt="gradle"
                width="40"
                height="40"
              />
            </a>
          </span>
        </div>

        <div className="language-list-container">
          <h4>Outils</h4>
          <span>Github Actions, Sonarcloud, Snyk</span>
          <span>
            <a href="https://www.docker.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                alt="docker"
                width="40"
                height="40"
              />
            </a>
            <a href="https://nodejs.org" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
                height="40"
              />
            </a>
            <a href="https://git-scm.com/" target="_blank">
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
            </a>
            <a href="https://heroku.com" target="_blank">
              <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" />
            </a>
            <a href="https://www.jenkins.io" target="_blank">
              <img
                src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
                alt="jenkins"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
                height="40"
              />
            </a>

            <a href="https://www.postgresql.org" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="40"
                height="40"
              />
            </a>
            <a href="https://github.com/" target="_blank">
              <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="github" width="40" height="40" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
