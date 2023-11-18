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
});
