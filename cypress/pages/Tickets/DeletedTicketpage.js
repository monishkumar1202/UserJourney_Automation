import DeleteTicket from "../../locators/Tickets/DeletedTicketlocator"

const deleteticket = new DeleteTicket();

class DeleteTicketpage {

  clickTicketItems(ticket) {
    deleteticket.existingTicket.contains(ticket).should('be.visible').click();
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
    deleteticket.ticketItems.should('not.contain', new RegExp(`^${ticket}$`));
  }



}

export default new DeleteTicketpage();