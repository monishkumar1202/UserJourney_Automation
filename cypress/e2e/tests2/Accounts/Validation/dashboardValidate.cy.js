describe('Account Dashboard', ()=>{

    const edit = {
        
        oldAccount : 'Test_demo8',
        titlename : 'test g'
    }
    
    
    it('Validate the Account Dashboard UI Component ', ()=> {

    // Login the Devrev account

        cy.visit('https://app.devrev.ai/test-demo1')
        cy.wait(20000)
        cy.viewport(1420, 780)
          cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
          cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
          cy.wait(50000)
          

    // Navigate to the Contacts

        // cy.get('[title="Explore"]').click()
        // cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000})
        // .should('be.visible').type('Accounts')   
        // cy.get('[class="p-1 self-start"]').should('be.visible').click()


    // verify the Dashboard Account Page  

        cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()
        cy.get('[class="text-h2 text-color-highlight"]').contains('Accounts').should('be.visible')
        cy.get('[data-drid="account-list--table--filters--clear-all-filters"]').contains('Clear').should('be.visible')
        cy.get('[data-drid="create-account--create-button--single-create"]').contains('Account').should('be.visible')
        cy.get('[role="treegrid"]').within(() => {
            cy.contains('Display Name').should('be.visible')
            cy.contains('Domains').should('be.visible')
            cy.contains('Tags').should('be.visible')
            cy.contains('Owners').should('be.visible')
            cy.contains('Created date').should('be.visible')
        })
        
       
        // Verify the Account Title Edited Sucessfully 

        cy.get('[col-id="displayName"]').contains('test b').click()
        cy.get('[data-drid="account-sidebar--details-sidebar--show-input"]').click()
        cy.get('[data-drid="account-sidebar--details-sidebar--input"]').clear()
        cy.get('[data-drid="account-sidebar--details-sidebar--input"]').type(edit.titlename)
      
        cy.get('body').click(0, 0)
        cy.get('[data-drid="account-sidebar--details-sidebar--close-button"]').click()
      
        cy.get('[role="treegrid"]',{timeout:20000}).contains(edit.titlename).should('be.visible')



    })


})