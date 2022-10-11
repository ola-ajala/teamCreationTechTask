class countryPage {

  elements = {
      countrySelector: () => cy.get('.govuk-select'),
      continuebtn1: () => cy.get('.gem-c-button--bottom-margin')
  }

  enterCountry(country) {
      this.elements.countrySelector().select(country);
  }

  clickContinueButton() {
      this.elements.continuebtn1().click();
  }

}

module.exports = new countryPage();
