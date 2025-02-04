describe('template spec', () => {

  const opportunityDetails = {
    title : 'Opportunities',
    totalValue: '10000',
    arr: '5000',
    contact: 'test',
    tags: 'Tag1, Tag2',
    titlename: 'testing01',
    addowner:  'monishkumarsk12'
}

  it('passes', () => {

     cy.visit('https://adactinhotelapp.com/')
     cy.get('#username').type('Monish0012')
     cy.get('#password').type('123456789')
     cy.get('#login').click()

     
     cy.get('#location').select('Paris')
     cy.get('#hotels').select('Hotel Creek')
     cy.get('#room_type').select('Standard')

     







    // cy.visit('https://app.devrev.ai/test-demo1')
    // cy.wait(20000)
    // cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
    // cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
    // cy.wait(50000)
    // cy.get('[title="Explore"]').contains('Explore').click()
    // cy.wait(20000)
    // cy.get('[class="block lg:hidden"]>div[class="input-base_root__cXddL"]').type('Opportunities')
    // cy.wait(10000)
    // cy.get('[class="p-1 self-start"]').click()
    // cy.wait(10000)
    // // cy.url().should('include','/opportunities')
    // cy.wait(5000)

    // cy.get('button[data-drid="works--new-work-button"]').click()
    // cy.get('input[name="title"]').should('be.visible').type('Demotest')
    // cy.get('p[data-placeholder="Add description"]').type(opportunityDetails.titlename)
    // cy.get('span[class="text-color-tertiary"]').click()
    // cy.get('input[class="select-dropdown__search-input"]').type('Test').type('{enter}')
    // cy.wait(2000)
    // cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]').click() 
    // cy.get('input.select-dropdown__search-input').type('monish')
    
    // cy.get('div[class="select-dropdown__options"]>div>li').contains(opportunityDetails.addowner).click()
    // cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]>div').type(opportunityDetails.totalValue)
    // cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]>div').type(opportunityDetails.arr)
    // cy.get('[class="select-dropdown__options"]>div>li').contains('test03').click()
    // cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]>span').type('{enter}')
    // cy.get('button').contains('Create').click()
   
 
 
  })

})