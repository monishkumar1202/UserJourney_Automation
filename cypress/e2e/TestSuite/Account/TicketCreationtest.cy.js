import CreateTicket from "../../../pageclass/Accounts/TicketCreationPage"
import ExplorePage from "../../../pages/PreExection/ExplorePage"
import Loginpagedev from "../../../pages/PreExection/Loginpagedev"



describe('Create New Ticket', () => {

    beforeEach(() => {

        cy.fixture('loginData').then((data) => {
            cy.visit(data.appUrl)
        })

    })

    it('Login Dever Account and Navigate to Opportunities Page', () => {

        cy.fixture('loginData').then((data) => {
            //    Loginpagedev.typeEmail(data.validUser.email, data.loginUrl);
            //    Loginpagedev.clickLoginSubmit(data.loginUrl);       
            //    cy.wait(50000) 
        })
        cy.fixture('ExplorePage').then((data) => {
            ExplorePage.clickExploreTab();
            ExplorePage.searchItem(data.SearchOpp);
        })
    })

    it('should create a new ticket successfully', () => {

        cy.fixture('Account').then((data) => {

            CreateTicket.selectAccount(data.ticketAccount.oldaccount)
            CreateTicket.verifyTicketHeader()
            CreateTicket.clickCreateTicket()
            CreateTicket.typeTicketTitle(data.ticketname)
            CreateTicket.typeTicketBody(data.ticketAccount.des)
            CreateTicket.selectPartOption(data.ticketAccount.parts)
            CreateTicket.selectSeverityOption(data.ticketAccount.severity)
            CreateTicket.selectTagsOption(data.ticketAccount.tags)
            CreateTicket.closeDropdown()
            CreateTicket.submitTicket()
            CreateTicket.verifyTicketCreation(data.ticketAccount.ticketname)
            CreateTicket.closeTicketDetails()
            CreateTicket.seeDetails()
            CreateTicket.verifyTicketInGrid(data.ticketAccount.ticketname)

        })

    })
})