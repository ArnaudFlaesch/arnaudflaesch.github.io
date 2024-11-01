/// <reference types='cypress' />

describe('404 page tests', () => {
  it('Should display the 404 error page', () => {
    cy.visit('/404', { failOnStatusCode: false })
      .title()
      .should('equals', "404: Page non trouvée | Arnaud Flaesch - Développeur d'applications");
  });
});
