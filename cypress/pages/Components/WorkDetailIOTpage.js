import WorkDetailIOTPage from "../../locators/components/WorkDetailsIOTlocators";

const workdetails = new WorkDetailIOTPage();



class WorkDetailIOTpage {

    clickActionDropdown() {
        cy.log('Clicking Actions Dropdown Button');
        workdetails.actionsDropdownButton.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).click();
            } else {
                cy.log('workdetails Actions Dropdown Button is not visible or does not exist.');
            }
        });
    }

    clickDeleteButtons() {
        cy.log('Clicking Delete Button');
        workdetails.deleteButton.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).click();
            } else {
                cy.log('workdetails Delete Button is not visible or does not exist.');
            }
        });
    }

    verifyDeleteModals() {
        cy.log('Verifying Delete Modal');


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
export default new WorkDetailIOTpage();