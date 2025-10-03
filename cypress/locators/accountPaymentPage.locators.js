export const AccountPaymentLoc = {
  emailInput:        '[data-testid="text-input-email"], #email',
  stripe: {
    cardNumberFrame: '#card-number',
    cardExpiryFrame: '#card-expiry',
    cardCvcFrame:    '#cvc',
    numberInput:     'input[name="cardnumber"], input[data-elements-stable-field-name="cardNumber"]',
    expiryInput:     'input[name="exp-date"], input[data-elements-stable-field-name="cardExpiry"]',
    cvcInput:        'input[name="cvc"], input[data-elements-stable-field-name="cardCvc"]',
  },

  tosRowText:       'By checking you agree',            
  checkboxByRole:   '[role="checkbox"]',                
  checkboxChecked:  '[role="checkbox"][aria-checked="true"]',

  submitBtnContainer: '[data-testid="button-container"]',
  submitBtn:          '[data-testid="button"]',            
  submitBtnText:      'Book now for $0 today', 
};