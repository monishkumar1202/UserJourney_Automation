const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  defaultCommandTimeout: 20000,
  e2e: {

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      grep: null, // Default: Run all tests
      //  allure: true 
    },
    testIsolation: false,
    chromeWebSecurity: false,
  }
});
