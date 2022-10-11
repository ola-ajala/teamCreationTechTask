class landingPage {

  elements = {
      startbutton: () => cy.get('.govuk-button--start')
  }

  clickStartButton() {
      this.elements.startbutton().click();
  }

}

module.exports = new landingPage();
