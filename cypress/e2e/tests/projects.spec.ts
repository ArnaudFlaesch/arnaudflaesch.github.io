/// <reference types='cypress' />
import { checkSeo } from "../../support/seo";

describe("Projects page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#portfolio-header #url-list > a").contains("Projets").click();
  });

  it("Projects SEO test", () => {
    checkSeo({
      title: "Projets personnels | Arnaud Flaesch - Développeur d'applications",
      description: "Les projets personnels sur lesquels je travaille.",
      path: "/projets"
    });

    cy.switchLanguage();
    checkSeo({
      title: "Personal projects | Arnaud Flaesch - Software developer",
      description: "Personal projects that I work on.",
      path: "/en/projets",
      locale: "en"
    });
  });
});
