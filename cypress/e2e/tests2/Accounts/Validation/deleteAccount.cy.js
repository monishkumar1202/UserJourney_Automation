describe('Delete Account user ', () => {

    const Accountdetails = {

        oldaccount: 'deleteuser'
    }

    it('Delete Account via Acccount details ', () => {

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

        // Verify the Account Deleting and validation o dashboard  

        cy.get('[title="Accounts"]', { timeout: 30000 }).should('be.visible').click()

        cy.get('[col-id="displayName"]').contains(Accountdetails.oldaccount).click()

        cy.get('[data-drid="account-sidebar--actions-dropdown-button"]').should('be.visible').click()
        cy.get('[data-drid="account-sidebar--details-sidebar--delete-button"]').should('be.visible').click()

        cy.get('[data-drid="account-sidebar--delete-modal-title"]').contains('Delete account').should('be.visible')
        cy.get('[data-drid="account-sidebar--delete-modal-cancel-button"]').contains('Cancel').should('be.visible')
        cy.get('[data-drid="account-sidebar--delete-modal-confirm-button"]').contains('Delete').should('be.visible').click()

        cy.get('[data-drid="GLOBAL_TOASTER"]').should('be.visible').contains('Deleted successfully')



    })


})