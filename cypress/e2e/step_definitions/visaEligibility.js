import {
  Given,
  When,
  Then,
}
  from "@badeball/cypress-cucumber-preprocessor";
const landingPage = require("../../pages/LandingPage");
const countryPage = require("../../pages/CountryPage");
const eligibilityPage = require("../../pages/EligibilityPage");
const purposePage = require("../../pages/PurposePage");



Given("User is on UK Government Visa check page", () => {
  cy.visit("/");
});

When("User selects their {string} of nationality", (country) => {
  landingPage.clickStartButton();
  countryPage.enterCountry(country);
  countryPage.clickContinueButton();
});

Then("User selects their visa category as Tourism", () => {
  purposePage.selectPurposeOfVisit();
  purposePage.clickContinueButton();
});

Then("{string} message should be displayed to user based on their nationality", (eligibility) => {
  eligibilityPage.checkEligibilityStatus(eligibility);
});
