
const getLatestMessageId = () => {
    return cy.fixture('Mailinator.json').then((config) => {
        return cy.request({
            method: 'GET',
            url: config.emailListUrl,
        }).then((response) => {
            expect(response.status).to.eq(200);
            const messageId = response.body.msgs?.[0]?.id;
            cy.log('Extracted Message ID:', messageId);
 
            if (!messageId) {
                throw new Error(`No messages found in Mailinator`);
            }
 
            return cy.wrap(messageId);
        });
    });
};
 
const getOtpFromMessage = (messageId) => {
    return cy.fixture('Mailinator.json').then((config) => {
        const otpUrl = `${config.messageUrl}/${messageId}?token=4df54826df654f05ad89b057ef8573db`;
        
        return cy.request({
            method: 'GET',
            url: otpUrl,
        }).then((otpResponse) => {
            expect(otpResponse.status).to.eq(200);
            
            const emailBody = otpResponse.body.parts?.[0]?.body;
            
            if (!emailBody) {
                throw new Error('Email body not found in response');
            }
 
            const otpRegex = /\b\d{6}\b/;
            const otpCode = emailBody.match(otpRegex)?.[0];
            
            if (!otpCode) {
                throw new Error('OTP not found in email body');
            }
 
            cy.log('Extracted OTP:', otpCode);
            return cy.wrap(otpCode);
        });
    });
};
 
const getLatestOtp = () => {
    return getLatestMessageId().then((messageId) => {
        return getOtpFromMessage(messageId);
    });
};
 
export default {

    getLatestMessageId,
    getOtpFromMessage,
    getLatestOtp
};