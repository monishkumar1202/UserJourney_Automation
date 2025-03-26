
class SearchPage {

    get smallScreenInput() {
        return cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]');
    }
    get largeScreenInput() {
        return cy.get('[data-drid="explore-page--search-bar-large-screen--slot-input"]');
    }
    get viewColumn() {
        return cy.get('[col-id="View"]>div>span');
    }
    get pinColumn() {
        return cy.get('[col-id="Pin View"]>div>span>div>button[data-pinned="true"]');
    }
    get unpinColumn() {
        return cy.get('[col-id="Pin View"]>div>span>div>div>button[data-pinned="false"]');
    }
    get selectLabel() {
        return cy.get('[data-section-group="explore-pin-menu"]>div')
    }
    get createNewSection() {
        return cy.get('[type="text"][placeholder="New section"]')
        // after typing the Section using type function {('Type')}
    }




    clickExploreTab() {
        this.exploreButton.should('be.visible').click();
    }

    exploreTab() {
        this.exploreButton.should('be.visible');
    }


    searchItem(item) {

        this.clickExploreTab();
        console.log(item);

        this.smallScreenInput.then(($smallScreenInput) => {
            if ($smallScreenInput.is(':visible')) {
                cy.wrap($smallScreenInput).should('be.visible').type(item);
            } else {
                this.largeScreenInput.then(($largeScreenInput) => {
                    if ($largeScreenInput.is(':visible')) {
                        cy.wrap($largeScreenInput).should('be.visible').type(item);
                    }
                });
            }
        });

        cy.wait(2000);
        this.viewColumn.should('be.visible');
        this.viewColumn.contains(new RegExp(`^${item}$`)).should('be.visible').click();

    }

    validateAndPerformAction(sectionName) {
        this.pinColumn.then(($pin) => {
            if ($pin.length) {
                this.viewColumn.click();
                cy.log('Pin symbol is present, clicked View Column to pin ');
                return;
            }

            this.unpinColumn.then(($unpin) => {
                if ($unpin.length) {
                    cy.wrap($unpin).click();
                    cy.log('Column was not pinned, unpinned now.');
                }

                this.selectLabel.then(($label) => {
                    if ($label.length) {
                        cy.wrap($label).contains(sectionName).click();
                        cy.log(`Section "${sectionName}" selected.`);
                    } else {
                        this.createNewSection.type(sectionName).type('{enter}');
                        cy.log(`New section "${sectionName}" created.`);
                    }
                });
            });
        });
    }

}



export default new SearchPage();











