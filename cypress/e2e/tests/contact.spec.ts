/// <reference types='cypress' />

describe('Contact page tests', () => {
  it('Should display the contact page', () => {
    cy.visit('/').get('#portfolio-header > #url-list > a').contains('Contact').click();
    cy.title().should('equals', 'Contactez-moi - Arnaud Flaesch, Développeur Fullstack');
  });
});
