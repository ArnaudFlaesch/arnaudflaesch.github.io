/// <reference types='cypress' />

describe('Projects page tests', () => {
  it('Should display the projects page', () => {
    cy.get('#portfolio-header #url-list > a').contains('Projets').click();
    cy.title().should('equals', "Projets personnels - Arnaud Flaesch - Développeur d'applications");
  });
});
