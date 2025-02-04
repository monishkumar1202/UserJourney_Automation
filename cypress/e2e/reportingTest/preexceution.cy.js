describe('pre exe',()=>{
     
  it('passes',()=>{

     cy.visit('https://app.devrev.ai/test-demo1')
       cy.get('input[inputmode="email"]').type('monishkumarsk12')
       .performance()
       .then((metrics) => {
         results.push(metrics)
         cy.task('save', metrics)
         expect(metrics.pageloadTiming).to.be.lessThan(5000)
         expect(metrics.domCompleteTiming).to.be.lessThan(5000)
       }).then((report) => {
          console.log(report);
        });
      });
    });
