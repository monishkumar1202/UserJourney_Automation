export default class deleteOpportunity {

    get treegrid() {
        return cy.get('[role="treegrid"]', { timeout: 20000 });
      }
      
      get dropdownButton() {
        return cy.get('button[data-drid="work--details-sidebar--dropdown-button"]');
      }
      
      get deleteButton() {
        return cy.get('[data-drid="work--details-sidebar--delete-button"]');
      }
      
      get confirmDeleteButton() {
        return cy.get('[data-drid="works--delete-modal-confirm-button"]');
      }
      
      get globalToaster() {
        return cy.get('[data-drid="GLOBAL_TOASTER"]');
    }

}