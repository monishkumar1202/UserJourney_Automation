
describe('Creating the Ticket via Contact',()=> {

    const mergecontact = {
     mergealertq:   'Do you wish to merge these contacts?',
     mergealertA: ' will be deleted.',
     mergetoastermessage : 'Contacts successfully merged',
     contactname : 'MergeA',
     mergecontactname : 'MergeB'
     
    }
  
    it('New Ticket create via Contact details', ()=>  {

    // Login the Devrev account

        cy.visit('https://app.devrev.ai/test-demo1')
        cy.wait(20000)
        cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
        cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
        cy.wait(50000)
    
    
    // Navigate to the Contacts

        cy.get('[title="Explore"]',{timeout : 30000}).click()
        cy.get('[data-drid="explore-page--search-bar-small-screen"]', {timeout : 20000})
        .should('be.visible').type('Contacts')  
        cy.wait(10000)
        cy.get('[col-id="View"]').contains('Contacts').click()


    // Merge the Contacts 
    
      //  cy.get('[title="Contacts"]',{timeout:20000}).should('be.visible').click()
        cy.get('[role="treegrid"]').contains(mergecontact.contactname).click()
        cy.get('[data-drid="revu--merge-to-select-trigger"]',{timeout:20000}).should('be.visible').click()
        cy.get('.select-dropdown__search-input',{timeout : 40000}).type(mergecontact.mergecontactname)
        cy.get('.select-dropdown__options').contains(mergecontact.mergecontactname).click()

      // verify the contact details Contact A and B

        cy.get('[data-drid="revu-dep--sidebar--from-revu-sidebar"]').contains('Contact A').should('be.visible')
        cy.get('[data-drid="revu-info-header--title"]').contains(mergecontact.contactname)        
        cy.get('[data-drid="revu-dep--sidebar--to-revu-sidebar"]').contains('Contact B').should('be.visible')
        cy.get('[data-drid="revu-info-header--title"]').contains(mergecontact.mergecontactname)
    
      // Switch the Contact 
      
        cy.get('[data-drid="revu-dep--sidebar--header--switch"]').should('be.visible').click()
        cy.get('[data-drid="revu-dep--sidebar--from-revu-sidebar"]').contains(mergecontact.mergecontactname).should('be.visible')
        cy.get('[data-drid="revu-dep--sidebar--to-revu-sidebar"]').contains(mergecontact.contactname).should('be.visible')
        cy.get('[data-drid="revu-dep--sidebar--header--switch"]').should('be.visible').click()
        
      // Merge the Contact 
      
        cy.get('[data-drid="revu-dep--sidebar--header--merge"]').should('be.visible').click()
        cy.get('[data-drid="undefined-title"]').contains(mergecontact.mergealertq).should('be.visible')
        cy.get('[class="list-decimal list-inside text-default text-color-primary ml-4 space-y-2"]').should('include.text', mergecontact.mergealertA)
        cy.get('[data-drid="undefined-popup"]').contains('Cancel')
        cy.get('[data-drid="revu--merge-button"]').should('be.visible').click()
        cy.get('[data-drid="job--updates-banner"]',{timeout:20000}).contains(mergecontact.mergetoastermessage)

        cy.get('[data-drid="revu--details-sidebar--close-button"]').click()

        cy.get('[role="treegrid"]').should('not.contain', 'MergeA')

    })

})