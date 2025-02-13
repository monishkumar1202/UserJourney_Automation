

class CreateIssuePage {
    
    get issuesHeader() { return cy.get('[class="text-h2 text-color-highlight"]').contains('Issues'); }
    get newWorkButton() { return cy.get('[data-drid="works--new-work-button"]'); }
    get titleInput() { return cy.get('input[name="title"]'); }
    get descriptionInput() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]'); }
    get appliesToPartDropdown() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-applies_to_part"]'); }
    get appliesToPartOptions() { return cy.get('[class="select-dropdown__options"]'); }
    get ownedByDropdown() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]'); }
    get ownedByOptions() { return cy.get('[class="select-dropdown__options"]>div'); }
    get priorityDropdown() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-priority_v2-trigger"]'); }
    get priorityOptions() { return cy.get('[class="select-dropdown__options"]'); }
    get fieldTags ()  {return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]'); }
    get amountInput() { return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-amount--content"]'); }
    get sprintField() { return cy.get('[data-drid="works--sprint-field-"]'); }
    get sprintMenu() { return cy.get('[data-drid="sprint-menu--menu"]>div>button'); }

    createIssue(issuesdetails) {

        this.issuesHeader.should('be.visible');
        this.newWorkButton.should('be.visible').click();
        this.titleInput.type(issuesdetails.titlename);
        this.descriptionInput.type(issuesdetails.des);
        this.appliesToPartDropdown.click();
        this.appliesToPartOptions.contains(issuesdetails.parts).click();
        this.ownedByDropdown.click();
        cy.get('body').click(0, 0)
        this.ownedByOptions.contains(issuesdetails.addowner).click();
        this.priorityDropdown.click();
        this.priorityOptions.contains(issuesdetails.priority).click();
        this.fieldTags.contains(issuesdetails.tags).click();
        cy.get('body').click(0, 0)
        this.sprintField.click();
        this.sprintMenu.should('be.visible');

    }
}

export default new CreateIssuePage();