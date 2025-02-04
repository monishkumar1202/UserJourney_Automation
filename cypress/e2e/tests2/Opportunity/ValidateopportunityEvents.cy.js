describe ('Validate the Events, discussions and Engagement', ()=> {

  const oppdetails = {
        
    existopportunity : 'Demotest'

  }
         it('verify the Events, discussions and Engagement',()=> {

          // Login the Devrev account 
           cy.visit('https://app.devrev.ai/test-demo1')
          cy.wait(10000)
          cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
          cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
          cy.wait(50000)
               
          // should check events, discussions and Engagement

          cy.get('[title="Opportunities"]').should('be.visible').click()
          
          cy.get('[role="treegrid"]',{timeout : 20000}).contains(oppdetails.existopportunity).click()
          cy.get('[class="flex bg-area rounded-lg text-color-secondary p-1 text-small w-fit"]').each(($div) => {
          cy.wrap($div).within(() => {
           cy.contains('Discussions').should('be.visible');
           cy.contains('Events').should('be.visible');
           cy.contains('Engagements').should('be.visible')
       })
     })
  }) 



})