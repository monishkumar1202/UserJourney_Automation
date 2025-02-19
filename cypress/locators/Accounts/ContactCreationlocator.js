export default class ContactDetails {
  
  get contactsHeader() {
    return cy.get('[data-drid="revo-widget-header"]').contains('Contacts');
  }

  get nextTabButton() {
    return cy.get('[data-drid="revo-widget-header--tab-strip--next-tab"]');
  }

  get contactsMenuItem() {
    return cy.get('[class="szh-menu szh-menu--state-open szh-menu--dir-bottom"]>div>li').contains('Contacts');
  }

  get createUserButton() {
    return cy.get('[data-drid="revo--create-user-button"]');
  }  

  get displayNameInput() {
    return cy.get('input[name="displayName"]', { timeout: 20000 });
  }

  get descriptionEditor() {
    return cy.get('[data-drid="revu--create-sidebar--description--editor"]');
  }

  get emailField() {
    return cy.get('[data-drid="revu--create-sidebar--shared-template-field-email--content"]');
  }

  get phonePlaceholder() {
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

  get tagsField() {
    return cy.get('[data-drid="revu--create-sidebar--shared-template-field-tags"]');
  }

  get tagsOptions() {
    return cy.get('[class="select-dropdown__options"]');
  }

  get createButton() {
    return cy.get('[data-drid="revu--create-submit"]').contains('Create');
  }

  get contactTitle() {
    return cy.get('[data-drid="revu-info-header--title"]');
  }

  get closeButton() {
    return cy.get('[data-drid="revu--details-sidebar--close-button"]');
  }

  get userHeader() {
    return cy.get('[data-drid="revo-widget-header--user"]');
  }

  get seeAllDetailsButton() {
    return cy.get('[data-drid="revo-widget--see-all-details"]', { timeout: 30000 });
  }

  get treegrid() {
    return cy.get('[role="treegrid"]', { timeout: 30000 });
  }
}