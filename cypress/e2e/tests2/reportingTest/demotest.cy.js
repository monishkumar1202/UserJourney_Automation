describe('template spec', () => {

  const opportunityDetails = {
    title: 'Opportunities',
    totalValue: '10000',
    arr: '5000',
    contact: 'test',
    tags: 'Tag1, Tag2',
    titlename: 'testing01',
    addowner: 'monishkumarsk12'
  }

  it('passes', () => {

    cy.visit('https://adactinhotelapp.com/')
    cy.get('#username').type('Monish0012')
    cy.get('#password').type('123456789')
    cy.get('#login').click()

  })

})