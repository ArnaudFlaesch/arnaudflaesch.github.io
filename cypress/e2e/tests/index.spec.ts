import { checkSeo } from "../../support/seo";

describe("Portfolio tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should get the home page", () => {
    cy.get("h1").first().should("have.text", "Arnaud Flaesch");
    cy.get("#bio-avatar").should("have.css", "height", "100px").and("have.css", "width", "105px");

    cy.get("footer").should("have.text", "© 2026, Développé avec Next.js. Icônes de : Icons8.");

    checkSeo({
      title: "Arnaud Flaesch - Développeur d'applications",
      description:
        "Je m'appelle Arnaud et je suis développeur. Vous trouverez sur ce site une présentation de mon parcours ainsi que les projets personnels sur lesquels je travaille.",
      path: "/"
    });

    cy.switchLanguage();
    checkSeo({
      title: "Arnaud Flaesch - Software developer",
      description:
        "My name is Arnaud and I am a software developer. You'll find here a presentation of my experiences as well as the personal projects that I work on.",
      path: "/en",
      locale: "en"
    });
  });
});
