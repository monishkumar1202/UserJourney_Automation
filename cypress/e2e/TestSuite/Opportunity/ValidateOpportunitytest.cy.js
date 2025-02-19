import validateDashboard from "../../../locators/Opportunity/ValidateDashboardlocator";


describe('Validate Opportunity Tests', () => {

    it('should perform a specific test', () => {
       
        beforeEach(() => {
                    
             cy.fixture ('loginData').then((data) => {
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

                it('should validate the discussion elements on the Opportunity page', () => {
                    cy.fixture('Opportunity').then((data) => {
                        DiscussionOpportunity.VerifyHeader(data.ValidOpportunity.existOpportunity);
                        DiscussionOpportunity.VerifyCreateButton();
                        DiscussionOpportunity.verifyTableHeader();
                        DiscussionOpportunity.VerifyComponents();
                        
                    });
                });


    });
});