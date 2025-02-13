

class BasePage {


    visit(url) {
        cy.visit(url);
    }

    getElement(selector) {
        return cy.get(selector);
    }

    clickElement(selector) {
        this.getElement(selector).click();
    }

    typeText(selector, text) {
        this.getElement(selector).type(text);
    }

    assertText(selector, expectedText) {
        this.getElement(selector).should('have.text', expectedText);
    }

    assertTextClick(selector, expectedText) {
        this.getElement(selector).should('have.text', expectedText).click();
    }

    assertVisible(selector) {
        this.getElement(selector).should('be.visible');
    }

    assertNotVisible(selector) {
        this.getElement(selector).should('not.be.visible');
    }

    assertContainsText(selector, text) {
        this.getElement(selector).should('contain.text', text);
    }

    assertNotContainsText(selector, text) {
        this.getElement(selector).should('not.contain.text', text);
    }
    
}

module.exports = BasePage;