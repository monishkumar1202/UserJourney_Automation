import VistaBoardpage from "../../locators/components/VistaBoardlocators";
const filters = require("../../fixtures/VistaBoard.json").VistaFilters.filters;
const dropdowns = require("../../fixtures/VistaBoard.json").VistaFilters.dropdowns;
const options = require("../../fixtures/VistaBoard.json").AttributeOptions.options;


class VistaBoard {

    VerifyVistaTitle(expectedTitle) {
        cy.log(`Verifying Vista Title contains "${expectedTitle}"`);
        vistaboardpage.vistaBoardTitle.should('be.visible')
            .and('contain.text', expectedTitle)
            .then(() => cy.log(`Title contains "${expectedTitle}"`));
    }



    // create new work button locators -- Userjourney

    ClickNewWorkContactButton() {
        cy.log('Attempting to click New Work Contact Button');
        vistaboardpage.addNewWorkContactButton.then(($btn) => {
            if ($btn.length && $btn.is(':visible')) {
                cy.wrap($btn).click().then(() => cy.log('Clicked successfully'));
            } else {
                cy.log('Button not available, skipping action');
            }
        });
    }
    ClickNewWorkAccountButton() {
        cy.log('Attempting to click New Work Account Button');
        vistaboardpage.addNewWorkAccountButton.then(($btn) => {
            if ($btn.length && $btn.is(':visible')) {
                cy.wrap($btn).click().then(() => cy.log('Clicked successfully'));
            } else {
                cy.log('Button not available, skipping action');
            }
        });
    }
    ClickNewWorkIOTButton() {
        cy.log('Attempting to click New Work IOT Button');
        vistaboardpage.addNewWorkIOTButton.then(($btn) => {
            if ($btn.length && $btn.is(':visible')) {
                cy.wrap($btn).click().then(() => cy.log('Clicked successfully'));
            } else {
                cy.log('Button not available, skipping action');
            }
        });
    }




    ClickClearButton() {
        cy.log('Attempting to click Clear Button');
        vistaboardpage.ClearButton.then(($btn) => {
            if ($btn.length && $btn.is(':visible')) {
                cy.wrap($btn).click().then(() => cy.log('Clicked successfully'));
            } else {
                cy.log('Button not available, skipping action');
            }
        });
    }

    SearchWorkItem(item) {
        if (!item) {
            cy.log("No search item provided. Skipping search.");
            return;
        }
        vistaboardpage.searchBox
            .should("be.visible")
            .click();

        vistaboardpage.typeSearchBox
            .should("be.visible")
            .type(item)
            .type("{enter}")
            .then(() => cy.log(`Successfully searched for: ${item}`));

    }

    VerifyAttributeOption(options) {
        options.forEach(attributeoptions => {
            vistaboardpage.attributeOption.contains(attributeoptions).should('exist');
        })
    }

    validateCreatedDateFilter(dateLastDays) {
        vistaboardpage.addFilter.should('be.visible').contains(dateLastDays).click();

    }


    ApplyAttributeFilters(attributes) {
        cy.log("Validating filter tab and applying attribute filters");

        vistaboardpage.tabFilterAttributeName.then(($el) => {
            if ($el.length > 0 && $el.text().includes('Account')) {
                cy.log("Attributefiltertab is present");
                this.addFilterAccountTab();  // Call addFilterAccountTab() and stop execution
            } else {
                cy.log("Attributefiltertab is not present, clicking add filter");
                vistaboardpage.addAttributeFliter.click();

                cy.fixture('Opportunity').then((data) => {
                    data.SearchOpportunity.attributeFilter.forEach((attribute) => {
                        vistaboardpage.typeAttributeFilter
                            .should("be.visible")
                            .click()
                            .clear()
                            .type(`${attribute}{enter}`)
                            .then(() => cy.log(`Typed attribute: ${attribute}`));
                    });
                });

                cy.get("body").click(); // Click outside to close dropdown
                cy.log("Clicked on body to close dropdown");
            }
        });
    }


    addFilterAccountTab() {
        cy.fixture("Opportunity").then((data) => {
            cy.log("Opening the Add Filter Box");
            vistaboardpage.accountAddFilterBox.should("be.visible").click();

            cy.log(`Typing multiple values in the search filter box`);
            cy.wrap(data.SearchOpportunity.fliterAccountTab.account).each(
                (accountName, index, array) => {
                    cy.log(`Typing "${accountName}"`);
                    vistaboardpage.inputSearchFilterBox
                        .should("be.visible")
                        .type(`${accountName}`)
                        .type("{enter}");

                    if (index === array.length - 1) {
                        cy.get("body").click();
                        cy.log("All values entered. Closed the filter dropdown.");
                    }
                }
            );
        });
    }


    verifyPresentItem(tickets) {
        vistaboardpage.presentTickets().then($el => {
            if ($el.text().includes(tickets)) {
                cy.wrap($el).contains(new RegExp(`^${tickets}$`)).should('be.visible');
            } else {
                cy.log(`Ticket "${tickets}" not found in vistaboardpage`);
            }
        });
    }

    verifyItemNotPresent(item) {
        cy.log(`Verifying item "${item}" is not present in vistaboardpage`);

        vistaboardpage.presentTickets().then($el => {
            if ($el.length > 0 && $el.text().includes(item)) {
                cy.log(` Item "${item}" is still present - Test Failed.`);
            } else {
                cy.log(`Item "${item}" is not present - Test Passed.`);
                cy.wrap($el).should('not.exist'); // Ensures the test passes when the item is not found
            }
        });
    }


    verifyInvalidTicket(tickets) {
        vistaboardpage.presentTickets().then($el => {
            if ($el.length === 0 || !$el.text().includes(tickets)) {
                cy.log(`Ticket "${tickets}" is correctly not found in VistaBoard.`);
            } else {
                cy.log(`Unexpected: Ticket "${tickets}" was found in VistaBoard.`);
                cy.wrap($el).contains(new RegExp(`^${tickets}$`)).should('not.exist');
            }
        });
    }


    removeCreatedDateFilter() {
        vistaboardpage.removeDateFilter.should('be.visible').click();
    }

    clickAssignToMe() {
        vistaboardpage.ownerFilter.then(($el) => {
            if ($el.length > 0) {
                cy.wrap($el).should('be.visible').click();
                cy.log('Clicked on Owner Filter.');
            } else {
                cy.log('Owner Filter is not present, skipping click.');
            }
        });
    }


    verifyFilterBox() {
        vistaboardpage.validateOwnerFilterBox.should('be.visible');
    }

    typeSearchFilter(ticket) {
        vistaboardpage.typeSearchFilter.should('be.visible').type(ticket);
    }

    validateOwnerItem(owner) {
        vistaboardpage.validateOwner.contains(owner).should('be.visible');
    }

    addCreatedDateFilter(days) {
        vistaboardpage.addCreatedDate.should('be.visible').click();
        vistaboardpage.selectCreatedLastDays.contains(days).should('be.visible').click();
    }

    addStageFilter(Stage) {
        vistaboardpage.filterStages.should('be.visible').click();
        vistaboardpage.selectStagesFilter.contains(Stage).should('be.visible').click();
        vistaboardpage.body;
    }

    removeStageFilter() {
        vistaboardpage.removeStageFilter.should('be.visible').click();
    }

    clickSortMenu(sort, option) {
        vistaboardpage.defaultAllDropdown.contains(sort).should('be.visible').click();
        vistaboardpage.selectDropdownOption.contains(option).should('be.visible').click();
    }

    typeSortedOrder(option) {
        vistaboardpage.defaultAllDropdown.contains(sort).should('be.visible').click();
        vistaboardpage.sortByInput.type(option);
    }

    VerifyDefaultFilter(filters) {
        filters.forEach(filter => {
            vistaboardpage.defaultFilter.contains(filter).should('exist');
        })
    }

    VerifyDefaultDropdown(dropdowns) {
        dropdowns.forEach(dropdown => {
            vistaboardpage.defaultDropdown.contains(dropdown).should('exist');
        })
    }

    ClickActionCluster() {
        vistaboardpage.actionCluster.should('be.visible').click();
    }

    ClickClusterToggle() {
        vistaboardpage.clusterToggle.should('be.visible').click();
    }


}



const vistaboardpage = new VistaBoardpage();
export default new VistaBoard;


