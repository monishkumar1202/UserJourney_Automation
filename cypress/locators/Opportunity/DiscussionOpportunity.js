export default class DiscussionOpportunity {
    
      get treegrid() {
        return cy.get('[role="treegrid"]');
      }

      get flexBgArea() {
        return cy.get('[class="flex bg-area rounded-lg text-color-secondary p-1 text-small w-fit"]');
      }
      
      get discussionsTab() {
        return cy.get('[class="flex flex-grow"]').contains('Discussions');
      }
      
      get messageInput() {
        return cy.get('[data-placeholder="Send a message"]');
      }
      
      get submitMessageButton() {
        return cy.get('[data-drid="work--timeline--comments--comments-container--comments-list-container--rich-text-editor--slot-submit"]>button');
      }
      
      get messageLayout() {
        return cy.get('[data-drid="message-layout"]');
      }
      
      get closeButton() {
        return cy.get('[data-drid="work--details-sidebar--close-button"]');
      }

      verifyFlexBgArea() {
        this.flexBgArea.each(($div) => {
          cy.wrap($div).within(() => {
            cy.contains('Discussions').should('be.visible');
            cy.contains('Events').should('be.visible');
            cy.contains('Engagements').should('be.visible');
          });
        });
      }
}