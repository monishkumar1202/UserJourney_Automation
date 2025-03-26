import Loginpagedev from "../../../pages/PreExection/Loginpagedev";
import ExplorePage from "../../../pages/PreExection/ExplorePage";
import VistaPage from "../../../pages/Components/VistaBoardpage";
import TicketPage from "../../../pageclass/Tickets/NewWorKTickets";
import DeletePage from "../../../pageclass/Tickets/DeletedTicketpage";
import NewWorkPage from "../../../pages/Components/NewWorkIOTpage";
import { getLatestOtp } from "../../../support/readOtp";



Cypress.Commands.add('login', () => {
    cy.session('login', () => {
        cy.visit('https://app.devrev.ai/test-demo1');
        cy.fixture('loginData').then((loginData) => {
            Loginpagedev.typeEmail(loginData.User01.email);
            Loginpagedev.clickLoginSubmit();
            cy.wait(2000);
            getLatestOtp().then((otp) => {
                Loginpagedev.typeOtp(otp, loginData.loginUrl);
                Loginpagedev.clickOtpSubmit(loginData.loginUrl);
            });
            ExplorePage.exploreTab();
        });
    });
});


describe('Explore the Ticket Attributes', () => {
    let exploreData;
    let ticketData;

    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1');
        cy.fixture('ExplorePage').then((data) => {
            exploreData = data;
        });
        cy.fixture('Ticket').then((data) => {
            ticketData = data;
        });
    });


    // QASE - 5658 & 5657 - validation the Issue Created Successfully
    it('create a ticket sucessfully', () => {

        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.clickTicketOption(ticketData.NewTicket.Ticket);
        NewWorkPage.typeTitle(ticketData.NewTicket.titlename);
        NewWorkPage.typeDescription(ticketData.NewTicket.des);

        //  5658 & 5657 - Fill the Details Created Successfully
        TicketPage.selectOwnerAction(ticketData.NewTicket.addowner);
        TicketPage.addGroupAction(ticketData.NewTicket.group);
        TicketPage.selectAppliesToPart(ticketData.NewTicket.parts);
        TicketPage.selectSeverityAction(ticketData.NewTicket.severity);
        TicketPage.selectTagsAction(ticketData.NewTicket.tags);
        TicketPage.selectDateAction(ticketData.NewTicket.date);
        TicketPage.selectAccountAction(ticketData.NewTicket.account);
        TicketPage.selectReportAction(ticketData.NewTicket.report);
        TicketPage.clickShowAllButton();
        TicketPage.selectSourceChannelAction(ticketData.NewTicket.channel);
        TicketPage.clickSubmitButton();
    });



    // 5657 - Verify the Ticket Successfully delete
    it('Verify the Ticket Successfully delete', () => {

        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        DeletePage.clickTicketItems(ticketData.DeletedTicket.deleteticket);
        DeletePage.clickRestrictedButton();
        DeletePage.clickDeleteMenuButton();
        DeletePage.clickConfirmButton();
        DeletePage.verifyDeletedTicketMessage(ticketData.DeletedTicket.deletedmessage);
        DeletePage.validateVistaTicket();

    })


    // 5658 - Create the Multiple Tickets Successfully
    it('Create the Multiple Tickets Successfully', () => {

        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.typeTitle(ticketData.NewTicket.titlename);
        NewWorkPage.typeDescription(ticketData.NewTicket.des);
        NewWorkPage.selectAppliesToPart(ticketData.NewTicket.parts);

        //     Create Multiples Tickets    
        // NewWorkPage.CreateMultipleButton();
        // NewWorkPage.clickSubmitButton();
        // NewWorkPage.fillTitle(ticketData.MultiTicketTitle.titlename1);
        // NewWorkPage.clickSubmitButton();
        // NewWorkPage.fillTitle(ticketData.MultiTicketTitle.titlename2);
        // NewWorkPage.clickSubmitButton();
        // NewWorkPage.clickCloseButton();

        //     Validate the Creating Ticket display vista Board
        // VistaPage.verifyTicketsCreated(ticketData.MultiTicketTitle.titlename1);
        // VistaPage.verifyTicketsCreated(ticketData.MultiTicketTitle.titlename2);
    })


})


