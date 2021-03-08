describe("Login Test", () => {
    before(() => {
      cy.loginCommand('branatest@test.com', '12345678')
    })
    it('visit gallery', () => {
        cy.visit('/')
    })
})