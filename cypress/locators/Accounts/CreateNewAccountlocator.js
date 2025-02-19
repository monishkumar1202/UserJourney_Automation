export default class CreateAccount {

    get createAccountButton() {
        return cy.get('[data-drid="create-account--create-button--single-create"]');
    }

    get displayNameField() {
        return cy.get('[data-drid="create-account--create-sidebar--shared-template-field-display_name"]');
    }

    get descriptionField() {
        return cy.get('[data-drid="create-account--create-sidebar--shared-template-field-description--content"]');
    }

    get websitesField() {
        return cy.get('[data-drid="create-account--create-sidebar--shared-template-field-websites--placeholder"]');
    }

    get tagsField() {
        return cy.get('[data-drid="create-account--create-sidebar--shared-template-field-tags"]');
    }

    get selectDropdownOptions() {
        return cy.get('[class="select-dropdown__options"]');
    }

    get createSubmitButton() {
        return cy.get('[data-drid="create-account--create-submit"]');
    }

    get accountTitle() {
        return cy.get('[data-drid="account-sidebar--details-sidebar--title"]');
    }

    get treeGrid() {
        return cy.get('[role="treegrid"]');
    }

    get discussionsTab() {
        return cy.get('[data-drid="account-sidebar--timeline-widget--tabs--nav-item--discussions--active"]');
    }

    get messageInput() {
        return cy.get('[data-placeholder="Send a message"]');
    }

    get submitMessageButton() {
        return cy.get('[data-drid="account-sidebar--timeline-widget--comments--comments-container--comments-list-container--rich-text-editor--slot-submit"]');
    }

    get commentsListItem() {
        return cy.get('[data-drid="account-sidebar--timeline-widget--comments--comments-container--comments-list-container--comments-list--item"]');
    }

    get closeButton() {
        return cy.get('[data-drid="account-sidebar--details-sidebar--close-button"]');
    }
}

const createaccount = new CreateAccount();