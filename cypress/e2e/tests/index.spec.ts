/// <reference types='cypress' />

describe('Portfolio tests', () => {
  beforeEach(() => {
    cy;
  });

  it('Should get the home page', () => {
    cy.title()
      .should('equals', "Arnaud Flaesch - Développeur d'applications")
      .get('h1')
      .first()
      .should('have.text', 'Arnaud Flaesch')
      .get('#bio-avatar')
      .should('have.css', 'height', '100px')
      .and('have.css', 'width', '100px');

    cy.get('footer').should('have.text', '© 2024, Développé avec Gatsby. Icônes de : Icons8.');
  });
});
