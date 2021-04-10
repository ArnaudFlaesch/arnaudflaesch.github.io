/// <reference types='cypress' />

describe('Portfolio tests', () => {
  it('Should get the title', () => {
    cy.visit('/');
    cy.title().should('equals', "Portfolio d'Arnaud Flaesch");
    cy.get('h1')
      .first()
      .should('have.text', 'Hi There!');
    cy.get('h4')
      .first()
      .should('have.text', "I'm Arnaud and I'm a JAMStack engineer!");
  });
});
