describe ('Create the New Issue ', ()=> {

    const issuesdetails = {

        searchValue : 'Issues',
        titlename : 'issue created by testing user journey',
        des : 'Issue with clicking the button',
        parts : 'testingUserjourney',
        addowner : 'Adhithya Sankar C ',
        priority : 'P3',
        tags     : 'Getting Started',
        reportedby : 'monishkumarsk12',
        addsprint  : 'sprint27-29',
        stagecompleted : 'Completed',
        stagewontfix :  'Wont Fix',
        stageduplicate : 'Duplicate',
        wontfixmessage : 'This is not valid Bug',
        stageOpenBac      : 'Backlog',
        stageOpenPri      : 'Prioritized',
        stageDev          : 'In Development',
        partsname         : 'testingUserJourney',
        dashboardname     : 'DashboardIssues',
        dashboarddes      : 'Issue User Journery',
        sprinttitle       :  'Sprint 31-14'

    }

    it ('validation the Issue Created Sucessfully',()=> {
    
      // Login Devrev QA Env 
  
        cy.visit('https://app.devrev.ai/test-demo1')
        // cy.get('input[inputmode="email"]').should('be.visible').type('monishkumarsk12@gmail.com')
        //   cy.get('[class="auth0-lock-submit"]').should('be.visible').click()
        //   cy.wait(50000)
        
  
      // Navigate to Issue Page 
      
        cy.get('[title="Explore"]').click()
  
        cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]').then(($smallScreenInput) => {
          if ($smallScreenInput.is(':visible')) {
              cy.wrap($smallScreenInput).type('Issues')
          } else {
              cy.get('[data-drid="explore-page--search-bar-large-screen--slot-input"]').then(($largeScreenInput) => {
                  if ($largeScreenInput.is(':visible')) {
                      cy.wrap($largeScreenInput).type('Issues')
                  }
              })
          }
      })  
        cy.get('[col-id="View"]').contains('Issues').click()

   
    // Create the New Issues 
       
       cy.get('[class="text-h2 text-color-highlight"]').contains('Issues').should('be.visible')
       cy.get('[data-drid="works--new-work-button"]').should('be.visible').click()
       cy.get('input[name="title"]').type(issuesdetails.titlename)
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]').type(issuesdetails.des)
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]').click()
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.parts).click()

       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]').click()
       cy.get('[class="select-dropdown__options"]>div').contains(issuesdetails.addowner).click()
       cy.get('body').click(0, 0)

       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-priority_v2-trigger"]').click()
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.priority).click()

       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]').click()
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.tags).click()
       cy.get('body').click(0, 0)

       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-reported_by"]').click()
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.reportedby).click()
       cy.get('body').click(0, 0)

       cy.get('[data-drid="works--sprint-field-"]').click()
       
     // Select the Ongoing Sprint ;
     // Create the New Sprint   ;

       cy.get('[data-drid="works--create-work-submit"]').should('be.visible')




    })

})
