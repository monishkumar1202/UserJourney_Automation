import ValidateOpportunity from "../../locators/Opportunity/ValidateDashboard"

const dashboardlocator = new ValidateOpportunity();


class ValidateVista {

        VerifyHeader = (title) => {
            return ({ args: { title, selector: dashboardlocator.opportunitiesHeader } },
                ({title, selector }) => {
                    cy.get(selector).contains(title);
                }
             )
        }

        VerifyCreateButton = () => {
            return ({ args: {  selector: ticketopportunitylocator.newWorkButton } },
                ({ selector }) => {
                    cy.get(selector).contains(title);
                }
             )
         }

         verifyTableHeader = () => {
            return ({ args: {  selector: ticketopportunitylocator.treegrid } },
                ({ selector }).within(() => {
                    cy.contains('Items').should('be.visible');
                    cy.contains('Account').should('be.visible');
                    cy.contains('Stage').should('be.visible');
                    cy.contains('Owner').should('be.visible');
                    cy.contains('Total Value').should('be.visible');   
             })
           )
         }

         VerifyComponents = () => {
            return ({ args: {  selector: ticketopportunitylocator.clearAllFiltersButton } },
                ({ selector }) => {
                    cy.get(selector).contains(title);
                }
             )
         }

        


}

module.exports = new ValidateVista();