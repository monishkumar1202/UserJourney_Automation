import TicketCreate from "../../locators/Accounts/TicketCreationlocator"

const ticketcreate = new TicketCreate();


class TicketCreate {

    selectAccount(accountName) {
        ticketcreate.displayName.contains(accountName).click();
    }

    verifyTicketHeader() {
        ticketcreate.ticketHeader.should('have.text', 'Tickets');
    }

    clickCreateTicket() {
        ticketcreate.createTicketButton.click();
    }

    
    typeTicketTitle(ticketName) {
        ticketcreate.ticketTitleInput.type(ticketName);
    }

    typeTicketBody(body) {
        ticketcreate.ticketBodyEditor.type(body);
    }

    selectPartOption(part) {
        ticketcreate.selectPart.click();
        ticketcreate.partOptions.contains(part).click();
    }

    selectSeverityOption(severity) {
        ticketcreate.severityDropdown.click();
        ticketcreate.partOptions.contains(severity).click();
    }

    selectTagsOption(tags) {
        ticketcreate.tagsDropdown.click();
        ticketcreate.partOptions.contains(tags).click();
    }

    closeDropdown() {
        cy.get('body').click(0, 0); 
    }


    submitTicket() {
        ticketcreate.createWorkSubmitButton.click();
    }

    verifyTicketCreation(ticketName) {
        ticketcreate.ticketNameVerification.contains(ticketName).should('be.visible');
    }

    closeTicketDetails() {
        ticketcreate.closeButton.click();
    }

    seeDetails() {
        ticketcreate.seeAllDetailsButton.click();
    }

    verifyTicketInGrid(ticketName) {
        ticketcreate.treeGrid.should('contain', ticketName);
}





}