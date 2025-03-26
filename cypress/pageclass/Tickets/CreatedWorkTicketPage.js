import ticketCreatedPanel from "../../locators/components/CreatedWorkPagelocators";

const ticketpanel = new ticketCreatedPanel();

class TicketDetailsPanel {


    validateTicketAttributes(attribute) {
        ticketpanel.ticketAttributeFields(attribute).should('be.visible');
    }



}