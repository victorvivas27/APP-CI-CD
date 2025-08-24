

describe('App', () => {
    it('should render the app', () => {
        cy.visit('/')
        cy.get('h1').should('have.text', 'Vite + React')
    })
})