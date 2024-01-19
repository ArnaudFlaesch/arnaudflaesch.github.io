import { IExperience } from '../model/IExperience';

export const jobData: IExperience[] = [
  {
    title: 'Développeur backend Java',
    dateDebut: new Date(Date.parse('2021-08-02')),
    name: 'Publicis Sapient France',
    location: 'Paris 20è, France',
    description: `Développement sur la partie backend d'une application e-commerce dans une équipe agile d'une dizaine
    de personnes avec le framework SAFe.
• Développement de nouveaux endpoints permettant de récupérer la liste des produits déjà achetés
par un utilisateur, les commandes et la liste des bons de livraisons associés aux différentes
commandes.
• Écriture des tests unitaires et des tests d'intégrations associés aux différents développements.
Environnement technique : Spring Boot, Java 11, Kafka, microservices et MongoDB.`,
    skills: [],
    website: 'https://www.publicissapient.fr/'
  },
  {
    title: 'Développeur fullstack',
    dateDebut: new Date(Date.parse('2019-05-01')),
    dateFin: new Date(Date.parse('2021-04-30')),
    name: 'tbMaestro',
    location: 'Montréal - Canada',
    description: `Volontariat International en Entreprise dans une équipe agile (Scrum) de 6 développeurs et un Product
    Owner. Réalisation de développements sur l'application SaaS de l'entreprise.Création du module de
    gestion des contrôles liés aux actifs.
    • Création du module de génération d'un compte rendu envoyé par mail contenant les différentes
    actions effectuées par les utilisateurs (création, modification et suppression d'un actif par exemple)
    durant une période configurable.
    • Module de gestion des espaces liés à un actif.
    • Migration des tests End-to-End de l'application de Selenium vers Cypress.
    Environnement technique : Angular 10, Kotlin, Sass, Spring Boot, PostgreSQL, MongoDB, Docker et
    Jenkins.`,
    skills: ['Angular 2', 'Java 8', 'SQL', 'Spring Boot'],
    website: 'https://www.tbmaestro.com/'
  },
  {
    title: 'Développeur fullstack',
    dateDebut: new Date(Date.parse('2017-09-18')),
    dateFin: new Date(Date.parse('2018-04-12')),
    name: 'Sopra Steria',
    location: 'Montreuil - 93340',
    description: `Développement d'une application Web permettant de répertorier et gérer les limitations de vitesses sur les
    tronçons des routes de France. Équipe de 4 développeurs, une Scrum Master et un Product Owner.
    • Création d'IHM, affichage et gestion des données cartographiques côté front-end.
    • Développement de la partie back-end et gestion de la base de données.
    • Développement des tests unitaires.
    Environnement technique : Java (Struts 2), JQuery, SQL, CSS (Sass) et OpenLayers`,
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
    website: 'https://www.soprasteria.com/fr'
  },
  {
    title: 'Développeur Java',
    name: 'Franprix - Leader Price',
    dateDebut: new Date(Date.parse('2015-10-01')),
    dateFin: new Date(Date.parse('2017-08-31')),
    location: 'Chennevières sur Marne - 94190',
    description: "Développeur Liferay / Alternance dans le cadre de ma deuxième année de mastère à l'ESGI.",
    skills: ['Java 7', 'Vaadin 7', 'Liferay', 'JSF 2', 'Tomcat 7', 'SVN']
  },
  {
    title: 'Développeur Web',
    name: 'AB Cube',
    dateDebut: new Date(Date.parse('2015-10-01')),
    dateFin: new Date(Date.parse('2015-08-31')),
    location: 'Montreuil - 93340',
    description: "Développeur Web / Alternance dans le cadre de ma première année de mastère à l'ESGI.",
    skills: ['PHP', 'SQL', 'JavaScript', 'Git']
  },
  {
    title: 'Développeur Java',
    name: 'GMF Assurances',
    dateDebut: new Date(Date.parse('2015-05-15')),
    dateFin: new Date(Date.parse('2015-07-31')),
    location: 'Levallois',
    description: "Développeur Java / Stage de trois mois dans le cadre de ma troisième année de bachelor à l'ESGI.",
    skills: ['Java 7', 'JSF 2', 'Struts 1', 'Git']
  },
  {
    title: 'Développeur Java / JS',
    name: 'La Réserve',
    dateDebut: new Date(Date.parse('2014-06-02')),
    dateFin: new Date(Date.parse('2014-07-31')),
    location: 'Paris 08è',
    description: 'Stage de deux mois ',
    skills: ['PHP', 'SQL', 'JavaScript', 'JQuery']
  },
  {
    title: 'Développeur Web',
    name: 'Accueil Cambodgien',
    dateDebut: new Date(Date.parse('2014-01-13')),
    dateFin: new Date(Date.parse('2014-02-14')),
    location: 'Saint-Mandé 94300',
    description: "Réalisation d'un site web e-commerce pour une association.",
    skills: ['Wordpress', 'PHP', 'SQL']
  },
  {
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
