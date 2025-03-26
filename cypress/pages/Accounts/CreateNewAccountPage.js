import CreateAccount from "../../locators/components/CreateNewAccountlocators";

const createAccount = new CreateAccount();

class CreateAccountPages {


    fillDisplayName(name) {
        cy.log(`Filling Display Name: ${name}`);
        createAccount.displayNameField.should('be.visible').type(name);
    }

    fillDescription(description) {
        cy.log(`Filling Description: ${description}`);
        createAccount.descriptionField.should('be.visible').type(description);
    }

    fillWebsites(websites) {
        cy.log(`Filling Websites: ${websites}`);
        createAccount.websitesField.should('be.visible').type(websites);
    }

    selectTag(tag) {
        cy.log(`Selecting Tag: ${tag}`);
        createAccount.tagsField.should('be.visible').click();
        createAccount.selectDropdownOptions.contains(tag).click();
        createAccount.body.click();
    }

    clickCreateSubmitButton() {
        cy.log('Clicking Create Submit Button');
        createAccount.createSubmitButton.should('be.visible').click();
    }

    verifyAccountTitle(title) {
        cy.log(`Verifying Account Title: ${title}`);
        createAccount.accountTitle.should('contain', title);
    }

    clickDiscussionsTab() {
        cy.log('Clicking Discussions Tab');
        createAccount.discussionsTab.should('be.visible').click();
    }

    fillMessageInput(message) {
        cy.log(`Typing Message: ${message}`);
        createAccount.messageInput.should('be.visible').type(message);
    }

    clickSubmitMessageButton() {
        cy.log('Clicking Submit Message Button');
        createAccount.submitMessageButton.should('be.visible').click();
    }

    verifyCommentsListItem() {
        cy.log('Verifying Comments List Item');
        createAccount.commentsListItem.should('be.visible');
    }

    clickCloseButton() {
        cy.log('Clicking Close Button');
        createAccount.closeButton.should('be.visible').click();
    }




}

const createAccount = new CreateAccount();
export default new CreateAccountPages;