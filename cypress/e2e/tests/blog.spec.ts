/// <reference types='cypress' />
import { checkSeo } from "../../support/seo";

describe("Blog page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#portfolio-header #url-list > a").contains("Blog").click();
  });

  it("Blog SEO test", () => {
    checkSeo({
      title: "Blog | Arnaud Flaesch - Développeur d'applications",
      description:
        "Mon blog sur lequel vous trouverez des articles aussi bien sur des sujets techniques que sur d'autres sujets.",
      path: "/blog"
    });

    cy.switchLanguage();
    checkSeo({
      title: "Blog | Arnaud Flaesch - Software developer",
      description: "My blog where you'll find articles on languages and tools that I use as well as other subjects.",
      path: "/en/blog",
      locale: "en"
    });
  });
});
