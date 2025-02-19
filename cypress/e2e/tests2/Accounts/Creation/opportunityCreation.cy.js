describe('Create Opportunity via Account ', ()=>{

    const Accountdetails = {
        
        oldaccount : 'Test_demo11',
        titlename : 'Demotest10',
        addowner : 'monishkumarsk12',
        URL  :    'www.testingopp.co.in',
        tags  :   'Getting Started'}
 
    it('opportunity Create via Acccount details ', ()=> {

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

    // Verify the Opportunity created Sucessfully   
    
        cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()
            cy.get('[col-id="displayName"]').contains(Accountdetails.oldaccount).click()
            cy.get('[data-drid="account-sidebar--collapsed"]',{timeout: 20000}).click()       
            cy.get('[data-drid="revo-widget-header--tab-strip--next-tab"]').click();
            cy.get('[role="menu"]').contains('Opportunities').click();
                cy.get('[data-drid="revo--create-opportunity"]').click() 
                cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]',{timeout:20000}).type(Accountdetails.titlename)
                cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]').type('end to end testing')
                cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]').click()
                cy.get('[class="select-dropdown__options"]>div').contains(Accountdetails.addowner).click()
                cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]').type('10000')
                cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]').type('5000')
                cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags-select"]').click()
                cy.get('[class="select-dropdown__options"]').contains(Accountdetails.tags).click()
                cy.get('body').click(0, 0)
                cy.get('[data-drid="works--create-work-submit"]').scrollIntoView().click()

            // verify the Opportunity details created sucesfully     

                cy.get('[data-drid="work--info-header--title"]').contains(Accountdetails.titlename)
                cy.get('[data-drid="work--details-sidebar--close-button"]').click()

            // verifying the create opportunity displaying the Account details

                cy.get('[data-drid="revo-widget-header--opportunity"]').click()
                cy.get('[data-drid="--title"]').contains(Accountdetails.titlename)
                cy.get('[data-drid="account-sidebar--details-sidebar--close-button"]').click()


        })


    })


