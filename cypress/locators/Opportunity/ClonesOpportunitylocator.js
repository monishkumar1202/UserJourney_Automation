export default class cloneOpportunity {

    get pinnedLeftColsContainer() {
        return cy.get('[class="ag-pinned-left-cols-container"]>div', { timeout: 20000 });
      }
      
      get dropdownButton() {
        return cy.get('button[data-drid="work--details-sidebar--dropdown-button"]');
      }
      
      get cloneButton() {
        return cy.get('button[data-drid="work--details-sidebar--clone-button"]', { force: true, waitForAnimations: false, animationDistanceThreshold: 20 });
      }
      
      get titleInput() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]');
      }
      
      get submitButton() {
        return cy.get('[data-drid="works--create-work-submit"]');
      }
      
      get closeButton() {
        return cy.get('[data-drid="work--details-sidebar--close-button"]');
      }
    }