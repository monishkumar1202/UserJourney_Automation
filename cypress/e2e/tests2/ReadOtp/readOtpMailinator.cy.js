import Loginpagedev from "../../../pages/PreExection/Loginpagedev";
import readOTP from "../../../support/readOtp";


describe('Login Test', () => {

  beforeEach(() => {

    cy.fixture('loginData').then((data) => {
      cy.visit(data.prodUrl);
    })
  })

  it('Login with valid credentials', () => {
    cy.fixture('loginData').then((data) => {
      Loginpagedev.typeEmail(data.User01.email, data.loginUrl);
      Loginpagedev.clickLoginSubmit(data.loginUrl);

      readOTP.getLatestOtp().then((otp) => {
        Loginpagedev.typeOtp(otp);
        Loginpagedev.clickOtpSubmit();
      });
    });
  });
})
