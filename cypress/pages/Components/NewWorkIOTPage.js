import NewWorkIOTPage from "../../locators/components/CommonComponentIOT"

const newworkpage =  NewWorkIOTPage;

class NewWorkPage {

    clickNewWorkButton() {
       newworkpage.newWorkButtonIOT.click();
    }

    selectNewWork(optionValue) {
        newworkpage.selectNewWorkIOT.click();
        newworkpage.selectOptionIOT.contains(optionValue).click();
    }

    fillTitle(title) {
        newworkpage.clickAddTitleIOT.click();
        newworkpage.typeTitleIOT.type(title);
    }

    VerifyResetButton() {
        newworkpage.resetButton.click();
    }

    AddTitle() {
       newworkpage.typeTitleIOT.click(); 
    }

    FillDescription(description) {
       newworkpage.typeDescriptionIOT.type(description);
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

    verifySelectPart() {
        newworkpage.selectPart.should('be.visible').click();
    }

    verifySelectDropdown(part) {
       newworkpage.selectDropdown.contains(part).click();
    }

    verifyAddLinkRecord() {
        newworkpage.addLinkRecord.should('be.visible');
    }

    CreateMultipleButton() {
        newworkpage.createMultipleButton.should('be.visible');
    }

    ToggleButton() {
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

}

module.exports = new NewWorkPage();
 


