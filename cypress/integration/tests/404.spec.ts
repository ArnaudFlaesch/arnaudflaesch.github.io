/// <reference types='cypress' />

describe('404 page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display the 404 error page', () => {
    cy.visit('/404')
      .title()
      .should('equals', '404: Not found | Arnaud Flaesch, Développeur Web');
  });
});
