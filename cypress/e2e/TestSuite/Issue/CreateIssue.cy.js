import Loginpagedev from "../../../pages/Loginpagedev";
import ExplorePage from "../../../pages/ExplorePage";
import NewWorkPage from "../../../pages/Components/NewWorkIOTPage";


describe ('Create the New Issue ', ()=> {


       beforeEach(() => {
        
            cy.fixture('loginData').then((data) => {
                  cy.visit(data.appUrl);
            })
       })
        
        it('Login Dever Account and Navigate to Opportunities Page', () => {
                   
             cy.fixture('loginData').then((data) => {
         //    Loginpagedev.typeEmail(data.User01.email, data.loginUrl);
         //    Loginpagedev.clickLoginSubmit(data.loginUrl);       
             cy.wait(50000) 
           }) 
             cy.fixture('ExplorePage').then((data) => {
                ExplorePage.clickExploreTab();
                ExplorePage.searchItem(data.SearchIssues);                    
           })  
 
            // validation the Issue Created Sucessfully
                    
             cy.fixture('Issue').then((data) => {
                 NewWorkPage.clickNewWorkButton();
                 NewWorkPage.selectNewWork(data.Newissue.titlename);
                 NewWorkPage.fillTitle(data.Newissue.titlename);
                 NewWorkPage.fillDescription(data.Newissue.des);
                 NewWorkPage.ValidateToolBarElements();
         })
    
      })

   })
