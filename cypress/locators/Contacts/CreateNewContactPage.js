export default class CreateSidebar {

    get newRevUserButton() {
        return cy.get('[data-drid="revu--create-sidebar--new-rev-user"]');
    }

    get displayNameInput() {
        return cy.get('input[name="displayName"]');
    }

    get descriptionInput() {
        return cy.get('[data-drid="revu--create-sidebar--description--editor"]');
    }

    get emailInput() {
        return cy.get('[data-drid="revu--create-sidebar--shared-template-field-email--content"]');
    }

    get phoneNumberPlaceholder() {
        return cy.get('[data-drid="revu--create-sidebar--shared-template-field-phone_numbers--placeholder"]');
    }

    get countryCodeDropdown() {
        return cy.get('[data-drid="revu--create-sidebar--shared-template-field-phone_numbers--country-code-dropdown-trigger"]');
    }

    get countrySearchInput() {
        return cy.get('.select-dropdown__search-input');
    }

    get phoneNumberInput() {
        return cy.get('[placeholder="Enter number"]');
    }

    get body() {
        return cy.get('body');
    }

    get accountField() {
        return cy.get('[data-drid="revu--create-sidebar--shared-template-field-rev_org--account"]');
    }

    get tagsField() {
        return cy.get('[data-drid="revu--create-sidebar--shared-template-field-tags"]');
    }

    get createButton() {
        return cy.get('[data-drid="revu--create-submit"]').contains('Create');
    }
}
