describe('Vista Contact Validation',()=> {
  
      const edittitle  = {
        existcontact : 'Usertest06',
        titlename : 'Usertest07' }

    it('Dashboard validation on contact page', ()=>  {

    // Login the Devrev account

     cy.visit('https://app.devrev.ai/test-demo1')
     cy.viewport(1520, 780)

       cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
       cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
       cy.wait(50000)

    // Navigate to the Contacts

     cy.get('[title="Explore"]',{timeout: 20000}).should('be.visible').click()
     cy.get('[data-drid="explore-page--search-bar-large-screen--slot-input"]', {timeout : 20000})
     .should('be.visible').type('Contacts') 
     cy.wait(10000)  
     cy.get('[col-id="View"]').contains('Contacts').click()  

    // Validation of Contact dashboard UI 

    //  cy.get('[title="Contacts"]',{timeout:30000}).should('be.visible').click()
     
     cy.get('[class="text-h2 text-color-highlight"]').contains('Contacts').should('be.visible')
     cy.get ('[data-drid="revu-list--table--filters--clear-all-filters"]').contains('Clear').should('be.visible')
     cy.get('[role="treegrid"]').within(() => {
      cy.contains('Display Name').should('be.visible')
      cy.contains('Email').should('be.visible')
      cy.contains('Customer').should('be.visible')
      cy.contains('Tags').should('be.visible')
      cy.contains('Created date').should('be.visible')
  })
     
      
    // Contact should be title edited successfully 

      cy.get('[role="treegrid"]').contains(edittitle.existcontact).click()
      cy.get('[data-drid="revu-info-header--title"]').click()
      cy.get('[data-drid="revu-info-header--input"]').clear()
      cy.get('[data-drid="revu-info-header--input"]').type(edittitle.titlename)
      
      cy.get('body').click(0, 0)
      cy.get('[data-drid="revu--details-sidebar--close-button"]').click()
      
      cy.get('[role="treegrid"]',{timeout:20000}).contains(edittitle.titlename).should('be.visible')

    
    
    
    })



    })