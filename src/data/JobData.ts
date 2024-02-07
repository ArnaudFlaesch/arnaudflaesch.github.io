import { IExperience } from '../model/IExperience';

export const jobData: IExperience[] = [
  {
    title: 'Développeur backend Java',
    dateDebut: new Date(Date.parse('2021-08-02')),
    name: 'Publicis Sapient France',
    location: 'Paris 20ème, France',
    logoPath: '/company-logos/publicis-sapient.png',
    description: `Développement sur la partie backend d'une application e-commerce dans une équipe agile d'une dizaine de personnes avec le framework SAFe.
• Développement de nouveaux endpoints permettant de récupérer la liste des produits déjà achetés par un utilisateur, les commandes et la liste des bons de livraisons associés aux différentes commandes.
• Écriture des tests unitaires et des tests d'intégrations associés aux différents développements.
Environnement technique : Spring Boot, Java 11, Kafka, microservices et MongoDB.
Participation à l'édition 2023 de la No Finish Line Paris avec d'autres coureurs de l'entreprise.`,
    skills: [],
    website: 'https://www.publicissapient.fr/'
  },
  {
    title: 'Développeur fullstack',
    dateDebut: new Date(Date.parse('2019-05-01')),
    dateFin: new Date(Date.parse('2021-04-30')),
    name: 'tbMaestro',
    location: 'Montréal, Canada',
    logoPath: '/company-logos/tbmaestro.png',
    description: `Volontariat International en Entreprise dans une équipe agile (Scrum) de 6 développeurs et un Product Owner. Réalisation de développements sur l'application SaaS de l'entreprise.Création du module de gestion des contrôles liés aux actifs.
    • Création du module de génération d'un compte rendu envoyé par mail contenant les différentes actions effectuées par les utilisateurs (création, modification et suppression d'un actif par exemple) durant une période configurable.
    • Module de gestion des espaces liés à un actif.
    • Migration des tests End-to-End de l'application de Selenium vers Cypress.
    Environnement technique : Angular 10, Kotlin, Sass, Spring Boot, PostgreSQL, MongoDB, Docker et Jenkins.`,
    skills: ['Angular 2', 'Java 8', 'SQL', 'Spring Boot'],
    website: 'https://www.tbmaestro.com/'
  },
  {
    title: 'Développeur fullstack',
    dateDebut: new Date(Date.parse('2017-09-18')),
    dateFin: new Date(Date.parse('2019-04-12')),
    name: 'Sopra Steria',
    location: 'Montreuil, France',
    logoPath: '/company-logos/sopra-steria.png',
    description: `Développement d'une application Web permettant de répertorier et gérer les limitations de vitesses sur les
    tronçons des routes de France. Équipe de 4 développeurs, une Scrum Master et un Product Owner.
    • Création d'IHM, affichage et gestion des données cartographiques côté front-end.
    • Développement de la partie back-end et gestion de la base de données.
    • Développement des tests unitaires.
    Environnement technique : Java (Struts 2), JQuery, SQL, CSS (Sass) et OpenLayers.
    Participation à l'édition 2017 de l'Ekiden de Paris avec d'autres coureurs de l'entreprise.
    `,
    skills: [
      'JavaScript ES6',
      'Java 8',
      'Tomcat 9',
      'Webpack',
      'Gulp',
      'CSS',
      'JQuery',
      'Sonar',
      'Jenkins',
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
    dateDebut: new Date(Date.parse('2016-9-01')),
    dateFin: new Date(Date.parse('2017-08-31')),
    location: 'Chennevières sur Marne, France',
    description: `Alternance dans le cadre de ma deuxième année de mastère à l'ESGI.Contrat de professionnalisation en alternance au sein du service dédié au portail magasin et à l'intranet du siège.
    Développement et maintenance d'outils à destination des services RH (entretiens annuels) ou encore du personnel chargé de la sécurité des magasins (gestion des incidents).
    Environnement technique : Java J2EE (JSF 2, Vaadin, Liferay, Tomcat Server).
    Équipe agile de 6 personnes.`,
    skills: ['Java 7', 'Vaadin 7', 'Liferay', 'JSF 2', 'Tomcat 7', 'SVN']
  },
  {
    title: 'Développeur Web',
    name: 'AB Cube',
    dateDebut: new Date(Date.parse('2015-10-01')),
    dateFin: new Date(Date.parse('2016-08-31')),
    location: 'Montreuil, France',
    description: `Alternance dans le cadre de ma première année de mastère à l'ESGI.
    Contrat de professionnalisation dans le cadre de ma quatrième année à l'ESGI.
Réalisation d’un outil de gestion des produits pour les laboratoires pharmaceutiques : ajout, import et export au format XML pour envoi aux autorités pharmaceutiques (EMA).
`,
    skills: ['PHP', 'SQL', 'JavaScript', 'Git']
  },
  {
    title: 'Développeur Java',
    name: 'GMF Assurances',
    dateDebut: new Date(Date.parse('2015-05-15')),
    dateFin: new Date(Date.parse('2015-07-31')),
    location: 'Levallois',
    description: `Stage de trois mois dans le cadre de ma troisième année de bachelor à l'ESGI.
     Stage de trois mois dans le cadre de ma troisième année à l'ESGI : participation à la refonte graphique d'une application web d'entreprise dans une équipe de 10 personnes.
        Le but était de changer les pages web en respectant les nouvelles normes graphiques et de remplacer le code de l'ancien framework utilisé (Struts 1) par celui du framework JSF 2.

    `,
    skills: ['Java 7', 'JSF 2', 'Struts 1', 'Git']
  },
  {
    title: 'Développeur Java / JS',
    name: 'La Réserve Paris',
    dateDebut: new Date(Date.parse('2014-06-02')),
    dateFin: new Date(Date.parse('2014-07-31')),
    location: 'Paris 8ème, France',
    description: `Stage de deux mois : développement d'une application web en PHP, SQL et JavaScript dont l'objectif est d'enregistrer des événements concernant les clients d'un hôtel ainsi que la gestion automatique d'un fichier permettant d'actualiser la liste des clients.`,
    skills: ['PHP', 'SQL', 'JavaScript', 'JQuery', 'CSS'],
    website: 'https://www.lareserve-paris.com/'
  }
];

export default jobData;
