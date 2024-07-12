/// <reference types='cypress' />
import path = require('path');

describe('CV page tests', () => {
  it('Should display the CV page', () => {
    cy.get('#portfolio-header #url-list > a').contains('CV').click();
    cy.title().should('equals', "Curriculum Vitae - Arnaud Flaesch - Développeur d'applications");

    // Download CV
    const cvFilename = 'Curriculum Vitae Arnaud Flaesch.pdf';
    cy.readFile(path.join(Cypress.config('downloadsFolder'), cvFilename)).should('not.exist');
    cy.get('#cv-download-button').should('have.text', 'Télécharger mon CV').click();
    cy.readFile(path.join(Cypress.config('downloadsFolder'), cvFilename));

    const blockTitles = [
      "Développeur d'applications",
      'Développeur backend Java',
      'Développeur fullstack',
      'Mastère Architecture des Logiciels',
      'Bachelor Architecture des Logiciels',
      'Lycée privé Saint Michel de Picpus',
      'Brevet de Technicien Supérieur',
      'Licence Mathématiques - Informatique',
      'Lycée privé Massillon',
      'Baccalauréat Économique et Social',
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
