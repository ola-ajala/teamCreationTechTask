class teamCreationPage {

    elements = {

        contactUs: () => cy.get('#main-nav li:nth-child(6)'),
        companyNameField: () => cy.get('.iphorm_94_6-input-wrap > input'),
        addressField: () => cy.get('.iphorm_94_1-input-wrap > input'), 
        emailField: () => cy.get('.iphorm_94_3-input-wrap > input'), 
        errorField: () => cy.get('.iphorm-element-spacer .iphorm-error'), 
        getInTouch: () => cy.get('#bit_postlist-5 > div > div'), 
        submit: () => cy.get('.iphorm-submit-input-wrap-94 > button'),
        initial: () => cy.get('.iphorm_94_7-input-wrap > input'),
        contactEmail: () => cy.get("[data-sk='tooltip_parent']"),
    }

    clickOnContactUsButton() {
        this.elements.contactUs().click();
    }

    enterCompanyName(companyName) {
        this.elements.companyNameField().scrollIntoView()
        this.elements.companyNameField().type(companyName);
    }

    enterAddress(address) {
        this.elements.addressField().type(address);
    }

    enterEmail(email) {
        this.elements.emailField().type(email);
    }

    clickGetInTouchButton() {
        this.elements.getInTouch().click();
    }

    clickSubmitButton() {
        this.elements.submit().click();
    }

    errorMessage() {
       return this.elements.errorField();
    }

    getContactEmail() {
       return this.elements.contactEmail();
    }

    enterInitial(initials) {
        this.elements.initial().type(initials);
    }
    
}

module.exports = new teamCreationPage();
