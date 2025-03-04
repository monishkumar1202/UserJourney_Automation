import Loginpagedev from "../../../pages/Loginpagedev";
import VistaPage from "../../../pages/Components/VistaBoardpage";
import readOtp from "../../../support/readOtp";
import ExplorePage from "../../../pages/ExplorePage";


Cypress.Commands.add('login', () => {
    cy.session(() => {
        cy.visit('https://app.devrev.ai/test-demo1');
        cy.fixture('loginData').then((loginData) => {
            Loginpagedev.typeEmail(loginData.User01.email);
            Loginpagedev.clickLoginSubmit();
            cy.wait(2000);
        });

        readOtp.getLatestOtp().then((otp) => {
            cy.fixture('loginData').then((loginData) => {
                if (!otp) {
                    throw new Error('OTP retrieval failed');
                }
                Loginpagedev.typeOtp(otp, loginData.loginUrl);
                Loginpagedev.clickOtpSubmit(loginData.loginUrl);
            })

        });
    });
});



describe('Explore the Ticket Attributes', () => {
    let exploreData;
    let vistaData;

    beforeEach(() => {

        cy.login('devrevtesting@qualityteam571884.testinator.com');
        cy.visit('https://app.devrev.ai/test-demo1');

        cy.fixture('ExplorePage').then((data) => {
            exploreData = data;

            cy.fixture('VistaBoard').then((data) => {
                vistaData = data;

            });
        });
    });

    // QASE = 5682
    it('should verify the filter option in ticket', { tags: ['filter'] }, () => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        VistaPage.TypeSearchFilter(vistaData.SearchItem.vailditem);
        VistaPage.verifyTicketsCreated(vistaData.SearchItem.vailditem);
    });


    it('should search for an invalid ticket ID and verify no tickets are created', { tags: ['invalidSearch'] }, () => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        VistaPage.TypeSearchFilter(vistaData.SearchItem.invaliditem);
        VistaPage.verifyTicketsCreated(vistaData.SearchItem.invalidSearch);
    });


    it('should filter tickets assigned to me', { tags: ['assignToMe'] }, () => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        VistaPage.clickAssignToMe();
        VistaPage.verifyFilterBox();
        VistaPage.validateOwnerItem(vistaData.VistaTable.Owner);
    });


    it('should add, validate, and remove a created date filter', { tags: ['createdDateFilter'] }, () => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        VistaPage.addCreatedDateFilter(vistaData.CreatedDateFilters.day90);
        VistaPage.validateCreatedDateFilter();
        VistaPage.removeCreatedDateFilter();
    });


    it('should add and remove a stage filter', { tags: ['stageFilter'] }, () => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        VistaPage.addStageFilter(vistaData.StageFilter.inprogress.development);
        VistaPage.removeStageFilter();
    });


    it('should sort by different options', { tags: ['sorting'] }, () => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        VistaPage.clickSortMenu(vistaData.DefaultMenuOption.sort, vistaData.DefaultMenuOption.option);
        VistaPage.validateSortedOrder(vistaData.DefaultMenuOption.option);
    });

    it('should sort by search options', { tags: ['sorting'] }, () => {
        ExplorePage.clickExploreTab();
        ExplorePage.searchItem(exploreData.SearchTicket);
        VistaPage.typeSortedOrder(vistaData.DefaultMenuOption.option);
        VistaPage.validateSortedOrder(vistaData.DefaultMenuOption.option);
    })
});

