describe('Add comment on discussion section ', ()=>{

  const opportunityDetails = {
    
    existOpportunity : 'usertest01',
    
}
 
    it('Validate the Comment section',()=> {
       
      // Login the Devrev account
      cy.visit('https://app.devrev.ai/test-demo1')
      cy.wait(10000)
      cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
      cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
      cy.wait(50000)  
      
    // Navigate the Explore and Select the opportunities
     
     cy.get('[title="Explore"]').click()
     cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]', { timeout: 20000 })
     .should('be.visible').type('Opportunities') 
     cy.get('[col-id="View"]', { timeout: 20000 }).contains('Opportunities').click()

    // click the opportunities / Add comments discussion tabs
       // cy.get('[title="Opportunities"]').should('be.visible').click()
     cy.get('[role="treegrid"]').contains(opportunityDetails.existOpportunity).click()
     cy.get('[class="flex flex-grow"]').contains('Discussions').should('be.visible')
     cy.get('[data-placeholder="Send a message"]').type('This is a test message.')
     cy.get('[data-drid="work--timeline--comments--comments-container--comments-list-container--rich-text-editor--slot-submit"]>button').click()
     cy.get('[data-drid="message-layout"]').should('be.visible')
     
     cy.get('[data-drid="work--details-sidebar--close-button"]').click()


       })


    })
