import Experience from "./Experience";

const jobs: Experience[] = [
    {
        id : 7,
        title: "Développeur Java / JS",
        dateDebut: new Date(2017, 9, 18),
        name : "Sopra Steria",
        location: "Montreuil - 93340",
        description: "CDI Développement d'une application Web de gestion des limitations de vitesse sur les routes de France.",
        skills: ["JavaScript ES6", "Java 8", "Tomcat 9", "Webpack", "Gulp", "CSS", "Struts 2", "SQL", "Spring Boot", "Sass", "Git"],
        isCurrentExperience: true
    },
    {
        id : 6,
        title: "Développeur Java",
        name : "Franprix - Leader Price",
        dateDebut: new Date(2016, 10, 1),
        dateFin: new Date(2017, 8, 31),
        location: "Chennevières sur Marne - 94190",
        description: "Développeur Liferay / Alternance dans le cadre de ma deuxième année de mastère à l'ESGI.",
        skills: ["Java 7", "Vaadin 7", "Liferay", "JSF 2", "Tomcat 7", "SVN"],
        isCurrentExperience: false
    },
    {
        id : 5,
        title: "Développeur Web",
        name : "AB Cube",
        dateDebut: new Date(2015, 10, 1),
        dateFin: new Date(2016, 8, 31),
        location: "Montreuil - 93340",
        description: "Développeur Web / Alternance dans le cadre de ma première année de mastère à l'ESGI.",
        skills: ["PHP", "SQL", "JavaScript", "Git"],
        isCurrentExperience: false
    },
    {
        id : 4,
        title: "Développeur Java",
        name : "GMF Assurances",
        dateDebut: new Date(2015, 5, 15),
        dateFin: new Date(2015, 7, 31),
        location: "Levallois",
        description: "Développeur Java / Stage de trois mois dans le cadre de ma troisième année de bachelor à l'ESGI.",
        skills: ["Java 7", "JSF 2", "Struts 1", "Git"],
        isCurrentExperience: false
    },
    {
        id : 3,
        title: "Développeur Java / JS",
        name : "La Réserve",
        dateDebut: new Date(2014, 6, 1),
        dateFin: new Date(2014, 7, 31),
        location: "Paris 08è",
        description: "Stage de deux mois ",
        skills: ["PHP", "SQL", "JavaScript", "JQuery"],
        isCurrentExperience: false
    },
    {
        id : 2,
        title: "Développeur Web",
        name : "Accueil Cambodgien",
        dateDebut: new Date(2014, 1, 2),
        dateFin: new Date(2014, 2, 13),
        location: "Saint-Mandé 94300",
        description: "Réalisation d'un site web e-commerce pour une association.",
        skills: ["Wordpress", "PHP", "SQL"],
        isCurrentExperience: false
    },
    {
        id : 1,
        title: "Développeur PHP",
        name : "Free / MCRA",
        dateDebut: new Date(2013, 5, 31),
        dateFin: new Date(2013, 6, 27),
        location: "Paris 08è",
        description: "Stage d'un mois dans le cadre de ma première année de BTS SIO.",
        skills: ["PHP", "SQL", "JavaScript"],
        isCurrentExperience: false
    }
];

export default jobs;