import { defineConfig } from "cypress";
import { displayBrowserInFullSize } from "./cypress/plugins";

export default defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 6000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: false,
  videoCompression: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-e2e-config.json"
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on("before:browser:launch", displayBrowserInFullSize);
    },
    baseUrl: "http://localhost:3000/",
    specPattern: "cypress/e2e/**/**/*.spec.ts"
  }
});
