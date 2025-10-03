import { ExtraServicesLoc as L } from '../locators/extraServicesPage.locators';

export class ExtraServicesPage {
  clickNoThanks() {
    cy.get(L.noThanksBtn)
      .should('be.visible')
      .click();  
  }
}


