describe('login test', ()=> {
    it('visit gallery page', ()=> {
        cy.visit("/")
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
    })
    it('wrong email', ()=> {
        cy.get('#email').type('brnanaana@test.com')
        cy.get('#password').type('12345678')
        cy.get('button').click()
    })
})