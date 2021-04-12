import { ISkill } from './ISkill';

const skills: ISkill[] = [
  {
    id: 'chartFront',
    level: [8, 7, 6, 5, 6, 7],
    skill: ['Angular 2', 'JQuery', 'TypeScript', 'React', 'Webpack', 'Gulp'],
    title: 'Front-End',
  },
  {
    id: 'chartBack',
    level: [7, 8, 6, 6],
    skill: ['Spring Boot', 'JSF 2', 'Express', 'PHP'],
    title: 'Back-End',
  },
  {
    id: 'chartBDD',
    level: [7, 5, 4],
    skill: ['MySQL', 'Postgresql', 'MongoDB'],
    title: 'Bases de données',
  },
  {
    id: 'chartTU',
    level: [7, 6, 6, 7],
    skill: ['JUnit', 'Mockito', 'Karma', 'Mocha'],
    title: 'Tests Unitaires',
  },
  {
    id: 'chartDevOps',
    level: [8, 7, 6, 6],
    skill: ['Git', 'Travis CI', 'Jenkins', 'SonarQube'],
    title: 'DevOps',
  },
  {
    id: 'chartOs',
    level: [9, 7, 5],
    skill: ['Windows', 'Debian', 'Fedora'],
    title: "Systèmes d'exploitation",
  },
  {
    id: 'chartLanguages',
    level: [7, 6, 6],
    skill: ['Python', 'C', 'C++'],
    title: 'Autres langages',
  },
];

export default skills;
