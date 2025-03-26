export default class WorkDetailsAccountlocators {

    // Restricted Button locators

    get actionsDropdownButton() {
        return cy.get('[data-drid="account-sidebar--actions-dropdown-button"]');
    }

    get deleteButton() {
        return cy.get('[data-drid="account-sidebar--details-sidebar--delete-button"]');
    }

    get deleteModalTitle() {
        return cy.get('[data-drid="account-sidebar--delete-modal-title"]');
    }

    get cancelDeleteButton() {
        return cy.get('[data-drid="account-sidebar--delete-modal-cancel-button"]');
    }

    get confirmDeleteButton() {
        return cy.get('[data-drid="account-sidebar--delete-modal-confirm-button"]');
    }

    get globalToaster() {
        return cy.get('[data-drid="GLOBAL_TOASTER"]');
    }


}