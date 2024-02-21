/// <reference types='cypress' />

describe('Portfolio tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should get the home page', () => {
    cy.title()
      .should('equals', 'Arnaud Flaesch, Développeur Web')
      .get('h1')
      .first()
      .should('have.text', 'Arnaud Flaesch')
      .get('#bio-avatar')
      .should('have.css', 'height', '100px')
      .and('have.css', 'width', '100px');

    cy.get('footer').should('have.text', '© 2024, Développé avec Gatsby. Icons by Icons8.');
  });

  it('Should check that Linkedin link works', () => {
    const linkedinUrl = 'https://www.linkedin.com/in/arnaudflaesch/';
    cy.url().should('eq', Cypress.config('baseUrl'));
    cy.get('#linkedinLink').click();
    cy.origin(linkedinUrl, { args: { linkedinUrl } }, ({ linkedinUrl }) => {
      cy.title().should('equal', 'Arnaud Flaesch - Publicis Sapient France | LinkedIn');
      cy.url().should('equals', linkedinUrl);
    });
  });

  it('Should check that Github link works', () => {
    const githubUrl = 'https://github.com/ArnaudFlaesch';
    cy.url().should('eq', Cypress.config('baseUrl'));
    cy.get('#githubLink').click();
    cy.origin(githubUrl, { args: { githubUrl } }, ({ githubUrl }) => {
      cy.title().should('equal', 'ArnaudFlaesch (Arnaud Flaesch) · GitHub');
      cy.url().should('equals', githubUrl);
    });
  });

  it('Should check that Scrum.org link works', () => {
    const scrumOrgUrl = 'https://www.scrum.org/user/1355891';
    cy.url().should('eq', Cypress.config('baseUrl'));
    cy.get('#scrumOrgLink').click();
    cy.origin(scrumOrgUrl, { args: { scrumOrgUrl } }, ({ scrumOrgUrl }) => {
      cy.title().should('equal', 'Arnaud Flaesch | Scrum.org');
      cy.url().should('equals', scrumOrgUrl);
    });
  });

  it('Should check that Medium link works', () => {
    const mediumUrl = 'https://medium.com/@arnaudflaesch';
    cy.url().should('eq', Cypress.config('baseUrl'));
    cy.get('#mediumLink').click();
    cy.origin(mediumUrl, { args: { mediumUrl } }, ({ mediumUrl }) => {
      cy.title().should('equal', 'Arnaud Flaesch – Medium');
      cy.url().should('equals', mediumUrl);
    });
  });
});
