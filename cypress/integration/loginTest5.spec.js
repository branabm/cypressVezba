describe('login test',()=> {
    it('visit gallery page',()=> {
        cy.visit("/")
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
    })
    it('wrong password', ()=> {
        cy.get('#email').type('')
        cy.get('#password').type('')
        cy.get('button').click()
    })

})