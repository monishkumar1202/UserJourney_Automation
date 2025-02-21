import NewWorkIssue from "../../locators/Issue/CreateNewIssuelocator"

const newissuepage = new NewWorkIssue();

class NewWorkIssuePage {
    
      selectAppliesToPart(part) {
        newissuepage.appliesToPartDropdown.select(part);
      }
    
      selectOwnedBy(owner) {
        newissuepage.ownedByDropdown.select(owner);
      }
    
      selectPriority(priority) {
        newissuepage.priorityDropdown.select(priority);
      }
    
      selectTags(tags) {
        newissuepage.tagsDropdown.select(tags);
      }
    
      selectReportedBy(reporter) {
        newissuepage.reportedByDropdown.select(reporter);
      }
    
      enterSprint(sprint) {
        newissuepage.sprintField.type(sprint);
      }
    
      clickSubmit() {
        newissuepage.submitButton.click();
      }

}

export default new NewWorkIssuePage;