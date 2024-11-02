/// <reference types='cypress' />

describe('Blog page tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#portfolio-header #url-list > a').contains('Blog').click();
  });

  it('Blog SEO test', () => {
    cy.title().should('equal', "Blog | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        "Mon blog sur lequel vous trouverez des articles aussi bien sur des sujets techniques que sur d'autres sujets."
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        "Mon blog sur lequel vous trouverez des articles aussi bien sur des sujets techniques que sur d'autres sujets."
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', "Blog | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/profile-picture.jpg');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document().get('meta[property="og:url"]').should('have.attr', 'content', 'https://arnaudflaesch.github.io/blog');
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');

    // Blog SEO english locale test
    cy.wait(1000);
    cy.get('#switch-language > button').click();
    cy.title().should('equal', 'Blog | Arnaud Flaesch - Software developer');
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        "My blog where you'll find articles on languages and tools that I use as well as other subjects."
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        "My blog where you'll find articles on languages and tools that I use as well as other subjects."
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', 'Blog | Arnaud Flaesch - Software developer');
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/profile-picture.jpg');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document()
      .get('meta[property="og:url"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/en/blog');
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');
  });
});
