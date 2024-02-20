/// <reference types='cypress' />

describe('CV page tests', () => {
  it('Should display the CV page', () => {
    cy.visit('/').get('#portfolio-header > #url-list > a').contains('CV').click();
    cy.title().should('equals', 'Curriculum Vitae - Arnaud Flaesch, Développeur Web');
  });
});
