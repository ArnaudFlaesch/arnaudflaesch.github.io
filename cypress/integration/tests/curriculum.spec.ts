/// <reference types='cypress' />

describe('Curriculum tests', () => {
  const JOB_TITLES = [
    'Développeur Java / JS',
    'Développeur Java',
    'Développeur Web',
    'Développeur Java',
    'Développeur Java / JS',
    'Développeur Web',
    'Développeur PHP',
    'Mastère Architecture des Logiciels',
    'Bachelor Architecture des Logiciels',
    'Brevet de Technicien Supérieur',
    'Licence Mathématiques - Informatique',
    'Baccalauréat Économique et Social'
  ];

  beforeEach(() => {
    cy.visit('/curriculum');
  });
  it('Should display the curriculum page', () => {
    cy.get('.job-title').each((element, index) => {
      expect(element.text().trim()).to.equal(JOB_TITLES[index]);
    });
  });
});
