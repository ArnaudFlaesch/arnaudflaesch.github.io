/// <reference types='cypress' />
import path = require('path');

describe('CV page tests', () => {
  it('Should display the CV page', () => {
    cy.visit('/').get('#portfolio-header > #url-list > a').contains('CV').click();
    cy.title().should('equals', 'Curriculum Vitae - Arnaud Flaesch, Développeur Fullstack');

    // Download CV
    const cvFilename = 'Curriculum Vitae Arnaud Flaesch.pdf';
    cy.readFile(path.join(Cypress.config('downloadsFolder'), cvFilename)).should('not.exist');
    cy.get('#cv-download-button').should('have.text', 'Télécharger mon CV').click();
    cy.readFile(path.join(Cypress.config('downloadsFolder'), cvFilename));

    const blockTitles = [
      'Développeur backend Java',
      'Développeur fullstack',
      'Développeur fullstack',
      'Mastère Architecture des Logiciels',
      'Bachelor Architecture des Logiciels',
      'Lycée privé Saint Michel de Picpus',
      'Brevet de Technicien Supérieur',
      'Licence Mathématiques - Informatique',
      'Lycée privé Massillon',
      'Baccalauréat Économique et Social',
      'Certifications',
      'Frontend',
      'Backend',
      'Outils',
      'Course à pieds',
      'Bénévolat',
      'Voyages'
    ];
    cy.get('h3').each((blockTitle, index) => {
      expect(blockTitle.text()).to.eq(blockTitles[index]);
    });
  });
});
