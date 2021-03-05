


describe("Login test", () => { 
    it('visit gallery page', () => {
        cy.visit('/')
       
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
    })
    it("logg in", ()=> {
        cy.get('#email').type('branaedit@test.com')
        cy.get('#password').type('12345678')
        cy.get('button').should("not.be.visible").click()
       // cy.url().should('eq','http://localhost:8000/user/1/edit')
    })
    it('logout', ()=> {
        cy.get("a[role='button ']").click()
    } )


})
