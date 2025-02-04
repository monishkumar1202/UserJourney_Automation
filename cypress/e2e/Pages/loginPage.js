import BasePage from "./BasePage"


class LoginPage extends BasePage{


    get loginInput() { return cy.get('input[inputmode="email"]'); }
    get loginBtn() { return cy.get('[class="auth0-lock-submit"]'); }
    get alertMsg() { return cy.get('#account-login .alert'); }
    

    open() {
        cy.visit('https://app.devrev.ai/test-demo1')
    }

    loginWithUI(email) {
        this.open();
        this.loginInput.type(email)
        this.loginBtn.should('be.visible').click()
        cy.wait(50000)
    }

    logindirectUI()  {
        this.open();

    }

}


export default new LoginPage();