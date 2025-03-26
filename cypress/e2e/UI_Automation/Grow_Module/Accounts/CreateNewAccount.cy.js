import Loginpagedev from "../../../../pages/PreExection/Loginpagedev";
import VistaBoardpage from "../../../../pages/Components/VistaBoardpage";
import CreateAccountPage from "../../../../pages/Accounts/CreateNewAccountPage"
import { getLatestOtp } from "../../../../support/readOtp";

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
            VistaBoardpage.ClickNewWorkAccountButton();
        });
    });
});

describe('Create the New Account', () => {
    let accountData;
    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1/accounts');
        cy.fixture('Account').then((data) => {
            accountData = data;
        });
    });


    it('should create a new account successfully', () => {

        VistaBoardpage.ClickNewWorkAccountButton();
        CreateAccountPage.fillDisplayName(accountData.AccountName);
        CreateAccountPage.fillDescription(accountData.AccountDescription);
        CreateAccountPage.fillWebsites(accountData.AccountWebsites);
        CreateAccountPage.selectTag(accountData.AccountTag);
        CreateAccountPage.clickCreateSubmitButton();

    });

    it('should create a new account without Title', () => {

        VistaBoardpage.ClickNewWorkAccountButton();
        CreateAccountPage.fillDescription(accountData.AccountDescription);
        CreateAccountPage.fillWebsites(accountData.AccountWebsites);
        CreateAccountPage.selectTag(accountData.AccountTag);
        CreateAccountPage.clickCreateSubmitButton();

    })

});
