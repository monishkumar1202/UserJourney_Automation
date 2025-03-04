import NewWorkTicket from "../../locators/Tickets/NewWorkTicketlocator"

const newworkticket = new NewWorkTicket();

class CreateTicket {


  validateAttributeFields(fields) {
    newworkticket.attributeField.contains(fields).should('be.visible');
  }

  vaildateOptionFields(fields) {
    newworkticket.addAttributeField.click();
    newworkticket.attributeOption.contains(fields).should('be.visible');
  }

  selectAppliesToPart(part) {
    newworkticket.applyToPartDropdown.click();
    newworkticket.applyToPartsOption.contains(part).click();
  }



  // New Side panel Ticket methods

  selectAppliesToPart(part) {
    newworkticket.appliesToPartDropdown.click();
    newworkticket.appliesToPartOptions.contains(part).click();
  }

  selectOwnerAction(owner) {
    newworkticket.selectOwner.click();
    newworkticket.selectOptionByOwner.contains(owner).click();
  }

  addGroupAction(group) {
    newworkticket.addGroup.click();
    newworkticket.selectGroup.contains(group).click();
  }

  selectSeverityAction(severity) {
    newworkticket.selectSeverity.click();
    newworkticket.selectOptionBySeverity.contains(severity).click();
  }

  selectTagsAction(tag) {
    newworkticket.selectTags.click();
    newworkticket.selectOptionByTags.contains(tag).click();
    newworkticket.body;
  }

  selectDateAction(date) {
    newworkticket.clickDateField.click();
    newworkticket.selectDate.type(date);
  }

  selectAccountAction(account) {
    newworkticket.selectAccount.click();
    newworkticket.selectOptionByAccount.contains(account).click();
  }

  selectReportAction(report) {
    newworkticket.reportedBy.click();
    newworkticket.selectReportedBy.contains(report).click();
  }

  selectSourceChannelAction(channel) {
    newworkticket.sourceChannel.click();
    newworkticket.typeSourceChannel.type(channel)
    newworkticket.boby;
  }

  clickShowAllButton() {
    newworkticket.showAllButton.click();
  }



}

export default new CreateTicket();
