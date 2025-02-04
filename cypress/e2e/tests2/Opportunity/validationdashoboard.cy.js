
describe ('Add the new Opportunities', ()=>{


      const scrollPositions = [150, 300, 450];
      const columns = ['stage', 'amount', 'owned_by'];
      const labels = ['Stage', 'Total Value', 'Owner'];


    it('validation on opportunity dashboard UI components',()=>{

    // Login the Devrev account
      cy.visit('https://app.devrev.ai/test-demo1')
      // cy.get('input[inputmode="email"]',{timeout:10000}).type('monishkumarsk12@gmail.com')
      // cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
      // cy.wait(50000)
    
      cy.get('[title="Opportunities"]').should('be.visible').click()

      cy.get('[class="text-h2 text-color-highlight"]').contains('Opportunities').should('be.visible')

      cy.get('button[data-drid="works--new-work-button"]', { timeout: 30000 }).should('be.visible')
      cy.get('[class="text-color-tertiary font-normal text-small group-hover:text-color-primary truncate"]').contains('Items').should('be.visible')
      cy.get('[class="text-color-tertiary font-normal text-small group-hover:text-color-primary truncate"]').contains('Account').should('be.visible')
    
           scrollPositions.forEach((position, index) => {
           cy.get('[class="ag-body-horizontal-scroll-viewport"]').scrollTo(position, 0)
           .get(`[class="ag-header-row ag-header-row-column"]>div[col-id="${columns[index]}"]`).contains(labels[index]).should('be.visible');
         })

      cy.get('[data-drid="works--filters--clear-all-filters"]').should('be.visible')
         
        })
      })

    