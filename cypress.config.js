const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 12000,
  retries: { runMode: 1, openMode: 0 },
  viewportWidth: 1366,
  viewportHeight: 900,

  e2e: {
    baseUrl: 'https://dev-signup-web.lawnstarter.com',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // disable credit card save prompts in Chrome
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-features=AutofillCreditCardSavePrompt');
          launchOptions.args.push('--disable-features=AutofillEnableAccountWalletStorage');
          launchOptions.args.push('--disable-save-password-bubble');
        }
        return launchOptions;
      });

      return config;
    },
  },
});

