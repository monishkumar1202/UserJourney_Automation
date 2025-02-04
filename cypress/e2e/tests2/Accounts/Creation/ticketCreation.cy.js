describe('Accounts page via create the Ticket details', ()=>{

   const Accountdetails = {
        
      oldaccount : 'MergeA',
      ticketname : 'Ticket no : 09',
      parts      :  'testingUserjourney',
      severity   :  'High',
      tags    : 'Getting Started' }
 
    it('Create the Tickets in account details',()=>{


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


   // create the Ticket in account details

       cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()
       cy.get('[col-id="displayName"]').contains(Accountdetails.oldaccount).click()
       cy.get('[data-drid="account-sidebar--collapsed"]',{timeout: 20000}).click()
       cy.get('[data-drid="revo-widget-header--ticket"]').contains('Tickets').click()
       cy.get('[data-drid="revo--create-ticket"]').click()

   // Fill the Ticket details

       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]').type(Accountdetails.ticketname)
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]').type('sanityTesting ')
      
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]').contains('Select part').click()
       cy.get('.select-dropdown__options').contains(Accountdetails.parts).click()
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-severity"]').click()
       cy.get('.select-dropdown__options').contains(Accountdetails.severity).click()
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]').click()
       cy.get('.select-dropdown__options').contains(Accountdetails.tags).click()
       cy.get('body').click(0, 0)
       cy.get('[data-drid="works--create-work-sidebar"]').scrollTo('bottom')
       cy.get('[data-drid="works--create-work-submit"]').contains('Create').click() 
      
       
      // verify the Ticket Create successfully

         cy.get('[data-drid="work--info-header--show-input"]',{timeout: 20000}).contains(Accountdetails.ticketname).should('be.visible')
         cy.get('[data-drid="work--details-sidebar--close-button--slot-start"]').click()
         cy.get('[data-drid="revo-widget--see-all-details"]').click()
         cy.get('[role="treegrid"]',{timeout: 20000}).should('contain', Accountdetails.ticketname)


    
    })
})