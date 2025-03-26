describe('Creating the Ticket via Contact', () => {

    const contactdetails = {
        titlename: 'UserXY',
        members: 'monishkumarsk12',
        email: 'testautomation@gmail.com',
        phoneno: '9998887750',
        tags: 'mk'
    }

    it('New Ticket create via Contact details', () => {

        // Login the Devrev account
        cy.visit('https://app.devrev.ai/test-demo1')
        cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
        cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
        cy.wait(50000)



        // Navigate to the Contacts

        cy.get('[title="Explore"]', { timeout: 20000 }).click()
        cy.get('[data-drid="explore-page--search-bar-small-screen"]', { timeout: 20000 })
            .should('be.visible').type('Contacts')
        cy.get('[col-id="View"]').contains('Contacts').click()

        // Create a new contact

        //  cy.get('[title="Contacts"]',{timeout : 20000}).should('be.visible').click()
        cy.get('[data-drid="revu--create-sidebar--new-rev-user"]').click()
        cy.get('input[name="displayName"]').type(contactdetails.titlename)
        cy.get('[data-drid="revu--create-sidebar--description--editor"]').type('testing initiate')
        cy.get('[data-drid="revu--create-sidebar--shared-template-field-email--content"]').type(contactdetails.email)

        cy.get('[data-drid="revu--create-sidebar--shared-template-field-phone_numbers--placeholder"]').click()
        cy.get('[data-drid="revu--create-sidebar--shared-template-field-phone_numbers--country-code-dropdown-trigger"]').click()
        cy.get('.select-dropdown__search-input').type('India').type('{enter}')
        cy.get('[placeholder="Enter number"]').type(contactdetails.phoneno)

        cy.get('body').click(0, 0)
        cy.get('[data-drid="revu--create-sidebar--shared-template-field-rev_org--account"]').click()
        cy.get('.select-dropdown__search-input').type('test')
        cy.get('.select-dropdown__options>div').contains('Test_demo5').click()
        cy.get('[data-drid="revu--create-sidebar--shared-template-field-tags"]').click()
        cy.get('[class="select-dropdown__options"]').contains(contactdetails.tags).click()
        cy.get('[data-drid="revu--create-submit"]').contains('Create').click()


        // Verify that the contact was created successfully

        cy.get('[data-drid="revu-info-header--title"]').contains(contactdetails.titlename)
        cy.get('[data-drid="revu--details-sidebar--close-button"]').should('be.visible').click()
        cy.get('[role="rowgroup"]').contains(contactdetails.titlename)



    })


})







