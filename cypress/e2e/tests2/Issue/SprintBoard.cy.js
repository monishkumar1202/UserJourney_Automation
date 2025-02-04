describe('Add the New Sprint Board', ()=> {

it('Create the New Sprint', ()=>{

    // Login Devrev 

      cy.visit('https://app.devrev.ai/test-demo1')
      // cy.get('input[inputmode="email"]').should('be.visible').type('monishkumarsk12@gmail.com')
      //   cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
      //   cy.wait(50000)
      

    // Navigate to Issue Page
    
      cy.get('[title="Explore"]').click()

      cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]').then(($smallScreenInput) => {
        if ($smallScreenInput.is(':visible')) {
            cy.wrap($smallScreenInput).type('Sprint Boards')
        } else {
            cy.get('[data-drid="explore-page--search-bar-large-screen--slot-input"]').then(($largeScreenInput) => {
                if ($largeScreenInput.is(':visible')) {
                    cy.wrap($largeScreenInput).type('Sprint Boards')
                }
            })
        }
    })  

      cy.get('[col-id="View"]').contains('Sprint Board').click()

    // Add New Sprint Board 

       cy.get('[data-drid="sprintboard--create-sprint-board-button"]').should('be.visible').click()

       cy.get('[data-drid="sprint-settings--name--slot-inputWrapper"]').type(sprinttitle)

       cy.get('[[class="grow"]>div]').contains('Description').click()

       cy.get('[data-drid="sprint-settings--description--editor"]').type(sprintdes)

       cy.get('[data-drid="undefinedduration"]').type(sprintduration)

       cy.get('[data-field-form-element-name="owned_by"]>div.w-full').click()

       cy.get('[class="select-dropdown__options"]').contains(addowner)
       
       cy.get('[data-field-form-element-name="applies_to_part"]>div').contains('Select part').click()

       cy.get('[data-drid="sprint-settings--create-sprint-board-button"]').should('be.visible').click()





})


})