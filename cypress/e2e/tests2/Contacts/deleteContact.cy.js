describe('Verify the Contact details delete ',()=> {
  
    it('Delete the Contact', ()=>  {
      
    // Login the Devrev account
       cy.visit('https://app.devrev.ai/test-demo1')
       cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
       cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
       cy.wait(50000)

    // Navigate to the Contacts

      cy.get('[title="Explore"]').click()
      cy.get('[data-drid="explore-page--search-bar-small-screen"]', {timeout : 20000})
      .should('be.visible').type('Contacts') 
      cy.wait(10000)  
      cy.get('[col-id="View"]').contains('Contacts').click()

    // delete the contact details
    
    //  cy.get('[title="Contacts"]',{timeout : 30000}).should('be.visible').click()
      cy.get('[role="treegrid"]').contains('deleteuser').click()
      cy.get('[data-drid="revu--details-sidebar--delete-button"]').should('be.visible').click()
      cy.get('[data-drid="revu--delete-modal-popup"]').should('exist').contains('Delete customer')
      cy.get('[data-drid="revu--delete-modal-cancel-button"]').should('exist').contains('Cancel')
      cy.get('.justify-end > .text-white > .flex > .min-w-0').should('be.visible').contains('Delete').click()


      cy.get('[data-drid="GLOBAL_TOASTER"]').should('be.visible').contains('Deleted successfully')

    })

})
