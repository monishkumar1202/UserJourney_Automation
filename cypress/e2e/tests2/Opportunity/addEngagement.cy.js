describe('Add Engagement in Opportunities', ()=>{
 
    const opportunityDetails = {

        addowner :  'monishkumarsk12',
        url      : 'www.testdemo.com',
        engagementtitle : 'sanitytest',
        existOpportunity : 'demotest6',
        tags       : 'Getting Started'
    
    }
    it('Add Engagement details via Opportunities ',()=> {

    // Login the Devrev account
    cy.visit('https://app.devrev.ai/test-demo1')
    cy.wait(10000)
    cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
    cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
    cy.wait(50000)
      

    //  Add New Engagement details

      cy.get('[title="Opportunities"]').should('be.visible').click()
      cy.get('[role="treegrid"]', {timeout:20000}).contains(opportunityDetails.existOpportunity).click()
      cy.get('[data-drid="work--timeline--tabs--nav-item--engagements"]', { timeout: 20000 }).contains('Engagement').click()   

      cy.get('[data-drid="create-engagement--create-button--single-create"]').click()
     
     cy.get('[data-drid="undefined-trigger"]').click()
     cy.get('.select-dropdown__options').contains('Email').click()
     cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-title"]').click()
     cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-title"]').clear({ force: true })
     cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-title"]').type(opportunityDetails.engagementtitle)
     
     cy.get('[data-drid="create-engagement--create-sidebar--description--editor"]').type('SmokeTesting')

     cy.get('span[class="text-color-tertiary"]').contains('Select').click()
     cy.get('[class="select-dropdown__options"]>div').contains(opportunityDetails.addowner).click()
     cy.get('body').click(0, 0)
     
     cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-external_url--content"]').type(opportunityDetails.url)

     cy.get('[data-drid="create-engagement--create-submit"]').contains('Create').should('be.visible').click()

     cy.get('[data-drid="engagement-sidebar--details-sidebar--close-button"]>span').click()
  
      })

})