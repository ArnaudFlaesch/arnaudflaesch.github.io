/// <reference types='cypress' />
import path = require('path');

describe('CV page tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#portfolio-header #url-list > a').contains('CV').click();
  });

  it('Should display the CV page', () => {
    cy.title().should('equals', "Curriculum Vitae | Arnaud Flaesch - Développeur d'applications");

    // Download CV
    const cvFilename = 'Curriculum Vitae Arnaud Flaesch.pdf';
    cy.readFile(path.join(Cypress.config('downloadsFolder'), cvFilename)).should('not.exist');
    cy.get('#cv-download-button').should('have.text', 'Télécharger mon CV').click();
    cy.readFile(path.join(Cypress.config('downloadsFolder'), cvFilename));

    const blockTitles = [
      "Développeur d'applications",
      'Développeur backend Java',
      'Développeur fullstack',
      'Développeur fullstack',
      'Développeur Java',
      'Développeur Web',
      'Développeur Java',
      'Développeur Java / JS',
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

  it('CV SEO test', () => {
    cy.title().should('equal', "Curriculum Vitae | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        "Le détail de mon parcours professionnel et scolaire, ainsi que mes compétences techniques et centres d'intérêts."
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        "Le détail de mon parcours professionnel et scolaire, ainsi que mes compétences techniques et centres d'intérêts."
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', "Curriculum Vitae | Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/profile-picture.jpg');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document().get('meta[property="og:url"]').should('have.attr', 'content', 'https://arnaudflaesch.github.io/cv');
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');
  });

  it('CV SEO english locale test', () => {
    cy.wait(1500);
    cy.get('#switch-language > button').click();
    cy.title().should('equal', 'Resume | Arnaud Flaesch - Software developer');
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        'My detailed working experience and education, as well as my technical skills and hobbies.'
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        'My detailed working experience and education, as well as my technical skills and hobbies.'
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', 'Resume | Arnaud Flaesch - Software developer');
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/profile-picture.jpg');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document()
      .get('meta[property="og:url"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/en/cv');
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');
  });
});
