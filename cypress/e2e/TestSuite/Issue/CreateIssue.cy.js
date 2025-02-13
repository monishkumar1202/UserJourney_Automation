import BasePage from "../../../Pages/BasePage";
import ExplorePage from "../../../Pages/ExplorePage";
import loginPage from "../../../Pages/loginPage";
import CreateIssuePage from "../../../Pages/Issues/CreateIssuePage";

describe ('Create the New Issue ', ()=> {

    const searchValue = 'Issuesd';

    const issuesdetails = {

        titlename : 'issue created by testing user journey',
        des : 'Issue with clicking the button',
        parts : 'testingUserjourney',
        addowner : 'Adhithya Sankar C ',
        priority : 'P3',
        stagecompleted : 'Completed',
        stagewontfix :  'Wont Fix',
        stageduplicate : 'Duplicate',
        wontfixmessage : 'This is not valid Bug',
        stageOpenBac      : 'Backlog',
        stageOpenPri      : 'Prioritized',
        stageDev          : 'In Development',
        partsname         : 'testingUserJourney',
        dashboardname     : 'DashboardIssues',
        dashboarddes      : 'Issue User Journery',
        sprinttitle       :  'Sprint 31-14'

    }

    let basePage;

    before(() => {
        basePage = new BasePage();
    })

 
    it ('validation the Issue Created Sucessfully',()=> {
    
      
    //  loginPage.loginWithUI(Cypress.env('email'));
      loginPage.logindirectUI();
      ExplorePage.searchItem(searchValue);
      CreateIssuePage.createIssue(issuesdetails);  

     })
    
    
    })