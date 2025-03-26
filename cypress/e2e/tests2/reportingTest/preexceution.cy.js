import ExplorePage from "../../../pages/PreExection/ExplorePage";
import Loginpagedev from "../../../pages/PreExection/Loginpagedev";
import NewWorkPage from "../../../pages/Components/NewWorkIOTpage";
import DeletePage from "../../../pageclass/Tickets/DeletedTicketpage";
import { getLatestOtp } from "../../../support/readOtp";




describe('Create the Engagement via Account details ', () => {

  it('should search for the workitem using the filter option for Account', () => {

    cy.visit('https://app.devrev.ai/test-demo1')
    cy.wait(20000)
    cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
    cy.get('[class="auth0-lock-submit"]').should('be.visible').click()

    cy.wait(80000);
    cy.get('[title="Explore"]').click()
    cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]', { timeout: 20000 })
      .should('be.visible').type('Opportunities')


    cy.wait(20000);
    ExplorePage.validateAndPerformAction('Work');
    VistaBoardpage.ClickClearButton();
    VistaBoardpage.ApplyAttributeFilters(oppData.SearchOpportunity.AttributeFilter);
    VistaBoardpage.SearchItemFilter(oppData.SearchOpportunity.searchFilterItem.searchbox);
    VistaBoardpage.clickAssignToMe();
  })



})


