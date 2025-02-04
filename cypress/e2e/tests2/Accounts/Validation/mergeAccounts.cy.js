describe('Accounts page Merge the Accounts ', ()=>{

    const Accountdetails = {
        
        oldaccount : 'MergeA',
        mergeaccount : 'MergeB',
        mergealertq : 'Do you wish to merge these accounts?',
        mergealertA : '" and associated discussions will be deleted.',
        mergetoastermessage : 'Accounts successfully merged'
    
    }
    const getIframeBody = (iframeSelector) => {
        return cy
          .get(iframeSelector)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then(cy.wrap);
    }

    it('should merge the accounts',()=>{
   
    // Login the Devrev account

     cy.visit('https://app.devrev.ai/test-demo1')
     cy.wait(20000)
        cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
        cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
        cy.wait(60000)
     cy.viewport(1420, 780)
    
    // Navigate to the Contacts

       // cy.get('[title="Explore"]').click()
       // cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000})
       // .should('be.visible').type('Accounts')   
       // cy.get('[class="p-1 self-start"]').should('be.visible').click()      
   
    // Merge the Accounts

        cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()

        cy.get('[col-id="displayName"]').contains(Accountdetails.oldaccount).click()

        cy.get('[data-drid="account-sidebar--actions-dropdown-button"]').click()
        cy.get('[data-drid="account-move-merge-modal--select-trigger"]').click()
        cy.get('[class="select-dropdown__search-input"]').type(Accountdetails.mergeaccount)
        cy.get('.select-dropdown__options').contains(Accountdetails.mergeaccount).click()

        // verify the contact details Account A and B
                 
          cy.get('[data-drid="account-dup--sidebar"]').contains('Account A').should('be.visible')
        cy.get('[data-drid="account-sidebar--details-sidebar--title"]').contains(Accountdetails.oldaccount)        
        cy.get('[data-drid="account-dup--sidebar"]').contains('Account B').should('be.visible')
        cy.get('[data-drid="account-sidebar--details-sidebar--title"]').contains(Accountdetails.mergeaccount)

        // Switch the Account 
        
        cy.get('[data-drid="account-dup--sidebar--header--switch"]').should('be.visible').click()
        cy.get('[data-drid="account-dup--sidebar"]').contains('Account A').should('be.visible').click()
        cy.get('[data-drid="account-sidebar--details-sidebar--title"]').contains(Accountdetails.mergeaccount)      
        cy.get('[data-drid="account-dup--sidebar"]').contains('Account B').should('be.visible')
        cy.get('[data-drid="account-sidebar--details-sidebar--title"]').contains(Accountdetails.oldaccount)

        // Merge the Contact 
      
        cy.get('[data-drid="account-dup--sidebar--header--merge"]').should('be.visible').click()
        cy.get('[data-drid="account-dup--sidebar--header-title"]').contains(Accountdetails.mergealertq).should('be.visible')
        cy.get('[class="flex justify-end gap-2"]').contains('Cancel')
        cy.get('[data-drid="account-move-merge-modal--submit"]').should('be.visible').click()

       // Verify the account merge toaster message 

        cy.get('[data-drid="job--updates-banner"]',{timeout:20000}).contains(Accountdetails.mergetoastermessage)
        cy.get('[data-drid="account-sidebar--details-sidebar--close-button"]').click()
        cy.get('[role="treegrid"]').should('contain', Accountdetails.oldaccount)

    })     
    
})