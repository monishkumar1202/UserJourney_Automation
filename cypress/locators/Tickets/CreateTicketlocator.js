export default class NewWorkTicket {

    selectOwner(){
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-owned_by"]')
    }

    selectOptionByOwner(){
        return cy.get('[class="select-dropdown__options"]')
    }       
    
    addGroup(){
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-group"]')
    }
    
    selectGropu(){
        return cy.get('[class="select-dropdown__options"]')
    }

    selectTags(){
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-tags"]')
    }

    selectOptionByTags(){
        return cy.get('[class="select-dropdown__options"]')
    }

    selectDate(){
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-target_close_date"]')
    }

    selectAccount(){
        return cy.get('[data-drid="works--create-work-sidebar--shared-template-field-rev_org--account"]') 
    }

    selectOptionByAccount(){
        return cy.get('[class="select-dropdown__options"]')
    }


}