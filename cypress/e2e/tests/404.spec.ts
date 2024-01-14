/// <reference types='cypress' />

describe('404 page tests', () => {
  it('Should display the 404 error page', () => {
    cy.visit('/404').title().should('equals', 'Arnaud Flaesch, Développeur Web');
  });
});
