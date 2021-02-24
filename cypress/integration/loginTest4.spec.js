describe('login test',()=> {
    it('visit gallery page',()=> {
        cy.visit("/")
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
    })
    it('wrong password', ()=> {
        cy.get('#email').type('branatest@test.com')
        cy.get('#password').type('12311245')
        cy.get('button').click()
    })

})