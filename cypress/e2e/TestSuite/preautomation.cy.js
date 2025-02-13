describe('Login Functionality', () => {
    it('should log in successfully with valid credentials', () => {
      
        cy.visit('https://app.devrev.ai/test-demo1')
        
        cy.origin ('//passwordless.devrev.ai/login', () => {
            cy.get('input[inputmode="email"]').type('monishkumarsk12@gmail.com')
            cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
            cy.wait(50000)
        })


    })       
});