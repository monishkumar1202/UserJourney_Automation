export default class CreateOpportunity {

    get newWorkButton() { return cy.get('button[data-drid="works--new-work-button"]', { timeout: 30000 }); }
    get titleInput() { return cy.get('input[name="title"]', { timeout: 20000 }); }
    get descriptionInput() { return cy.get('p[data-placeholder="Add description"]'); }
    get accountDropdown() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-account"]'); }
    get accountSearchInput() { return cy.get('.select-dropdown__search-input'); }
    get accountOptions() { return cy.get('[class="select-dropdown__options"]'); }
    get ownedByDropdown() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]'); }
    get ownedByOptions() { return cy.get('div[class="select-dropdown__options"]>div'); }
    get amountInput() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]>div'); }
    get arrInput() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]>div'); }
    get contactsDropdown() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-contacts"]'); }
    get contactsSearchInput() { return cy.get('input[placeholder="Search"]'); }
    get contactsOptions() { return cy.get('[class="select-dropdown__options"]>div'); }
    get tagsField() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]>span', { timeout: 10000 }); }
    get tagsOptions() { return cy.get('[class="select-dropdown__options"]'); }
    get createSubmitButton() { return cy.get('[data-drid="works--create-work-submit"]'); }

    get opportunityTreeGrid() { return '[role="treegrid"]'; }
    get discussionsTab() { return '[data-drid="work--timeline--tabs--nav-item--discussions--active"]'; }
    get ValidateTabs() { return '[class="flex bg-area rounded-lg text-color-secondary p-1 text-small w-fit"]'; }
    get messageInput() { return '[data-placeholder="Send a message"]'; }
    get submitMessageButton() { return '[data-drid="work--timeline--comments--comments-container--comments-list-container--rich-text-editor--submit-button"]'; }
    get messageContent() { return '[data-drid="message-layout--content"]'; }
    get closeSidebarButton() { return '[data-drid="work--details-sidebar--close-button"]'; }


    
     
 }