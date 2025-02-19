export default class Opportunitylocators {

    get displayName() {
        return cy.get('[col-id="displayName"]');
    }

    get accountSidebarCollapsed() {
        return cy.get('[data-drid="account-sidebar--collapsed"]', { timeout: 20000 });
    }

    get nextTab() {
        return cy.get('[data-drid="revo-widget-header--tab-strip--next-tab"]');
    }

    get opportunitiesMenu() {
        return cy.get('[role="menu"]').contains('Opportunities');
    }

    get createOpportunityButton() {
        return cy.get('[data-drid="revo--create-opportunity"]');
    }

    get opportunityTitleInput() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]', { timeout: 20000 });
    }

    get opportunityBodyEditor() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]');
    }

    get ownedByDropdown() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]');
    }

    get ownerOptions() {
        return cy.get('[class="select-dropdown__options"]>div');
    }

    get amountInput() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]');
    }

    get annualRecurringRevenueInput() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-annual_recurring_revenue--content"]');
    }

    get tagsDropdown() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags-select"]');
    }

    get tagsOptions() {
        return cy.get('[class="select-dropdown__options"]');
    }

    get createWorkSubmitButton() {
        return cy.get('[data-drid="works--create-work-submit"]');
    }

    get opportunityTitleVerification() {
        return cy.get('[data-drid="work--info-header--title"]');
    }

    get closeButton() {
        return cy.get('[data-drid="work--details-sidebar--close-button"]');
    }

    get opportunityHeader() {
        return cy.get('[data-drid="revo-widget-header--opportunity"]');
    }

    get opportunityTitle() {
        return cy.get('[data-drid="--title"]');
    }

    get accountSidebarCloseButton() {
        return cy.get('[data-drid="account-sidebar--details-sidebar--close-button"]');
    }
}

const opportunitylocators =  new OpportunityLocators();