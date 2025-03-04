
class SearchPage {


    get exploreButton() {
        return cy.get('[data-drid="explore--page"]', { timeout: 30000 });
    }
    get smallScreenInput() {
        return cy.get('[data-drid="explore-page--search-bar-small-screen--slot-input"]');
    }
    get largeScreenInput() {
        return cy.get('[data-drid="explore-page--search-bar-large-screen--slot-input"]');
    }
    get viewColumn() {
        return cy.get('[col-id="View"]');
    }


    clickExploreTab() {
        this.exploreButton.should('be.visible').click();
    }

    exploreTab() {
        this.exploreButton.should('be.visible');
    }


    searchItem(item) {

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

        cy.wait(5000);
        this.viewColumn.should('be.visible');
        this.viewColumn.contains(new RegExp(`^${item}$`)).should('be.visible').click();

    }
}

export default new SearchPage();

