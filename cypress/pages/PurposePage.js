class purposePage {

    elements = {

        purpose: () => cy.get('#response-0'),
        continuebtn2: () => cy.get('.gem-c-button--bottom-margin')
    }

    selectPurposeOfVisit() {
        this.elements.purpose().click();
    }

    clickContinueButton() {
        this.elements.continuebtn2().click();
    }

}

module.exports = new purposePage();
