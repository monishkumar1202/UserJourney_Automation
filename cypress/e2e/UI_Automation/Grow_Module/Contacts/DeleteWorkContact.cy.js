import DeleteContact from "../../../../pages/Contacts/WorkDetailsContactPage";
import VistaBoardpage from "../../../../pages/Components/VistaBoardpage";
import Loginpagedev from "../../../../pages/PreExection/Loginpagedev";
import { getLatestOtp } from "../../../../support/readOtp";
import vistaBoardPage from "../../../../locators/components/VistaBoardlocators";




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


describe('Delete the Account Sucessfully', () => {
    let contactData;
    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1/accounts');
        cy.fixture('Contact').then((data) => {
            contactData = data;
        });
    });


    it('should be delect contact successfully', () => {

        VistaBoardpage.verifyPresentItem(contactData.deletecontact.workitem);
        DeleteContact.clickActionDropdown();
        DeleteContact.clickConfirmDeleteButton();
        DeleteContact.verifyDeletionSuccess();

        // Validate the Work contact is deleted successfully

        VistaBoardpage.verifyItemNotPresent(contactData.deletecontact.workitem);

    })
})






