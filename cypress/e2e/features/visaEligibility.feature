Feature: UK Visa Requirement Check

    Check if Citizen of specific countries requires a Visitor Visa to enter the UK.

    Scenario Outline: Check if a Tourist Visa is required for nationals

        Given User is on UK Government Visa check page
        When User selects their <country> of nationality
        And User selects their visa category as Tourism
        Then <eligibility> message should be displayed to user based on their nationality

        Examples:

            | country        |               eligibility                    |
            | 'USA'          | 'You will not need a visa to come to the UK' |
            | 'South Africa' | 'You’ll need a visa to come to the UK'       |
            | 'France'       | 'You will not need a visa to come to the UK' |
            | 'Afghanistan'  | 'You’ll need a visa to come to the UK'       |
            | 'Romania'      | 'You will not need a visa to come to the UK' |
            | 'China'        | 'You’ll need a visa to come to the UK'       |

