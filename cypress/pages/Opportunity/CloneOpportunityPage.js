import ClonesOpportunity from "../../locators/Opportunity/ClonesOpportunity"

cloneopportuntiylocator = new ClonesOpportunity ();

class ClonesOpportunity{

    exitsopportunity = (name) => {
        return ({ args : { name, selector: cloneopportuntiylocator.pinnedLeftColsContainer } },
            ({ name, selector }) => {
                cy.get(selector).contains(name).click();
            }
        )
    }

    clickDropdownButton = () => {
        return cy.get(cloneopportuntiylocator.dropdownButton).click();
    }

    clickCloneButton = () => {
        return cy.get(cloneopportuntiylocator.cloneButton).click();
    }

    fillTitle = (title) => {
        return ({ args : { title, selector: cloneopportuntiylocator.titleInput } },
            ({ title, selector }) => {
                cy.get(selector).click();
                cy.get(selector).type(title);
            }
        )
    }

    clickSubmitButton = () => {
        return cy.get(cloneopportuntiylocator.submitButton).click();
    }

    clickCloseButton = () => {
        return cy.get(cloneopportuntiylocator.closeButton).click();
    }



}

module.exports = new ClonesOpportunity();