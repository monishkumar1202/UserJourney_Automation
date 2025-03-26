import NewWorkPage from "../../../pages/NewWorkPage";
import Loginpagedev from "../../../pages/PreExection/Loginpagedev";
import VistaPage from "../../../pages/Components/VistaBoardpage";
import readOtp from "../../../support/readOtp";
import ExplorePage from "../../../pages/PreExection/ExplorePage";


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


describe('Explore the Ticket Attributes', () => {

    let loginData;
    let exploreData;
    let vistaData;

    // Load fixtures before tests start
    beforeEach(() => {
        cy.fixture('loginData').then((data) => {
            loginData = data;

            cy.fixture('ExplorePage').then((data) => {
                exploreData = data;

                cy.fixture('VistaBoard').then((data) => {
                    vistaData = data;

                });
            });
        });
    });


    it('Verify ticket creation from conversation with special characters', () => {

    })
    it('Verify ticket creation from conversation with missing title', () => {

    })
    it('Verify ticket creation from conversation with missing description', () => {

    })
    it('Check ticket creation from conversation with multiple participants', () => {

    })


})
// Verify ticket creation from conversation with missing title
// Verify ticket creation from conversation with missing description
// Check ticket creation from conversation with multiple participants