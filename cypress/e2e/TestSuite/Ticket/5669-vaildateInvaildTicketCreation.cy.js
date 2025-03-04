import NewWorkPage from "../../../pages/NewWorkPage";
import Loginpagedev from "../../../pages/Loginpagedev";
import VistaPage from "../../../pages/Components/VistaBoardpage";
import readOtp from "../../../support/readOtp";
import ExplorePage from "../../../pages/ExplorePage";

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


    it('Login Dever Account Sucessfully', () => {

        // Visit login page and perform login steps
        cy.visit(loginData.prodUrl);
        Loginpagedev.typeEmail(loginData.User01.email);
        Loginpagedev.clickLoginSubmit();
        cy.wait(3000);

        // Handle OTP verification
        readOtp.getLatestOtp().then((otp) => {
            Loginpagedev.typeOtp(otp);
            Loginpagedev.clickOtpSubmit();

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