describe ('registration' , ()=> {
    it( 'visit gallery page' , () => {
        cy.visit("/")
    })
    it('registrationPage', ()=> {
        cy.get('li:nth-of-type(2) > .nav-buttons.nav-link').click()
    })
    it('Password and confirm password must be the same', ()=> {
        cy.get('#first-name').type('Brana')
        cy.get('#last-name').type('Mila')
        cy.get('#email').type('branatest@test.com')
        cy.get('#password').type('123456789')
        cy.get('#password-confirmation').type('12345678')
        cy.get('input[type=checkbox]').check()
        cy.get('button[type=submit]').click()

    })
})