export default class vistaBoardPage {

    // Vistaboard Header Title

    get vistaBoardTitle() {
        return cy.get('[class="text-h2 text-color-highlight"]');
    }

    // Comman IOT locators are VistaBoard  

    get ClearButton() {
        return cy.get('[data-drid="works--filters--clear-all-filters"]');
    }
    get selectDropdownOption() {
        return cy.get('[class="select-dropdown__options"]');
    }
    get typeDropdownOption() {
        return cy.get('[class="select-dropdown__input"]');
    }
    get assignToMe() {
        return cy.get('[data-drid="works--filters--quick-filter--Owner"]');
    }
    get searchBox() {
        return cy.get('[data-drid="works--search-filter"]');
    }
    get typeSearchBox() {
        return cy.get('[data-drid="works--search-filter--input"]');
    }
    get tabFilterAttributeName() {
        return cy.get('[class="flex gap-2 items-center flex-wrap"]>div~div+div > div > button');
    }
    get addAttributeFliter() {
        return cy.get('[data-drid="works--filters--more-filters-button"]')
    }
    get typeAttributeFilter() {
        return cy.get('[class="select-dropdown__search-input"]')
    }



    // Create New Work button Locators -- Userjourney / Grow Modules

    get addNewWorkIOTButton() {
        return cy.get('[data-drid="works--new-work-button"]')
    }
    get addNewWorkAccountButton() {
        return cy.get('[data-drid="create-account--create-button--single-create"]')
    }
    get addNewWorkContactButton() {
        return cy.get('[data-drid="revu--create-sidebar--new-rev-user"]')
    }

    //  Filter "Created date" locators

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

    // "Account" Filter Locators

    get accountAddFilterBox() {
        return cy.get('[data-drid="works--filters--filter-select-button--account"]');
    }
    get inputSearchFilterBox() {
        return cy.get('[class="select-dropdown__search-input"]')
    }
    get selectAccountFilter() {
        return cy.get('[class="select-dropdown__options"]');
    }

    // AddAttribute Filter Locators 
    get selectedAttributeFilter() {
        return cy.get('[data-drid="works--filters--more-filters-select-dropdown"] > div > div ~ button');
    }

    // Filter "Stages" Locators 

    get filterStages() {
        return cy.get('[data-drid="works--filters--filter-select-button--stage"]');
    }
    get selectStagesFilter() {
        return cy.get('[class="select-dropdown__options"]');
    }
    get removeStageFilter() {
        return cy.get('[data-drid="works--filters--remove-field-filter--stage"]');
    }
    get NumberofWorkData() {
        return cy.get('[data-drid="works--total"]');
    }
    get WorkDataCount() {
        return cy, get('[role="gridcell"][col-id="display_id"]');
    }
    get actionCluster() {
        return cy.get('[data-drid="works--action-button"]');
    }
    get clusterToggle() {
        return cy.get('[data-drid="works--cluster-toggle"]')
    }
    get presentTickets() {
        return cy.get('[role="gridcell"][col-id="display_id"]')
    }
    get body() {
        return cy.get('body').click(0, 0)
    }

    // Filter Owners Locator

    get ownerFilter() {
        return cy.get('[data-drid="works--filters--quick-filter--Owner"]')
    }
    get validateOwnerFilterBox() {
        return cy.get('[data-drid="works--filters--filter-select-button--owned_by"]')
    }
    get validateOwner() {
        return cy.get('')
    }

    // Right Side Fliters loctors 

    get sortByInput() {
        return cy.get('[data-drid="works--sort-by-select-dropdown-search-input"]');
    }
    get defaultAllDropdown() {
        return cy.get('[class="w-full sm-max:border-b sm-max:border-default"]');
    }

    // Opportunity Vistaboard 'Account' Attribute Filters

    get selectedAttributedFilter() {
        return cy.get('[data-drid="works--filters--more-filters-select-dropdown"]>div+div');
    }
    get closeSelectedAttributedFilter() {
        return cy.get('[data-drid="works--filters--more-filters-select-dropdown"] > div > div ~ button');
    }

}