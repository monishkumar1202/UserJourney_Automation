
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

Cypress.on('test:before:run', () => {
    cy.viewport(1209, 380);
  });