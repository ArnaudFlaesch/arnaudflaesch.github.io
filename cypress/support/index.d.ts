declare namespace Cypress {
  interface Chainable {
    /** Switches the site language with the header button, waiting for it to be hydrated first. */
    switchLanguage(): Chainable<JQuery<HTMLElement>>;
  }
}

declare module "mochawesome/addContext" {
  /** Attaches extra context (e.g. a screenshot path) to a test in the mochawesome report. */
  export default function addContext(
    testContext: { test: unknown },
    context: string | { title: string; value: unknown }
  ): void;
}
