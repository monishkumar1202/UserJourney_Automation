describe('Create Ticket via Opportunity', ()=>{

    const oppdetails = {
        
        selectpart : 'testingUserjourney',
        tickettitle:  'tck@003',
        existOpportunity : 'usertest02',
        severity     : 'High',
        contactcustomer : 'Test_demo5'

    }
 
    it('Opportunity Creation of Ticket',()=> {
       
      // Login the Devrev account
      cy.visit('https://app.devrev.ai/test-demo1')
      cy.wait(10000)
      cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
      cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
      cy.wait(50000)  

      // Create ticket and enter details via opportunity 

      cy.get('[title="Opportunities"]').should('be.visible').click()
      
      cy.get('[role="treegrid"]').contains(oppdetails.existOpportunity).click()

      cy.get('[data-drid="links-widget--add-links--link-type-dropdown-menu"]').should('be.visible').click()
      cy.get('[data-drid="is_dependent_on"]').should('be.visible').click()
      cy.get('.select-dropdown__options').contains('New ticket').click()

      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]',{timeout: 20000})
      .type(oppdetails.tickettitle)
      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]').type('Smoke testing')
     
      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]').click()
      cy.get('.select-dropdown__options').contains(oppdetails.selectpart).click()

      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-severity"]').click()
      cy.get('[class="select-dropdown__options"]').contains(oppdetails.severity).click()

      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-rev_org--account"]').click()  
      cy.get('[class="select-dropdown__options"]').contains(oppdetails.contactcustomer).click()

      cy.get('body').click(0, 0)
      cy.get('[data-drid="works--create-work-submit"]').should('be.visible').click()

    // verift the ticket created successfully 

      cy.get('[data-drid="work--info-header--title"]',{timeout:20000}).contains(oppdetails.tickettitle)
      cy.get('[data-drid="work--details-sidebar--close-button"]').eq(0).click()

      cy.get('[data-drid="links-widget--link-item--title"]',{timeout: 20000}).contains(oppdetails.tickettitle)
      cy.get('[data-drid="work--details-sidebar--close-button"]').click()

    })

})