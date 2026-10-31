import { checkSeo } from "../../support/seo";

describe("Blog article tests", () => {
  beforeEach(() => {
    cy.visit("/blog/gerer-les-dependances-dun-projet-logiciel-facilement-avec-renovate/");
  });

  it("Blog article SEO test", () => {
    checkSeo({
      title:
        "Gérer les dépendances d'un projet logiciel facilement avec Renovate | Arnaud Flaesch - Développeur d'applications",
      description:
        "Comment maintenir les dépendances d'un logiciel de manière sûre et rapide grâce à un outil automatisé.",
      path: "/blog/gerer-les-dependances-dun-projet-logiciel-facilement-avec-renovate/",
      image: "/blog/2024/1-renovate/renovate-logo.png",
      publishedTime: "2024-02-10T16:00"
    });

    cy.switchLanguage();
    checkSeo({
      title:
        "Gérer les dépendances d'un projet logiciel facilement avec Renovate | Arnaud Flaesch - Software developer",
      description:
        "Comment maintenir les dépendances d'un logiciel de manière sûre et rapide grâce à un outil automatisé.",
      path: "/en/blog/gerer-les-dependances-dun-projet-logiciel-facilement-avec-renovate/",
      locale: "en",
      image: "/blog/2024/1-renovate/renovate-logo.png",
      publishedTime: "2024-02-10T16:00"
    });
  });
});
