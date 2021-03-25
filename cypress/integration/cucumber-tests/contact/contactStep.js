import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ContactPage from './contactPage';

Given('I open contact page', () => {
  ContactPage.visitContactPage();
});

When('I fill contact form', () => {
  ContactPage.fillContactForm();
});

When('I click on send from', () => {
  ContactPage.submitForm();
});
