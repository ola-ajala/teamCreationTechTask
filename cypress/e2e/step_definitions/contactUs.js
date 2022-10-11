import {
  Given,
  When,
  Then,
}
  from "@badeball/cypress-cucumber-preprocessor";
const teamCreationPage = require("../../pages/TeamCreation");


   let companyName = 'testCompany';
   let address = 'testAddress';
   let email = 'test@test.com';
   let initial = 'Mr.'



Given("User is on teamCreationTech Homepage", () => {
  cy.visit("http://www.teamcreationtech.com");
});

When("User selects contact us button", () => {
  teamCreationPage.clickOnContactUsButton();
});

When("User enters their details leaving a mandatory field blank", () => {

  teamCreationPage.enterCompanyName(companyName)
  teamCreationPage.enterAddress(address);
  teamCreationPage.enterEmail(email);
  teamCreationPage.enterInitial(initial);

});

When("User submits the form", () => {
  teamCreationPage.clickSubmitButton();
});

Then("This field is required error message should be displayed", () => {
  teamCreationPage.errorMessage().should('contain', 'required');
});

When("User selects Get In Touch button", () => {
  teamCreationPage.clickGetInTouchButton();
});

Then("Team Creation Tech Contact E-mail is displayed", () => {
  teamCreationPage.getContactEmail().should('contain', 'recruitment@teamcreation.co.uk');
});

Then("Get In Touch page should be displayed", () => {
  cy.url().should('include', 'teamcreationtech.com');
});


