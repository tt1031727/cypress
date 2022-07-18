
import SignUpPage from '../e2e/pages/signUp.page';
import ContactUsPage from './pages/contactUs.page';
import MainPage from './pages/main.page';
import SignInPage from './pages/signIn.page';
import SIPTrunksPage from './pages/sip-trunks.page';
const signUpPage = new SignUpPage();
const mainPage = new MainPage();
const signInPage = new SignInPage();
const sIPTrunksPage = new SIPTrunksPage();
const contactUs = new ContactUsPage();
describe('Test for telnyx', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900)
    cy.visit('https://telnyx.com/')
   
  })

  it('Checking that the tooltip is visible to the user when trying to leave the field blank.', () => {
    mainPage.tryForFreeBtn().click()
    cy.wait(2000)
    signUpPage.createAccBtn().click()
    signUpPage.hintIsVisible().should('be.visible')
    cy.contains('This field is required.')
  })

  it('Check for availability of a support number for the Poland region.', () => {
    mainPage.talkToExpertBtn().click()
    contactUs.polandNumber().contains('+48 22 153 00 79')


  })
  it('Checking that the reset password button is clickable.', () => {
    mainPage.SignInBtn().click()
    signInPage.forgotPassBtn().click()
    signInPage.emFieldReset().type('test12345@gmail.com')
    cy.wait(2000)
    signInPage.resetBtn().should('not.be.disabled')
})

  it('Checking that characters are hidden when entering a password.', () => {
    mainPage.tryForFreeBtn().click()
    cy.wait(2000)
    signUpPage.passField().type('test1234')
    signUpPage.passFieldHiden().screenshot()
})

it('checking that the footer contains the text "© Telnyx LLC, 2022. All rights reserved.".', () => {
  mainPage.SignInBtn().click()
  signInPage.footerText().contains('© Telnyx LLC, 2022. All rights reserved.')
})
})
