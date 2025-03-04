import NewWorkTicket from "../../../pages/Tickets/NewWorKTickets";
import readOtp from "../../../support/readOtp";
import NewWorkPage from "../../../pages/Components/NewWorkpage";
import Loginpagedev from "../../../pages/Login/Loginpagedev";
import ExplorePage from "../../../pages/ExplorePage";
import NewWorKTickets from "../../../pages/Tickets/NewWorKTickets";



describe('Create the New Issue ', () => {

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
            ExplorePage.searchItem(data.SearchTicket);
        })

        //QASE-5680
        // Verify ticket creation with all attributes filled correctly 
        cy.fixture('Ticket').then((data) => {
            NewWorkPage.fillTitle(data.NewTicket.titlename);
            NewWorkPage.fillDescription(data.NewTicket.des);
            NewWorkTicket.selectAppliesToPart(data.NewTicket.parts);
            NewWorkTicket.validateAttributeFields(data.AttributeFields.fields);
            NewWorkTicket.vaildateOptionFields(data.AttributeFields.optionfields);
        })

        // Verify ticket creation with future Target close date 

        NewWorKTickets.selectDateAction(data.NewTicket.typedata);

        // Verify Needs response toggle functionality

        NewWorkPage.CreateMultipleButton();
        NewWorkPage.clickSubmitButton();
        NewWorkPage.clickCloseButton();


    })

})