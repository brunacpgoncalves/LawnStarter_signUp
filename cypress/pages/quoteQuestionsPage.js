import { QuoteQuestionsLoc as L } from '../locators/quoteQuestionsPage.locators'

export class QuoteQuestionsPage {
    assertLoaded() {
    cy.contains(/Where on the property\?/i).should('be.visible')
  }
  
  selectFullYard()  { cy.get(L.fullYard).click() }
  selectFrontYard() { cy.get(L.frontYard).click() }
  selectBackYard()  { cy.get(L.backYard).click() }
  selectLeftSide()  { cy.get(L.leftSide).click() }
  selectRightSide() { cy.get(L.rightSide).click() }

  setShrubsLessThan5(n)  { this.openAndPick(L.shrubsLessThan5Input,   n) }
  setShrubs5to10(n)      { this.openAndPick(L.shrubs5to10Input, n) }
  setShrubsMoreThan10(n) { this.openAndPick(L.shrubsMoreThan10Input,  n) }

  openAndPick(controlSelector, value) {
  cy.get(controlSelector).scrollIntoView().click()          
  cy.get(L.openListbox).first().should('be.visible')        
    .contains(L.optionByRole, String(value))
    .click()
  cy.get(L.openListbox).should('not.exist')
}

  submit() {
    cy.get(L.getQuoteBtnText).closest('button').scrollIntoView().click()
  }
}
