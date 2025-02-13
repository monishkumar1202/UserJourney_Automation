const { defineConfig } = require("cypress");
<<<<<<< HEAD
const browserstackTestObservabilityPlugin = require('browserstack-cypress-cli/bin/testObservability/plugin');

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {

      on('task', {
        print(s) {
          console.log(s)
          return null
        },
        save(result) {
          fs.appendFileSync('results.json', JSON.stringify(result))
          return null
        }
      })
       
      require('cypress-mochawesome-reporter/plugin')(on);
      browserstackTestObservabilityPlugin(on, config);
      require('cypress-failed-log/on')(on)

      return config
       
    }    
    
  }
  
})
=======
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  defaultCommandTimeout: 20000, 
  e2e: {
    experimentalSessionAndOrigin: false, 
    testIsolation: false,

    setupNodeEvents(on, config) {     
      allureWriter(on, config);
      return config; 
    },
  },
});
>>>>>>> 476bcf5 (My First Version on Datadriven Framework)
