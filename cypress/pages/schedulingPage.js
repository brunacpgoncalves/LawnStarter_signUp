import { SchedulingLoc as L } from '../locators/schedulingPage.locators'

export class SchedulingPage {
  selectEvery2Months() {
    cy.contains(L.planButton, L.planEvery2MonthsText, { matchCase: false })
      .scrollIntoView()
      .click()
  }

  setStartDate(dateStr) {
    cy.get(L.startDateInput)
      .filter(':visible')
      .first()
      .scrollIntoView()
      .click()
      .clear()
      .type(`${dateStr}{enter}`)
  }

  continue() {
    cy.contains(L.continueBtnText, 'Continue')
      .closest('button')
      .should('be.enabled')
      .click()
  }
}
