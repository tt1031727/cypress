class SignInPage {
    emField() {
        return cy.get("//div[contains(text(), 'Required')]/preceding-sibling::div/input[@name='email']")
        
    }
    passField() {
        return cy.get('[name="password"]')
    }

    logInBtn() {
        return cy.get('[class*="LoginButton-fhXOmx"]')
    }

    forgotPassBtn() {
        return cy.get('[href="/#/login/password-reset"]')
    }

    emFieldReset() {
        return cy.get('[class="ui-reactv2-input"]')
    }
    
    resetBtn() {
        return cy.get('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]')
    }

    footerText() {
        return cy.get('[class="Divider_content-tx-ZGzgwU"]')
    }

    
    
}
export default SignInPage