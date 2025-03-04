describe(' Opportunity delete the User ', () => {

  const opportunityDetails = {

<<<<<<< HEAD
    deleteoppname: 'test99clone02',
=======
    deleteoppname : 'usertest03',
>>>>>>> 476bcf5 (My First Version on Datadriven Framework)

  }

  it('delete Opportunities', () => {

    // Login the Devrev account
    cy.visit('https://app.devrev.ai/test-demo1')
    cy.wait(10000)
    cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
    cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
    cy.wait(50000)

    // Navigate the Explore and Select the opportunities

    cy.get('[title="Explore"]').click()
    cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]', { timeout: 20000 })
      .should('be.visible').type('Opportunities')
    cy.get('[col-id="View"]', { timeout: 20000 }).contains('Opportunities').click()

    // Delete the Opportunities in table

    // cy.get('[title="Opportunities"]').should('be.visible').click()
    cy.get('[role="treegrid"]').contains(opportunityDetails.deleteoppname).click()
    cy.get('button[data-drid="work--details-sidebar--dropdown-button"]').click()
    cy.get('[data-drid="work--details-sidebar--delete-button"]').click()
    cy.get('[data-drid="works--delete-modal-confirm-button"]').should('be.visible').click()

    // verify the Opportunity delete 

    cy.get('[data-drid="GLOBAL_TOASTER"]').contains('Deleted successfully')
    cy.get('[role="treegrid"]', { timeout: 10000 }).should('not.contain', opportunityDetails.deleteoppname)


  })


})