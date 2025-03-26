import deleteOpportunity from "../../locators/Opportunity/DeletedOpportunity";

deleteopportunitylocator = new deleteOpportunity();

class deleteOpportunity {

    exitsoppotunity = (name) => {
        return ({ args: { name, selector: deleteopportunitylocator.treegrid} },
          ({ name, selector }) => { 
            cy.get(selector).contains(name).click(); 
          }
        );
    }

    Clickdropdown = () => {
        return cy.get(deleteopportunitylocator.dropdownButton).click();
    }

    ClickdeleteButton = () => {
        return cy.get(deleteopportunitylocator.deleteButton).click();
    }
   
    ClickconfirmDeleteButton = () => {
        return cy.get(deleteopportunitylocator.confirmDeleteButton).click();
    }

    globalToaster = () => {
        return cy.get(deleteopportunitylocator.globalToaster);
    }

    
    


}

module.exports = new deleteOpportunity();