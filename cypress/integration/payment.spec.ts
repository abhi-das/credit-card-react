
describe('Credit card app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Scenario: show error on invalid card number', () => {
        cy.get('#creditCardNumberField').type('4012888888881882');
        cy.get('form').submit();
        cy.get('.field-error').should('have.text', 'Not a valid card number!')
    })

    it('Scenario: show error on wrong card number', () => {
        cy.get('#creditCardNumberField').type('5555555555554441');
        cy.get('img').should('have.attr', 'src' ).and('include', 'https://sumup-op-hiring-test.s3.eu-west-1.amazonaws.com/resources/master.svg')
        cy.get('form').submit();
        cy.get('.field-error').should('have.text', 'Card number not accepted!')
    })

    it('Scenario: no error, valid card number', () => {
        cy.get('#creditCardNumberField').type('378282246310005');
        cy.get('form').submit();
        cy.get('.field-error').should('not.exist');
    })

})
