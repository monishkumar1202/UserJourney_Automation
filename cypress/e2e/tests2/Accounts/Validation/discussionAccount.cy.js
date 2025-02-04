describe('Account user disucussion comment', ()=>{

    const Accountdetails = {
        
        oldaccount : 'demoUser'}

    it('Verify the able to Discussion section', ()=> {
       
    // Login the Devrev account

        cy.visit('https://app.devrev.ai/test-demo1')
        cy.wait(20000)
         cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
         cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
         cy.wait(60000)

    // Navigate to the Contacts

        // cy.get('[title="Explore"]').click()
        // cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000})
        // .should('be.visible').type('Accounts')   
        // cy.get('[class="p-1 self-start"]').should('be.visible').click()

    // Discussion Comment section

    cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()

    cy.get('[col-id="displayName"]').contains(Accountdetails.oldaccount).click()
    
    cy.get('[data-drid="account-sidebar--timeline-widget--tabs--nav-item--discussions--active"]').contains('Discussions').click()
    cy.get('[data-placeholder="Send a message"]').type('This is a test message for discussion section.')
    cy.get('[data-drid="account-sidebar--timeline-widget--comments--comments-container--comments-list-container--rich-text-editor--slot-submit"]').click()
    cy.get('[data-drid="account-sidebar--timeline-widget--comments--comments-container--comments-list-container--comments-list--item"]').should('be.visible')
    cy.get('[data-drid="account-sidebar--details-sidebar--close-button"]').click()


    })


})