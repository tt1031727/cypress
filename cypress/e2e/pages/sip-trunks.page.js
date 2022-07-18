class SIPTrunksPage {
    logoPhilipsView() {
        return cy.get('[alt*="philips"]').then(($el) => {
            Cypress.dom.isVisible($el) // true;
    })
    }
}
export default SIPTrunksPage