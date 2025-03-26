import Loginpagedev from "../../../../pages/PreExection/Loginpagedev";
import VistaBoardpage from "../../../../pages/Components/VistaBoardpage";
import Detailspage from "../../../../pages/Accounts/WorkDetailAccountPage"
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

describe('Delete the Account item', () => {
    let accountData;
    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1/accounts');
        cy.fixture('Account').then((data) => {
            accountData = data;
        });
    });


    it('should be delect account successfully', () => {

        VistaBoardpage.verifyPresentItem(accountData.deleteAccount.oldaccount);
        Detailspage.clickActionsDropdown();
        Detailspage.clickDeleteButton();
        Detailspage.clickConfirmDelete();
        Detailspage.verifyDeletionSuccess();


        // Validate the Item present item Sucessfully deleted

        VistaBoardpage.verifyItemNotPresent(accountData.deleteAccount.oldaccount);

    })


})