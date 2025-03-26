

Cypress.Commands.add('login', () => {
    cy.session('login', () => {
        cy.visit('https://app.devrev.ai/test-demo1');
        cy.fixture('loginData').then((loginData) => {
            Loginpagedev.typeEmail(loginData.User01.email);
            Loginpagedev.clickLoginSubmit();
            cy.wait(2000);
            getLatestOtp().then((otp) => {
                Loginpagedev.typeOtp(otp, loginData.loginUrl);
                Loginpagedev.clickOtpSubmit(loginData.loginUrl);
            });
            ExplorePage.exploreTab();
        });
    });
});


describe('Cluster View Tests', () => {

    beforeEach(() => {
        cy.fixture('loginData').then((data) => {
            cy.visit(data.prodUrl);
        })
    })

    cy.fixture('ExplorePage').then((data) => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(data.SearchIssues);
    })
})



it('Ensure Smart Clustering Groups Tickets Correctly', () => {
    //  Ensure that the smart clustering feature correctly groups tickets with similar issues.

})
    // Verify that users can view the tickets that have been grouped together by the smart clustering feature
    // 




});
