import EngagementPage from "../../../locators/Accounts/AccountEngagementlocator";

describe('Contact Engagement Test Suite', () => {
    
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


        it('should visit the contact page and check for engagement elements', () => {
           
            cy.fixture('Account').then()
            EngagementPage.existingAccountItem(data.engagementAccount.oldaccount)
            EngagementPage.clickAccountSidebarCollapsed();
            EngagementPage.clickEngagementsTab();
            EngagementPage.clickCreateEngagement();
            EngagementPage.clickUndefinedTrigger();
            EngagementPage.selectDropdownOption(data.engagementAccount.header)
            EngagementPage.fillEngagementTitle(data.engagementAccount.engagementtilte)
            EngagementPage.fillDescription()
            EngagementPage.selectMember(data.engagementAccount.members)
            EngagementPage.fillExternalUrl(data.engagementAccount.url)
            EngagementPage.clickCreateSubmitButton();
            EngagementPage.clickCloseButton();

    });
});