
import CreateIssuePage from "../../../Pages/Issues/CreateIssuePage";

describe ('Create the New Issue ', ()=> {

    const searchValue = 'Issuesd';

    let basePage;

    before(() => {
        basePage = new BasePage();
    })

 
    it ('validation the Issue Created Sucessfully',()=> {
    
      
    //  loginPage.loginWithUI(Cypress.env('email'));
    //  loginPage.logindirectUI();
        ExplorePage.searchItem(searchValue);
        CreateIssuePage.createIssue(issuesdetails);  

     })
    
    
    })