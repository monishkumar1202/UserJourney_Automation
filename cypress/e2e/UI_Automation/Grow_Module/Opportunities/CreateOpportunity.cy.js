import Loginpagedev from "../../../../pages/PreExection/Loginpagedev";
import ExplorePage from "../../../../pages/PreExection/ExplorePage";
import VistaBoardpage from "../../../../pages/Components/VistaBoardpage";
import OpportunityPage from "../../../../pages/Components/NewWorkIOTpage";
// import { getLatestOtp } from "../../../../support/readOtp";

Cypress.Commands.add('login', () => {
    cy.session('login', () => {
        cy.visit('https://app.devrev.ai/test-demo1');
        cy.fixture('loginData').then((loginData) => {
            Loginpagedev.typeEmail(loginData.User01.emailid);
            Loginpagedev.clickLoginSubmit();
            cy.wait(50000);
            // getLatestOtp().then((otp) => {
            //     Loginpagedev.typeOtp(otp);
            //     Loginpagedev.clickOtpSubmit();
            // });
            // VistaBoardpage.ClickNewWorkAccountButton();
        });
    });
});

describe('Create the New Contact', () => {
    let oppData;
    before(() => {
        cy.fixture('Opportunity').then((data) => {
            oppData = data;
        });
    });
    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1/explore?query=opportunities');
        ExplorePage.validateAndPerformAction('Work');
    });


    it('should create a new Opportunity successfully', () => {


        VistaBoardpage.ClickNewWorkIOTButton();
        OpportunityPage.typeTitle(oppData.NewOpportunity.titlename); // faker liabary
        OpportunityPage.typeDescription(oppData.NewOpportunity.description); // faker liabary
        OpportunityPage.selectAppliesToPart(oppData.NewOpportunity.appliesToPart);
        OpportunityPage.selectOwnedBy(oppData.NewOpportunity.ownedBy);
        OpportunityPage.enterAmount(oppData.NewOpportunity.amount); // faker liabary
        OpportunityPage.enterARR(oppData.NewOpportunity.arr); // faker liabary
        OpportunityPage.selectContact(oppData.NewOpportunity.contact);
        OpportunityPage.selectTag(oppData.NewOpportunity.tag);
        OpportunityPage.clickSubmitButton();

        // validate the vista board opportunity 



    })

    // it('should create a new Opportunity without Title', () => {

    //     VistaBoardpage.ClickNewWorkAccountButton();
    //     OpportunityPage.typeDescription(oppData.NewOpportunity.description);
    //     OpportunityPage.selectAppliesToPart(oppData.NewOpportunity.appliesToPart);
    //     OpportunityPage.selectOwnedBy(oppData.NewOpportunity.ownedBy);
    //     OpportunityPage.clickSubmitButton();

    // })

    // it('should create a new contact without Description', () => {

    //     VistaBoardpage.ClickNewWorkAccountButton();
    //     OpportunityPage.typeTitle(oppData.NewOpportunity.titlename);
    //     OpportunityPage.selectAppliesToPart(oppData.NewOpportunity.appliesToPart);
    //     OpportunityPage.selectOwnedBy(oppData.NewOpportunity.ownedBy);
    //     OpportunityPage.clickSubmitButton();
    // })

    // it('should create a new contact without Applies To Part', () => {

    //     VistaBoardpage.ClickNewWorkAccountButton();
    //     OpportunityPage.typeTitle(oppData.NewOpportunity.titlename);
    //     OpportunityPage.typeDescription(oppData.NewOpportunity.description);
    //     OpportunityPage.clickSubmitButton();
    // });

})

