describe('Add comment on discussion section ', ()=>{

    const opportunityDetails = {
    
    clonetitle : 'clone04',
    existOpportunity : 'usertest03',
    tags       : 'Getting Started'

}
 
    it('Clone Opportunity sucessfully',()=> {
       
      // Login the Devrev account
      cy.visit('https://app.devrev.ai/test-demo1')
      
      cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
      cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
      cy.wait(50000)  
      
      // Navigate the Explore and Select the opportunities
 
     cy.get('[title="Explore"]').click()
     cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]', { timeout: 20000 })
     .should('be.visible').type('Opportunities')
     cy.get('[class="overflow-hidden"]').contains('Opportunities').should('be.visible').click()
     
    // clone the Opportunities

      // cy.get('[title="Opportunities"]').should('be.visible').click()
     cy.get('[class="ag-pinned-left-cols-container"]>div',{timeout:20000}).contains(opportunityDetails.existOpportunity).click()
     cy.get('button[data-drid="work--details-sidebar--dropdown-button"]').click()
     cy.get('button[data-drid="work--details-sidebar--clone-button"]')
     .click({ force: true, waitForAnimations: false, animationDistanceThreshold: 20 })
     cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]').clear
     cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]').type(opportunityDetails.clonetitle)
     cy.get('[data-drid="works--create-work-submit"]').scrollIntoView().should('be.visible').click()
     cy.get('[data-drid="work--details-sidebar--close-button"]').eq(0).click()
     cy.get('[data-drid="work--details-sidebar--close-button"]').click()

    // Validate whether the cloneOpportunity was created or not in vista data
    
    cy.wait(20000)
    cy.get('[role="treegrid"]').should('contain', 'clone04')
    
    

    })

})