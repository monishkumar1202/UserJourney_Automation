export default class NewIOT {

     get newWorkButtonIOT() {
        return cy.get('[data-drid="works--new-work-button"]', {timeout:40000})
     }

     get selectNewWorkIOT() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-type-select"]', {timeout:30000} )
     }

     get selectOptionIOT() {
        return cy.get('[class="select-dropdown__options"]', {timeout:20000}  )         
     }

     get clickAddTitleIOT()  {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--content"]')
     }

     get typeTitleIOT()  {
      return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]')
   }

     get typeDescriptionIOT() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]')
     }

     get toolBar() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar"]')
     }

     get letterBold() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--bold"]')
     }

     get letterItalic() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--italic"]')
     }

     get letterStrike () {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--strike"]')
     }

     get textCode() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--code"]')
     }

     get codeBlock() {
        return cy.get ('[data-drid="works--create-work-sidebar--shared-template-field-body--tool-bar--codeBlock"]')
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

     get orderList(){
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
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--action-bar--add-attachments"]')
     }

     get formatActionBar() {
        return cy.get('data-drid="works--create-work-sidebar--shared-template-field-body--action-bar--toggle-formatting"')
     }

     get addEmoji() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--action-bar--add-emojis"]')
     }

     get selectPart() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]')
     }

     get selectDropdown() {
        return cy.get('[class="select-dropdown__options"]')
     }

     get addLinkRecord()  {
        return cy.get('[data-drid="works--create-work-sidebar--add-links--link-type-dropdown-menu"]')
     }

     get createMultipleButton() {
        return cy.get('[data-drid="works--create-work-sidebar--create-multiple"]')
     }

     get toggleButton() {
        return cy.get('[data-headlessui-state="checked"]')
     }

     get sumbitButton() {
        return cy.get('[data-drid="works--create-work-submit"]')
     }

     get closeButton() {
        return cy.get('[data-drid="works--create-work-sidebar--close-button"]')
     }

     get resetButton() {
      return cy.get('[data-drid="works--create-work-reset"]')
   }

}

