
export const getLatestMessageId = () => {
    return cy.fixture('Mailinator.json').then((config) => {
        return cy.request({
            method: 'GET',
            url: config.emailListUrl,
        }).then((response) => {
            expect(response.status).to.eq(200);

            if (!response.body.msgs || response.body.msgs.length === 0) {
                return cy.wrap(null);
            }

            const messageId = response.body.msgs[0].id;
            cy.log('Extracted Message ID:', messageId);
            return cy.wrap(messageId);
        });
    });
};


export const getOtpFromMessage = (messageId) => {
    if (!messageId) {
        cy.log('No message ID found');
        return cy.wrap(null);
    }

    return cy.fixture('Mailinator.json').then((config) => {
        const otpUrl = `${config.messageUrl}/${messageId}?token=4df54826df654f05ad89b057ef8573db`;

        return cy.request({
            method: 'GET',
            url: otpUrl,
        }).then((otpResponse) => {
            expect(otpResponse.status).to.eq(200);

            const emailBody = otpResponse.body.parts?.[0]?.body;
            if (!emailBody) {
                cy.log('Email body not found in response');
                return cy.wrap(null);
            }

            const otpRegex = /\b\d{6}\b/;
            const otpCode = emailBody.match(otpRegex)?.[0];

            if (!otpCode) {
                cy.log('OTP not found in email body');
                return cy.wrap(null);
            }

            cy.log('Extracted OTP:', otpCode);
            return cy.wrap(otpCode);
        });
    });
};



export const getLatestOtp = () => {
    return getLatestMessageId().then((messageId) => {
        if (!messageId) {
            cy.log('No message ID received');
            return cy.wrap(null);
        }
        return getOtpFromMessage(messageId);
    }).then((otp) => {
        if (!otp) {
            throw new Error('Failed to retrieve OTP');
        }
        return cy.wrap(otp);
    });
};