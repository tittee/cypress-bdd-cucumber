import * as setting from './settings.js';

class ContactPage {
  static visitContactPage() {
    cy.visit(setting.TEST_URL);
  }

  static fillContactForm() {
    cy.get(setting.INPUT_NAME).type('Wittawat Kittiwarabud');
    cy.get(setting.INPUT_EMAIL).type('tee@icweb.co.th');
    cy.get(setting.INPUT_TEL).type('+66656494291');
    cy.get(setting.SELECT_CLICK).click();
    cy.get(setting.SELECT_SUBJECT).contains('Website Development').click();
    cy.get(setting.INPUT_MESSAGE).type('Cypress demo contact form');
  }

  static submitForm() {
    cy.get(setting.SUBMIT_BUTTON).click();
  }

  static showPopup() {
    cy.get(setting.POPUP_CONTACT)
      .should('be.visible')
      .wait(1000)
      .contains('Attention Much Appreciated!');
  }

  static closeClickPopup() {
    cy.get(setting.BUTTON_POPUP_CLOSE).click();
  }
}

export default ContactPage;
