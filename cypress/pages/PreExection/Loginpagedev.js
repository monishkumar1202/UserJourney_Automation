class loginPage1 {

    get emailInput() {
        return 'input[inputmode="email"]';
    }

    get submitButton() {
        return '[class="auth0-lock-submit"]';
    }

    get otpInput() {
        return '[class="auth0-lock-input-block auth0-lock-input-vcode"] input';
    }

    get sumbitOtpButton() {
        return '[name="submit"]';
    }


    // typeEmail(email, loginUrl) {
    //     return cy.origin(loginUrl, { args: { email, selector: this.emailInput } },
    //         ({ email, selector }) => {
    //             cy.get(selector).type(email);
    //         }
    //     );
    // }



    // typeOtp(otp, loginUrl) {
    //     return cy.origin(loginUrl, { args: { otp, selector: this.otpInput } },
    //         ({ otp, selector }) => {
    //             cy.get(selector).click().type(otp);
    //         }
    //     )
    // };


    // clickLoginSubmit(loginUrl) {
    //     return cy.origin(loginUrl, { args: { selector: this.submitButton } },
    //         ({ selector }) => {
    //             cy.get(selector).click();
    //         }
    //     );
    // }


    // clickOtpSubmit(loginUrl) {
    //     return cy.origin(loginUrl, { args: { selector: this.sumbitOtpButton } },
    //         ({ selector }) => {
    //             cy.get(selector).click();
    //         }
    //     );
    // }

    typeEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    typeOtp(otp) {
        cy.get(this.otpInput).click().type(otp);
    }

    clickLoginSubmit() {
        cy.get(this.submitButton).click();
    }

    clickOtpSubmit() {
        cy.get(this.sumbitOtpButton).click();
    }

}


module.exports = new loginPage1();