import Loginpagedev from "../../pages/Loginpagedev";

describe('Login Test', () => {
    
    beforeEach(() => {
        cy.fixture('loginData').then((data) => {
            cy.visit(data.appUrl);
        });
    });

    it('Login with valid credentials', () => {
         cy.fixture('loginData').then((data) => {  
             Loginpagedev.typeEmail(data.validUser.email, data.loginUrl);
             Loginpagedev.clickLoginSubmit(data.loginUrl);
        });
    });
});
