/// <reference types='cypress' />

describe("Contact page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#portfolio-header #url-list > a").contains("Contact").click();
  });

  it("Contact SEO test", () => {
    cy.title().should("equal", "Contactez-moi | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[name="description"]')
      .should("have.attr", "content", "Formulaire de contact si vous souhaitez discuter.");
    cy.document()
      .get('meta[property="og:description"]')
      .should("have.attr", "content", "Formulaire de contact si vous souhaitez discuter.");
    cy.document().get('meta[name="author"]').should("have.attr", "content", "Arnaud Flaesch");
    cy.document()
      .get('meta[property="og:title"]')
      .should("have.attr", "content", "Contactez-moi | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[property="og:image"]')
      .should("have.attr", "content", "https://arnaudflaesch.github.io/profile-picture.jpg");
    cy.document().get('meta[property="og:site_name"]').should("have.attr", "content", "arnaudflaesch.github.io");
    cy.document()
      .get('meta[property="og:url"]')
      .should("have.attr", "content", "https://arnaudflaesch.github.io/contact");
    cy.document().get('meta[property="og:type"]').should("have.attr", "content", "website");

    // Contact SEO english locale test
    cy.wait(1000);
    cy.get("#switch-language > button").click();
    cy.title().should("equal", "Contact me | Arnaud Flaesch - Software developer");
    cy.document()
      .get('meta[name="description"]')
      .should("have.attr", "content", "Contact form in case you want to reach out.");
    cy.document()
      .get('meta[property="og:description"]')
      .should("have.attr", "content", "Contact form in case you want to reach out.");
    cy.document().get('meta[name="author"]').should("have.attr", "content", "Arnaud Flaesch");
    cy.document()
      .get('meta[property="og:title"]')
      .should("have.attr", "content", "Contact me | Arnaud Flaesch - Software developer");
    cy.document()
      .get('meta[property="og:image"]')
      .should("have.attr", "content", "https://arnaudflaesch.github.io/profile-picture.jpg");
    cy.document().get('meta[property="og:site_name"]').should("have.attr", "content", "arnaudflaesch.github.io");
    cy.document()
      .get('meta[property="og:url"]')
      .should("have.attr", "content", "https://arnaudflaesch.github.io/en/contact");
    cy.document().get('meta[property="og:type"]').should("have.attr", "content", "website");
  });
});
