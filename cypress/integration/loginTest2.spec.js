describe('login test', ()=> {
    it('visit gallery page', ()=> {
        cy.visit("/")
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
}) 
     it("password input is empty", ()=> {
     cy.get('#email').type('branatest@test.com');
     cy.get('#password').type('');
     cy.get('button').click();
})
})