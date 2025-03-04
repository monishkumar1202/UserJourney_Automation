import ExplorePage from "../../pages/ExplorePage";
import Loginpagedev from "../../pages/Loginpagedev";
import NewWorkPage from "../../pages/Components/NewWorkpage";
import DeletePage from "../../pages/Tickets/DeletedTicketpage";
import { getLatestOtp } from "../../support/readOtp";


describe('pre exe', () => {

  it('Verify the Ticket Successfully delete', () => {

    cy.visit('https://app.devrev.ai/test-demo1');
    cy.fixture('loginData').then((loginData) => {
      Loginpagedev.typeEmail(loginData.User01.email);
      Loginpagedev.clickLoginSubmit();
      cy.wait(2000);
    })
    getLatestOtp().then((otp) => {
      Loginpagedev.typeOtp(otp);
      Loginpagedev.clickOtpSubmit();
    })
    cy.fixture('ExplorePage').then((data) => {
      ExplorePage.clickExploreTab();
      ExplorePage.searchItem(data.SearchTicket);
    })
    cy.fixture('Ticket').then((data) => {
      NewWorkPage.clickNewWorkButton();
      NewWorkPage.typeTitle(data.NewTicket.titlename);
      NewWorkPage.typeDescription(data.NewTicket.des);
      NewWorkPage.selectAppliesToPart(data.NewTicket.part);

      //    Create Multiples Tickets    
      // NewWorkPage.CreateMultipleButton();
      // NewWorkPage.clickSubmitButton();

    })
  });
})

