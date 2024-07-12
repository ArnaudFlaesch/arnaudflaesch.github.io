/// <reference types='cypress' />

describe('Blog page tests', () => {
  it('Should display the blog page', () => {
    cy.get('#portfolio-header #url-list > a').contains('Blog').click();
    cy.title().should('equals', "Blog - Arnaud Flaesch - Développeur d'applications");
  });
});
