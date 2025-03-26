
export default class NewWork {

   // old side panel locators for New Work Item IOT

   get ticketOption() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-type"]')
   }
   get newWorkButton() {
      return cy.get('[data-drid="works--new-work-button"]')
   }
   get addTitle() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]')
   }
   get description() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]')
   }
   get appliesToPartDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]');
   }
   get appliesToPartOptions() {
      return cy.get('[class="select-dropdown__options"]');
   }

   // create new work Attribute details locators for old side panels

   get ownedByDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]');
   }
   get ownedByOptions() {
      return cy.get('div[class="select-dropdown__options"]');
   }
   get amountInput() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]>div');
   }
   get arrInput() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]>div');
   }
   get contactsDropdown() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-contacts"]');
   }
   get contactsSearchInput() {
      return cy.get('input[placeholder="Search"]');
   }
   get contactsOptions() {
      return cy.get('[class="select-dropdown__options"]>div');
   }
   get tagsField() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]>span', { timeout: 10000 });
   }
   get tagsOptions() {
      return cy.get('[class="select-dropdown__options"]');
   }


   // description Box locators for old side panels

   get toolBar() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar"]')
   }

   get letterBold() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--bold"]')
   }

   get letterItalic() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--italic"]')
   }

   get letterStrike() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--strike"]')
   }

   get textCode() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--code"]')
   }

   get codeBlock() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--codeBlock"]')
   }

   get blockQuote() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--blockquote"]')
   }

   get addLink() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--add-link"]')
   }

   get taskList() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--taskList"]')
   }

   get orderList() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--orderedList"]')
   }

   get bulletList() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--bulletList"]')
   }

   get insertTable() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--insertTable"]')
   }

   get actionBar() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--action-bar"]')
   }

   get addAttachment() {
      return cy.get('button > div').contains('Attach', { timeout: 10000 }).should('be.visible')
   }

   get formatActionBar() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--action-bar--toggle-formatting"]')
   }

   get addEmoji() {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--action-bar--add-emojis"]')
   }

   get resetButton() {
      return cy.get('span[class="min-w-0"]')
   }

   // link record locators

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

   // New Side Panel Locators creatework locators -- Tickets

   get clickAddTitle() {
      return cy.get('[data-drid="create_ticket_sidepanel--title"]')
   }

   get typeTitle() {
      return cy.get('[data-drid="create_ticket_sidepanel--title--slot-textarea"]')
   }

   get clickDescription() {
      return cy.get('[data-drid="create_ticket_sidepanel--body--editor"]')
   }

   get typeDescription() {
      return cy.get('[data-drid="create_ticket_sidepanel--body--editor"]')
   }

   get selectDropdown() {
      return cy.get('[class="select-dropdown__options"]')
   }

   get createMultiple() {
      return cy.get('[id="toggle-multiple"]')
   }

   get toggleButton() {
      return cy.get('[data-headlessui-state="checked"]')
   }

   get sumbitButton() {
      return cy.get('[data-drid="--panel-action-create-entity-button"]')
   }

   get closeButton() {
      return cy.get('[data-drid="works--create-work-sidebar--close-button"]')
   }

   get mouseCloseTicket() {
      return cy.get('[data-drid="--stack-bar--content-container-navigation--close-stacked-panel--create_ticket_sidepanel"]')
   }

   get minimizeTicket() {
      return cy.get('[data-drid="--stack-bar--toggle-minimize-button"]')
   }

   get closeAllButton() {
      return cy.get('[data-drid="--stack-bar--close-all"]')
   }

   get resetButton() {
      return cy.get('[data-drid="--panel-action-reset-button"]')
   }

   get quickFilter() {
      return cy.get('[data-drid="create_ticket_sidepanel--quick-filter--trigger"]')
   }

   get selectQuickFilter() {
      return cy.get('[role="menuitemradio"]')
   }

   get searchAttribute() {
      return cy.get('[title="Search"]')
   }

   get typeSearchAttribute() {
      return cy.get('[data-drid="--slot-input"]')
   }

   get clearSearchAttribute() {
      return cy.get('[name="clear"]')
   }

   get expandAttribute() {
      return cy.get('[data-drid="create_ticket_sidepanel--expand-collapse-button"]')
   }



   // New Panel exitsing ticket view details page locators

   get sidePanelExperienceButton() {
      return cy.get('[data-drid="--stack-bar--slot-preferenceMenu"]')
   }

   get selectSidePanelExperienceButton() {
      return cy.get('[class="flex flex-1 select-none"]')
   }

   get ticketAttributeFields() {
      return cy.get('[data-drid="--slot-childrenWrapper"]>div>span')
   }

   get showAllButton() {
      return cy.get('button').contains('Show all').click();
   }

   get restrictedButton() {
      return cy.get('[data-drid="--panel-action-menu-trigger"]');
   }

   get expandAttribute() {
      return cy.get('[data-drid="create_ticket_sidepanel--expand-collapse-button"]')
   }

   get minimizeTicket() {
      return cy.get('[data-drid="--stack-bar--toggle-minimize-button"]')
   }

   get closeTicketmenubar() {
      return cy.get('[data-drid="--stack-bar--close-all"]')
   }

   get restrictedOption() {
      return cy.get('[role="menuitem"]')
   }






}

