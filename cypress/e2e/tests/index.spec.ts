/// <reference types='cypress' />

describe('Portfolio tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should get the home page', () => {
    cy.title()
      .should('equals', "Arnaud Flaesch - Développeur d'applications")
      .get('h1')
      .first()
      .should('have.text', 'Arnaud Flaesch')
      .get('#bio-avatar')
      .should('have.css', 'height', '100px')
      .and('have.css', 'width', '100px');

    cy.get('footer').should('have.text', '© 2024, Développé avec Nuxt. Icônes de : Icons8.');
  });

  it('Home SEO test', () => {
    cy.title().should('equal', "Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        "Je m'appelle Arnaud et je suis développeur. Vous trouverez sur ce site une présentation de mon parcours ainsi que les projets personnels sur lesquels je travaille."
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        "Je m'appelle Arnaud et je suis développeur. Vous trouverez sur ce site une présentation de mon parcours ainsi que les projets personnels sur lesquels je travaille."
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', "Arnaud Flaesch - Développeur d'applications");
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/profile-picture.jpg');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document().get('meta[property="og:url"]').should('have.attr', 'content', 'https://arnaudflaesch.github.io/');
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');
  });

  it('Home SEO english locale test', () => {
    cy.wait(1500);
    cy.get('#switch-language > button').click();
    cy.title().should('equal', 'Arnaud Flaesch - Software developer');
    cy.document()
      .get('meta[name="description"]')
      .should(
        'have.attr',
        'content',
        "My name is Arnaud and I am a software developer. You'll find here a presentation of my experiences as well as the personal projects that I work on."
      );
    cy.document()
      .get('meta[property="og:description"]')
      .should(
        'have.attr',
        'content',
        "My name is Arnaud and I am a software developer. You'll find here a presentation of my experiences as well as the personal projects that I work on."
      );
    cy.document().get('meta[name="author"]').should('have.attr', 'content', 'Arnaud Flaesch');
    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', 'Arnaud Flaesch - Software developer');
    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', 'https://arnaudflaesch.github.io/profile-picture.jpg');
    cy.document().get('meta[property="og:site_name"]').should('have.attr', 'content', 'arnaudflaesch.github.io');
    cy.document().get('meta[property="og:url"]').should('have.attr', 'content', 'https://arnaudflaesch.github.io/en');
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');
  });
});
