/// <reference types='cypress' />
import { checkSeo } from "../../support/seo";

describe("Contact page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#portfolio-header #url-list > a").contains("Contact").click();
  });

  it("Contact SEO test", () => {
    checkSeo({
      title: "Contactez-moi | Arnaud Flaesch - Développeur d'applications",
      description: "Formulaire de contact si vous souhaitez discuter.",
      path: "/contact"
    });

    cy.switchLanguage();
    checkSeo({
      title: "Contact me | Arnaud Flaesch - Software developer",
      description: "Contact form in case you want to reach out.",
      path: "/en/contact",
      locale: "en"
    });
  });
});
