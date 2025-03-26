import cloneOpportunity from "../../../pageclass/Opportunity/CloneOpportunityPage";

describe('Clone Opportunity Test Suite', () => {

    beforeEach(() => {
        cy.fixture('loginData').then((data) => {
            cy.visit(data.appUrl);
        });
    });

    it('Login Dever Account and Navigate to Opportunities Page', () => {
        cy.fixture('EngagementOpportunity').then((data) => {
            loginpage.typeEmail(data.validUser.email, data.loginUrl);
            loginpage.clickLoginSubmit(data.loginUrl);
        });
        cy.fixture('ExplorePage').then((data) => {
            ExplorePage.clickExploreTab();
            ExplorePage.searchItem(data.SearchOpp);
        });
    });

    it('should clone an opportunity successfully', () => {
        cy.fixture('Opportunity').then((data) => {
            cloneOpportunity.existOpportunity(data.CloneOpportunity.existOpportunity);
            cloneOpportunity.clickDropdownButton();
            cloneOpportunity.clickCloneButton();
            cloneOpportunity.fillTitle(data.CloneOpportunity.clonetitle);
            cloneOpportunity.clickSubmitButton();
            cloneOpportunity.clickCloseButton();
        });
    });
});
