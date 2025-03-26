import OpportunityCreate from "../../locators/Accounts/OpportunityCreation"

const opportunitycreate = OpportunityCreate();

class OpportunityCreate {

    selectAccount(accountName) {
        opportunitycreate.displayName.contains(accountName).click();
    }

    collapseAccountSidebar() {
        opportunitycreate.accountSidebarCollapsed.click();
    }

    clickNextTab() {
        opportunitycreate.nextTab.click();
    }

    selectOpportunitiesMenu() {
        opportunitycreate.opportunitiesMenu.click();
    }

    clickCreateOpportunity() {
        opportunitycreate.createOpportunityButton.click();
    }

    typeOpportunityTitle(title) {
        opportunitycreate.opportunityTitleInput.type(title);
    }

    typeOpportunityBody(body) {
        opportunitycreate.opportunityBodyEditor.type(body);
    }

    selectOwnedBy(owner) {
        opportunitycreate.ownedByDropdown.click();
        opportunitycreate.ownerOptions.contains(owner).click();
    }

    typeAmount(amount) {
        opportunitycreate.amountInput.type(amount);
    }

    typeAnnualRecurringRevenue(revenue) {
        opportunitycreate.annualRecurringRevenueInput.type(revenue);
    }

    selectTags(tags) {
        opportunitycreate.tagsDropdown.click();
        opportunitycreate.tagsOptions.contains(tags).click();
    }

    closeDropdown() {
        cy.get('body').click(0, 0); // To close the dropdown
    }

    submitOpportunity() {
        opportunitycreate.createWorkSubmitButton.scrollIntoView().click();
    }

    verifyOpportunityTitle(title) {
        opportunitycreate.opportunityTitleVerification.contains(title).should('be.visible');
    }

    closeOpportunityDetails() {
        opportunitycreate.closeButton.click();
    }

    clickOpportunityHeader() {
        opportunitycreate.opportunityHeader.click();
    }

    verifyOpportunityInAccountDetails(title) {
        opportunitycreate.opportunityTitle.contains(title).should('be.visible');
    }

    closeAccountSidebar() {
        opportunitycreate.accountSidebarCloseButton.click();
    }

}