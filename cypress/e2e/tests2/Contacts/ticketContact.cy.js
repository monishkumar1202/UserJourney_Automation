describe('Creating the Ticket via Contact',()=> {

    const ticketcontact = {
        tickettitle : 'Ticketno : 0$',
        severity : 'Medium',
        tags    : 'Getting Started',
        existcontact : 'Test_demo3'
    }
  
    it('New Ticket create via Contact details', ()=>  {

    // Login the Devrev account

        cy.visit('https://app.devrev.ai/test-demo1')  
        cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
        cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
        cy.wait(50000)
    
    
    // Navigate to the Contacts

        cy.get('[title="Explore"]',{timeout : 20000}).click()
        cy.get('[data-drid="explore-page--search-bar-small-screen"]', {timeout : 20000})
        .should('be.visible').type('Contacts')  
        cy.get('[col-id="View"]').contains('Contacts').click()

    // Create the Ticket via contact details fill the details

    // cy.get('[title="Contacts"]',{timeout : 20000}).should('be.visible').click()
      cy.get('[role="treegrid"]').contains(ticketcontact.existcontact).click()
      cy.get('[data-drid="revo-widget-header--ticket"]').click()
      cy.get('[data-drid="revo--create-ticket"]').click()
      cy.get('input[placeholder="Add Title"]').type(ticketcontact.tickettitle)
      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]').type('test tickets')
      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]').click()
      cy.get('input[placeholder="Search"]').type('testingUserjourney').type('{enter}')
      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-severity"]').click()
      cy.get('.select-dropdown__options').contains(ticketcontact.severity).click()
      cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]').click()
      cy.get('.select-dropdown__options').contains(ticketcontact.tags).click()
      cy.get('body').click(0, 0)
      cy.get('[data-drid="works--create-work-sidebar"]').scrollTo('bottom')
      cy.get('[data-drid="works--create-work-submit"]').contains('Create').click()

    // Verify the Ticket Create successfully 
    
      cy.get('[data-drid="work--info-header--title"]').contains(ticketcontact.tickettitle).should('be.visible')
      cy.get('[data-drid="revo-widget-header--ticket"]').click()
      cy.get('[data-drid="--title"]',{timeout : 20000}).contains(ticketcontact.tickettitle).should('be.visible')


    })






})