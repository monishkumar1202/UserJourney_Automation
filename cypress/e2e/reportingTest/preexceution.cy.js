describe('pre exe',()=>{
     
  it('passes',()=>{

     cy.visit('https://app.devrev.ai/test-demo1')
     cy.get('[title="Explore"]').click()
     cy.get('[data-drid="explore-page--search-bar-small-screen"]',{timeout : 20000})
     .should('be.visible').type('Accounts')
      
      cy.wait(200000);

      });

    });
