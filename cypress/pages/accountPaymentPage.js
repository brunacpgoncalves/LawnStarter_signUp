import { AccountPaymentLoc as L } from '../locators/accountPaymentPage.locators';

const withinIframe = (iframeSelector, fn) => {
  cy.get(iframeSelector)
    .should('exist')
    .find('iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
    .within(fn);
};

export class AccountPaymentPage {
  typeEmail(email) {
    cy.get(L.emailInput).clear().type(email);
  }

  fillCardDetails(cardNumber, expiry, cvc) {
    withinIframe(L.stripe.cardNumberFrame, () => {
      cy.get(L.stripe.numberInput).type(cardNumber, { delay: 0 });
    });

    withinIframe(L.stripe.cardExpiryFrame, () => {
      cy.get(L.stripe.expiryInput).type(expiry, { delay: 0 }); 
    });

    withinIframe(L.stripe.cardCvcFrame, () => {
      cy.get(L.stripe.cvcInput).type(cvc, { delay: 0 });
    });
  }

  agreeToTerms() {
  cy.contains(L.tosRowText)
    .scrollIntoView()
    .parentsUntil('form').parent()
    .find(L.checkboxByRole)
    .first()
    .click({ force: true });

    cy.get(L.checkboxChecked).should('exist');
  }

  submit() {
  cy.get(L.submitBtn)
    .scrollIntoView()
    .should('be.visible')
    .click();
}
}
