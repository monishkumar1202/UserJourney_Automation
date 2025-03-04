import VistaBoard from "../../locators/components/VistaBoardlocators";
const filters = require("../../fixtures/VistaBoard.json").VistaFilters.filters;
const dropdowns = require("../../fixtures/VistaBoard.json").VistaFilters.dropdowns;
const options = require("../../fixtures/VistaBoard.json").AttributeOptions.options;



class VistaBoardIOT {

    VerifyVistaTitle() {
        vistaboard.verifyVistaTitle.should('be.visible');
    }

    ClickClearButton() {
        vistaboard.ClearButton.should('be.visible').click();
    }

    VerifyDefaultFilter(filters) {
        filters.forEach(filter => {
            vistaboard.defaultFilter.contains(filter).should('exist');
        })
    }

    VerifyDefaultDropdown(dropdowns) {
        dropdowns.forEach(dropdown => {
            vistaboard.defaultDropdown.contains(dropdown).should('exist');
        })
    }

    VerifyNewWork() {
        vistaboard.NewWorkButton.should('be.visible');
    }

    ClickNewWorkButton() {
        vistaboard.NewWorkButton.should('be.visible').click();
    }

    VerifyActionCluster() {
        vistaboard.actionCluster.should('be.visible');
    }

    ClickActionCluster() {
        vistaboard.actionCluster.should('be.visible').click();
    }

    ClickClusterToggle() {
        vistaboard.clusterToggle.should('be.visible').click();
    }

    TypeSearchFilter(ticket) {
        vistaboard.searchFilter.should('be.visible').click()
        vistaboard.typeSearchFilter.should('be.visible').type(ticket);
    }

    VerifyAttributeOption(options) {
        options.forEach(attributeoptions => {
            vistaboard.attributeOption.contains(attributeoptions).should('exist');
        })
    }

    validateCreatedDateFilter(dateLastDays) {
        vistaboard.addFilter.should('be.visible').contains(dateLastDays).click();

    }

    verifyTicketsCreated(tickets) {
        vistaboard.presentTickets().then($el => {
            if ($el.text().includes(tickets)) {
                cy.wrap($el).contains(new RegExp(`^${tickets}$`)).should('be.visible');
            } else {
                cy.log(`Ticket "${tickets}" not found in VistaBoard`);
            }
        });
    }

    verifyInvalidTicket(tickets) {
        vistaboard.presentTickets().then($el => {
            if ($el.length === 0 || !$el.text().includes(tickets)) {
                cy.log(`Ticket "${tickets}" is correctly not found in VistaBoard.`);
            } else {
                cy.log(`Unexpected: Ticket "${tickets}" was found in VistaBoard.`);
                cy.wrap($el).contains(new RegExp(`^${tickets}$`)).should('not.exist');
            }
        });
    }


    removeCreatedDateFilter() {
        vistaboard.removeDateFilter.should('be.visible').click();
    }

    clickAssignToMe() {
        vistaboard.ownerFilter.should('be.visible').click();
    }

    verifyFilterBox() {
        vistaboard.validateOwnerFilterBox.should('be.visible');
    }

    typeSearchFilter(ticket) {
        vistaboard.typeSearchFilter.should('be.visible').type(ticket);
    }

    validateOwnerItem(owner) {
        vistaboard.validateOwner.contains(owner).should('be.visible');
    }

    addCreatedDateFilter(days) {
        vistaboard.addCreatedDate.should('be.visible').click();
        vistaboard.selectCreatedLastDays.contains(days).should('be.visible').click();
    }

    addStageFilter(Stage) {
        vistaboard.filterStages.should('be.visible').click();
        vistaboard.selectStagesFilter.contains(Stage).should('be.visible').click();
        vistaboard.body;
    }

    removeStageFilter() {
        vistaboard.removeStageFilter.should('be.visible').click();
    }

    clickSortMenu(sort, option) {
        vistaboard.defaultAllDropdown.contains(sort).should('be.visible').click();
        vistaboard.selectDropdownOption.contains(option).should('be.visible').click();
    }

    typeSortedOrder(option) {
        vistaboard.defaultAllDropdown.contains(sort).should('be.visible').click();
        vistaboard.sortByInput.type(option);
    }




}


const vistaboard = new VistaBoard();
export default new VistaBoardIOT;

const vistaBoardIOT = new VistaBoardIOT();
