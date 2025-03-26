import ContactPage from "../../../pageclass/Accounts/ContactCreationPage";
import Loginpagedev from "../../../pages/PreExection/Loginpagedev";
import ExplorePage from "../../../pages/PreExection/ExplorePage";



describe('Contact Creation Test', () => {

    beforeEach(() => {

        cy.fixture('loginData').then((data) => {
            cy.visit(data.appUrl)
        })

    })

    it('Login Dever Account and Navigate to Opportunities Page', () => {

        cy.fixture('loginData').then((data) => {
            //    Loginpagedev.typeEmail(data.validUser.email, data.loginUrl);
            //    Loginpagedev.clickLoginSubmit(data.loginUrl);       
            //    cy.wait(50000) 
        })
        cy.fixture('ExplorePage').then((data) => {
            ExplorePage.clickExploreTab();
            ExplorePage.searchItem(data.SearchOpp);
        })
    })

    it('should create a new contact successfully', () => {

        cy.fixture('Account').then((data) => {
            // Create the Contact via accounts 
            ContactPage.ContactCreation();
            ContactPage.fillDisplayName(data.contactAccount.titlename);
            ContactPage.fillDescription(data.contactAccount.des);
            ContactPage.fillEmail(data.contactAccount.email);
            ContactPage.fillPhoneNumber(data.contactAccount.phoneno);
            ContactPage.selectCountryCode(data.contactAccount.countrycode);
            ContactPage.selectTag(data.contactAccount.tags);
            ContactPage.clickCreateButton();
            // Validate the contact details displayed
            ContactPage.verifyContactTitle(data.contactAccount.titlename);
            ContactPage.clickCloseButton();
            ContactPage.verifyUserHeader();
            ContactPage.clickSeeAllDetailsButton();
            ContactPage.verifyTreegrid(data.contactAccount.titlename);

        })
    });

});