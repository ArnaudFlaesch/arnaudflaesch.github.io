/// <reference types='cypress' />

describe('Skills tests', () => {
  const SKILLS_LIST = [
    'Front-End',
    'Back-End',
    'Bases de données',
    'Tests Unitaires',
    'DevOps',
    "Systèmes d'exploitation",
    'Autres langages'
  ];

  beforeEach(() => {
    cy.visit('/skills');
  });
  xit('Should display the skills page', () => {
    cy.get('.skill-label').each((element, index) => {
      expect(element.text().trim()).to.equal(SKILLS_LIST[index]);
    });
  });
});
