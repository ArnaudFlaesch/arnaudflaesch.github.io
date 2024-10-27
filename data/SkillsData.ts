interface ISkill {
  name: string;
  extension?: string;
}

const frontendSkills: ISkill[] = [
  { name: 'Angular 2' },
  { name: 'ReactJS', extension: 'png' },
  { name: 'Sass' },
  { name: 'Jest' },
  { name: 'JQuery', extension: 'png' },
  { name: 'Javascript' },
  { name: 'Typescript' },
  { name: 'Cypress', extension: 'png' },
  { name: 'Gatsby' },
  { name: 'ChartJS' },
  { name: 'HTML', extension: 'png' },
  { name: 'CSS', extension: 'png' },
  { name: 'TailwindCSS', extension: 'png' }
];

const backendSkills: ISkill[] = [
  { name: 'Java', extension: 'png' },
  { name: 'Kotlin' },
  { name: 'Spring' },
  { name: 'JUnit', extension: 'png' },
  { name: 'Gradle', extension: 'png' }
];

const toolsSkills: ISkill[] = [
  { name: 'Docker' },
  { name: 'Git' },
  { name: 'GitHub', extension: 'png' },
  { name: 'Github-Actions', extension: 'png' },
  { name: 'Jenkins' },
  { name: 'Heroku' },
  { name: 'GraphQL', extension: 'png' },
  { name: 'MySQL', extension: 'png' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB', extension: 'png' },
  { name: 'Scrum', extension: 'png' },
  { name: 'Nodejs' },
  { name: 'Linux', extension: 'png' },
  { name: 'Snyk' },
  { name: 'Sonarcloud', extension: 'png' }
];

export const skills: { label: string; skills: ISkill[] }[] = [
  { label: 'Frontend', skills: frontendSkills },
  { label: 'Backend', skills: backendSkills },
  { label: 'TOOLS', skills: toolsSkills }
];
