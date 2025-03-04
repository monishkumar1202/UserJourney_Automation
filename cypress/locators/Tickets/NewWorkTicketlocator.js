export default class NewWorkTicket {

   get attributeField() {
      return cy.get('[class="flex items-start"]>div[class="relative flex max-w-sm flex-shrink-0 pl-2 pr-2 py-2 w-32 text-small text-color-secondary"]')
   }

   get addAttributeField() {
      return cy.get('[data-drid="works--select-detail-fields-button"]')
   }

   get attributeOption() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get applyToPartDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part-select"]')
   }

   get applyToPartsOption() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get ownerAction() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by-select"]')
   }

   get groupAction() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-group"]')
   }

   get groupOption() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get tags() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]')
   }

   get tagsOption() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get clickDateField() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-target_close_date--content"]')
   }

   get selectDate() {
      return cy.get('input[data-drid="works--create-work-sidebar--shared-template-field-target_close_date"]')
   }

   get chooseDate() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-target_close_date-calendar-2025-9-31"]')
   }

   get closeButton() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-close-button"]')
   }




   // New Side Panel Tickets locators

   get appliesToPart() {
      return cy.get('[data-drid="field-form-attributes--field--applies_to_part--trigger"]');
   }

   get appliesToPartOptions() {
      return cy.get('[data-drid="field-form-attributes--field--applies_to_part--non-selected-section"]');
   }

   get selectOwner() {
      return cy.get('[data-field-form-element-name="owned_by"]')
   }

   get selectOptionByOwner() {
      return cy.get('[role="menuitemradio"]')
   }

   get addGroup() {
      return cy.get('[data-field-form-element-name="group"]>div>button')
   }

   get selectGroup() {
      return cy.get('[role="menuitemradio"]')
   }

   get selectSeverity() {
      return cy.get('[data-drid="field-form-attributes--field--severity_v2--trigger"]')
   }

   get selectOptionBySeverity() {
      return cy.get('[data-drid="field-form-attributes--field--severity_v2--content"]')
   }

   get selectTags() {
      return cy.get('[data-drid="field-form-attributes--field--tags"]>div>button')
   }

   get selectOptionByTags() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get targetCloseDate() {
      return cy.get('[data-drid="field-form-attributes--field--target_close_date-target_close_date"]')
   }

   get selectDates() {
      return cy.get('button>span>div[class="text-interactive-tertiary-resting text-default"]')
   }

   get selectAccount() {
      return cy.get('[data-drid="--account-select"]')
   }

   get selectOptionByAccount() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get reportedBy() {
      return cy.get('[data-drid="field-form-attributes--field--reported_by"]')
   }

   get selectReportedBy() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get sourceChannel() {
      return cy.get('[data-drid="field-form-attributes--field--source_channel"]')
   }

   get typeSourceChannel() {
      return cy.get('[data-drid="field-form-attributes--field--source_channel_source_channel"]')
   }

   get createButton() {
      return cy.get('[data-drid="--panel-action-create-entity-button"]')
   }

   get showAllButton() {
      return cy.get('[data-drid="--panel-action-show-all-button"]')
   }

   get body() {
      return cy.get('body').click(0, 0)
   }


}