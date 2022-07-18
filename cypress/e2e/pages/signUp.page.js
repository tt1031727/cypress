class SignUpPage {
    
    createAccBtn() {
        return cy.get('[type="submit"]');
    }
    hintIsVisible(){
        return cy.get('[id="full_name_error"]')
    }

    getLoginUserName(){
        return cy.get('#username');
    }

    getRegisterButton() {
        return cy.get('.woocommerce-Button');
    }

    passField() {
        return cy.get('[id="password"]');
    }
    passFieldHiden() {
    return cy.get('[id="password"]')
    

    }
  
    passShowBtn() {
        return cy.get('[data-icon="eye-slash"]');
    }
}
    export default SignUpPage