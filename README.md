# Cypress Automation Project

Cypress test automation framework built with JavaScript (JS) 
that follows the Page Object Model (POM) design pattern to implement the UI tests for UserJourneys.

If you are a beginner to Cypress, refer to my other repo to refresh your Cypress knowledge which will serve as a starting-point to Cypress testing:
[Cypress-E2E-Web-and-API-Testing](https://github.com/itkhanz/Cypress-E2E-Web-and-API-Testing)

##--Features

Ability to filter and run tests with specific tags i.e. regression, smoke
* Pass browser and mode as environment variable
Multiple reporters configuration (JUnit XML, cpress-mochawesome-reporter HTML, Allure Report HTML)

## Setup 🛠️

### Pre-requisites

* Install NodeJS and NPM package manager.
* Code Editor of your choice e.g. Visual Studio Code

### Setup from Scratch

* `npm init` to setup node project with package.json
* `npm install --save-dev cypress` to install cypress as dev dependency
* `npx cypress open` to open the cypress test runner.
* `choose `E2E Testing` which will create cypress config, support and fixture folders.
* Choose browser of your choice, and scaffold examples which will create boilerplate specs within e2e folder.
* Remove the default boilerplate specs from `cypress/e2e` folder
* Add `README.md` to document
* Start with writing tests under `cypress/e2e` directory


### Using existing framework

* Clone git <repo_url>
* Navigate to folder and open terminal
* Run `npm install` to install the framework dependencies


## Running tests ⚡

* `npx cypress open` will open the cypress test runner so you can run the tests from it
* `npx cypress run` will run all the test spec files located within `cypress/e2e` folder. By default test are run in headless mode on electron browser.
* If you want to run test on specific browser, you can provide with `--browser` argument like `--browser chrome`.
* To run tests in headed mode, pass argument `--headed`
* To run a specific test spec, use the following cmd syntax:
  `npx cypress run --spec cypress/e2e/tests2/addEngaement.cy.js --headed --browser chrome` will run the tests from AddToCartTest spec on chrome browser in headed mode.

* For example, To run the tests that are tagged as `@smoke`:
    * `npx cypress run --spec cypress/e2e/tests/AddToCartTest.cy.js --env grepTags="@smoke"`

* Summing up all the above configuration, here is an example:
  * `npx cypress run --browser chrome --headed --tag "@smoke" --env allure=true --spec "cypress\e2e\tests2\Opportunity\addEngagement.cy.js"` will run tests with following configurations:
    *  **spec** `cypress\e2e\tests2\Opportunity\addEngagement.cy.js` 
    *  **browser** `chrome`
    *  **mode** `headed`
    *  **tag** `smoke`

## Test Reporting 📑

* This framework uses [cypress-allure-report](https://www.npmjs.com/package/@shelex/cypress-allure-plugin) to generate HTML test reports.
  * `"npm install -D @shelex/cypress-allure-plugin" `

* Add the following options to `cypress.config.js`
  ```js
   const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        }
    }
});

Update Cypress Configuration: Add the following to your cypress/support/index.js file:
 * `import '@shelex/cypress-allure-plugin';

* check the version -- ` npm list @shelex/cypress-allure-plugin

Run Tests and Generate Report: Run your tests and generate the Allure report:

  * `npx allure generate
  * `npx allure generate --clean
  * `npx allure open

* For example, To run the tests that are Allure Report:
    * `npx cypress run --browser edge --headed --env allure=true --spec "cypress/e2e/tests/AddToCartTest.cy.js"`
    * `npx cypress run --browser=chrome --headed --reporter mocha-allure-reporter --spec "cypress\e2e\TestSuite\Opportunity\*.cy.js"

  ```
* HTML Reports are generated by default in `root/cypress/reports` folder.
* It embeds the screenshots of tests on failure automatically to the report. 
* It also allows the customization of report with better control of how and where report is generated.
* This is how the report dashboard looks like: <image path of location.\*png>

* Some ther reporting possibilities are:

  * [cypress-allure-plugin](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
  * [mochawesome](https://www.npmjs.com/package/mochawesome)

## Folder Structure 📁

The project is organized into the following folders:

```
Cypress-Framework/
├── cypress/
│   ├── config/
│   ├── e2e/
│   ├── fixtures/
│   ├── reports/
│   ├── support/
│   └── videos/
├── doc/
├── node_modules/
├── .gitignore
├── cypress.config.js
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── package.json
└── README.md
```

* `cypress/config/`: Contains project-specific constants and URL routes.
* `cypress/e2e/`: Contains the test specifications.
* `cypress/fixtures/`: Contains test data in JSON format.
* `cypress/reports/`: Contains generated test reports.
* `cypress/support/`: Contains custom commands and support files.
* `cypress/videos/`: Contains recorded test videos.
* `doc/`: Contains documentation files.
* `node_modules/`: Contains project dependencies.
* `.gitignore`: Specifies files and directories to be ignored by Git.
* `cypress.config.js`: Cypress configuration file.
* `Dockerfile`: Docker configuration file.
* `docker-compose.yml`: Docker Compose configuration file.
* `Jenkinsfile`: Jenkins pipeline configuration file.
* `package.json`: Node.js project configuration file.
* `README.md`: Project documentation file.


