
describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('navigate to admin page', () => {
        // cy.on('uncaught:exception', (err, runnable) => {
        //     throw err
        // })
        cy.get('.nav-item .link').contains('Admin').click();
        cy.url().should('eq', 'http://localhost:3000/admin')
    })

    it('navigate to employee page', () => {
        cy.get('.nav-item .link').contains('Employee').click();
        cy.url().should('eq', 'http://localhost:3000/employee')
    })

})
