# LawnStarter_signUp

# Getting Started

## Prerequisites

- **Node.js** ≥ 18 (developed & tested with **Node 22.18.0**)
- **npm** or **yarn** 
- **Cypress** ≥ 15 (developed & tested with **Cypress 15.3.0**).  
  Cypress versions older than 10 will **not** work due to breaking changes in folder structure/config.

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/brunacpgoncalves/LawnStarter_signUp.git
   cd LawnStarter_signUp

2. **Install dependencies**
npm install
or
yarn install

3. **Open Cypres in interactive mode**: npx cypress open or **Run Cypress in headless mode**: npx cypress run

4. **Example Run**: npx cypress run --spec "cypress/e2e/signUp.cy.js"

# Project Structure
cypress/
 ├── data/                      # Test data
 │   └── signUpTestData.js
 ├── e2e/                       # Test specs
 │   └── signUp.cy.js
 ├── locators/                  # Page locators
 │   ├── accountPaymentPage.locators.js
 │   ├── extraServicesPage.locators.js
 │   ├── quoteQuestionsPage.locators.js
 │   └── schedulingPage.locators.js
 ├── pages/                     # Page objects
 │   ├── accountPaymentPage.js
 │   ├── extraServicesPage.js
 │   ├── quoteQuestionsPage.js
 │   └── schedulingPage.js
 └── support/
     └── commands.js
     
- locators/ → Central place for selectors.

- pages/ → Page Object Model (POM) classes, each wrapping locators + actions.

- data/ → Minimal static test data (e.g., card details). Dynamic values (like email) come from faker.js.

# Project Overview

This project contains Cypress end-to-end tests that automate the LawnStarter signup flow.

# Test Scope

The **sign up happy-path** flow covered:

- Quote Questions – Select property info
- Scheduling – Choose service frequency and start date.
- Account & Payment – Enter email, card details, agree to Terms of Service, submit.
- Extra Services – Skip upsell with “No Thanks”.
- Onboarding Redirect – Verify successful redirect to property info page.

# Notes

- Screenshots and videos are automatically saved on failure (cypress/screenshots, cypress/videos).

- All tests run against https://dev-signup-web.lawnstarter.com - configured in cypress.config.js.

- Pop-ups like "Save Card" may appear in some browsers but do not block automation.

- No cy.intercept() or network stubbing is used — tests rely purely on UI behavior.

- Runtime ~20–25s per full happy-path run.

- For flakiness or faster execution, network intercepts could be added later.

