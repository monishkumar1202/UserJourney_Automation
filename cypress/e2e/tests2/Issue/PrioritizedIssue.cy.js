describe ('Create the New Issue ', ()=> {

    const issuesdetails = { 
  
        titlename : 'issue created by testing user journey',
        des : 'Issue with clicking the button',
        parts : 'testingUserjourney',
        addowner : 'Adhithya Sankar C ',
        priority : 'P3',
        stageOpenBac      : 'Backlog',
        stageOpenPri      : 'Prioritized',
        stageDev          : 'In Development',
        partsname         : 'testingUserJourney',
        dashboardname     : 'DashboardIssues',
        dashboarddes      : 'Issue User Journery'

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
       
       cy.get('[data-drid="works--new-work-button"]').should('be.visible').click()
       cy.get('input[name="title"]').type(issuesdetails.titlename)
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]').type(issuesdetails.des)
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]').click()
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.parts).click()

       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]').click()
       cy.get('[class="select-dropdown__options"]>div').contains(issuesdetails.addowner).click()

       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-priority_v2-trigger"]').click()
       cy.get('[class="select-dropdown__options"]').contains(issuesdetails.priority).click()

       
       cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]').type('10000')
       cy.get('[data-drid="works--sprint-field-"]').click()
      
      // Add the Ongoing sprint 

       cy.get('[data-drid="sprint-menu--menu"]>div>button').should('be.visible')
       cy.get('[data-drid="sprint-menu--menu"]').should('be.visible').click()
       cy.get('[class="text-default-body text-color-primary"]').contains(addsprint).click

       // Open / Inprogress 

       cy.get('[class="select-dropdown__options"]').contains(stageDev)
       cy.get('[data-state="closed"]').should('be.visible').click()
       
       // Publish the cluster 

       cy.get('[data-drid="works--action-button"]').click()
       cy.get('[data-drid="works--action-button--DASHBOARD--create-new-report"]').should('be.visible').click()
       cy.get('[data-drid="DASHBOARD--create-dashboard-form-title"]').type(dashboardname)
       cy.get('[data-drid="DASHBOARD--create-dashboard-form-description"]').type(dashboarddes)
       cy.get('[class="react-grid-layout layout"]').click()

       // Update Widgets

        cy.get('[data-drid="dashboard-builder-base--widget-name--slot-input"]').type(widgetname)
        cy.get('[data-drid="dashboard-builder-base--widget-description--slot-input"]').type(widgetdes)
        cy.get('[data-drid="dashboard-builder-base--create-widget--reset"]').should('be.visible')
        cy.get('[data-drid="dashboard-builder-base--create-widget--submit"]').should('be.visible').click()

    
     })


})