import DeleteOpportunity from "../../../../pages/Components/WorkDetailIOTpage";
import VistaBoardpage from "../../../../pages/Components/VistaBoardpage";
import Loginpagedev from "../../../../pages/PreExection/Loginpagedev";
import { getLatestOtp } from "../../../../support/readOtp";
import vistaBoardPage from "../../../../locators/components/VistaBoardlocators";
import ExplorePage from "../../../../pages/PreExection/ExplorePage";




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


describe('Delete the opportunity Sucessfully', () => {
    let oppData;
    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1/explore?query=opportunities');
        cy.fixture('Contact').then((data) => {
            oppData = data;
        });
    });


    it('should be delete the Opportunity successfully', () => {

        ExplorePage.validateAndPerformAction();
        VistaBoardpage.verifyPresentItem(oppData.DeleteOpportunity.Workitem);
        DeleteOpportunity.clickActionDropdown();
        DeleteOpportunity.clickDeleteButtons();
        DeleteOpportunity.clickConfirmDeleteButton();
        DeleteOpportunity.verifyDeletionSuccess();

        // Validate the Work contact is deleted successfully

        VistaBoardpage.verifyItemNotPresent(oppData.DeleteOpportunity.Workitem);

    })
})






