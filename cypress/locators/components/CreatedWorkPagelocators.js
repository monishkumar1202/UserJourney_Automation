export default class PageDetails {


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