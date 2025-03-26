import Loginpagedev from "../../pages/PreExection/Loginpagedev";
import ExplorePage from "../../pages/PreExection/ExplorePage";
import VistaPage from "../../pages/Components/VistaBoardpage";
import TicketPage from "../../pageclass/Tickets/NewWorKTickets";
import DeletePage from "../../pageclass/Tickets/DeletedTicketpage";
import NewWorkPage from "../../pages/Components/NewWorkIOTpage";
import { getLatestOtp } from "../../support/readOtp";



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


const SelectNewWork = "Ticket"

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


    it('Verify the New Work Ticket Creation Mandatory fields', () => {

        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.clickTicketOption(SelectNewWork);
        NewWorkPage.validateNewWorkBody();
        NewWorkPage.typeTitle(ticketData.Title);
        NewWorkPage.typeDescription(ticketData.Description);
        NewWorkPage.selectAppliesToPart(ticketData.NewTicket.AppliesToPart);
        NewWorkPage.clickSubmitButton();
    })


    it('Verify the New Work Ticket Creation without Title', () => {

        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.clickTicketOption(SelectNewWork);
        NewWorkPage.validateNewWorkBody();
        NewWorkPage.selectAppliesToPart(ticketData.NewTicket.AppliesToPart);
        NewWorkPage.clickSubmitButton();

    })


    it('Verify the New Work Ticket Creation without Description', () => {

        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.clickTicketOption(SelectNewWork);
        NewWorkPage.validateNewWorkBody();
        NewWorkPage.selectAppliesToPart(ticketData.NewTicket.AppliesToPart);
        NewWorkPage.clickSubmitButton();

    })


    it('Verify the New Work Ticket Creation without Priority fields', () => {

        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.clickTicketOption(SelectNewWork);
        NewWorkPage.validateNewWorkBody();
        NewWorkPage.selectAppliesToPart(ticketData.NewTicket.AppliesToPart);
        NewWorkPage.clickSubmitButton();

    })


    it('Verify the New Work Ticket Creation with LinkRecords', () => {

        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.clickTicketOption(SelectNewWork);
        NewWorkPage.validateNewWorkBody();
        NewWorkPage.selectAppliesToPart(ticketData.NewTicket.AppliesToPart);
        NewWorkPage.verifyAddLinkRecord(ticketData.NewTicket.RecordId);
        NewWorkPage.clickSubmitButton();

    })


    it('Verify the New Work Ticket Creation without LinkRecords', () => {

        ExplorePage.searchItem(exploreData.SearchTicket);
        NewWorkPage.clickNewWorkButton();
        NewWorkPage.clickTicketOption(SelectNewWork);
        NewWorkPage.validateNewWorkBody();
        NNewWorkPage.selectAppliesToPart(ticketData.NewTicket.AppliesToPart);
        NewWorkPage.clickSubmitButton();

    })


})