/// <reference types='cypress' />

describe('Projects tests', () => {
  const PROJECTS_TITLES = ['FunChess', 'Dash-Web', 'Dash-WebServices', 'WizardLibrary'];

  beforeEach(() => {
    cy.visit('/projects');
  });
  it('Should display the projects page', () => {
    cy.get('h3').each((element, index) => {
      expect(element.text().trim()).to.equal(PROJECTS_TITLES[index]);
    });
  });
});
