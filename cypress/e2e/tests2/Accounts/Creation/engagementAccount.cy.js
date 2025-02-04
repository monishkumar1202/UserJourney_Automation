describe('Create the Engagement via Account details ', ()=>{

    const Accountdetails = {
        
        oldaccount : 'demoUser',
        engagementtilte : 'New Engagment 03',
        header     : 'Email',
        members    : 'monishkumarsk12',
        url        :  'www.cypressdemo.com'}
 
    it('Validate the New Engagement create succesfully', ()=> {

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

    // Create the Engagement via Account details    

    cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()
        cy.get('[role="treegrid"]').contains(Accountdetails.oldaccount).click()
        cy.get('[data-drid="account-sidebar--collapsed"]',{timeout: 20000}).click()
        cy.get('[data-drid="account-sidebar--timeline-widget--tabs--nav-item--engagements"]', {timeout : 20000}).contains('Engagements').click()
        cy.get('body').then(($body) => {
            if ($body.find('[data-drid="create-engagement--create-button--single-create"]',{timeout: 20000}).length > 0) {
                cy.get('[data-drid="create-engagement--create-button--single-create"]',{timeout: 20000}).click()
         } else {
                cy.get('[data-drid="create-engagement--create-button--multiple-create"]',{timeout: 20000}).should('be.visible')
                .click({ force: true })   
         }
         cy.get('[data-drid="undefined-trigger"]').click()
         cy.get('.select-dropdown__options').contains(Accountdetails.header).click()
        cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-title"]').click()
        cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-title"]').clear()
        cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-title"]').type(Accountdetails.engagementtilte)
       // 
        // 
        cy.get('[data-drid="create-engagement--create-sidebar--description--editor"]').type('SmokeTesting')
        cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-members-select"]').contains('Select').click()
        cy.get('input[placeholder="Search"]').type('monish')
        cy.get('[class="select-dropdown__options"]>div>li').contains(Accountdetails.members).click()
        cy.get('body').click(0, 0)
        cy.get('[data-drid="create-engagement--create-sidebar--shared-template-field-external_url--content"]').type(Accountdetails.url)
        cy.get('[data-drid="create-engagement--create-submit"]').contains('Create').should('be.visible').click()
        
        cy.get('[data-drid="engagement-sidebar--details-sidebar--close-button"]>span').click()


    })
    })


})