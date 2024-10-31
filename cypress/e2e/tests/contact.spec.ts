/// <reference types='cypress' />

describe('Contact page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display the contact page', () => {
    cy.get('#portfolio-header #url-list > a').contains('Contact').click();
    cy.title().should('equals', "Contactez-moi | Arnaud Flaesch - Développeur d'applications");
  });
});
