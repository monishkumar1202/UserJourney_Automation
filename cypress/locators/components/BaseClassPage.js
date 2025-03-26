export default class BaseClass {

   get selectDropdownOption() {
      return cy.get('[class="select-dropdown__options"]');
   }

   // Create new work locators IOT

   get addTitle() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]')
   }

   get description() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]')
   }

   get linkRecordsButton() {
      return cy.get('[data-drid="works--create-work-sidebar--add-links--link-type-dropdown-menu"]')
   }

   get resetButton() {
      return cy.get('span[class="min-w-0"]')
   }

   get linkRecordsButton() {
      return cy.get('[data-drid="works--create-work-sidebar--add-links--link-type-dropdown-menu"]')
   }

   get addDependency() {
      return cy.get('[data-drid="works--create-work-sidebar--add-links--link-type-dropdown-menu-items"]')
   }

   get selectLinkRecord() {
      return cy.get('[data-drid="works--create-work-sidebar--add-links--link-target-dropdown-options"]')
   }

   get createMultiple() {
      return cy.get('[data-drid="works--create-work-sidebar--create-multiple"]')
   }

   get sumbitButton() {
      return cy.get('[data-drid="works--create-work-submit"]')
   }

   get closeButton() {
      return cy.get('[data-drid="works--create-work-sidebar--close-button"]')
   }


   //    Vista Board locators 

   get selectitems() {
      return cy.get('[role="treegrid"]')
   }
   get vistaBoardTitle() {
      return cy.get('[class="text-h2 text-color-highlight"]')
   }



}