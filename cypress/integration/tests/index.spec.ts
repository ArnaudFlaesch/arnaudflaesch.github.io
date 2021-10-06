/// <reference types='cypress' />

describe('Portfolio tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should get the title', () => {
    cy.title()
      .should('equals', 'Home | Arnaud Flaesch, Développeur Web')
      .get('h1')
      .first()
      .should('have.text', 'Arnaud Flaesch, Développeur Web');
  });

  it('Should display the 404 error page', () => {
    cy.visit('/404')
      .title()
      .should('equals', '404: Not found | Arnaud Flaesch, Développeur Web');
  });
});
