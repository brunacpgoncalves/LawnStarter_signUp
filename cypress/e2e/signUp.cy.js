import { QuoteQuestionsPage } from '../pages/quoteQuestionsPage';
import { SchedulingPage } from '../pages/schedulingPage';
import { AccountPaymentPage } from '../pages/accountPaymentPage';
import { ExtraServicesPage } from '../pages/extraServicesPage'  
import { faker } from '@faker-js/faker';
import { signUpTestData as data } from '../data/signUpTestData';

const quote = new QuoteQuestionsPage();
const schedule = new SchedulingPage();
const pay = new AccountPaymentPage();
const extras = new ExtraServicesPage()

const startUrl =
  '/cart/contact-info/?address=1016%20Kirk%20Street%2C%20Orlando%2C%20FL%2032808%2C%20Orlando%2C%20FL%2032808&name=Jay+Doe&phone=999-999-9999&intent=bushTrimming&googlePlace=true';

describe('Signup happy path', () => {
  it('quote → plan (every 2 months) → start date → account & payment', () => {
    cy.visit(startUrl);

    quote.selectFullYard();
    quote.setShrubsLessThan5(3);
    quote.setShrubs5to10(0);
    quote.setShrubsMoreThan10(0);
    quote.submit();

    schedule.selectEvery2Months();
    schedule.setStartDate('Oct 04, 2025');
    schedule.continue();

    cy.url().should('include', '/account-and-payment');

    const uniqueEmail = faker.internet
      .email({ firstName: 'test', provider: 'example.com' })
      .toLowerCase();

    pay.typeEmail(uniqueEmail)
    pay.fillCardDetails(data.card.number, data.card.expiry, data.card.cvc);
    pay.agreeToTerms()                  
    pay.submit()

    extras.clickNoThanks()

    cy.location('host').should('eq', 'dev-legacy-my.lawnstarter.com')
    cy.location('pathname').should('eq', '/onboarding/property-info')
  })
})







