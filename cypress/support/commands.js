// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
<<<<<<< HEAD
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('log', (log, message, ...args) => {
    log(message, ...args)
    cy.task('print', [message, ...args].join(', '), { log: false })

})

import 'cypress-iframe';

import 'cypress-real-events/support';

import 'cypress-performance'
=======
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
>>>>>>> 476bcf5 (My First Version on Datadriven Framework)
