describe('Creat the Opportunity via contact details',()=> {
  
    const contactdetails ={
     
       titlename : 'usertest0$',
       addowner : 'monishkumarsk12',
       tags     : 'mk',
       exitscontact : 'UserG'


    }

    it('Create the new Opportunity via Contact details', ()=>  {


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

    // create the Opportunity via contact details

    //    cy.get('[title="Contacts"]', {timeout : 20000}).should('be.visible').click()
        
        cy.viewport(1520,780)
        cy.get('[role="treegrid"]').contains(contactdetails.exitscontact).click()
        cy.get('[data-drid="revo-widget-header--opportunity"]',{timeout : 20000}).should('be.visible').click()
        cy.get('[data-drid="revo--create-opportunity"]').click()
        cy.get('[name="title"]',{timeout:20000}).type(contactdetails.titlename)
        cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]').type('end to end testing')
        cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]').click()
        cy.get('.select-dropdown__search-input').type('monish')
        cy.get('[class="select-dropdown__options"]>div>li').contains(contactdetails.addowner).click()
        cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]').type('10000')
        cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]').type('5000')
        cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags-select"]').click()
        cy.get('[class="select-dropdown__options"]').contains(contactdetails.tags).click()
        cy.get('body').click(0, 0)
        cy.get('[data-drid="works--create-work-submit"]').scrollIntoView().click()

    // verify the Opportunity details created sucesfully     
    
        cy.get('[data-drid="work--info-header--title"]').contains(contactdetails.titlename)
        cy.get('[data-drid="work--details-sidebar--close-button"]').click()

    // verifying the create opportunity displaying the contact details

        cy.get('[data-drid="revo-widget-header--opportunity"]').click()
        cy.get('[data-drid="--title"]').contains(contactdetails.titlename)
        cy.get('[data-drid="revu--details-sidebar--close-button"]').click()

    })

})
