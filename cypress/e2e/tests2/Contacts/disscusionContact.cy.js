describe('Discussion Comment section in Contact ',()=> {
  
    it('Verify the able to Discussion section', ()=>  {

    // Login the Devrev account
       cy.visit('https://app.devrev.ai/test-demo1')
       cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
       cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
       cy.wait(50000)

    // Navigate to the Contacts

    cy.get('[title="Explore"]').click()
    cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000})
    .should('be.visible').type('Contacts') 
    cy.wait(10000)
    cy.get('[col-id="View"]').contains('Contacts').click()


    // Discuss in comment section and validation the comment text
      
    //  cy.get('[title="Contacts"]',{timeout : 20000}).should('be.visible').click()
        cy.get('[role="treegrid"]').contains('UserG').click()
        cy.get('[class="flex flex-grow"]').contains('Discussions').should('be.visible')
        cy.get('[data-placeholder="Send a message"]').type('This is a test message for discussion section.')
        cy.get('[data-drid="comments--comments-container--comments-list-container--rich-text-editor--submit-button"]').should('be.visible').click()
        cy.get('[data-drid="comments--comments-container--comments-list-container--comments-list--item"]').should('be.visible')
        cy.get('[data-drid="revu--details-sidebar--close-button--slot-start"]').click()





    })

})