export default class WorkDetailsContactlocators {

    // Delete Button locators

    get actionsDeleteButton() {
        return cy.get('[data-drid="revu--details-sidebar--delete-button"]');
    }

    get deleteModalTitle() {
        return cy.get('[data-drid="revu--delete-modal-title"]');
    }

    get cancelDeleteButton() {
        return cy.get('[data-drid="revu--delete-modal-cancel-button"]');
    }

    get confirmDeleteButton() {
        return cy.get('[data-drid="revu--delete-modal-confirm-button"]');
    }

    get globalToaster() {
        return cy.get('[data-drid="GLOBAL_TOASTER"]');
    }


}