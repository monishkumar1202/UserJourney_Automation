
const createWork = {

    "titlename": "Test Automation Issues",
    "description": "Exploration the Issue of Automation"

}


export default class CreateWorkpage {

    get addTitle() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-title--parent-input"]')
    }

    get description() {
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-body--editor"]')
    }

    get linkRecordsButton() {
        return cy.get('[data-drid="works--create-work-sidebar--add-links--link-type-dropdown-menu"]')
    }


    typetTitle(title) {
        this.addTitle.type(title)
    }

    typeDescription(description) {
        this.description.type(description)
    }










}