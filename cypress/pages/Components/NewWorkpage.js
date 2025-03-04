import NewWorkpage from "../../locators/components/NewWorklocators";


class NewWorkPage {

    clickNewWorkButton() {
        newworkpage.newWorkButton.should('exist').click();
    }

    typeTitle(title) {
        newworkpage.addTitle.should('exist').type(title);
    }

    typeDescription(description) {
        newworkpage.description.should('exist').type(description);
    }

    VerifyResetButton() {
        newworkpage.resetButton.click();
    }

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

    validateLinkRecord() {
        newworkpage.addLinkRecord.should('be.visible');
    }

    verifyAddLinkRecord(select) {
        newworkpage.linkRecordsButton.should('be.visible').click();
        newworkpage.addDependency.should('be.visible').click();
        newworkpage.selectLinkRecord.contains(select).click();
    }

    CreateMultipleButton() {
        newworkpage.createMultiple.should('be.checked');
    }

    toggleButton() {
        newworkpage.toggleButton.should('be.visible');
    }

    clickSubmitButton() {
        newworkpage.sumbitButton.should('be.visible').click();
    }

    clickCloseButton() {
        newworkpage.closeButton.should('be.visible').click();
    }

    ValidateToolBarElements() {
        newworkpage.letterBold.should('be.visible');
        newworkpage.letterItalic.should('be.visible');
        newworkpage.letterStrike.should('be.visible');
        newworkpage.textCode.should('be.visible');
        newworkpage.codeBlock.should('be.visible');
        newworkpage.blockQuote.should('be.visible');
        newworkpage.addLink.should('be.visible');
        newworkpage.taskList.should('be.visible');
        newworkpage.orderList.should('be.visible');
        newworkpage.bulletList.should('be.visible');
        newworkpage.insertTable.should('be.visible');
        newworkpage.addAttachment.should('be.visible');
        newworkpage.formatActionBar.should('be.visible');
        newworkpage.addEmoji.should('be.visible');
    }

    //  New Side Panel Methods    

    fillTitle(title) {
        newworkpage.clickAddTitle.click();
        newworkpage.typeTitle.type(title);
    }

    fillDescription(description) {
        newworkpage.typeDescription.type(description);
    }

    selectAppliesToPart(part) {
        if (!part) {
            cy.log('No part provided for selection.');
            return;
        }
        cy.log(`Selecting "Applies To Part": ${part}`);
        newworkpage.appliesToPartDropdown.click();
        newworkpage.appliesToPartOptions.contains(part, { timeout: 5000 })
            .should('be.visible').click().then(() => {
                cy.log(`Successfully selected part: ${part}`);
            });
    }


    clickQuickFilter(filter) {
        newworkpage.quickFilter.click();
        newworkpage.selectQuickFilter.contains(filter).click();
    }



}


const newworkpage = new NewWorkpage();
export default new NewWorkPage;

const newWorkPage = new NewWorkPage();



