



export default class MenuTab {

    get allComponents() {
        return cy.get('[data-drid="main--left-panel-wrapper"]')
    }

    get searchBox() {
        return cy.get('[data-drid="left-panel-header--global-search"]')
    }

    get updatesTab() {
        return cy.get('[data-drid="updates--page"]')
    }

    get exploreTab() {
        return cy.get('[data-drid="explore--page"]')
    }

    get optionLabelButton() {
        return cy.get('[data-drid="Work--slot-optionsMenuButton"]')
    }

    get createLabelButton() {
        return cy.get('[data-drid="section-menu--create-button--slot-start"]')
    }

    get labelTitle() {
        return cy.get('[role="group"]>div>div>h3')
    }







}