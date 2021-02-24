describe('login test', ()=> {
    it('visit gallery page', ()=> {
        cy.visit("/")
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
}) 
     it("email input is empty", ()=> {
     cy.get('#email').type('');
     cy.get('#password').type('12345678');
     cy.get('button').click();
})
})