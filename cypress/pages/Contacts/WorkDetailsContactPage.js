import WorkDetailsContactLocators from ".././../locators/components/WorkDetailesContactlocators";

const workdetails = new WorkDetailsContactLocators();

class WorkDetailsContactPage {


    clickActionDropdown() {
        cy.log('Clicking Actions Dropdown Button');
        workdetails.actionsDeleteButton.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).click();
            } else {
                cy.log('workdetails Actions Dropdown Button is not visible or does not exist.');
            }
        });
    }


    verifyDeleteModals() {
        cy.log('Verifying Delete Modal');

        workdetails.deleteModalTitle.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).should('contain.text', 'Delete Customer');
            } else {
                cy.log('workdetails Delete Modal Title is not visible or does not exist.');
            }
        });

        workdetails.cancelDeleteButton.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).should('contain.text', 'Cancel');
            } else {
                cy.log('workdetails Cancel Button is not visible or does not exist.');
            }
        });

        workdetails.confirmDeleteButton.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).should('contain.text', 'Delete');
            } else {
                cy.log('workdetails Confirm Delete Button is not visible or does not exist.');
            }
        });
    }

    clickConfirmDeleteButton() {
        cy.log('Clicking Confirm Delete Button');
        workdetails.confirmDeleteButton.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).click();
            } else {
                cy.log('workdetails Confirm Delete Button is not visible or does not exist.');
            }
        });
    }


    // Verifies the Global Toaster Message
    verifyDeletionSuccess() {
        workdetails.globalToaster.then($el => {
            if ($el.text().includes('Deleted successfully')) {
                cy.wrap($el).contains(new RegExp(`^Deleted successfully$`)).should('be.visible');
            } else {
                cy.log('Deletion success message not found in global toaster');
            }
        });
    }


}

export default new WorkDetailsContactPage();