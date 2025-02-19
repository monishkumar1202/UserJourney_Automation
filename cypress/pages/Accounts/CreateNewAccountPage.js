import CreateAccount from  "../../locators/Accounts/CreateNewAccountlocator";


const createAccount = new CreateAccount();

class CreateAccountPages {

    clickCreateAccountButton() {
        createAccount.createAccountButton.click();
    }

    fillDisplayName(name) {
        createAccount.displayNameField.type(name);
    }

    fillDescription(description) {
        createAccount.descriptionField.type(description);
    }

    fillWebsites(websites) {
        createAccount.websitesField.type(websites);
    }

    selectTag(tag) {
        createAccount.tagsField.click();
        createAccount.selectDropdownOptions.contains(tag).click();
    }

    clickCreateSubmitButton() {
        createAccount.createSubmitButton.click();
    }

    verifyAccountTitle(title) {
        createAccount.accountTitle.should('contain', title);
    }

    clickDiscussionsTab() {
        createAccount.discussionsTab.click();
    }

    fillMessageInput(message) {
        createAccount.messageInput.type(message);
    }

    clickSubmitMessageButton() {
        createAccount.submitMessageButton.click();
    }

    verifyCommentsListItem() {
        createAccount.commentsListItem.should('be.visible')
    }

    clickCloseButton() {
        createAccount.closeButton.click();
    }

    verifyTreeGrid() {
        createAccount.treeGrid.should('be.visible');
    }
}



module.exports = new CreateAccountPages();