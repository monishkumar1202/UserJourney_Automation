export default class WorkDetailsIOTlocators {

    // Restricted Button locators

    get actionsDropdownButton() {
        return cy.get('button[data-drid="work--details-sidebar--dropdown-button"]');
    }

    get deleteButton() {
        return cy.get('[data-drid="work--details-sidebar--delete-button"]');
    }

    get cancelDeleteButton() {
        return cy.get('[data-drid="works--delete-modal-cancel-button"]');
    }

    get confirmDeleteButton() {
        return cy.get('[data-drid="works--delete-modal-confirm-button"]');
    }

    get globalToaster() {
        return cy.get('[data-drid="GLOBAL_TOASTER"]');
    }


}