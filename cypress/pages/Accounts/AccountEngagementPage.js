import EngagementDetails from "../../locators/Accounts/AccountEngagementlocator";

const engagementdetails = new EngagementDetails();

class EngagementPage {


    existingAccountItem(itemName) {
        engagementdetails.treeGrid.contains(itemName).click();
    }

    clickAccountSidebarCollapsed() {
        engagementdetails.accountSidebarCollapsed.click();
    }

    clickEngagementsTab() {
        engagementdetails.engagementsTab.contains('Engagements').click();
    }

    // clickSingleCreateButton() {
    //     engagementdetails.singleCreateButton.click();
    // }

    // clickMultipleCreateButton() {
    //     engagementdetails.multipleCreateButton.click({ force: true });
    // }

    clickCreateEngagement() {
        cy.get('body').then(($body) => {
            if ($body.find(engagementdetails.singleCreateButton,{timeout: 20000}).length > 0) {
                cy.get(engagementdetails.singleCreateButton,{timeout: 20000}).click()
            } else {
                cy.get(engagementdetails.multipleCreateButton,{timeout: 20000}).should('be.visible')
                .click({ force: true })   
            }
        })
    }

    clickUndefinedTrigger() {
        engagementdetails.undefinedTrigger.click();
    }

    selectDropdownOption(optionName) {
        engagementdetails.selectDropdownOptions.contains(optionName).click();
    }

    fillEngagementTitle(title) {
        engagementdetails.engagementTitleField.click().clear().type(title);
    }

    fillDescription(description) {
        engagementdetails.descriptionEditor.type(description);
    }

    selectMember(memberName) {
        engagementdetails.membersSelect.contains('Select').click();
        engagementdetails.searchInput.type(memberName);
        engagementdetails.membersOption.contains(memberName).click();
        cy.get('body').click(0, 0); // To close the dropdown
    }

    fillExternalUrl(url) {
        engagementdetails.externalUrlField.type(url);
    }

    clickCreateSubmitButton() {
        engagementdetails.createSubmitButton.contains('Create').click();
    }

    clickCloseButton() {
        engagementdetails.closeButton.click();
    }
       
}

module.exports = new EngagementPage();
