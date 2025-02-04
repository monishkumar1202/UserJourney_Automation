
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
       cy.get('[data-drid="sprint-menu--menu"]>div>button').should('be.visible')

      // Add the Ongoing sprint 

           cy.get('[data-drid="sprint-menu--menu"]>div>button').should('be.visible')
           cy.get('[data-drid="sprint-menu--menu"]').should('be.visible').click()
           cy.get('[class="text-default-body text-color-primary"]').contains(issuesdetails.addsprint).click


      // Create New Sprint

            cy.get('[data-drid="sprint-settings--name--slot-inputWrapper"]').type(issuesdetails.sprinttitle)
            cy.get('[data-drid="sprint-settings--description--editor"]').type(issuesdetails.sprintdes)
            cy.get('[data-drid="undefinedduration"]').type(issuesdetails.sprintduration)
            cy.get('[data-field-form-element-name="owned_by"]>div.w-full').click()
            cy.get('[class="select-dropdown__options"]').contains(issuesdetails.addowner).get('body').click(0, 0)
            cy.get('[data-field-form-element-name="applies_to_part"]>div').contains('Select part').click()
            cy.get('[class="select-dropdown__options"]').contains(issuesdetails.partsname).get('body').click(0, 0)
            cy.get('[data-drid="sprint-settings--create-sprint-board-button"]').should('be.visible').click()

            cy.get('[data-drid="works--create-work-submit"]').should('be.visible').click()
            cy.get('[data-drid="work--details-sidebar--detail-fields-show-more-toggle-button"]').click()
            cy.get('[data-drid="work--details-sidebar--shared-template-field-stage"]').click()
     

       
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