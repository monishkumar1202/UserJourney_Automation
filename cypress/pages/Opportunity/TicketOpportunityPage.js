import TicketOpportunityPage from "../../locators/Opportunity/TicketOpportunity"

const ticketopportunitylocator =new TicketOpportunityPage ();

class TicketOpportunity {

    exitsoppotunity = (name) => {
        return ({ args: { name, selector: ticketopportunitylocator.treegrid} },
          ({ name, selector }) => { 
            cy.get(selector).contains(name).click(); 
          }
        );
    
    }
     clickTicketlink  = (ticketname) => {
         return  ({ args: {  selector: ticketopportunitylocator.addLinksDropdown} },
             ({  selector }) => { 
        cy.get(selector).click();
        cy.get(`${ticketopportunitylocator.dependentOnOption}`).click();
        cy.get(`${engagementLocators.newTicketOption}:contains(${ticketname})`).click();
         }
      );
    }

     fillTickettitle = (title) => {
        return ({ args : { title, selector : ticketopportunitylocator.titleInput } },
            ({ title, selector }) => {
                cy.get(selector).click();
                cy.get(selector).clear({ force: true });
                cy.get(selector).type(title);
            }
        )
     }

     typeDes = (des) => {
        return ({ args : { des, selector : ticketopportunitylocator.titleInput } },
            ({ des, selector }) => {
                cy.get(selector).click();
                cy.get(selector).type(des);
            }
        )
    }

      selectPart = (partName) => {
        return ({ args: { partName, selector: ticketopportunitylocator.appliesToPartDropdown } },
            ({ partName, selector }) => {
                cy.get(selector).click();
                cy.get(`${ticketopportunitylocator.groupDropdown}:contains(${partName})`).click();
            }
        )
     }
      
    selectAccount = (accountName) => {
       return ({ args: { accountName, selector: ticketopportunitylocator.revOrgAccountDropdown } },
          ({ accountName, selector }) => {
             cy.get(selector).click();
             cy.get(`${ticketopportunitylocator.accountOption}:contains(${accountName})`).click();
          }
       )
     }
     ClickSumbit = () => {
        return ({ args: { selector: ticketopportunitylocator.submitButton } },
            ({ selector }) => {
                cy.get(selector).click();
            }
        )
     }

     VerifyTicketTitle = (title) => {
        return ({ args: { title, selector: ticketopportunitylocator.workInfoHeaderTitle } },
            ({title, selector }) => {
                cy.get(selector).contains(title);
            }
         )
     }
      
     VerifyVistaBoard  = (title) => {
        return ({ args: { title, selector: ticketopportunitylocator.linkItemTitle } },
            ({title, selector }) => {
                cy.get(selector).contains(title);
            }
         )
     }

     CloseTicketPage = () => {
     return ({ args: { selector: ticketopportunitylocator. ticketcloseButton } },
        ({ selector }) => {
            cy.get(selector).click();
        }
      )
     }

     CloseButton = () => {
        return ({ args: { selector: ticketopportunitylocator. closeButton } },
           ({ selector }) => {
               cy.get(selector).click();
           }
         )
     }

     }

module.exports = new TicketOpportunity();