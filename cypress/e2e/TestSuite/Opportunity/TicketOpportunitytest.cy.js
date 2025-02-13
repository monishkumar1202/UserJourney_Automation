describe('Ticket Opportunity Test Suite', () => {

    
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

     it('should create a ticket via opportunity', () => {

        cy.fixture('Opportunity').then((data) => {
            // Navigate to the opportunity exist work page
            OpportunityPage.exitsoppotunity(data.TicketOpportunity.existOpportunity);

            // Fill in the opportunity details
            OpportunityPage.clickTicketlink(data.TicketOpportunity.createNewticket);
            OpportunityPage.fillTickettitle(data.TicketOpportunity.tickettitle);
            OpportunityPage.typeDes(data.TicketOpportunity.des);

            // Select the Part
            OpportunityPage.selectPart(data.TicketOpportunity.selectpart);
            OpportunityPage.selectAccount(data.TicketOpportunity.accountcustomer);

            // Sumbit the opportunity create
            OpportunityPage.ClickSumbit();
            
            // Verify the opportunity was created successfully
            OpportunityPage.VerifyTicketTitle(data.TicketOpportunity.tickettitle);
            OpportunityPage.VerifyVistaBoard(data.TicketOpportunity.tickettitle);
            OpportunityPage.CloseTicketPage();
            OpportunityPage.CloseButton();
        });
        
    });
});