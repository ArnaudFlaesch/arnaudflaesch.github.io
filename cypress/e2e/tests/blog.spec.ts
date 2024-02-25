/// <reference types='cypress' />

describe('Blog page tests', () => {
  it('Should display the blog page', () => {
    cy.visit('/').get('#portfolio-header > #url-list > a').contains('Blog').click();
    cy.title().should('equals', 'Blog - Arnaud Flaesch, Développeur Web');
  });
});
