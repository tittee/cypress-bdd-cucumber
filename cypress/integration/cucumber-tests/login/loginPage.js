const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SUBMIT_BUTTON = 'input[name="submit"]';
const ERROR_MSG = '.alert-error';

class LoginPage {
  static visitLoginPage() {
    cy.visit(URL);
  }

  static fillUsername(name) {
    cy.get(USERNAME).type(name);
  }

  static fillPassword(password) {
    cy.get(PASSWORD).type(password);
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click();
  }

  static showErrorMsg() {
    cy.get(ERROR_MSG).contains('Login and/or password are wrong');
  }
}

export default LoginPage;
