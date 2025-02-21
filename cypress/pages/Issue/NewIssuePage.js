import NewWorkIssue from "../../locators/Issue/CreateNewIssuelocator"

const newissuepage = new NewWorkIssue();

class NewWorkIssuePage {
    
      selectAppliesToPart(part) {
        newissuepage.appliesToPartDropdown.click();
        newissuepage.appliesToPartOptions.contains(part).click();
      }
    
      selectOwnedBy(owner) {
        newissuepage.ownedByDropdown.click();
        newissuepage.ownedByOptions.contains(owner).click();
      }
    
      selectPriority(priority) {
        newissuepage.priorityDropdown.click();
        newissuepage.priorityOptions.contains(priority).click();
      }
    
      selectTags(tags) {
        newissuepage.tagsDropdown.click();
        newissuepage.tagsOptions.contains(tags).click();
        newissuepage.body.click(0, 0);
      }
    
      selectReportedBy(reporter) {
        newissuepage.reportedByDropdown.click();
        newissuepage.reportedByOptions.contains(reporter).click();
        newissuepage.body.click(0, 0);
      }
    
      enterSprint(sprint) {
        newissuepage.sprintField.type(sprint);
      }
    
      clickSubmit() {
        newissuepage.submitButton.click();
      }

}

export default new NewWorkIssuePage;