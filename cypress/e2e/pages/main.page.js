class MainPage {
    tryForFreeBtn() {
        return cy.get('[type="submit"]');
    }
    SignInBtn() {
        return cy.get('[href="https://portal.telnyx.com/"][class*="s "]');
    }

    productBtn() {
        return cy.get('//span[text()="Products"]/parent::span');
    }

    sIPBtn() {
        return cy.get('//a[@class="sc-f97529d6-0 bjUuRN mchNoDecorate"][@href="/products/sip-trunks"]')
    }

    talkToExpertBtn() {
        return cy.get('[class="sc-9d98fd33-7 sc-9d98fd33-9 kpJVrZ ilKAnW"]')
    }

    philipsLogo() {
        return cy.get('[src*="customer-logo_philips_black.svg?h=35"]')
    }
    
}

        export default MainPage