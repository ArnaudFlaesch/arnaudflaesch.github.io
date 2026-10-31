import { defineConfig } from "cypress";
import baseConfig from "./cypress.config";

// CI configuration: longer timeout, failure screenshots and a mochawesome report.
export default defineConfig({
  ...baseConfig,
  defaultCommandTimeout: 6000,
  screenshotOnRunFailure: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-e2e-config.json"
  }
});
