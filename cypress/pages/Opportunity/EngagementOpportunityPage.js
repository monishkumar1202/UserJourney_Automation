import EngagementOpportunity from '../../locators/Opportunity/addEngagementlocator';

 
const engagementLocators = new EngagementOpportunity();   
 
class AddEngagement {
     
    existingOpportunity = (name) => {
        return ({ args: { name, selector: engagementLocators.opportunityTreeGrid} },
          ({ name, selector }) => { 
            cy.get(selector).contains(name).click(); 
          }
        );
    }

    engagementTab = (Tabname) => {
        return cy.get(engagementLocators.engagementTab).contains(Tabname).click();
    }

    createEngagementButton = () => {
       return cy.get(engagementLocators.createEngagementButton).click();
    }

    selectEngagementType = (type) => {
       return ({ args : {type, selector: engagementLocators.undefinedTrigger } },
            ({ type, selector }) => {
                cy.get(selector).click();
                cy.get(`.select-dropdown__options:contains(${type})`).click();
            }
        )
    }

    fillEngagementTitle = (title) => {
        return ({ args: { title, selector: engagementLocators.engagementTitleField } },
            ({ title, selector }) => {
                cy.get(selector).click();
                cy.get(selector).clear({ force: true });
                cy.get(selector).type(title);
            }
        )
    }

    fillDescription = (description) => {
        return ({ args: { description, selector: engagementLocators.descriptionEditor } },
            ({ description, selector }) => {
                cy.get(selector).type(description);
            }
        )
    }

    selectOwner = (ownerName) => {
        return ({ args: { ownerName, selector: engagementLocators.selectOwnerDropdown  } },
            ({ ownerName, selector }) => {
                cy.get(selector).click();
                cy.get(`${engagementLocators.ownerOption}:contains(${ownerName})`).click();
                cy.get('body').click(0, 0);
            }
        )
    }

    fillExternalURL = (url) => {
        return ({ args : {url, selector: engagementLocators.externalUrlField } },
            ({ url, selector }) => {
                cy.get(selector).type(url);
            }
        )
    }

    clickCreateButton = () => {
        return ({ args: { selector: engagementLocators.createSubmitButton } },
            ({ selector }) => {
                cy.get(selector).click();
            }
        )
    }

    closeEngagementSidebar = () => {
        return ({ args: { selector: engagementLocators.closeButton } },
            ({ selector }) => {
                cy.get(selector).click();
            }
        )
    }

    xyzeButton = () => {
        return ({ args: { selector: engagementLocators.createSubmitButton } },
            ({ selector }) => {
                cy.get(selector).click();
            }
        )
    }


}



module.exports = new AddEngagement();