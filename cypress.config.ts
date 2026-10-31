import { defineConfig } from "cypress";

const WINDOW_WIDTH = 1920;
const WINDOW_HEIGHT = 1080;

// Opens headless browsers at full size, so screenshots are taken at this resolution.
function setHeadlessWindowSize(browser: Cypress.Browser, launchOptions: Cypress.BeforeBrowserLaunchOptions) {
  if (!browser.isHeadless) {
    return launchOptions;
  }
  if (browser.family === "chromium" && browser.name !== "electron") {
    launchOptions.args.push(`--window-size=${WINDOW_WIDTH},${WINDOW_HEIGHT}`, "--force-device-scale-factor=1");
  } else if (browser.name === "electron") {
    launchOptions.preferences.width = WINDOW_WIDTH;
    launchOptions.preferences.height = WINDOW_HEIGHT;
  } else if (browser.family === "firefox") {
    launchOptions.args.push(`--width=${WINDOW_WIDTH}`, `--height=${WINDOW_HEIGHT}`);
  }
  return launchOptions;
}

export default defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 4000,
  viewportWidth: WINDOW_WIDTH,
  viewportHeight: WINDOW_HEIGHT,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on) {
      on("before:browser:launch", setHeadlessWindowSize);
    },
    baseUrl: "http://localhost:3000/",
    specPattern: "cypress/e2e/**/*.spec.ts"
  }
});
