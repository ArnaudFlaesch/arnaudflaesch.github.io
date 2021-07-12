/// <reference types='cypress' />

describe('Portfolio tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should get the title', () => {
    cy.title().should('equals', "Portfolio d'Arnaud Flaesch");
    cy.get('h1').first().should('have.text', 'Hi There!');
    cy.get('h4')
      .first()
      .should('have.text', "I'm Arnaud and I'm a JAMStack engineer!");
  });

  it('Should toggle between light and dark mode', () => {
    cy.get('#themeIconToggle')
      .click()
      .get('body')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .get('#themeIconToggle')
      .click()
      .should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('Should display the 404 error page', () => {
    cy.visit('/404').title().should('equals', '404: Not found');
  });
});
