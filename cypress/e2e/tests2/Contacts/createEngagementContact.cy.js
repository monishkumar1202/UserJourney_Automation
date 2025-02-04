describe('Create the Engagement via Contact details',()=> {

    const contactdetails ={
        engagementtilte : 'No : 6',
        exixtscontact : 'UserF',
        members : 'monishkumarsk12',
        url     :  'www.testing022.com'
    }
  
    it('Validate the New Engagement create succesfully', ()=>  {


    // Login the Devrev account

        cy.visit('https://app.devrev.ai/test-demo1')
        cy.wait(10000)
       cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
       cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
       cy.wait(50000)

    // Navigate to the Contacts

        cy.get('[title="Explore"]').click()
        cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000})
        .should('be.visible').type('Contacts') 
        cy.wait(10000)  
        cy.get('[col-id="View"]').contains('Contacts').click()

    // Validate the Create the engagement via contact
        

        cy.get('[role="treegrid"]').contains(contactdetails.exixtscontact).click()
        cy.get('[data-drid="timeline-widget--tabs--nav-item--engagements"]', {timeout : 20000}).contains('Engagements').click()
        cy.get('[data-drid="create-engagement--create-button--single-create"]').click()
        cy.get('input[name="title"]').click()
        cy.get('input[name="title"]').clear({ force: true })
        cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-title"]').type(contactdetails.engagementtilte)
        cy.get('[data-drid="undefined-trigger"]').click()
        cy.get('.select-dropdown__options').contains('Email').click()
        cy.get('[data-drid="create-engagement--create-sidebar--description--editor"]').type('SmokeTesting')
        cy.get('span[class="text-color-tertiary"]').contains('Select').click()
        cy.get('input[placeholder="Search"]').type('monish')
        cy.get('[class="select-dropdown__options"]>div>li').contains(contactdetails.members).click()
        cy.get('body').click(0, 0)
        cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-external_url--content"]').type(contactdetails.url)
        cy.get('[data-drid="create-engagement--create-submit"]').contains('Create').should('be.visible').click()
        cy.get('#scrollTarget').scrollTo('bottom')
    // cy.get('[data-drid="message-header-layout"]',{timeout:20000}).contains('created').should('be.visible')
        cy.get('[data-drid="engagement-sidebar--details-sidebar--close-button"]>span').click()


    







    })
})
