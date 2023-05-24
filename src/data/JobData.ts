import Experience from '../components/curriculum/Experience';

const jobData: Experience[] = [
  {
    id: 9,
    title: 'Software Engineer',
    dateDebut: new Date(Date.parse('2021-08-02')),
    name: 'Publicis Sapient France',
    location: 'Paris - 75020',
    description: 'CDI',
    skills: ['Angular 2', 'Java 8', 'SQL', 'Spring Boot'],
    isCurrentExperience: true
  },
  {
    id: 8,
    title: 'Développeur Java / JS',
    dateDebut: new Date(Date.parse('2019-05-01')),
    dateFin: new Date(Date.parse('2021-04-30')),
    name: 'tbMaestro',
    location: 'Montréal - Canada',
    description: 'V.I.E.',
    skills: ['Angular 2', 'Java 8', 'SQL', 'Spring Boot'],
    isCurrentExperience: false
  },
  {
    id: 7,
    title: 'Développeur Java / JS',
    dateDebut: new Date(Date.parse('2017-08-18')),
    dateFin: new Date(Date.parse('2018-04-12')),
    name: 'Sopra Steria',
    location: 'Montreuil - 93340',
    description:
      "CDI Développement d'une application Web de gestion des limitations de vitesse sur les routes de France.",
    skills: [
      'JavaScript ES6',
      'Java 8',
      'Tomcat 9',
      'Webpack',
      'Gulp',
      'CSS',
      'Struts 2',
      'SQL',
      'Spring Boot',
      'Sass',
      'Git'
    ],
    isCurrentExperience: false
  },
  {
    id: 6,
    title: 'Développeur Java',
    name: 'Franprix - Leader Price',
    dateDebut: new Date(Date.parse('2015-10-01')),
    dateFin: new Date(Date.parse('2017-08-31')),
    location: 'Chennevières sur Marne - 94190',
    description: "Développeur Liferay / Alternance dans le cadre de ma deuxième année de mastère à l'ESGI.",
    skills: ['Java 7', 'Vaadin 7', 'Liferay', 'JSF 2', 'Tomcat 7', 'SVN']
  },
  {
    id: 5,
    title: 'Développeur Web',
    name: 'AB Cube',
    dateDebut: new Date(Date.parse('2015-10-01')),
    dateFin: new Date(Date.parse('2015-08-31')),
    location: 'Montreuil - 93340',
    description: "Développeur Web / Alternance dans le cadre de ma première année de mastère à l'ESGI.",
    skills: ['PHP', 'SQL', 'JavaScript', 'Git']
  },
  {
    id: 4,
    title: 'Développeur Java',
    name: 'GMF Assurances',
    dateDebut: new Date(Date.parse('2015-05-15')),
    dateFin: new Date(Date.parse('2015-07-31')),
    location: 'Levallois',
    description: "Développeur Java / Stage de trois mois dans le cadre de ma troisième année de bachelor à l'ESGI.",
    skills: ['Java 7', 'JSF 2', 'Struts 1', 'Git']
  },
  {
    id: 3,
    title: 'Développeur Java / JS',
    name: 'La Réserve',
    dateDebut: new Date(Date.parse('2014-06-02')),
    dateFin: new Date(Date.parse('2014-07-31')),
    location: 'Paris 08è',
    description: 'Stage de deux mois ',
    skills: ['PHP', 'SQL', 'JavaScript', 'JQuery']
  },
  {
    id: 2,
    title: 'Développeur Web',
    name: 'Accueil Cambodgien',
    dateDebut: new Date(Date.parse('2014-01-13')),
    dateFin: new Date(Date.parse('2014-02-14')),
    location: 'Saint-Mandé 94300',
    description: "Réalisation d'un site web e-commerce pour une association.",
    skills: ['Wordpress', 'PHP', 'SQL']
  },
  {
    id: 1,
    title: 'Développeur PHP',
    name: 'Free / MCRA',
    dateDebut: new Date(Date.parse('2013-05-31')),
    dateFin: new Date(Date.parse('2013-06-27')),
    location: 'Paris 08è',
    description: "Stage d'un mois dans le cadre de ma première année de BTS SIO.",
    skills: ['PHP', 'SQL', 'JavaScript']
  }
];

export default jobData;
