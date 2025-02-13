import loginpage1 from '../../../pages/Loginpagedev';
import ExplorePage from '../../../pages/ExplorePage';
import CreateOpportunity from '../../../pages/CreateOpportunity';

describe('Create New Opportunity', () => {


         beforeEach(() => {
        
                cy.fixture ('loginData').then((data) => {
                    cy.visit(data.appUrl);
         
                })
            })
        
    it('Login Dever Account and Navigate to Opportunities Page', () => {
                   
            cy.fixture('EngagementOpportunity').then((data) => {
                     loginpage1.typeEmail(data.validUser.email, data.loginUrl);
                     loginpage1.clickLoginSubmit(data.loginUrl);
                    }) 
            cy.fixture('ExplorePage').then((data) => {
                        ExplorePage.clickExploreTab();
                        ExplorePage.searchItem(data.SearchOpp);        
                    })   
    
    });

    it('should create a new opportunity', () => {

            cy.fixture('CreateOpportunity').then((data) => {

                CreateOpportunity.createOpportunity(data.NewOpportunity.title);
                CreateOpportunity.fillOpportunityTitle(data.NewOpportunity.titlename);
                CreateOpportunity.fillDescription(data.NewOpportunity.des);
                CreateOpportunity.selectAccount(data.NewOpportunity.addaccount);
                CreateOpportunity.selectOwner(data.NewOpportunity.addowner);
                CreateOpportunity.fillValue(data.NewOpportunity.totalValue);
                CreateOpportunity.fillArr(data.NewOpportunity.arr);
                CreateOpportunity.selectContacts(data.NewOpportunity.contact);
                CreateOpportunity.selectTags(data.NewOpportunity.tags);
                CreateOpportunity.clickCreateButton();
                 
            // Validate the Opportunity details 
                   
                CreateOpportunity.exitsoppotunity(data.exitsoppotunity);
                CreateOpportunity.VerifyTab();
                CreateOpportunity.VerifyDiscussionTab();
                CreateOpportunity.typeDiscussion(data.NewOpportunity.sendMessage);
                CreateOpportunity.ClickSumbit();
                CreateOpportunity.ValidateMessage();
                CreateOpportunity.CloseButton();
                      
                      
         })

    })



})