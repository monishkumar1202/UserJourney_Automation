const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  viewportWidth: 1580, 
  viewportHeight: 980,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
