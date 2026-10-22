/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /** Switches the site language with the header button, waiting for it to be hydrated first. */
    switchLanguage(): Chainable<JQuery<HTMLElement>>;
  }
}
