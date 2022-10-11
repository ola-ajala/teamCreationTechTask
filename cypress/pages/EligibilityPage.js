//const { contains } = require("cypress/types/jquery");

class eligibilityPage {

    elements = {

        eligibilityStatus1: () => cy.get('#result-info h2:nth-child(1)'),
        continueButton3: () => cy.get('.gem-c-button--bottom-margin'),
        additionalDetail: () => cy.get('#response-1'),
        continueButton4: () => cy.get('.gem-c-button--bottom-margin'),
        eligibilityStatus2: () => cy.get('#result-info h2:nth-child(1)'),
        bodyElement: () => cy.get('body')

    }

    checkEligibilityStatus() {

        let visaNotRequiredResponse = 'You will not need a visa to come to the UK'
        let visaRequiredResponse = 'You’ll need a visa to come to the UK'

        cy.get('body').then($body => {
            if ($body.find('.gem-c-button--bottom-margin').length > 0) {
                cy.get('#response-1').click()
                cy.get('.gem-c-button--bottom-margin').click()
                cy.get('#result-info h2:nth-child(1)').should('contain', visaRequiredResponse)
            } else {
                console.log($body.find('.gem-c-button--bottom-margin').length)
                cy.get('#result-info h2:nth-child(1)').should('contain', visaNotRequiredResponse)
           }
       })
    }

}

module.exports = new eligibilityPage();
