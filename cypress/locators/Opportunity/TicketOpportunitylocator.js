
export default class TicketOpportunityLocators {

    get treegrid() {
        return cy.get('[role="treegrid"]', { timeout: 20000 });
      }
      
      get addLinksDropdown() {
        return cy.get('[data-drid="links-widget--add-links--link-type-dropdown-menu"]').should('be.visible');
      }
      
      get dependentOnOption() {
        return cy.get('[data-drid="is_dependent_on"]').should('be.visible');
      }
      
      get newTicketOption() {
        return cy.get('.select-dropdown__options').should('be.visible');
      }
      
      get titleInput() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]', { timeout: 20000 });
      }
      
      get bodyEditor() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]');
      }
      
      get appliesToPartDropdown() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]');
      }
      
      get groupDropdown() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-group"]');
      }
      
      get revOrgAccountDropdown() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-rev_org--account"]');
      }
      
      get submitButton() {
        return cy.get('[data-drid="works--create-work-submit"]').should('be.visible');
      }
      
      get workInfoHeaderTitle() {
        return cy.get('[data-drid="work--info-header--title"]', { timeout: 20000 });
      }
      
      get linkItemTitle() {
        return cy.get('[data-drid="links-widget--link-item--title"]', { timeout: 20000 });
      }
      
      get ticketcloseButton (){
        return cy.get ('[data-drid="work--details-sidebar--close-button"]').eq(0);
      }

      get closeButton() {
        return cy.get('[data-drid="work--details-sidebar--close-button"]');
      }





}