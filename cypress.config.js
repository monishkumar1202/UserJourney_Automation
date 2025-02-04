const { defineConfig } = require("cypress");
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