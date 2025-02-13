// Created: 04.19.21
// import Loginpagedev from '../../../pages/Loginpagedev'; 
import ExplorePage from '../../../pages/ExplorePage'; 
 import AddEngagement from "../../../pages/Opportunity/EngagementOpportunityPage"


describe('Add Engagement details via Opportunities', () => {

    
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

    it('should create a new engagement', () => {
   
          cy.fixture('Opportunity').then((data) => {         

          AddEngagement.existingOpportunity(data.EngagementOpportunity.existingOpportunityname);  
          AddEngagement.engagementTab();   
          AddEngagement.createEngagementButton();     
          AddEngagement.selectEngagementType(data.EngagementOpportunity.engagementType);
          AddEngagement.fillEngagementTitle(data.EngagementOpportunity.engagementTitle);
          AddEngagement.fillDescription(data.EngagementOpportunity.description);
          AddEngagement.selectOwner(data.EngagementOpportunity.ownerName);
          AddEngagement.fillExternalURL(data.EngagementOpportunity.url);
          AddEngagement.clickCreateButton();
          AddEngagement.closeEngagementSidebar();

        })   
    })
})

