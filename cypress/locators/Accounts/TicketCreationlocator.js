export default class TicketLocators {
    
    get displayName() {
        return cy.get('[col-id="displayName"]');
    }

    get ticketHeader() {
        return cy.get('[data-drid="revo-widget-header--ticket"]');
    }

    get createTicketButton() {
        return cy.get('[data-drid="revo--create-ticket"]');
    }

    get ticketTitleInput() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]');
    }

    get ticketBodyEditor() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]');
    }

    get selectPart() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]').contains('Select part');
    }

    get partOptions() {
        return cy.get('.select-dropdown__options');
    }

    get severityDropdown() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-severity"]');
    }

    get tagsDropdown() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]');
    }

    get createWorkSubmitButton() {
        return cy.get('[data-drid="works--create-work-submit"]').contains('Create');
    }

    get ticketNameVerification() {
        return cy.get('[data-drid="work--info-header--show-input"]', { timeout: 20000 });
    }

    get closeButton() {
        return cy.get('[data-drid="work--details-sidebar--close-button--slot-start"]');
    }

    get AllDetailsButton() {
        return cy.get('[data-drid="revo-widget--see-all-details"]');
    }

    get treeGrid() {
        return cy.get('[role="treegrid"]', { timeout: 20000 });
    }
}

const ticketlocators = new TicketLocators();