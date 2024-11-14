const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 1,
    openMode: 1,
  },
  viewportWidth: 1440,
  viewportHeight: 768,
  defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
    baseUrl: 'https://www.twse.com.tw',
  },
});
