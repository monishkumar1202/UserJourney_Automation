import CreateAccount from "../../../pageclass/Accounts/CreateNewAccountPage"
import Loginpagedev from "../../../pages/PreExection/Loginpagedev";
import ExplorePage from "../../../pages/PreExection/ExplorePage";



describe('Create New Account', () => {

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

    it('should create a new account successfully', () => {

        cy.fixture('Account').then((data) => {

            CreateAccount.clickCreateAccountButton();
            CreateAccount.fillDisplayName(data.NewAccount.titlename)
            CreateAccount.fillDescription(data.NewAccount.des);
            CreateAccount.fillWebsites(data.NewAccount.websites)
            CreateAccount.selectTag(data.NewAccount.tags)
            CreateAccount.clickCreateSubmitButton()
            CreateAccount.verifyAccountTitle(data.NewAccount.titlename)
            CreateAccount.clickDiscussionsTab();
            CreateAccount.fillMessageInput(data.NewAccount.message);
            CreateAccount.clickSubmitMessageButton();
            CreateAccount.verifyCommentsListItem();
            CreateAccount.clickCloseButton();
            CreateAccount.verifyTreeGrid();
        })

    });
});