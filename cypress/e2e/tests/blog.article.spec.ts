/// <reference types='cypress' />

describe('Blog article tests', () => {
  beforeEach(() => {
    cy.visit('/blog/gerer-les-dependances-dun-projet-logiciel-facilement-avec-renovate/');
  });

  it('Blog article SEO test', () => {
    cy.title().should(
      'equal',
      "Gérer les dépendances d'un projet logiciel facilement avec Renovate | Arnaud Flaesch - Développeur d'applications"
    );
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        "Comment maintenir les dépendances d'un logiciel de manière sûre et rapide grâce à un outil automatisé."
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        "Comment maintenir les dépendances d'un logiciel de manière sûre et rapide grâce à un outil automatisé."
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document().get('meta[property="article:author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document().get('meta[name="creator"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document().get('meta[property="article:published_time"]').should('have.attr', 'content', '2024-02-10T16:00');
    cy.document().get('meta[property="article:modified_time"]').should('have.attr', 'content', '2024-02-10T16:00');
    cy.document()
      .get('meta[property="og:title"]')
      .should(
        'have.attr',
        'content',
        "Gérer les dépendances d'un projet logiciel facilement avec Renovate | Arnaud Flaesch - Développeur d'applications"
      );
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/blog/2024/1-renovate/renovate-logo.png');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document().get('meta[property="og:locale"]').should('have.attr', 'content', 'fr');
    cy.document()
      .get('meta[property="og:url"]')
      .should(
        'have.attr',
        'content',
        'https://arnaudflaesch.github.io/blog/gerer-les-dependances-dun-projet-logiciel-facilement-avec-renovate/'
      );
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'article');

    // Blog SEO english locale test
    cy.wait(1500);
    cy.get('#switch-language > button').click();
    cy.title().should(
      'equal',
      "Gérer les dépendances d'un projet logiciel facilement avec Renovate | Arnaud Flaesch - Software developer"
    );
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        "Comment maintenir les dépendances d'un logiciel de manière sûre et rapide grâce à un outil automatisé."
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        "Comment maintenir les dépendances d'un logiciel de manière sûre et rapide grâce à un outil automatisé."
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document().get('meta[property="article:author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document().get('meta[name="creator"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document().get('meta[property="article:published_time"]').should('have.attr', 'content', '2024-02-10T16:00');
    cy.document().get('meta[property="article:modified_time"]').should('have.attr', 'content', '2024-02-10T16:00');
    cy.document()
      .get('meta[property="og:title"]')
      .should(
        'have.attr',
        'content',
        "Gérer les dépendances d'un projet logiciel facilement avec Renovate | Arnaud Flaesch - Software developer"
      );
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/blog/2024/1-renovate/renovate-logo.png');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document().get('meta[property="og:locale"]').should('have.attr', 'content', 'en');
    cy.document()
      .get('meta[property="og:url"]')
      .should(
        'have.attr',
        'content',
        'https://arnaudflaesch.github.io/en/blog/gerer-les-dependances-dun-projet-logiciel-facilement-avec-renovate/'
      );
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'article');
  });
});
