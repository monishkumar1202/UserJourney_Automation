describe('Contacts Filters', () => {

    it('should add filters to contacts in vista', () => {

    // Login the Devrev account

       cy.visit('https://app.devrev.ai/test-demo1');
       cy.wait(10000)
       cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
       cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
       cy.wait(50000)
    
    // Navigate to the contact

       cy.get('[title="Explore"]').click()
       cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000}) 
       .should('be.visible').type('Contacts')
       cy.wait(10000)
       cy.get('[col-id="View"]').contains('Contacts').click()


    // Add filters to contacts in vista

     const options = ['Tags', 'Email', 'Customer']; 

       cy.get('[data-drid="revu-list--table--filters--more-filters-button"]').click()
        cy.get('[class="select-dropdown__options"]').within(() => {    
            options.forEach(option => {
                cy.contains(option).click();

         })
       })


    })
  })

