export default class DeleteTicket {

   get ticketItems() {
      return cy.get('[role="gridcell"][col-id="display_id"]');
   }

   get restrictedButton() {
      return cy.get('[data-drid="--panel-action-menu-trigger"]');
   }

   get deleteMenuButton() {
      return cy.get('[role="menuitem"][data-state="closed"]');
   }

   get closeDeleteTab() {
      return cy.get('[title="Close Modal"]');
   }

   get ConfirmButton() {
      return cy.get('[class="w-full py-4 px-6 border-t-[1px] border-outline-01 flex justify-end items-center gap-2"]>button');
   }

   get deletedTicketMessage() {
      return cy.get('[data-drid="GLOBAL_TOASTER"]');
   }

   // Old Side Panel 

   get existingTicket() {
      return cy.get('[role="treegrid"]', { timeout: 20000 });
   }

   get dropdownButton() {
      return cy.get('[data-drid="work--details-sidebar--dropdown-button"]')
   }

   get deleteOption() {
      return cy.get('[data-drid="work--details-sidebar--delete-button"]')
   }

   get confirmButton() {
      return cy.get('[data-drid="works--delete-modal-confirm-button"]')
   }

   get cancelButton() {
      return cy.get('[data-drid="works--delete-modal-cancel-button"]')
   }




}