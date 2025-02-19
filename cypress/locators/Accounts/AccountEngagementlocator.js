export default class EngagementDetails {


    get treeGrid() {
        return '[role="treegrid"]';
    }

    get accountSidebarCollapsed() {
        return '[data-drid="account-sidebar--collapsed"]';
    }

    get engagementsTab() {
        return '[data-drid="account-sidebar--timeline-widget--tabs--nav-item--engagements"]';
    }

    get singleCreateButton() {
        return '[data-drid="create-engagement--create-button--single-create"]';
    }

    get multipleCreateButton() {
        return '[data-drid="create-engagement--create-button--multiple-create"]';
    }

    get undefinedTrigger() {
        return '[data-drid="undefined-trigger"]';
    }

    get selectDropdownOptions() {
        return '.select-dropdown__options';
    }

    get engagementTitleField() {
        return '[data-drid="create-engagement--create-sidebar--shared-template-field-title"]';
    }

    get descriptionEditor() {
        return '[data-drid="create-engagement--create-sidebar--description--editor"]';
    }

    get membersSelect() {
        return '[data-drid="create-engagement--create-sidebar--shared-template-field-members-select"]';
    }

    get searchInput() {
        return 'input[placeholder="Search"]';
    }

    get membersOption() {
        return '[class="select-dropdown__options"]>div>li';
    }

    get externalUrlField() {
        return '[data-drid="create-engagement--create-sidebar--shared-template-field-external_url--content"]';
    }

    get createSubmitButton() {
        return '[data-drid="create-engagement--create-submit"]';
    }

    get closeButton() {
        return '[data-drid="engagement-sidebar--details-sidebar--close-button"]>span';
    }

}

const engagementdetails = new EngagementDetails();