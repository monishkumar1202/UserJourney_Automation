import WorkDetailsAccountPage from "../../locators/components/WorkDetailsAccountlocators";


class WorkDetailsAccount {


    //-----first way apporach to handle elements

    handleElement(action, element, message) {
        cy.log(message);
        element.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el)[action]();
            } else {
                cy.log(`workdetails ${message} - Element is not visible or does not exist.`);
            }
        });
    }

    clickActionsDropdown() {
        this.handleElement('click', workdetails.actionsDropdownButton, 'Clicking Actions Dropdown Button');
    }

    clickDeleteButton() {
        this.handleElement('click', workdetails.deleteButton, 'Clicking Delete Button');
    }

    clickConfirmDelete() {
        this.handleElement('click', workdetails.confirmDeleteButton, 'Clicking Confirm Delete Button');
    }

    verifyDeleteModal() {
        cy.log('Verifying Delete Modal');

        const elements = [
            { el: workdetails.deleteModalTitle, text: 'Delete account', name: 'Delete Modal Title' },
            { el: workdetails.cancelDeleteButton, text: 'Cancel', name: 'Cancel Button' },
            { el: workdetails.confirmDeleteButton, text: 'Delete', name: 'Confirm Delete Button' }
        ];

        elements.forEach(({ el, text, name }) => {
            el.then($el => {
                if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                    cy.wrap($el).should('contain.text', text);
                } else {
                    cy.log(`workdetails ${name} is not visible or does not exist.`);
                }
            });
        });
    }

    //-----second ways apporach to handle elements

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

        workdetails.deleteModalTitle.then($el => {
            if ($el.length > 0 && Cypress.$($el).is(':visible')) {
                cy.wrap($el).should('contain.text', 'Delete account');
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


const workdetails = new WorkDetailsAccountPage();
export default new WorkDetailsAccount();