import DeleteTicket from "../../locators/Tickets/DeletedTicketlocator"

const deleteticket = new DeleteTicket();

class DeleteTicketpage {

  clickTicketItems(ticket) {
    if (!ticket) {
      cy.log('No ticket provided for clicking.');
      return;
    }
    cy.log(`Attempting to click on ticket: ${ticket}`);
    deleteticket.existingTicket.contains(ticket, { timeout: 5000 }).should('be.visible').click({ force: true });
  }


  clickRestrictedButton() {
    deleteticket.dropdownButton.should('be.visible').click();
  }

  clickDeleteMenuButton() {
    deleteticket.deleteOption.contains('Delete').click();
  }

  clickCloseDeleteTab() {
    deleteticket.closeDeleteTab().should('be.visible').click();
  }

  clickConfirmButton() {
    deleteticket.confirmButton.should('be.visible').contains('Delete').click();
  }

  verifyDeletedTicketMessage() {
    deleteticket.deletedTicketMessage.should('be.visible');
  }

  validateVistaTicket(ticket) {
    if (!ticket) {
      cy.log('No ticket provided for validation.');
      return;
    }
    cy.log(`Validating that ticket "${ticket}" is not present in VistaBoard.`);
    deleteticket.ticketItems.should('exist').should('not.contain', ticket);
  }



}

export default new DeleteTicketpage();