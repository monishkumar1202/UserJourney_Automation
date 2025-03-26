import VistaBoardpage from "../../../../pages/Components/VistaBoardpage";
import Loginpagedev from "../../../../pages/PreExection/Loginpagedev";
import { getLatestOtp } from "../../../../support/readOtp";
import vistaBoardPage from "../../../../locators/components/VistaBoardlocators";
import ExplorePage from "../../../../pages/PreExection/ExplorePage";




Cypress.Commands.add('login', () => {
    cy.session('login', () => {
        cy.visit('https://app.devrev.ai/test-demo1');
        cy.fixture('loginData').then((loginData) => {
            Loginpagedev.typeEmail(loginData.User02.email);
            Loginpagedev.clickLoginSubmit();
            cy.wait(20000);
            // getLatestOtp().then((otp) => {
            //     Loginpagedev.typeOtp(otp);
            //     Loginpagedev.clickOtpSubmit();
            // });
            cy.url().should("include", "/test-demo1/updates");
        });
    });
});


describe('Delete the opportunity Sucessfully', () => {
    let oppData;
    beforeEach(() => {
        cy.login('monishkumarsk12@gmail.com');
        cy.visit('https://app.devrev.ai/test-demo1/explore?query=opportunities');
        cy.wait(30000);
        cy.fixture('Opportunity').then((data) => {
            oppData = data;
        });
    });


    it('should search for the workitem using the filter option for Account', () => {

        ExplorePage.validateAndPerformAction('Work');
        //VistaBoardpage.ClickClearButton();
        //VistaBoardpage.ApplyAttributeFilters();
        VistaBoardpage.SearchWorkItem(oppData.SearchOpportunity.searchFilterItem);
        //VistaBoardpage.clickAssignToMe();
    })

    it('should validate the workitem is assign to me', () => {

        ExplorePage.validateAndPerformAction();
        VistaBoardpage.ClickClearButton();
        VistaBoardpage.clickAssignToMe();

    })

})






