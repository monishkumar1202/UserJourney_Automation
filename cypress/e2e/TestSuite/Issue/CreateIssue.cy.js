import Loginpagedev from "../../../pages/Loginpagedev";
import ExplorePage from "../../../pages/ExplorePage";
import NewWorkPage from "../../../pages/Components/NewWorkpage";
import IssueDetailsPage from "../../../pages/Issue/NewIssuePage";
import readOtp from "../../../support/readOtp";



// QASE - 5658
describe ('Create the New Issue ', ()=> {


     beforeEach(() => {
        
            cy.fixture('loginData').then((data) => {
                  cy.visit(data.prodUrl);
                 
            })
       })
        
        it('Login Dever Account and Navigate to Opportunities Page', () => {
                   
        //      cy.fixture('loginData').then((data) => {
        //      Loginpagedev.typeEmail(data.User01.email, data.loginUrl);
        //      Loginpagedev.clickLoginSubmit(data.loginUrl);
        //      cy.wait(3000)       
        //      readOtp.getLatestOtp().then((otp) => {
        //           Loginpagedev.typeOtp(otp, data.loginUrl);
        //           Loginpagedev.clickOtpSubmit(data.loginUrl);            
        //     });
        // })
             cy.fixture('ExplorePage').then((data) => {
               ExplorePage.clickExploreTab();
               ExplorePage.searchItem(data.SearchIssues);                    
           })  
             
            // validation the Issue Created Sucessfully
                    
             cy.fixture('Issue').then((data) => {                
                 NewWorkPage.clickNewWorkButton();
                 NewWorkPage.selectNewWork(data.SelectOption.selectIssue);
                 NewWorkPage.fillTitle(data.Newissue.titlename);
                 NewWorkPage.FillDescription(data.Newissue.des);
                 NewWorkPage.ValidateToolBarElements();

             // Fill the Details Created Sucessfully
                 IssueDetailsPage.selectAppliesToPart(data.Newissue.parts);
                 IssueDetailsPage.selectOwnedBy(data.Newissue.addowner);
                 IssueDetailsPage.selectPriority(data.Newissue.priority);
                 IssueDetailsPage.selectTags(data.Newissue.tags);
                 IssueDetailsPage.selectReportedBy(data.Newissue.reportedby);
            //   IssueDetailsPage.enterSprint(data.Newissue.sprint);
                 IssueDetailsPage.clickSubmit();    
                 
             //  Validate the New Work Issue Page 

         })
    
      })

  })
  
