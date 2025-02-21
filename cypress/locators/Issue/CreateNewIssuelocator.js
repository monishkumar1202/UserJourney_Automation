export default class WorkPage {

    get newWorkButton() {
      return cy.get('[data-drid="works--new-work-button"]');
    }
  
    get titleInput() {
      return cy.get('input[name="title"]');
    }
  
    get descriptionEditor() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]');
    }
  
    get appliesToPartDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]');
    }
  
    get appliesToPartOptions() {
      return cy.get('[class="select-dropdown__options"]');
    }
  
    get ownedByDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]');
    }
  
    get ownedByOptions() {
      return cy.get('[class="select-dropdown__options"]>div');
    }
  
    get priorityDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-priority_v2-trigger"]');
    }
  
    get priorityOptions() {
      return cy.get('[class="select-dropdown__options"]');
    }
  
    get tagsDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]');
    }
  
    get tagsOptions() {
      return cy.get('[class="select-dropdown__options"]');
    }
  
    get reportedByDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-reported_by"]');
    }
  
    get reportedByOptions() {
      return cy.get('[class="select-dropdown__options"]');
    }
  
    get sprintField() {
      return cy.get('[data-drid="works--sprint-field-"]');
    }
  
    get submitButton() {
      return cy.get('[data-drid="works--create-work-submit"]');
    }

    get body() {
      return cy.get('body').click(0, 0);
    }
  }
  
  
