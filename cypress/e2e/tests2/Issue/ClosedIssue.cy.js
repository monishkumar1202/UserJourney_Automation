describe ('Create the New Issue ', ()=> {

    const issuesdetails = {

        searchValue : 'Issues',
        exitissue  : 'ticket test',
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

   
    // Selet the Issue and Closed  
       
       cy.get('[class="text-h2 text-color-highlight"]').contains('Issues').should('be.visible')
       cy.get('[role="treegrid"]',{timeout : 20000}).contains(issuesdetails.exitissue).click()
       cy.get('[data-drid="work--details-sidebar--detail-fields-show-more-toggle-button"]').should('be.visible').click()
       cy.get('[data-drid="work--details-sidebar--shared-template-field-stage-select"]').click()
       
      //  Issue is not vaild to Close the Issue

       // Completed 
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.stagecompleted)
       cy.get('[data-state="closed"]').should('be.visible').click()

       // Wont Fix       
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.stagewontfix)
       cy.get('[data-state="closed"]').should('be.visible').click()
       cy.get('[data-drid="work--timeline--comments--comments-container--comments-list-container--rich-text-editor--editor"]').click()
       .type(issuesdetails.wontfixmessage)
       cy.get('[data-drid="work--timeline--comments--comments-container--comments-list-container--rich-text-editor--submit-button"]').click()
  

       // Duplicate
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.stagedulipcate)
       cy.get('[data-drid="issue--links-widget-tabs-wrapper"]').contains(issuesdetails.Issues).click()
       cy.get('[data-drid="links-widget--add-links--link-type-dropdown-menu"]').click()
       cy.get('[class="select-dropdown__search-input"]').type(issuesdetails.linkissue).click()
       cy.get('[data-state="closed"]').should('be.visible').click()

       // Open / Inprogress

       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.stageDev)
       cy.get('[data-state="closed"]').should('be.visible').click()
       
       // Publish the cluster 

       cy.get('[data-drid="works--action-button"]').click()
       cy.get('[data-drid="works--action-button--DASHBOARD--create-new-report"]').should('be.visible').click()
       cy.get('[data-drid="DASHBOARD--create-dashboard-form-title"]').type(issuesdetails.dashboardname)
       cy.get('[data-drid="DASHBOARD--create-dashboard-form-description"]').type(issuesdetails.dashboarddes)
       cy.get('[class="react-grid-layout layout"]').click()

       // Update Widgets

        cy.get('[data-drid="dashboard-builder-base--widget-name--slot-input"]').type(issuesdetails.widgetname)
        cy.get('[data-drid="dashboard-builder-base--widget-description--slot-input"]').type(issuesdetails.widgetdes)
        cy.get('[data-drid="dashboard-builder-base--create-widget--reset"]').should('be.visible')
        cy.get('[data-drid="dashboard-builder-base--create-widget--submit"]').should('be.visible').click()




     })


})