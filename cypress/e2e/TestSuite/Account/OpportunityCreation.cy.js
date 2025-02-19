 import ExplorePage from "../../../pages/ExplorePage"
 import CreateOpportunity from "../../../locators/Opportunity/CreateOpportunitylocator"
 import Loginpagedev from "../../../pages/Loginpagedev"
 
 
 
describe('Create New Ticket', () => {


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

        it('should create a new ticket successfully', () => {  
              
            cy.fixture ('Account').then((data) => {

                CreateOpportunity.selectAccount(data.OpportunityAccount.oldaccount)
                CreateOpportunity.collapseAccountSidebar()
                CreateOpportunity.clickNextTab()
                CreateOpportunity.selectOpportunitiesMenu(data.OpportunityAccount)
                CreateOpportunity.clickCreateOpportunity()
                CreateOpportunity.typeOpportunityTitle(data.OpportunityAccount.titlename)
                CreateOpportunity.selectOwnedBy(data.OpportunityAccount.addowner)
                CreateOpportunity.typeAmount(data.OpportunityAccount.amount)
                CreateOpportunity.typeAnnualRecurringRevenue(data.OpportunityAccount.arr)
                CreateOpportunity.selectTags(data.OpportunityAccount.tags)
                CreateOpportunity.closeDropdown()
                CreateOpportunity.submitOpportunity()
                CreateOpportunity.verifyOpportunityTitle(data.OpportunityAccount.titlename)
                CreateOpportunity.closeOpportunityDetails()
                CreateOpportunity.clickOpportunityHeader()
                CreateOpportunity.verifyOpportunityInAccountDetails(data.OpportunityAccount.titlename)
                CreateOpportunity.closeAccountSidebar()


            })

        })

    })