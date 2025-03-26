import NewWorkpage from "../../locators/components/NewWorkIOTlocators";
import VistaBoardpage from "../../locators/components/VistaBoardlocators";


class NewWorkPage {

    clickTicketOption(option) {
        cy.log('Clicking Ticket Option');
        newworkpage.ticketOption.should('be.visible').click();
        cy.log(`Selecting dropdown option: ${option}`);
        vistaboardpage.selectDropdownOption.contains(option).should('be.visible').click();
    }

    validateNewWorkBody() {
        cy.fixture('apiEndpoints').then((api) => {
            cy.request({
                method: 'GET',
                url: api.creatework,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200, 'API is available');
            });
        });
    }

    typeTitle(title) {
        cy.log(`Typing title: ${title}`);
        newworkpage.addTitle.should('exist').type(title);
    }

    typeDescription(description) {
        cy.log(`Typing description: ${description}`);
        newworkpage.description.should('exist').type(description);
    }

    VerifyResetButton() {
        cy.log('Clicking Reset Button');
        newworkpage.resetButton.should('be.visible').click();
    }

    validateLinkRecord() {
        cy.log('Validating Link Record visibility');
        newworkpage.addLinkRecord.should('be.visible');
    }

    verifyAddLinkRecord(select) {
        cy.log(`Adding Link Record: ${select}`);
        newworkpage.linkRecordsButton.should('be.visible').click();
        newworkpage.addDependency.should('be.visible').click();
        newworkpage.selectLinkRecord.contains(select).should('be.visible').click();
    }

    CreateMultipleButton() {
        cy.log('Checking Create Multiple button');
        newworkpage.createMultiple.should('be.checked');
    }

    toggleButton() {
        cy.log('Checking Toggle Button');
        newworkpage.toggleButton.should('be.visible');
    }

    clickSubmitButton() {
        cy.log('Clicking Submit button');
        newworkpage.submitButton.should('be.visible').click();
    }

    clickCloseButton() {
        cy.log('Clicking Close button');
        newworkpage.closeButton.should('be.visible').click();
    }

    // New Work Tickets Methods

    selectOwnedBy(option) {
        cy.log(`Selecting Owned By: ${option}`);
        newworkpage.ownedByDropdown.should('be.visible').click();
        newworkpage.ownedByOptions.contains(option).should('be.visible').click();
    }

    enterAmount(amount) {
        cy.log(`Entering Amount: ${amount}`);
        newworkpage.amountInput.should('exist').clear().type(amount);
    }

    enterARR(amount) {
        cy.log(`Entering ARR: ${amount}`);
        newworkpage.arrInput.should('exist').clear().type(amount);
    }

    selectContact(contact) {
        cy.log(`Selecting Contact: ${contact}`);
        newworkpage.contactsDropdown.should('be.visible').click();
        newworkpage.contactsSearchInput.should('be.visible').type(contact);
        newworkpage.contactsOptions.contains(contact).should('be.visible').click();
    }

    selectTag(tag) {
        cy.log(`Selecting Tag: ${tag}`);
        newworkpage.tagsField.should('be.visible').click();
        newworkpage.tagsOptions.contains(tag).should('be.visible').click();
        cy.get('body').click(0, 0); // Close dropdown
    }

    // New Side Panel Methods    

    fillTitle(title) {
        cy.log(`Filling title: ${title}`);
        newworkpage.clickAddTitle.should('be.visible').click();
        newworkpage.typeTitle.should('exist').type(title);
    }

    fillDescription(description) {
        cy.log(`Filling description: ${description}`);
        newworkpage.typeDescription.should('exist').type(description);
    }

    selectAppliesToPart(part) {
        if (!part) {
            cy.log('No part provided for selection.');
            return;
        }
        cy.log(`Selecting "Applies To Part": ${part}`);
        newworkpage.appliesToPartDropdown.should('be.visible').click();
        newworkpage.appliesToPartOptions.contains(part).should('be.visible').click();
    }

    clickQuickFilter(filter) {
        cy.log(`Clicking Quick Filter: ${filter}`);
        newworkpage.quickFilter.should('be.visible').click();
        newworkpage.selectQuickFilter.contains(filter).should('be.visible').click();
    }



    // description box methods for old side panel  

    verifyToolBar() {
        newworkpage.toolBar.should('be.visible');
    }

    verifyBold() {
        newworkpage.letterBold.should('be.visible');
    }

    verifyItalic() {
        newworkpage.letterItalic.should('be.visible');
    }

    verifyStrike() {
        newworkpage.letterStrike.should('be.visible');
    }

    verifyCode() {
        newworkpage.textCode.should('be.visible');
    }

    verifyCodeBlock() {
        newworkpage.codeBlock.should('be.visible');
    }

    verifyBlockQuote() {
        newworkpage.blockQuote.should('be.visible')
    }

    verifyAddLink() {
        newworkpage.addLink.should('be.visible');
    }

    verifyTaskList() {
        newworkpage.taskList.should('be.visible');
    }

    verifyOrderList() {
        newworkpage.orderList.should('be.visible');
    }

    verifyBulletList() {
        newworkpage.bulletList.should('be.visible');
    }

    verifyInsertTable() {
        newworkpage.insertTable.should('be.visible');
    }

    verifyActionBar() {
        newworkpage.actionBar.should('be.visible');
    }

    verifyAddAttachment() {
        newworkpage.addAttachment.should('be.visible');
    }

    verifyFormatActionBar() {
        newworkpage.formatActionBar.should('be.visible');
    }

    verifyAddEmoji() {
        newworkpage.addEmoji.should('be.visible');
    }

}


const newworkpage = new NewWorkpage();
const vistaboardpage = new VistaBoardpage();

export default new NewWorkPage;



