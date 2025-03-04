export default class vistaIOT {



    get ClearButton() {
        return cy.get('[data-drid="works--filters--clear-all-filters"]');
    }

    get selectDropdownOption() {
        return cy.get('[class="select-dropdown__options"]');
    }

    get typeDropdownOption() {
        return cy.get('[class="select-dropdown__input"]');

    }

    //  Filter Created date locators

    get addCreatedDate() {
        return cy.get('[data-drid="field--empty-filter"]');
    }

    get selectCreatedLastDays() {
        return cy.get('[role="menuitemradio"]');
    }

    get selectCreatedDateActions() {
        return cy.get('[role="menuitem"]');
    }

    get selectCalendardate() {
        return cy.get('[data-drid="before-calendar--calendar"]')
    }

    get calendarMonth() {
        return cy.get('[data-drid="before-calendar--calendar--slot-select"]')
    }

    get calendarYear() {
        return cy.get('[data-drid="--slot-trigger"][aria-label="select year"]')
    }

    get previousMonthButton() {
        return cy.get('[data-drid="before-calendar--calendar--slot-prevMonthButton"]')
    }

    get nextMonthButton() {
        return cy.get('[data-drid="before-calendar--calendar--slot-nextMonthButton"]')
    }

    get addFilter() {
        return cy.get('[class="text-small text-color-primary rounded-tl-none rounded-bl-none"]');
    }

    get removeDateFilter() {
        return cy.get('[data-drid="works--filters--remove-field-filter--created_date"]');
    }

    // Filter Stages Locators 

    get filterStages() {
        return cy.get('[data-drid="works--filters--filter-select-button--stage"]');
    }

    get selectStagesFilter() {
        return cy.get('[class="select-dropdown__options"]');
    }

    get removeStageFilter() {
        return cy.get('[data-drid="works--filters--remove-field-filter--stage"]');
    }

    get VistaTitle() {
        return cy.get('[class="text-h2 text-color-highlight"]');
    }

    get NumberofWorkData() {
        return cy.get('[data-drid="works--total"]');
    }

    get WorkDataCount() {
        return cy, get('[role="gridcell"][col-id="display_id"]');
    }

    get NewWorkButton() {
        return cy.get('[data-drid="works--new-work-button"]');
    }

    get actionCluster() {
        return cy.get('[data-drid="works--action-button"]');
    }

    get clusterToggle() {
        return cy.get('[data-drid="works--cluster-toggle"]')
    }

    get searchFilter() {
        return cy.get('[data-drid="works--search-filter"]');
    }

    get typeSearchFilter() {
        return cy.get('[data-drid="works--search-filter--input"]');
    }

    get ownerFilter() {
        return cy.get('[data-drid="works--filters--quick-filter--Owner"]')
    }

    get validateOwnerFilterBox() {
        return cy.get('[data-drid="works--filters--filter-select-button--owned_by"]')
    }

    get validateOwner() {
        return cy.get('[data-drid="works--table--TKT-41--cell--owned_by--trigger"]')
    }

    get addAttribute() {
        return cy.get('[data-drid="works--filters--more-filters-button"]')
    }

    get attributeOption() {
        return cy.get('[class="select-dropdown__options"]')
    }

    get presentTickets() {
        return cy.get('[role="gridcell"][col-id="display_id"]')
    }

    get body() {
        return cy.get('body').click(0, 0)
    }

    // Left Side Fliters loctors 

    get sortByInput() {
        return cy.get('[data-drid="works--sort-by-select-dropdown-search-input"]');
    }

    get defaultAllDropdown() {
        return cy.get('[class="w-full sm-max:border-b sm-max:border-default"]');
    }

    get


}