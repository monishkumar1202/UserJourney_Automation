import CreateNewContact from "../../locators/components/CreateNewContactlocators";

const createnewcontact = new CreateNewContact();

class CreateNewContactPages {


    fillDisplayName(name) {
        cy.log(`Filling Display Name: ${name}`);
        createnewcontact.displayNameInput.should('be.visible').type(name)
            .then(() => cy.log('Display Name entered successfully'));
    }

    fillDescription(description) {
        cy.log(`Filling Description: ${description}`);
        createnewcontact.descriptionInput.should('be.visible').type(description)
            .then(() => cy.log('Description entered successfully'));
    }

    fillEmail(email) {
        cy.log(`Filling Email: ${email}`);
        createnewcontact.emailInput.should('be.visible').type(email)
            .then(() => cy.log('Email entered successfully'));
    }

    selectPhoneNumberCountry(country) {
        cy.log(`Selecting Country: ${country}`);
        createnewcontact.phoneNumberPlaceholder.should('be.visible').click()
            .then(() => {
                createnewcontact.countryCodeDropdown.click();
                createnewcontact.countrySearchInput.type(country).type('{enter}');
                cy.log('Country selected successfully');
            });
    }

    fillPhoneNumber(phoneNumber) {
        cy.log(`Filling Phone Number: ${phoneNumber}`);
        createnewcontact.phoneNumberInput.should('be.visible').type(phoneNumber)
            .then(() => cy.log('Phone Number entered successfully'));
    }

    selectAccount(accountName) {
        cy.log(`Selecting Account: ${accountName}`);
        createnewcontact.accountField.should('be.visible').click()
            .then(() => {
                createnewcontact.countrySearchInput.type(accountName);
                cy.get('.select-dropdown__options>div').contains(accountName).click();
                cy.log('Account selected successfully');
            });
    }

    selectTag(tag) {
        cy.log(`Selecting Tag: ${tag}`);
        createnewcontact.tagsField.should('be.visible').click().then(() => {
            cy.get('[class="select-dropdown__options"]').contains(tag).click().then(() => {
                cy.log('Tag selected successfully');
                cy.get('body').click(0, 0);
            });
        });
    }

    clickCreateButton() {
        cy.log('Clicking Create Button');
        createnewcontact.createButton.should('be.visible').click()
            .then(() => cy.log('Create Button clicked successfully'));
    }

}

export default new CreateNewContactPages;

