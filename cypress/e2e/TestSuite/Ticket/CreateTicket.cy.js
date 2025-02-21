import Loginpagedev from "../../../pages/Loginpagedev";
import ExplorePage from "../../../pages/ExplorePage";
import TicketPage from "../../../pages/Tickets/NewWorKTickets";
import NewWorkPage from "../../../pages/Components/NewWorkIOTPage";




describe('Create the New Ticket' , () => {


    beforeEach(() => {
            
        cy.fixture('loginData').then((data) => {
        cy.visit(data.appUrl);
        cy.view
        })
    })
            
     it('Login Dever Account and Navigate to Opportunities Page', () => {
                       
        cy.fixture('loginData').then((data) => {
         Loginpagedev.typeEmail(data.User01.email, data.loginUrl);
    //  Loginpagedev.clickLoginSubmit(data.loginUrl);       
           cy.wait(50000) 
        }) 
        cy.fixture('ExplorePage').then((data) => {
           ExplorePage.clickExploreTab();
           ExplorePage.searchItem(data.SearchIssues);                    
        })  
     
    // validation the Issue Created Sucessfully
                        
        cy.fixture('Issue').then((data) => {

        // NewWorkPage.
        // TicketPage.




    
        })
        
    })
    
})
    


  