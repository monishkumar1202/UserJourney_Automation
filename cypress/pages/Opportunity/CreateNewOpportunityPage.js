import CreateOpportunity from '../../locators/Opportunity/CreateOpportunity';
import  CreateNewOpportunity  from '../../locators/Opportunity/CreateOpportunity';

createopportunitylocator = new CreateNewOpportunity();

class CreateNewOpportunity {
    

    createOpportunity = () => {
        return ({ args : { selector: createopportunitylocator.newWorkButton } },
            ({ selector }) => {
                cy.get(selector).click();
            }
        )
    }

    fillOpportunityTitle = (title) => {
        return ({ args : { title, selector: createopportunitylocator.titleInput } },
            ({ title, selector }) => {
                cy.get(selector).click();
                cy.get(selector).type(title);
            }
        )
    }

    fillDescription = (description) => {
        return ({ args: { description, selector: createopportunitylocator.descriptionInput } },
            ({ description, selector }) => {
                cy.get(selector).type(description);
            }
        )
    }

    selectAccount = (account) => {
        return ({ args: { account, selector: createopportunitylocator.accountDropdown } },
            ({ account, selector }) => {
                cy.get(selector).click();
                cy.get(CreateOpportunity.accountSearchInput).type(account);
                cy.get(`${CreateOpportunity.accountOptions}:contains(${account}`).click();
            }
        )
    }

    selectOwner = (ownerName) => {
        return ({ args: { ownerName, selector: createopportunitylocator.ownedByDropdown  } },
            ({ ownerName, selector }) => {
                cy.get(selector).click();
                cy.get(`${CreateOpportunity.ownerOption}:contains(${ownerName})`).click();
                cy.get('body').click(0, 0);
            }
        )
    }

    fillValue = (amount) => {
        return ({ args: { amount, selector: createopportunitylocator.amountInput } },
            ({ amount, selector }) => {
                cy.get(selector).type(amount);
            }
        )
    }

    fillArr = (arr) => {
        return ({ args: { arr, selector: createopportunitylocator.arrInput        } },
            ({ arr, selector }) => {
                cy.get(selector).type(arr);
            }
        )
    }

    selectContacts = (contact) => {
        return ({ args: { contact, selector: createopportunitylocator.contactsDropdown } },
            ({ contact, selector }) => {
                cy.get(selector).click();
                cy.get(CreateOpportunity.contactsSearchInput).type(contact);
                cy.get(`${CreateOpportunity.contactsOptions}:contains(${contact}`).click();
                cy.get('body').click(0, 0);
            }
        )
    }

    selectTags = (tag) => {
        return ({ args: { tag, selector: createopportunitylocator.tagsField } },
            ({ tag, selector }) => {
                cy.get(selector).click();
                cy.get(`${CreateOpportunity.tagsOptions}:contains(${tag}`).click();
            }
        )
    }

    clickCreateButton = () => {
        return ({ args: { selector: createopportunitylocator.createSubmitButton } },
            ({ selector }) => {
                cy.get(selector).click();
            }
        )
    }



}

module.exports = new CreateOpportunity();