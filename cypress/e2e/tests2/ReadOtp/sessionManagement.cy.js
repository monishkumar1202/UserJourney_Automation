import Loginpagedev from "../../../pages/PreExection/Loginpagedev";
import { getLatestOtp } from "../../../support/readOtp";

Cypress.Commands.add('login', () => {
    cy.session('login', () => {
        cy.visit('https://app.devrev.ai/test-demo1');
        cy.fixture('loginData').then((loginData) => {
            Loginpagedev.typeEmail(loginData.User01.email);
            Loginpagedev.clickLoginSubmit();
            cy.wait(2000);
            getLatestOtp().then((otp) => {
                Loginpagedev.typeOtp(otp, loginData.loginUrl);
                Loginpagedev.clickOtpSubmit(loginData.loginUrl);
            });
            cy.get('span[data-drid="left-panel-header--global-search--slot-labelWrapper"]').should('be.visible')
        });
    });
});


describe('Testing the wild search option', () => {


    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1/updates');
    });

    it('search 1', () => {
        cy.get('span[data-drid="left-panel-header--global-search--slot-labelWrapper"]').should('be.visible').type('12345');
    });

    it('search 2', () => {
        cy.get('span[data-drid="left-panel-header--global-search--slot-labelWrapper"]').should('be.visible').type('45678');
    });

});