Feature: Contacting TeamCreationTech

    User should be able to use the contact us form on teamCreationTech homepage.

    Scenario: User cannot submit contact us form when a mandatory field is left blank
        Given User is on teamCreationTech Homepage
        When User selects contact us button
        When User enters their details leaving a mandatory field blank
        And User submits the form
        Then This field is required error message should be displayed

    Scenario: Verify Team Creation Tech Contact E-mail is displayed on Contact Us Page
        Given User is on teamCreationTech Homepage
        When User selects contact us button
        Then Team Creation Tech Contact E-mail is displayed

    Scenario: User contacts Team Creation Tech via 'Get In Touch' button
        Given User is on teamCreationTech Homepage
        When User selects Get In Touch button
        Then Get In Touch page should be displayed

