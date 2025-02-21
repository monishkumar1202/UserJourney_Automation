import NewWorkTicket from "../../locators/Tickets/CreateTicketlocator"

const newworkticket = NewWorkTicket;

class CreateTicket {

    selectOwnerAction(owner) {
        newworkticket.selectOwner.click();
        newworkticket.selectOptionByOwner.contains(owner).click();
      }
    
      addGroupAction(group) {
        newworkticket.addGroup.click();
        newworkticket.selectGroup.contains(group).click();
      }
    
      selectTagsAction(tag) {
        newworkticket.selectTags.click();
        newworkticket.selectOptionByTags.contains(tag).click();
      }
    
      selectDateAction(date) {
        newworkticket.selectDate.type(date);
      }
    
      selectAccountAction(account) {
        newworkticket.selectAccount.click();
        newworkticket.selectOptionByAccount.contains(account).click();
      }

}

module.exports = new CreateTicket();
 