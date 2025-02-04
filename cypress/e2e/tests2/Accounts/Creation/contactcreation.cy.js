describe('Account page via create the Contact details', ()=>{

    const Accountdetails = {
        
        oldaccount : 'Test_demo08',
        titlename :  'UserF',
        phoneno   :  '9876556789',
        email   : 'testingautomation03@gmail.com',
        tags    :  'mk'


    }
 
    it('Account deatils create the Contact details', ()=>{  

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


        // verify display the New Account 

        cy.get('[title="Accounts"]',{timeout : 30000}).should('be.visible').click()
        cy.get('[col-id="displayName"]').contains(Accountdetails.oldaccount).click()
        cy.get('[data-drid="account-sidebar--collapsed"]',{timeout: 20000}).click()
        
        // create the Contact in account details

        cy.get('[data-drid="revo-widget-header"]').contains('Contacts').then(($contacts) => {
            if ($contacts.length > 0) {
              cy.wrap($contacts).click();
            } else {
              cy.get('[data-drid="revo-widget-header--tab-strip--next-tab"]').click();
              cy.get('[class="szh-menu szh-menu--state-open szh-menu--dir-top"]').contains('Contacts').click();
            }
          })

          cy.get('[data-drid="revo--create-user-button"]').click()

        // Fill the contact details

         cy.get('input[name="displayName"]',{timeout:20000}).type(Accountdetails.titlename)
         cy.get('[data-drid="revu--create-sidebar--description--editor"]').type('Add Contact for testing')
         cy.get('[data-drid="revu--create-sidebar--shared-template-field-email--content"]')
         .type(Accountdetails.email)
         cy.get('[data-drid="revu--create-sidebar--shared-template-field-phone_numbers--placeholder"]').click()
         cy.get('[data-drid="revu--create-sidebar--shared-template-field-phone_numbers--country-code-dropdown-trigger"]').click()
         cy.get('.select-dropdown__search-input').type('India').type('{enter}')
         cy.get('[placeholder="Enter number"]').type(Accountdetails.phoneno)

         cy.get('[data-drid="revu--create-sidebar--shared-template-field-tags"]').click()
         cy.get('[class="select-dropdown__options"]').contains(Accountdetails.tags).click()
         cy.get('[data-drid="revu--create-submit"]').contains('Create').click()
         
         cy.get('[data-drid="revu-info-header--title"]').contains(Accountdetails.titlename).should('be.visible')
         cy.get('[data-drid="revu--details-sidebar--close-button"]').click()

         cy.get('[data-drid="revo-widget-header--user"]').click()

         cy.get('[data-drid="revo-widget--see-all-details"]',{timeout : 30000}).click()
         cy.get('[role="treegrid"]',{timeout : 30000}).contains(Accountdetails.titlename).should('be.visible')




    })
})