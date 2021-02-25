describe('login test', ()=> {
    it('visit gallery page', ()=> {
        cy.visit("/")
    })
    it('login', ()=> {
        cy.get("a[href='/login']").click()
}) 
     it("email input is empty", ()=> {
     cy.get('#email').type('').clear()
     cy.get('#password').type('12345678').clear()
     cy.get('button').click()
})
    it("password input is empty", ()=> {
        cy.get('#email').type('branatest@test.com').clear();
        cy.get('#password').type('').clear()
        cy.get('button').click()
        })

        it('wrong email', ()=> {
            cy.get('#email').type('brnanaana@test.com').clear()
            cy.get('#password').type('12345678').clear()
            cy.get('button').click()
        })
        it('wrong password', ()=> {
            cy.get('#email').type('branatest@test.com').clear()
            cy.get('#password').type('12311245').clear()
            cy.get('button').click()
        })
        it('wrong password', ()=> {
            cy.get('#email').type('').clear()
            cy.get('#password').type('').clear()
            cy.get('button').click()
        })    
 })