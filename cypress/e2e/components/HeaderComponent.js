export default class HeaderComponent {

    get searchInput() { return cy.get('#search input[name="search"]'); }
    get searchBtn() { return cy.get('#search button'); }
    get myAccountDropdown() { return cy.get('#top-links a[title="My Account"]'); }
   


    performLogout() {
        this.myAccountDropdown.click();
    }


}
