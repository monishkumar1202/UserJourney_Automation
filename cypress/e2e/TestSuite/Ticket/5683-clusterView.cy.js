




describe('Cluster View Tests', () => {

    beforeEach(() => {
        cy.fixture('loginData').then((data) => {
            cy.visit(data.prodUrl);
        })
    })

    it('Login Dever Account and Navigate to Opportunities Page', () => {

        //      cy.fixture('loginData').then((data) => { 
        //       Loginpagedev.typeEmail(data.User01.email, data.loginUrl);
        //      Loginpagedev.clickLoginSubmit(data.loginUrl);
        //      cy.wait(3000)       
        //      readOtp.getLatestOtp().then((otp) => {
        //           Loginpagedev.typeOtp(otp, data.loginUrl);
        //           Loginpagedev.clickOtpSubmit(data.loginUrl);            
        //     });
        // })

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
