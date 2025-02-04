describe('Add new Account user ', ()=>{

    const Accountdetails = {
        
        titlename : 'Test_demo13',
        websites : 'www.testingdevrev002.in',  // everytime changes websites otherwise conflict 
        tags     : 'Getting Started'}
 
    it('Add Account ', ()=> {

    // Login the Devrev account

        cy.visit('https://app.devrev.ai/test-demo1')
        cy.wait(20000)
          cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
          cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
          cy.wait(50000)

    // Navigate to the Contacts

        // cy.get('[title="Explore"]').click()
        // cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000})
        // .should('be.visible').type('Accounts')   
        // cy.get('[class="p-1 self-start"]').should('be.visible').click()

    
    // Create the New Account and Fill in the account details
    
        cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()
        
        cy.get('[data-drid="create-account--create-button--single-create"]').should('be.visible').click()
        cy.get('[data-drid="create-account--create-sidebar--shared-template-field-display_name"]').type(Accountdetails.titlename)
        cy.get('[data-drid="create-account--create-sidebar--shared-template-field-description--content"]').type('devrev')
        cy.get('[data-drid="create-account--create-sidebar--shared-template-field-websites--placeholder"]')
        .type(Accountdetails.websites)
        cy.get('body').click(0, 0)
        cy.get('[data-drid="create-account--create-sidebar--shared-template-field-tags"]').click()
        cy.get('[class="select-dropdown__options"]').contains(Accountdetails.tags).click()
        cy.get('body').click(0, 0)
        cy.get('[data-drid="create-account--create-submit"]').contains('Create').click()
        cy.get('[data-drid="account-sidebar--details-sidebar--title"]')
        .contains(Accountdetails.titlename).should('be.visible')
        cy.get('[data-drid="account-sidebar--details-sidebar--close-button"]').click()

    // verify the Account PAGE Dashboard

    cy.get('[role="treegrid"]', {timeout:20000}).should('contain', Accountdetails.titlename)

    })

    })


