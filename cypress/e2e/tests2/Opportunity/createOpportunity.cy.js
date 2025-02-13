describe ('Add the new Opportunities', ()=>{

    const opportunityDetails = {
       title     : 'Opportunities',
       totalValue: '10000',
       arr      : '5000',
       contact  : 'UserF',
       addaccount : 'Test_demo5',
       tags     : 'Getting Started',
<<<<<<< HEAD
       titlename: 'Demotest7',
=======
       titlename: 'Demotest09',
>>>>>>> 476bcf5 (My First Version on Datadriven Framework)
       des : 'testing automation',
       addowner :  'monishkumarsk12',
       url      : 'www.testdemo.com'
   
   }
 
    it('Opportunities flow in grow module',() => {
 
    // Login the Devrev account 

     cy.visit('https://app.devrev.ai/test-demo1')
    
    // cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
    // cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
    // cy.wait(50000)  
 
    // Navigate the Explore and Select the opportunities
 
     cy.get('[title="Explore"]').click()
     cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]', { timeout: 20000 })
     .should('be.visible').type('Opportunities')     
     cy.get('[col-id="View"]', { timeout: 20000 }).contains('Opportunities').click()
    
     // Create the New Opportunities 
     
     cy.get('button[data-drid="works--new-work-button"]', { timeout: 30000 }).should('be.visible').click()

    cy.get('input[name="title"]',{ timeout: 20000 }).should('be.visible').type(opportunityDetails.titlename)
    cy.get('p[data-placeholder="Add description"]').type(opportunityDetails.des)

    cy.get('[data-drid="works--create-work-sidebar--shared-template-field-account"]').click()
    cy.get('.select-dropdown__search-input').type(opportunityDetails.addaccount)
    cy.get('[class="select-dropdown__options"]').contains(opportunityDetails.addaccount).click()

    cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]').click()   
    cy.get('div[class="select-dropdown__options"]>div').contains(opportunityDetails.addowner).click()

    cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]>div').type(opportunityDetails.totalValue)

    cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]>div').type(opportunityDetails.arr)

    cy.get('[data-drid="works--create-work-sidebar--shared-template-field-contacts"]').click()
    cy.get('input[placeholder="Search"]').type('User')
    cy.get('[class="select-dropdown__options"]>div').contains(opportunityDetails.contact).click()
    cy.get('body').click(0, 0)

    cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]>span', { timeout: 10000 }).click()
    cy.get('[class="select-dropdown__options"]').contains('Getting Started').click()
    cy.get('body').click(0, 0)

    cy.get('[data-drid="works--create-work-submit"]').contains('Create').click() 
 
    // Verify the Create When we Add new Opportunity

    cy.get('[data-drid="work--info-header--title"]',{timeout: 20000})
    .contains(opportunityDetails.titlename).should('be.visible')
    cy.get('[data-drid="work--timeline--tabs--nav-item--discussions--active"]').contains('Discussions').click()
    cy.get('[data-placeholder="Send a message"]').type('This is a test message for automation.')
    cy.get('[data-drid="work--timeline--comments--comments-container--comments-list-container--rich-text-editor--submit-button"]').click()
    cy.get('[data-drid="work--timeline--tabs--nav-item--events"]').click()   
    cy.get('[data-drid="message-layout--content"]',{timeout:20000}).contains('created').should('be.visible')
    cy.get('[data-drid="work--details-sidebar--close-button"]').click()
    
   // Validate whether the new opportunity was created or not

    cy.get('[class="ag-pinned-left-cols-container"]>div').contains(opportunityDetails.titlename).should('be.visible')
    
 
 
    
    
 
      
 
 
  
 
 })
 
 })