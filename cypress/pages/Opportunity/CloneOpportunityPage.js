import ClonesOpportunity from "../../locators/Opportunity/ClonesOpportunitylocator"

cloneopportuntiylocator = new ClonesOpportunity ();

class CloneOpp {

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

    VerifyTab = (name, name1, name2) => {
        return ({ args: { name, name1, name2, selector: cloneOpportunityLocator.closeButton } },
            ({ name, name1, name2, selector }) => {
                cy.get(selector).contains(name);
                cy.get(selector).contains(name1);
                cy.get(selector).contains(name2);
            }
        );
    }




}

module.exports = new CloneOpp();