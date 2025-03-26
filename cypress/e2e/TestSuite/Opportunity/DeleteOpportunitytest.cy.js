import deleteopp from "../../../pageclass/Opportunity/DeleteOpportunityPage"
import loginpage from '../../../pages/PreExection/Loginpagedev';
import ExplorePage from '../../../pages/PreExection/ExplorePage';


describe('Delete Opportunity Test Suite', () => {

    beforeEach(() => {

        cy.fixture('loginData').then((data) => {
            cy.visit(data.appUrl);

        })
    })

    it('Login Dever Account and Navigate to Opportunities Page', () => {

        cy.fixture('EngagementOpportunity').then((data) => {
            loginpage.typeEmail(data.validUser.email, data.loginUrl);
            loginpage.clickLoginSubmit(data.loginUrl);
        })
        cy.fixture('ExplorePage').then((data) => {
            ExplorePage.clickExploreTab();
            ExplorePage.searchItem(data.SearchOpp);
        })

    });

    it('should delete an opportunity successfully', () => {

        cy.fixture('Opportunity').then((data) => {

            deleteopp.exitsoppotunity(data.DeleteOpportunity.deleteopportunityname);
            deleteopp.Clickdropdown();
            deleteopp.ClickdeleteButton();
            deleteopp.ClickconfirmDeleteButton();
            deleteopp.globalToaster();

        })
    })




});
