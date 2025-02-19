export default class validateDashboard {

      get opportunitiesHeader() {
        return cy.get('[class="text-h2 text-color-highlight"]').contains('Opportunities');
      }
      
      get newWorkButton() {
        return cy.get('button[data-drid="works--new-work-button"]', { timeout: 30000 });
      }
      
      get itemsTab() {
        return cy.get('[class="text-color-tertiary font-normal text-small group-hover:text-color-primary truncate"]').contains('Items');
      }
      
      get accountTab() {
        return cy.get('[class="text-color-tertiary font-normal text-small group-hover:text-color-primary truncate"]').contains('Account');
      }
      
      get horizontalScrollViewport() {
        return cy.get('[class="ag-body-horizontal-scroll-viewport"]');
      }
      
      get headerRowColumn() {
        return cy.get('[class="ag-header-row ag-header-row-column"]');
      }
      
      get clearAllFiltersButton() {
        return cy.get('[data-drid="works--filters--clear-all-filters"]');
      }

      get treegrid() {
        return cy.get('[role="treegrid"]', { timeout: 20000 });
      }
     

}