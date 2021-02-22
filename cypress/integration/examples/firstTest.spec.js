


describe("Login test", () => { 
    it('visit gallery page', () => {
        cy.visit('/')
        cy.wait(10000)
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
    })
    it("logg in", ()=> {
        cy.get('#email').type('branaedit@test.com')
        cy.get('#password').type('12345678')
        cy.get('button').click()
    })
    it('logout', ()=> {
        cy.get("a[role='button ']").click()
    } )


})
