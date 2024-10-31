/// <reference types='cypress' />

describe('Projects page tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#portfolio-header #url-list > a').contains('Projets').click();
  });

  it('Should display the projects page', () => {
    cy.title().should('equals', "Projets personnels | Arnaud Flaesch - Développeur d'applications");
  });

  it('Projects SEO test', () => {
    cy.title().should('equal', "Projets personnels | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[name="description"]')
      .should('have.attr', 'content', 'Les projets personnels sur lesquels je travaille.');
    cy.document()
      .get('meta[property="og:description"]')
      .should('have.attr', 'content', 'Les projets personnels sur lesquels je travaille.');
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', "Projets personnels | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/profile-picture.jpg');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document()
      .get('meta[property="og:url"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/projects');
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');
  });
});
