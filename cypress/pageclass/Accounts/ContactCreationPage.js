import ContactDetails from "../../locators/Accounts/ContactCreationlocator";

const contactcreation = new ContactDetails();

class ContactCreation {

    // verifyContactsHeader() {
    //     contactcreation.contactsHeader.should('be.visible');
    // }

    // clickNextTabButton() {
    //     contactcreation.nextTabButton.click();
    // }

    // selectContactsMenuItem() {
    //     contactcreation.contactsMenuItem.click();
    // }

    // clickCreateUserButton() {
    //     contactcreation.createUserButton.click();
    // } 

    ContactCreation(){
        contactcreation.contactsHeader.then(($contacts) => {
        if ($contacts.length > 0) {
            cy.wrap($contacts).click();
        } else {
            contactcreation.nextTabButton().click();
            contactcreation.contactsMenuItem().click();
            contactcreation.createUserButton().click();
         }
      });
    }
    fillDisplayName(name) {
        contactcreation.displayNameInput.type(name);
    }

    fillDescription(description) {
        contactcreation.descriptionEditor.type(description);
    }

    fillEmail(email) {
        contactcreation.emailField.type(email);
    }

    fillPhoneNumber(phoneNumber) {
        contactcreation.phonePlaceholder.click();
        contactcreation.phoneNumberInput.type(phoneNumber);
    }

    selectCountryCode(country) {
        contactcreation.countryCodeDropdown.click();
        contactcreation.countrySearchInput.type(country);
        contactcreation.countrySearchInput.type('{enter}');
    }

    selectTag(tag) {
        contactcreation.tagsField.click();
        contactcreation.tagsOptions.contains(tag).click();
    }

    clickCreateButton() {
        contactcreation.createButton.click();
    }

    verifyContactTitle(title) {
        contactcreation.contactTitle.should('contain', title);
    }

    clickCloseButton() {
        contactcreation.closeButton.click();
    }

    verifyUserHeader() {
        contactcreation.userHeader.should('be.visible');
    }

    clickSeeAllDetailsButton() {
        contactcreation.seeAllDetailsButton.click();
    }

    verifyTreegrid(name) {
        contactcreation.treegrid.contains(name).should('be.visible');
    }

}
    


 module.exports = new ContactCreation();       



    
