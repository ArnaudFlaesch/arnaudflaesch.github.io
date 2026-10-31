import { checkSeo } from "../../support/seo";

describe("CV page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#portfolio-header #url-list > a").contains("CV").click();
  });

  it("Should display the CV page", () => {
    // Download CV
    const cvFilename = "Curriculum Vitae Arnaud Flaesch.pdf";
    cy.readFile(`${Cypress.config("downloadsFolder")}/${cvFilename}`).should("not.exist");
    cy.get("#cv-download-button").should("have.text", "Télécharger mon CV");
    cy.get("#cv-download-button").click();
    cy.readFile(`${Cypress.config("downloadsFolder")}/${cvFilename}`);

    const blockTitles = [
      "Développeur d'applications",
      "Développeur backend Java",
      "Développeur fullstack",
      "Développeur fullstack",
      "Développeur Java",
      "Développeur Web",
      "Développeur Java",
      "Développeur Java / JS",
      "Mastère Architecture des Logiciels",
      "Bachelor Architecture des Logiciels",
      "Lycée privé Saint Michel de Picpus",
      "Brevet de Technicien Supérieur",
      "Licence Mathématiques - Informatique",
      "Lycée privé Massillon",
      "Baccalauréat Économique et Social",
      "Frontend",
      "Backend",
      "Outils",
      "Course à pieds",
      "Bénévolat",
      "Voyages"
    ];
    cy.get("h3").each((blockTitle, index) => {
      expect(blockTitle.text()).to.eq(blockTitles[index]);
    });

    checkSeo({
      title: "Curriculum Vitae | Arnaud Flaesch - Développeur d'applications",
      description:
        "Le détail de mon parcours professionnel et scolaire, ainsi que mes compétences techniques et centres d'intérêts.",
      path: "/cv"
    });

    cy.switchLanguage();
    checkSeo({
      title: "Resume | Arnaud Flaesch - Software developer",
      description: "My detailed working experience and education, as well as my technical skills and hobbies.",
      path: "/en/cv",
      locale: "en"
    });
  });
});
