class loginPage1 {
    
    get emailInput() {
        return 'input[inputmode="email"]';
    }

    get submitButton() {
        return '[class="auth0-lock-submit"]';
    }

    typeEmail(email, loginUrl) {
        return cy.origin (loginUrl, { args: { email, selector: this.emailInput } }, 
            ({ email, selector }) => {
                cy.get(selector).type(email);
            }
        );
    }

    clickLoginSubmit(loginUrl) {
        return cy.origin(loginUrl, { args: { selector: this.submitButton } },
            ({ selector }) => {
                cy.get(selector).click();
            }
        );
    }

}


module.exports = new loginPage1();