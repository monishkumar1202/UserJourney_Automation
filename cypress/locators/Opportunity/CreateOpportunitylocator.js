export default class CreateOpportunity {

    // Button to create new work
    get newWorkButton() { 
        return cy.get('button[data-drid="new-work-button"]'); 
    }

    // Input field for description
    get descriptionInput() { 
        return cy.get('p[data-placeholder="Add description"]'); 
    }

    // Dropdown for selecting account
    get accountDropdown() { 
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-account"]'); 
    }

    // Input field for searching account
    get accountSearchInput() { 
        return cy.get('.select-dropdown__search-input'); 
    }

    // Options for account dropdown
    get accountOptions() { 
        return cy.get('[class="select-dropdown__options"]'); 
    }

    // Dropdown for selecting owner
    get ownedByDropdown() { 
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]'); 
    }

    // Options for owner dropdown
    get ownedByOptions() { 
        return cy.get('div[class="select-dropdown__options"]>div'); 
    }

    // Input field for amount
    get amountInput() { 
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]>div'); 
    }

    // Input field for annual recurring revenue
    get arrInput() { 
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]>div'); 
    }

    // Dropdown for selecting contacts
    get contactsDropdown() { 
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-contacts"]'); 
    }

    // Input field for searching contacts
    get contactsSearchInput() { 
        return cy.get('input[placeholder="Search"]'); 
    }

    // Options for contacts dropdown
    get contactsOptions() { 
        return cy.get('[class="select-dropdown__options"]>div'); 
    }

    // Field for tags
    get tagsField() { 
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]>span', { timeout: 10000 }); 
    }

    // Options for tags dropdown
    get tagsOptions() { 
        return cy.get('[class="select-dropdown__options"]'); 
    }

    // Button to submit and create the opportunity
    get createSubmitButton() { 
        return cy.get('[data-drid="works--create-work-submit"]'); 
    }

    // Tree grid for opportunities
    get opportunityTreeGrid() { 
        return '[role="treegrid"]'; 
    }

    // Tab for discussions
    get discussionsTab() { 
        return '[data-drid="work--timeline--tabs--nav-item--discussions--active"]'; 
    }

    // Tabs validation
    get ValidateTabs() { 
        return '[class="flex bg-area rounded-lg text-color-secondary p-1 text-small w-fit"]'; 
    }

    // Input field for message
    get messageInput() { 
        return '[data-placeholder="Send a message"]'; 
    }

    // Button to submit message
    get submitMessageButton() { 
        return '[data-drid="work--timeline--comments--comments-container--comments-list-container--rich-text-editor--submit-button"]'; 
    }

    // Content of the message
    get messageContent() { 
        return '[data-drid="message-layout--content"]'; 
    }

    // Button to close the sidebar
    get closeSidebarButton() { 
        return '[data-drid="work--details-sidebar--close-button"]'; 
    }
}