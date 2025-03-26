import Loginpagedev from "../../../../pages/PreExection/Loginpagedev";
import VistaBoardpage from "../../../../pages/Components/VistaBoardpage";
import CreateContactPage from "../../../../pages/Contacts/CreateNewContactPage";
import { getLatestOtp } from "../../../../support/readOtp";

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
            VistaBoardpage.ClickNewWorkAccountButton();
        });
    });
});

describe('Create the New Contact', () => {
    let contactData;
    beforeEach(() => {
        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1/contacts');
        cy.fixture('Contact').then((data) => {
            contactData = data;
        });
    });


    it('should create a new contact successfully', () => {

        VistaBoardpage.ClickNewWorkAccountButton();
        CreateContactPage.fillDisplayName(contactData.displayname);
        CreateContactPage.fillDescription(contactData.description);
        CreateContactPage.fillEmail(contactData.email);
        CreateContactPage.selectTag(contactData.tag);
        CreateContactPage.clickCreateSubmitButton();
    });

    it('should create a new contact without Title', () => {

        VistaBoardpage.ClickNewWorkAccountButton();
        CreateContactPage.fillDescription(contactData.description);
        CreateContactPage.fillEmail(contactData.email);
        CreateContactPage.selectTag(contactData.tag);
        CreateContactPage.clickCreateSubmitButton();

    })

    it('should create a new contact without Description', () => {

        VistaBoardpage.ClickNewWorkAccountButton();
        CreateContactPage.fillDisplayName(contactData.displayname);
        CreateContactPage.fillEmail(contactData.email);
        CreateContactPage.selectTag(contactData.tag);
        CreateContactPage.clickCreateSubmitButton();

    })

});
